# GRM Infra

Marketing site for GRM Infrastructure — utility-scale solar, battery storage,
and lifting infrastructure. Built with React + Vite + React Router, with a
Three.js animated hero scene.

## Develop

```bash
nvm use 20      # Vite 5 requires Node 18+
npm install
npm run dev
```

## Build

```bash
npm run build   # outputs to dist/
npm run preview # serve the production build locally
```

## Structure

```
src/
  main.jsx              Router + scroll/hash management
  index.css             Imports the design system + per-page styles
  styles/
    base.css            Shared chrome: tokens, nav, buttons, footer, reveal/tilt
    home.css            …per-page styles (page-hero renamed per page to avoid
    about.css              cross-page collisions)
    solutions.css
    projects.css
    globalImpact.css
  pages/
    *.jsx               One component per route
    *.html              The page body markup, imported raw and rendered
  components/
    Page.jsx            Wraps a page body + shared effects
  hooks/
    usePageEffects.js   Scroll reveal, animated counters, card tilt, the
                        projects filter, and legacy .html -> SPA link rewriting
    useHeroScene.js     Three.js tower-crane hero (port of the original hero-3d)
```

### Notes

- Pages are ported from the original static HTML by importing each page's body
  markup verbatim (`?raw`) and rendering it, which keeps the bespoke SVGs and
  layout pixel-faithful. Interactivity that was previously in `shared.js` and
  `hero-3d.js` now lives in the hooks above.
- The old `tweaks-panel.jsx` / `hero-tweaks.jsx` dev overlay was intentionally
  left out of the production app.
- `public/_redirects` enables SPA deep-linking on Netlify.
