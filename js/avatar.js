/* =========================================================================
   WISE MIND: A DBT ADVENTURE
   SVG avatar renderer — stylized 3D-animation characters
   Volumetric gradients, cel-shading, rim light, glossy features.
   Draw order: ground → back hair → cape → body → head → front hair → face → accessories → sunglasses.
   ========================================================================= */

const AV = {
  skin(av) { const t = SKIN_TONES.find(x => x.id === (av.skin || 'medium')); return t ? t.hex : '#a86b3c'; },
  hair(av) { const c = HAIR_COLORS.find(x => x.id === (av.hairColor || 'black')); return c ? c.hex : '#2b1d16'; },
  eye(av) { const c = EYE_COLORS.find(x => x.id === (av.eyes || 'brown')); return c ? c.hex : '#4a2f1d'; },
  outfit(av) {
    const o = OUTFITS.find(x => x.id === (av.outfit || 'tee'));
    return (o && OUTFIT_COLORS[o.id]) ? OUTFIT_COLORS[o.id] : OUTFIT_COLORS.tee;
  },
  shoes(av) {
    const s = SHOES.find(x => x.id === (av.shoes || 'sneakers'));
    return (s && SHOE_COLORS[s.id]) ? SHOE_COLORS[s.id] : SHOE_COLORS.sneakers;
  }
};

const OUTFIT_COLORS = {
  tee:       { top: '#3f6fd4', accent: '#ffffff', pants: '#34405a', collar: '#2f59ad', sleeve: '#3562bc', button: '#e8edf5', name: 'Tee & Jeans' },
  hoodie:    { top: '#6b4a8a', accent: '#8a6bb0', pants: '#2b3448', collar: '#7d5a9e', sleeve: '#5e4180', button: '#8a6bb0', name: 'Hoodie' },
  sporty:    { top: '#ff6b4a', accent: '#ffffff', pants: '#20242e', collar: '#e04f2e', sleeve: '#f05a3a', button: '#ffffff', name: 'Athletic' },
  preppy:    { top: '#2e9e7a', accent: '#f6e4c0', pants: '#44506a', collar: '#f6e4c0', sleeve: '#2a8d6d', button: '#f6e4c0', name: 'Crew & Cardigan' },
  formal:    { top: '#20253a', accent: '#ffffff', pants: '#10141f', collar: '#ffffff', sleeve: '#2a3046', button: '#aeb6c8', name: 'Formal' },
  dashiki:   { top: '#d96a2b', accent: '#2e6b5a', pants: '#2b2b2b', collar: '#e9a13b', sleeve: '#c55a22', button: '#e9a13b', name: 'Dashiki' },
  kimono:    { top: '#d45d8a', accent: '#f2d9c6', pants: '#3a3344', collar: '#b3456f', sleeve: '#c04f7a', button: '#ffd76a', name: 'Kimono' },
  hanbok:    { top: '#3fa3d9', accent: '#fff0d4', pants: '#dfe9f5', collar: '#ffffff', sleeve: '#3593c8', button: '#e565a8', name: 'Hanbok' },
  sari:      { top: '#8a4fd4', accent: '#ffd76a', pants: '#20242e', collar: '#7a41c4', sleeve: '#7f47c9', button: '#ffd76a', name: 'Kurta' },
  punk:      { top: '#202020', accent: '#ffb833', pants: '#16161a', collar: '#2c2c2c', sleeve: '#2c2c2c', button: '#9a9a9a', name: 'Punk' },
  goth:      { top: '#1b1b2a', accent: '#7a5ce0', pants: '#0f0f18', collar: '#2a2a40', sleeve: '#252540', button: '#7a5ce0', name: 'Goth' },
  astronaut: { top: '#dfe6ee', accent: '#4aa8ff', pants: '#b9c4cf', collar: '#c7d1dd', sleeve: '#cdd6e2', button: '#8f9aa8', name: 'Astronaut' },
  knight:    { top: '#8a97a8', accent: '#c9a227', pants: '#6b7686', collar: '#c9a227', sleeve: '#7d899b', button: '#c9a227', name: 'Knight' },
  chef:      { top: '#ffffff', accent: '#ff6b4a', pants: '#3a3a3a', collar: '#e8edf2', sleeve: '#eef2f7', button: '#dfe6ee', name: 'Chef' },
  mechanic:  { top: '#ff8c1a', accent: '#335566', pants: '#2b2b33', collar: '#e07a10', sleeve: '#f0801a', button: '#335566', name: 'Mechanic' },
  superhero: { top: '#e24a4a', accent: '#3f6fd4', pants: '#1f2430', collar: '#c93a3a', sleeve: '#d24444', button: '#ffd76a', name: 'Superhero' },
  legend:    { top: '#ffd76a', accent: '#7c5cff', pants: '#1a1a2e', collar: '#e9bd47', sleeve: '#f0c653', button: '#7c5cff', name: 'Legendary' },
  wizard:    { top: '#5b3ce0', accent: '#ffd76a', pants: '#2a2040', collar: '#ffd76a', sleeve: '#4f34c8', button: '#ffd76a', name: 'Robe' }
};

const SHOE_COLORS = {
  sneakers:   { main: '#ffffff', accent: '#3f6fd4', sole: '#c9cfd8' },
  boots:      { main: '#6b4423', accent: '#3a2412', sole: '#2a1a0c' },
  sandals:    { main: '#d9a06b', accent: '#a86b3c', sole: '#c08a52' },
  flats:      { main: '#e565a8', accent: '#b03e7f', sole: '#d65a98' },
  slipons:    { main: '#8a97a8', accent: '#5b6472', sole: '#7d899b' },
  heels:      { main: '#1a1a1a', accent: '#4a4a4a', sole: '#262626' },
  spaceboots: { main: '#dfe6ee', accent: '#8f9aa8', sole: '#cdd6e2' },
  hightops:   { main: '#e565a8', accent: '#34d1bf', sole: '#d04f94' }
};

const SPECIES_COLORS = {
  robot:  { body: '#c9d2dc', dark: '#8f9aa8', glow: '#34d1bf', joint: '#5b6472' },
  dragon: { body: '#2a9d8f', dark: '#1f6f66', belly: '#ffd76a', horn: '#e9c46a', wing: '#1f6f66', scale: '#237a70' },
  wizard: { skin: '#f3c6a5' },
  alien:  { body: '#6ab04c', dark: '#4d8436', spot: '#3e6b2b', eye: '#20242e' },
  ghost:  { body: '#e8ecf5', dark: '#a9b6cc', blush: '#d8c9ee', glow: '#7a5ce0' },
  hero:   { skin: '#e6b487' }
};

const HAIR_BACK = { afro: 1, curly: 1, locs: 1, braids: 1, long: 1, ponytail: 1, braidhalo: 1 };

function shade(hex, amt = -26) {
  const n = parseInt(hex.slice(1), 16);
  let r = (n >> 16) + amt, gg = ((n >> 8) & 0xff) + amt, b = (n & 0xff) + amt;
  r = Math.max(0, Math.min(255, r)); gg = Math.max(0, Math.min(255, gg)); b = Math.max(0, Math.min(255, b));
  return `#${((r << 16) | (gg << 8) | b).toString(16).padStart(6, '0')}`;
}
function lighten(hex, amt = 34) { return shade(hex, amt); }
function mix(hex, amt) { return amt >= 0 ? lighten(hex, amt) : shade(hex, -amt); }
function hexA(hex, a) { return `${hex}${String(Math.round(a * 255).toString(16)).padStart(2, '0')}`; }

function isDress(outfitId) { return ['kimono', 'hanbok', 'sari', 'goth'].includes(outfitId); }

