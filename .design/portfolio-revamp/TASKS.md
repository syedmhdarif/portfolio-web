# Build Tasks: Portfolio Revamp — "Editorial Bold"

Generated from: `.design/portfolio-revamp/DESIGN_BRIEF.md` + `INFORMATION_ARCHITECTURE.md` + `DESIGN_TOKENS.css`
Date: 2026-06-19

> Philosophy locked in Task F1: **Editorial / Swiss-brutalist-lite** — cream/ink/amber, type-led, one accent, no gradients/glassmorphism/emoji. Light default + dark toggle. Rich-but-tasteful Framer Motion that fully collapses under `prefers-reduced-motion`.
>
> Build order = dependencies → visual proof (Hero) early to validate the aesthetic → risk (theme toggle no-flash, motion) early → then breadth. Verify each task in the browser (`npm run dev`) in both themes + mobile before checking off.

## Foundation

- [ ] **F1 · Token system + fonts** _(establishes the philosophy)_: Replace the `@theme` block and all legacy helpers in `app/app.css` with the contents of `DESIGN_TOKENS.css`. In `app/root.tsx`, swap the Google Fonts link to load **Archivo** (wght 400–900), **Sacramento**, and keep **Inter**. Remove dead aliases only after dependent components are migrated (keep `.glass-card`/`.section-title`/`.skill-badge`/`.gradient-text`/`.mesh-gradient` temporarily so `/learn` keeps rendering until Tasks C5–C6). _Modifies: app.css, root.tsx. New: tokens._
- [ ] **F2 · No-flash theme + ThemeToggle** _(risk-first)_: Add an inline `<head>` script in `root.tsx` that sets `data-theme` from `localStorage` (fallback system preference) before paint. Build `app/components/ThemeToggle.tsx` (sun/moon, persists to localStorage, animated, `aria-pressed`/label). Verify no FOUC on reload in both themes; works with `ssr:false`. _New: ThemeToggle._
- [ ] **F3 · Framer Motion install + motion primitives** _(risk-first)_: `npm i framer-motion`. Create `app/components/motion/` with `Reveal` (in-view fade-rise, one-shot), `Stagger`/`StaggerItem`, `PageTransition` (route fade/slide), and a `useReducedMotion` guard so all primitives no-op when reduced motion is set. Pull durations/easings from the CSS motion tokens. _New: motion primitives._
- [ ] **F4 · Content data extraction**: Create typed data modules under `app/content/` — `projects.ts`, `services.ts`, `process.ts`, `stack.ts`, `experience.ts`, `education.ts`, `skills.ts`, `hero.ts` (stats: `4+ yrs`, current role @ Paywatch, shipped-project count, live-app count) — by lifting the hardcoded values out of `Portfolio.tsx`. Keep `site.ts` as identity/contact/FAQ source of truth. No UI yet; data shape drives the components. _Modifies: content/. New: data modules._
- [ ] **F5 · RootLayout shell**: In `root.tsx`/layout, compose `Header` + `<PageTransition><Outlet/></PageTransition>` + `Footer` + theme provider context. Establish `.wrap`/`.section` rhythm. _Depends on: F2, F3._

## Core UI — Navigation

- [ ] **N1 · Header (desktop)**: Build `app/components/Header.tsx` — `[SA monogram]` · Home · Work · Background · Learn · Contact, plus right cluster (`✦ Open to work · KL` chip + ThemeToggle). Sticky/condense-on-scroll with hairline border. Anchor links use absolute `/#work` form (cross-route safe); route links for Background/Learn. Active state + scroll-spy on Home. _Depends on: F1, F2._
- [ ] **N2 · Monogram + MobileNav drawer**: `Monogram.tsx` (geometric SVG "SA"). Rebuild `MobileNav.tsx` to the new IA + aesthetic (full-height drawer, 5 items + chip + toggle). Keep a11y: focus trap, Escape, body-scroll lock, focus restore, `aria-modal`. _Modifies: MobileNav. New: Monogram._

## Core UI — Home (`/`)

