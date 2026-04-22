# IMPS Studio

*Software, games, and everything in between.*

## About the studio

IMPS Studio is a small, independent software and games studio based in Brasil, working remotely. We build end-to-end — games, apps, sites, tools — and take on a handful of projects a year. The person you talk to is the person writing the code.

## About this repo

Source for [imps.studio](https://imps.studio). A pre-rendered React app — the marketing site, work archive, and project case studies. Everything lives in `react-app/`.

## Stack

| Layer       | Tool                                                  |
| ----------- | ----------------------------------------------------- |
| Framework   | React 18                                              |
| Routing     | React Router 7                                        |
| Build       | Vite 6                                                |
| CSS         | Tailwind CSS 3 (PostCSS + Autoprefixer)               |
| Language    | JavaScript (JSX) — no TypeScript                      |
| Rendering   | Static pre-rendering via SSR at build time            |
| Hosting     | GitHub Pages                                          |

The build step renders every route to static HTML (`prerender.js`), then the client hydrates on load. No server required at runtime.

## Running locally

Requires Node 20 or newer. Anything older, we haven't tested.

```sh
cd react-app
npm install
```

Start the dev server:

```sh
npm run dev
```

Production build (compiles, SSR-renders all pages, outputs to `dist/`):

```sh
npm run build
```

Preview the production build locally:

```sh
npm run preview
```

There are no lint, typecheck, or test scripts configured yet.

## Project structure

```
react-app/
  src/
    components/     Page sections and shared UI (Nav, Footer, Work, ProjectDetail, etc.)
    data/           Project records and constants (projects.js, constants.js)
    hooks/          Custom React hooks (useDocumentTitle)
    App.jsx         Homepage composition
    AppRouter.jsx   Route definitions and scroll-to-top behavior
    NotFound.jsx    Branded 404 page
    entry-client.jsx        Client-side hydration
    entry-client-404.jsx    Client hydration for the standalone 404 page
    entry-server.jsx        SSR render functions used by prerender.js
    index.css       Global styles, animations, Tailwind directives
  public/           Static assets (SVGs, favicons)
  prerender.js      Build-time static rendering script
  index.html        Main HTML shell
  404.html          Standalone 404 HTML shell (for GitHub Pages)
```

## Content authoring

### Where project data lives

All project data is in `react-app/src/data/projects.js`. Each project is a record in the `PROJECTS` array. Routes, the work archive, and homepage featured cards all read from this single array — there is no separate content directory or CMS.

### Project record shape

A full project record (see Ember for reference):

```js
{
  slug,           // URL path: /work/{slug}
  name,           // Display name
  year,           // Ship year (number)
  kind,           // 'Game' | 'App' | 'Web' | 'Tool'
  indexTagline,   // One-liner for the archive list
  stack,          // Tech summary, e.g. 'Godot 4 · GDScript'
  featured,       // Show on homepage (boolean)
  card,           // Homepage card styling: { bg, fg, border? }
  live,           // Still running/available (boolean)
  heroTitle,      // Template string — {br} for line breaks, {accent} for styled span
  titleAccent,    // Text inserted at {accent}
  tagline,        // HTML string
  meta,           // Array of { label, value } for the stats bar
  keyArt,         // { colors: [3 hex strings], title }
  overview,       // { eye, lede, body: string[] }
  screens,        // Array of { label, variant: 1–4, corner }
  challenge,      // { heading, body, points: string[] }
  solution,       // { heading, body, points: string[] }
  timeline,       // Array of { step, desc, status: 'done' | 'in-progress' }
  results,        // Array of { value, label, accentPart? }
  quote,          // { text, accent, attribution } or null
  sectionMeta,    // Section eyebrow overrides: { overview, screens, approach, timeline, results }
}
```

### Adding a new project

1. Add a record to the `PROJECTS` array in `projects.js`. For a project that doesn't have case-study content yet, use `createStub()` — it fills in placeholder text for every section.
2. Run the dev server. The route `/work/{slug}` appears automatically.
3. The work archive (`/work`) and homepage featured grid also update automatically — set `featured: true` and provide a `card` object to show it on the homepage.
4. Replace placeholder content with real copy when the case study is written. See the Ember entry for the full shape.

### Placeholder imagery

Screenshots and key art are not yet real — every placeholder is flagged with `KEY ART · PLACEHOLDER` or `screenshot · placeholder` in the rendered UI. Replace these with actual assets when they're ready.

## Design system

The visual system is owned separately. Fonts, color tokens, and spacing conventions are defined in `tailwind.config.js`.

- **Fonts:** Geist (UI and display), JetBrains Mono (eyebrows, code blocks, mono UI), Instrument Serif (serif accent — hero headlines only).
- **Signature color:** `#B83A3A` — a muted, mature red. Used sparingly. One or two touches per screen, never as a background fill outside the CTA.
- **Neutrals:** Cool ink scale from `#FFFFFF` down to `#0C0E12` (near-black).
- **Copy rules:** Sentence case everywhere. No emoji. Em dashes for asides.

## Deploy

The site deploys to **GitHub Pages** via GitHub Actions. The workflow (`.github/workflows/deploy.yml`) runs on every push to `main`:

1. Checks out the repo.
2. Installs dependencies (`npm ci` inside `react-app/`).
3. Builds (`npm run build`), which produces pre-rendered static HTML for every route.
4. Uploads `react-app/dist/` as a Pages artifact and deploys it.

The only environment variable is `VITE_BASE`, set to `/` in the workflow. No secrets or API keys are required.

The domain `imps.studio` points to GitHub Pages via DNS.

## Contributing

The team is small — 4 people. This is an internal project.

If you're on the team: open a PR against `main`, keep it focused, describe what changed and why. If you're not sure about something, ask before building.

External contributions are not currently accepted unless specifically invited.

Questions go to hello@imps.studio.

## License

*To be determined.*

---

&copy; 2026 · IMPS Studio · imps.studio
Software, games, and everything in between. Made with mischief.
