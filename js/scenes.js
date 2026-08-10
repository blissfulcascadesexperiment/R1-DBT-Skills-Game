/* =========================================================================
   WISE MIND: A DBT ADVENTURE
   Scene backgrounds — each challenge/boss setting gets a themed SVG backdrop
   ========================================================================= */

function svgScene(id, skyTop, skyBottom, inner, opts) {
  opts = opts || {};
  const floor = opts.floor;
  const glow = opts.glow;
  return `<svg class="scene-bg-svg" viewBox="0 0 1200 700" preserveAspectRatio="xMidYMid slice" aria-hidden="true" style="position:absolute;inset:0;width:100%;height:100%">
  <defs>
    <linearGradient id="sc-${id}-sky" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="${skyTop}"/><stop offset="100%" stop-color="${skyBottom}"/>
    </linearGradient>
    ${glow ? `<radialGradient id="sc-${id}-glow" cx="0.5" cy="0.5" r="0.5">
      <stop offset="0%" stop-color="${glow}" stop-opacity="0.35"/><stop offset="100%" stop-color="${glow}" stop-opacity="0"/>
    </radialGradient>` : ''}
  </defs>
  <rect width="1200" height="700" fill="url(#sc-${id}-sky)"/>
  ${inner}
  ${floor ? `<rect y="${floor}" width="1200" height="${700 - floor}" fill="rgba(20,12,40,0.10)"/>` : ''}
  ${glow ? `<rect width="1200" height="700" fill="url(#sc-${id}-glow)"/>` : ''}
  <rect width="1200" height="700" fill="url(#sc-read-scrim)"/>
</svg>`;
}

function scScrim() {
  return `<linearGradient id="sc-read-scrim" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#fdf6ec" stop-opacity="0.82"/>
    <stop offset="34%" stop-color="#fdf6ec" stop-opacity="0.55"/>
    <stop offset="100%" stop-color="#fdf6ec" stop-opacity="0.42"/>
  </linearGradient>`;
}

/* ---------- individual scenes ---------- */

const SC_LIVING_ROOM = () => svgScene('living', '#efe7ff', '#e2d6f6',
`<defs>${scScrim()}</defs>
  <rect y="470" width="1200" height="230" fill="#e0b98c"/>
  <rect y="466" width="1200" height="8" fill="#c99d6d"/>
  <rect y="100" width="300" height="230" rx="14" fill="#ffffff" opacity="0.9"/>
  <rect y="88" width="310" height="254" rx="16" fill="#d9a06b"/>
  <rect y="116" width="280" height="200" rx="10" fill="#aee0ff"/>
  <circle cx="370" cy="150" r="34" fill="#ffd76e"/>
  <rect y="330" width="300" height="10" rx="5" fill="#ffffff"/>
  <rect y="316" width="90" height="22" rx="8" fill="#c99d6d"/>
  <rect x="420" y="250" width="300" height="46" rx="16" fill="#8a6fe8"/>
  <rect x="430" y="268" width="280" height="22" rx="8" fill="#a794f0"/>
  <rect x="440" y="250" width="120" height="150" rx="14" fill="#9c83ef"/>
  <rect x="580" y="250" width="120" height="150" rx="14" fill="#9c83ef"/>
  <rect x="420" y="380" width="300" height="56" rx="16" fill="#7b60dd"/>
  <rect x="432" y="392" width="276" height="30" rx="12" fill="#6a51c4"/>
  <circle cx="900" cy="200" r="70" fill="#ffd76e" opacity="0.55"/>
  <ellipse cx="900" cy="200" rx="40" ry="26" fill="#ffd76e"/>
  <rect x="860" y="250" width="18" height="220" rx="8" fill="#b3885a"/>
  <path d="M790 250 L880 210 L970 250 L880 300 Z" fill="#ffcf6e"/>
  <path d="M830 250 L880 222 L930 250 L880 286 Z" fill="#ffb833"/>
  <ellipse cx="600" cy="500" rx="260" ry="34" fill="#d8a873" opacity="0.85"/>
  <circle cx="180" cy="180" r="8" fill="#b3a0e8"/>
  <circle cx="700" cy="130" r="8" fill="#b3a0e8"/>
  <circle cx="1050" cy="140" r="8" fill="#b3a0e8"/>`,
{ floor: 470 });

const SC_BEDROOM_DAY = () => svgScene('bedday', '#dcebfb', '#c5dcf2',
`<defs>${scScrim()}</defs>
  <rect y="470" width="1200" height="230" fill="#e6cba2"/>
  <rect x="40" y="110" width="260" height="240" rx="14" fill="#d9a06b"/>
  <rect x="58" y="130" width="224" height="190" rx="10" fill="#bfe6ff"/>
  <circle cx="250" cy="168" r="32" fill="#ffd76e"/>
  <path d="M58 200 q30 -14 60 0 q30 -14 60 0" stroke="#fff" stroke-width="6" fill="none" opacity="0.9"/>
  <rect x="820" y="150" width="320" height="330" rx="18" fill="#ffffff" opacity="0.9"/>
  <rect x="840" y="170" width="280" height="290" rx="14" fill="#c99df0"/>
  <rect x="820" y="370" width="320" height="120" rx="14" fill="#7b60dd"/>
  <rect x="830" y="386" width="300" height="34" rx="10" fill="#f7f3ff"/>
  <rect x="830" y="428" width="300" height="34" rx="10" fill="#ffffff"/>
  <rect x="826" y="400" width="120" height="110" rx="10" fill="#9c83ef"/>
  <rect x="952" y="408" width="120" height="110" rx="10" fill="#9c83ef"/>
  <rect x="600" y="300" width="180" height="14" rx="7" fill="#b3885a"/>
  <rect x="614" y="314" width="152" height="10" rx="5" fill="#d9a06b"/>
  <rect x="660" y="316" width="60" height="160" rx="6" fill="#b3885a"/>
  <circle cx="640" cy="220" r="40" fill="#ff8fa3" opacity="0.85"/>
  <rect x="610" y="248" width="60" height="56" rx="8" fill="#ffd76e"/>
  <rect x="596" y="228" width="8" height="40" rx="4" fill="#555"/>
  <rect x="676" y="228" width="8" height="40" rx="4" fill="#555"/>
  <ellipse cx="600" cy="510" rx="250" ry="30" fill="#d9b98c" opacity="0.85"/>`,
{ floor: 470 });

