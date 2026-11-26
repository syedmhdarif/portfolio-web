# AGENTS.md — portfolio-web

Single source of truth for every coding agent (Codex, Cursor, Copilot, Gemini CLI, Aider, Cline, Claude Code…), per the [agents.md](https://agents.md) standard.
`CLAUDE.md` imports this file; `GEMINI.md` is a symlink to it. Edit rules here only.

Personal portfolio of Syed Arif. Audience: hiring managers and clients in **Malaysia and Singapore**. SEO and AEO (answer-engine optimisation: JSON-LD, FAQPage, `llms.txt`) are first-class — keep that bar.

## Commands

```bash
npm ci              # install (npm only; package-lock.json is committed)
npm run dev         # local dev server
npm run typecheck   # react-router typegen && tsc
npm run build       # prerendered static build -> build/client
npm run deploy      # build + wrangler deploy
```

Done means `npm run typecheck` and `npm run build` both pass.

## Stack

- React Router 7.12 in framework mode, `ssr: false`, routes prerendered (`react-router.config.ts`). React 19, TypeScript strict, Vite 7.
- Tailwind v4 via `@tailwindcss/vite`. Tokens live in `app/app.css` (`@theme inline`); there is no tailwind config file.
- shadcn configured (`components.json`, new-york, lucide icons).
- Motion: Framer Motion primitives in `app/components/motion/`; GSAP + ScrollTrigger registered once in `app/lib/gsap.ts`.
- Hosting: Cloudflare Pages on push to `master` (`.github/workflows/cloudflare-pages.yml`) and GitHub Pages with `BASE_PATH=/portfolio-web`. See `DEPLOYMENT.md`.
- Path alias `~/*` -> `app/*`.

## Where things live

Read `CODEBASE_MAP.md` before exploring, and update it in the same change when you add or move a route, component folder or content file.

| Path | What |
|---|---|
| `app/routes.ts`, `app/routes/` | Route config + route modules (flat naming, e.g. `learn.$slug.tsx`) |
| `app/components/home/` | One file per home-page section (PascalCase, named export) |
| `app/components/` | Shared chrome: Header, Footer, MobileNav, Splash, ThemeToggle, SectionHeading… |
| `app/components/motion/` | Motion primitives; import from `../motion` (its `index.ts`), not deep paths |
| `app/components/ui/` | Design primitives (`primitives.tsx`) + shadcn / copied third-party components (kebab-case) |
| `app/content/` | All copy, typed (`site.ts`, `hero.ts`, `projects.ts`, `services.ts`, `background.ts`) |
| `public/` | `sitemap.xml`, `robots.txt`, `llms.txt`, `llms-full.txt`, OG images |

## Conventions

- **Copy lives in `app/content/`.** Components import data; they never hard-code prose.
- **Design primitives:** use `~/components/ui/primitives` — `buttonVariants({ variant })` on `<a>`/`<Link>`/`<button>` (or `Button`), `iconButtonVariants()` for round icon controls (always with `aria-label`), `Chip dot`, `Tag`, `Card`. Change a primitive's look in its `app.css` class (`.btn`, `.chip`, `.tag`, `.card`), not per call site. Add a new primitive only when a pattern repeats 3+ times.
- **Styling:** Tailwind utilities on the existing tokens (`bg-paper`, `text-ink`, `border-line`, `text-amber-text`). Light/dark is a token swap in `app.css`. Use the `--wrap-*`, `--dur-*`, `--ease-*` tokens; add no new palettes.
- **Third-party UI:** don't hand-edit generated files in `app/components/ui/` beyond tokens — wrap them in a PascalCase component in `app/components/`.
- **New route checklist:** add to `app/routes.ts` -> create `app/routes/<name>.tsx` with `meta()` (title, description, canonical, OG) and JSON-LD where relevant -> add to `prerender()` in `react-router.config.ts` -> add to `public/sitemap.xml` (and `llms.txt` if it is citable content).
- **Naming:** components `PascalCase.tsx`, hooks `useThing.ts`, content modules lowercase `.ts`.
- **Accessibility:** touch targets >= 44px on mobile, visible focus (`--focus`), every animation has a `prefers-reduced-motion` fallback.

## Animation

- Reuse the motion primitives (`Reveal`, `Stagger`/`StaggerItem`, `TextReveal`, `WordReveal`, `PageTransition`, `CountUp`, `Tilt3D`, `ParallaxLayer`, `useAfterSplash`) and the `MOTION` tokens in `motion/tokens.ts` before writing new animation.
- GSAP: import `gsap`, `ScrollTrigger`, `useGSAP` from `~/lib/gsap` only. Use `useGSAP()` with a scoped ref; gate effects with `gsap.matchMedia()` using `MOTION_OK` / `MOTION_REDUCED` / `FINE_POINTER`.
- The site prerenders: nothing may touch `window` at module scope.
- One engine per element. Scroll-linked/pinned -> GSAP; mount/hover/layout -> Framer Motion.
- Start scroll-triggered animation after the splash (`useAfterSplash`).

## Verifying UI

Check changes in a real browser against `npm run dev` at 360×800, 768×1024 and 1440×900, plus reduced-motion emulation. If your environment can't run a browser, say so — don't claim it was checked.

## Writing copy (MY + SG)

- **British English:** organise, optimise, colour, behaviour, centre, programme, licence (noun). Never "gotten", "vacation".
- **Local words:** CV (not resume), mobile, postcode, public holiday, fortnight, fresh grad.
- **Formats:** currency `RM`/`MYR` or `S$`/`SGD` (never assume USD); prose dates `18 May 2026`, metadata ISO `2026-05-18`; timezone MYT/SGT (UTC+8); phones `+60 12-345 6789`, `+65 9123 4567`.
- **Locality, when true:** Kuala Lumpur, Klang Valley, PJ, Cyberjaya, Penang, JB, Singapore. Add `addressCountry` and `areaServed` to schema. Domain terms where accurate: LHDN, EPF/KWSP, SOCSO/PERKESO, HRD Corp, MDEC, PEPPOL, CPF, IRAS, MAS.
- **Tone:** understated and concrete. Numbers over hype ("50k payslips in under 30s", not "10x rockstar"). Soft CTAs ("Free for a chat?"). No Manglish in `<title>`, meta, schema or H1.
- **SEO:** long-tail geo keywords (e.g. "React engineer Kuala Lumpur"); FAQPage answers grounded in Malaysian context; light bilingual terms only where natural.
- Respect Malaysia's multiracial audience; no casual religious idioms.

## Git

- Default branch `master`; work on a branch, open a PR.
- Commit only when asked. No AI attribution lines (`Co-Authored-By`, "Generated with …") in commits or PRs.
- Never commit `.env` or secrets.
