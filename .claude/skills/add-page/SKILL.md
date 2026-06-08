---
name: add-page
description: Add a new page/route (or any new feature that introduces a route) to the GRM React SPA. Use whenever creating a new top-level page, section route, or legal/policy page. Walks the full 4-place wiring checklist so the route doesn't silently break.
---

# Add a page to the GRM SPA

This SPA breaks silently if a new page isn't wired everywhere. Follow every step.

## 1. Decide the page type

- **Standard marketing page** (Home/About/Solutions style): full bespoke markup
  with its own nav + footer chrome and its own stylesheet.
- **Legal / long-form page** (Privacy/Cookie/Terms style): use the shared
  `src/components/LegalLayout.jsx` wrapper — it provides nav, footer, hero, and a
  readable column. You only pass `eyebrow`, `title`, `effectiveDate`, children.

## 2. Create the component — `src/pages/<Name>.jsx`

Standard page skeleton (copy the `<header className="nav">` and
`<footer className="footer">` chrome from an existing page like `Home.jsx`):

```jsx
import { useRef } from 'react'
import { usePageEffects } from '../hooks/usePageEffects'

export default function <Name>() {
  const ref = useRef(null)
  usePageEffects(ref)            // REQUIRED: reveal/counter/tilt/link-rewrite
  return (
    <div ref={ref}>
      {/* nav chrome (copy from Home.jsx) */}
      {/* page sections — use .reveal, [data-count], .card-tilt as needed */}
      {/* footer chrome (copy from Home.jsx) */}
    </div>
  )
}
```

Legal page: `return <LegalLayout eyebrow="…" title="…" effectiveDate="…">…</LegalLayout>`.

- Use existing classes/tokens — see the `/styling` skill.
- Internal links use the legacy form `href="about.html"` (rewritten at runtime).

## 3. Register the route — `src/main.jsx`

Add the import and a `<Route>` (keep the `path="*"` catch-all last):

```jsx
import <Name> from './pages/<Name>'
// …
<Route path="/<slug>" element={<<Name> />} />
```

## 4. Map the legacy link — `src/hooks/usePageEffects.js`

Add to `ROUTE_MAP` so `<slug>.html` anchors navigate client-side:

```js
'<slug>.html': '/<slug>',
```

## 5. Add the stylesheet — `src/index.css`

For a standard page, create `src/styles/<name>.css` and import it:

```css
@import './styles/<name>.css';
```

Skip this for legal pages — they reuse `legal.css`.

## 6. Wire navigation

Add the new link to the **nav** and **footer** of the other pages (search for
`className="nav-links"` and `className="footer-grid"` / `footer-legal`).

## 7. Verify

```bash
npm run dev      # click through; confirm route, links, scroll effects work
npm run build    # must succeed (no test/lint in this repo)
```

The `.claude/hooks/check-routes.sh` PostToolUse hook will warn if step 3 was
missed. Re-read the checklist if it fires.