/* ================= 3D SHADING ENGINE ================= */
/* Every render owns a unique gradient id-set so many avatars share one page safely. */
let __rseq = 0;
const R = { id: 'a0', skin: '#a86b3c', hair: '#2b1d16', eye: '#4a2f1d', top: '#3f6fd4', sleeve: '#3562bc', pants: '#34405a', shoes: '#ffffff' };
function beginRender(av) {
  const o = AV.outfit(av);
  R.id = 'wm' + (++__rseq);
  R.skin = AV.skin(av); R.hair = AV.hair(av); R.eye = AV.eye(av);
  R.top = o.top; R.sleeve = o.sleeve; R.pants = o.pants; R.shoes = AV.shoes(av).main;
  return R.id;
}
function defs() {
  const s = R.skin, h = R.hair, t = R.top, sl = R.sleeve, p = R.pants, e = R.eye;
  const id = R.id;
  return `<defs>
  <radialGradient id="${id}-skin" cx="0.38" cy="0.3" r="0.85">${gstop(0, lighten(s, 26))}${gstop(0.45, s)}${gstop(1, shade(s, -22))}</radialGradient>
  <linearGradient id="${id}-skinShade" x1="0" y1="0" x2="0" y2="1">${gstop(0, hexA(s, 0))}${gstop(1, hexA(shade(s,-42),0.55))}</linearGradient>
  <radialGradient id="${id}-hairv" cx="0.42" cy="0.26" r="0.9">${gstop(0, lighten(h, 34))}${gstop(0.45, h)}${gstop(1, shade(h, -28))}</radialGradient>
  <linearGradient id="${id}-toshtop" x1="0" y1="0" x2="0" y2="1">${gstop(0, lighten(t, 18))}${gstop(1, shade(t, -16))}</linearGradient>
  <linearGradient id="${id}-torsh" x1="0" y1="0" x2="0" y2="1">${gstop(0, lighten(t, 9))}${gstop(1, shade(t, -18))}</linearGradient>
  <linearGradient id="${id}-sleeve" x1="0" y1="0" x2="0" y2="1">${gstop(0, lighten(sl, 14))}${gstop(1, shade(sl, -16))}</linearGradient>
  <linearGradient id="${id}-pants" x1="0" y1="0" x2="0" y2="1">${gstop(0, lighten(p, 12))}${gstop(1, shade(p, -16))}</linearGradient>
  <linearGradient id="${id}-shoe" x1="0" y1="0" x2="0" y2="1">${gstop(0, lighten(R.shoes, 18))}${gstop(1, shade(R.shoes, -14))}</linearGradient>
  <radialGradient id="${id}-eye" cx="0.4" cy="0.35" r="0.9">${gstop(0, lighten(e, 26))}${gstop(0.55, e)}${gstop(1, shade(e, -30))}</radialGradient>
  <radialGradient id="${id}-ground" cx="0.5" cy="0.5" r="0.5">${gstop(0, '#2b2440', 0.14)}${gstop(1, '#2b2440', 0)}</radialGradient>
  </defs>`;
}
function gstop(o, c, a) { return `<stop offset="${Math.round(o * 100)}%" stop-color="${c}"${a != null ? ` stop-opacity="${a}"` : ''}/>`; }
/* Light from upper-left: overlay a soft top-glow and a lower-right core shadow, clipped to the base shape. */
function celShade(g, cx, cy, rx, ry, base) {
  const id = R.id;
  g.push(`<ellipse cx="${cx}" cy="${cy}" rx="${rx}" ry="${ry}" fill="url(#${id}-${base})"/>`);
  g.push(`<ellipse cx="${cx}" cy="${cy}" rx="${rx}" ry="${ry}" fill="url(#${id}-skinShade)" opacity="0.5"/>`);
  g.push(`<ellipse cx="${cx - rx * 0.22}" cy="${cy - ry * 0.32}" rx="${rx * 0.62}" ry="${ry * 0.5}" fill="#ffffff" opacity="0.16"/>`);
  g.push(`<path d="M${cx - rx * 0.86} ${cy} A${rx} ${ry} 0 0 1 ${cx + rx * 0.86} ${cy} A${rx} ${ry} 0 0 0 ${cx - rx * 0.86} ${cy} Z" fill="${shade(base === 'skin' ? R.skin : R.top, -40)}" opacity="0.3"/>`);
}
function rimLight(g, cx, cy, rx, ry) {
  g.push(`<path d="M${cx - rx * 0.7} ${cy - ry * 0.7} A${rx * 1.02} ${ry * 1.02} 0 0 1 ${cx + rx * 0.74} ${cy - ry * 0.7}" stroke="#ffffff" stroke-width="2.4" fill="none" opacity="0.4" stroke-linecap="round"/>`);
}

/* ================= RENDER ================= */
function renderAvatar(av) {
  const id = beginRender(av);
  const g = [];
  if (av.species === 'hero') g.push(`<path d="M40 40 Q96 196 20 210 Q54 156 44 40 Z" fill="#3f6fd4" opacity="0.9"/><path d="M40 40 Q60 120 42 200 Q46 150 46 40 Z" fill="#345fd0" opacity="0.5"/>`);
  svgHairBack(av, g);
  svgBody(av, g);
  svgHead(av, g);
  svgHairFront(av, g);
  svgHumanFeatures(av, g);
  svgAccessories(av, g);
  svgSunglasses(av, g);
  return `<svg viewBox="0 0 200 240" role="img" aria-label="avatar">${defs()}<ellipse cx="100" cy="237" rx="50" ry="6" fill="url(#${id}-ground)"/>${g.join('')}</svg>`;
}

function avatarFromPreset(p) {
  return Object.assign({ species: 'human', skin: 'medium', hair: 'straight', hairColor: 'black', eyes: 'brown', outfit: 'tee', accessory: 'none', shoes: 'sneakers', sunglasses: false }, p || {});
}

/* ================= HAIR (back layer) ================= */
function hairGrad() { return `url(#${R.id}-hairv)`; }

function svgHairBack(av, g) {
  if (!HAIR_BACK[av.hair]) return;
  const hair = AV.hair(av);
  const hg = hairGrad();
  switch (av.hair) {
    case 'long':
      g.push(`<path d="M64 60 A36 40 0 0 1 136 60 L138 96 L132 128 Q100 138 68 128 L62 96 Z" fill="${hg}"/>`);
      g.push(`<path d="M66 62 A34 36 0 0 1 134 62 L136 92 L130 120 Q100 130 70 120 L64 92 Z" fill="${lighten(hair, 18)}" opacity="0.5"/>`);
      g.push(`<path d="M68 58 A32 30 0 0 1 132 58 Q130 70 130 82 Q100 88 70 82 Q70 70 68 58 Z" fill="#ffffff" opacity="0.10"/>`);
      break;
    case 'ponytail':
      g.push(`<path d="M134 58 Q160 66 154 100 Q152 124 142 138 Q136 114 132 92 Q126 70 134 58 Z" fill="${hg}"/><path d="M140 66 Q156 74 152 96 Q150 116 144 128 Q140 110 138 94 Q134 76 140 66 Z" fill="${lighten(hair, 16)}" opacity="0.6"/>`);
      break;
    case 'locs':
      [{ x: 74, w: 8 }, { x: 88, w: 8 }, { x: 102, w: 8 }, { x: 116, w: 8 }].forEach(c => {
        g.push(`<rect x="${c.x}" y="102" width="${c.w}" height="32" rx="${c.w / 2}" fill="${hg}"/>`);
        g.push(`<rect x="${c.x + 2}" y="104" width="${c.w - 5}" height="26" rx="2" fill="#ffffff" opacity="0.18"/>`);
      });
      break;
    case 'braids':
      [{ x: 74, w: 8 }, { x: 88, w: 8 }, { x: 104, w: 8 }, { x: 118, w: 8 }].forEach(c => {
        g.push(`<rect x="${c.x}" y="102" width="${c.w}" height="28" rx="${c.w / 2}" fill="${hg}"/>`);
        g.push(`<rect x="${c.x + 2}" y="104" width="${c.w - 5}" height="22" rx="2" fill="#ffffff" opacity="0.18"/>`);
      });
      break;
    case 'afro':
      g.push(`<circle cx="100" cy="64" r="42" fill="${hg}"/>`);
      g.push(`<circle cx="100" cy="62" r="34" fill="${lighten(hair, 16)}" opacity="0.45"/>`);
      g.push(`<circle cx="78" cy="38" r="22" fill="#ffffff" opacity="0.16"/>`);
      // hint of strands
      for (let i = 0; i < 8; i++) g.push(`<path d="M${88 + i * 3} 40 A30 30 0 0 1 ${92 + i * 3} 70" stroke="${lighten(hair, 22)}" stroke-width="2" fill="none" opacity="0.4"/>`);
      break;
    case 'curly':
      g.push(`<circle cx="100" cy="65" r="40" fill="${hg}"/>`);
      for (let i = 0; i < 12; i++) g.push(`<circle cx="${68 + i * 5.8}" cy="${36 + (i % 4) * 6}" r="7" fill="${lighten(hair, 22)}"/><circle cx="${68 + i * 5.8}" cy="${36 + (i % 4) * 6}" r="3.5" fill="#ffffff" opacity="0.25"/>`);
      break;
    case 'braidhalo':
      g.push(`<path d="M60 72 A40 40 0 0 1 140 72" stroke="${hg}" stroke-width="10" fill="none"/>`);
      g.push(`<path d="M60 72 A40 40 0 0 1 140 72" stroke="${lighten(hair, 20)}" stroke-width="4" fill="none" stroke-dasharray="7 6"/>`);
      break;
  }
}