const SC_BEDROOM_NIGHT = () => svgScene('bednight', '#232c4d', '#131a33',
`<defs>${scScrim()}</defs>
  <circle cx="210" cy="130" r="34" fill="#ffe9b0"/>
  <circle cx="200" cy="122" r="8" fill="#232c4d"/>
  <circle cx="222" cy="138" r="5" fill="#232c4d"/>
  <circle cx="90" cy="200" r="3" fill="#fff" opacity="0.8"/>
  <circle cx="140" cy="90" r="2.5" fill="#fff" opacity="0.7"/>
  <circle cx="340" cy="160" r="2.5" fill="#fff" opacity="0.7"/>
  <circle cx="420" cy="110" r="3" fill="#fff" opacity="0.6"/>
  <rect x="760" y="160" width="360" height="330" rx="18" fill="#2b3560"/>
  <rect x="780" y="180" width="320" height="300" rx="14" fill="#39457a"/>
  <rect x="760" y="380" width="360" height="120" rx="14" fill="#2a2f5a"/>
  <path d="M780 390 q160 40 320 0" stroke="#1c2347" stroke-width="12" fill="none"/>
  <rect x="786" y="410" width="308" height="40" rx="10" fill="#55618f"/>
  <ellipse cx="940" cy="420" rx="60" ry="16" fill="#6a6f9c" opacity="0.5"/>
  <rect x="760" y="180" width="120" height="120" rx="12" fill="#9c83ef"/>
  <rect x="680" y="430" width="60" height="14" rx="7" fill="#b3885a"/>
  <circle cx="700" cy="404" r="26" fill="#ffd76e" opacity="0.25"/>
  <circle cx="700" cy="404" r="16" fill="#fff" opacity="0.35"/>
  <rect x="692" y="416" width="16" height="8" rx="4" fill="#3a456e"/>`,
{ floor: 470 });

const SC_HALLWAY = () => svgScene('hall', '#f4efe6', '#e9e0d0',
`<defs>${scScrim()}</defs>
  <rect y="470" width="1200" height="230" fill="#e8dcc4"/>
  <rect y="462" width="1200" height="8" fill="#d3c19c"/>
  ${Array.from({ length: 6 }).map((_, i) => `<g>
    <rect x="${60 + i * 190}" y="150" width="150" height="300" rx="10" fill="#d9c89f"/>
    <rect x="${72 + i * 190}" y="162" width="126" height="120" rx="8" fill="#b6a67f"/>
    <rect x="${72 + i * 190}" y="296" width="126" height="140" rx="8" fill="#b6a67f"/>
    <rect x="${80 + i * 190}" y="170" width="110" height="20" rx="6" fill="#cbbd9a"/>
  </g>`).join('')}
  <rect y="170" width="1200" height="4" fill="#cbbd9a" opacity="0.5"/>
  <rect y="330" width="1200" height="4" fill="#cbbd9a" opacity="0.5"/>
  <circle cx="1100" cy="120" r="30" fill="#ffffff" opacity="0.9"/>
  <circle cx="1100" cy="120" r="22" fill="#fff7d6"/>
  <rect x="70" y="80" width="200" height="8" rx="4" fill="#ffffff" opacity="0.7"/>
  <rect x="600" y="90" width="120" height="60" rx="8" fill="#c99d6d"/>
  <rect x="616" y="104" width="26" height="30" rx="4" fill="#fff"/>
  <rect x="664" y="104" width="26" height="30" rx="4" fill="#fff"/>`,
{ floor: 470 });

const SC_CLASSROOM = () => svgScene('class', '#eaf3fb', '#d8e7f3',
`<defs>${scScrim()}</defs>
  <rect y="470" width="1200" height="230" fill="#e2d5c2"/>
  <rect x="120" y="120" width="360" height="180" rx="12" fill="#ffffff" opacity="0.95"/>
  <path d="M160 300 q60 -40 120 0 M160 340 q60 -40 120 0" stroke="#7c5cff" stroke-width="8" fill="none" opacity="0.8"/>
  <path d="M180 180 q30 -20 60 0 M180 210 q30 -20 60 0" stroke="#34d1bf" stroke-width="7" fill="none" opacity="0.8"/>
  <circle cx="680" cy="140" r="44" fill="#ffffff" opacity="0.95"/>
  <circle cx="680" cy="140" r="34" fill="#fff"/>
  <path d="M650 140 h60 M680 110 v60" stroke="#2b2440" stroke-width="5"/>
  <path d="M665 120 l15 20 l15 -20" stroke="#2b2440" stroke-width="4" fill="none"/>
  <rect x="80" y="330" width="180" height="12" rx="6" fill="#b3885a"/>
  <rect x="96" y="342" width="148" height="8" rx="4" fill="#d9a06b"/>
  <rect x="470" y="330" width="180" height="12" rx="6" fill="#b3885a"/>
  <rect x="486" y="342" width="148" height="8" rx="4" fill="#d9a06b"/>
  <rect x="860" y="330" width="180" height="12" rx="6" fill="#b3885a"/>
  <rect x="876" y="342" width="148" height="8" rx="4" fill="#d9a06b"/>
  <rect x="620" y="120" width="180" height="150" rx="10" fill="#ffffff" opacity="0.85"/>
  <circle cx="650" cy="160" r="20" fill="#d9e9f7"/>
  <rect x="700" y="140" width="70" height="110" rx="6" fill="#c9b389"/>`,
{ floor: 470 });

