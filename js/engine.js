/* =========================================================================
   WISE MIND: A DBT ADVENTURE
   Game engine: state, persistence, progression, badges, unlocks
   ========================================================================= */

const SAVE_KEY = 'wisemind_save_v1';
const BADGE_THRESHOLD = 2;
const PT_CORRECT = 25;
const PT_BOSS_ROUND = 30;
const PT_STAGE_BONUS = 100;
const MAX_HEARTS = 3;

const defaultState = () => ({
  character: null,
  points: 0,
  proficiency: {},       // skillId -> count of proficient uses
  badges: {},            // skillId -> true
  completedStages: [],   // stage ids
  stageProgress: {},     // stageId -> { challengesDone:[], bossDone:bool }
  featuresUnlocked: [],  // feature ids
  chosenPreset: null,
  version: 1
});

const Engine = {
  state: defaultState(),
  session: null, // current active challenge/boss session

  newGame(char) {
    this.state = defaultState();
    this.state.character = char;
    // Presets may bring premium items; unlock the features they depend on.
    const deps = featureDepsForAvatar(char.avatar);
    deps.forEach(f => this.unlockFeature(f));
    this.unlockNextStages();
    this.save();
  },

  load() {
    try {
      const raw = localStorage.getItem(SAVE_KEY);
      if (raw) {
        const s = JSON.parse(raw);
        if (s && s.character) this.state = Object.assign(defaultState(), s);
      }
    } catch (e) { console.warn('load failed', e); }
    return this.state.character ? this.state : null;
  },

  save() {
    try { localStorage.setItem(SAVE_KEY, JSON.stringify(this.state)); } catch (e) { console.warn('save failed', e); }
  },

  reset() {
    this.state = defaultState();
    this.session = null;
    localStorage.removeItem(SAVE_KEY);
  },

  /* ---- unlocks ---- */
  hasFeature(fid) { return this.state.featuresUnlocked.includes(fid); },
  unlockFeature(fid) {
    if (!this.hasFeature(fid)) this.state.featuresUnlocked.push(fid);
  },
  itemUnlocked(item) {
    if (!item) return true;
    if (item.defaultUnlock) return true;
    if (!item.lockedBy) return true;
    return this.hasFeature(item.lockedBy);
  },

  unlockNextStages() {
    // stage N unlocked when stage N-1 complete
    STAGES.forEach((s, i) => {
      const prev = STAGES[i - 1];
      if (prev && !this.state.completedStages.includes(prev.id)) return;
      // stage is available
    });
  },
  stageUnlocked(stage) {
    const idx = STAGES.indexOf(stage);
    if (idx === 0) return true;
    const prev = STAGES[idx - 1];
    return this.state.completedStages.includes(prev.id);
  },
  stageComplete(stage) { return this.state.completedStages.includes(stage.id); },

  /* ---- progression ---- */
  addProficiency(skillId, opts = {}) {
    const s = this.state.proficiency[skillId] || 0;
    this.state.proficiency[skillId] = s + 1;
    let badgeEarned = false;
    if (this.state.proficiency[skillId] >= BADGE_THRESHOLD && !this.state.badges[skillId]) {
      this.state.badges[skillId] = true;
      badgeEarned = true;
    }
    return { badgeEarned, skillId };
  },

  skillBadged(skillId) { return !!this.state.badges[skillId]; },
  moduleComplete(moduleId) {
    const mod = DBT_MODULES.find(m => m.id === moduleId);
    if (!mod) return false;
    return mod.skills.every(sk => this.state.badges[sk.id]);
  },

  recheckUnlocks() {
    // Feature unlocks tied to module completion / stage completion
    UNLOCK_FEATURES.forEach(f => {
      let ok = false;
      if (f.requires === 'stage7') ok = this.state.completedStages.includes('s7');
      else if (f.requires === 'stage8') ok = this.state.completedStages.includes('s8');
      else ok = this.moduleComplete(f.requires);
      if (ok) this.unlockFeature(f.id);
    });
    // Stage chain unlock
    STAGES.forEach((s, i) => {
      if (i > 0 && this.state.completedStages.includes(STAGES[i - 1].id)) {
        // next stage becomes reachable (locked state computed dynamically)
      }
    });
  },

  /* ---- challenge flow ---- */
  startChallenge(stageId, challengeId) {
    const stage = STAGE_BY_ID[stageId];
    const challenge = stage.challenges.find(c => c.id === challengeId);
    this.session = { type: 'challenge', stageId, challengeId, hearts: MAX_HEARTS };
    return { stage, challenge, hearts: MAX_HEARTS };
  },

  challengeAnswered(stageId, challengeId) {
    const prog = this.state.stageProgress[stageId] || { challengesDone: [], bossDone: false };
    return prog.challengesDone.includes(challengeId);
  },

  submitChallenge(optIdx) {
    const sess = this.session;
    const stage = STAGE_BY_ID[sess.stageId];
    const challenge = stage.challenges.find(c => c.id === sess.challengeId);
    const opt = challenge.options[optIdx];
    if (!opt) return null;
    const result = {
      correct: opt.correct,
      feedback: opt.fb,
      skill: opt.skill,
      badgeEarned: false,
      moduleComplete: null,
      featureUnlocked: null,
      points: 0,
      alreadyDone: this.challengeAnswered(sess.stageId, sess.challengeId)
    };
    if (opt.correct) {
      this.state.points += PT_CORRECT;
      result.points = PT_CORRECT;
      // mark done (award proficiency once per challenge)
      const prog = this.state.stageProgress[sess.stageId] || { challengesDone: [], bossDone: false };
      if (!prog.challengesDone.includes(challenge.id)) {
        prog.challengesDone.push(challenge.id);
        this.state.stageProgress[sess.stageId] = prog;
        if (opt.skill) {
          const p = this.addProficiency(opt.skill);
          result.badgeEarned = p.badgeEarned;
        }
      }
      const stageDone = stage.challenges.every(c => prog.challengesDone.includes(c.id));
      if (stageDone) this.completeBossUnlock(sess.stageId);
      const u = this.applyUnlockGains();
      result.moduleComplete = u.moduleComplete;
      result.featureUnlocked = u.featureUnlocked;
    } else {
      this.session.hearts -= 1;
      result.hearts = this.session.hearts;
      result.failed = this.session.hearts <= 0;
    }
    this.save();
    return result;
  },

  completeBossUnlock(stageId) {
    // boss becomes available when all challenges done (UI logic), nothing extra here
  },

  applyUnlockGains() {
    this.recheckUnlocks();
    const before = [];
    // detect newly completed modules
    const justModule = [];
    DBT_MODULES.forEach(m => {
      if (this.moduleComplete(m.id)) {
        const feat = UNLOCK_FEATURES.find(f => f.requires === m.id);
        if (feat && this.hasFeature(feat.id) && !this.state.featuresUnlocked.includes(feat.id + '') && false) {}
      }
    });
    // find new modules completed vs a stored flag
    const done = this.state.modulesDone || {};
    DBT_MODULES.forEach(m => {
      if (this.moduleComplete(m.id) && !done[m.id]) {
        done[m.id] = true;
        justModule.push(m.id);
      }
    });
    this.state.modulesDone = done;
    let featureUnlocked = null;
    if (justModule.length) {
      const m = justModule[justModule.length - 1];
      const feat = UNLOCK_FEATURES.find(f => f.requires === m.id);
      if (feat && !this.state.featuresUnlocked.includes(feat.id)) {
        this.unlockFeature(feat.id);
        featureUnlocked = feat.id;
      }
    }
    // stage-completion features
    ['s7', 's8'].forEach(sid => {
      if (this.state.completedStages.includes(sid)) {
        const feat = UNLOCK_FEATURES.find(f => f.requires === sid);
        if (feat && !this.state.featuresUnlocked.includes(feat.id)) {
          this.unlockFeature(feat.id);
          if (!featureUnlocked) featureUnlocked = feat.id;
        }
      }
    });
    return { moduleComplete: justModule[justModule.length - 1] || null, featureUnlocked };
  },

  /* ---- boss flow ---- */
  startBoss(stageId, which) {
    const stage = STAGE_BY_ID[stageId];
    const whichBoss = which === 'boss2' ? 'boss2' : 'boss';
    const boss = stage[whichBoss];
    if (!boss) return null;
    this.session = { type: 'boss', stageId, which: whichBoss, roundIndex: 0, hearts: MAX_HEARTS };
    return { stage, boss, round: boss.rounds[0], roundIndex: 0, totalRounds: boss.rounds.length, hearts: MAX_HEARTS };
  },

  retryBossRound() {
    if (!this.session || this.session.type !== 'boss') return null;
    const stage = STAGE_BY_ID[this.session.stageId];
    const boss = stage[this.session.which];
    this.session.hearts = MAX_HEARTS;
    return { round: boss.rounds[this.session.roundIndex], roundIndex: this.session.roundIndex, hearts: MAX_HEARTS };
  },

  submitBossRound(optIdx) {
    const sess = this.session;
    const stage = STAGE_BY_ID[sess.stageId];
    const boss = stage[sess.which];
    const round = boss.rounds[sess.roundIndex];
    const opt = round.options[optIdx];
    if (!opt) return null;
    const result = { correct: opt.correct, feedback: opt.fb, skill: opt.skill, badgeEarned: false, moduleComplete: null, featureUnlocked: null, points: 0, bossComplete: false, nextRound: null, roundEnded: opt.correct, roundIndex: sess.roundIndex };
    if (opt.correct) {
      this.state.points += PT_BOSS_ROUND;
      result.points = PT_BOSS_ROUND;
      const p = this.addProficiency(opt.skill);
      result.badgeEarned = p.badgeEarned;
      sess.roundIndex += 1;
      sess.hearts = MAX_HEARTS;
      result.hearts = sess.hearts;
      if (sess.roundIndex < boss.rounds.length) {
        result.nextRound = boss.rounds[sess.roundIndex];
      } else {
        // boss complete
        result.bossComplete = true;
        this.state.points += PT_STAGE_BONUS;
        result.points += PT_STAGE_BONUS;
        const prog = this.state.stageProgress[sess.stageId] || { challengesDone: [], bossDone: false, boss2Done: false };
        if (sess.which === 'boss2') prog.boss2Done = true; else prog.bossDone = true;
        this.state.stageProgress[sess.stageId] = prog;
        const stageComplete = STAGES.find(x => x.id === sess.stageId).challenges.every(c => prog.challengesDone.includes(c.id))
          && prog.bossDone && (stage.boss2 ? prog.boss2Done : true);
        if (stageComplete && !this.state.completedStages.includes(stage.id)) this.state.completedStages.push(stage.id);
        const u = this.applyUnlockGains();
        result.moduleComplete = u.moduleComplete;
        result.featureUnlocked = u.featureUnlocked;
      }
    } else {
      sess.hearts -= 1;
      result.hearts = sess.hearts;
      result.failed = sess.hearts <= 0;
    }
    this.save();
    return result;
  },

  /* ---- stats ---- */
  stageStats() {
    const stats = STAGES.map(stage => {
      const prog = this.state.stageProgress[stage.id] || { challengesDone: [], bossDone: false, boss2Done: false };
      const hasBoss2 = !!stage.boss2;
      const totalSlots = stage.challenges.length + 1 + (hasBoss2 ? 1 : 0);
      const filled = prog.challengesDone.length + (prog.bossDone ? 1 : 0) + (hasBoss2 && prog.boss2Done ? 1 : 0);
      return {
        stage,
        unlocked: this.stageUnlocked(stage),
        complete: this.stageComplete(stage),
        challengesDone: prog.challengesDone.length,
        challengesTotal: stage.challenges.length,
        bossDone: prog.bossDone,
        boss2Done: !!prog.boss2Done,
        pct: filled / totalSlots
      };
    });
    return stats;
  },

  totalBadges() {
    let total = 0, earned = 0;
    DBT_MODULES.forEach(m => m.skills.forEach(s => { total++; if (this.state.badges[s.id]) earned++; }));
    return { total, earned };
  }
};

/* Feature dependencies for preset avatars */
function featureDepsForAvatar(avatar) {
  const deps = [];
  const check = (list, lockedBy) => {
    list.forEach(item => { if (item.id === (avatar[list === OUTFITS ? 'outfit' : (list === SHOES ? 'shoes' : 'accessory')]) && !item.defaultUnlock && item.lockedBy) deps.push(item.lockedBy); });
  };
  if (avatar.hair) { const h = HAIR_STYLES.find(x => x.id === avatar.hair); if (h && !h.defaultUnlock && h.lockedBy) deps.push(h.lockedBy); }
  check(OUTFITS, 'outfits'); check(SHOES, 'shoes'); check(ACCESSORIES, 'accessories');
  return deps;
}
