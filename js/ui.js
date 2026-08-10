/* =========================================================================
   WISE MIND: A DBT ADVENTURE
   UI renderer and interactions
   ========================================================================= */

const UI = {
  view: 'title',
  params: {},
  creator: { name: '', gender: 'they', avatar: null, presetId: null },
  ctx: null, // audio context

  init() {
    this.bindGlobal();
    const saved = Engine.load();
    const viewFromHash = (location.hash || '').replace(/^#\/?/, '');
    if (viewFromHash === 'movies' || viewFromHash.indexOf('movies/') === 0) {
      this.show('movies', { page: viewFromHash.split('/')[1] || 'orientation' });
    } else if (viewFromHash && ['map', 'coach', 'badges', 'closet', 'quiz'].includes(viewFromHash)) {
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
      if (['map', 'coach', 'badges', 'closet', 'quiz'].includes(v)) this.show(v);
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
      case 'badges': this.show('badges'); break;
      case 'movies': this.show('movies', { page: data.page || 'orientation' }); break;
      case 'quiz-start': this.startQuiz(); break;
      case 'quiz-answer': this.answerQuiz(data.i); break;
      case 'quiz-next': this.quizNext(); break;
      case 'quiz-restart': this.startQuiz(); break;
      case 'stage-result-ok': this.closeModal(); this.show('map'); break;
      case 'result-next': this.show('map'); break;
      case 'apply-look': this.applyLook(); break;
      case 'noop': break;
      default: break;
    }
  },

  /* ---------- router ---------- */
  show(view, params) {
    this.view = view;
    this.params = Object.assign({}, this.params || {}, params || {});
    this.closeModal();
    this.renderAll();
    window.scrollTo(0, 0);
    if (view === 'movies') {
      try { history.replaceState(null, '', '#/movies/' + (this.params.page || 'orientation')); } catch (e) {}
    } else if (['map', 'coach', 'badges', 'closet', 'quiz'].includes(view)) {
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
      case 'movies': body = this.renderMovieIllustrations(); break;
      case 'quiz': body = this.renderMovieQuiz(); break;
      case 'badges': body = this.renderBadges(); break;
      case 'closet': body = this.renderCloset(); break;
      default: body = this.renderMap();
    }
    app.innerHTML = hud + body + this.renderFooter();
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
    if (id === 'human' || id === 'hero') {
      if (!av.skin) av.skin = 'medium';
      if (!av.hair) av.hair = 'straight';
      if (!av.eyes) av.eyes = 'brown';
    }
    if (id === 'dragon' || id === 'ghost') av.shoes = 'none';
    if (id === 'robot' || id === 'alien') { if (!av.shoes) av.shoes = 'spaceboots'; }
    this.renderAll();
  },

  renderCreator() {
    const isCloset = this.view === 'closet';
    const av = this.creator.avatar || (this.creator.avatar = avatarFromPreset(PLAYER_PRESETS[0].avatar));
    const humanoid = ['human', 'hero', 'wizard'].includes(av.species);
    const hasShoes = !['dragon', 'ghost'].includes(av.species);
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
    return `<div class="screen">
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
    </div>`;
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
          return `<div class="module-card">
            <div class="module-head" style="background:${m.color}16">
              <div class="module-ico" style="background:${m.color}">${m.icon}</div>
              <div><h3>${m.name} ${allBadged ? '🏅' : ''}</h3><p>${m.motto}</p></div>
            </div>
            <div class="skill-list">
              ${m.skills.map(s => {
                const badged = Engine.skillBadged(s.id);
                const prog = Math.min(Engine.state.proficiency[s.id] || 0, 2);
                return `<div class="skill-item" data-act="modal-skill" data-skill="${s.id}">
                  <div class="skill-name-row"><b>${s.name}</b>${s.clip.youtubeId ? '<span class="skill-tag video">▶ DBT-RU</span>' : ''}${badged ? '<span class="skill-tag earned">🏅 ' + esc(s.badge) + '</span>' : '<span class="skill-tag">badge: ' + esc(s.badge) + '</span>'}</div>
                  <div class="skill-desc">${esc(s.short)}</div>
                  ${s.clip.youtubeId ? `<div class="clip-video sm" style="margin-top:10px">${this.videoEmbed(s.clip.youtubeId)}</div>` : ''}
                  <div class="skill-progress progress-track sm" style="margin-top:10px"><div class="progress-fill" style="width:${prog / 2 * 100}%"></div></div>
                </div>`;
              }).join('')}
            </div>
          </div>`;
        }).join('')}
      </div>
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
    return `<iframe width="100%" height="100%" src="https://www.youtube-nocookie.com/embed/${esc(id)}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
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

function esc(s) {
  return String(s == null ? '' : s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}