/* ================= BODY ================= */
function svgBody(av, g) {
  const o = AV.outfit(av);
  const species = av.species;
  const skin = AV.skin(av);
  if (species === 'ghost') {
    g.push(`<path d="M80 118 Q66 148 58 190 L58 232 Q80 216 100 232 Q120 216 142 232 L142 190 Q134 148 120 118 Q112 108 100 108 Q88 108 80 118 Z" fill="${SPECIES_COLORS.ghost.body}"/>`);
    g.push(`<path d="M80 118 Q66 148 58 190 L58 232 Q80 216 100 232 Q120 216 142 232 L142 190 Q134 148 120 118 Q112 108 100 108 Q88 108 80 118 Z" fill="url(#${R.id}-skinShade)" opacity="0.35"/>`);
    g.push(`<path d="M64 156 Q60 176 62 200" stroke="#c9d4e4" stroke-width="3" fill="none" opacity="0.6"/>`);
    return;
  }
  if (species === 'dragon') {
    g.push(`<path d="M118 200 Q150 214 156 236 Q138 226 122 216 Z" fill="${SPECIES_COLORS.dragon.body}"/><path d="M148 228 Q156 238 150 236 Q140 232 130 224 Z" fill="${SPECIES_COLORS.dragon.horn}"/>`);
    svgTorso(av, g, o);
    g.push(`<ellipse cx="100" cy="182" rx="24" ry="20" fill="${SPECIES_COLORS.dragon.belly}"/>`);
    g.push(`<ellipse cx="90" cy="170" rx="10" ry="8" fill="#ffffff" opacity="0.2"/>`);
    g.push(`<path d="M82 196 Q80 224 88 240 L102 240 Q100 224 98 196 Z" fill="${SPECIES_COLORS.dragon.body}"/>`);
    g.push(`<path d="M118 196 Q120 224 112 240 L98 240 Q100 224 102 196 Z" fill="${shade(SPECIES_COLORS.dragon.body, -18)}"/>`);
    g.push(`<ellipse cx="90" cy="239" rx="8" ry="4" fill="${SPECIES_COLORS.dragon.horn}"/><ellipse cx="110" cy="239" rx="8" ry="4" fill="${SPECIES_COLORS.dragon.horn}"/>`);
    return;
  }
  if (species === 'hero') {
    svgTorso(av, g, o);
    g.push(`<path d="M100 150 l10 16 -10 8 -10 -8 Z" fill="#ffd76a"/>`);
    g.push(`<path d="M96 158 h8 v7 h-8 z" fill="#e24a4a"/>`);
  }
  svgTorso(av, g, o);
  svgArms(av, g, o);
  if (species === 'robot') {
    g.push(`<rect x="86" y="152" width="28" height="24" rx="6" fill="${SPECIES_COLORS.robot.dark}"/>`);
    g.push(`<circle cx="100" cy="164" r="6" fill="${SPECIES_COLORS.robot.glow}"/><circle cx="100" cy="164" r="2.5" fill="#d8f7f2"/>`);
    g.push(`<rect x="70" y="158" width="14" height="6" rx="3" fill="${SPECIES_COLORS.robot.joint}"/><rect x="116" y="158" width="14" height="6" rx="3" fill="${SPECIES_COLORS.robot.joint}"/>`);
  }
  svgLegs(av, g, o);
  svgShoes(av, g);
}