const SC_EXAM = () => svgScene('exam', '#eef2f6', '#dde4ec',
`<defs>${scScrim()}</defs>
  <rect y="470" width="1200" height="230" fill="#d5cfc4"/>
  <rect x="90" y="330" width="200" height="12" rx="6" fill="#9a8f7c"/>
  <rect x="106" y="342" width="168" height="8" rx="4" fill="#b8ad9a"/>
  <rect x="500" y="330" width="200" height="12" rx="6" fill="#9a8f7c"/>
  <rect x="516" y="342" width="168" height="8" rx="4" fill="#b8ad9a"/>
  <rect x="910" y="330" width="200" height="12" rx="6" fill="#9a8f7c"/>
  <rect x="926" y="342" width="168" height="8" rx="4" fill="#b8ad9a"/>
  <rect x="40" y="150" width="320" height="100" rx="12" fill="#cbbfae"/>
  <rect x="56" y="164" width="288" height="20" rx="6" fill="#efe7da"/>
  <rect x="56" y="196" width="200" height="16" rx="6" fill="#efe7da"/>
  <circle cx="1020" cy="130" r="34" fill="#fff"/>
  <path d="M990 130 h60 M1020 100 v60" stroke="#2b2440" stroke-width="5"/>
  <rect x="100" y="90" width="60" height="6" rx="3" fill="#9a8f7c"/>
  <rect x="600" y="90" width="60" height="6" rx="3" fill="#9a8f7c"/>
  <rect x="400" y="130" width="120" height="70" rx="8" fill="#ffffff" opacity="0.9"/>
  <rect x="412" y="142" width="96" height="16" rx="4" fill="#e8e2f5"/>
  <rect x="412" y="164" width="70" height="16" rx="4" fill="#e8e2f5"/>`,
{ floor: 470 });

const SC_CAFETERIA = () => svgScene('cafe', '#fdf3dd', '#f7e6c4',
`<defs>${scScrim()}</defs>
  <rect y="470" width="1200" height="230" fill="#e6d3b0"/>
  <rect x="40" y="160" width="420" height="310" rx="14" fill="#fff4dc"/>
  <rect x="40" y="150" width="420" height="10" rx="5" fill="#d9c192"/>
  <rect x="40" y="200" width="420" height="6" rx="3" fill="#d9c192"/>
  <rect x="60" y="230" width="120" height="80" rx="8" fill="#ffcf9e"/>
  <rect x="190" y="230" width="120" height="80" rx="8" fill="#ffd76e"/>
  <rect x="320" y="230" width="120" height="80" rx="8" fill="#c9b389"/>
  <circle cx="310" cy="210" r="22" fill="#d9a06b" opacity="0.6"/>
  <rect x="580" y="300" width="220" height="14" rx="7" fill="#b3885a"/>
  <rect x="596" y="314" width="188" height="8" rx="4" fill="#d9a06b"/>
  <rect x="880" y="300" width="220" height="14" rx="7" fill="#b3885a"/>
  <rect x="896" y="314" width="188" height="8" rx="4" fill="#d9a06b"/>
  <rect x="560" y="120" width="260" height="150" rx="10" fill="#cfe6f5"/>
  <rect x="60" y="90" width="200" height="60" rx="8" fill="#6a51c4"/>
  <text x="160" y="128" text-anchor="middle" font-size="28" fill="#fff" font-weight="800" font-family="sans-serif">MENU</text>`,
{ floor: 470 });

const SC_DINER = () => svgScene('diner', '#ffe9ec', '#ffd9df',
`<defs>${scScrim()}</defs>
  <rect y="470" width="1200" height="230" fill="#e8d5cf"/>
  <path d="M0 470 l60 -34 l60 34 l60 -34 l60 34 l60 -34 l60 34 l60 -34 l60 34 l60 -34 l60 34 l60 -34 l60 34 l60 -34 l60 34 l60 -34 l60 34 l60 -34 l60 34 l60 -34 l60 34" stroke="#b34a5e" stroke-width="10" fill="none" opacity="0.5"/>
  <rect x="60" y="120" width="260" height="120" rx="14" fill="#ff7f9e"/>
  <rect x="120" y="230" width="140" height="80" rx="10" fill="#f2a8ba"/>
  <circle cx="780" cy="230" r="70" fill="#6a51c4"/>
  <circle cx="780" cy="230" r="50" fill="#2b2440"/>
  <rect x="540" y="320" width="200" height="14" rx="7" fill="#b3885a"/>
  <rect x="556" y="334" width="168" height="8" rx="4" fill="#d9a06b"/>
  <rect x="880" y="320" width="200" height="14" rx="7" fill="#b3885a"/>
  <rect x="896" y="334" width="168" height="8" rx="4" fill="#d9a06b"/>
  <rect x="500" y="120" width="120" height="160" rx="10" fill="#cfe6f5"/>
  <text x="560" y="150" text-anchor="middle" font-size="26" fill="#2b2440" font-weight="800" font-family="sans-serif">♪</text>
  <rect x="60" y="60" width="160" height="40" rx="8" fill="#ffcf9e"/>
  <text x="140" y="88" text-anchor="middle" font-size="22" fill="#7a4b1f" font-weight="800" font-family="sans-serif">OPEN</text>`,
{ floor: 470 });

