# Design Brief: Portfolio Revamp — "Editorial Bold"

> Full UI/UX revamp of Syed Mohamad Arif's portfolio. React Router v7 (SPA, `ssr:false`) + Tailwind v4 + Cloudflare Workers. Primary audience: hiring managers & clients in **Malaysia + Singapore**. British English. SEO/AEO is first-class and must not regress.

## Problem

The current site is a competent but generic "dark SaaS template" — deep navy/purple glassmorphism, tri-colour gradients, emoji icons. It blends in with thousands of developer portfolios and doesn't communicate a distinct point of view. A KL/SG hiring manager skims it and remembers nothing. Separately, the home page is overloaded: a single 920-line component crams About, Projects, Services, Process, Experience, Skills, Education, Contact, and FAQ into one endless scroll, burying the work that should sell first.

## Solution

A confident, editorial portfolio with a strong typographic point of view — oversized display type, generous negative space, a warm single-accent palette, and one striking portrait card (the reference "visual poetry" layout). The home page becomes a tight pitch: who I am, the work, what I offer, how to reach me. Deep credentials (experience, education, skills) move to a dedicated **Background** page so the home page stays sharp. Rich-but-tasteful Framer Motion gives the whole thing a smooth, premium feel — staggered hero, scroll reveals, animated route transitions, a marquee skills strip, parallax on the hero card. Light by default, with a real dark mode.

## Experience Principles

1. **Type carries the design, not decoration** — The layout earns its impact from scale, weight, and whitespace, not from gradients, glows, or emoji. When in doubt, make the type bigger and remove an effect.
2. **Lead with proof, defer the résumé** — Home sells the work and the offer; the CV-style detail lives one click away on Background. Every home section answers "why hire me" before "what have I done since 2015".
3. **Motion clarifies, never blocks** — Animation guides the eye and rewards scrolling, but never gates content, never scroll-jacks, and fully collapses under `prefers-reduced-motion`.

## Aesthetic Direction

- **Philosophy**: Editorial / Swiss-brutalist-lite. Big bold grotesque display type, asymmetric grid, one warm accent on a paper-cream ground. Think design-studio site, not dev-tool dashboard.
- **Tone**: Confident but understated (Malaysian professional voice — concrete over loud). Warm, human, hospitable. "Have a chat", not "Book a demo NOW".
- **Reference points**: The supplied "visual poetry" hero (oversized type + amber photo card + stat blocks + social pills + script signature); editorial agency sites; Swiss typographic posters.
- **Anti-references**: Dark glassmorphism, neon tri-colour gradients, glow shadows, emoji icons, "crushing it / 10x / rockstar" energy, busy hero animations.

## Aesthetic Tokens (direction — finalised in Phase 4)

- **Light (default)**: paper-cream ground (~`#F5F2EC`), near-black ink (~`#0E0E0E`), single warm amber accent (~`#F2A93B`). Hairline borders, flat fills, minimal shadow.
- **Dark (toggle)**: near-black ground, cream ink, same amber accent. Every token defined twice.
- **Type**: bold grotesque display (e.g. a free Helvetica-grade grotesque — Anton/Archivo/Space Grotesk-class for the giant headlines) + clean sans for body. One script/handwritten face for the signature flourish only. Confirm exact families in Phase 4.
- **Accent discipline**: amber is the *only* chromatic colour. Everything else is ink/cream/grey. No gradients.

## Existing Patterns (to respect or replace)

- **Typography**: Currently Inter (variable) via Google Fonts, loaded in `app/root.tsx`. Body keeps a clean sans; **add a display + script face** for the new system.
- **Colours**: Current `@theme` tokens in `app/app.css` (`--color-accent: #8b5cf6`, `--color-surface: #0f0f23`, etc.) — **replaced wholesale** by the new cream/ink/amber system with light+dark.
- **Spacing**: Tailwind defaults + ad-hoc `py-16 md:py-24`. New system gets an explicit, larger editorial spacing rhythm.
- **Content source of truth**: `app/content/site.ts` (identity, contact, FAQ, experience claim). **Keep and extend** — move hardcoded JSX content (projects, services, experience, education, skills) into typed data here so pages render from data.
- **SEO/JSON-LD**: Rich Person/WebSite/FAQPage/etc. in `app/root.tsx` and routes — **must be preserved and updated**, not dropped. Microdata (`itemScope`/`itemProp`) currently on About/Projects/Experience.
- **Reduced motion**: `prefers-reduced-motion` block already exists — extend it to cover Framer Motion.

## Component Inventory