function svgTorso(av, g, o) {
  const species = av.species;
  const skin = AV.skin(av);
  const dress = species === 'human' && isDress(av.outfit);
  const tgrad = `url(#${R.id}-toshtop)`;
  // neck + neck shadow
  g.push(`<rect x="90" y="106" width="20" height="20" rx="7" fill="url(#${R.id}-skin)"/>`);
  g.push(`<path d="M92 122 Q100 128 108 122" stroke="${shade(skin, -60)}" stroke-width="2" fill="none" opacity="0.35"/>`);
  // torso silhouette
  if (dress) {
    g.push(`<path d="M72 122 Q66 150 60 196 Q60 200 66 200 L134 200 Q140 200 140 196 Q134 150 128 122 Q100 112 72 122 Z" fill="${tgrad}"/>`);
    g.push(`<path d="M72 122 Q66 150 60 196 L64 200 Q62 176 70 150 Q76 130 86 122 Z" fill="${lighten(o.top, 16)}" opacity="0.55"/>`);
    g.push(`<path d="M66 200 L134 200" stroke="${shade(o.top, -40)}" stroke-width="4" opacity="0.5"/>`);
    g.push(`<path d="M74 150 L126 150 L128 164 L72 164 Z" fill="${o.button}" opacity="0.85"/>`);
    if (av.outfit === 'kimono') {
      g.push(`<path d="M84 124 L116 124 L112 132 L88 132 Z" fill="${o.collar}"/>`);
      g.push(`<path d="M78 148 Q100 158 122 148 L122 156 Q100 166 78 156 Z" fill="${o.accent}" opacity="0.8"/>`);
    }
    if (av.outfit === 'hanbok') {
      g.push(`<path d="M88 118 L112 118 L106 132 L94 132 Z" fill="${o.collar}"/>`);
      g.push(`<path d="M100 118 Q100 112 106 108 L110 114 Q104 118 100 118 Z" fill="${o.accent}"/>`);
    }
    if (av.outfit === 'sari') {
      g.push(`<path d="M100 120 L104 140 L96 140 Z" fill="${o.accent}"/>`);
      g.push(`<path d="M66 132 Q100 150 134 132 L134 142 Q100 160 66 142 Z" fill="${o.accent}" opacity="0.9"/>`);
      g.push(`<path d="M66 132 Q100 150 134 132" stroke="${shade(o.accent, -30)}" stroke-width="2.5" fill="none"/>`);
    }
  } else {
    g.push(`<path d="M74 120 Q70 160 72 200 L128 200 Q130 160 126 120 Q100 110 74 120 Z" fill="${tgrad}"/>`);
    g.push(`<path d="M74 120 Q70 160 72 200 L128 200 Q130 160 126 120 Q100 110 74 120 Z" fill="url(#${R.id}-torsh)" opacity="0.35"/>`);
    // draped lighting on fabric
    g.push(`<path d="M80 124 Q76 160 78 196 Q86 196 88 160 Q88 138 86 124 Z" fill="#ffffff" opacity="0.14"/>`);
    g.push(`<path d="M88 122 Q100 130 112 122" stroke="${shade(o.top, -50)}" stroke-width="3" fill="none" opacity="0.6"/>`);
  }
  // shoulder shading + rim
  g.push(`<path d="M126 118 Q132 124 130 132 Q126 128 124 122 Z" fill="${shade(o.top, -34)}" opacity="0.5"/>`);
  g.push(`<path d="M74 118 Q68 124 70 132 Q74 128 76 122 Z" fill="${lighten(o.top, 18)}" opacity="0.5"/>`);
  if (!dress) rimLight(g, 100, 152, 26, 44);
  if (av.outfit === 'hoodie') {
    g.push(`<path d="M88 110 Q100 122 112 110 L112 118 Q100 130 88 118 Z" fill="${o.collar}"/>`);
    g.push(`<path d="M96 116 Q98 124 100 122 Q102 124 104 116" stroke="${o.collar}" stroke-width="2" fill="none"/>`);
    g.push(`<path d="M80 122 L120 122" stroke="${shade(o.top, -34)}" stroke-width="2" opacity="0.5"/>`);
  } else if (av.outfit === 'formal') {
    g.push(`<path d="M92 118 L108 118 L102 132 L98 132 Z" fill="${o.collar}"/>`);
    g.push(`<path d="M100 134 L100 152" stroke="${o.button}" stroke-width="2" stroke-dasharray="2 5"/>`);
    g.push(`<path d="M76 120 L72 200 L84 200 L88 128 Z" fill="${shade(o.top, -16)}" opacity="0.5"/>`);
  } else if (av.outfit === 'chef') {
    g.push(`<path d="M74 150 L126 150 L122 200 L78 200 Z" fill="#f3f6fa"/>`);
    g.push(`<rect x="88" y="150" width="24" height="18" rx="3" fill="${o.accent}"/>`);
    g.push(`<path d="M92 118 L108 118 L102 130 L98 130 Z" fill="${o.collar}"/>`);
  } else if (av.outfit === 'mechanic') {
    g.push(`<rect x="80" y="138" width="40" height="26" rx="4" fill="${o.accent}"/><rect x="80" y="138" width="40" height="7" rx="3" fill="#4a6b80"/>`);
    g.push(`<path d="M84 152 L96 152" stroke="#3a5568" stroke-width="2"/>`);
  } else if (av.outfit === 'punk') {
    g.push(`<path d="M96 116 L104 116 L104 122 L96 122 Z" fill="${o.accent}"/>`);
    g.push(`<path d="M76 140 L124 140 L122 200 L78 200 Z" fill="${shade(o.top, -10)}" opacity="0.6"/>`);
    g.push(`<circle cx="92" cy="150" r="2.5" fill="#d8d8d8"/><circle cx="108" cy="150" r="2.5" fill="#d8d8d8"/>`);
  } else if (av.outfit === 'knight') {
    g.push(`<path d="M88 118 L112 118 L106 126 L94 126 Z" fill="${o.collar}"/>`);
    g.push(`<path d="M100 132 L100 160 M88 136 L112 136 M88 144 L112 144" stroke="${shade(o.top, -30)}" stroke-width="2" opacity="0.7"/>`);
    g.push(`<circle cx="100" cy="158" r="6" fill="${o.collar}"/>`);
    g.push(`<ellipse cx="94" cy="156" rx="1.4" ry="2.2" fill="#ffffff" opacity="0.5"/>`);
  } else if (av.outfit === 'astronaut') {
    g.push(`<rect x="80" y="128" width="40" height="22" rx="6" fill="${o.accent}"/>`);
    g.push(`<circle cx="100" cy="139" r="7" fill="#ffffff" opacity="0.9"/>`);
    g.push(`<ellipse cx="97" cy="136" rx="2" ry="2" fill="#8f9aa8"/>`);
    g.push(`<rect x="70" y="122" width="10" height="8" rx="3" fill="${o.sleeve}"/><rect x="120" y="122" width="10" height="8" rx="3" fill="${o.sleeve}"/>`);
  } else if (av.outfit === 'superhero') {
    g.push(`<path d="M100 132 L112 170 L88 170 Z" fill="${o.accent}"/>`);
  } else if (av.outfit === 'legend') {
    g.push(`<path d="M100 128 L108 138 L104 150 L96 150 L92 138 Z" fill="${o.accent}"/>`);
    g.push(`<path d="M72 122 L128 122 L126 128 L74 128 Z" fill="${o.collar}"/>`);
  } else if (av.outfit === 'dashiki') {
    for (let y = 136; y < 192; y += 12) {
      g.push(`<path d="M${82} ${y} L${118} ${y + 6} M${118} ${y} L${82} ${y + 6}" stroke="${o.accent}" stroke-width="2.5" fill="none" opacity="0.8"/>`);
    }
    g.push(`<path d="M88 118 L112 118 L106 130 L94 130 Z" fill="${o.collar}"/>`);
  }
  if (av.outfit === 'hoodie') g.push(`<path d="M84 160 Q100 176 116 160 L112 168 Q100 182 88 168 Z" fill="${shade(o.top, -24)}" opacity="0.6"/>`);
  if (av.outfit === 'tee') g.push(`<rect x="82" y="164" width="8" height="12" rx="2" fill="${o.button}" opacity="0.6"/>`);
}

function svgArms(av, g, o) {
  const species = av.species;
  const skin = AV.skin(av);
  const dress = species === 'human' && isDress(av.outfit);
  const armLen = dress ? 66 : 62;
  const handY = dress ? 186 : 182;
  const skin2 = species === 'dragon' ? SPECIES_COLORS.dragon.body : skin;
  const sgrad = `url(#${R.id}-sleeve)`;
  // left arm
  g.push(`<rect x="58" y="120" width="13" height="${armLen}" rx="6.5" fill="${sgrad}"/>`);
  g.push(`<rect x="58" y="120" width="5" height="${armLen}" rx="2.5" fill="${lighten(o.sleeve, 18)}" opacity="0.5"/>`);
  if (species === 'robot') {
    g.push(`<circle cx="64.5" cy="148" r="5" fill="${SPECIES_COLORS.robot.joint}"/>`);
    g.push(`<rect x="58" y="${handY}" width="13" height="10" rx="5" fill="${SPECIES_COLORS.robot.dark}"/>`);
  } else {
    g.push(`<circle cx="64.5" cy="${handY + 8}" r="7.5" fill="url(#${R.id}-skin)"/>`);
    g.push(`<circle cx="62.5" cy="${handY + 5}" r="2.4" fill="#ffffff" opacity="0.5"/>`);
    g.push(`<path d="M61 ${handY + 8} Q62 ${handY + 4} 64 ${handY + 5}" stroke="${shade(skin2, -40)}" stroke-width="1.6" fill="none" opacity="0.5"/>`);
  }
  // right arm
  g.push(`<rect x="129" y="120" width="13" height="${armLen}" rx="6.5" fill="${sgrad}"/>`);
  g.push(`<rect x="137" y="120" width="5" height="${armLen}" rx="2.5" fill="${shade(o.sleeve, -24)}" opacity="0.5"/>`);
  if (species === 'robot') {
    g.push(`<circle cx="135.5" cy="148" r="5" fill="${SPECIES_COLORS.robot.joint}"/>`);
    g.push(`<rect x="129" y="${handY}" width="13" height="10" rx="5" fill="${SPECIES_COLORS.robot.dark}"/>`);
  } else {
    g.push(`<circle cx="135.5" cy="${handY + 8}" r="7.5" fill="url(#${R.id}-skin)"/>`);
    g.push(`<circle cx="133.5" cy="${handY + 5}" r="2.4" fill="#ffffff" opacity="0.5"/>`);
    g.push(`<path d="M132 ${handY + 8} Q134 ${handY + 4} 136 ${handY + 5}" stroke="${shade(skin2, -40)}" stroke-width="1.6" fill="none" opacity="0.5"/>`);
  }
}

