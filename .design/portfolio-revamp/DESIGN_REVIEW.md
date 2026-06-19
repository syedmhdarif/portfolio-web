# Design Review: Portfolio Revamp — round 1 (reported issues)

Reviewed against: `DESIGN_BRIEF.md` · Philosophy: Editorial / Swiss-brutalist-lite
Date: 2026-06-19

## Screenshots Captured

> **No browser/Playwright MCP tool is available in this environment**, so I could not self-capture screenshots. This review works from the user's three supplied screenshots + code + a production build (`npm run build`) that prerenders all routes. Please re-test in the browser and share fresh screenshots if anything is still off.

| Source | What it showed |
| --- | --- |
| user mobile screenshot (dark) | Mobile nav drawer text overlaying page content |
| user reference crop | Desired hero card shape (notch + arrow + small signature + globe) |

## Summary

Three issues raised: (1) section animations "not implemented", (2) mobile nav drawer overlaying the page, (3) hero card should match the reference notched-card shape with a *small* signature. (2) and (3) were real and are fixed; (1) is implemented and was most likely suppressed by OS *Reduce Motion* — now made more pronounced.

## Must Fix → fixed

1. **Mobile nav drawer overlayed the page** (`app/components/MobileNav.tsx`). _Root cause:_ the drawer was rendered inside `<header>`, which gains `backdrop-filter` (`backdrop-blur-md`) on scroll. `backdrop-filter` establishes a containing block + stacking context for `fixed` descendants, so `fixed inset-0` collapsed to the header bar and the panel stopped covering the viewport. _Fix:_ the drawer is now rendered with `createPortal(..., document.body)` (client-only, `mounted` guarded for the prerender), at `z-[60]` above the header, with an opaque `bg-paper` panel. It can no longer be trapped by any ancestor.

2. **Hero card shape didn't match the reference** (`app/components/home/Hero.tsx` + `.hero-card` in `app/app.css`). _Fix:_
   - Concave **notch** cut into the bottom-left via a `radial-gradient` CSS mask; the black arrow button sits inside the notch (rendered outside the masked element so it isn't clipped).
   - **Signature shrunk** from `text-4xl/5xl` → `text-xl/2xl`, top-left on the amber.
   - **Globe** icon added top-right in a black circle (matches the reference).
   - Portrait unchanged (`syedArif.webp`, `object-cover object-top`); card radius `2.25rem`; parallax retained.

## Should Fix → addressed

3. **Section animations appeared not to fire.** They are implemented (every section uses `Reveal`/`Stagger`; hero staggers on mount; stats count up; route cross-fades via `PageTransition`). Two likely reasons you saw nothing:
   - **OS "Reduce Motion"** — by design (brief a11y requirement) every Framer primitive no-ops and the global CSS kills transitions when `prefers-reduced-motion: reduce` is set. If your macOS/iOS has Reduce Motion on, **toggle it off** to see the animations. (System Settings → Accessibility → Display → Reduce Motion.)
   - Subtlety — I increased reveal travel (28→36px) and switched the in-view trigger to `viewport={{ amount: 0.2 }}` so each section reveals a touch earlier and more visibly.

## Verification

- `npm run typecheck` → **exit 0**
- `npm run build` → clean; all 4 routes prerendered; `.hero-card` mask present in built CSS.
- Visual confirmation still pending (no browser tool here) — needs your eyes.

## What Works Well

- Token system, SEO/JSON-LD preservation, IA, and editorial type treatment are solid and unaffected by these fixes.
