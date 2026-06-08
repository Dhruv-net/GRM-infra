---
name: styling
description: Style or restyle pages in the GRM site following its CSS conventions — design tokens, per-page scoped stylesheets, the light/dark band theme, and the JS interactivity hooks (reveal/counter/tilt/filter). Use when adding or changing visual styles, layout, colors, or scroll/counter/tilt behavior.
---

# Styling conventions for GRM

Plain CSS only — no preprocessor, no Tailwind, no CSS-in-JS (occasional inline
`style={{}}` objects exist and are fine for one-offs).

## Design tokens

All colors, radii, spacing and font vars live in `:root` in
`src/styles/base.css`. **Use the variables, never hardcode** the brand hexes:

- `--ink` `--surface` `--surface-2` `--line` — backgrounds/borders
- `--bone` `--bone-dim` `--bone-mute` — text on dark
- `--green` (`#34d399`, energy accent) `--blue` `--amber`
- `--r-sm|md|lg` radii · `--maxw` (1440) · `--pad-x` (clamped page gutter)

## Per-page stylesheets

- `base.css` = shared chrome (tokens, nav, buttons, footer, reveal/tilt
  keyframes). Everything else is one stylesheet per page, all imported in
  `src/index.css`.
- Keep new classes **page-scoped** — historic `page-hero` collisions were fixed
  by renaming per page. Don't add generic global class names.
- Legal pages share `legal.css` (via `LegalLayout`).

## Light/dark bands — `.theme-light`

Add `className="theme-light"` to a section to flip it to the white band theme.
It only remaps color tokens and auto-neutralizes hardcoded `#34d399` green
(`[stroke="#34d399"]`/`[fill="#34d399"]` → black) and the eyebrow dot. Layout is
untouched. If you add new green accents inside a light section, prefer the token
so the neutralization keeps working.

## Fonts

base.css force-sets **Avenir Next** on everything via
`*, *::before, *::after { font-family: … !important }`. The Google Fonts
`@import` (Geist / Instrument Serif) at the top is legacy and currently
overridden — don't design against those families.

## JS-driven effects (markup contract)

These are activated by `usePageEffects(ref)` — add the class/attribute and they
just work:

- `class="reveal"` — fades/slides in when scrolled into view (`.is-in` added)
- `data-count="42"` `data-decimals="1"` — animates the number from 0 on view
- `class="card-tilt"` — 3D mouse-tilt
- Projects filter: `.filterbar .chip[data-filter]` + `.pcard[data-cat]`, with an
  optional `#visibleCount` counter and a `.featured` BESS card

## Verify

`npm run dev` and check both light and dark sections, plus reduced widths
(the layout is responsive; `--pad-x` and clamps handle most of it).
