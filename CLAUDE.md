# GRM Infra — project guide for Claude

Marketing site for **GRM Infra Ltd** (utility-scale solar, battery storage, EPC).
Single-page React app, statically built and deployed to **Netlify**.

## Stack

- **React 18** + **React Router 6** (`BrowserRouter`, client-side routing)
- **Vite 5** build (`@vitejs/plugin-react`) — output to `dist/`
- **Three.js** (`useHeroScene.js`) for the animated tower-crane hero
- **d3-geo** + **topojson-client** + **world-atlas** for the Global Impact map
- Plain CSS (no preprocessor, no CSS-in-JS, no Tailwind)
- **No TypeScript, no tests, no linter, no formatter** configured

Node 18+ is required (Vite 5). The README says `nvm use 20`; there is no `.nvmrc`.

## Commands

```bash
npm install        # install deps
npm run dev        # Vite dev server (HMR) at http://localhost:5173
npm run build      # production build -> dist/
npm run preview    # serve the built dist/ locally to sanity-check
```

There is **no test or lint command** — "verifying a change" means `npm run build`
succeeds and the page looks/behaves right in `npm run dev`.

## Architecture

```
index.html              Vite entry; mounts #root, loads /src/main.jsx
src/
  main.jsx              Router: <Route> per page + ScrollManager + boot Loader
  index.css            Imports base.css then every per-page stylesheet
  pages/*.jsx          One component per route; holds the FULL page markup
  components/
    LegalLayout.jsx    Shared nav+footer+readable column for legal pages
    Loader.jsx         Video splash shown once on hard load (not on nav)
  hooks/
    usePageEffects.js  Scroll-reveal, counters, card tilt, projects filter,
                       AND legacy *.html -> SPA link rewriting (ROUTE_MAP)
    useHeroScene.js    Three.js hero scene
  styles/*.css         base.css (tokens/chrome) + one stylesheet per page
public/
  _redirects           Netlify SPA fallback: /*  /index.html  200
  brand/ projects/ certifications/   images
  *.mp4                hero / loader / section background videos (large!)
```

### Routes (`src/main.jsx`)

`/` Home · `/about` · `/solutions` · `/projects` · `/global-impact`
· `/privacy-policy` · `/cookie-policy` · `/terms-conditions` · `*` → Home (catch-all)

### How interactivity works

Each page renders its markup into a `ref`'d `<div>` and calls
`usePageEffects(ref)`. That hook wires, against the live DOM:

- `.reveal` elements → fade/slide in on scroll (also `.bar-row`)
- `[data-count]` (+ optional `data-decimals`) → animated number counters
- `.card-tilt` → mouse-follow 3D tilt
- `.filterbar .chip` + `.pcard[data-cat]` → the Projects category filter
- **legacy `*.html` anchors** (e.g. `href="about.html"`) → intercepted and
  turned into client-side `navigate()` via the `ROUTE_MAP` constant

So markup uses old-style `href="about.html#contact"` links on purpose — they are
rewritten at runtime. Don't "fix" them to `<Link to>` unless you also remove the
rewriting logic.

## ⚠️ Adding a page (the #1 footgun)

A new page must be wired in **four** places or it silently breaks. Use the
`/add-page` skill, which walks the full checklist:

1. `src/pages/NewPage.jsx` — component (copy nav+footer chrome from an existing
   page, or render legal-style content via `LegalLayout`)
2. `src/main.jsx` — `import` + a `<Route path="/new" element={<NewPage />} />`
3. `src/hooks/usePageEffects.js` — add `'new.html': '/new'` to `ROUTE_MAP`
4. `src/index.css` — `@import './styles/newPage.css'` (legal pages reuse
   `legal.css`, so skip this for those)
5. Add nav + footer links to the new route across the other pages

A PostToolUse hook (`.claude/hooks/check-routes.sh`) warns if a page in
`src/pages/` isn't imported + routed in `main.jsx`.

## CSS conventions (`/styling` skill)

- Design tokens (colors, radii, spacing, fonts) live in `:root` in
  `src/styles/base.css`. **Use the `--token` variables**, don't hardcode hex.
- One stylesheet per page, imported in `src/index.css`. Page-specific classes
  were renamed (e.g. per-page `page-hero` variants) to avoid cross-page
  collisions — keep new classes page-scoped.
- `.theme-light` remaps tokens for alternating black/white bands; it only
  changes colors, and force-neutralizes hardcoded `#34d399` green accents.
- Fonts are force-set to Avenir Next via a `* { ... !important }` rule in
  base.css. The `@import` of Geist/Instrument Serif from Google Fonts is legacy
  and currently overridden — don't rely on those families.

## Assets

- Static assets live in `public/` and are referenced with absolute paths
  (`/brand/grm-logo.jpeg`, `/projects/cesis.jpg`). `public/` is copied verbatim
  into `dist/`.
- Several `.mp4` videos are large (hero `background.mp4` ~9 MB, loader ~3 MB).
  Be mindful of bundle/page weight before adding more; prefer compressing.

## Deployment (Netlify) — `/deploy` skill

- Static build: `npm run build` → `dist/`. Netlify serves `dist/`.
- `public/_redirects` (`/* /index.html 200`) is what makes deep links like
  `/solutions` work as an SPA. **Never delete it.**
- No CI config in-repo; deploys are driven by Netlify (git-connected or CLI).

## Out of scope (confirmed 2026-06-09)

- **No Helm / Kubernetes / Docker.** This ships as a static site to Netlify;
  do not add container/infra manifests unless the user explicitly changes course.
- **No e2e framework yet.** If/when e2e is added, Playwright is the intended
  choice — but it is deliberately deferred for now.

## Conventions for changes

- Match the surrounding code: pages are large JSX literals with inline SVG and
  occasional inline `style={{}}` objects — that's the existing style, not a smell.
- Commit/push only when asked. Don't introduce TS/lint/test tooling without
  being asked.
