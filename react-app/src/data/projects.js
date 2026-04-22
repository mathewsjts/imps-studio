import { getCategory } from './constants.js';

const PROJECTS = [
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
  {
    slug: 'lumen',
    name: 'Lumen',
    year: 2024,
    kind: 'App',
    indexTagline: 'Ambient lighting controller',
    stack: 'SwiftUI \u00b7 BLE',
    featured: true,
    card: { bg: '#282C34', fg: '#B83A3A' },
    live: true,
    heroTitle: 'Lumen.{br}Case study {accent}.',
    titleAccent: 'coming soon',
    tagline: 'Details for this project are <strong>being written</strong>. Check back soon.',
    meta: [
      { label: 'BUILD TIME', value: '\u2014' },
      { label: 'STACK', value: 'SwiftUI \u00b7 BLE' },
      { label: 'PLATFORMS', value: 'App' },
      { label: 'TEAM', value: '\u2014' },
      { label: 'SHIPPED', value: '2024' },
    ],
    keyArt: { colors: ['#282C34', '#1a1d24', '#B83A3A'], title: 'LUMEN' },
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
  },
];

export default PROJECTS;

export function getProject(slug) {
  return PROJECTS.find((p) => p.slug === slug) || null;
}

export const liveCount = PROJECTS.filter((p) => p.live).length;
export const disciplineCount = new Set(PROJECTS.map((p) => getCategory(p.kind))).size;

export function getAdjacent(slug) {
  const index = PROJECTS.findIndex((p) => p.slug === slug);
  if (index === -1) return { prev: null, next: null };
  return {
    prev: PROJECTS[(index - 1 + PROJECTS.length) % PROJECTS.length],
    next: PROJECTS[(index + 1) % PROJECTS.length],
  };
}