- [ ] **H1 · Hero** _(visual proof — build first, validate direction)_: Oversized display headline (name/positioning) + amber portrait card using `app/assets/syedArif.webp` + `StatBlock`s (years/tenure, projects/breadth) + `SocialPill` row + `SignatureFlourish` script overlay. Asymmetric grid desktop → stacked mobile; `clamp()` display type. Motion: staggered word/clip reveal, fade-rise card/stats, signature last, **parallax** on the card; count-up stats in view. _New: Hero, StatBlock, SocialPill, SignatureFlourish. Depends on: F3, F4._
- [ ] **H2 · SectionHeading + About**: `SectionHeading` (eyebrow + oversized heading, asymmetric) reused site-wide. About section: short editorial prose (KL/MY + SG, how I work). Reveal on scroll. _New: SectionHeading, About._
- [ ] **H3 · Work (Projects)**: `FeaturedProject` (LokalGig) + `ProjectCard` grid (Hikayat Daily Global, Hikayat Diri mobile/web, CitySage, Interactive Room) from `projects.ts`. Editorial cards (paper-2 + hairline, no glass), hover lift/image shift, external-link affordance, preserve `WebApplication`/`MobileApplication` microdata. _New: FeaturedProject, ProjectCard. Depends on: F4._
- [ ] **H4 · Services + Process + What-you'll-need + CTA**: Restyle `ServiceCard` (Web/Mobile, de-emoji → line icons), numbered `ProcessStep` (Design→Dev→Production), `StackCard` ("What you'll need"), and "Have a project in mind?" `CTASection` linking to `#contact`. All from `services.ts`/`process.ts`/`stack.ts`. _Modifies: ServiceCard, ProcessStep, StackCard. New: CTASection._
- [ ] **H5 · Contact**: Editorial restyle — email/phone/WhatsApp/location + socials from `site.ts`. Hospitable MY tone ("Have a chat"). Keep `tel:`/`mailto:`/`wa.me` links. _Modifies: Contact._
- [ ] **H6 · FAQ**: Keep native `<details>` + `HOMEPAGE_FAQ` data + FAQPage JSON-LD; restyle accordion (animated chevron + height, hairline rows). Keyboard-operable. _Modifies: FAQ._
- [ ] **H7 · Footer**: Editorial restyle; fix `© 2025` → current year; keep creator credit line + socials. _Modifies: Footer._
- [ ] **H8 · Assemble `_index.tsx`**: Compose H1–H7 in IA order; section anchor IDs (`#about/#work/#services/#contact/#faq`) with `scroll-mt`. Verify scroll-spy + cross-route anchors. _Depends on: H1–H7._

## Core UI — Background (`/background`)

- [ ] **B1 · Route + Experience timeline**: Add `routes/background.tsx` + `app/routes.ts` entry. Build editorial reverse-chron `ExperienceTimeline` (Paywatch → Zonar → Accenture) from `experience.ts`. Reveal/stagger on scroll. _New: route, ExperienceTimeline. Depends on: F4._
- [ ] **B2 · Education + Skills (+ marquee)**: `EducationCard` (B.IT IIUM, Foundation CFS IIUM PJ) + `SkillsGrid` (Languages/Frameworks/Tools/Databases) with a `.marquee` skills strip (pauses on hover, static under reduced-motion). Page intro + link back to `/#contact`. _New: EducationCard, SkillsGrid._

## Core UI — Learn (`/learn`, `/learn/:slug`)

- [ ] **C5 · Learn index restyle + richer index**: Rebuild `routes/learn.tsx` in the new system — featured-article hero + category filter chips (visual, scalable) + topic grid + "more coming". Drop glass/mesh helpers here. _Modifies: learn.tsx._
- [ ] **C6 · Article restyle**: Restyle `routes/learn.$slug.tsx` content components (SectionCard/Title/Paragraph/InfoTable/CodeBlock/Callout) to cream/ink/amber + display type; breadcrumb + bottom nav. Keep TechArticle/FAQ JSON-LD. Remove now-dead legacy helpers from `app.css` (end of F1). _Modifies: learn.$slug.tsx, app.css._

## Interactions & States

- [ ] **I1 · Page transitions wired**: Confirm `PageTransition` runs on every route change (Home↔Background↔Learn↔article) without layout jump; scroll resets to top on route change. _Depends on: F3, F5._
- [ ] **I2 · Motion audit**: Every animation (hero stagger, reveals, count-ups, marquee, parallax, transitions, hover) verified to fully no-op / show final state under `prefers-reduced-motion: reduce`. No scroll-jacking anywhere. _Covers: reduced-motion, hover, in-view, parallax._

## Responsive & Polish

- [ ] **R1 · Responsive pass**: Verify Hero (asymmetric→stacked), nav (chip hides→drawer), all grids (1→2→3), marquee full-bleed, display `clamp()` no overflow. Breakpoints: 375 / 768 / 1024 / 1280. _Depends on: all Core UI._
- [ ] **R2 · Accessibility pass**: Contrast ≥4.5:1 body / ≥3:1 large in **both** themes (re-verify amber usage); keyboard nav incl. drawer focus-trap + toggle + FAQ; visible focus rings; landmarks/heading order; alt text. _From brief a11y section._
- [ ] **R3 · SEO/AEO non-regression**: Update JSON-LD + meta for new IA — add `/background` to `prerender()` in `react-router.config.ts`, BreadcrumbList/Person schema for Background, keep Home FAQPage + all existing structured data, update nav/sitemap, preserve MY/SG locality signals + British spelling. Diff structured data before/after. _Modifies: react-router.config.ts, root.tsx, routes._

## Review

- [ ] **Design review**: Run `/design-review` against the brief (visual hierarchy, consistency, responsive, a11y, fidelity to reference) — captures screenshots in both themes + breakpoints. Then `superpowers:verification-before-completion`: `npm run typecheck` + `npm run build` clean, dev server renders all 4 routes, both themes, reduced-motion verified.