function svgLegs(av, g, o) {
  const species = av.species;
  if (species === 'ghost' || species === 'dragon') return;
  if (species === 'human' && isDress(av.outfit)) return;
  const pgrad = `url(#${R.id}-pants)`;
  g.push(`<rect x="81" y="196" width="17" height="28" rx="6" fill="${pgrad}"/>`);
  g.push(`<rect x="81" y="196" width="6" height="28" rx="3" fill="${lighten(o.pants, 14)}" opacity="0.5"/>`);
  g.push(`<rect x="102" y="196" width="17" height="28" rx="6" fill="${pgrad}"/>`);
  g.push(`<rect x="113" y="196" width="6" height="28" rx="3" fill="${shade(o.pants, -14)}" opacity="0.5"/>`);
  if (species === 'human') {
    g.push(`<rect x="83" y="218" width="15" height="8" rx="3" fill="#ffffff" opacity="0.85"/>`);
    g.push(`<rect x="104" y="218" width="15" height="8" rx="3" fill="#ffffff" opacity="0.85"/>`);
  }
}

function svgShoes(av, g) {
  const species = av.species;
  if (species === 'ghost' || species === 'dragon') return;
  const sh = AV.shoes(av);
  const sgrad = `url(#${R.id}-shoe)`;
  g.push(`<path d="M76 228 Q76 220 82 220 L98 220 Q102 220 102 226 L102 232 Q102 236 98 236 L80 236 Q76 236 76 228 Z" fill="${sgrad}"/>`);
  g.push(`<rect x="76" y="232" width="26" height="5" rx="2.5" fill="${sh.sole}"/>`);
  g.push(`<path d="M82 224 Q88 222 94 224" stroke="${sh.accent}" stroke-width="2" fill="none"/>`);
  g.push(`<path d="M76 232 L98 232" stroke="${shade(sh.main, -42)}" stroke-width="2" opacity="0.4"/>`);
  g.push(`<path d="M98 228 Q98 220 102 220 L118 220 Q124 220 124 228 L124 232 Q124 236 120 236 L102 236 Q98 236 98 232 Z" fill="${sgrad}"/>`);
  g.push(`<rect x="98" y="232" width="26" height="5" rx="2.5" fill="${sh.sole}"/>`);
  g.push(`<path d="M106 224 Q112 222 118 224" stroke="${sh.accent}" stroke-width="2" fill="none"/>`);
  g.push(`<path d="M98 232 L124 232" stroke="${shade(sh.main, -42)}" stroke-width="2" opacity="0.4"/>`);
}

