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
- `motion/` (framer-motion; barrel `index.ts`): `Reveal`, `Stagger`/`StaggerItem`, `TextReveal`, `PageTransition`, `CountUp`, `Tilt3D`, `useAfterSplash`, `MOTION` tokens (`tokens.ts`, mirrors CSS easing/duration).
- `ui/` (third-party shadcn/Aceternity): **not present yet**; no `components.json`. See AGENTS.md Component conventions.
- GSAP + ScrollTrigger: **being added**, not yet in `package.json`. Planned shared module `app/lib/gsap.ts`.

## Content (`app/content/`, typed data, all copy)

`site.ts` (identity: name, alternate names, URLs, experience years, JSON-LD inputs), `hero.ts` (stats, social pills), `projects.ts` (`PROJECTS`, `FEATURED_PROJECT`, `GRID_PROJECTS`, counts), `services.ts` (services, process, project stack), `background.ts` (experience, education, skills, marquee).

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