const SC_KITCHEN = () => svgScene('kitchen', '#fdf1e3', '#f7e2cc',
`<defs>${scScrim()}</defs>
  <rect y="470" width="1200" height="230" fill="#e6d3b0"/>
  <rect x="60" y="200" width="520" height="270" rx="14" fill="#e8cfab"/>
  <rect x="60" y="190" width="520" height="12" rx="6" fill="#c9a06b"/>
  <rect x="110" y="250" width="150" height="220" rx="8" fill="#d9e9f7"/>
  <rect x="130" y="265" width="110" height="40" rx="6" fill="#aed0e8"/>
  <rect x="130" y="315" width="110" height="40" rx="6" fill="#aed0e8"/>
  <rect x="110" y="250" width="150" height="8" rx="4" fill="#c9b389"/>
  <circle cx="330" cy="250" r="34" fill="#ffd76e"/>
  <rect x="300" y="280" width="60" height="14" rx="6" fill="#d9a06b"/>
  <rect x="700" y="260" width="200" height="14" rx="7" fill="#b3885a"/>
  <rect x="716" y="274" width="168" height="8" rx="4" fill="#d9a06b"/>
  <rect x="950" y="260" width="200" height="14" rx="7" fill="#b3885a"/>
  <rect x="966" y="274" width="168" height="8" rx="4" fill="#d9a06b"/>
  <rect x="640" y="120" width="280" height="130" rx="10" fill="#cfe6f5"/>
  <path d="M640 210 q70 -34 140 0" stroke="#fff" stroke-width="6" fill="none" opacity="0.9"/>
  <rect x="80" y="130" width="60" height="8" rx="4" fill="#c9a06b"/>`,
{ floor: 470 });

const SC_LIBRARY = () => svgScene('library', '#e7e2d6', '#d9d2c2',
`<defs>${scScrim()}</defs>
  <rect y="470" width="1200" height="230" fill="#cbbf9e"/>
  <rect x="60" y="90" width="200" height="380" rx="10" fill="#a4865a"/>
  <rect x="76" y="106" width="168" height="60" rx="6" fill="#7a5f3c"/>
  <rect x="76" y="182" width="168" height="60" rx="6" fill="#7a5f3c"/>
  <rect x="76" y="258" width="168" height="60" rx="6" fill="#7a5f3c"/>
  <rect x="76" y="334" width="168" height="60" rx="6" fill="#7a5f3c"/>
  <rect x="940" y="90" width="200" height="380" rx="10" fill="#a4865a"/>
  <rect x="956" y="106" width="168" height="60" rx="6" fill="#7a5f3c"/>
  <rect x="956" y="182" width="168" height="60" rx="6" fill="#7a5f3c"/>
  <rect x="956" y="258" width="168" height="60" rx="6" fill="#7a5f3c"/>
  <rect x="956" y="334" width="168" height="60" rx="6" fill="#7a5f3c"/>
  ${Array.from({ length: 8 }).map((_, i) => `<rect x="${84 + (i % 4) * 40}" y="${110 + Math.floor(i / 4) * 76}" width="26" height="48" rx="4" fill="${['#e27d8a', '#5fa8d3', '#e2a75f', '#7fbf7f', '#9d8fe8', '#d98ab0', '#6fc3b4', '#c9b34a'][i]}"/>`).join('')}
  <rect x="520" y="320" width="200" height="14" rx="7" fill="#b3885a"/>
  <rect x="536" y="334" width="168" height="8" rx="4" fill="#d9a06b"/>
  <circle cx="600" cy="260" r="40" fill="#ffd76e" opacity="0.4"/>
  <circle cx="600" cy="260" r="26" fill="#fff8d6"/>
  <rect x="585" y="248" width="30" height="24" rx="4" fill="#a4865a"/>
  <circle cx="600" cy="248" r="14" fill="#ffcf6e"/>`,
{ floor: 470 });

const SC_OFFICE = () => svgScene('office', '#e8f1fb', '#d5e4f4',
`<defs>${scScrim()}</defs>
  <rect y="470" width="1200" height="230" fill="#d4c9b4"/>
  <rect x="60" y="100" width="360" height="240" rx="12" fill="#bce3ff"/>
  <rect x="70" y="300" width="120" height="40" rx="6" fill="#8fb7d8"/>
  <rect x="200" y="300" width="120" height="40" rx="6" fill="#8fb7d8"/>
  <rect x="330" y="300" width="90" height="40" rx="6" fill="#8fb7d8"/>
  <rect x="80" y="120" width="80" height="60" rx="6" fill="#ffffff" opacity="0.9"/>
  <rect x="700" y="250" width="380" height="16" rx="8" fill="#9a7b4f"/>
  <rect x="720" y="266" width="140" height="8" rx="4" fill="#c9a06b"/>
  <rect x="880" y="266" width="180" height="8" rx="4" fill="#c9a06b"/>
  <rect x="640" y="140" width="80" height="120" rx="10" fill="#e27d8a"/>
  <rect x="640" y="170" width="80" height="8" rx="4" fill="#ffb3bf"/>
  <rect x="870" y="120" width="70" height="90" rx="8" fill="#7fbf7f"/>
  <rect x="930" y="100" width="130" height="200" rx="12" fill="#cbbfae"/>
  <rect x="940" y="110" width="110" height="70" rx="6" fill="#5b7fa6"/>
  <rect x="640" y="300" width="240" height="10" rx="5" fill="#b3885a"/>
  <rect x="640" y="310" width="240" height="6" rx="3" fill="#d9a06b"/>
  <circle cx="520" cy="180" r="50" fill="#7fbf7f"/>
  <circle cx="520" cy="160" r="22" fill="#5fa05f"/>`,
{ floor: 470 });