/* ================= HEAD ================= */
function svgHead(av, g) {
  const skin = AV.skin(av);
  switch (av.species) {
    case 'robot': {
      g.push(`<rect x="60" y="40" width="80" height="78" rx="20" fill="url(#${R.id}-skin)"/>`);
      g.push(`<rect x="60" y="40" width="80" height="78" rx="20" fill="url(#${R.id}-skinShade)" opacity="0.3"/>`);
      g.push(`<ellipse cx="84" cy="52" rx="16" ry="10" fill="#ffffff" opacity="0.14"/>`);
      g.push(`<rect x="48" y="52" width="14" height="30" rx="7" fill="${SPECIES_COLORS.robot.joint}"/>`);
      g.push(`<rect x="138" y="52" width="14" height="30" rx="7" fill="${SPECIES_COLORS.robot.joint}"/>`);
      g.push(`<rect x="86" y="26" width="28" height="16" rx="8" fill="${SPECIES_COLORS.robot.joint}"/>`);
      g.push(`<circle cx="100" cy="22" r="5" fill="${SPECIES_COLORS.robot.glow}"/><circle cx="100" cy="22" r="2" fill="#d8f7f2"/>`);
      g.push(`<rect x="72" y="66" width="56" height="20" rx="10" fill="#2b3448"/>`);
      g.push(`<circle cx="86" cy="76" r="5" fill="${SPECIES_COLORS.robot.glow}"/><circle cx="114" cy="76" r="5" fill="${SPECIES_COLORS.robot.glow}"/>`);
      g.push(`<circle cx="87" cy="74" r="1.8" fill="#fff"/><circle cx="115" cy="74" r="1.8" fill="#fff"/>`);
      g.push(`<path d="M92 98 Q100 104 108 98" stroke="${SPECIES_COLORS.robot.dark}" stroke-width="2.5" fill="none"/>`);
      g.push(`<circle cx="70" cy="104" r="4" fill="${SPECIES_COLORS.robot.glow}" opacity="0.7"/>`);
      return;
    }
    case 'alien': {
      celShade(g, 100, 80, 42, 42, 'skin');
      for (const [sx, sy] of [[76, 46], [116, 52], [86, 112], [124, 98]]) g.push(`<circle cx="${sx}" cy="${sy}" r="4.5" fill="${SPECIES_COLORS.alien.spot}"/>`);
      g.push(`<path d="M58 52 Q52 40 62 34 Q68 44 60 52" stroke="${SPECIES_COLORS.alien.dark}" stroke-width="4" fill="none" stroke-linecap="round"/>`);
      g.push(`<path d="M142 52 Q148 40 138 34 Q132 44 140 52" stroke="${SPECIES_COLORS.alien.dark}" stroke-width="4" fill="none" stroke-linecap="round"/>`);
      g.push(`<circle cx="58" cy="52" r="4.5" fill="${SPECIES_COLORS.alien.dark}"/><circle cx="142" cy="52" r="4.5" fill="${SPECIES_COLORS.alien.dark}"/>`);
      g.push(`<ellipse cx="84" cy="82" rx="12" ry="15" fill="${SPECIES_COLORS.alien.eye}"/><ellipse cx="116" cy="82" rx="12" ry="15" fill="${SPECIES_COLORS.alien.eye}"/>`);
      g.push(`<circle cx="87" cy="79" r="4.5" fill="#fff"/><circle cx="119" cy="79" r="4.5" fill="#fff"/>`);
      g.push(`<path d="M92 106 Q100 114 108 106" stroke="#27481c" stroke-width="3" fill="none" stroke-linecap="round"/>`);
      g.push(`<circle cx="70" cy="74" r="3" fill="#fff" opacity="0.5"/>`);
      return;
    }
    case 'ghost': {
      g.push(`<path d="M60 118 V62 Q60 24 100 24 Q140 24 140 62 V118 Q130 106 120 118 Q110 106 100 118 Q90 106 80 118 Q70 106 60 118 Z" fill="${SPECIES_COLORS.ghost.body}"/>`);
      g.push(`<path d="M60 118 V62 Q60 24 100 24 Q140 24 140 62 V118 Q130 106 120 118 Q110 106 100 118 Q90 106 80 118 Q70 106 60 118 Z" fill="url(#${R.id}-skinShade)" opacity="0.25"/>`);
      g.push(`<ellipse cx="78" cy="42" rx="18" ry="10" fill="#ffffff" opacity="0.3"/>`);
      g.push(`<ellipse cx="86" cy="76" rx="7" ry="9" fill="${SPECIES_COLORS.ghost.dark}"/><ellipse cx="114" cy="76" rx="7" ry="9" fill="${SPECIES_COLORS.ghost.dark}"/>`);
      g.push(`<circle cx="88" cy="74" r="2.4" fill="#fff"/><circle cx="116" cy="74" r="2.4" fill="#fff"/>`);
      g.push(`<path d="M90 94 Q100 102 110 94" stroke="${SPECIES_COLORS.ghost.dark}" stroke-width="3" fill="none" stroke-linecap="round"/>`);
      g.push(`<circle cx="78" cy="90" r="5" fill="${SPECIES_COLORS.ghost.blush}" opacity="0.7"/><circle cx="122" cy="90" r="5" fill="${SPECIES_COLORS.ghost.blush}" opacity="0.7"/>`);
      g.push(`<path d="M70 52 L80 48 L70 44" stroke="${SPECIES_COLORS.ghost.glow}" stroke-width="2.5" fill="none" opacity="0.8"/>`);
      return;
    }
    case 'dragon': {
      g.push(`<ellipse cx="100" cy="78" rx="42" ry="40" fill="${SPECIES_COLORS.dragon.body}"/>`);
      g.push(`<ellipse cx="88" cy="62" rx="20" ry="16" fill="#ffffff" opacity="0.18"/>`);
      g.push(`<path d="M72 60 Q58 38 68 26 Q80 22 82 42" fill="${SPECIES_COLORS.dragon.horn}"/>`);
      g.push(`<path d="M128 60 Q142 38 132 26 Q120 22 118 42" fill="${shade(SPECIES_COLORS.dragon.horn, -16)}"/>`);
      g.push(`<ellipse cx="84" cy="80" rx="9" ry="11" fill="#20242e"/><ellipse cx="116" cy="80" rx="9" ry="11" fill="#20242e"/>`);
      g.push(`<circle cx="86" cy="77" r="3.2" fill="#ffd76a"/><circle cx="118" cy="77" r="3.2" fill="#ffd76a"/>`);
      g.push(`<path d="M100 88 Q98 92 92 92 L86 92 Q92 104 108 104 Q114 92 108 92 Q102 92 100 88 Z" fill="${SPECIES_COLORS.dragon.belly}"/>`);
      g.push(`<ellipse cx="58" cy="96" rx="16" ry="9" fill="${SPECIES_COLORS.dragon.belly}"/><ellipse cx="142" cy="96" rx="16" ry="9" fill="${SPECIES_COLORS.dragon.belly}"/>`);
      g.push(`<path d="M90 112 Q100 122 110 112" stroke="#1b6b62" stroke-width="3" fill="none" stroke-linecap="round"/>`);
      g.push(`<path d="M50 70 Q22 38 32 14 Q58 28 58 50" fill="${SPECIES_COLORS.dragon.wing}" opacity="0.85"/>`);
      g.push(`<path d="M150 70 Q178 38 168 14 Q142 28 142 50" fill="${SPECIES_COLORS.dragon.wing}" opacity="0.85"/>`);
      for (let i = 0; i < 5; i++) g.push(`<path d="M52 60 Q48 48 54 34" stroke="${SPECIES_COLORS.dragon.scale}" stroke-width="1.6" fill="none" opacity="0.6"/>`);
      return;
    }
    case 'wizard': {
      celShade(g, 100, 80, 38, 40, 'skin');
      g.push(`<path d="M64 96 Q58 120 64 128 Q74 124 76 98" fill="${SPECIES_COLORS.wizard.skin}"/>`);
      g.push(`<path d="M136 96 Q142 120 136 128 Q126 124 124 98" fill="${shade(SPECIES_COLORS.wizard.skin, -20)}"/>`);
      g.push(`<path d="M78 30 L100 2 L122 30 L120 62 L80 62 Z" fill="url(#${R.id}-toshtop)"/>`);
      g.push(`<path d="M78 30 L100 2 L100 34 Z" fill="${lighten(OUTFIT_COLORS.wizard.top, 22)}" opacity="0.5"/>`);
      g.push(`<path d="M80 52 L120 52 L120 62 L80 62 Z" fill="${OUTFIT_COLORS.wizard.accent}"/>`);
      g.push(`<path d="M96 4 L100 26 L104 4 Z" fill="${OUTFIT_COLORS.wizard.accent}"/>`);
      return;
    }
    case 'hero': {
      celShade(g, 100, 80, 38, 40, 'skin');
      return;
    }
    default: {
      // ears
      g.push(`<ellipse cx="64" cy="88" rx="7" ry="11" fill="url(#${R.id}-skin)"/>`);
      g.push(`<ellipse cx="64" cy="88" rx="3" ry="6" fill="${shade(skin, -46)}" opacity="0.5"/>`);
      g.push(`<ellipse cx="136" cy="88" rx="7" ry="11" fill="url(#${R.id}-skin)"/>`);
      g.push(`<ellipse cx="136" cy="88" rx="3" ry="6" fill="${shade(skin, -46)}" opacity="0.5"/>`);
      // head with 3D volume: gradient + top-glow + lower-right core shadow
      celShade(g, 100, 82, 38, 41, 'skin');
      // cheek/jaw shading to round out the face
      g.push(`<path d="M112 88 Q122 96 116 112 Q104 118 92 112 Q90 100 100 90 Z" fill="${shade(skin, -34)}" opacity="0.18"/>`);
      rimLight(g, 100, 82, 38, 41);
      return;
    }
  }
}

