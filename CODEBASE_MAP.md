# Codebase map

Snapshot of the real code (2026-10-06). Rules live in [AGENTS.md](AGENTS.md); update this file in the same change when structure moves.

## Stack

React Router 7.12 (framework mode, `ssr: false`, prerendered) + React 19 + TypeScript strict + Vite 7 + Tailwind v4 (`@tailwindcss/vite`) + framer-motion. npm. Alias `~/*` -> `app/*` (`tsconfig.json`, `vite-tsconfig-paths`).

Scripts: `dev` (react-router dev), `build`, `start` (wrangler dev), `deploy` (build + wrangler deploy), `typecheck` (typegen + tsc).

## Routes (`app/routes.ts`)

| URL | File | Notes |
|---|---|---|
| `/` | `app/routes/_index.tsx` | Composes `components/home/*` (Hero, About, Work, Services, Contact, Faq); `meta()` + JSON-LD (incl. FAQPage) |
| `/background` | `app/routes/background.tsx` | Experience, education, skills from `content/background.ts` |
| `/learn` | `app/routes/learn.tsx` | Learning index |
| `/learn/:slug` | `app/routes/learn.$slug.tsx` | Article page; source markdown in `app/documents/OWASP-Top10-learn1.md` |

Prerendered paths (`react-router.config.ts`): `/`, `/background`, `/learn`, `/learn/owasp-top-10`. Add new static routes there too. `basename` comes from `BASE_PATH`.

## App shell

- `app/root.tsx` (230 lines): `links()` (favicons, manifest, Google Fonts Archivo/Inter/Sacramento), no-flash theme script (`data-theme`, localStorage `theme`), pre-paint splash flag (`<html data-splash>`), site JSON-LD, renders `<Splash/>`, `Header`, `<Outlet/>`, `Footer`, `MobileNav`.
- `app/entry.server.tsx`: server entry. `app/welcome/`: template leftover (logos, `welcome.tsx`).
- `app/types/images.d.ts`: image module typings.

## Components (`app/components/`)

- Shell: `Header.tsx`, `Footer.tsx`, `MobileNav.tsx`, `Splash.tsx`, `ThemeToggle.tsx`, `Monogram.tsx`, `SectionHeading.tsx`, `icons.tsx`, `nav-items.ts` (`NAV_ITEMS`, `HOME_SECTION_IDS` for scroll-spy).
- `home/`: `Hero`, `About`, `Work`, `Services`, `Contact`, `Faq` (one per home section; ids match `HOME_SECTION_IDS`).
- `motion/` (barrel `index.ts`). Framer Motion: `Reveal`, `Stagger`/`StaggerItem`, `TextReveal`, `PageTransition`, `CountUp`, `Tilt3D`, `useAfterSplash`, `MOTION` tokens (`tokens.ts`, mirrors CSS easing/duration). GSAP: `ParallaxLayer` (scrubbed `yPercent`, 8-12, decorative layers only: Services dark CTA, Contact signature email), `WordReveal` (manual word split, staggered rise, `start: "top 85%"`, once; used for every `SectionHeading` h2).
- `ui/` (third-party shadcn/Aceternity): `hero-parallax.tsx` (hand-ported Aceternity Hero Parallax, `motion/react`, `products {title, link, thumbnail}`, rows = ceil(n/3)). `components.json` exists (new-york, css `app/app.css`, aliases `~/components`, `~/components/ui`, `~/lib/utils`, `~/lib`); `cn()` in `app/lib/utils.ts`.
- `ui/tooltip.tsx`: shadcn-style Radix Tooltip mapped to `--ink/--paper` (keyframe `.tooltip-pop` in `app.css`). Used on the Hero card buttons.

## Animation