const SC_STREET = () => svgScene('street', '#bfe3ff', '#8fd0ff',
`<defs>${scScrim()}</defs>
  <circle cx="1050" cy="120" r="60" fill="#ffd76e"/>
  <rect x="150" y="180" width="120" height="290" rx="8" fill="#e0a9c0"/>
  <rect x="160" y="120" width="110" height="80" rx="8" fill="#f2c2d4"/>
  <rect x="420" y="150" width="120" height="320" rx="8" fill="#c9b389"/>
  <rect x="760" y="170" width="130" height="300" rx="8" fill="#b8d8c0"/>
  <rect x="770" y="110" width="120" height="80" rx="8" fill="#d4e8da"/>
  <rect y="470" width="1200" height="230" fill="#c9c4b8"/>
  <rect y="520" width="1200" height="180" fill="#b0aba0"/>
  <rect x="80" y="470" width="1200" height="4" fill="#fff" opacity="0.6"/>
  <rect x="200" y="390" width="16" height="80" rx="6" fill="#7a5f3c"/>
  <circle cx="208" cy="372" r="40" fill="#6fbf6f"/>
  <circle cx="222" cy="362" r="26" fill="#85cf85"/>
  <rect x="560" y="410" width="60" height="60" rx="8" fill="#b34a5e"/>
  <rect x="566" y="420" width="14" height="14" rx="3" fill="#fff"/>
  <rect x="586" y="420" width="14" height="14" rx="3" fill="#fff"/>
  <rect x="566" y="440" width="14" height="14" rx="3" fill="#fff"/>
  <rect x="586" y="440" width="14" height="14" rx="3" fill="#fff"/>
  <rect x="556" y="470" width="68" height="10" rx="5" fill="#8a3a4a"/>
  <path d="M300 300 q60 -40 120 0 q60 -40 120 0" stroke="#fff" stroke-width="8" fill="none" opacity="0.8"/>
  <path d="M500 240 q60 -36 120 0" stroke="#fff" stroke-width="8" fill="none" opacity="0.7"/>`,
{ floor: 470 });

const SC_ROOFTOP = () => svgScene('rooftop', '#ffe3b8', '#ffc98f',
`<defs>${scScrim()}</defs>
  <circle cx="180" cy="110" r="44" fill="#ffefc2"/>
  ${Array.from({ length: 5 }).map((_, i) => `<g>
    <rect x="${80 + i * 220}" y="${260 + (i % 2) * 40}" width="130" height="${440 - (i % 2) * 40 - 260}" fill="#5b6a8f"/>
    ${Array.from({ length: 4 }).map((_, j) => `<rect x="${90 + i * 220 + j * 26}" y="${278 + (i % 2) * 40}" width="14" height="20" fill="#ffd76e" opacity="0.8"/>`).join('')}
  </g>`).join('')}
  <rect y="470" width="1200" height="230" fill="#c9a06b"/>
  <rect y="462" width="1200" height="8" fill="#a4865a"/>
  <rect x="560" y="200" width="80" height="270" rx="8" fill="#b8ad9a"/>
  <rect x="590" y="140" width="20" height="70" rx="6" fill="#8a95b8"/>
  <rect x="60" y="330" width="14" height="140" rx="6" fill="#7a5f3c"/>
  <rect x="60" y="470" width="120" height="10" rx="5" fill="#7a5f3c"/>
  <rect x="56" y="320" width="6" height="16" rx="3" fill="#7a5f3c"/>
  ${Array.from({ length: 7 }).map((_, i) => `<path d="M${90 + i * 150} 250 q75 -44 150 0" stroke="#ffd76e" stroke-width="5" fill="none"/>`).join('')}
  <circle cx="600" cy="300" r="10" fill="#fff" opacity="0.7"/>
  <circle cx="300" cy="200" r="8" fill="#fff" opacity="0.6"/>`,
{ floor: 470 });

const SC_BUS = () => svgScene('bus', '#dcecf9', '#c6deef',
`<defs>${scScrim()}</defs>
  <rect y="470" width="1200" height="230" fill="#cfc4b2"/>
  <rect y="110" width="1200" height="150" fill="#8fb0c8"/>
  <rect y="470" width="1200" height="4" fill="#a9a297"/>
  <rect x="40" y="180" width="200" height="120" rx="10" fill="#bfe3ff"/>
  <path d="M40 240 q50 -24 100 0 q50 -24 100 0" stroke="#fff" stroke-width="6" fill="none" opacity="0.8"/>
  <rect x="860" y="180" width="200" height="120" rx="10" fill="#bfe3ff"/>
  <path d="M860 240 q50 -24 100 0 q50 -24 100 0" stroke="#fff" stroke-width="6" fill="none" opacity="0.8"/>
  <rect x="240" y="300" width="140" height="16" rx="8" fill="#7f7f8f"/>
  <rect x="252" y="316" width="116" height="8" rx="4" fill="#9a9aa8"/>
  <rect x="820" y="300" width="140" height="16" rx="8" fill="#7f7f8f"/>
  <rect x="832" y="316" width="116" height="8" rx="4" fill="#9a9aa8"/>
  <rect y="380" width="1200" height="90" fill="#b34a5e"/>
  <rect y="380" width="1200" height="8" fill="#8a3a4a"/>
  <rect x="120" y="430" width="10" height="40" rx="5" fill="#8a3a4a"/>
  <rect x="540" y="240" width="120" height="140" rx="12" fill="#ffd76e"/>
  <text x="600" y="360" text-anchor="middle" font-size="34" fill="#a06a00" font-weight="800" font-family="sans-serif">12</text>
  <rect x="60" y="120" width="30" height="26" rx="6" fill="#8fb0c8"/>
  <rect x="100" y="120" width="30" height="26" rx="6" fill="#8fb0c8"/>`,
{ floor: 380 });

