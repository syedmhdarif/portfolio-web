# Audit: Mobile responsiveness (all routes)

**Date:** 2026-06-20
**Scope:** Every public route (`/`, `/background`, `/learn`, `/learn/$slug`) and shared components, checked for mobile compatibility down to ~360px — no horizontal overflow, readable text, adequate touch targets, clean layout collapse — without regressing desktop (`md:`/`lg:`).
**Phases run:** Phase 1 (scope) · Phase 4 (design-review + mobile-design checks). **Skipped:** Phase 2 (performance) and Phase 3 (SEO) — out of scope for a responsiveness sweep.
**Method:** Static Tailwind breakpoint audit (no Chrome DevTools MCP connected). Findings with a width threshold marked **[verify live]** should be confirmed with a real render at 360/375/390px.

---

## Top 3 fixes (P0 — do first)

1. **Contact email overflows the viewport on every phone** — the email is rendered in the huge Sacramento script font at `text-5xl` (min **56px**) with no wrapping or max-width. `"syedarifjr@gmail.com"` (20 chars) at 56px ≈ **~390px wide** vs ~312px content at 360px → **horizontal page scroll on all phones up to ~430px**.
   - Severity: **High (blocker for mobile)**
   - Effort: **S**
   - Source phase: ux / mobile
   - File: `app/components/home/Contact.tsx:38-42`
   - Fix: scale it down on mobile and allow breaking — e.g. `text-3xl sm:text-5xl` (keeps the existing desktop `sm:text-6xl`), plus `break-words` / `max-w-full`. Desktop unchanged.
   - Suggested skill: `/frontend-design`

2. **`/background` H1 long word overflows on small phones** — `text-5xl` (min 56px) on `Experience, education<br/>& skills.` The single token `"Experience,"` (~320px at 56px) can't break and exceeds the ~312px content box at ≤360px → horizontal scroll on small/older phones. The forced `<br/>` also makes the first line longer than it needs to be.
   - Severity: **Medium**
   - Effort: **S**
   - Source phase: ux / mobile
   - File: `app/routes/background.tsx:197-199`
   - Fix: smaller base size (`text-4xl sm:text-6xl`) and/or drop the hard `<br/>` so it wraps naturally. Desktop (`sm:`+) unchanged.
   - Suggested skill: `/frontend-design`

3. **No global horizontal-overflow guard** — there is no `overflow-x` safety net on `body`/`main`, so any *single* overflowing element (findings #1, #2) scrolls the whole page sideways. Fixing the root causes is primary; a defensive `overflow-x-clip` on `<body>`/`main` prevents future regressions.
   - Severity: **Medium**
   - Effort: **S**
   - Source phase: mobile
   - File: `app/app.css` (base layer) or `app/root.tsx` `<body>`
   - Fix: after fixing #1/#2, add `overflow-x: clip` to `body` as a backstop. (`clip` not `hidden` — won't break the `position: fixed` header or anchor scrolling.)
   - Suggested skill: `/frontend-design`

---

## Full findings

### UI/UX & Mobile (Phase 4)

**High**
- **Contact email signature overflow** — `Contact.tsx:38-42`. See Top fix #1.

**Medium**
- **`/background` hero H1 overflow at ≤360px** — `background.tsx:197-199`. See Top fix #2.
- **Hero stats row may overflow at ≤390px** — two stat blocks in a `flex gap-10` (40px gap) with `max-w-[11rem]` (176px) labels. Worst case ~392px vs ~312px content at 360px. **[verify live]** `app/components/home/Hero.tsx:129`. _Fix: `gap-6 sm:gap-10`, or `flex-wrap`, or narrower mobile labels._
- **No global overflow-x guard** — see Top fix #3.

**Low / polish**
- **Touch targets below 44px** — the **mobile menu trigger** (`MobileNav.tsx:76`, `h-10 w-10` = 40px) is the primary mobile action and should be ≥44px; same for the close (X) button and `ThemeToggle.tsx:48` (40px). Apple HIG = 44pt, Google = 48dp. _Fix: `h-11 w-11` on those controls (desktop visually unaffected)._ Note: Hero social icons (44px) and Contact channel icons (48px) already pass.
- **Hero H1 tight at ≤340px** — `text-[clamp(3rem,7vw,5.5rem)]` floors at **48px**, so `"Developer."` (~290px) gets tight inside ~272px content on 320px (iPhone SE) screens. Won't hard-break (no clip — the `TextReveal` mask is height-auto at rest) but may wrap awkwardly. **[verify live]** `Hero.tsx:94-101`. _Optional: lower the clamp floor to `2.5rem` for ≤360._
- **About facts grid cramped on small phones** — `grid grid-cols-2` is fixed (not responsive); on 320–360px each cell is ~96–116px after `p-5`, so values like "Senior …, Paywatch" wrap heavily. `About.tsx:54`. _Optional: `grid-cols-1 sm:grid-cols-2`._
- **Mobile nav items tight** — `display text-4xl` (min 44px) for `"Background"` inside an `w-[86%]` drawer is ~tight at 360px. `MobileNav.tsx:107-112`. **[verify live]** _Optional: `text-3xl sm:text-4xl` inside the drawer._

### What works well (keep doing this)
- **Mobile-first breakpoints** — base styles are the mobile layout; `md:`/`lg:` add desktop. Correct direction.
- **Grids collapse cleanly** — Work, Services, Education, Skills, Learn index all go single-column on mobile via `md:`/`lg:grid-cols-*`.
- **Tables & code are scroll-contained** — every `InfoTable`/`CodeBlock` in the OWASP article uses `overflow-x-auto`, so wide content scrolls inside its own box instead of breaking the page (`learn.$slug.tsx:297,326`). This is the right pattern.
- **`min-h-svh`** on the hero handles mobile browser chrome correctly.
- **Tag rows use `flex-wrap`** everywhere; portrait card scales with `%` positioning; reduced-motion is fully honoured.

---

## Open questions
- **Minimum viewport target?** I audited to 360px and flagged 320px (iPhone SE) separately. If SE/320 isn't a target, findings #2 and the Hero H1 item drop to "Low".
- **Live verification:** 4 findings are `[verify live]`. If you can run `npm run dev`, I can either guide a manual check or (if you connect a Playwright/browser MCP) capture 360/375/390px screenshots to confirm before fixing.

## Next steps
- Findings are diagnosis only — nothing changed yet (audit/fix kept separate).
- All fixes are **mobile-only** (base or `sm:` overrides) and leave `md:`/`lg:` desktop untouched — directly satisfies "don't break desktop".
- Recommended fix order: **#1 (Contact email) → #2 (background H1) → Hero stats → touch targets → #3 (overflow-x backstop)**. Want me to implement the P0 set via `/frontend-design`?
