---
name: deploy
description: Build and deploy the GRM site to Netlify, and reason about deployment/redirect/asset config. Use for "deploy", "ship", "publish", build failures, SPA deep-link/redirect issues, or questions about how this site is hosted. This site is static-on-Netlify — there is no Helm/K8s/Docker.
---

# Deploying GRM (Netlify, static)

This is a static Vite build served by Netlify. There is **no** container, Helm
chart, or Kubernetes manifest, and none should be added unless the user
explicitly changes the deployment model.

## Build

```bash
npm ci            # clean install (use in CI / before a release build)
npm run build     # outputs static site to dist/
npm run preview   # serve dist/ locally to verify before shipping
```

`dist/` is gitignored — it's a build artifact, never commit it.

## What makes SPA routing work

`public/_redirects` contains:

```
/*    /index.html   200
```

Netlify copies it into `dist/` and uses it so deep links (`/solutions`,
`/about`) serve `index.html` and let React Router handle the path. **If deep
links 404 in production, this file is the first thing to check. Never delete it.**

## Deploying

Deploys are Netlify-driven. Two common paths:

- **Git-connected (default):** push to the deploy branch; Netlify builds with
  `npm run build` and publishes `dist/`. Confirm the site's build command =
  `npm run build` and publish dir = `dist` in Netlify settings.
- **Netlify CLI (manual):** `netlify deploy --build --prod` (prompts for / uses
  the linked site). A bare `netlify deploy` creates a draft preview URL.

Deploying publishes to a live external site — treat it as outward-facing:
confirm with the user before running a `--prod` deploy unless they've said go.

## Asset weight

Several `public/*.mp4` files are large (hero `background.mp4` ~9 MB, loader/global
videos a few MB each). They ship as-is and dominate page weight — compress new
video/image assets before adding, and prefer poster images + lazy loading.

## Pre-deploy checklist

1. `npm run build` succeeds locally.
2. `npm run preview` — spot-check key routes + a hard refresh on a deep link.
3. Verify `public/_redirects` is intact.
4. New large assets compressed.
