# portfolio-web — agent guide

> Canonical agent instructions for this repo. `CLAUDE.md` and `GEMINI.md` route here. Keep edits in this file only.
>
> Read by: Claude Code (via `CLAUDE.md` import), Gemini CLI (via `GEMINI.md` symlink), Codex CLI / Cursor / Aider / Cline / Continue (via the `AGENTS.md` standard, see [agents.md](https://agents.md)).

Personal portfolio. React Router v7 + Tailwind v4 + Cloudflare Workers (Wrangler). Primary audience: hiring managers and clients in **Malaysia** and **Singapore**. SEO + AEO (AI Engine Optimisation) is a first-class concern — recent commits have shipped JSON-LD, FAQPage schema, and Malaysian-market keywords. Keep that bar.

Key files: [CODEBASE_MAP.md](CODEBASE_MAP.md), [app/root.tsx](app/root.tsx), [app/routes.ts](app/routes.ts), [app/app.css](app/app.css), [app/content/](app/content/), [react-router.config.ts](react-router.config.ts), [wrangler.toml](wrangler.toml).

## How agents discover this project

- **Rules:** `AGENTS.md` (this file, cross-tool source of truth) -> `CLAUDE.md` / `CLAUDE.MD` (`@AGENTS.md` import + Claude-only mechanics) and `GEMINI.md` (symlink to this file) -> `~/.claude/CLAUDE.md` (personal, layered on top). Never duplicate a rule outside this file.
- **Map:** [CODEBASE_MAP.md](CODEBASE_MAP.md) lists routes, components, content, styles, config and deploy. Read it before exploring; update it in the same change when you add or move a route, component folder or content file.
- **Skills:** installed globally in `~/.agents/skills/`, reached via `.claude/skills`. Hooks in `.claude/hooks/` (`locale-guard.py`, `typecheck.py`) run after Edit/Write.

## Stack at a glance (confirmed from package.json)

- React Router 7.12 (framework mode, `ssr: false`, prerendered routes), React 19, TypeScript strict, Vite 7, npm.
- Tailwind v4 via `@tailwindcss/vite`; tokens in `app/app.css` (`@theme inline`). No tailwind config file.
- Motion: `framer-motion` today (`app/components/motion/`). **GSAP + ScrollTrigger is being added**; see Animation conventions.
- Hosting: Cloudflare Pages (`wrangler.toml`, `build/client`) and GitHub Pages (`BASE_PATH=/portfolio-web`). Details in `CODEBASE_MAP.md` and `DEPLOYMENT.md`.
- Commands: `npm run dev`, `npm run build`, `npm run typecheck` (`react-router typegen && tsc`), `npm run deploy`.
- Path alias: `~/*` -> `app/*`.

## Component conventions

- **Location:** page sections in `app/components/home/` (one file per home section, PascalCase, named export). Shared chrome (`Header`, `Footer`, `MobileNav`, `Splash`, `ThemeToggle`, `SectionHeading`, `Monogram`, `icons.tsx`) sits directly in `app/components/`. Motion primitives live in `app/components/motion/` and are re-exported from its `index.ts`; import from `../motion`, not deep paths.
- **Third-party UI (shadcn / Aceternity / Magic UI):** there is **no `components.json` yet**. If shadcn is initialised, set aliases to `~/components`, `~/components/ui`, `~/lib/utils`, and put every generated or copied component in `app/components/ui/` (kebab-case filenames as the CLI emits). Do not hand-edit generated files beyond tokens; wrap them in a PascalCase component in `app/components/` instead. Map colours onto the existing `--paper / --ink / --amber` tokens, not new palettes.
- **Naming:** components PascalCase `.tsx`; hooks `useThing.ts`; content modules lowercase `.ts`; route files follow React Router flat routes (`learn.$slug.tsx`).
- **Copy lives in `app/content/`**, typed (`site.ts`, `hero.ts`, `projects.ts`, `services.ts`, `background.ts`). Components import data; they do not hard-code prose. Copy rules: Market & locale doctrine below.
- **Styling:** Tailwind utilities with the token colours (`bg-paper`, `text-ink`, `border-line`, `text-amber-text`); light/dark via token swap in `app.css`. Respect `--wrap-page/wide/content` widths and the `--dur-*` / `--ease-*` tokens.
- **Routes:** add to `app/routes.ts`, create `app/routes/<name>.tsx` with `meta()` (title, description, canonical, OG) and JSON-LD where relevant. New static routes must also be added to `prerender()` in `react-router.config.ts` and to `public/sitemap.xml` (and `llms.txt` when it is content worth citing).
- **Accessibility:** touch targets >= 44px on mobile, visible focus (`--focus`), no motion without a `prefers-reduced-motion` fallback.

## Animation conventions

- Existing primitives (`Reveal`, `Stagger`/`StaggerItem`, `TextReveal`, `PageTransition`, `CountUp`, `Tilt3D`, `useAfterSplash`) use Framer Motion and the `MOTION` tokens in `motion/tokens.ts`, which mirror the CSS tokens. Reuse them before writing new animation.
- **GSAP + ScrollTrigger (being added):** use `@gsap/react` `useGSAP()` with a scoped `scope` ref so cleanup is automatic. Register plugins once in a single module (`app/lib/gsap.ts`, mirroring taleem-connect `lib/gsap.ts`), never per component. Import gsap only in client components; the site prerenders, so nothing may touch `window` at module scope.
- Do not drive the same element with both Framer Motion and GSAP. Pick one per element; scroll-linked and pinned sequences go to GSAP, mount/hover/layout transitions stay in Framer Motion.
- Reuse the shared easing (`cubic-bezier(0.16, 1, 0.3, 1)` = `power4.out`-like) and durations from `MOTION`; start scroll-triggered animation after the splash via `useAfterSplash`.
- Every animation honours `prefers-reduced-motion` (use `gsap.matchMedia()`); call `ScrollTrigger.refresh()` after fonts/images change layout and kill triggers on unmount.

## Verification and git

- Run `npm run typecheck` and `npm run build` before claiming done. Verify UI in Chrome DevTools MCP against `npm run dev` at 360x800, 768x1024, 1440x900, plus `prefers-reduced-motion` emulation. Say plainly if the environment blocks it.
- Do not add `Co-Authored-By` or "Generated with Claude Code" lines to commits or PRs unless the user asks (matches lokal-gig and taleem-connect).
- Run `gh auth status` first: personal repo `syedmhdarif/portfolio-web` needs the `syedmhdarif` login.

## Prompt handling

Before starting any non-trivial task, invoke the `prompt-architect` skill to classify effort (SIMPLE vs HIGH-EFFORT). Skip for trivial mechanical asks (typo fixes, single-line edits, listing queries). When in doubt for design / copy / SEO / cross-cutting work, lean HIGH-EFFORT.

## Skill routing

Skills are installed via the `npx skills` CLI into `~/.agents/skills/` and made available to every supported agent (Claude Code, Codex, Cursor, Gemini CLI, GitHub Copilot, Windsurf, etc.). Project-level access for Claude Code is via the `.claude/skills` → `~/.claude/skills` symlink. Invoke the right specialist instead of doing the work yourself:

| Trigger | Skill |
|---|---|
| SEO audit, meta tags, ranking issues, Core Web Vitals, indexing, technical SEO | `seo-audit` |
| Hero copy, taglines, value propositions, FAQ answers, CTAs, About page prose | `copywriting` |
| Any non-trivial multi-file / cross-cutting task | `prompt-architect` |
| Building new pages, components, layouts, visual polish | `frontend-design` |
| TS / React 19 / Router patterns | `nextjs-react-typescript` (general React/TS guidance still applies despite the name) |
| Site structure, nav, URL patterns, user flows | `information-architecture` |
| Critique pass after a build | `design-review` |
| Hard bugs, perf regressions | `diagnose` |

**Optional installs** (require explicit permission for third-party global installs — run when ready):
- `coreyhaines31/marketingskills@ai-seo` — AEO / GEO for AI engines (matches the AEO commits in `git log`)
- `resciencelab/opc-skills@seo-geo` — geographic / local-SEO playbook

Install with: `npx skills add <pkg> -g -y`.

## Market & locale doctrine (MY + SG)

Default audience is Malaysia and Singapore. This shapes spelling, tone, structured data, and keyword strategy.

- **English variant:** British English. `organisation`, `optimise`, `colour`, `behaviour`, `centre`, `programme` (vs. computer `program`), `licence` (noun) / `license` (verb). Never `gotten`. Never `vacation` — use `leave` or `holiday`.
- **Locality signals:** name Kuala Lumpur, Klang Valley, Petaling Jaya (PJ), Cyberjaya, Penang, Johor Bahru (JB), Singapore, SEA in copy and JSON-LD when truthful. Add `addressCountry: "MY"` / `"SG"` and `areaServed` to relevant schema.
- **Currency:** `RM` or `MYR` (Malaysia), `S$` or `SGD` (Singapore). Always specify — never assume USD context.
- **Dates / time:** ISO (`2026-05-18`) in metadata; in prose use `18 May 2026` (DMY), not US `May 18, 2026`. Timezone is `MYT` / `SGT` (UTC+8).
- **Phone format:** `+60 12-345 6789` (MY) / `+65 9123 4567` (SG).
- **Regulators / industry shorthand** to use when accurate: LHDN, EPF/KWSP, SOCSO/PERKESO, HRDF/HRD Corp, MDEC, MSC Malaysia, Bank Negara, PEPPOL e-invoicing (Malaysia rollout), CPF (SG), IRAS (SG), MAS (SG).
- **Cultural sensitivity:** Malaysia is multiracial (Malay / Chinese / Indian / Orang Asli / East Malaysia indigenous). Avoid imagery, examples, or names that imply monoculture. Don't use religious idioms casually.

## Malaysia-friendly language playbook

The goal is **professional Malaysian English** — formal enough for hiring managers at MNCs, locally rooted enough that a KL-based recruiter feels you "get it." Reserve Manglish for clearly informal voice moments (e.g. a single line on an About page) — never in `<title>`, meta description, schema, or H1.

**Lexical swaps (use ↓ left, avoid ↑ right):**

| Use (MY/SG-friendly) | Avoid (US-coded) |
|---|---|
| CV | resume |
| mobile | cell phone |
| lift | elevator |
| flat / apartment | apartment (only) |
| public holiday | federal holiday |
| MCs (medical certs) | sick days |
| fortnight / two-weekly | bi-weekly |
| postcode | zip code |
| fresh grad | new grad / entry-level only |
| KIV (keep in view) | "park it" / "table it" |
| sort out | figure out |

**Tone:**
- Understated. Malaysian professional voice doesn't shout. Replace "crushing it / killer / rockstar / ninja / 10x" with concrete numbers.
- Plain over clever. "Built a payroll engine that processes 50k payslips in under 30s" beats "Reimagined payroll velocity."
- Hospitable, not aggressive. CTAs like *"Have a chat"* or *"Drop a line"* land better than *"Book a demo NOW."*

**Examples — before / after:**

<example>
<bad>Crushing it as a senior engineer based in Malaysia, building killer payroll products.</bad>
<good>Senior engineer in Kuala Lumpur. I build payroll and earned-wage products for the Malaysian and Singapore markets.</good>
</example>

<example>
<bad>Optimized our color scheme and behavior across the application.</bad>
<good>Optimised our colour scheme and behaviour across the application.</good>
</example>

<example>
<bad>Helped a fintech process payroll for thousands of employees.</bad>
<good>Helped a Malaysian fintech process EPF, SOCSO, PCB, and HRD Corp deductions for 12,000+ employees across KL, JB, and Penang.</good>
</example>

<example>
<bad>Schedule a call with me today!</bad>
<good>Free for a chat? Drop me an email — I'm in MYT (UTC+8).</good>
</example>

## Keyword strategy for MY/SG SEO

- **Geo-modifiers** (long-tail wins here — low volume, high intent): `senior frontend developer Malaysia`, `React engineer Kuala Lumpur`, `freelance fintech developer KL`, `payroll software engineer Singapore`, `remote engineer Klang Valley`.
- **Industry context** that's locally meaningful: `EWA Malaysia`, `e-invoicing PEPPOL`, `payroll compliance LHDN`, `KWSP API integration`, `MDEC pioneer status`, `MSC Malaysia`.
- **Bilingual long-tail** (don't go heavy, but a sprinkle helps for local search): `pemaju web Malaysia` (web developer), `jurutera perisian` (software engineer) — only where it reads naturally, never as keyword stuffing.
- **AEO / GEO angle:** structure answers in FAQPage and HowTo schema with the Malaysian context baked in. Example FAQ: *"What does an EWA-integrated payroll flow look like for a Malaysian SME?"* — AI engines (Perplexity, ChatGPT, Google AI Overviews) cite specific, locally-grounded answers far more than generic ones.

When writing or editing copy, route through the `copywriting` skill and pass it this market context. When auditing the site, route through `seo-audit` and tell it the primary markets are MY + SG so it weights `hreflang`, regional schema, and locality signals appropriately.