- **Engines:** Framer Motion for mount/hover/layout; GSAP + ScrollTrigger for scroll-linked and choreographed sequences. One engine per element, never both on the same node (a parent/child split is fine: `Reveal` owns opacity on a wrapper while `ParallaxLayer` owns `yPercent` on the child).
- **Registration:** `app/lib/gsap.ts` is the only place plugins are registered (guarded by `typeof window`; the site prerenders). Exports `gsap`, `ScrollTrigger`, `useGSAP`, media strings `MOTION_OK` / `MOTION_REDUCED` / `FINE_POINTER`, and `refreshTriggersAfterFonts()` (one `ScrollTrigger.refresh()` after `document.fonts.ready`).
- **Pattern:** `useGSAP(fn, { scope, dependencies: [ready], revertOnUpdate: true })` with `gsap.matchMedia()` inside. The `MOTION_REDUCED` branch sets the final visible state; the `MOTION_OK` branch sets the hidden state and plays once `useAfterSplash()` is true. Pointer-driven effects sit under `MOTION_OK and FINE_POINTER` (desktop, hover, fine pointer).
- **Hero card (`home/Hero.tsx` -> `PortraitCard`):** one GSAP timeline gated on the splash: card fade/scale, amber notch shape 0.94->1, SVG mask wipe (`[data-hero-wipe]` rect height 0->380, 0.9s expo.out) reveals the photo inside the crisp `#heroShape` clipPath, gradient scrim fades in, script name rises with blur 6->0, buttons pop in. Desktop only: scroll parallax (`y: -60`, scrub), `gsap.quickTo` pointer drift of the portrait (+-6px), magnetic GitHub / arrow buttons (40px reach; the arrow rotates 45deg on hover via CSS). `.hero-card` is `opacity: 0` in CSS until the timeline runs (reduced motion gets `opacity: 1`). `Tilt3D` (Framer) stays on its own wrapper. Buttons are `min-w-11` so they stay >=44px on phones.

## Content (`app/content/`, typed data, all copy)

`site.ts` (identity: name, alternate names, URLs, experience years, JSON-LD inputs), `hero.ts` (stats, social pills), `projects.ts` (`PROJECTS` = 8 projects incl. Maahad Tahfiz Abu Bakar, Halim Suhor Architect, LokalGig Sitelog; `FEATURED_PROJECT`, `GRID_PROJECTS`, counts). Work section (`home/Work.tsx`): md+ renders `WorkParallax` (HeroParallax over all PROJECTS, every card `target=_blank`); below md renders the featured card + single-column card list. Thumbnails: `public/projects/*.jpeg` (1280x800 captures) plus `public/*-thumbnail.png` and `app/assets/`, `services.ts` (services, process, project stack), `background.ts` (experience, education, skills, marquee).

## Styles (`app/app.css`, 369 lines)

Single stylesheet, "Editorial Bold": cream/ink/amber, amber is the only chroma. Sections: themed variables (`--paper*`, `--ink*`, `--line*`, `--amber*`, `--inverse*`, `--focus`) under `:root`, `[data-theme="dark"]` and a `prefers-color-scheme` block; `@theme inline` maps them to Tailwind colours; `@theme` holds fonts, `--dur-*`, `--ease-*`, `--wrap-page/wide/content`. Utility classes: `.wrap`, `.section`, `.eyebrow`, `.display`, `.signature`, `.card`, `.tag`, `.btn(-primary/-amber/-ghost)`, `.chip`, `.link-underline`, `.marquee`, `.wave-ring`, `.glow-card`; reduced-motion overrides at the end. Design spec: `.design/portfolio-revamp/`.

## Static assets

- `app/assets/`: imported images (profile, project logos/screenshots).
- `public/`: favicons, `og-image.png`, project thumbnails, `site.webmanifest`, `robots.txt`, `sitemap.xml`, `llms.txt`, `llms-full.txt`, `CNAME`. Keep sitemap and llms files in step with routes.

## Config and deploy

- `vite.config.ts`: cloudflareDevProxy, tailwind, reactRouter, tsconfigPaths; `base` from `BASE_PATH`.
- `wrangler.toml`: worker `syed-arif-portfolio-web-worker`, `nodejs_compat`, `pages_build_output_dir = ./build/client`, security headers on `/*`, immutable cache on `/assets/*`.
- `.github/workflows/cloudflare-pages.yml`: push to `master` -> `npm ci`, `npm run build`, Cloudflare Pages project `syed-arif-portfolio` from `build/client` (needs `CLOUDFLARE_API_TOKEN`, `CLOUDFLARE_ACCOUNT_ID`).
- `.github/workflows/github-pages.yml`: push to `master` -> GitHub Pages with `BASE_PATH=/portfolio-web`.
- `Dockerfile`, `.dockerignore`: container build. `DEPLOYMENT.md`: deploy guide.

## Agent setup

`.claude/settings.json` hooks (PostToolUse on Edit/Write): `hooks/locale-guard.py`, `hooks/typecheck.py`. `.claude/skills` -> global skills. `docs/SEO_GEO_AEO_AUDIT_AND_ENHANCEMENT_PLAN.md`: SEO/AEO plan.