| Component | Status | Notes |
| --- | --- | --- |
| `Header` / top nav | New | Home · Work · Background · Learn · Contact + "Open to work · KL" status chip + SA monogram + theme toggle. Replaces floating glass nav. |
| `MobileNav` (drawer) | Modify | Rebuild to new IA + aesthetic; keep a11y (focus trap, Escape, body lock). |
| `ThemeToggle` | New | Light/dark, persisted (localStorage), no-flash on load. |
| `Monogram` (SA logo) | New | Geometric SVG mark for nav. |
| `SignatureFlourish` | New | Script-signature SVG/overlay in hero. |
| `Hero` | New | Oversized type + amber portrait card + stat blocks + social pills + signature; parallax. |
| `StatBlock` | New | Big number + caption; scroll-linked count-up. |
| `SocialPill` | New | Circular yt/ig/li/gh-style pills row. |
| `SectionHeading` | New | Editorial heading (oversized, asymmetric). Replaces `.section-title`/`.section-subtitle`. |
| `ProjectCard` / `FeaturedProject` | New | Editorial project cards; LokalGig featured. Replaces glass-card projects. |
| `ServiceCard` | Modify | De-emoji, editorial restyle; keep deliverables + stack data. |
| `ProcessStep` | Modify | Restyle to numbered editorial steps. |
| `StackCard` ("What you'll need") | Modify | Restyle. |
| `CTASection` ("Have a project in mind?") | Modify | Editorial restyle. |
| `ContactSection` | Modify | Editorial restyle; keep email/phone/WhatsApp/location + socials. |
| `FAQ` (accordion) | Modify | Keep `<details>` + `HOMEPAGE_FAQ` data + FAQPage JSON-LD; restyle. |
| `ExperienceTimeline` | New (page) | Moves to `/background`; editorial timeline. |
| `EducationCard` | New (page) | Moves to `/background`. |
| `SkillsGrid` / marquee | New (page) | Moves to `/background`; marquee strip option. |
| `Footer` | Modify | Editorial restyle; fix "© 2025" → current. |
| `Learn` index | Modify | Restyle + richer index (featured article + categorised grid, scalable). |
| `learn/:slug` article | Modify | Restyle article + content components to new system. |
| `PageTransition` wrapper | New | Framer Motion route transitions. |
| `Reveal` / `Stagger` motion primitives | New | Reusable in-view animation wrappers honouring reduced-motion. |
| `icons.tsx` | Modify | Keep/extend line-icon set; drop emoji usage in favour of icons. |

## Key Interactions

- **Hero on load**: display words stagger/clip-reveal in; portrait card and stat blocks fade-rise with slight delay; signature draws/fades in last. Portrait card has subtle parallax on scroll.
- **Scroll reveals**: each section's heading + content fade-rise once on entering viewport (one-shot, not re-triggering). Stats count up when in view.
- **Route change** (Home ↔ Background ↔ Learn ↔ article): brief animated page transition (fade/slide), not jarring.
- **Theme toggle**: instant swap, persisted, no FOUC; animated icon (sun/moon).
- **Skills marquee**: continuous horizontal scroll on Background; pauses on hover; static under reduced-motion.
- **Nav**: active section/route indicated; status chip is decorative-informational; mobile collapses to drawer.
- **FAQ**: native `<details>` expand with animated chevron + height; keyboard-operable.
- **Project cards**: hover lift/imagery shift (subtle); clear external-link affordance.

## Responsive Behavior

- **Hero**: desktop = asymmetric two-column (type left, portrait card right, stats below). Mobile = stacked, type first then card; stats become a 2-col row; social pills wrap. Display type scales with `clamp()` so it stays huge but never overflows.
- **Nav**: full horizontal bar on `md+`; status chip hides first on narrow, then collapse to drawer on mobile.
- **Grids**: projects 1→2→3 col; services 1→2 col; skills/stack reflow.
- **Marquee**: full-bleed on all sizes.
- **Touch targets**: ≥44px; no hover-only affordances on mobile.

## Accessibility Requirements

- **Contrast**: body & UI text ≥ 4.5:1, large display ≥ 3:1 — verify amber-on-cream and ink-on-cream in *both* themes (amber text on cream likely fails 4.5:1 → use amber for fills/large type, ink for body).
- **Motion**: every Framer Motion animation no-ops under `prefers-reduced-motion: reduce` (count-ups show final value, marquee static, transitions instant).
- **Keyboard**: full nav, drawer (focus trap + Escape + restore), theme toggle, FAQ, all links/buttons operable; visible focus rings in both themes.
- **Semantics**: preserve landmark structure (`header/main/footer/nav`), heading order, `aria-*` on nav/drawer/toggle, alt text on portrait & project images.
- **SEO/AEO non-regression**: keep all JSON-LD (Person, WebSite, FAQPage, MobileApplication, etc.), microdata, meta, prerender list; update for new IA (Background page schema, nav).

## Out of Scope

- New copywriting beyond light editorial polish (route through `copywriting` skill if substantial rewrites are wanted — current factual claims in `site.ts` stay authoritative).
- A CMS/backend — content stays static TypeScript in `app/content/`.
- New project case-study detail pages (cards link out to live apps/stores as today).
- Adding new Learn articles (only the OWASP article exists; index just becomes scalable).
- Inventing impact metrics — hero stats use only truthful, countable figures (4+ yrs, current role, shipped-project count, live-app count).
- Server-side rendering changes (`ssr` stays false; theme toggle must work without SSR).
- i18n / Malay translation of the full UI (keep occasional natural bilingual long-tail only).
