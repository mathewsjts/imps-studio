function createStub(slug, name, year, kind, colors, { indexTagline = '', stack = '', featured = false, card = null, live = true } = {}) {
  return {
    slug, name, year, kind, indexTagline, stack, featured, card, live,
    heroTitle: `${name}.{br}Case study {accent}.`,
    titleAccent: 'coming soon',
    tagline: 'Details for this project are <strong>being written</strong>. Check back soon.',
    meta: [
      { label: 'BUILD TIME', value: '\u2014' },
      { label: 'STACK', value: stack || '\u2014' },
      { label: 'PLATFORMS', value: kind },
      { label: 'TEAM', value: '\u2014' },
      { label: 'SHIPPED', value: String(year) },
    ],
    keyArt: { colors, title: name.toUpperCase() },
    overview: {
      eye: 'the brief',
      lede: 'Case study details coming soon.',
      body: ['This project is being documented. Full case study will be available shortly.'],
    },
    screens: [
      { label: 'SCREEN 1', variant: 1, corner: '01' },
      { label: 'SCREEN 2', variant: 2, corner: '02' },
      { label: 'SCREEN 3', variant: 3, corner: '03' },
      { label: 'SCREEN 4', variant: 4, corner: '04' },
    ],
    challenge: {
      heading: 'Coming soon.',
      body: 'Challenge details are being written.',
      points: ['Detail pending'],
    },
    solution: {
      heading: 'Coming soon.',
      body: 'Solution details are being written.',
      points: ['Detail pending'],
    },
    timeline: [
      { step: 'project timeline', desc: 'Timeline details coming soon.', status: 'in-progress' },
    ],
    results: [
      { value: '\u2014', label: 'Coming soon' },
      { value: '\u2014', label: 'Coming soon' },
      { value: '\u2014', label: 'Coming soon' },
      { value: '\u2014', label: 'Coming soon' },
    ],
    sectionMeta: {
      overview: 'WHAT WE MADE',
      screens: 'FROM THE BUILD',
      approach: 'HOW WE BUILT IT',
      timeline: 'PROJECT TIMELINE',
      results: 'BY THE NUMBERS',
    },
    quote: null,
  };
}

