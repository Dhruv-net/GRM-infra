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
    *.jsx               One JSX component per route (full markup as JSX)
  hooks/
    usePageEffects.js   Scroll reveal, animated counters, card tilt, the
                        projects filter, and legacy .html -> SPA link rewriting
    useHeroScene.js     Three.js tower-crane hero (port of the original hero-3d)
```

### Notes

- Each page is a real JSX component holding the full markup (the bespoke SVG
  diagrams included). Each renders into a `ref`'d wrapper, and the shared
  interactivity that was previously in `shared.js` and `hero-3d.js` runs against
  that ref via the hooks above (so internal `*.html` links are still rewritten
  to client-side navigation).
- The old `tweaks-panel.jsx` / `hero-tweaks.jsx` dev overlay was intentionally
  left out of the production app.
- `public/_redirects` enables SPA deep-linking on Netlify.