/* ================= FRONT HAIR ================= */
function svgHairFront(av, g) {
  if (['robot', 'alien', 'ghost', 'dragon'].includes(av.species)) return;
  const hair = AV.hair(av);
  const hg = hairGrad();
  const h = av.hair || 'straight';
  switch (h) {
    case 'afro':
    case 'curly':
      break;
    case 'locs':
    case 'braids':
      g.push(`<path d="M64 56 A38 40 0 0 1 136 56 L136 64 Q100 48 64 64 Z" fill="${hg}"/>`);
      g.push(`<path d="M64 56 A38 40 0 0 1 136 56 L136 64 Q100 48 64 64 Z" fill="#fff" opacity="0.08"/>`);
      break;
    case 'long':
      g.push(`<path d="M66 52 A34 32 0 0 1 134 52 L134 72 L132 88 Q100 98 68 88 L66 72 Z" fill="${hg}"/>`);
      g.push(`<path d="M68 54 A32 30 0 0 1 132 54 V70 Q100 80 68 70 Z" fill="${lighten(hair, 16)}" opacity="0.5"/>`);
      break;
    case 'ponytail':
      g.push(`<path d="M66 54 A34 32 0 0 1 134 54 L134 68 Q100 78 66 68 Z" fill="${hg}"/>`);
      break;
    case 'buzz':
      g.push(`<path d="M66 54 A34 32 0 0 1 134 54 L130 62 Q100 50 70 62 Z" fill="${hg}"/>`);
      g.push(`<path d="M70 60 Q100 46 130 60" stroke="${lighten(hair, 16)}" stroke-width="2" fill="none" opacity="0.5"/>`);
      break;
    case 'bob':
      g.push(`<path d="M64 52 A36 34 0 0 1 136 52 L134 96 Q100 104 66 96 Z" fill="${hg}"/>`);
      g.push(`<path d="M66 54 A34 32 0 0 1 134 54 V84 Q100 94 66 84 Z" fill="${lighten(hair, 14)}" opacity="0.5"/>`);
      g.push(`<path d="M66 96 Q66 104 70 106 Q76 108 80 102" stroke="${hair}" stroke-width="6" fill="none"/>`);
      g.push(`<path d="M134 96 Q134 104 130 106 Q124 108 120 102" stroke="${hair}" stroke-width="6" fill="none"/>`);
      g.push(`<path d="M70 56 L130 56" stroke="#ffffff" stroke-width="5" opacity="0.12"/>`);
      break;
    case 'pixie':
      g.push(`<path d="M68 54 A32 30 0 0 1 132 54 L126 68 Q100 56 74 68 Z" fill="${hg}"/>`);
      g.push(`<path d="M74 64 Q100 52 126 64" stroke="${lighten(hair, 16)}" stroke-width="2" fill="none" opacity="0.5"/>`);
      break;
    case 'bun':
      g.push(`<path d="M64 54 A36 32 0 0 1 136 54 L136 64 Q100 48 64 64 Z" fill="${hg}"/>`);
      g.push(`<circle cx="100" cy="34" r="15" fill="${hg}"/><circle cx="97" cy="31" r="6" fill="${lighten(hair, 18)}" opacity="0.6"/>`);
      g.push(`<circle cx="94" cy="27" r="4" fill="#ffffff" opacity="0.4"/>`);
      break;
    case 'mohawk':
      g.push(`<path d="M64 54 A36 32 0 0 1 136 54 L136 62 Q100 46 64 62 Z" fill="${hg}"/>`);
      g.push(`<path d="M94 44 Q100 20 106 44 Q102 38 100 44 Q98 38 94 44 Z" fill="${hg}"/>`);
      g.push(`<path d="M99 22 Q99 28 99 40" stroke="${lighten(hair, 26)}" stroke-width="4" fill="none" opacity="0.7"/>`);
      break;
    case 'spacebuns':
      g.push(`<path d="M64 54 A36 32 0 0 1 136 54 L136 62 Q100 46 64 62 Z" fill="${hg}"/>`);
      g.push(`<circle cx="80" cy="34" r="13" fill="${hg}"/><circle cx="120" cy="34" r="13" fill="${hg}"/>`);
      g.push(`<circle cx="78" cy="31" r="5" fill="${lighten(hair, 18)}" opacity="0.6"/><circle cx="118" cy="31" r="5" fill="${lighten(hair, 18)}" opacity="0.6"/>`);
      g.push(`<circle cx="75" cy="28" r="3" fill="#ffffff" opacity="0.4"/><circle cx="115" cy="28" r="3" fill="#ffffff" opacity="0.4"/>`);
      break;
    case 'undercut':
      g.push(`<path d="M70 52 A30 28 0 0 1 130 52 L126 60 Q100 46 74 60 Z" fill="${hg}"/>`);
      g.push(`<path d="M60 96 L70 66 M140 96 L130 66" stroke="${shade(hair, -30)}" stroke-width="2" fill="none" opacity="0.6"/>`);
      break;
    case 'braidhalo':
      g.push(`<path d="M64 58 A38 36 0 0 1 136 58 L136 64 Q100 48 64 64 Z" fill="${hg}"/>`);
      break;
    case 'waves':
      g.push(`<path d="M64 52 A36 34 0 0 1 136 52 L136 70 Q100 84 64 70 Z" fill="${hg}"/>`);
      g.push(`<path d="M66 58 Q78 66 90 58 Q102 66 114 58 Q126 66 134 62" stroke="${lighten(hair, 18)}" stroke-width="2.5" fill="none" opacity="0.7"/>`);
      g.push(`<path d="M68 64 Q80 72 92 64 Q104 72 116 64 Q126 72 132 68" stroke="${lighten(hair, 12)}" stroke-width="2" fill="none" opacity="0.5"/>`);
      break;
    default: // straight
      g.push(`<path d="M64 52 A36 34 0 0 1 136 52 L136 68 L134 80 Q100 88 66 80 L64 68 Z" fill="${hg}"/>`);
      g.push(`<path d="M66 54 A34 32 0 0 1 134 54 V68 Q100 78 66 68 Z" fill="${lighten(hair, 14)}" opacity="0.45"/>`);
      g.push(`<path d="M70 56 L128 56" stroke="#ffffff" stroke-width="5" opacity="0.14"/>`);
  }
  // glossy top sweep (3D animation highlight) + hairline shadow
  g.push(`<path d="M68 52 A36 36 0 0 1 132 52 Q130 40 120 38 Q100 46 76 44 Q68 46 68 52 Z" fill="#ffffff" opacity="0.18"/>`);
  g.push(`<path d="M70 58 A34 30 0 0 1 130 58" stroke="${shade(hair, -34)}" stroke-width="3" fill="none" opacity="0.4"/>`);
}

/* ================= FACE FEATURES ================= */
function eyeShape(g, cx, flip, eye) {
  // white + iris + pupil with gloss, upper-lid cast shadow, lower lash
  g.push(`<ellipse cx="${cx}" cy="82" rx="7" ry="8" fill="#ffffff"/>`);
  g.push(`<ellipse cx="${cx}" cy="82" rx="5.4" ry="6.6" fill="url(#${R.id}-eye)"/>`);
  g.push(`<ellipse cx="${cx}" cy="82" rx="2.3" ry="4.6" fill="${shade(eye, -44)}"/>`);
  g.push(`<circle cx="${cx + flip * 1.9}" cy="79.6" r="1.9" fill="#ffffff"/>`);
  g.push(`<circle cx="${cx + flip * 0.6}" cy="83.8" r="0.8" fill="#ffffff"/>`);
  g.push(`<ellipse cx="${cx - flip * 1.2}" cy="85.2" rx="1.2" ry="0.7" fill="#ffffff" opacity="0.8"/>`);
  g.push(`<path d="M${cx - 6.8} 89 Q${cx} 92 ${cx + 6.8} 89" stroke="${shade(eye, -52)}" stroke-width="1.1" fill="none" opacity="0.45"/>`);
}

function svgHumanFeatures(av, g) {
  if (['robot', 'alien', 'ghost', 'dragon'].includes(av.species)) return;
  const eye = AV.eye(av);
  const skin = AV.skin(av);
  const hair = AV.hair(av);
  const heroMask = av.species === 'hero';
  // eyebrows
  g.push(`<path d="M76 68 Q82 63 90 66" stroke="${hair}" stroke-width="3" fill="none" stroke-linecap="round"/>`);
  g.push(`<path d="M124 68 Q118 63 110 66" stroke="${hair}" stroke-width="3" fill="none" stroke-linecap="round"/>`);
  // eyes
  eyeShape(g, 86, -1, eye);
  eyeShape(g, 114, 1, eye);
  // brow/upper-lid ambient shadow to deepen the sockets
  g.push(`<path d="M78 74 Q86 71 94 74" stroke="${shade(skin, -42)}" stroke-width="2" fill="none" opacity="0.3"/>`);
  g.push(`<path d="M106 74 Q114 71 122 74" stroke="${shade(skin, -42)}" stroke-width="2" fill="none" opacity="0.3"/>`);
  // nose: bridge shading + rounded tip with soft cast shadow
  g.push(`<path d="M99 86 Q96 92 94 95 Q98 99 104 95 Q103 82 100 78 Q99 82 99 86 Z" fill="${lighten(skin, 14)}" opacity="0.6"/>`);
  g.push(`<path d="M96 90 Q100 96 97 99 Q93 99 95 96" fill="${shade(skin, -26)}" opacity="0.35"/>`);
  g.push(`<path d="M99 88 Q102 93 99 96" stroke="${shade(skin, -70)}" stroke-width="1.6" fill="none" opacity="0.35" stroke-linecap="round"/>`);
  g.push(`<ellipse cx="103" cy="88" rx="1.4" ry="2" fill="#ffffff" opacity="0.5"/>`);
  // mouth: soft rounded smile with inner shading and corner dimples
  g.push(`<path d="M90 102 Q100 111 110 102 Q104 114 100 114 Q96 114 90 102 Z" fill="#a3563f"/>`);
  g.push(`<path d="M92 104 Q100 111 108 104 Q100 112 92 104 Z" fill="#c8795f" opacity="0.7"/>`);
  g.push(`<path d="M89 101 Q90 100 91 100" stroke="${shade(skin, -44)}" stroke-width="1.4" opacity="0.4"/>`);
  g.push(`<path d="M109 101 Q110 100 111 100" stroke="${shade(skin, -44)}" stroke-width="1.4" opacity="0.4"/>`);
  // uneven lower-lip highlight
  g.push(`<path d="M95 108 Q100 111 105 108" stroke="#e565a8" stroke-width="1.4" fill="none" opacity="0.35"/>`);
  // blush: soft, built from a radial glow
  g.push(`<ellipse cx="74" cy="94" rx="6.5" ry="3.6" fill="${hexA('#e565a8', 0.28)}"/>`);
  g.push(`<ellipse cx="126" cy="94" rx="6.5" ry="3.6" fill="${hexA('#e565a8', 0.28)}"/>`);
  g.push(`<circle cx="74" cy="91" r="2.2" fill="#ffffff" opacity="0.35"/><circle cx="126" cy="91" r="2.2" fill="#ffffff" opacity="0.35"/>`);
  // hero mask
  if (heroMask) {
    g.push(`<path d="M74 70 Q100 80 126 70 Q128 86 124 94 Q100 104 76 94 Q72 86 74 70 Z" fill="#2a2038"/>`);
    g.push(`<ellipse cx="90" cy="78" rx="8" ry="4" fill="#ffffff" opacity="0.14"/>`);
    g.push(`<circle cx="100" cy="86" r="5.5" fill="#ffd76a"/>`);
    g.push(`<circle cx="98" cy="84" r="1.6" fill="#fff" opacity="0.6"/>`);
  }
  // wizard beard
  if (av.species === 'wizard') {
    g.push(`<path d="M88 108 Q100 126 112 108 L108 128 L92 128 Z" fill="#e9ecf2"/>`);
    g.push(`<path d="M90 114 Q100 122 110 114" stroke="#c9d2dc" stroke-width="2" fill="none" opacity="0.7"/>`);
  }
}