const SC_GAMING = () => svgScene('gaming', '#241c4d', '#171136',
`<defs>${scScrim()}</defs>
  <rect y="470" width="1200" height="230" fill="#2b2357"/>
  <rect y="462" width="1200" height="8" fill="#3a3068"/>
  <rect x="120" y="110" width="540" height="300" rx="18" fill="#0d0a22"/>
  <rect x="140" y="130" width="500" height="260" rx="12" fill="#6a5ae0"/>
  <path d="M400 380 l80 -40 l-80 -40" stroke="#0d0a22" stroke-width="26" fill="none"/>
  <circle cx="320" cy="230" r="46" fill="#ff6b8a" opacity="0.6"/>
  <rect x="720" y="300" width="220" height="60" rx="26" fill="#8a6fe8"/>
  <rect x="745" y="322" width="46" height="16" rx="8" fill="#0d0a22"/>
  <rect x="810" y="322" width="46" height="16" rx="8" fill="#0d0a22"/>
  <rect x="868" y="322" width="20" height="16" rx="8" fill="#0d0a22"/>
  <rect x="740" y="380" width="160" height="90" rx="10" fill="#3a3068"/>
  <rect x="748" y="388" width="60" height="70" rx="6" fill="#ffd76e" opacity="0.7"/>
  <rect x="816" y="388" width="60" height="70" rx="6" fill="#34d1bf" opacity="0.7"/>
  <path d="M60 200 h140 M880 470 h60 M60 470 h200" stroke="#ff6b8a" stroke-width="5" opacity="0.8"/>
  <path d="M60 240 h90 M1040 300 h100" stroke="#34d1bf" stroke-width="5" opacity="0.8"/>
  <rect x="60" y="120" width="130" height="180" rx="8" fill="#1c1538"/>
  <rect x="76" y="136" width="98" height="60" rx="6" fill="#c9b34a"/>
  <rect x="76" y="210" width="98" height="60" rx="6" fill="#e27d8a"/>
  <rect x="96" y="120" width="20" height="8" rx="4" fill="#ff6b8a"/>`,
{ floor: 470 });

const SC_DMV = () => svgScene('dmv', '#cfe4f7', '#b7d3ec',
`<defs>${scScrim()}</defs>
  <rect y="470" width="1200" height="230" fill="#9aa4b5"/>
  <rect x="900" y="150" width="220" height="320" rx="10" fill="#b8ad9a"/>
  <rect x="900" y="140" width="220" height="12" rx="6" fill="#8a95a8"/>
  <rect x="930" y="180" width="160" height="100" rx="6" fill="#5b7fa6"/>
  <text x="1010" y="260" text-anchor="middle" font-size="20" fill="#fff" font-weight="800" font-family="sans-serif">DMV</text>
  <rect x="60" y="330" width="90" height="140" rx="16" fill="#e27d8a"/>
  <rect x="70" y="360" width="70" height="40" rx="8" fill="#bce3ff"/>
  <rect x="88" y="400" width="34" height="70" rx="6" fill="#8a3a4a"/>
  <rect x="76" y="360" width="12" height="40" rx="6" fill="#ffd76e"/>
  <rect x="128" y="360" width="12" height="40" rx="6" fill="#ffd76e"/>
  <rect x="100" y="400" width="14" height="70" rx="6" fill="#8a3a4a"/>
  <rect x="560" y="380" width="110" height="90" rx="14" fill="#5fa8d3"/>
  <rect x="568" y="396" width="40" height="30" rx="6" fill="#bfe3ff"/>
  <rect x="574" y="452" width="12" height="18" rx="4" fill="#3a456e"/>
  <rect x="586" y="452" width="12" height="18" rx="4" fill="#3a456e"/>
  <rect x="220" y="470" width="760" height="8" fill="#fff" opacity="0.5"/>
  <rect x="300" y="470" width="1200" height="4" fill="#8a95a8"/>`,
{ floor: 470 });

const SC_WORKSHOP = () => svgScene('shop', '#f2e8d8', '#e6d9c2',
`<defs>${scScrim()}</defs>
  <rect y="470" width="1200" height="230" fill="#c9b389"/>
  <rect y="462" width="1200" height="8" fill="#a4865a"/>
  ${Array.from({ length: 4 }).map((_, i) => `<g>
    <rect x="${60 + i * 120}" y="70" width="110" height="300" rx="8" fill="#9a7b4f"/>
    <rect x="${72 + i * 120}" y="88" width="86" height="60" rx="6" fill="#7a5f3c"/>
    <rect x="${72 + i * 120}" y="162" width="86" height="60" rx="6" fill="#7a5f3c"/>
    <rect x="${72 + i * 120}" y="236" width="86" height="60" rx="6" fill="#7a5f3c"/>
  </g>`).join('')}
  <rect x="620" y="300" width="460" height="20" rx="10" fill="#8a5a3a"/>
  <rect x="636" y="320" width="428" height="12" rx="6" fill="#a47a4f"/>
  <rect x="620" y="270" width="34" height="34" rx="8" fill="#5b5b6e"/>
  <rect x="660" y="260" width="24" height="90" rx="6" fill="#c9a06b"/>
  <path d="M672 260 l-14 90 l28 0 Z" fill="#6a51c4"/>
  <rect x="760" y="260" width="24" height="90" rx="6" fill="#c9a06b"/>
  <path d="M772 260 l-14 90 l28 0 Z" fill="#e27d8a"/>
  <rect x="840" y="320" width="120" height="160" rx="8" fill="#b34a5e"/>
  <rect x="852" y="336" width="96" height="120" rx="6" fill="#8a3a4a"/>
  <path d="M520 470 l60 -34 l60 34 M520 470 l60 -34 l60 34" stroke="#b3860a" stroke-width="16" fill="none" opacity="0.6"/>
  <rect x="40" y="150" width="150" height="90" rx="10" fill="#ffd76e"/>
  <text x="115" y="208" text-anchor="middle" font-size="22" fill="#7a4b1f" font-weight="800" font-family="sans-serif">SAFETY</text>`,
{ floor: 470 });