const PROJECTS = [
  // ── 2026 ──────────────────────────────────────────────
  createStub('vault', 'Vault', 2026, 'App', ['#181B21', '#282C34', '#3D434E'], {
    indexTagline: 'Personal finance dashboard',
    stack: 'Flutter \u00b7 Plaid',
  }),
  createStub('relay', 'Relay', 2026, 'App', ['#0C0E12', '#181B21', '#B83A3A'], {
    indexTagline: 'Real-time team messenger',
    stack: 'React Native \u00b7 WS',
  }),
  createStub('shard', 'Shard', 2026, 'Web', ['#282C34', '#3D434E', '#5B626F'], {
    indexTagline: 'Component library marketplace',
    stack: 'Next.js \u00b7 Turborepo',
  }),

  // ── 2025 ──────────────────────────────────────────────
  createStub('atlas', 'Atlas', 2025, 'Web', ['#0C0E12', '#282C34', '#5B626F'], {
    indexTagline: 'Interactive mapping platform',
    stack: 'Mapbox \u00b7 React',
  }),
  createStub('drift', 'Drift', 2025, 'Game', ['#1a2a3a', '#0C0E12', '#3D434E'], {
    indexTagline: 'Open-world sailing simulator',
    stack: 'Unreal 5 \u00b7 C++',
  }),
  createStub('prism', 'Prism', 2025, 'App', ['#282C34', '#181B21', '#B83A3A'], {
    indexTagline: 'Computational photo editor',
    stack: 'SwiftUI \u00b7 Core ML',
  }),
  createStub('wire', 'Wire', 2025, 'Tool', ['#0C0E12', '#181B21', '#282C34'], {
    indexTagline: 'API integration test suite',
    stack: 'Go \u00b7 gRPC',
  }),

  // ── 2024 ──────────────────────────────────────────────
  {
    slug: 'ember',
    name: 'Ember',
    year: 2024,
    kind: 'Game',
    indexTagline: 'Narrative fireplace game',
    stack: 'Godot 4 \u00b7 GDScript',
    featured: true,
    card: { bg: 'linear-gradient(135deg,#8B2A2A,#B83A3A)', fg: '#fff' },
    live: true,
    heroTitle: 'Ember.{br}A small fire, {accent}.',
    titleAccent: 'tended quietly',
    tagline: 'A <strong>played-in-one-sitting</strong> narrative game about keeping a fire lit through a long night. Built in Godot. Shipped on Steam.',
    meta: [
      { label: 'BUILD TIME', value: '6 months' },
      { label: 'ENGINE', value: 'Godot 4' },
      { label: 'PLATFORMS', value: 'Steam \u00b7 itch' },
      { label: 'TEAM', value: '2 people' },
      { label: 'SHIPPED', value: '2024' },
    ],
    keyArt: { colors: ['#8B2A2A', '#B83A3A', '#D96B3A'], title: 'EMBER' },
    overview: {
      eye: 'the brief',
      lede: 'A friend was building a short interactive short-story and wanted a prototype that felt alive without looking busy. We took it the rest of the way.',
      body: [
        'Ember is a thirty-minute narrative game about a traveler who stops at an abandoned cabin on the coldest night of the year. You keep the fire lit. You read the letters left behind. Morning comes, or it doesn\u2019t.',
        'The whole thing runs on <em>one mechanic</em> \u2014 feeding the fire \u2014 and a small library of handwritten letters. No menus. No tutorial. No combat. It ships in English and Portuguese.',
      ],
    },
    screens: [
      { label: 'THE HEARTH', variant: 1, corner: '01' },
      { label: 'LETTERS', variant: 2, corner: '02' },
      { label: 'MORNING', variant: 3, corner: '03' },
      { label: 'NIGHT', variant: 4, corner: '04' },
    ],
    challenge: {
      heading: 'Make a tiny loop feel lived-in.',
      body: 'A one-mechanic game lives or dies on texture. Feeding a fire is inert on paper \u2014 it needed enough tactile and emotional variety to carry thirty minutes without a single menu.',
      points: [
        'No HUD, no tutorial, no backtracking',
        'Reading should feel like a pause, not a chore',
        'Runs on low-spec hardware, Steam Deck included',
      ],
    },
    solution: {
      heading: 'Sound first. Then light. Then words.',
      body: 'We built the audio before the visuals \u2014 wind, hearth-crackle, and breath \u2014 so the fire had a voice before it had a sprite. Lighting and letter-discovery hang off that rhythm.',
      points: [
        'Custom 2D lighting shader in Godot',
        '23 hand-written letters, branchless',
        'Playable controller-first, keyboard-optional',
      ],
    },
    timeline: [
      { step: 'month 01 \u2014 prototype', desc: 'Fire mechanic in a gray box. One letter. Thirty minutes from first commit to first playable.', status: 'done' },
      { step: 'month 02 \u2014 voice', desc: 'Soundscape, wind layer, and the fire\u2019s breathing. Everything else hung off this.', status: 'done' },
      { step: 'months 03\u201304 \u2014 light & letters', desc: 'Shader work. Twenty-three letters drafted, cut to seventeen. Localization pass in Portuguese.', status: 'done' },
      { step: 'month 05 \u2014 polish', desc: 'Steam Deck verification, controller tuning, the small sound the match makes when you strike it.', status: 'done' },
      { step: 'month 06 \u2014 ship', desc: 'Store page, trailer, launch. Steam + itch.io on the same morning.', status: 'done' },
    ],
    results: [
      { value: '97%', accentPart: '97', label: 'Positive reviews on Steam' },
      { value: '12k', label: 'Wishlists at launch' },
      { value: '34 min', label: 'Median playtime' },
      { value: '6 langs', label: 'Community-translated, post-launch' },
    ],
    quote: {
      text: '\u201cWe needed a team that would treat a short game seriously. IMPS did.',
      accent: 'They shipped the version we\u2019d argued about, not the one we\u2019d settled for.\u201d',
      attribution: '\u2014 A. Rocha \u00b7 Writer & Director, Ember',
    },
    sectionMeta: {
      overview: 'WHAT WE MADE',
      screens: 'FROM THE BUILD',
      approach: 'HOW WE BUILT IT',
      timeline: 'SIX MONTHS, EVERY WEEK ACCOUNTED FOR',
      results: "NUMBERS, FOR WHAT THEY'RE WORTH",
    },
  },
  createStub('lumen', 'Lumen', 2024, 'App', ['#282C34', '#1a1d24', '#B83A3A'], {
    indexTagline: 'Ambient lighting controller',
    stack: 'SwiftUI \u00b7 BLE',
    featured: true,
    card: { bg: '#282C34', fg: '#B83A3A' },
  }),
  createStub('forge', 'Forge', 2024, 'Web', ['#0C0E12', '#181B21', '#282C34'], {
    indexTagline: 'Collaborative design system',
    stack: 'React \u00b7 WebSocket',
    featured: true,
    card: { bg: '#0C0E12', fg: '#fff', border: true },
  }),
  createStub('oddkey', 'Oddkey', 2024, 'Tool', ['#181B21', '#282C34', '#868D9B'], {
    indexTagline: 'Mechanical keyboard configurator',
    stack: 'Rust \u00b7 HID',
    featured: true,
    card: { bg: '#181B21', fg: '#868D9B', border: true },
  }),
  createStub('signal', 'Signal', 2024, 'Web', ['#0C0E12', '#282C34', '#B83A3A'], {
    indexTagline: 'Real-time analytics dashboard',
    stack: 'Vue \u00b7 D3',
  }),

  // ── 2023 ──────────────────────────────────────────────
  createStub('pip', 'Pip', 2023, 'Tool', ['#FAF0F0', '#E8C5C5', '#B83A3A'], {
    indexTagline: 'Discord moderation bot',
    stack: 'Node \u00b7 Discord API',
    featured: true,
    card: { bg: '#FAF0F0', fg: '#0C0E12' },
  }),
  createStub('folio', 'Folio', 2023, 'Web', ['#181B21', '#0C0E12', '#3D434E'], {
    indexTagline: 'Invoicing for freelancers',
    stack: 'SvelteKit \u00b7 Stripe',
  }),
  createStub('cinder', 'Cinder', 2023, 'Game', ['#8B2A2A', '#0C0E12', '#D96B3A'], {
    indexTagline: 'Co-op survival crafting',
    stack: 'Unreal \u00b7 C++',
    live: false,
  }),
  createStub('beacon', 'Beacon', 2023, 'App', ['#282C34', '#181B21', '#5B626F'], {
    indexTagline: 'Push-notification platform',
    stack: 'Kotlin \u00b7 Swift',
  }),

  // ── 2022 ──────────────────────────────────────────────
  createStub('slab', 'Slab', 2022, 'Web', ['#0C0E12', '#181B21', '#282C34'], {
    indexTagline: 'Headless CMS for small teams',
    stack: 'Next.js \u00b7 Postgres',
  }),
  createStub('rune', 'Rune', 2022, 'Game', ['#181B21', '#282C34', '#8B2A2A'], {
    indexTagline: 'Procedural roguelike',
    stack: 'Unity \u00b7 C#',
  }),
  createStub('cloak', 'Cloak', 2022, 'Tool', ['#0C0E12', '#181B21', '#3D434E'], {
    indexTagline: 'Privacy-first VPN client',
    stack: 'Go \u00b7 WireGuard',
    live: false,
  }),

  // ── 2021 ──────────────────────────────────────────────
  createStub('nest', 'Nest', 2021, 'App', ['#282C34', '#181B21', '#B83A3A'], {
    indexTagline: 'Smart-home dashboard',
    stack: 'React Native \u00b7 MQTT',
  }),
  createStub('grain', 'Grain', 2021, 'App', ['#FAF0F0', '#E8C5C5', '#D96B3A'], {
    indexTagline: 'Camera app with film filters',
    stack: 'Swift \u00b7 Metal',
    live: false,
  }),

  // ── 2020 (founding year) ──────────────────────────────
  createStub('pixel', 'Pixel', 2020, 'Web', ['#282C34', '#3D434E', '#5B626F'], {
    indexTagline: 'Portfolio builder for creatives',
    stack: 'React \u00b7 Node',
    live: false,
  }),
  createStub('flint', 'Flint', 2020, 'Tool', ['#0C0E12', '#181B21', '#282C34'], {
    indexTagline: 'Static site generator',
    stack: 'Node \u00b7 Markdown',
    live: false,
  }),
];

// Auto-assign prev/next navigation (circular)
PROJECTS.forEach((p, i) => {
  p.prev = PROJECTS[(i - 1 + PROJECTS.length) % PROJECTS.length].slug;
  p.next = PROJECTS[(i + 1) % PROJECTS.length].slug;
});

export default PROJECTS;

export const FOUNDING_YEAR = 2020;

export function getProject(slug) {
  return PROJECTS.find((p) => p.slug === slug) || null;
}

export function getCategory(kind) {
  const k = kind.toLowerCase();
  if (k === 'game') return 'Games';
  if (k === 'app' || k === 'ios') return 'Apps';
  if (k === 'web') return 'Web';
  return 'Tools';
}

export const liveCount = PROJECTS.filter((p) => p.live).length;
export const disciplineCount = new Set(PROJECTS.map((p) => getCategory(p.kind))).size;

export function getAdjacent(slug) {
  const project = getProject(slug);
  if (!project) return { prev: null, next: null };
  return {
    prev: project.prev ? getProject(project.prev) : null,
    next: project.next ? getProject(project.next) : null,
  };
}