/* ================= ACCESSORIES ================= */
function svgAccessories(av, g) {
  const acc = av.accessory;
  if (acc === 'backpack') {
    g.push(`<path d="M40 146 L74 146 L72 198 L42 198 Z" fill="#5e4180"/>`);
    g.push(`<rect x="44" y="150" width="24" height="20" rx="5" fill="url(#${R.id}-torsh)"/>`);
    g.push(`<rect x="46" y="152" width="20" height="6" rx="3" fill="#a98fc4"/>`);
    g.push(`<rect x="46" y="160" width="20" height="7" rx="3" fill="#4a3366"/>`);
    g.push(`<path d="M40 148 Q46 120 62 118 L62 146 Q52 148 44 146 Z" fill="#7d5a9e"/>`);
    g.push(`<path d="M126 146 L160 146 L158 198 L128 198 Z" fill="#5e4180"/>`);
    g.push(`<rect x="130" y="150" width="24" height="20" rx="5" fill="url(#${R.id}-torsh)"/>`);
    g.push(`<rect x="132" y="152" width="20" height="6" rx="3" fill="#a98fc4"/>`);
    g.push(`<path d="M160 148 Q154 120 138 118 L138 146 Q148 148 156 146 Z" fill="#7d5a9e"/>`);
    return;
  }
  if (acc === 'scarf') {
    g.push(`<path d="M78 110 L122 110 L120 122 L80 122 Z" fill="#e565a8"/>`);
    g.push(`<path d="M80 110 L120 110 L118 114 L82 114 Z" fill="#ff8fb3"/>`);
    g.push(`<path d="M104 122 L112 150 L94 148 L100 122 Z" fill="#e565a8"/>`);
    g.push(`<path d="M106 124 L110 142 L102 141 L104 124 Z" fill="#ff8fb3"/>`);
    g.push(`<path d="M80 110 L120 110" stroke="#b03e7f" stroke-width="1.5" opacity="0.6"/>`);
  }
  if (acc === 'cap') {
    g.push(`<path d="M62 54 A38 30 0 0 1 138 54 L134 64 Q100 78 66 64 Z" fill="url(#${R.id}-toshtop)"/>`);
    g.push(`<path d="M62 56 Q100 76 138 56" stroke="#2b3448" stroke-width="4" fill="none"/>`);
    g.push(`<path d="M98 30 Q100 22 108 18 Q112 24 106 30 Z" fill="#2b3448"/>`);
    g.push(`<circle cx="100" cy="40" r="4" fill="#ffd76a"/>`);
    g.push(`<path d="M80 62 L120 62 L120 66 L80 66 Z" fill="#c93a3a"/>`);
    g.push(`<ellipse cx="84" cy="44" rx="12" ry="5" fill="#ffffff" opacity="0.22"/>`);
  }
  if (acc === 'beanie') {
    g.push(`<path d="M64 54 A36 30 0 0 1 136 54 L136 62 Q100 74 64 62 Z" fill="${OUTFIT_COLORS.tee.top}"/>`);
    g.push(`<path d="M64 54 A36 30 0 0 1 136 54" stroke="#3560bd" stroke-width="4" fill="none"/>`);
    g.push(`<path d="M66 58 L134 58 L134 62 Q100 76 66 62 Z" fill="#4a7fd9"/>`);
    g.push(`<circle cx="100" cy="36" r="10" fill="#34d1bf"/><circle cx="96" cy="33" r="4" fill="#aef4ec"/>`);
    g.push(`<path d="M70 46 L130 46" stroke="#ffffff" stroke-width="4" opacity="0.2"/>`);
  }
  if (acc === 'headphones') {
    g.push(`<path d="M64 52 A36 38 0 0 1 136 52" stroke="#5b3ce0" stroke-width="8" fill="none"/>`);
    g.push(`<path d="M64 52 A36 38 0 0 1 136 52" stroke="#8a6cc4" stroke-width="3" fill="none" opacity="0.7"/>`);
    g.push(`<rect x="56" y="50" width="14" height="32" rx="7" fill="#5b3ce0"/>`);
    g.push(`<rect x="130" y="50" width="14" height="32" rx="7" fill="#5b3ce0"/>`);
    g.push(`<rect x="58" y="62" width="10" height="12" rx="4" fill="#34d1bf"/>`);
    g.push(`<rect x="132" y="62" width="10" height="12" rx="4" fill="#34d1bf"/>`);
    g.push(`<ellipse cx="62" cy="56" rx="3" ry="6" fill="#7a5ce0" opacity="0.6"/>`);
    g.push(`<ellipse cx="138" cy="56" rx="3" ry="6" fill="#7a5ce0" opacity="0.6"/>`);
  }
  if (acc === 'bow') {
    g.push(`<path d="M126 52 L144 44 L142 62 Z" fill="#e565a8"/>`);
    g.push(`<path d="M126 52 L108 44 L110 62 Z" fill="#ff8fb3"/>`);
    g.push(`<circle cx="126" cy="52" r="6" fill="#b03e7f"/>`);
    g.push(`<circle cx="126" cy="52" r="2.5" fill="#ffd76a"/>`);
  }
}

function svgSunglasses(av, g) {
  if (!av.sunglasses) return;
  g.push(`<rect x="60" y="74" width="36" height="16" rx="6" fill="#20242e"/>`);
  g.push(`<rect x="104" y="74" width="36" height="16" rx="6" fill="#20242e"/>`);
  g.push(`<rect x="96" y="80" width="8" height="5" rx="2.5" fill="#20242e"/>`);
  g.push(`<path d="M96 76 L104 76" stroke="#20242e" stroke-width="3"/>`);
  g.push(`<rect x="56" y="80" width="8" height="6" rx="3" fill="#20242e"/>`);
  g.push(`<rect x="136" y="80" width="8" height="6" rx="3" fill="#20242e"/>`);
  g.push(`<ellipse cx="78" cy="82" rx="10" ry="3" fill="#ffffff" opacity="0.18"/>`);
  g.push(`<ellipse cx="122" cy="82" rx="10" ry="3" fill="#ffffff" opacity="0.18"/>`);
}