const SC_PHONE = () => svgScene('phone', '#efe9ff', '#ddd2f9',
`<defs>${scScrim()}</defs>
  <rect x="470" y="120" width="260" height="470" rx="36" fill="#2b2440"/>
  <rect x="486" y="138" width="228" height="434" rx="26" fill="#ffffff"/>
  <rect x="530" y="150" width="140" height="18" rx="9" fill="#e2dcf4"/>
  <rect x="506" y="180" width="188" height="20" rx="10" fill="#ece8f7"/>
  <rect x="506" y="212" width="188" height="20" rx="10" fill="#ece8f7"/>
  <rect x="506" y="244" width="150" height="20" rx="10" fill="#7c5cff"/>
  <rect x="506" y="290" width="188" height="20" rx="10" fill="#ece8f7"/>
  <rect x="506" y="322" width="160" height="20" rx="10" fill="#e9f7f3"/>
  <rect x="506" y="354" width="188" height="20" rx="10" fill="#ece8f7"/>
  <rect x="506" y="400" width="120" height="20" rx="10" fill="#ffe9ec"/>
  <rect x="506" y="432" width="188" height="20" rx="10" fill="#ece8f7"/>
  <rect x="506" y="470" width="100" height="20" rx="10" fill="#34d1bf" opacity="0.6"/>
  <circle cx="560" cy="520" r="22" fill="#e27d8a"/>
  <circle cx="650" cy="520" r="22" fill="#5fa8d3"/>
  <circle cx="600" cy="540" r="26" fill="#9d8fe8"/>
  <path d="M120 300 q60 -40 120 0" stroke="#fff" stroke-width="8" fill="none" opacity="0.9"/>
  <path d="M900 200 q60 -40 120 0" stroke="#fff" stroke-width="8" fill="none" opacity="0.9"/>
  <path d="M960 320 q60 -40 120 0" stroke="#fff" stroke-width="8" fill="none" opacity="0.9"/>
  <circle cx="140" cy="180" r="34" fill="#ffd76e"/>
  <circle cx="360" cy="400" r="6" fill="#b3a0e8"/>
  <circle cx="920" cy="120" r="6" fill="#b3a0e8"/>`,
{ floor: null });

const SC_TRAVEL = () => svgScene('travel', '#bfe8ff', '#92d6ff',
`<defs>${scScrim()}</defs>
  <circle cx="160" cy="120" r="52" fill="#ffd76e"/>
  <path d="M300 180 q70 -44 140 0 q70 -44 140 0" stroke="#fff" stroke-width="8" fill="none" opacity="0.85"/>
  <path d="M600 220 q70 -44 140 0 q70 -44 140 0" stroke="#fff" stroke-width="8" fill="none" opacity="0.8"/>
  <rect y="470" width="1200" height="230" fill="#e6cba2"/>
  <rect x="70" y="300" width="360" height="16" rx="8" fill="#9a7b4f"/>
  <rect x="88" y="316" width="324" height="10" rx="5" fill="#c9a06b"/>
  <rect x="560" y="240" width="120" height="150" rx="16" fill="#8a5a3a"/>
  <rect x="576" y="260" width="88" height="90" rx="10" fill="#e0a060"/>
  <rect x="600" y="390" width="40" height="30" rx="6" fill="#8a5a3a"/>
  <rect x="760" y="280" width="180" height="120" rx="14" fill="#e27d8a"/>
  <rect x="776" y="300" width="148" height="90" rx="10" fill="#ff9fb0"/>
  <rect x="776" y="312" width="148" height="8" rx="4" fill="#ffd0d8"/>
  <rect x="700" y="300" width="30" height="16" rx="8" fill="#d9a06b"/>
  <rect x="700" y="330" width="30" height="16" rx="8" fill="#d9a06b"/>
  <rect x="700" y="360" width="30" height="16" rx="8" fill="#d9a06b"/>
  <rect x="60" y="400" width="200" height="40" rx="8" fill="#ffffff" opacity="0.9"/>
  <rect x="76" y="410" width="120" height="8" rx="4" fill="#c9b389"/>
  <rect x="76" y="424" width="160" height="8" rx="4" fill="#e2dcf4"/>
  <path d="M940 380 q60 -40 120 0" stroke="#fff" stroke-width="8" fill="none" opacity="0.8"/>`,
{ floor: 470 });

const SC_MOVIE = () => svgScene('movie', '#1d1733', '#120d24',
`<defs>${scScrim()}</defs>
  <rect x="180" y="110" width="840" height="360" rx="20" fill="#0d0a22"/>
  <rect x="210" y="140" width="780" height="300" rx="14" fill="#6a5ae0"/>
  <circle cx="380" cy="260" r="60" fill="#ffd76e" opacity="0.8"/>
  <rect x="300" y="330" width="120" height="70" rx="8" fill="#c9b389"/>
  <path d="M460 320 q60 -40 120 0 q60 -40 120 0" stroke="#fff" stroke-width="8" fill="none" opacity="0.7"/>
  <rect x="420" y="430" width="360" height="40" rx="8" fill="#34d1bf" opacity="0.7"/>
  <rect y="470" width="1200" height="230" fill="#8a3a4a"/>
  <rect y="462" width="1200" height="8" fill="#6b2b38"/>
  ${Array.from({ length: 5 }).map((_, i) => `<g>
    <rect x="${120 + i * 210}" y="330" width="170" height="14" rx="7" fill="#e27d8a"/>
    <rect x="${128 + i * 210}" y="344" width="154" height="8" rx="4" fill="#a3495c"/>
  </g>`).join('')}
  <rect x="80" y="150" width="90" height="70" rx="8" fill="#ff6b8a"/>
  <text x="125" y="198" text-anchor="middle" font-size="18" fill="#fff" font-weight="800" font-family="sans-serif">EXIT</text>
  <path d="M80 620 h80 v30 h-80 Z" fill="#0d0a22"/>`,
{ floor: 470 });

