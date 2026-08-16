/* =========================================================================
   WISE MIND: A DBT ADVENTURE
   UI renderer and interactions
   ========================================================================= */

const UI = {
  view: 'title',
  params: {},
  creator: { name: '', gender: 'they', avatar: null, presetId: null },
  ctx: null, // audio context
  ambient: null,       // active soundscape controller { id, master, nodes, timers }
  ambientCfg: { id: null, volume: 70, muted: false },
  ambientOpen: false,
  worksheetsAge: 'teen',

  init() {
    this.initAmbient();
    try { const wa = localStorage.getItem('wsAge'); if (wa === 'teen' || wa === 'adult') this.worksheetsAge = wa; } catch (e) {}
    this.bindGlobal();
    const saved = Engine.load();
    const viewFromHash = (location.hash || '').replace(/^#\/?/, '');
    if (viewFromHash === 'movies' || viewFromHash.indexOf('movies/') === 0) {
      this.show('movies', { page: viewFromHash.split('/')[1] || 'orientation' });
    } else if (viewFromHash && ['map', 'coach', 'worksheets', 'badges', 'closet', 'quiz', 'dilemmas', 'validation', 'games', 'jeopardy', 'scramble', 'wordsearch', 'crossword', 'matching', 'charades'].includes(viewFromHash)) {
      this.show(viewFromHash);
    } else if (saved) {
      this.show('map');
    } else {
      this.show('title');
    }
    this.renderAll();
    window.addEventListener('hashchange', () => {
      const v = (location.hash || '').replace(/^#\/?/, '');
      if (v === 'movies' || v.indexOf('movies/') === 0) { this.show('movies', { page: v.split('/')[1] || 'orientation' }); return; }
      if (['map', 'coach', 'worksheets', 'badges', 'closet', 'quiz', 'dilemmas', 'validation', 'games', 'jeopardy', 'scramble', 'wordsearch', 'crossword', 'matching', 'charades'].includes(v)) this.show(v);
    });
  },

  /* ---------- audio ---------- */
  sound(type) {
    try {
      if (!this.ctx) this.ctx = new (window.AudioContext || window.webkitAudioContext)();
      const t = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.connect(gain); gain.connect(this.ctx.destination);
      if (type === 'correct') { osc.frequency.setValueAtTime(523, t); osc.frequency.setValueAtTime(784, t + 0.08); gain.gain.setValueAtTime(0.18, t); gain.gain.exponentialRampToValueAtTime(0.001, t + 0.25); osc.start(t); osc.stop(t + 0.3); }
      else if (type === 'wrong') { osc.type = 'triangle'; osc.frequency.setValueAtTime(220, t); gain.gain.setValueAtTime(0.15, t); gain.gain.exponentialRampToValueAtTime(0.001, t + 0.2); osc.start(t); osc.stop(t + 0.25); }
      else if (type === 'badge') { osc.frequency.setValueAtTime(660, t); osc.frequency.setValueAtTime(880, t + 0.1); osc.frequency.setValueAtTime(1320, t + 0.2); gain.gain.setValueAtTime(0.18, t); gain.gain.exponentialRampToValueAtTime(0.001, t + 0.4); osc.start(t); osc.stop(t + 0.45); }
      else if (type === 'click') { osc.frequency.setValueAtTime(440, t); gain.gain.setValueAtTime(0.08, t); gain.gain.exponentialRampToValueAtTime(0.001, t + 0.08); osc.start(t); osc.stop(t + 0.1); }
    } catch (e) {}
  },

  /* ---------- ambient soundscapes ---------- */
  mkNoise(ctx) {
    const len = Math.floor(ctx.sampleRate * 2);
    const buf = ctx.createBuffer(1, len, ctx.sampleRate);
    const d = buf.getChannelData(0);
    for (let i = 0; i < len; i++) d[i] = Math.random() * 2 - 1;
    return buf;
  },

  initAmbient() {
    try {
      const raw = localStorage.getItem('ambient');
      if (raw) {
        const c = JSON.parse(raw);
        if (c && typeof c.volume === 'number') this.ambientCfg = Object.assign({ id: null, volume: 70, muted: false }, c);
      }
    } catch (e) {}
    this.updateAmbient();
  },

  saveAmbient() {
    try { localStorage.setItem('ambient', JSON.stringify(this.ambientCfg)); } catch (e) {}
  },

  ambientGain() {
    const base = (this.ambientCfg.muted ? 0 : this.ambientCfg.volume / 100) * 0.9;
    return Math.max(0, base);
  },

  toggleAmbient(id) {
    if (this.ambient && this.ambient.id === id) {
      this.stopAmbient();
      this.ambientCfg.id = null;
    } else {
      this.startAmbient(id);
    }
    this.saveAmbient();
    this.updateAmbient();
  },

  startAmbient(id) {
    try {
      const sc = SOUNDSCAPES[id];
      if (!sc) return;
      this.stopAmbient(true);
      if (!this.ctx) this.ctx = new (window.AudioContext || window.webkitAudioContext)();
      if (this.ctx.state === 'suspended') this.ctx.resume();
      const master = this.ctx.createGain();
      master.gain.value = this.ambientGain();
      master.connect(this.ctx.destination);
      const ctrl = sc.start(this.ctx, master);
      this.ambient = { id, master, nodes: ctrl.nodes || [], timers: ctrl.timers || [] };
      this.ambientCfg.id = id;
      const a = AMBIENT.find(x => x.id === id);
      this.toast('🎵 ' + (a ? a.name : 'Soundscape') + ' playing', 'teal');
    } catch (e) {
      this.toast('Audio isn\'t available here.', '');
    }
  },

  stopAmbient(silent) {
    if (!this.ambient) return;
    const a = this.ambient;
    this.ambient = null;
    try {
      (a.timers || []).forEach(id => clearInterval(id));
      (a.nodes || []).forEach(n => { try { n.stop(); } catch (e) {} try { n.disconnect(); } catch (e) {} });
      if (a.master) { try { a.master.disconnect(); } catch (e) {} }
    } catch (e) {}
    if (!silent) this.ambientCfg.id = null;
  },

  setAmbientVolume(v) {
    this.ambientCfg.volume = Math.max(0, Math.min(100, isFinite(v) ? v : 70));
    if (this.ambient && this.ambient.master) {
      try { this.ambient.master.gain.setTargetAtTime(this.ambientGain(), this.ctx.currentTime, 0.05); } catch (e) {}
    }
    this.saveAmbient();
    this.updateAmbient();
  },

  setAmbientMute(m) {
    this.ambientCfg.muted = !!m;
    if (this.ambient && this.ambient.master) {
      try { this.ambient.master.gain.setTargetAtTime(this.ambientGain(), this.ctx.currentTime, 0.03); } catch (e) {}
    }
    this.saveAmbient();
    this.updateAmbient();
  },

  updateAmbient() {
    const root = document.getElementById('ambient-root');
    if (!root) return;
    const playing = this.ambient ? this.ambient.id : null;
    root.innerHTML = `<button class="ambient-fab ${this.ambient ? 'on' : ''}" data-act="ambient-open" title="Ambient soundscapes" aria-label="Ambient soundscapes">${this.ambient ? '🔊' : '🎵'}</button>
      ${this.ambientOpen ? `<div class="ambient-backdrop" data-act="ambient-close">
        <div class="ambient-panel">
          <button class="ambient-close" data-act="ambient-close">✕</button>
          <h3>🌙 Ambient Soundscape</h3>
          <p class="muted" style="margin:4px 0 14px">Fully generated in your browser — no audio files, no loops, no repetition.</p>
          <div class="ambient-list">
            ${AMBIENT.map(a => `<button class="ambient-item ${playing === a.id ? 'active' : ''}" data-act="ambient-toggle" data-id="${a.id}">
              <span class="ambient-emoji">${a.emoji}</span>
              <span class="ambient-meta"><b>${esc(a.name)}</b><i>${esc(a.desc)}</i></span>
              <span class="ambient-dot">${playing === a.id ? '⏹' : '▶'}</span>
            </button>`).join('')}
          </div>
          <div class="ambient-controls">
            <div class="ambient-volrow">
              <span>${this.ambientCfg.muted ? '🔇' : '🔊'}</span>
              <input type="range" min="0" max="100" step="1" value="${this.ambientCfg.volume}" data-act="ambient-vol" aria-label="Ambient volume">
              <span class="ambient-volnum">${this.ambientCfg.muted ? 0 : this.ambientCfg.volume}%</span>
            </div>
            <div class="btn-row" style="justify-content:center;margin-top:12px">
              <button class="btn ${this.ambientCfg.muted ? 'gold' : 'ghost'} sm" data-act="ambient-mute">${this.ambientCfg.muted ? '🔇 Unmute' : '🔇 Mute'}</button>
              <button class="btn ghost sm" data-act="ambient-stop">⏹ Stop</button>
            </div>
          </div>
        </div>
      </div>` : ''}`;
  },

  /* ---- speech narration (audio for the examples) ---- */
  speak(text) {
    try {
      if (!window.speechSynthesis || !window.SpeechSynthesisUtterance) {
        this.toast('Audio narration isn’t supported in this browser.', '');
        return;
      }
      window.speechSynthesis.cancel();
      const u = new window.SpeechSynthesisUtterance(String(text || ''));
      u.rate = 0.97; u.pitch = 1.04; u.volume = 1;
      window.speechSynthesis.speak(u);
      this.toast('🔊 Narration playing…', '');
    } catch (e) {
      this.toast('Audio couldn’t start.', '');
    }
  },

  stopSpeak() {
    try { if (window.speechSynthesis) window.speechSynthesis.cancel(); } catch (e) {}
  },

  bindGlobal() {
    document.addEventListener('click', e => {
      const act = e.target.closest('[data-act]');
      if (!act) return;
      const actName = act.dataset.act;
      this.handleAction(actName, act.dataset, e);
    });
    document.addEventListener('input', e => {
      if (e.target && e.target.dataset && e.target.dataset.act === 'name') {
        this.handleAction('name', e.target.dataset, e);
      } else if (e.target && e.target.dataset && e.target.dataset.act === 'ambient-vol') {
        this.handleAction('ambient-vol', e.target.dataset, e);
      }
    });
  },

  handleAction(act, data, ev) {
    switch (act) {
      case 'nav': this.show(data.to, data); break;
      case 'new-game': this.openCreator(); break;
      case 'continue': this.show('map'); break;
      case 'reset': this.doReset(); break;
      case 'start': this.doStartGame(); break;
      case 'preset': this.pickPreset(data.id); break;
      case 'species': this.pickSpecies(data.id); break;
      case 'gender': this.creator.gender = data.id; this.renderAll(); break;
      case 'skin': this.creator.avatar.skin = data.id; this.renderAll(); break;
      case 'hair': this.creator.avatar.hair = data.id; this.renderAll(); break;
      case 'haircolor': this.creator.avatar.hairColor = data.id; this.renderAll(); break;
      case 'eyes': this.creator.avatar.eyes = data.id; this.renderAll(); break;
      case 'outfit': this.creator.avatar.outfit = data.id; this.renderAll(); break;
      case 'shoes': this.creator.avatar.shoes = data.id; this.renderAll(); break;
      case 'accessory': this.creator.avatar.accessory = data.id; this.renderAll(); break;
      case 'sunglasses': if (Engine.hasFeature('sunglasses')) { this.creator.avatar.sunglasses = !this.creator.avatar.sunglasses; this.renderAll(); } break;
      case 'name': this.creator.name = (ev && ev.target) ? ev.target.value : this.creator.name; this.updateStartBtn(); break;
      case 'stage-hub': this.showStage(data.id); break;
      case 'play-challenge': this.playChallenge(data.stage, data.challenge); break;
      case 'play-boss': this.playBoss(data.stage); break;
      case 'play-boss2': this.playBoss(data.stage, 'boss2'); break;
      case 'answer': this.answer(data.i); break;
      case 'boss-answer': this.answerBoss(data.i); break;
      case 'challenge-next': this.challengeNext(); break;
      case 'boss-next': this.bossNext(); break;
      case 'modal-skill': this.showSkillModal(data.skill); break;
      case 'modal-video': this.showVideoModal(data.skill); break;
      case 'modal-clip': this.showClipModal(data.skill); break;
      case 'modal-close': this.closeModal(); break;
      case 'speak': this.speak(data.text); break;
      case 'speak-stop': this.stopSpeak(); break;
      case 'challenge-retry': this.challengeRetry(); break;
      case 'boss-retry': this.bossRetry(); break;
      case 'closet': this.openCloset(); break;
      case 'coach': this.show('coach'); break;
      case 'worksheets': this.show('worksheets'); break;
      case 'ws-age': this.worksheetsAge = (data.v === 'adult' ? 'adult' : 'teen'); try { localStorage.setItem('wsAge', this.worksheetsAge); } catch (e) {} this.renderAll(); break;
      case 'ws-print': window.print(); break;
      case 'dilemmas': this.show('dilemmas'); break;
      case 'validation': this.show('validation'); break;
      case 'games': this.show('games'); break;
      case 'play-game': this.playGame(data.id); break;
      case 'jeopardy-clue': this.jeopardySelect(data.cat, data.i); break;
      case 'jeopardy-reveal': this.jeopardyReveal(); break;
      case 'jeopardy-got': this.jeopardyScore(true); break;
      case 'jeopardy-miss': this.jeopardyScore(false); break;
      case 'jeopardy-restart': this.jeopardyRestart(); break;
      case 'jeopardy-board': this.jeopardySelectBoard(data.id); break;
      case 'jeopardy-boards': this.jeopardyShowBoards(); break;
      case 'scramble-pick': this.scramblePick(+data.i); this.renderAll(); break;
      case 'scramble-back': this.scrambleBack(); this.renderAll(); break;
      case 'scramble-clear': this.scrambleClear(); this.renderAll(); break;
      case 'scramble-shuffle': this.scrambleShuffle(); this.renderAll(); break;
      case 'scramble-check': this.scrambleCheck(); this.renderAll(); break;
      case 'scramble-hint': this.scrambleHint(); this.renderAll(); break;
      case 'scramble-reveal': this.scrambleReveal(); this.renderAll(); break;
      case 'scramble-next': this.scrambleNext(); this.renderAll(); break;
      case 'scramble-new': this.scrambleStart(); this.renderAll(); break;
      case 'wordsearch-new': this.wordSearchStart(); this.renderAll(); break;
      case 'crossword-check': this.crosswordCheck(); break;
      case 'crossword-reveal': this.crosswordReveal(); break;
      case 'crossword-flip': this.crosswordFlip(); break;
      case 'crossword-new': this.crosswordStart(); this.renderAll(); break;
      case 'matching-select': this.matchingSelect(+data.i); this.renderAll(); break;
      case 'matching-place': this.matchingPlace(+data.i); this.renderAll(); break;
      case 'matching-new': this.matchingStart(); this.renderAll(); break;
      case 'charades-act': this.charadesAct(); this.renderAll(); break;
      case 'charades-guessed': this.charadesGuessed(); break;
      case 'charades-pass': this.charadesPass(false); break;
      case 'charades-next': this.charadesNext(); break;
      case 'charades-new': this.charadesNew(); break;
      case 'badges': this.show('badges'); break;
      case 'movies': this.show('movies', { page: data.page || 'orientation' }); break;
      case 'quiz-start': this.startQuiz(); break;
      case 'quiz-answer': this.answerQuiz(data.i); break;
      case 'quiz-next': this.quizNext(); break;
      case 'quiz-restart': this.startQuiz(); break;
      case 'stage-result-ok': this.closeModal(); this.show('map'); break;
      case 'result-next': this.show('map'); break;
      case 'apply-look': this.applyLook(); break;
      case 'ambient-open': this.ambientOpen = true; this.updateAmbient(); break;
      case 'ambient-close': this.ambientOpen = false; this.updateAmbient(); break;
      case 'ambient-toggle': this.toggleAmbient(data.id); break;
      case 'ambient-stop': this.stopAmbient(); this.ambientCfg.id = null; this.saveAmbient(); this.updateAmbient(); break;
      case 'ambient-vol': this.setAmbientVolume(parseFloat(data.value)); break;
      case 'ambient-mute': this.setAmbientMute(!this.ambientCfg.muted); break;
      case 'noop': break;
      default: break;
    }
  },

  /* ---------- router ---------- */
  show(view, params) {
    if (view !== 'charades' && this.charades && this.charades.timerId) {
      clearInterval(this.charades.timerId);
      this.charades.timerId = null;
    }
    if (view === 'wordsearch') this.wordSearchStart();
    this.view = view;
    this.params = Object.assign({}, this.params || {}, params || {});
    this.closeModal();
    this.renderAll();
    window.scrollTo(0, 0);
    if (view === 'movies') {
      try { history.replaceState(null, '', '#/movies/' + (this.params.page || 'orientation')); } catch (e) {}
    } else if (['map', 'coach', 'worksheets', 'badges', 'closet', 'quiz', 'dilemmas', 'validation', 'games', 'jeopardy', 'scramble', 'wordsearch', 'crossword', 'matching', 'charades'].includes(view)) {
      try { history.replaceState(null, '', '#/' + view); } catch (e) {}
    }
  },

  renderAll() {
    const app = document.getElementById('app');
    const hud = this.renderHUD();
    let body = '';
    switch (this.view) {
      case 'title': body = this.renderTitle(); break;
      case 'creator': body = this.renderCreator(); break;
      case 'map': body = this.renderMap(); break;
      case 'stage': body = this.renderStage(); break;
      case 'challenge': body = this.renderChallenge(); break;
      case 'boss': body = this.renderBoss(); break;
      case 'coach': body = this.renderCoach(); break;
      case 'worksheets': body = this.renderWorksheets(); break;
      case 'movies': body = this.renderMovieIllustrations(); break;
      case 'quiz': body = this.renderMovieQuiz(); break;
      case 'dilemmas': body = this.renderDilemmas(); break;
      case 'validation': body = this.renderValidation(); break;
      case 'games': body = this.renderGames(); break;
      case 'jeopardy': body = this.renderJeopardy(); break;
      case 'scramble': body = this.renderScramble(); break;
      case 'wordsearch': body = this.renderWordSearch(); break;
      case 'crossword': body = this.renderCrossword(); break;
      case 'matching': body = this.renderMatching(); break;
      case 'charades': body = this.renderCharades(); break;
      case 'badges': body = this.renderBadges(); break;
      case 'closet': body = this.renderCloset(); break;
      default: body = this.renderMap();
    }
    app.innerHTML = hud + body + this.renderFooter();
    this.initVideoFallbacks(app);
    if (this.view === 'wordsearch') this.initWordSearch(app);
    if (this.view === 'crossword') this.initCrossword(app);
  },

  renderHUD() {
    if (this.view === 'title') return '';
    const c = Engine.state.character;
    if (!c) return;
    const { earned, total } = Engine.totalBadges();
    const current = STAGES.find(s => Engine.stageUnlocked(s) && !Engine.stageComplete(s));
    const stageLabel = current ? `Stage ${current.num} of ${STAGES.length} · ${current.emoji} ${current.title}` : `🏆 Journey complete`;
    return `<div class="hud">
      <div class="hud-left">
        <div class="hud-avatar">${renderAvatar(c.avatar)}</div>
        <div>
          <div class="hud-name">${esc(c.name)}</div>
          <div class="hud-sub">${stageLabel} · ${c.avatar.species === 'human' ? 'Human' : SPECIES.find(s => s.id === c.avatar.species).name}</div>
        </div>
      </div>
      <div class="hud-right">
        <span class="hud-chip gold">⭐ ${Engine.state.points.toLocaleString()} pts</span>
        <span class="hud-chip teal">🏅 ${earned}/${total} badges</span>
      </div>
    </div>`;
  },

  renderFooter() {
    if (this.view === 'title') return '';
    return `<footer>Wise Mind: A DBT Adventure · DBT skills are tools, not therapy. Reach out to a professional for real-life support.</footer>`;
  },

  /* ---------- title ---------- */
  renderTitle() {
    return `<div class="screen title-wrap">
      <div class="title-logo">Wise Mind</div>
      <div class="title-tag">A Dialectical Behavior Therapy Role-Playing Adventure</div>
      <div class="title-art">${renderAvatar({ species: 'human', skin: 'medium', hair: 'afro', hairColor: 'black', eyes: 'brown', outfit: 'hoodie', accessory: 'headphones', shoes: 'sneakers' })}</div>
      <div class="panel menu-card">
        <p class="muted" style="font-weight:600">Navigate adolescence and young adulthood through <b>mindfulness</b>, <b>distress tolerance</b>, <b>validation</b>, <b>middle path</b>, <b>emotion regulation</b>, and <b>assertion</b> — one conflict at a time. Earn badges, unlock new looks, and build a life.</p>
        <div class="menu-list">
          <button class="menu-btn" data-act="new-game"><span class="menu-ico" style="background:#e6e0ff">✨</span><span><b>New Game</b><span>Create a character and begin your journey</span></span></button>
          ${Engine.load() ? `<button class="menu-btn" data-act="continue"><span class="menu-ico" style="background:#d8f7f2">▶️</span><span><b>Continue</b><span>Pick up where you left off</span></span></button>` : ''}
          <button class="menu-btn" data-act="coach"><span class="menu-ico" style="background:#fff3d6">🧘</span><span><b>Skill Coach</b><span>Review every DBT skill and its video clip</span></span></button>
          <button class="menu-btn" data-act="worksheets"><span class="menu-ico" style="background:#fffbea">📝</span><span><b>Worksheets</b><span>Practice every skill on paper — teens &amp; adults</span></span></button>
          <button class="menu-btn" data-act="dilemmas"><span class="menu-ico" style="background:#eaf3ff">⚖️</span><span><b>Dialectical Dilemmas</b><span>Spot the both/and traps — and find the middle</span></span></button>
          <button class="menu-btn" data-act="validation"><span class="menu-ico" style="background:#fff3f6">💗</span><span><b>Levels of Validation</b><span>Six ways to make someone feel truly understood</span></span></button>
          <button class="menu-btn" data-act="games"><span class="menu-ico" style="background:#e6fff8">🎮</span><span><b>Mini Games</b><span>Jeopardy, Bingo, matching games &amp; more</span></span></button>
        </div>
      </div>
    </div>`;
  },

  /* ---------- creator / closet ---------- */
  openCreator() {
    this.creator = { name: '', gender: 'they', avatar: null, presetId: null };
    this.show('creator');
  },

  openCloset() {
    const c = Engine.state.character;
    this.creator = { name: c.name, gender: c.gender, avatar: JSON.parse(JSON.stringify(c.avatar)), presetId: null };
    this.show('closet');
  },

  pickPreset(id) {
    const p = PLAYER_PRESETS.find(x => x.id === id);
    if (!p) return;
    this.creator.presetId = id;
    this.creator.gender = p.gender;
    this.creator.avatar = avatarFromPreset(JSON.parse(JSON.stringify(p.avatar)));
    this.renderAll();
  },

  pickSpecies(id) {
    const av = this.creator.avatar;
    if (!av) return;
    av.species = id;
    if (id === 'human' || id === 'hero' || id === 'fairy' || id === 'vampire') {
      if (!av.skin) av.skin = 'medium';
      if (!av.hair) av.hair = 'straight';
      if (!av.eyes) av.eyes = 'brown';
    }
    if (id === 'dragon' || id === 'ghost' || id === 'werewolf' || id === 'werelion' || id === 'schnauzer') av.shoes = 'none';
    if (id === 'robot' || id === 'alien') { if (!av.shoes) av.shoes = 'spaceboots'; }
    this.renderAll();
  },

  renderCreator() {
    const isCloset = this.view === 'closet';
    const av = this.creator.avatar || (this.creator.avatar = avatarFromPreset(PLAYER_PRESETS[0].avatar));
    const humanoid = ['human', 'hero', 'wizard', 'fairy', 'vampire'].includes(av.species);
    const hasShoes = !['dragon', 'ghost', 'werewolf', 'werelion', 'schnauzer'].includes(av.species);
    const sunglassesUnlocked = Engine.hasFeature('sunglasses');
    const title = isCloset ? 'Refine Your Look' : 'Create Your Character';
    const presetInfo = this.creator.presetId ? PLAYER_PRESETS.find(p => p.id === this.creator.presetId) : null;
    const speciesName = SPECIES.find(s => s.id === av.species);
    const ethnicity = humanoid ? SKIN_TONES.find(s => s.id === av.skin).ethnicity : (presetInfo ? presetInfo.ethnicity : (speciesName ? speciesName.desc : ''));
    const pronoun = GENDERS.find(g => g.id === this.creator.gender);

    const lock = item => {
      if (Engine.itemUnlocked(item)) return '';
      const feat = UNLOCK_FEATURES.find(f => f.id === item.lockedBy);
      return `<span class="lock-note">🔒 ${feat ? feat.label : 'locked'}</span>`;
    };

    const group = (label, html, note) => `<div class="opt-group"><label>${label} ${note || ''}</label>${html}</div>`;

    let html = `<div class="screen">
      <h2 style="margin-bottom:16px">${isCloset ? '🎨 ' : '🌟 '}${title}</h2>
      <div class="creator-grid">
        <div class="preview-pane">
          <div class="avatar-stage">${renderAvatar(av)}</div>
          <input class="name-input" style="margin:12px 0 6px" placeholder="Your character's name" value="${esc(this.creator.name)}" data-act="name">
          <div class="muted" style="font-size:.8rem;font-weight:800">${esc(this.creator.name || 'Name your hero')} · ${pronoun.label}</div>
          ${!isCloset ? `<div class="bio-card">
            <div class="bio-row"><b>Identity</b><span>${esc(ethnicity || '')} · ${speciesName ? speciesName.emoji + ' ' + speciesName.name : ''}</span></div>
            ${presetInfo && presetInfo.personality ? `<div class="bio-row"><b>Personality</b><span>${esc(presetInfo.personality)}</span></div>` : ''}
            ${presetInfo && presetInfo.interests ? `<div class="bio-row"><b>Loves</b><span>${esc(presetInfo.interests)}</span></div>` : `<div class="bio-row"><span class="muted">Pick a preset to give your character a personality and interests.</span></div>`}
          </div>` : ''}
          <div class="spacer"></div>
          ${isCloset
            ? `<button class="btn teal" data-act="apply-look">Save Look</button>`
            : `<button class="btn lg" id="start-btn" data-act="start" ${this.creator.name.trim() ? '' : 'disabled'}>Start Adventure 🚀</button>`}
          <div class="spacer"></div>
          <button class="btn ghost sm" data-act="nav" data-to="map">Back</button>
        </div>
        <div class="panel">
          ${group('Diverse presets', `<div class="preset-grid">${PLAYER_PRESETS.map(p => `
            <div class="preset-card ${this.creator.presetId === p.id ? 'sel' : ''}" data-act="preset" data-id="${p.id}">
              <div class="preset-avatar">${renderAvatar(p.avatar)}</div>
              <b>${esc(p.name)}</b><span>${esc(p.ethnicity)}</span><span class="preset-pronoun">${GENDERS.find(g => g.id === p.gender).label}</span>
            </div>`).join('')}</div>`)}
          ${group('Identity', `<div class="chip-row">${GENDERS.map(g => `<button class="chip ${this.creator.gender === g.id ? 'sel' : ''}" data-act="gender" data-id="${g.id}">${g.label}</button>`).join('')}</div>`)}
          ${group('Species', `<div class="chip-row">${SPECIES.map(s => `<button class="chip ${av.species === s.id ? 'sel' : ''}" data-act="species" data-id="${s.id}">${s.emoji} ${s.name}</button>`).join('')}</div>`)}
          ${humanoid ? group('Skin tone (race & ethnicity)', `<div class="swatches">${SKIN_TONES.map(s => `<button class="swatch ${av.skin === s.id ? 'sel' : ''}" data-act="skin" data-id="${s.id}" title="${esc(s.ethnicity)} — ${esc(s.label)}" style="background:${s.hex}"></button>`).join('')}</div><div class="muted tiny">${SKIN_TONES.find(s => s.id === av.skin).ethnicity} · ${SKIN_TONES.find(s => s.id === av.skin).label}</div>`) : ''}
          ${humanoid ? group('Hairstyle' + lock(HAIR_STYLES.find(h => h.id === av.hair)), `<div class="chip-row">${HAIR_STYLES.filter(h => Engine.itemUnlocked(h)).map(h => `<button class="chip ${av.hair === h.id ? 'sel' : ''}" data-act="hair" data-id="${h.id}">${h.emoji} ${h.name}</button>`).join('')}</div>`) : ''}
          ${humanoid ? group('Hair color', `<div class="swatches">${HAIR_COLORS.map(c => `<button class="swatch ${av.hairColor === c.id ? 'sel' : ''}" data-act="haircolor" data-id="${c.id}" title="${esc(c.label)}" style="background:${c.hex}"></button>`).join('')}</div>`) : ''}
          ${humanoid ? group('Eyes', `<div class="swatches">${EYE_COLORS.map(c => `<button class="swatch ${av.eyes === c.id ? 'sel' : ''}" data-act="eyes" data-id="${c.id}" title="${esc(c.label)}" style="background:${c.hex}"></button>`).join('')}</div>`) : ''}
          ${group('Clothing' + lock(OUTFITS.find(o => o.id === av.outfit)), `<div class="chip-row">${OUTFITS.filter(o => Engine.itemUnlocked(o)).map(o => `<button class="chip ${av.outfit === o.id ? 'sel' : ''}" data-act="outfit" data-id="${o.id}">${o.emoji} ${o.name}</button>`).join('')}</div>`)}
          ${hasShoes ? group('Shoes' + lock(SHOES.find(s => s.id === av.shoes)), `<div class="chip-row">${SHOES.filter(s => Engine.itemUnlocked(s)).map(s => `<button class="chip ${av.shoes === s.id ? 'sel' : ''}" data-act="shoes" data-id="${s.id}">${s.emoji} ${s.name}</button>`).join('')}</div>`) : ''}
          ${group('Accessory' + lock(ACCESSORIES.find(a => a.id === av.accessory)), `<div class="chip-row">${ACCESSORIES.filter(a => Engine.itemUnlocked(a)).map(a => `<button class="chip ${av.accessory === a.id ? 'sel' : ''}" data-act="accessory" data-id="${a.id}">${a.emoji} ${a.name}</button>`).join('')}</div>`)}
          ${group('Sunglasses' + (sunglassesUnlocked ? '' : '<span class="lock-note">🔒 complete Mindfulness module</span>'), `<div class="chip-row"><button class="chip ${av.sunglasses ? 'sel' : ''}" data-act="sunglasses" ${sunglassesUnlocked ? '' : 'disabled'}>${sunglassesUnlocked ? '🕶️ On' : '🔒 Locked'}</button></div>`)}
        </div>
      </div>
    </div>`;
    return html;
  },

  updateStartBtn() {
    const b = document.getElementById('start-btn');
    if (b) b.disabled = !this.creator.name.trim();
  },

  doStartGame() {
    if (!this.creator.name.trim()) return;
    const avatar = this.creator.avatar;
    avatar.sunglasses = avatar.sunglasses && Engine.hasFeature('sunglasses');
    const char = { name: this.creator.name.trim(), gender: this.creator.gender, avatar };
    Engine.newGame(char);
    this.sound('click');
    this.toast(`Welcome, ${esc(char.name)}! Your journey begins. 🌱`, 'teal');
    this.show('map');
  },

  applyLook() {
    const c = Engine.state.character;
    const avatar = this.creator.avatar;
    if (!Engine.hasFeature('sunglasses')) avatar.sunglasses = false;
    // ensure equipped items are unlocked (closet applies actual unlock state)
    c.avatar = avatar;
    c.name = this.creator.name.trim() || c.name;
    Engine.save();
    this.toast('Look saved! ✨', 'teal');
    this.show('map');
  },

  /* ---------- map ---------- */
  renderMap() {
    const stats = Engine.stageStats();
    const { earned, total } = Engine.totalBadges();
    const unlockedFeatures = UNLOCK_FEATURES.filter(f => Engine.hasFeature(f.id)).length;
    const chips = UNLOCK_FEATURES.filter(f => Engine.hasFeature(f.id));
    return `<div class="screen map-screen">
      <div class="map-bg" style="position:fixed;inset:0;z-index:0;pointer-events:none;overflow:hidden;background:linear-gradient(160deg,rgba(124,92,255,.12),rgba(52,209,191,.14))">${this.mapArt()}</div>
      <div class="map-content">
      <div class="section-title"><h2>🗺️ Your Journey</h2></div>
      <div class="stats-grid">
        <div class="stat-card"><b>${earned}</b><span>Badges / ${total}</span></div>
        <div class="stat-card"><b>${Engine.state.completedStages.length}</b><span>Stages completed</span></div>
        <div class="stat-card"><b>${unlockedFeatures}</b><span>Looks unlocked</span></div>
        <div class="stat-card"><b>${Engine.state.points.toLocaleString()}</b><span>Balance Points</span></div>
      </div>
      ${chips.length ? `<div class="scroll-x" style="margin-bottom:14px">${chips.map(c => `<span class="hud-chip gold" style="white-space:nowrap">${c.emoji} ${c.label} unlocked</span>`).join('')}</div>` : ''}
      <div class="tabbar">
        <button class="btn sm ghost" data-act="coach">🧘 Skill Coach</button>
        <button class="btn sm ghost" data-act="worksheets">📝 Worksheets</button>
        <button class="btn sm ghost" data-act="dilemmas">⚖️ Dilemmas</button>
        <button class="btn sm ghost" data-act="validation">💗 Validation</button>
        <button class="btn sm ghost" data-act="games">🎮 Mini Games</button>
        <button class="btn sm ghost" data-act="badges">🏅 Badges</button>
        <button class="btn sm ghost" data-act="closet">🎨 Closet</button>
        <button class="btn sm rose" data-act="reset" style="margin-left:auto">↺ Reset Game</button>
      </div>
      <div class="map-layout">
        <div class="map">
          ${stats.map((s, i) => {
            const mod = DBT_MODULES.find(m => m.id === s.stage.moduleId);
            const grad = `linear-gradient(135deg, ${s.stage.color}, ${shade(s.stage.color, 40)})`;
            return `<button class="stage-card ${s.unlocked ? '' : 'locked'}" ${s.unlocked ? `data-act="stage-hub" data-id="${s.stage.id}"` : ''}>
              <div class="stage-num" style="background:${grad}">${s.stage.num}</div>
              <div style="min-width:0">
                <div class="stage-title">${s.stage.emoji} ${s.stage.title}</div>
                <div class="stage-goal">Goal: ${s.stage.goalEmoji} ${s.stage.goal}</div>
                <div class="stage-meta">
                  ${mod ? `<span class="meta-chip" style="background:${mod.color}22;color:${mod.color}">${mod.icon} ${mod.name}</span>` : ''}
                  <span class="meta-chip">${s.stage.age} yrs</span>
                  ${s.complete ? `<span class="meta-chip done">✅ Complete</span>` : s.unlocked ? `<span class="meta-chip">${s.challengesDone}/${s.challengesTotal} challenges</span>` : `<span class="meta-chip">🔒 Locked</span>`}
                </div>
                <div class="stage-progress"><div class="progress-track"><div class="progress-fill" style="width:${Math.round(s.pct * 100)}%"></div></div></div>
              </div>
            </button>`;
          }).join('')}
        </div>
        <aside class="movie-tabs">${this.renderMovieTabs('orientation')}</aside>
      </div>
      </div>
    </div>`;
  },

  /* Decorative translucent world-map backdrop for the journey screen */
  mapArt() {
    return `<svg viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice" aria-hidden="true" style="width:100%;height:100%;display:block">
      <g fill="#7c5cff">
        <path opacity="0.16" d="M-40 180 C60 60 200 40 300 90 C420 140 500 80 620 120 C760 170 900 110 1040 150 C1180 200 1320 180 1480 230 C1520 400 1440 520 1360 620 C1280 720 1180 660 1040 700 C900 740 820 820 680 780 C540 740 480 840 360 800 C240 760 160 860 60 800 C-40 740 -80 560 -40 400 Z"/>
        <path opacity="0.10" d="M220 900 C260 780 420 760 520 820 C600 870 760 900 860 850 C960 800 1120 900 1240 880 C1330 864 1420 900 1500 900 L1500 940 L-60 940 Z"/>
      </g>
      <g>
        <path stroke="#34d1bf" stroke-width="26" fill="none" opacity="0.20" stroke-linecap="round" d="M-20 640 C200 560 260 420 420 380 C600 340 640 240 820 220 C1000 200 1080 300 1220 260 C1360 220 1440 300 1490 280"/>
        <path stroke="#34d1bf" stroke-width="9" fill="none" opacity="0.24" stroke-linecap="round" d="M-20 640 C200 560 260 420 420 380 C600 340 640 240 820 220 C1000 200 1080 300 1220 260 C1360 220 1440 300 1490 280"/>
      </g>
      <g fill="none" stroke-linecap="round">
        <path stroke="#7c5cff" stroke-width="8" opacity="0.30" d="M-20 120 C220 160 320 320 520 360 C720 400 760 520 960 560 C1120 590 1260 700 1490 740"/>
        <path stroke="#34d1bf" stroke-width="6" opacity="0.26" d="M180 -20 C200 160 420 220 500 400 C560 540 760 640 900 760 C980 830 1100 880 1210 920"/>
      </g>
      <path stroke="#ffb833" stroke-width="5" fill="none" opacity="0.5" stroke-linecap="round" stroke-dasharray="2 16" d="M40 760 C160 700 220 620 380 640 C540 660 600 520 760 540 C900 560 980 700 1140 680 C1280 660 1360 580 1420 520"/>
      <g fill="#ff6b8a" stroke="#ff6b8a" stroke-width="4" opacity="0.6">
        <path d="M40 700 L40 760 L98 730 Z"/>
        <line x1="40" y1="760" x2="40" y2="790"/>
      </g>
      <g fill="#7c5cff" opacity="0.28">
        <path d="M1020 240 L1070 140 L1120 240 Z"/>
        <path d="M1090 250 L1145 160 L1200 250 Z"/>
        <path d="M980 250 L1025 170 L1070 250 Z"/>
        <path d="M1045 250 L1085 200 L1125 250 Z"/>
      </g>
      <g fill="#46c46e" opacity="0.26">
        <circle cx="330" cy="200" r="16"/><circle cx="360" cy="230" r="12"/>
        <circle cx="720" cy="150" r="14"/><circle cx="752" cy="176" r="11"/>
        <circle cx="880" cy="640" r="15"/><circle cx="914" cy="668" r="10"/>
        <circle cx="260" cy="620" r="13"/><circle cx="290" cy="648" r="10"/>
        <circle cx="600" cy="120" r="12"/><circle cx="628" cy="145" r="9"/>
      </g>
      <g stroke="#ffb833" fill="none" opacity="0.5">
        <circle cx="180" cy="130" r="34"/>
        <circle cx="196" cy="114" r="24" fill="#ffb833" opacity="0.35"/>
      </g>
      <g stroke="#4aa8ff" fill="none" opacity="0.4">
        <circle cx="1330" cy="100" r="46"/>
        <path stroke-width="3" d="M1330 54 L1330 146 M1284 100 L1376 100 M1300 70 L1360 130 M1300 130 L1360 70"/>
      </g>
      <g fill="#ff6b8a" opacity="0.30">
        <path d="M700 600 L700 560 L716 560 L716 600 Z"/>
        <path d="M686 566 L708 542 L730 566 Z"/>
        <path d="M730 580 L740 580 L740 600 L730 600 Z"/>
        <path d="M748 520 L748 500 L756 500 L756 520 Z"/>
        <path d="M704 500 L752 500 L752 516 L704 516 Z"/>
      </g>
    </svg>`;
  },

  /* ---------- movie page tabs (right sidebar) ---------- */
  renderMovieTabs(active) {
    return `<div class="movie-tabs-title">🎬 Movie Illustrations</div>
      ${MOVIE_PAGES.map(p => `<button class="movie-tab ${p.id === active ? 'active' : ''}" data-act="movies" data-page="${p.id}">${p.icon} ${esc(p.label)}<span class="movie-tab-sub">${p.id === active ? '●' : ''}</span></button>`).join('')}
      <button class="movie-tab ${active === 'quiz' ? 'active' : ''}" data-act="quiz-start">🎯 Movie Illustration Quiz<span class="movie-tab-sub">${active === 'quiz' ? '●' : ''}</span></button>`;
  },

  /* ---------- stage hub ---------- */
  showStage(id) { this.params.stageId = id; this.show('stage'); },

  renderStage() {
    const stage = STAGE_BY_ID[this.params.stageId];
    if (!stage) { this.show('map'); return ''; }
    const prog = Engine.state.stageProgress[stage.id] || { challengesDone: [], bossDone: false, boss2Done: false };
    const allChallengesDone = stage.challenges.every(c => prog.challengesDone.includes(c.id));
    const mod = DBT_MODULES.find(m => m.id === stage.moduleId);
    const nextCh = stage.challenges.find(c => !prog.challengesDone.includes(c.id));
    const grad = `linear-gradient(120deg, ${stage.color}, ${shade(stage.color, 40)})`;
    const stageDone = allChallengesDone && prog.bossDone && (stage.boss2 ? prog.boss2Done : true);
    const nextBoss2Unlocked = allChallengesDone && prog.bossDone;
    return `<div class="screen">
      <div class="section-title"><button class="btn sm ghost back" data-act="nav" data-to="map">← Map</button><h2>${stage.emoji} ${stage.title}</h2></div>
      <div class="quest-banner" style="background:${grad}">
        <h2>${stage.goalEmoji} ${stage.goal}</h2>
        <p>${stage.location} · Age ${stage.age} · ${mod ? mod.icon + ' ' + mod.name + ': ' + mod.motto : 'The final chapter of your journey.'}</p>
      </div>
      <div class="panel">
        <div style="display:grid;gap:10px">
          ${stage.challenges.map(c => {
            const done = prog.challengesDone.includes(c.id);
            return `<div class="earned-item"><span style="font-size:1.4rem">${done ? '✅' : '📌'}</span><span style="flex:1"><b>${esc(c.title)}</b><div class="muted tiny">${c.setting}</div></span>${done ? '<span class="meta-chip done">done</span>' : `<button class="btn sm teal" data-act="play-challenge" data-stage="${stage.id}" data-challenge="${c.id}">Play</button>`}</div>`;
          }).join('')}
          ${stage.boss ? `<div class="earned-item"><span style="font-size:1.4rem">${prog.bossDone ? '✅' : '👹'}</span><span style="flex:1"><b>${esc(stage.boss.title)}</b><div class="muted tiny">${esc(stage.boss.theme)}</div></span>${prog.bossDone ? '<span class="meta-chip done">complete</span>' : (allChallengesDone ? `<button class="btn sm" style="background:#e24a4a" data-act="play-boss" data-stage="${stage.id}">Face the Boss</button>` : `<span class="meta-chip">🔒 finish challenges first</span>`)}</div>` : ''}
          ${stage.boss2 ? `<div class="earned-item"><span style="font-size:1.4rem">${prog.boss2Done ? '✅' : '👹'}</span><span style="flex:1"><b>${esc(stage.boss2.title)}</b><div class="muted tiny">${esc(stage.boss2.theme)}</div></span>${prog.boss2Done ? '<span class="meta-chip done">complete</span>' : (nextBoss2Unlocked ? `<button class="btn sm" style="background:#e24a4a" data-act="play-boss2" data-stage="${stage.id}">Face the Boss</button>` : `<span class="meta-chip">🔒 finish stage boss first</span>`)}</div>` : ''}
        </div>
        <div class="spacer"></div>
        <div class="center">
          ${nextCh ? `<button class="btn lg" data-act="play-challenge" data-stage="${stage.id}" data-challenge="${nextCh.id}">Continue →</button>`
            : (!prog.bossDone && stage.boss ? `<button class="btn lg" style="background:#e24a4a" data-act="play-boss" data-stage="${stage.id}">Face the Boss 👹</button>`
            : (stage.boss2 && !prog.boss2Done ? `<button class="btn lg" style="background:#e24a4a" data-act="play-boss2" data-stage="${stage.id}">Face the Final Boss 👹</button>`
            : `<button class="btn lg teal" data-act="nav" data-to="map">Back to Map</button>`))}
        </div>
      </div>
    </div>`;
  },

  /* ---------- challenge ---------- */
  playChallenge(stageId, challengeId) {
    Engine.startChallenge(stageId, challengeId);
    this.params.stageId = stageId; this.params.challengeId = challengeId;
    this.show('challenge');
  },

  renderChallenge() {
    const sess = Engine.session;
    if (!sess || sess.type !== 'challenge') { this.show('map'); return ''; }
    const stage = STAGE_BY_ID[sess.stageId];
    const challenge = stage.challenges.find(c => c.id === sess.challengeId);
    const mod = DBT_MODULES.find(m => m.id === stage.moduleId);
    const skill = challenge.spotlight ? DBT_SKILLS[challenge.spotlight] : null;
    const scene = matchScene(challenge.setting) || matchScene(challenge.title) || 'living';
    const hearts = sess.hearts != null ? sess.hearts : 3;
    return `<div class="screen">
      <div class="scene-bg">${renderScene(scene)}</div>
      <div class="scene-content">
      <div class="challenge-layout">
        <div class="section-title"><button class="btn sm ghost back" data-act="nav" data-to="stage" data-id="${stage.id}">← ${stage.title}</button><h2>${challenge.setting}</h2></div>
        <div class="scenario-box">
          <div class="scenario-badges">
            <span class="badge-tag stage">Stage ${stage.num}</span>
            <span class="badge-tag module">${mod ? mod.icon + ' ' + mod.name : ''}</span>
            <span class="badge-tag boss">${challenge.title}</span>
            <span class="badge-tag hearts" title="Tries left before you must retry">${'❤️'.repeat(hearts)}${'🖤'.repeat(MAX_HEARTS - hearts)}</span>
          </div>
          ${challenge.scene.map(l => this.sceneLine(l)).join('')}
          ${skill ? `<button class="btn sm gold" style="margin-top:6px" data-act="modal-clip" data-skill="${skill.id}">🎬 Spotlight skill: ${skill.name}</button>` : ''}
          <div style="font-weight:800;font-size:1.05rem;margin-top:16px">${esc(challenge.ask)}</div>
          <div class="option-grid">
            ${challenge.options.map((o, i) => `<button class="option-btn" data-act="answer" data-i="${i}"><span>${esc(o.label)}</span></button>`).join('')}
          </div>
          <div id="feedback-slot"></div>
        </div>
      </div>
      </div>
    </div>`;
  },

  sceneLine(l) {
    if (l.s === 'narr') {
      return `<div class="scene-line"><div class="scene-avatar" style="background:#f0edff">🗨️</div><div class="scene-bubble" style="background:#f0edff"><i>${esc(l.t)}</i></div></div>`;
    }
    const npc = NPC_PRESETS[l.s];
    const name = npc ? npc.name : '???';
    const av = npc ? npc.avatar || npc : avatarFromPreset({});
    return `<div class="scene-line"><div class="scene-avatar">${renderAvatar(npc || {})}</div><div class="scene-bubble"><b>${esc(name)}:</b> ${esc(l.t)}</div></div>`;
  },

  answer(i) {
    const res = Engine.submitChallenge(parseInt(i, 10));
    if (!res) return;
    const sess = Engine.session;
    const stage = STAGE_BY_ID[sess.stageId];
    const challenge = stage.challenges.find(c => c.id === sess.challengeId);
    this.sound(res.correct ? 'correct' : 'wrong');
    const box = document.querySelector('.scenario-box');
    const btns = box.querySelectorAll('.option-btn');
    const skill = res.skill ? DBT_SKILLS[res.skill] : null;
    let fb = '';
    if (res.correct) {
      btns.forEach((b, idx) => {
        const opt = challenge.options[idx];
        b.disabled = true;
        b.classList.add('revealed', opt.correct ? 'correct' : 'wrong');
        b.innerHTML = `<span class="option-tag ${opt.correct ? 'correct' : 'wrong'}">${opt.correct ? '✓ correct' : '✗'}</span><span>${esc(opt.label)}</span>`;
      });
      fb = `<div class="feedback-box good"><h4>${res.badgeEarned ? '🏅' : '💚'} ${skill ? `Skill used: <span class="skill-name">${skill.name}</span>` : 'Nicely handled!'}</h4><p>${esc(res.feedback)}</p><p class="tiny" style="margin-top:6px">+${res.points} points</p></div>`;
    } else {
      // mark only the chosen option wrong; leave others open so the player can try again
      btns.forEach((b, idx) => {
        if (idx === parseInt(i, 10)) {
          b.disabled = true;
          b.classList.add('revealed', 'wrong');
          b.innerHTML = `<span class="option-tag wrong">✗</span><span>${esc(challenge.options[idx].label)}</span>`;
        } else if (res.failed) {
          b.disabled = true;
          b.classList.add('revealed', 'wrong');
        }
      });
      const left = res.hearts != null ? res.hearts : 0;
      fb = res.failed
        ? `<div class="feedback-box bad"><h4>💔 Out of tries</h4><p>${esc(res.feedback)}</p><p class="tiny" style="margin-top:6px">You used all three tries this time. Catch your breath, pick the skill in your head, and retry — the question is still open.</p></div>`
        : `<div class="feedback-box bad"><h4>😅 Not quite yet</h4><p>${esc(res.feedback)}</p><p class="tiny" style="margin-top:6px">${'❤️'.repeat(left)}${'🖤'.repeat(MAX_HEARTS - left)} · ${left} ${left === 1 ? 'try' : 'tries'} left. Take a breath and try another choice.</p></div>`;
    }
    const more = res.correct
      ? `<button class="btn teal" style="margin-top:12px" data-act="challenge-next">Continue →</button>`
      : (res.failed ? `<button class="btn teal" style="margin-top:12px" data-act="challenge-retry">Retry Challenge 🔄</button>` : '');
    document.getElementById('feedback-slot').innerHTML = fb + more;
    this.sound(res.badgeEarned ? 'badge' : res.correct ? 'correct' : 'wrong');
    if (res.badgeEarned) this.toast(`🏅 Badge earned: ${skill ? skill.badge : 'Skill'}!`, 'gold');
    if (res.featureUnlocked) {
      const feat = UNLOCK_FEATURES.find(f => f.id === res.featureUnlocked);
      this.toast(`${feat.emoji} ${feat.label} unlocked — check the Closet!`, 'gold');
    }
    if (res.moduleComplete) {
      setTimeout(() => this.confetti(), 300);
    }
  },

  challengeNext() {
    const sess = Engine.session;
    const stage = STAGE_BY_ID[sess.stageId];
    const prog = Engine.state.stageProgress[stage.id] || { challengesDone: [], bossDone: false };
    const next = stage.challenges.find(c => !prog.challengesDone.includes(c.id));
    const allDone = stage.challenges.every(c => prog.challengesDone.includes(c.id));
    if (next) { this.playChallenge(stage.id, next.id); return; }
    if (allDone && stage.boss && !prog.bossDone) { this.playBoss(stage.id); return; }
    this.showStage(stage.id);
  },

  challengeRetry() {
    const sess = Engine.session;
    if (!sess || sess.type !== 'challenge') return;
    Engine.startChallenge(sess.stageId, sess.challengeId);
    this.show('challenge');
  },

  /* ---------- boss ---------- */
  playBoss(stageId, which) {
    const r = Engine.startBoss(stageId, which);
    if (!r) return;
    this.params.stageId = stageId;
    this.show('boss');
  },

  bossRetry() {
    Engine.retryBossRound();
    this.show('boss');
  },

  renderBoss() {
    const sess = Engine.session;
    if (!sess || sess.type !== 'boss') { this.show('map'); return ''; }
    const stage = STAGE_BY_ID[sess.stageId];
    const boss = stage[sess.which];
    const round = boss.rounds[sess.roundIndex];
    const total = boss.rounds.length;
    const npc = NPC_PRESETS[boss.npc];
    const mod = DBT_MODULES.find(m => m.id === stage.moduleId);
    const introShown = sess.roundIndex === 0;
    const scene = BOSS_SCENES[boss.id] || matchScene(boss.theme) || 'living';
    return `<div class="screen">
      <div class="scene-bg">${renderScene(scene)}</div>
      <div class="scene-content">
      <div class="section-title"><button class="btn sm ghost back" data-act="nav" data-to="stage" data-id="${stage.id}">← ${stage.title}</button><h2>${stage.emoji} Boss</h2></div>
      <div class="boss-header">
        <div class="big-avatar">${renderAvatar(npc || {})}</div>
        <div style="flex:1">
          <div class="boss-title">${esc(boss.title)}</div>
          <div class="boss-sub">${esc(boss.theme)}</div>
          <div class="boss-rounds">${boss.rounds.map((_, i) => `<span class="round-dot ${i < sess.roundIndex ? 'done' : i === sess.roundIndex ? 'now' : ''}"></span>`).join('')}</div>
        </div>
      </div>
      ${introShown ? `<div class="scenario-box" style="margin-bottom:14px">${boss.intro.map(l => this.sceneLine(l)).join('')}</div>` : ''}
      <div class="scenario-box">
        <div class="scenario-badges"><span class="badge-tag stage">Round ${sess.roundIndex + 1} / ${total}</span><span class="badge-tag module">${mod ? mod.icon + ' ' + mod.name : ''}</span><span class="badge-tag hearts" title="Tries left this round">${'❤️'.repeat(sess.hearts != null ? sess.hearts : 3)}${'🖤'.repeat(MAX_HEARTS - (sess.hearts != null ? sess.hearts : 3))}</span></div>
        <div style="font-weight:800;font-size:1.05rem">${esc(round.prompt)}</div>
        <div class="option-grid">
          ${round.options.map((o, i) => `<button class="option-btn" data-act="boss-answer" data-i="${i}"><span>${esc(o.label)}</span></button>`).join('')}
        </div>
        <div id="boss-feedback"></div>
      </div>
      </div>
    </div>`;
  },

  answerBoss(i) {
    const res = Engine.submitBossRound(parseInt(i, 10));
    if (!res) return;
    const sess = Engine.session;
    const stage = STAGE_BY_ID[sess.stageId];
    const boss = stage[sess.which];
    const round = boss.rounds[res.roundIndex];
    const total = boss.rounds.length;
    this.sound(res.correct ? 'correct' : 'wrong');
    const box = document.querySelector('.scenario-box');
    const btns = box.querySelectorAll('.option-btn');
    const skill = res.skill ? DBT_SKILLS[res.skill] : null;
    let fb = '';
    if (res.correct) {
      btns.forEach((b, idx) => {
        const opt = round.options[idx];
        b.disabled = true;
        b.classList.add('revealed', opt.correct ? 'correct' : 'wrong');
        b.innerHTML = `<span class="option-tag ${opt.correct ? 'correct' : 'wrong'}">${opt.correct ? '✓' : '✗'}</span><span>${esc(opt.label)}</span>`;
      });
      fb = `<div class="feedback-box good"><h4>${res.badgeEarned ? '🏅' : '💪'} ${skill ? `Skill used: <span class="skill-name">${skill.name}</span>` : 'Strong play!'}</h4><p>${esc(res.feedback)}</p><p class="tiny" style="margin-top:6px">+${res.points} points</p></div>`;
    } else {
      btns.forEach((b, idx) => {
        if (idx === parseInt(i, 10)) {
          b.disabled = true;
          b.classList.add('revealed', 'wrong');
          b.innerHTML = `<span class="option-tag wrong">✗</span><span>${esc(round.options[idx].label)}</span>`;
        } else if (res.failed) {
          b.disabled = true;
          b.classList.add('revealed', 'wrong');
        }
      });
      const left = res.hearts != null ? res.hearts : 0;
      fb = res.failed
        ? `<div class="feedback-box bad"><h4>💔 The boss breaks your rhythm</h4><p>${esc(res.feedback)}</p><p class="tiny" style="margin-top:6px">You ran out of tries this round. Center yourself and retry the round — the boss isn’t going anywhere.</p></div>`
        : `<div class="feedback-box bad"><h4>😅 The boss pushes back</h4><p>${esc(res.feedback)}</p><p class="tiny" style="margin-top:6px">${'❤️'.repeat(left)}${'🖤'.repeat(MAX_HEARTS - left)} · ${left} ${left === 1 ? 'try' : 'tries'} left. Stay in the skill — try another response.</p></div>`;
    }
    const nextBtn = res.bossComplete
      ? `<button class="btn teal" style="margin-top:12px" data-act="stage-result-ok">Finish</button>`
      : (res.correct ? `<button class="btn teal" style="margin-top:12px" data-act="boss-next">Next Round →</button>`
        : (res.failed ? `<button class="btn teal" style="margin-top:12px" data-act="boss-retry">Retry Round 🔄</button>` : ''));
    document.getElementById('boss-feedback').innerHTML = fb + nextBtn;
    this.sound(res.badgeEarned ? 'badge' : 'correct');
    if (res.badgeEarned) this.toast(`🏅 Badge earned: ${skill ? skill.badge : 'Skill'}!`, 'gold');
    if (res.featureUnlocked) {
      const feat = UNLOCK_FEATURES.find(f => f.id === res.featureUnlocked);
      this.toast(`${feat.emoji} ${feat.label} unlocked — check the Closet!`, 'gold');
    }
    if (res.bossComplete) {
      this.confetti();
      const mod = DBT_MODULES.find(m => m.id === stage.moduleId);
      setTimeout(() => {
        const unlockedFeat = res.featureUnlocked ? UNLOCK_FEATURES.find(f => f.id === res.featureUnlocked) : null;
        const nextStage = STAGES[STAGES.findIndex(x => x.id === stage.id) + 1];
        this.showModal(`
          <div class="result-card">
            <div class="result-emoji">🎉</div>
            <h2>${stage.emoji} ${stage.title} Complete!</h2>
            <p class="muted">${stage.goalEmoji} Goal reached: ${esc(stage.goal)}</p>
            <div class="earned-list">
              <div class="earned-item"><span>💪</span><span><b>+${PT_STAGE_BONUS} points</b> · stage clear bonus</span></div>
              ${unlockedFeat ? `<div class="earned-item"><span>${unlockedFeat.emoji}</span><span><b>${unlockedFeat.label} unlocked!</b> ${esc(unlockedFeat.desc)}</span></div>` : ''}
              ${nextStage ? `<div class="earned-item"><span>🗺️</span><span><b>${nextStage.emoji} ${nextStage.title}</b> unlocked · Age ${nextStage.age}</span></div>` : `<div class="earned-item"><span>👑</span><span><b>You finished your journey.</b> Every skill in your toolbox is yours.</span></div>`}
            </div>
            <div class="btn-row" style="justify-content:center">
              <button class="btn teal" data-act="stage-result-ok">Back to Map</button>
              <button class="btn ghost" data-act="coach">Review Skills</button>
            </div>
          </div>`);
      }, 400);
    }
  },

  bossNext() {
    this.show('boss');
  },

  /* ---------- coach ---------- */
  renderCoach() {
    return `<div class="screen">
      <div class="section-title"><button class="btn sm ghost back" data-act="nav" data-to="map">← Map</button><h2>🧘 Skill Coach</h2></div>
      <p class="muted" style="margin-bottom:16px">Every DBT module, every skill, and a scene to remember it by. Tap a skill to learn more — or watch its DBT-RU video right here.</p>
      <div class="module-card" style="margin-bottom:16px">
        <div class="module-head" style="background:var(--accent)16">
          <div class="module-ico" style="background:var(--accent)">🧠</div>
          <div><h3>What is Dialectical Behavior Therapy</h3><p>Start here — a quick intro to what DBT is and how it works.</p></div>
        </div>
        <div class="skill-list">
          <div class="skill-item">
            <div class="clip-video sm">${this.videoEmbed('Stz--d17ID4')}</div>
          </div>
        </div>
      </div>
      <div class="coach-grid">
        ${DBT_MODULES.map(m => {
          const allBadged = m.skills.every(s => Engine.skillBadged(s.id));
          const skills = m.skills.filter(s => s.id !== 'emotion-mind' && s.id !== 'reasonable-mind');
          return `<div class="module-card">
            <div class="module-head" style="background:${m.color}16">
              <div class="module-ico" style="background:${m.color}">${m.icon}</div>
              <div><h3>${m.name} ${allBadged ? '🏅' : ''}</h3><p>${m.motto}</p></div>
            </div>
            <div class="skill-list">
              ${m.id === 'mindfulness' ? `<div class="skill-item">
                <div class="skill-name-row"><b>Mindfulness "What" and "How" skills</b><span class="skill-tag video">▶ DBT-RU</span></div>
                <div class="skill-desc">The "What" skills — Observe, Describe, Participate — and the "How" skills — Non-judgmentally, One-Mindfully, Effectively.</div>
                <div class="clip-video sm" style="margin-top:10px">${this.videoEmbed('PCJ0R6vAUnw')}</div>
              </div>` : ''}
              ${skills.map(s => {
                const badged = Engine.skillBadged(s.id);
                const prog = Math.min(Engine.state.proficiency[s.id] || 0, 2);
                return `<div class="skill-item" data-act="modal-skill" data-skill="${s.id}">
                  <div class="skill-name-row"><b>${s.name}</b>${s.clip.youtubeId ? '<span class="skill-tag video">▶ DBT-RU</span>' : ''}${badged ? '<span class="skill-tag earned">🏅 ' + esc(s.badge) + '</span>' : '<span class="skill-tag">badge: ' + esc(s.badge) + '</span>'}</div>
                  <div class="skill-desc">${esc(s.short)}</div>
                  ${s.clip.youtubeId ? `<div class="clip-video sm" style="margin-top:10px"><div class="skill-name-row"><b>${esc(s.clip.title)}</b><span class="skill-tag video">▶ DBT-RU</span></div>${s.clip.desc ? `<p class="muted" style="margin:6px 0 0">${esc(s.clip.desc)}</p>` : ''}${this.videoEmbed(s.clip.youtubeId)}</div>` : ''}
                  ${(s.extraClips || []).map(c => `<div class="clip-video sm" style="margin-top:10px"><div class="skill-name-row"><b>${esc(c.title)}</b><span class="skill-tag video">▶ Video</span></div>${c.desc ? `<p class="muted" style="margin:6px 0 0">${esc(c.desc)}</p>` : ''}${this.videoEmbed(c.youtubeId)}</div>`).join('')}
                  <div class="skill-progress progress-track sm" style="margin-top:10px"><div class="progress-fill" style="width:${prog / 2 * 100}%"></div></div>
                </div>`;
              }).join('')}
            </div>
          </div>`;
        }).join('')}
      </div>
    </div>`;
  },

  /* ---------- practice worksheets ---------- */
  renderWorksheets() {
    const isTeen = this.worksheetsAge !== 'adult';
    const modules = DBT_MODULES.map(m => {
      const items = m.skills.map(s => {
        const w = WORKSHEETS[s.id];
        if (!w) return '';
        return `<div class="skill-item ws-sheet">
          <div class="skill-name-row"><b>${esc(s.name)}</b><span class="skill-tag video">📝</span></div>
          <div class="skill-desc" style="margin-top:4px">${esc(w.aim)}</div>
          <ol class="ws-steps">
            ${(w.steps || []).map(p => `<li>${esc(p)}<div class="ws-answer"></div></li>`).join('')}
          </ol>
          <div class="ws-scene">
            <div class="ws-scene-head">Your turn — ${isTeen ? 'Adolescent' : 'Adult'}</div>
            <p>${esc(isTeen ? w.sceneT : w.sceneA)}</p>
            <div class="ws-lines"><div class="ws-line"></div><div class="ws-line"></div><div class="ws-line"></div></div>
          </div>
          <div class="ws-tip"><span>💡</span><span><b>Tip:</b> ${esc(w.tip)}</span></div>
        </div>`;
      }).join('');
      return `<div class="module-card">
        <div class="module-head" style="background:${m.color}16">
          <div class="module-ico" style="background:${m.color}">${m.icon}</div>
          <div><h3>${m.name}</h3><p>${esc(m.motto)}</p></div>
        </div>
        <div class="skill-list">${items}</div>
      </div>`;
    }).join('');
    return `<div class="screen">
      <div class="section-title"><button class="btn sm ghost back no-print" data-act="nav" data-to="map">← Map</button><h2>📝 Practice Worksheets</h2></div>
      <div class="panel ws-header no-print" style="margin-bottom:16px">
        <div class="ws-toggle">
          <button class="ws-age ${isTeen ? 'sel' : ''}" data-act="ws-age" data-v="teen">🧒 Adolescent</button>
          <button class="ws-age ${isTeen ? '' : 'sel'}" data-act="ws-age" data-v="adult">🧑 Adult</button>
        </div>
        <button class="btn gold" data-act="ws-print">🖨 Print worksheets</button>
      </div>
      <div class="ws-fields">
        <div class="ws-field"><label>Name</label><div class="ws-line"></div></div>
        <div class="ws-field"><label>Date</label><div class="ws-line"></div></div>
        <div class="ws-field"><label>Skill I\'m practicing</label><div class="ws-line"></div></div>
      </div>
      <p class="muted" style="margin:12px 0 16px">One practice worksheet per skill — ${isTeen ? 'adolescent' : 'adult'} wording. Answer on paper or on screen, then print a clean copy.</p>
      <div class="coach-grid print-area">${modules}</div>
    </div>`;
  },

  /* ---------- dialectical dilemmas ---------- */
  renderDilemmas() {
    const groups = Object.keys(DILEMMA_GROUPS).map(gid => {
      const g = DILEMMA_GROUPS[gid];
      const items = DIALECTICAL_DILEMMAS.filter(d => d.category === gid);
      return `<div class="module-head" style="margin-top:22px;background:${g.color}16;border-radius:var(--radius-lg)"><div class="module-ico" style="background:${g.color}">${g.emoji}</div><div><h3>${g.title}</h3><p>${esc(g.blurb)}</p></div></div>
        <div class="coach-grid" style="margin-top:12px">${items.map(d => `<div class="module-card">
          <div class="module-head" style="background:${g.color}16">
            <div class="module-ico" style="background:${g.color}">${d.emoji}</div>
            <div><h3>${esc(d.name)}</h3><p>${esc(d.desc)}</p></div>
          </div>
          <div class="skill-list">
            <div class="skill-item">
              ${d.explain ? `<div class="dilemma-explain">
                <div class="dilemma-sec"><b>The dilemma</b><p>${esc(d.explain.what)}</p></div>
                <div class="dilemma-poles">
                  ${d.explain.poles.map((p, i) => `<div class="pole"><span class="pole-tag">${i === 0 ? 'One side' : 'The other side'}</span><p>${esc(p)}</p></div>`).join('<div class="pole-gap">↔</div>')}
                </div>
                <div class="dilemma-sec"><b>Why it\'s a trap</b><p>${esc(d.explain.trap)}</p></div>
                <div class="dilemma-sec dialectic"><b>The dialectic</b><p>${esc(d.explain.dialectic)}</p></div>
                <div class="dilemma-sec ask"><b>Ask yourself</b><p>${esc(d.explain.ask)}</p></div>
              </div>` : ''}
              ${(() => {
                const list = d.clips && d.clips.length ? d.clips : (d.youtubeId ? [{ label: 'See it in action', title: d.name, desc: '', youtubeId: d.youtubeId }] : []);
                if (!list.length) return `<div class="skill-name-row" style="margin-top:14px"><b>See it in action</b><span class="skill-tag video">▶ Video</span></div><p class="muted" style="margin-top:10px">🎬 Video coming soon</p>`;
                return list.map(c => `<div class="skill-name-row" style="margin-top:14px"><b>${esc(c.label)}</b><span class="skill-tag video">▶ Watch</span></div>
                  ${c.title ? `<p class="muted" style="margin:6px 0 0">${esc(c.title)}${c.desc ? ' — ' + esc(c.desc) : ''}</p>` : ''}
                  <div class="clip-video sm" style="margin-top:10px">${this.videoEmbed(c.youtubeId)}</div>`).join('');
              })()}
            </div>
          </div>
        </div>`).join('')}</div>`;
    }).join('');
    return `<div class="screen">
      <div class="section-title"><button class="btn sm ghost back" data-act="nav" data-to="map">← Map</button><h2>⚖️ Dialectical Dilemmas</h2></div>
      <p class="muted" style="margin-bottom:16px">DBT says the trap isn\'t picking a side — it\'s being stuck between two extremes that both feel right. Each dilemma is a both/and: two valid pulls, and wisdom in the middle.</p>
      ${groups}
    </div>`;
  },

  /* ---------- levels of validation ---------- */
  renderValidation() {
    return `<div class="screen">
      <div class="section-title"><button class="btn sm ghost back" data-act="nav" data-to="map">← Map</button><h2>💗 Levels of Validation</h2></div>
      <p class="muted" style="margin-bottom:16px">Six ways to make someone feel truly understood — each one a step deeper into the same gift.</p>
      <div class="coach-grid">
        ${VALIDATION_LEVELS.map(v => `<div class="module-card">
          <div class="module-head" style="background:#ff6b8a16">
            <div class="module-ico" style="background:#ff6b8a">${v.emoji}</div>
            <div><h3>${v.level}. ${esc(v.name)}</h3><p>${esc(v.desc)}</p></div>
          </div>
          <div class="skill-list">
            ${['edu', 'movie'].map(kind => {
              const vv = v[kind];
              const label = kind === 'edu' ? '📚 Learn it' : '🎬 See it in film';
              if (!vv || !vv.youtubeId) return `<div class="skill-item">
                <div class="skill-name-row"><b>${label}</b><span class="skill-tag video">▶ Video</span></div>
                <p class="muted" style="margin-top:10px">🎬 Video coming soon</p>
              </div>`;
              return `<div class="skill-item">
                <div class="skill-name-row"><b>${label}: ${esc(vv.title)}</b><span class="skill-tag video">▶ Video</span></div>
                <div class="clip-video sm" style="margin-top:10px">${this.videoEmbed(vv.youtubeId)}</div>
              </div>`;
            }).join('')}
          </div>
        </div>`).join('')}
      </div>
    </div>`;
  },

  /* ---------- games hub ---------- */
  renderGames() {
    return `<div class="screen">
      <div class="section-title"><button class="btn sm ghost back" data-act="nav" data-to="map">← Map</button><h2>🎮 Mini Games</h2></div>
      <p class="muted" style="margin-bottom:16px">Play your way through DBT — a growing set of games that turn skills practice into fun.</p>
      <div class="coach-grid">
        ${GAMES.map(g => `<div class="module-card">
          <div class="module-head" style="background:#34d1bf16">
            <div class="module-ico" style="background:#34d1bf">${g.emoji}</div>
            <div><h3>${esc(g.name)}</h3><p>${esc(g.desc)}</p></div>
          </div>
          <div class="skill-list">
            <div class="skill-item">
              <div class="skill-name-row"><b>${esc(g.name)}</b><span class="skill-tag video">🎲</span></div>
              ${g.status === 'soon' ? `<p class="muted" style="margin-top:10px">🛠️ In the works — coming soon</p>` : `<button class="btn teal" style="margin-top:10px" data-act="play-game" data-id="${esc(g.id)}">▶ Play ${esc(g.name)}</button>`}
            </div>
          </div>
          </div>
        </div>`).join('')}
      </div>
    </div>`;
  },

  /* ---------- jeopardy game ---------- */
  playGame(id) {
    if (id === 'jeopardy') {
      if (!this.jeopardy) this.jeopardyReset();
      this.show('jeopardy');
      return;
    }
    if (id === 'skill-scramble') {
      this.scrambleStart();
      this.show('scramble');
      return;
    }
    if (id === 'word-search') {
      this.wordSearchStart();
      this.show('wordsearch');
      return;
    }
    if (id === 'crossword') {
      this.crosswordStart();
      this.show('crossword');
      return;
    }
    if (id === 'skills-matching') {
      this.matchingStart();
      this.show('matching');
      return;
    }
    if (id === 'skill-charades') {
      this.charadesStart();
      this.show('charades');
      return;
    }
    this.toast('🛠️ That game is in the works — coming soon.', '');
  },

  jeopardyBoard() {
    const id = this.jeopardy && this.jeopardy.boardId;
    return JEOPARDY_BOARDS.find(b => b.id === id) || JEOPARDY_BOARDS[0];
  },

  jeopardyReset() {
    this.jeopardy = {
      boardId: this.jeopardy ? this.jeopardy.boardId : JEOPARDY_BOARDS[0].id,
      score: 0, played: {}, sel: null, picking: false
    };
  },

  jeopardySelectBoard(id) {
    this.jeopardy = { boardId: id, score: 0, played: {}, sel: null, picking: false };
    this.renderAll();
  },

  jeopardyShowBoards() {
    if (!this.jeopardy) this.jeopardyReset();
    this.jeopardy.picking = true;
    this.jeopardy.sel = null;
    this.renderAll();
  },

  jeopardySelect(cat, i) {
    const key = cat + '-' + i;
    if (this.jeopardy.played[key]) return;
    this.jeopardy.sel = { cat: +cat, i: +i, revealed: false };
    this.renderAll();
  },

  jeopardyReveal() {
    if (this.jeopardy.sel) this.jeopardy.sel.revealed = true;
    this.renderAll();
  },

  jeopardyScore(correct) {
    const s = this.jeopardy.sel;
    if (s && !this.jeopardy.played[s.cat + '-' + s.i]) {
      this.jeopardy.played[s.cat + '-' + s.i] = true;
      if (correct) {
        const b = this.jeopardyBoard();
        const c = b.categories[s.cat].clues[s.i];
        this.jeopardy.score += c.v;
        this.sound('correct');
      }
    }
    this.jeopardy.sel = null;
    this.renderAll();
  },

  jeopardyRestart() {
    this.jeopardyReset();
    this.renderAll();
  },

  renderJeopardy() {
    const g = this.jeopardy || (this.jeopardyReset(), this.jeopardy);
    if (g.picking || !g.boardId) return this.renderJeopardyBoards();
    const b = this.jeopardyBoard();
    const sel = g.sel;
    const total = b.categories.reduce((n, c) => n + c.clues.length, 0);
    const played = Object.keys(g.played).length;
    const done = played === total;
    const top = `<div class="section-title"><button class="btn sm ghost back" data-act="nav" data-to="map">← Map</button><h2>🔔 ${esc(b.title)}</h2></div>
      <div class="stats-grid" style="grid-template-columns:repeat(3,1fr)">
        <div class="stat-card"><b>${g.score.toLocaleString()}</b><span>Score</span></div>
        <div class="stat-card"><b>${played}/${total}</b><span>Clues played</span></div>
        <div class="stat-card"><b>${done ? '🏁 Game over' : 'Keep going'}</b><span>${done ? 'Great round!' : 'Pick a clue'}</span></div>
      </div>`;
    if (done) {
      return `<div class="screen">${top}
        <div class="panel" style="text-align:center;padding:40px 20px;margin-top:14px">
          <h3>🎉 Board cleared!</h3>
          <p class="muted">Final score: <b>${g.score.toLocaleString()}</b></p>
          <button class="btn teal" data-act="jeopardy-restart" style="margin-top:10px">↺ Play Again</button>
          <button class="btn ghost" data-act="jeopardy-boards" style="margin-top:8px">📚 Switch Board</button>
        </div>
      </div>`;
    }
    if (sel) {
      const cat = b.categories[sel.cat];
      const clue = cat.clues[sel.i];
      return `<div class="screen">${top}
        <div class="panel" style="margin-top:14px;text-align:center">
          <span class="skill-tag video" style="margin:0 auto 10px">${cat.emoji} ${esc(cat.name)} · ${clue.v}</span>
          <h3 style="font-size:1.35rem;line-height:1.5;min-height:96px;display:flex;align-items:center;justify-content:center">${esc(clue.q)}</h3>
          ${sel.revealed
            ? `<div style="margin-top:16px"><p class="muted">Answer:</p><h3 style="color:var(--teal, #0f9d8a)">${esc(clue.a)}</h3></div>
               <div style="margin-top:20px;display:flex;gap:10px;justify-content:center;flex-wrap:wrap">
                 <button class="btn teal" data-act="jeopardy-got">✅ I got it · +${clue.v}</button>
                 <button class="btn ghost" data-act="jeopardy-miss">❌ Missed it</button>
               </div>`
            : `<button class="btn gold" style="margin-top:16px" data-act="jeopardy-reveal">👀 Reveal Answer</button>`}
        </div>
      </div>`;
    }
    return `<div class="screen">${top}
      <p class="muted" style="margin:10px 0 16px">${esc(b.tagline)}</p>
      <div class="jeopardy-board">
        ${b.categories.map((c, ci) => `<div class="jeopardy-col">
          <div class="jeopardy-cat">${c.emoji} ${esc(c.name)}</div>
          ${c.clues.map((cl, i) => {
            const key = ci + '-' + i;
            const used = g.played[key];
            return `<button class="jeopardy-cell ${used ? 'done' : ''}" data-act="jeopardy-clue" data-cat="${ci}" data-i="${i}" ${used ? 'disabled' : ''}>${used ? '✓' : cl.v}</button>`;
          }).join('')}
        </div>`).join('')}
      </div>
      <div style="display:flex;gap:8px;justify-content:center;flex-wrap:wrap">
        <button class="btn ghost sm" data-act="jeopardy-boards" style="margin-top:12px">📚 Switch Board</button>
        <button class="btn ghost sm" data-act="jeopardy-restart" style="margin-top:12px">↺ Restart Board</button>
      </div>
    </div>`;
  },

  renderJeopardyBoards() {
    const top = `<div class="section-title"><button class="btn sm ghost back" data-act="nav" data-to="map">← Map</button><h2>🔔 DBT Jeopardy</h2></div>
      <p class="muted" style="margin:10px 0 16px">Pick a board to play. Each board is a full 5×5 round from the group\'s DBT Jeopardy PowerPoints.</p>`;
    return `<div class="screen">${top}
      <div class="coach-grid">
        ${JEOPARDY_BOARDS.map(b => `<button class="module-card" data-act="jeopardy-board" data-id="${b.id}" style="text-align:left;cursor:pointer">
          <div class="module-head" style="background:#6b7cff16">
            <div class="module-ico" style="background:#6b7cff">🔔</div>
            <div><h3>${esc(b.title)}</h3><p>${esc(b.tagline)}</p></div>
          </div>
          <div class="skill-list" style="padding:8px 14px 12px">
            ${b.categories.map(c => `<span class="skill-tag video" style="margin:3px 3px 0 0;display:inline-block">${c.emoji} ${esc(c.name)}</span>`).join('')}
          </div>
        </button>`).join('')}
      </div>
    </div>`;
  },

  /* ---------- skill scramble ---------- */
  _shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  },
  scrambleStart() {
    const pool = this._shuffle(SCRAMBLE_WORDS.slice()).slice(0, 10).map(w => {
      const letters = w.word.split('');
      let s = letters.slice();
      let tries = 0;
      do { s = this._shuffle(letters); tries++; } while (s.join('') === w.word && tries < 12);
      return Object.assign({}, w, { letters: s });
    });
    this.scramble = { pool, idx: 0, picked: [], score: 0, done: 0, hint: false, wrong: false, solved: false };
  },
  scramblePick(i) {
    const g = this.scramble;
    if (!g || g.solved || g.picked.indexOf(i) >= 0) return;
    g.picked.push(i);
    g.wrong = false;
  },
  scrambleBack() {
    const g = this.scramble;
    if (!g || g.solved) return;
    g.picked.pop();
    g.wrong = false;
  },
  scrambleClear() {
    const g = this.scramble;
    if (!g) return;
    g.picked = [];
    g.wrong = false;
  },
  scrambleShuffle() {
    const g = this.scramble;
    if (!g || g.solved) return;
    const cur = g.pool[g.idx];
    let s;
    let tries = 0;
    do { s = this._shuffle(cur.letters.slice()); tries++; } while (s.join('') === cur.word && tries < 12);
    cur.letters = s;
    g.picked = [];
    g.wrong = false;
    this.sound('click');
  },
  scrambleCheck() {
    const g = this.scramble;
    const cur = g.pool[g.idx];
    const guess = g.picked.map(i => cur.letters[i]).join('');
    if (guess === cur.word) {
      g.solved = true;
      g.score += 10;
      g.done++;
      this.sound('correct');
      this.toast(`✅ ${esc(cur.label)} — nice unscramble!`, 'teal');
    } else {
      g.wrong = true;
      this.sound('wrong');
      this.toast('Not quite — give it another go.', '');
    }
  },
  scrambleHint() {
    this.scramble.hint = true;
    this.sound('click');
  },
  scrambleReveal() {
    const g = this.scramble;
    const cur = g.pool[g.idx];
    if (g.solved) return;
    g.solved = true;
    g.score += 5;
    g.done++;
    this.sound('correct');
    this.toast(`💡 ${esc(cur.label)} — ${esc(cur.clue)}`, '');
  },
  scrambleNext() {
    const g = this.scramble;
    g.idx++;
    g.picked = [];
    g.hint = false;
    g.wrong = false;
    g.solved = false;
  },
  renderScramble() {
    if (!this.scramble) this.scrambleStart();
    const g = this.scramble;
    const cur = g.pool[g.idx];
    const last = g.idx >= g.pool.length - 1;
    const done = g.done >= g.pool.length;
    const top = `<div class="section-title"><button class="btn sm ghost back" data-act="nav" data-to="map">← Map</button><h2>🔤 Skill Scramble</h2></div>
      <div class="stats-grid" style="grid-template-columns:repeat(3,1fr)">
        <div class="stat-card"><b>${g.score}</b><span>Score</span></div>
        <div class="stat-card"><b>${g.done}/${g.pool.length}</b><span>Solved</span></div>
        <div class="stat-card"><b>${g.idx + 1}/${g.pool.length}</b><span>Round</span></div>
      </div>`;
    if (done) {
      return `<div class="screen">${top}
        <div class="panel" style="text-align:center;padding:40px 20px;margin-top:14px">
          <h3>🏆 All skills unscrambled!</h3>
          <p class="muted">Final score: <b>${g.score}</b> — 10 points per skill, 5 if you revealed.</p>
          <button class="btn teal" data-act="scramble-new" style="margin-top:10px">↺ Play Again</button>
          <button class="btn ghost" data-act="games" style="margin-top:8px">🎮 More Mini Games</button>
        </div>
      </div>`;
    }
    const boxes = cur.word.split('').map((ch, i) => {
      const val = i < g.picked.length ? cur.letters[g.picked[i]] : '';
      return `<div class="scramble-box ${val ? '' : 'empty'}">${val || ''}</div>`;
    }).join('');
    const tiles = cur.letters.map((ch, i) => {
      const used = g.picked.indexOf(i) >= 0;
      return `<button class="scramble-tile" data-act="scramble-pick" data-i="${i}" ${used || g.solved ? 'disabled' : ''}>${ch}</button>`;
    }).join('');
    return `<div class="screen">${top}
      <p class="muted" style="text-align:center;margin:6px 0 4px">Unscramble the letters to name the DBT skill. Tap a letter to add it to your answer.</p>
      <div class="scramble-wrap ${g.wrong ? 'wrong' : ''}">
        <div class="scramble-picked">${boxes}</div>
        <div class="scramble-tiles">${tiles}</div>
      </div>
      <div style="display:flex;gap:8px;justify-content:center;flex-wrap:wrap">
        <button class="btn ghost sm" data-act="scramble-shuffle" ${g.solved ? 'disabled' : ''}>🔀 Shuffle</button>
        <button class="btn ghost sm" data-act="scramble-back">⌫ Undo</button>
        <button class="btn ghost sm" data-act="scramble-clear">✕ Clear</button>
        <button class="btn teal sm" data-act="scramble-check" ${g.solved ? 'disabled' : ''}>✔ Check</button>
      </div>
      <div class="panel" style="margin-top:16px;text-align:center">
        ${g.solved
          ? `<h3 style="color:var(--teal, #0f9d8a)">✅ ${esc(cur.label)}</h3><p class="muted">${esc(cur.clue)}</p>
             <button class="btn gold" style="margin-top:12px" data-act="scramble-next">${last ? '🏁 Finish' : 'Next →'}</button>`
          : `<p class="muted">${g.hint ? `💡 ${esc(cur.module)}: ${esc(cur.clue)}` : 'Stuck? A hint reveals the module and clue.'}</p>
             <div style="display:flex;gap:8px;justify-content:center;flex-wrap:wrap;margin-top:8px">
               <button class="btn ghost sm" data-act="scramble-hint">💡 Hint</button>
               <button class="btn ghost sm" data-act="scramble-reveal">👀 Reveal (+5)</button>
             </div>`
          }
      </div>
    </div>`;
  },

  /* ---------- dbt word search ---------- */
  wordSearchStart() {
    const words = this._shuffle(WORDSEARCH_WORDS.slice()).slice(0, 10);
    words.sort((a, b) => b.word.length - a.word.length);
    const longest = Math.max(...words.map(w => w.word.length));
    const size = Math.max(12, longest + 2);
    const grid = [];
    for (let r = 0; r < size; r++) grid.push(new Array(size).fill(null));
    const dirs = [[0, 1], [1, 0], [1, 1], [1, -1], [0, -1], [-1, 0], [-1, -1], [-1, 1]];
    const placed = [];
    const cellOwner = {};
    for (const w of words) {
      const letters = w.word.split('');
      const len = letters.length;
      let ok = false;
      for (let t = 0; t < 90 && !ok; t++) {
        const d = dirs[Math.floor(Math.random() * 8)];
        const dr = d[0], dc = d[1];
        const r = (dr >= 0 ? 0 : len - 1) + Math.floor(Math.random() * (size - len + 1));
        const c = (dc >= 0 ? 0 : len - 1) + Math.floor(Math.random() * (size - len + 1));
        let fit = true;
        for (let k = 0; k < len; k++) {
          const v = grid[r + k * dr][c + k * dc];
          if (v && v !== letters[k]) { fit = false; break; }
        }
        if (fit) {
          const cells = [];
          for (let k = 0; k < len; k++) {
            const rr = r + k * dr, cc = c + k * dc;
            grid[rr][cc] = letters[k];
            cells.push(rr + ',' + cc);
          }
          placed.push({ word: w.word, label: w.label, cells });
          cells.forEach(cell => { cellOwner[cell] = w.word; });
          ok = true;
        }
      }
    }
    const alpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    for (let r = 0; r < size; r++) for (let c = 0; c < size; c++) if (!grid[r][c]) grid[r][c] = alpha[Math.floor(Math.random() * 26)];
    this.wordSearch = { grid, size, words: placed, found: {}, cellOwner };
  },
  wordSearchLine(a, b) {
    const pa = a.split(',').map(Number), pb = b.split(',').map(Number);
    const dr = pb[0] - pa[0], dc = pb[1] - pa[1];
    if (dr === 0 && dc === 0) return [a];
    if (dr !== 0 && dc !== 0 && Math.abs(dr) !== Math.abs(dc)) return null;
    const stepR = dr === 0 ? 0 : dr / Math.abs(dr);
    const stepC = dc === 0 ? 0 : dc / Math.abs(dc);
    const steps = Math.max(Math.abs(dr), Math.abs(dc));
    const cells = [];
    for (let k = 0; k <= steps; k++) cells.push((pa[0] + k * stepR) + ',' + (pa[1] + k * stepC));
    return cells;
  },
  wordSearchCheck(cells) {
    const g = this.wordSearch;
    if (!g) return;
    const str = cells.map(cell => { const p = cell.split(',').map(Number); return g.grid[p[0]][p[1]]; }).join('');
    const rev = str.split('').reverse().join('');
    let hit = null;
    for (const w of g.words) {
      if (g.found[w.word]) continue;
      if (str === w.word || rev === w.word) { hit = w; break; }
    }
    if (hit) {
      g.found[hit.word] = hit.cells;
      this.sound('correct');
      this.toast(`🎉 Found ${esc(hit.label)}!`, 'teal');
      const n = Object.keys(g.found).length;
      if (n === g.words.length) { setTimeout(() => this.confetti(), 120); this.toast('🏆 Word search cleared!', 'gold'); }
    } else {
      this.sound('wrong');
    }
  },
  wordSearchPaint() {
    const board = document.querySelector('.wsearch-grid');
    if (!board) return;
    const g = this.wordSearch;
    board.querySelectorAll('.wsearch-cell').forEach(td => {
      const owner = g.cellOwner[td.dataset.cell];
      td.classList.remove('sel', 'found');
      if (owner && g.found[owner]) td.classList.add('found');
    });
    if (this._wsDrag) {
      this._wsDrag.cells.forEach(cell => {
        const td = board.querySelector('[data-cell="' + cell + '"]');
        if (td) td.classList.add('sel');
      });
    }
  },
  initWordSearch(app) {
    const grid = app.querySelector('.wsearch-grid');
    if (!grid) return;
    this._wsDrag = null;
    grid.addEventListener('pointerdown', e => {
      const td = e.target.closest('.wsearch-cell');
      if (!td) return;
      try { grid.setPointerCapture(e.pointerId); } catch (err) {}
      this._wsDrag = { start: td.dataset.cell, cells: [td.dataset.cell] };
      this.wordSearchPaint();
    });
    grid.addEventListener('pointermove', e => {
      if (!this._wsDrag) return;
      const el = document.elementFromPoint(e.clientX, e.clientY);
      const td = el && el.closest('.wsearch-cell');
      if (!td) return;
      const line = this.wordSearchLine(this._wsDrag.start, td.dataset.cell);
      if (line) this._wsDrag.cells = line;
      this.wordSearchPaint();
    });
    grid.addEventListener('pointerup', () => {
      if (!this._wsDrag) return;
      this.wordSearchCheck(this._wsDrag.cells);
      this._wsDrag = null;
      this.wordSearchPaint();
    });
  },
  renderWordSearch() {
    const g = this.wordSearch || (this.wordSearchStart(), this.wordSearch);
    const total = g.words.length;
    const foundN = Object.keys(g.found).length;
    const done = foundN === total;
    const top = `<div class="section-title"><button class="btn sm ghost back" data-act="nav" data-to="map">← Map</button><h2>🔍 DBT Word Search</h2></div>
      <div class="stats-grid" style="grid-template-columns:repeat(3,1fr)">
        <div class="stat-card"><b>${foundN}/${total}</b><span>Found</span></div>
        <div class="stat-card"><b>${g.size}×${g.size}</b><span>Grid</span></div>
        <div class="stat-card"><b>${done ? '🏁 Cleared!' : 'Keep hunting'}</b><span>${done ? 'Nice work!' : 'Drag to select'}</span></div>
      </div>`;
    if (done) {
      return `<div class="screen">${top}
        <div class="panel" style="text-align:center;padding:40px 20px;margin-top:14px">
          <h3>🏆 All ${total} skills found!</h3>
          <p class="muted">You spotted every DBT skill hiding in the grid.</p>
          <button class="btn teal" data-act="wordsearch-new" style="margin-top:10px">↺ New Puzzle</button>
          <button class="btn ghost" data-act="games" style="margin-top:8px">🎮 More Mini Games</button>
        </div>
      </div>`;
    }
    const rows = [];
    for (let r = 0; r < g.size; r++) {
      let tds = '';
      for (let c = 0; c < g.size; c++) {
        const cell = r + ',' + c;
        const owner = g.cellOwner[cell];
        const cls = owner && g.found[owner] ? 'found' : '';
        tds += `<td class="wsearch-cell ${cls}" data-cell="${cell}">${g.grid[r][c]}</td>`;
      }
      rows.push(`<tr>${tds}</tr>`);
    }
    const chips = g.words.map(w => `<span class="wsearch-word ${g.found[w.word] ? 'found' : ''}">${esc(w.label)}</span>`).join('');
    return `<div class="screen">${top}
      <p class="muted" style="text-align:center;margin:6px 0 14px">Drag across a straight line of letters to mark a word — forwards or backwards.</p>
      <div class="wsearch-board"><table class="wsearch-grid">${rows.join('')}</table></div>
      <div class="wsearch-words">${chips}</div>
      <div style="display:flex;gap:8px;justify-content:center;margin-top:12px">
        <button class="btn ghost sm" data-act="wordsearch-new">🔀 Shuffle</button>
      </div>
    </div>`;
  },

  /* ---------- dbt crossword ---------- */
  crosswordStart() {
    const SIZE = 26;
    const grid = [];
    for (let r = 0; r < SIZE; r++) grid.push(new Array(SIZE).fill(null));
    const entries = [];
    const clues = CROSSWORD_CLUES.slice().sort((a, b) => b.answer.length - a.answer.length);

    const fits = (word, r, c, dr, dc) => {
      const L = word.length;
      if (r < 0 || c < 0 || r + dr * (L - 1) >= SIZE || c + dc * (L - 1) >= SIZE) return false;
      for (let k = 0; k < L; k++) {
        const v = grid[r + dr * k][c + dc * k];
        if (v && v !== word[k]) return false;
      }
      const er = r - dr, ec = c - dc;
      const lr = r + dr * L, lc = c + dc * L;
      if (er >= 0 && ec >= 0 && grid[er][ec]) return false;
      if (lr < SIZE && lc < SIZE && grid[lr][lc]) return false;
      return true;
    };
    const place = (word, r, c, dr, dc) => {
      for (let k = 0; k < word.length; k++) grid[r + dr * k][c + dc * k] = word[k];
    };

    const first = clues[0];
    place(first.answer, 5, 5, 0, 1);
    entries.push({ word: first.answer, clue: first.clue, dir: 'across', r: 5, c: 5 });

    for (let i = 1; i < clues.length; i++) {
      const w = clues[i];
      let best = null;
      for (const p of entries) {
        for (let k = 0; k < p.word.length; k++) {
          const pr = p.dir === 'across' ? p.r : p.r + k;
          const pc = p.dir === 'across' ? p.c + k : p.c;
          const ch = p.word[k];
          const idx = w.answer.indexOf(ch);
          if (idx < 0) continue;
          const dr = p.dir === 'across' ? 1 : 0;
          const dc = p.dir === 'across' ? 0 : 1;
          const nr = pr - idx * dr;
          const nc = pc - idx * dc;
          if (!fits(w.answer, nr, nc, dr, dc)) continue;
          const score = 100 - idx;
          if (!best || score > best.score) best = { r: nr, c: nc, dr, dc, score };
        }
      }
      if (best) {
        place(w.answer, best.r, best.c, best.dr, best.dc);
        entries.push({ word: w.answer, clue: w.clue, dir: best.dr === 1 ? 'down' : 'across', r: best.r, c: best.c });
      }
    }

    let minR = SIZE, minC = SIZE, maxR = 0, maxC = 0;
    for (let r = 0; r < SIZE; r++) for (let c = 0; c < SIZE; c++) if (grid[r][c]) {
      if (r < minR) minR = r; if (c < minC) minC = c; if (r > maxR) maxR = r; if (c > maxC) maxC = c;
    }
    const rows = maxR - minR + 1, cols = maxC - minC + 1;
    const answers = {};
    for (let r = minR; r <= maxR; r++) for (let c = minC; c <= maxC; c++) if (grid[r][c]) answers[(r - minR) + ',' + (c - minC)] = grid[r][c];

    const starts = [];
    const seen = {};
    entries.forEach(p => {
      const key = (p.r - minR) + ',' + (p.c - minC);
      if (!seen[key]) { seen[key] = true; starts.push({ key, r: p.r - minR, c: p.c - minC }); }
    });
    starts.sort((a, b) => (a.r - b.r) || (a.c - b.c));
    starts.forEach((s, i) => s.num = i + 1);
    const numMap = {};
    starts.forEach(s => { numMap[s.key] = s.num; });
    entries.forEach(p => { p.key = (p.r - minR) + ',' + (p.c - minC); p.num = numMap[p.key]; });

    this.crossword = { rows, cols, answers, entries, numMap, active: null };
  },
  crosswordRun(r, c, dir) {
    const g = this.crossword;
    const cells = [];
    if (dir === 'across') {
      let c0 = c; while (g.answers[r + ',' + (c0 - 1)]) c0--;
      let c1 = c; while (g.answers[r + ',' + (c1 + 1)]) c1++;
      for (let cc = c0; cc <= c1; cc++) cells.push(r + ',' + cc);
    } else {
      let r0 = r; while (g.answers[(r0 - 1) + ',' + c]) r0--;
      let r1 = r; while (g.answers[(r1 + 1) + ',' + c]) r1++;
      for (let rr = r0; rr <= r1; rr++) cells.push(rr + ',' + c);
    }
    return cells;
  },
  crosswordActiveSet(r, c, dir) {
    if (!this.crossword) return;
    this.crossword.active = { r, c, dir };
  },
  crosswordPaint() {
    const board = document.querySelector('.xw-table');
    if (!board) return;
    const g = this.crossword;
    board.querySelectorAll('.xw-cell').forEach(inp => {
      inp.classList.remove('active');
      if (g.active) {
        const run = this.crosswordRun(g.active.r, g.active.c, g.active.dir);
        if (run.indexOf(inp.dataset.r + ',' + inp.dataset.c) >= 0) inp.classList.add('active');
      }
    });
  },
  crosswordFlip() {
    const g = this.crossword;
    if (!g.active) return;
    const runA = this.crosswordRun(g.active.r, g.active.c, 'across');
    const runD = this.crosswordRun(g.active.r, g.active.c, 'down');
    if (g.active.dir === 'across' && runD.length > 1) g.active.dir = 'down';
    else if (g.active.dir === 'down' && runA.length > 1) g.active.dir = 'across';
    this.crosswordPaint();
  },
  crosswordNext(r, c, dir, step) {
    const run = this.crosswordRun(r, c, dir);
    const idx = run.indexOf(r + ',' + c);
    const nx = idx + step;
    if (nx < 0 || nx >= run.length) return null;
    const p = run[nx].split(',');
    return { r: +p[0], c: +p[1] };
  },
  crosswordCheck() {
    const board = document.querySelector('.xw-table');
    const g = this.crossword;
    if (!board || !g) return;
    let correct = 0, total = 0, wrong = 0, empty = 0;
    board.querySelectorAll('.xw-cell').forEach(inp => {
      const ans = g.answers[inp.dataset.r + ',' + inp.dataset.c];
      const v = (inp.value || '').toUpperCase().trim();
      total++;
      inp.classList.remove('ok', 'wrong');
      if (!v) { empty++; return; }
      if (v === ans) { inp.classList.add('ok'); correct++; }
      else { inp.classList.add('wrong'); wrong++; }
    });
    const status = document.getElementById('xw-status');
    if (status) status.textContent = correct;
    if (wrong > 0) { this.sound('wrong'); this.toast(`${correct} correct, ${wrong} to fix.`, ''); }
    else if (empty > 0) { this.sound('click'); this.toast(`${correct} correct — ${empty} squares still empty.`, 'teal'); }
    else if (correct === total) {
      this.sound('badge'); this.confetti();
      this.toast('🏆 Crossword complete — every DBT clue solved!', 'gold');
    } else { this.sound('correct'); this.toast('All filled in correctly — great job!', 'teal'); }
  },
  crosswordReveal() {
    const board = document.querySelector('.xw-table');
    const g = this.crossword;
    if (!board || !g || !g.active) return;
    const run = this.crosswordRun(g.active.r, g.active.c, g.active.dir);
    run.forEach(key => {
      const p = key.split(',');
      const inp = board.querySelector('[data-r="' + p[0] + '"][data-c="' + p[1] + '"]');
      if (inp) { inp.value = g.answers[key]; inp.classList.remove('wrong'); inp.classList.add('revealed'); }
    });
    this.sound('correct');
    this.toast('Word revealed — absorbed it for next time!', 'teal');
  },
  initCrossword(app) {
    const board = app.querySelector('.xw-table');
    if (!board) return;
    board.addEventListener('focusin', e => {
      const inp = e.target.closest('.xw-cell');
      if (!inp) return;
      const r = +inp.dataset.r, c = +inp.dataset.c;
      const g = this.crossword;
      const hasAcross = this.crosswordRun(r, c, 'across').length > 1;
      const hasDown = this.crosswordRun(r, c, 'down').length > 1;
      let dir = 'across';
      if (g.active && g.active.r === r && g.active.c === c) dir = g.active.dir;
      else if (!hasAcross && hasDown) dir = 'down';
      this.crosswordActiveSet(r, c, dir);
      this.crosswordPaint();
    });
    board.addEventListener('input', e => {
      const inp = e.target.closest('.xw-cell');
      if (!inp) return;
      inp.value = (inp.value || '').slice(-1).toUpperCase();
      inp.classList.remove('wrong');
      const a = this.crossword && this.crossword.active;
      if (a) {
        const next = this.crosswordNext(a.r, a.c, a.dir, 1);
        if (next) {
          const el = board.querySelector('[data-r="' + next.r + '"][data-c="' + next.c + '"]');
          if (el) el.focus();
        }
      }
    });
    board.addEventListener('keydown', e => {
      const inp = e.target.closest('.xw-cell');
      if (!inp) return;
      const a = this.crossword && this.crossword.active;
      if (!a) return;
      if (e.key === 'Backspace' && inp.value === '') {
        const prev = this.crosswordNext(a.r, a.c, a.dir, -1);
        if (prev) {
          const el = board.querySelector('[data-r="' + prev.r + '"][data-c="' + prev.c + '"]');
          if (el) { el.focus(); el.value = ''; }
        }
        return;
      }
      const moves = { ArrowLeft: [0, -1], ArrowRight: [0, 1], ArrowUp: [-1, 0], ArrowDown: [1, 0] };
      if (moves[e.key]) {
        e.preventDefault();
        const m = moves[e.key];
        const el = board.querySelector('[data-r="' + (a.r + m[0]) + '"][data-c="' + (a.c + m[1]) + '"]');
        if (el) el.focus();
      }
    });
  },
  renderCrossword() {
    if (!this.crossword) this.crosswordStart();
    const g = this.crossword;
    const top = `<div class="section-title"><button class="btn sm ghost back" data-act="nav" data-to="map">← Map</button><h2>🧩 DBT Crossword</h2></div>
      <p class="muted" style="margin:6px 0 14px">Click a square and type the letter. Each clue is a DBT skill, word, or idea.</p>`;
    const rows = [];
    for (let r = 0; r < g.rows; r++) {
      let tds = '';
      for (let c = 0; c < g.cols; c++) {
        const key = r + ',' + c;
        if (!g.answers[key]) { tds += `<td class="xw-cell-wrap"><div class="xw-block"></div></td>`; continue; }
        const num = g.numMap[key] || '';
        tds += `<td class="xw-cell-wrap">${num ? `<span class="xw-num">${num}</span>` : ''}<input class="xw-cell" data-r="${r}" data-c="${c}" maxlength="1" autocomplete="off" autocapitalize="characters" spellcheck="false"></td>`;
      }
      rows.push(`<tr>${tds}</tr>`);
    }
    const across = g.entries.filter(e => e.dir === 'across').sort((a, b) => a.num - b.num);
    const down = g.entries.filter(e => e.dir === 'down').sort((a, b) => a.num - b.num);
    const clueCol = (title, list) => `<div class="xw-clues-col"><b>${title}</b>${list.map(e => `<p><b>${e.num}.</b> ${esc(e.clue)}</p>`).join('') || '<p class="muted">—</p>'}</div>`;
    return `<div class="screen">${top}
      <div class="stats-grid" style="grid-template-columns:repeat(3,1fr)">
        <div class="stat-card"><b>${g.entries.length}</b><span>Words</span></div>
        <div class="stat-card"><b>${Object.keys(g.answers).length}</b><span>Squares</span></div>
        <div class="stat-card"><b id="xw-status">0</b><span>Correct</span></div>
      </div>
      <div class="xw-board"><table class="xw-table">${rows.join('')}</table></div>
      <div style="display:flex;gap:8px;justify-content:center;flex-wrap:wrap;margin-top:12px">
        <button class="btn teal sm" data-act="crossword-check">✔ Check</button>
        <button class="btn ghost sm" data-act="crossword-reveal">👀 Reveal Word</button>
        <button class="btn ghost sm" data-act="crossword-flip">↔ Flip Direction</button>
        <button class="btn ghost sm" data-act="crossword-new">↺ New Puzzle</button>
      </div>
      <div class="xw-clues">${clueCol('Across', across)}${clueCol('Down', down)}</div>
    </div>`;
  },

  /* ---------- skills matching (model of emotions) ---------- */
  matchingStart() {
    const order = this._shuffle(MODEL_OF_EMOTIONS.map((_, i) => i));
    this.matching = {
      slots: MODEL_OF_EMOTIONS.map(s => ({ part: s.part, desc: s.desc, correct: s.skill, skillName: null })),
      chips: order,
      sel: null,
      score: 0,
      wrongs: 0,
      placed: 0
    };
  },

  matchingSelect(i) {
    const g = this.matching;
    if (!g) return;
    g.sel = (g.sel === i) ? null : i;
    if (g.sel != null) this.sound('click');
  },

  matchingPlace(slotIdx) {
    const g = this.matching;
    if (!g) return;
    const slot = g.slots[slotIdx];
    if (slot.skillName) { this.toast('That part is already filled.', ''); return; }
    if (g.sel == null) { this.toast('Pick a skill first, then tap the part where it fits.', ''); return; }
    const model = MODEL_OF_EMOTIONS[g.sel];
    if (model.skill === slot.correct) {
      slot.skillName = model.skillName;
      g.score += 10;
      g.placed++;
      g.chips = g.chips.filter(x => x !== g.sel);
      g.sel = null;
      this.sound('correct');
      this.toast(`✅ ${model.skillName} fits the ${slot.part} part!`, 'teal');
      if (g.placed === g.slots.length) {
        setTimeout(() => this.confetti(), 150);
        this.toast('🏆 Model of Emotions complete!', 'gold');
      }
    } else {
      g.wrongs++;
      this.sound('wrong');
      this.toast(`Not quite — ${model.skillName} belongs to a different part. Try again.`, '');
    }
  },

  renderMatching() {
    if (!this.matching) this.matchingStart();
    const g = this.matching;
    const done = g.placed === g.slots.length;
    const top = `<div class="section-title"><button class="btn sm ghost back" data-act="nav" data-to="games">🎮 Mini Games</button><h2>🧩 Skills Matching</h2></div>
      <p class="muted" style="margin:6px 0 4px;text-align:center">Pick a skill below, then tap the part of the Model of Emotions where it fits.</p>
      <div class="stats-grid" style="grid-template-columns:repeat(3,1fr)">
        <div class="stat-card"><b>${g.score}</b><span>Score</span></div>
        <div class="stat-card"><b>${g.placed}/${g.slots.length}</b><span>Placed</span></div>
        <div class="stat-card"><b>${g.wrongs}</b><span>Misses</span></div>
      </div>`;
    if (done) {
      return `<div class="screen">${top}
        <div class="panel" style="text-align:center;padding:40px 20px;margin-top:14px">
          <h3>🏆 Model of Emotions complete!</h3>
          <p class="muted">Every skill found its home — ${g.score} points${g.wrongs ? ', ' + g.wrongs + ' misses along the way' : ', flawless'}.</p>
          <button class="btn teal" data-act="matching-new" style="margin-top:10px">↺ Play Again</button>
          <button class="btn ghost" data-act="games" style="margin-top:8px">🎮 More Mini Games</button>
        </div>
      </div>`;
    }
    const slots = g.slots.map((s, i) => {
      const filled = s.skillName;
      return `<div class="model-slot ${filled ? 'filled' : ''}" data-act="matching-place" data-i="${i}">
        <div class="model-slot-info"><b>${esc(s.part)}</b><span>${esc(s.desc)}</span></div>
        <div class="model-slot-drop">${filled ? esc(filled) : '＋ place skill'}</div>
      </div>`;
    }).join('<div class="model-arrow">▼</div>');
    const chips = g.chips.length
      ? g.chips.map(i => {
          const m = MODEL_OF_EMOTIONS[i];
          return `<button class="match-chip ${g.sel === i ? 'sel' : ''}" data-act="matching-select" data-i="${i}">${esc(m.skillName)}</button>`;
        }).join('')
      : '<p class="muted" style="text-align:center">All skills placed.</p>';
    return `<div class="screen">${top}
      <div class="model-board">${slots}</div>
      <div class="match-chips">${chips}</div>
    </div>`;
  },

  /* ---------- skills charades ---------- */
  charadesStart() {
    this.charades = {
      deck: this._shuffle(CHARADES_DECK.slice()),
      idx: 0,
      score: 0,
      correct: 0,
      passed: 0,
      phase: 'act',
      started: false,
      timeLeft: 60,
      timerId: null,
      lastResult: null
    };
  },

  charadesAct() {
    const g = this.charades;
    if (!g || g.phase !== 'act' || g.started) return;
    g.started = true;
    g.timeLeft = 60;
    this.sound('click');
    g.timerId = setInterval(() => {
      g.timeLeft--;
      const fill = document.getElementById('charade-time');
      const count = document.getElementById('charade-count');
      if (fill) fill.style.width = Math.max(0, (g.timeLeft / 60) * 100) + '%';
      if (count) {
        count.textContent = g.timeLeft + 's';
        if (g.timeLeft <= 10) count.classList.add('timeup');
      }
      if (g.timeLeft <= 0) {
        clearInterval(g.timerId);
        g.timerId = null;
        this.charadesPass(true);
      }
    }, 1000);
  },

  charadesGuessed() {
    const g = this.charades;
    if (!g || g.phase !== 'act') return;
    if (g.timerId) { clearInterval(g.timerId); g.timerId = null; }
    g.phase = 'reveal';
    g.lastResult = 'correct';
    g.correct++;
    g.score += 10;
    this.sound('correct');
    this.toast('✅ Guessed! +10 points', 'teal');
    this.renderAll();
  },

  charadesPass(fromTimer) {
    const g = this.charades;
    if (!g || g.phase !== 'act') return;
    if (g.timerId) { clearInterval(g.timerId); g.timerId = null; }
    g.phase = 'reveal';
    g.lastResult = fromTimer ? 'timeup' : 'pass';
    g.passed++;
    this.sound(fromTimer ? 'wrong' : 'click');
    if (!fromTimer) this.toast('Passed — no points this round.', '');
    this.renderAll();
  },

  charadesNext() {
    const g = this.charades;
    if (!g) return;
    if (g.timerId) { clearInterval(g.timerId); g.timerId = null; }
    g.idx++;
    g.phase = 'act';
    g.started = false;
    g.timeLeft = 60;
    this.renderAll();
  },

  charadesNew() {
    if (this.charades && this.charades.timerId) clearInterval(this.charades.timerId);
    this.charadesStart();
    this.renderAll();
  },

  renderCharades() {
    if (!this.charades) this.charadesStart();
    const g = this.charades;
    const done = g.idx >= g.deck.length;
    const top = `<div class="section-title"><button class="btn sm ghost back" data-act="nav" data-to="games">🎮 Mini Games</button><h2>🎭 Skill Charades</h2></div>
      <div class="stats-grid" style="grid-template-columns:repeat(3,1fr)">
        <div class="stat-card"><b>${g.score}</b><span>Score</span></div>
        <div class="stat-card"><b>${g.correct}/${g.idx}</b><span>Guessed</span></div>
        <div class="stat-card"><b>${g.idx}/${g.deck.length}</b><span>Round</span></div>
      </div>`;
    if (done) {
      return `<div class="screen">${top}
        <div class="panel" style="text-align:center;padding:40px 20px;margin-top:14px">
          <h3>🏆 Charades complete!</h3>
          <p class="muted">${g.correct} guessed · ${g.passed} passed · ${g.score} points.</p>
          <button class="btn teal" data-act="charades-new" style="margin-top:10px">↺ Play Again (reshuffled)</button>
          <button class="btn ghost" data-act="games" style="margin-top:8px">🎮 More Mini Games</button>
        </div>
      </div>`;
    }
    const cur = g.deck[g.idx];
    const pct = g.started ? Math.max(0, (g.timeLeft / 60) * 100) : 100;
    const actScreen = `<div class="charade-card">
        <div class="charade-emoji">${cur.emoji}</div>
        <div class="charade-word">${esc(cur.word)}</div>
        <span class="charade-type ${cur.type}">${cur.type}</span>
        <p class="charade-hint">${esc(cur.hint)}</p>
      </div>
      <div class="charade-timer">
        <div class="charade-bar"><div id="charade-time" class="charade-fill" style="width:${pct}%"></div></div>
        <div class="charade-count ${g.started && g.timeLeft <= 10 ? 'timeup' : ''}" id="charade-count">${g.started ? g.timeLeft + 's' : '60s'}</div>
      </div>
      <div style="display:flex;gap:8px;justify-content:center;flex-wrap:wrap;margin-top:12px">
        ${g.started
          ? `<button class="btn teal" data-act="charades-guessed">✅ Guessed!</button><button class="btn ghost" data-act="charades-pass">❌ Pass</button>`
          : `<button class="btn gold" data-act="charades-act">▶ Start 60s</button>`}
      </div>
      <p class="muted" style="text-align:center;margin-top:10px">${g.started ? 'Act it out — no words! Teammates guess aloud.' : 'Actor: read the card, then start the timer and mime it.'}</p>`;
    const revealScreen = `<div class="panel" style="text-align:center;padding:28px 20px;margin-top:10px">
        <div style="font-size:2.6rem">${cur.emoji}</div>
        <h3>${esc(cur.word)}</h3>
        <p class="muted" style="font-weight:800">${g.lastResult === 'correct' ? '✅ Guessed! +10' : (g.lastResult === 'timeup' ? '⏰ Time up — it was…' : 'It was…')}</p>
        <p class="muted">${esc(cur.about)}</p>
        <button class="btn gold" style="margin-top:12px" data-act="charades-next">${g.idx >= g.deck.length - 1 ? '🏁 Finish' : 'Next →'}</button>
      </div>`;
    return `<div class="screen">${top}
      <div class="model-board">${g.phase === 'act' ? actScreen : revealScreen}</div>
    </div>`;
  },

  /* ---------- movie illustrations ---------- */
  renderMovieIllustrations() {
    const pageId = this.params.page || 'orientation';
    const page = MOVIE_PAGES.find(p => p.id === pageId) || MOVIE_PAGES[0];
    const clips = MOVIE_ILLUSTRATIONS.filter(i => (i.page || 'orientation') === page.id);
    const groups = [];
    const addGroup = (name, icon, color, motto, item) => {
      let g = groups.find(x => x.name === name);
      if (!g) { g = { name, icon, color, motto, items: [] }; groups.push(g); }
      g.items.push(item);
    };
    clips.forEach(i => {
      if (i.heading) {
        addGroup(i.heading, i.icon || '🎬', i.color || '#6b7cff', i.motto || 'Illustrations of this skill in action.', i);
        return;
      }
      const skill = DBT_SKILLS[i.skillId];
      if (skill) {
        const m = DBT_MODULES.find(x => x.id === skill.moduleId);
        addGroup(m.name, m.icon, m.color, m.motto, i);
      } else {
        addGroup(i.skillId, '🎬', '#6b7cff', 'Illustrations of this skill in action.', i);
      }
    });
    const body = !groups.length
      ? `<div class="panel" style="text-align:center;padding:40px 20px"><h3>No clips yet</h3><p class="muted">Come back soon — ${esc(page.label)} movie illustrations are on the way.</p></div>`
      : `<div class="coach-grid">
          ${groups.map(g => `<div class="module-card">
            <div class="module-head" style="background:${g.color}16">
              <div class="module-ico" style="background:${g.color}">${g.icon}</div>
              <div><h3>${g.name}</h3><p>${g.motto}</p></div>
            </div>
            <div class="skill-list">
              ${g.items.map(i => {
                const skill = DBT_SKILLS[i.skillId];
                const tag = skill ? skill.name : (i.heading || i.skillId);
                return `<div class="skill-item" data-act="modal-skill" data-skill="${i.skillId}">
                  <div class="skill-name-row"><b>${esc(i.title)}</b><span class="skill-tag video">${esc(tag)}</span></div>
                  <div class="skill-desc">${esc(i.clipDesc)}</div>
                  ${i.placeholder ? `<p class="muted" style="margin-top:10px">🎬 Clip coming soon</p>` : i.linkUrl ? `<a class="btn sm ghost" href="${esc(i.linkUrl)}" target="_blank" rel="noopener" style="margin-top:10px">▶ Watch on YouTube</a>` : `<div class="clip-video sm" style="margin-top:10px">${this.videoEmbed(i.youtubeId)}</div>`}
                </div>`;
              }).join('')}
            </div>
          </div>`).join('')}
        </div>`;
    return `<div class="screen">
      <div class="section-title"><button class="btn sm ghost back" data-act="nav" data-to="map">← Map</button><h2>🎬 ${esc(page.label)} Movie Illustrations</h2></div>
      <p class="muted" style="margin-bottom:16px">Watch DBT skills in action — real scenes from popular movies and TV shows, then spot the skill being used.</p>
      <div class="map-layout">
        <div>${body}</div>
        <aside class="movie-tabs">${this.renderMovieTabs(page.id)}</aside>
      </div>
    </div>`;
  },

  /* ---------- movie illustration quiz ---------- */
  startQuiz() {
    const clips = MOVIE_ILLUSTRATIONS.filter(i => i.youtubeId && !i.placeholder);
    const seenIds = {};
    const items = [];
    clips.forEach(c => {
      if (seenIds[c.youtubeId]) return;
      seenIds[c.youtubeId] = true;
      const skill = DBT_SKILLS[c.skillId];
      items.push({
        clip: c,
        skillId: c.skillId,
        answer: skill ? skill.name : (c.heading || c.skillId)
      });
    });
    for (let i = items.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [items[i], items[j]] = [items[j], items[i]];
    }
    this.quiz = { items, idx: 0, score: 0, answered: null, done: false };
    this.show('quiz');
  },

  answerQuiz(i) {
    const q = this.quiz;
    if (!q || q.answered !== null || q.done) return;
    q.answered = i;
    q._answeredCorrect = !!this.quizOptions(q)[i].correct;
    if (q._answeredCorrect) q.score++;
    this.sound(q._answeredCorrect ? 'correct' : 'wrong');
    this.renderAll();
  },

  quizOptions(q) {
    if (!q._opts) {
      const item = q.items[q.idx];
      const pool = q.items.map(x => x.answer);
      const distractors = pool.filter(a => a !== item.answer);
      for (let i = distractors.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [distractors[i], distractors[j]] = [distractors[j], distractors[i]];
      }
      const opts = [{ label: item.answer, correct: true }];
      const seen = { [item.answer]: true };
      for (const d of distractors) {
        if (opts.length >= 4) break;
        if (seen[d]) continue;
        seen[d] = true;
        opts.push({ label: d, correct: false });
      }
      for (let i = opts.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [opts[i], opts[j]] = [opts[j], opts[i]];
      }
      q._opts = opts;
    }
    return q._opts;
  },

  quizNext() {
    const q = this.quiz;
    if (!q || q.done) return;
    q.idx++;
    q.answered = null;
    q._opts = null;
    if (q.idx >= q.items.length) q.done = true;
    this.renderAll();
  },

  renderMovieQuiz() {
    const q = this.quiz;
    if (!q) {
      this.startQuiz();
      return '';
    }
    if (q.done) {
      const pct = q.items.length ? Math.round(q.score / q.items.length * 100) : 0;
      const verdict = pct === 100 ? '🏆 Perfect!' : pct >= 70 ? '🎉 Sharp eye!' : pct >= 40 ? '👌 Getting there' : '🧘 Keep practicing';
      return `<div class="screen">
        <div class="section-title"><button class="btn sm ghost back" data-act="nav" data-to="map">← Map</button><h2>🎯 Movie Illustration Quiz</h2></div>
        <div class="map-layout">
          <div>
            <div class="panel" style="text-align:center;padding:32px 20px">
              <h2 style="font-size:2.2rem;margin-bottom:8px">${verdict}</h2>
              <p class="muted">You identified <b>${q.score}</b> of <b>${q.items.length}</b> clips correctly (${pct}%).</p>
              <p class="muted" style="margin-top:8px">Clips reshuffle every game — play again to beat your score.</p>
              <div style="margin-top:20px;display:flex;gap:10px;justify-content:center;flex-wrap:wrap">
                <button class="btn teal" data-act="quiz-restart">🔄 Play Again</button>
                <button class="btn ghost" data-act="movies" data-page="assertion">🎬 Back to Movie Illustrations</button>
              </div>
            </div>
          </div>
          <aside class="movie-tabs">${this.renderMovieTabs('quiz')}</aside>
        </div>
      </div>`;
    }
    const item = q.items[q.idx];
    const opts = this.quizOptions(q);
    const answered = q.answered !== null;
    const chosen = answered ? opts[q.answered] : null;
    return `<div class="screen">
      <div class="section-title"><button class="btn sm ghost back" data-act="nav" data-to="map">← Map</button><h2>🎯 Movie Illustration Quiz</h2></div>
      <p class="muted" style="margin-bottom:14px">Clip <b>${q.idx + 1}</b> of ${q.items.length} · Score <b>${q.score}</b></p>
      <div class="map-layout">
        <div>
          <div class="panel" style="padding:18px">
            <div class="clip-video" style="height:360px;margin-bottom:16px">${this.videoEmbed(item.clip.youtubeId)}</div>
            <h3 style="margin-bottom:12px">Which skill does this clip illustrate?</h3>
            <div class="option-grid" style="margin-top:6px">
              ${opts.map((o, i) => {
                let cls = 'option-btn';
                let tag = 'option-tag';
                let tagTxt = 'A';
                if (answered) {
                  if (o.correct) { cls += ' revealed correct'; tag += ' correct'; tagTxt = '✓'; }
                  else if (i === q.answered) { cls += ' revealed wrong'; tag += ' wrong'; tagTxt = '✗'; }
                }
                return `<button class="${cls}" data-act="quiz-answer" data-i="${i}" ${answered ? 'disabled' : ''}><span class="${tag}">${tagTxt}</span><span>${esc(o.label)}</span></button>`;
              }).join('')}
            </div>
            ${answered ? `<div class="feedback-box ${chosen.correct ? 'good' : 'bad'}">
              <h4>${chosen.correct ? '🎉 Correct!' : '🙃 Not quite'}</h4>
              <p>${chosen.correct ? 'You spotted the skill in this clip.' : `The skill here is <b>${esc(item.answer)}</b>.`}</p>
              <p class="muted" style="margin-top:8px">${esc(item.clip.clipDesc)}</p>
              <button class="btn teal" style="margin-top:14px" data-act="quiz-next">${q.idx + 1 >= q.items.length ? 'See Results →' : 'Next Clip →'}</button>
            </div>` : ''}
          </div>
        </div>
        <aside class="movie-tabs">${this.renderMovieTabs('quiz')}</aside>
      </div>
    </div>`;
  },

  /* ---------- badges ---------- */
  renderBadges() {
    const { total, earned } = Engine.totalBadges();
    const cards = DBT_MODULES.map(m => `<div class="module-head" style="margin-top:22px;background:${m.color}16;border-radius:var(--radius-lg)"><div class="module-ico" style="background:${m.color}">${m.icon}</div><div><h3>${m.name}</h3><p>${m.skills.filter(s => Engine.skillBadged(s.id)).length}/${m.skills.length} badges · ${m.skills.every(s => Engine.skillBadged(s.id)) ? '✨ complete' : 'keep practicing'}</p></div></div>
      <div class="badge-grid" style="margin-top:12px">${m.skills.map(s => {
        const earned2 = Engine.skillBadged(s.id);
        return `<div class="badge-card ${earned2 ? 'earned' : 'locked'}"><div class="badge-medal">${earned2 ? '🏅' : '🔒'}</div><b>${esc(s.badge)}</b><span>${s.name}</span><div class="tiny" style="margin-top:4px">${earned2 ? 'earned' : 'practice to earn'}</div></div>`;
      }).join('')}</div>`).join('');
    return `<div class="screen">
      <div class="section-title"><button class="btn sm ghost back" data-act="nav" data-to="map">← Map</button><h2>🏅 Badges</h2></div>
      <div class="stats-grid"><div class="stat-card"><b>${earned}</b><span>earned</span></div><div class="stat-card"><b>${total}</b><span>total</span></div><div class="stat-card"><b>${earned / total * 100}%</b><span>complete</span></div></div>
      <p class="muted" style="margin-bottom:10px">Use a skill correctly across the game to earn its badge. Complete all badges in a module to unlock new features for your character!</p>
      ${cards}
      <div class="spacer"></div>
      <h3 style="margin:14px 0 10px">🎨 Unlockable features</h3>
      <div class="badge-grid">${UNLOCK_FEATURES.map(f => {
        const unlocked = Engine.hasFeature(f.id);
        return `<div class="badge-card ${unlocked ? 'earned' : 'locked'}"><div class="badge-medal">${unlocked ? f.emoji : '🔒'}</div><b>${f.label}</b><span>${esc(f.desc)}</span></div>`;
      }).join('')}</div>
    </div>`;
  },

  /* ---------- closet ---------- */
  renderCloset() {
    // reuse creator UI but in closet mode
    return this.renderCreator();
  },

  /* ---------- modals / toast / confetti ---------- */
  showModal(html) {
    const root = document.getElementById('modal-root');
    root.innerHTML = `<div class="modal-backdrop"><div class="modal"><button class="modal-close" data-act="modal-close">✕</button>${html}</div></div>`;
    root.querySelector('.modal-backdrop').addEventListener('click', e => { if (e.target === e.currentTarget) this.closeModal(); });
    this.initVideoFallbacks(root);
  },

  closeModal() {
    this.stopSpeak();
    document.getElementById('modal-root').innerHTML = '';
  },

  showSkillModal(skillId) {
    const s = DBT_SKILLS[skillId];
    if (!s) return;
    const mod = DBT_MODULES.find(m => m.id === s.moduleId);
    const badged = Engine.skillBadged(skillId);
    this.showModal(`<div class="center"><div class="module-ico" style="background:${mod.color};margin:0 auto 10px">${mod.icon}</div>
      <h2>${s.name}</h2>
      <p class="muted">${mod.name} module</p>
      <p style="margin:14px 0;line-height:1.6">${esc(s.short)}</p>
      <div class="earned-item" style="margin:0 auto"><span>${badged ? '🏅' : '🔒'}</span><b>Badge: ${esc(s.badge)}</b></div>
      <div class="spacer"></div>
      <div class="btn-row" style="justify-content:center">
        <button class="btn gold" data-act="speak" data-text="${esc(s.name + '. ' + s.short)}">🔊 Listen</button>
        <button class="btn" data-act="modal-clip" data-skill="${s.id}">🎬 Watch clip</button>
        ${s.clip.youtubeId ? `<button class="btn teal" data-act="modal-video" data-skill="${s.id}">▶ Watch DBT-RU video</button>` : ''}
        <button class="btn ghost" data-act="modal-close">Close</button>
      </div></div>`);
  },

  showClipModal(skillId) {
    const s = DBT_SKILLS[skillId];
    if (!s) return;
    const vid = s.clip.youtubeId;
    const embed = vid ? `<div class="clip-video">${this.videoEmbed(vid)}</div><p class="tiny muted" style="margin-top:8px">From <b>DBT-RU · DBT Skills from Experts</b> (Rutgers University). Tap ▶ to play.</p>` : '';
    this.showModal(`<div>
      <h2>🎬 Skill in Scene</h2>
      <p class="muted" style="margin:6px 0">A way to remember <b>${s.name}</b>:</p>
      <div class="clip-box">
        <b>${esc(s.clip.title)}</b><br><br>${esc(s.clip.desc)}
      </div>
      ${embed}
      <p class="tiny muted" style="margin-top:10px">Imagine a favorite movie or show scene like this one — when you meet a real-life version of this moment, you'll already know the skill to use.</p>
      <div class="btn-row" style="margin-top:14px;justify-content:center">
        <button class="btn gold" data-act="speak" data-text="${esc(s.clip.title + '. ' + s.clip.desc)}">🔊 Listen</button>
        <button class="btn ghost" data-act="modal-skill" data-skill="${skillId}">← Skill details</button>
        <button class="btn teal" data-act="modal-close">Got it</button>
      </div>
    </div>`);
  },

  showVideoModal(skillId) {
    const s = DBT_SKILLS[skillId];
    if (!s || !s.clip.youtubeId) return;
    this.showModal(`<div>
      <h2>▶ ${s.name} · DBT-RU</h2>
      <p class="muted" style="margin:6px 0">Official skill video from <b>DBT Skills from Experts</b>, a Rutgers University channel.</p>
      <div class="clip-video">${this.videoEmbed(s.clip.youtubeId)}</div>
      <div class="btn-row" style="margin-top:14px;justify-content:center">
        <button class="btn ghost" data-act="modal-skill" data-skill="${skillId}">← Skill details</button>
        <button class="btn teal" data-act="modal-close">Close</button>
      </div>
    </div>`);
  },

  videoEmbed(id) {
    return `<iframe width="100%" height="100%" src="https://www.youtube-nocookie.com/embed/${esc(id)}" data-vid="${esc(id)}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
  },

  /* -------- embed-failure fallback (owner disabled embedding, region blocks, etc.) -------- */
  loadYTAPI() {
    if ((window.YT && window.YT.Player) || this._ytApiPromise) return this._ytApiPromise;
    this._ytApiPromise = new Promise(resolve => {
      const prev = window.onYouTubeIframeAPIReady;
      window.onYouTubeIframeAPIReady = () => { if (typeof prev === 'function') prev(); resolve(); };
      const s = document.createElement('script');
      s.src = 'https://www.youtube.com/iframe_api';
      s.async = true;
      document.body.appendChild(s);
    });
    return this._ytApiPromise;
  },

  videoFallbackHTML(vid) {
    return `<div class="clip-fallback">
      <span class="clip-fallback-icon">🎬</span>
      <p class="clip-fallback-text">This video can't play embedded — its owner has turned off embedding (or it's not available here).</p>
      <a class="btn sm ghost" href="https://www.youtube.com/watch?v=${esc(vid)}" target="_blank" rel="noopener">▶ Watch on YouTube</a>
    </div>`;
  },

  initVideoFallbacks(root) {
    try {
      if (!root || !root.querySelectorAll) return;
      const frames = root.querySelectorAll('iframe[data-vid]');
      if (!frames.length) return;
      const self = this;
      this.loadYTAPI().then(() => {
        frames.forEach(f => {
          const box = f.parentNode;
          if (!box || !box.classList || box.classList.contains('ytplayer-replaced')) return;
          box.classList.add('ytplayer-replaced');
          try {
            new (window.YT.Player)(f, {
              width: '100%',
              height: '100%',
              videoId: f.dataset.vid,
              playerVars: { playsinline: 1 },
              events: {
                onError: e => {
                  const codes = [2, 5, 100, 101, 150];
                  if (codes.indexOf(e.data) !== -1) {
                    try { box.innerHTML = self.videoFallbackHTML(f.dataset.vid); } catch (err) {}
                  }
                }
              }
            });
          } catch (err) {}
        });
      });
    } catch (e) {}
  },

  toast(msg, type) {
    const root = document.getElementById('toast-root');
    const t = document.createElement('div');
    t.className = `toast ${type || ''}`;
    t.innerHTML = msg;
    root.appendChild(t);
    setTimeout(() => { t.style.opacity = '0'; t.style.transition = 'opacity .4s'; }, 3200);
    setTimeout(() => t.remove(), 3700);
  },

  confetti() {
    const colors = ['#7c5cff', '#34d1bf', '#ffb833', '#ff6b8a', '#4aa8ff', '#46c46e'];
    for (let i = 0; i < 60; i++) {
      const p = document.createElement('div');
      p.className = 'confetti-piece';
      p.style.left = Math.random() * 100 + 'vw';
      p.style.top = -20 + 'px';
      p.style.background = colors[Math.floor(Math.random() * colors.length)];
      p.style.animationDuration = (2 + Math.random() * 2.2) + 's';
      p.style.animationDelay = (Math.random() * 0.6) + 's';
      p.style.transform = 'rotate(' + Math.random() * 360 + 'deg)';
      document.body.appendChild(p);
      setTimeout(() => p.remove(), 5200);
    }
  },

  doReset() {
    if (confirm('Reset your game? All progress, badges, and looks will be lost.')) {
      Engine.reset();
      this.closeModal();
      this.creator = { name: '', gender: 'they', avatar: null, presetId: null };
      this.show('title');
    }
  }
};

/* ---------- procedural soundscape generators ----------
   Each start(ctx, out) builds Web Audio nodes into the shared master
   `out` gain and returns { nodes, timers }. Timers schedule random
   micro-events (drops, chimes, crackles…) so nothing ever loops flat. */
const SOUNDSCAPES = {
  ocean: {
    start(ctx, out) {
      const noise = UI.mkNoise(ctx);
      const src = ctx.createBufferSource(); src.buffer = noise; src.loop = true;
      const f = ctx.createBiquadFilter(); f.type = 'lowpass'; f.frequency.value = 500; f.Q.value = 0.4;
      const g = ctx.createGain(); g.gain.value = 0.18;
      const lfo = ctx.createOscillator(); lfo.frequency.value = 0.07;
      const lg = ctx.createGain(); lg.gain.value = 0.15;
      src.connect(f); f.connect(g); g.connect(out);
      lfo.connect(lg); lg.connect(g.gain);
      src.start(); lfo.start();
      const timers = [];
      timers.push(setInterval(() => {
        const t = ctx.currentTime;
        lfo.frequency.setValueAtTime(0.05 + Math.random() * 0.06, t);
        lg.gain.setValueAtTime(0.10 + Math.random() * 0.10, t);
      }, 8000));
      return { nodes: [src, f, g, lfo, lg], timers };
    }
  },

  rain: {
    start(ctx, out) {
      const noise = UI.mkNoise(ctx);
      const src = ctx.createBufferSource(); src.buffer = noise; src.loop = true;
      const f = ctx.createBiquadFilter(); f.type = 'lowpass'; f.frequency.value = 1100;
      const g = ctx.createGain(); g.gain.value = 0.07;
      src.connect(f); f.connect(g); g.connect(out); src.start();
      const timers = [];
      timers.push(setInterval(() => {
        if (Math.random() > 0.3) return;
        const t = ctx.currentTime;
        const d = ctx.createBufferSource(); d.buffer = noise; d.playbackRate.value = 0.8 + Math.random() * 1.6;
        const df = ctx.createBiquadFilter(); df.type = 'bandpass';
        df.frequency.setValueAtTime(900 + Math.random() * 2600, t); df.Q.value = 6;
        const dg = ctx.createGain();
        dg.gain.setValueAtTime(0.16, t);
        dg.gain.exponentialRampToValueAtTime(0.001, t + 0.07);
        d.connect(df); df.connect(dg); dg.connect(out);
        d.start(t, Math.random()); d.stop(t + 0.09);
      }, 150));
      return { nodes: [src, f, g], timers };
    }
  },

  river: {
    start(ctx, out) {
      const noise = UI.mkNoise(ctx);
      const src = ctx.createBufferSource(); src.buffer = noise; src.loop = true;
      const f = ctx.createBiquadFilter(); f.type = 'bandpass'; f.frequency.value = 620; f.Q.value = 1.2;
      const g = ctx.createGain(); g.gain.value = 0.12;
      const lfo = ctx.createOscillator(); lfo.frequency.value = 0.45;
      const lg = ctx.createGain(); lg.gain.value = 240;
      src.connect(f); f.connect(g); g.connect(out);
      lfo.connect(lg); lg.connect(f.frequency);
      src.start(); lfo.start();
      const timers = [];
      timers.push(setInterval(() => {
        if (Math.random() > 0.12) return;
        const t = ctx.currentTime;
        const d = ctx.createBufferSource(); d.buffer = noise; d.playbackRate.value = 0.7 + Math.random() * 1.6;
        const df = ctx.createBiquadFilter(); df.type = 'bandpass';
        df.frequency.setValueAtTime(700 + Math.random() * 1400, t); df.Q.value = 4;
        const dg = ctx.createGain();
        dg.gain.setValueAtTime(0.001, t);
        dg.gain.exponentialRampToValueAtTime(0.12, t + 0.08);
        dg.gain.exponentialRampToValueAtTime(0.001, t + 0.34);
        d.connect(df); df.connect(dg); dg.connect(out);
        d.start(t, Math.random()); d.stop(t + 0.4);
      }, 400));
      return { nodes: [src, f, g, lfo, lg], timers };
    }
  },

  wind: {
    start(ctx, out) {
      const noise = UI.mkNoise(ctx);
      const src = ctx.createBufferSource(); src.buffer = noise; src.loop = true;
      const f = ctx.createBiquadFilter(); f.type = 'bandpass'; f.frequency.value = 420; f.Q.value = 0.7;
      const g = ctx.createGain(); g.gain.value = 0.13;
      const lfo = ctx.createOscillator(); lfo.frequency.value = 0.14;
      const lg = ctx.createGain(); lg.gain.value = 140;
      src.connect(f); f.connect(g); g.connect(out);
      lfo.connect(lg); lg.connect(f.frequency);
      src.start(); lfo.start();
      const timers = [];
      timers.push(setInterval(() => {
        const t = ctx.currentTime;
        const gust = 0.4 + Math.random() * 1.3;
        g.gain.cancelScheduledValues(t);
        g.gain.setTargetAtTime(0.20 * gust, t, 1.6);
        f.frequency.setTargetAtTime(260 + Math.random() * 380, t, 1.8);
        setTimeout(() => {
          try {
            g.gain.setTargetAtTime(0.12, ctx.currentTime, 2.2);
            f.frequency.setTargetAtTime(420, ctx.currentTime, 2.4);
          } catch (e) {}
        }, 4200);
      }, 8200));
      return { nodes: [src, f, g, lfo, lg], timers };
    }
  },

  campfire: {
    start(ctx, out) {
      const noise = UI.mkNoise(ctx);
      const src = ctx.createBufferSource(); src.buffer = noise; src.loop = true;
      const f = ctx.createBiquadFilter(); f.type = 'lowpass'; f.frequency.value = 220;
      const g = ctx.createGain(); g.gain.value = 0.10;
      src.connect(f); f.connect(g); g.connect(out); src.start();
      const timers = [];
      timers.push(setInterval(() => {
        if (Math.random() > 0.4) return;
        const t = ctx.currentTime;
        const d = ctx.createBufferSource(); d.buffer = noise; d.playbackRate.value = 0.6 + Math.random() * 2;
        const df = ctx.createBiquadFilter(); df.type = 'bandpass';
        df.frequency.setValueAtTime(500 + Math.random() * 2000, t); df.Q.value = 3;
        const dg = ctx.createGain();
        dg.gain.setValueAtTime(0.18 + Math.random() * 0.12, t);
        dg.gain.exponentialRampToValueAtTime(0.001, t + 0.05 + Math.random() * 0.06);
        d.connect(df); df.connect(dg); dg.connect(out);
        d.start(t, Math.random()); d.stop(t + 0.15);
      }, 110));
      return { nodes: [src, f, g], timers };
    }
  },

  crickets: {
    start(ctx, out) {
      const noise = UI.mkNoise(ctx);
      const src = ctx.createBufferSource(); src.buffer = noise; src.loop = true;
      const f = ctx.createBiquadFilter(); f.type = 'highpass'; f.frequency.value = 3200;
      const g = ctx.createGain(); g.gain.value = 0.02;
      src.connect(f); f.connect(g); g.connect(out); src.start();
      const timers = [];
      timers.push(setInterval(() => {
        if (Math.random() > 0.35) return;
        const t = ctx.currentTime;
        const base = 4100 + Math.random() * 700;
        const pulses = 2 + Math.floor(Math.random() * 3);
        for (let i = 0; i < pulses; i++) {
          const o = ctx.createOscillator(); o.type = 'triangle';
          const og = ctx.createGain();
          const p0 = t + i * 0.16;
          o.frequency.setValueAtTime(base + Math.random() * 120, p0);
          og.gain.setValueAtTime(0.001, p0);
          og.gain.exponentialRampToValueAtTime(0.05, p0 + 0.015);
          og.gain.exponentialRampToValueAtTime(0.001, p0 + 0.05);
          o.connect(og); og.connect(out);
          o.start(p0); o.stop(p0 + 0.06);
        }
      }, 620));
      return { nodes: [src, f, g], timers };
    }
  },

  chimes: {
    start(ctx, out) {
      const notes = [523.25, 587.33, 659.25, 783.99, 880, 1046.5, 1174.7];
      const timers = [];
      timers.push(setInterval(() => {
        if (Math.random() > 0.16) return;
        const t = ctx.currentTime;
        const f0 = notes[Math.floor(Math.random() * notes.length)];
        const partials = [[f0, 1], [f0 * 2.01, 0.28], [f0 * 4.02, 0.07]];
        partials.forEach(p => {
          const o = ctx.createOscillator(); o.type = 'sine'; o.frequency.value = p[0];
          const og = ctx.createGain();
          og.gain.setValueAtTime(0.001, t);
          og.gain.exponentialRampToValueAtTime(0.10 * p[1], t + 0.02);
          og.gain.exponentialRampToValueAtTime(0.001, t + 2.6 + Math.random() * 1.4);
          o.connect(og); og.connect(out);
          o.start(t); o.stop(t + 4.2);
        });
      }, 340));
      return { nodes: [], timers };
    }
  },

  musicbox: {
    start(ctx, out) {
      const seq = [0, 1, 2, 4, 5, 7, 5, 4, 2, 1, 2, 4, 3, 2, 1, 0];
      const steps = [523.25, 587.33, 659.25, 783.99, 880, 1046.5, 1174.7, 1318.5];
      let idx = 0;
      const playNote = i => {
        const t = ctx.currentTime;
        const f0 = steps[i];
        const partials = [[f0, 1], [f0 * 3.01, 0.22]];
        partials.forEach(p => {
          const o = ctx.createOscillator(); o.type = 'sine'; o.frequency.value = p[0];
          const og = ctx.createGain();
          og.gain.setValueAtTime(0.001, t);
          og.gain.exponentialRampToValueAtTime(0.085 * p[1], t + 0.01);
          og.gain.exponentialRampToValueAtTime(0.001, t + 1.5);
          o.connect(og); og.connect(out);
          o.start(t); o.stop(t + 1.7);
        });
      };
      playNote(seq[0]);
      const timers = [];
      timers.push(setInterval(() => {
        idx = (idx + 1) % seq.length;
        if (Math.random() > 0.24) playNote(seq[idx]);
      }, 1250));
      return { nodes: [], timers };
    }
  },

  ethereal: {
    start(ctx, out) {
      const chords = [
        [130.81, 196, 329.63],
        [110, 164.81, 261.63],
        [130.81, 174.61, 261.63],
        [146.83, 196, 293.66]
      ];
      const f = ctx.createBiquadFilter(); f.type = 'lowpass'; f.frequency.value = 1500; f.Q.value = 0.6;
      f.connect(out);
      const lfo = ctx.createOscillator(); lfo.frequency.value = 0.05;
      const lg = ctx.createGain(); lg.gain.value = 500;
      lfo.connect(lg); lg.connect(f.frequency);
      lfo.start();
      const voices = chords[0].map((fr, vi) => {
        const o = ctx.createOscillator(); o.type = 'triangle';
        o.frequency.setValueAtTime(fr, ctx.currentTime);
        o.detune.setValueAtTime(vi === 0 ? -4 : vi === 1 ? 3 : 6, ctx.currentTime);
        const g = ctx.createGain(); g.gain.value = 0.05;
        o.connect(g); g.connect(f);
        o.start();
        return { o, g };
      });
      let ci = 0;
      const timers = [];
      timers.push(setInterval(() => {
        const t = ctx.currentTime;
        ci = (ci + 1) % chords.length;
        voices.forEach((v, i) => v.o.frequency.setTargetAtTime(chords[ci][i], t, 1.8));
      }, 9000));
      return { nodes: [f, lfo, lg].concat(voices.map(v => v.o)), timers };
    }
  },

  starlight: {
    start(ctx, out) {
      const d1 = ctx.createOscillator(); d1.type = 'sine'; d1.frequency.value = 55;
      const g1 = ctx.createGain(); g1.gain.value = 0.05;
      d1.connect(g1); g1.connect(out); d1.start();
      const d2 = ctx.createOscillator(); d2.type = 'sine'; d2.frequency.value = 110; d2.detune.value = 3;
      const g2 = ctx.createGain(); g2.gain.value = 0.03;
      d2.connect(g2); g2.connect(out); d2.start();
      const lfo = ctx.createOscillator(); lfo.frequency.value = 0.03;
      const lg = ctx.createGain(); lg.gain.value = 0.02;
      lfo.connect(lg); lg.connect(g1.gain);
      lfo.start();
      const timers = [];
      timers.push(setInterval(() => {
        if (Math.random() > 0.28) return;
        const t = ctx.currentTime;
        const o = ctx.createOscillator(); o.type = 'sine';
        o.frequency.setValueAtTime(700 + Math.random() * 1100, t);
        const og = ctx.createGain();
        og.gain.setValueAtTime(0.001, t);
        og.gain.linearRampToValueAtTime(0.028, t + 0.5);
        og.gain.exponentialRampToValueAtTime(0.001, t + 3.6);
        o.connect(og); og.connect(out);
        o.start(t); o.stop(t + 4);
      }, 2400));
      return { nodes: [d1, d2, g1, g2, lfo, lg], timers };
    }
  }
};

function esc(s) {
  return String(s == null ? '' : s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}
