#!/usr/bin/env bash
# GRM route-consistency check — runs as a PostToolUse hook after Edit/Write.
#
# This SPA's #1 footgun: adding a page component but forgetting to wire it into
# the router. A page must appear as a <Route> in src/main.jsx. When a page in
# src/pages/ isn't imported + routed, this prints the full wiring checklist back
# into the model's context so the work gets finished. Always exits 0 — it's
# informational, never blocks an edit. Silent when everything is wired.
set -uo pipefail
cd "${CLAUDE_PROJECT_DIR:-.}" 2>/dev/null || exit 0

pages_dir="src/pages"
main="src/main.jsx"
[ -d "$pages_dir" ] || exit 0
[ -f "$main" ] || exit 0

problems=""
for f in "$pages_dir"/*.jsx; do
  [ -e "$f" ] || continue
  name="$(basename "$f" .jsx)"
  if ! grep -q "import $name " "$main"; then
    problems="${problems}${name} (src/pages) is not imported in src/main.jsx. "
  elif ! grep -q "element={<$name" "$main"; then
    problems="${problems}${name} is imported but has no <Route ... element={<$name/>}> in src/main.jsx. "
  fi
done

if [ -n "$problems" ]; then
  msg="GRM route check: ${problems}Wiring a new page needs FOUR things: (1) a <Route> in src/main.jsx, (2) a ROUTE_MAP entry in src/hooks/usePageEffects.js so legacy .html links navigate client-side, (3) a stylesheet @import in src/index.css (legal pages reuse legal.css), and (4) nav + footer links across the other pages."
  printf '{"hookSpecificOutput":{"hookEventName":"PostToolUse","additionalContext":"%s"}}\n' "$msg"
fi
exit 0