const SC_APARTMENT = () => svgScene('apt', '#dce8f5', '#c6d8ec',
`<defs>${scScrim()}</defs>
  <rect y="470" width="1200" height="230" fill="#e0cfae"/>
  <rect x="60" y="100" width="380" height="250" rx="12" fill="#aecfe8"/>
  <rect x="70" y="310" width="130" height="40" rx="6" fill="#7f9fb8"/>
  <rect x="210" y="310" width="130" height="40" rx="6" fill="#7f9fb8"/>
  <rect x="80" y="120" width="80" height="60" rx="6" fill="#ffffff" opacity="0.9"/>
  <circle cx="1000" cy="150" r="50" fill="#ffd76e" opacity="0.7"/>
  <rect x="760" y="180" width="140" height="140" rx="8" fill="#c9a06b"/>
  <rect x="772" y="192" width="116" height="116" rx="6" fill="#d9b98c"/>
  <rect x="800" y="220" width="60" height="20" rx="6" fill="#b3860a"/>
  <rect x="720" y="360" width="180" height="14" rx="7" fill="#b3885a"/>
  <rect x="736" y="374" width="148" height="8" rx="4" fill="#d9a06b"/>
  <rect x="560" y="300" width="120" height="90" rx="8" fill="#c9b389"/>
  <rect x="572" y="312" width="96" height="30" rx="6" fill="#e2d6b8"/>
  <rect x="300" y="420" width="160" height="14" rx="7" fill="#9a7b4f"/>
  <rect x="314" y="434" width="132" height="8" rx="4" fill="#c9a06b"/>
  <circle cx="420" cy="390" r="30" fill="#7fbf7f"/>
  <circle cx="430" cy="382" r="16" fill="#9dd09d"/>
  <rect x="120" y="380" width="20" height="90" rx="6" fill="#5b5b6e"/>
  <path d="M120 380 l40 -16 l40 16" stroke="#ffd76e" stroke-width="7" fill="none"/>`,
{ floor: 470 });

const SC_COUNSELOR = () => svgScene('counselor', '#f2eee4', '#e6dfcf',
`<defs>${scScrim()}</defs>
  <rect y="470" width="1200" height="230" fill="#d9cfae"/>
  <rect x="80" y="200" width="240" height="14" rx="7" fill="#b3885a"/>
  <rect x="96" y="214" width="208" height="8" rx="4" fill="#d9a06b"/>
  <rect x="540" y="200" width="240" height="14" rx="7" fill="#b3885a"/>
  <rect x="556" y="214" width="208" height="8" rx="4" fill="#d9a06b"/>
  <rect x="80" y="140" width="240" height="10" rx="5" fill="#8a95a8"/>
  <rect x="540" y="140" width="240" height="10" rx="5" fill="#8a95a8"/>
  <rect x="920" y="120" width="200" height="220" rx="12" fill="#d4c9b4"/>
  <rect x="932" y="132" width="176" height="70" rx="6" fill="#fff"/>
  <rect x="932" y="214" width="176" height="50" rx="6" fill="#5b7fa6"/>
  <rect x="932" y="276" width="176" height="50" rx="6" fill="#fff"/>
  <circle cx="360" cy="330" r="40" fill="#7fbf7f"/>
  <circle cx="350" cy="318" r="18" fill="#9dd09d"/>
  <rect x="640" y="120" width="60" height="90" rx="8" fill="#c9b389"/>
  <rect x="740" y="150" width="70" height="120" rx="8" fill="#e2d6b8"/>
  <circle cx="600" cy="190" r="60" fill="#ffd76e" opacity="0.5"/>
  <path d="M420 380 q60 -40 120 0 q60 -40 120 0" stroke="#c9b389" stroke-width="8" fill="none" opacity="0.8"/>`,
{ floor: 470 });

/* ---------- scene lookup ---------- */

const SCENE_MATCHERS = [
  [/living room|family room|couch/, 'living'],
  [/gaming|game den|console|arcade/, 'gaming'],
  [/bed,|10pm|1am|2:17|at night|night|evening|slump|exhaust/, 'bednight'],
  [/your bedroom|your room|bedroom/, 'bedday'],
  [/exam|score sheet|proctor|test panic|certification retake/, 'exam'],
  [/classroom|after class|class/, 'class'],
  [/cafeteria|coffee cart/, 'cafe'],
  [/diner|diner booth/, 'diner'],
  [/kitchen|dinner table|breakfast|fridge|laundry/, 'kitchen'],
  [/library/, 'library'],
  [/counselor/, 'counselor'],
  [/office|waiting room|foreman/, 'office'],
  [/sidewalk|street|front door|mailbox/, 'street'],
  [/rooftop/, 'rooftop'],
  [/bus/, 'bus'],
  [/dmv|parked car|windshield|parking/, 'dmv'],
  [/trade school|job site|crew meeting|break room|workshop/, 'shop'],
  [/apartment|lease|landlord|rent|roommate|moving|box/, 'apt'],
  [/packing|desk|travel|trip plan/, 'travel'],
  [/movie|movie night/, 'movie'],
  [/text|message|group chat|phone|online|checkout|email|payment|deposit|screen|feed/, 'phone'],
  [/hallway|hall/, 'hall'],
  [/back of the bus/, 'bus']
];

const BOSS_SCENES = {
  s1boss: 'movie', s2boss: 'living', s3boss: 'diner', s4boss: 'living',
  s5boss: 'travel', s6boss: 'counselor', s7boss1: 'exam', s7boss2: 'office',
  s8boss1: 'apt', s8boss2: 'phone'
};

function matchScene(text) {
  const t = String(text || '').toLowerCase();
  for (const [re, key] of SCENE_MATCHERS) {
    if (re.test(t)) return key;
  }
  return null;
}

function renderScene(key) {
  const fn = {
    living: SC_LIVING_ROOM, bedday: SC_BEDROOM_DAY, bednight: SC_BEDROOM_NIGHT,
    hall: SC_HALLWAY, class: SC_CLASSROOM, exam: SC_EXAM, cafe: SC_CAFETERIA,
    diner: SC_DINER, kitchen: SC_KITCHEN, library: SC_LIBRARY, office: SC_OFFICE,
    street: SC_STREET, rooftop: SC_ROOFTOP, bus: SC_BUS, gaming: SC_GAMING,
    dmv: SC_DMV, shop: SC_WORKSHOP, phone: SC_PHONE, travel: SC_TRAVEL,
    movie: SC_MOVIE, apt: SC_APARTMENT, counselor: SC_COUNSELOR
  }[key];
  return fn ? fn() : SC_LIVING_ROOM();
}
