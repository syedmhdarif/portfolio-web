# Information Architecture: Syed Mohamad Arif — Portfolio

> Companion to `DESIGN_BRIEF.md`. Stack: React Router v7 (SPA, `ssr:false`), prerendered routes, Cloudflare Workers. Audience: hiring managers & clients in MY + SG.

## Site Map

- **Home** `/` — the pitch (single-page, anchor sections)
  - `#about`
  - `#work` (Projects — featured LokalGig + grid)
  - `#services` (Services + Process + What you'll need + "Have a project in mind" CTA)
  - `#contact`
  - `#faq`
- **Background** `/background` — the credentials
  - `#experience`
  - `#education`
  - `#skills`
- **Learn** `/learn` — writing/learning hub (featured + categorised index)
  - **Article** `/learn/:slug` — e.g. `/learn/owasp-top-10`

Three real routes (unchanged count + one new): `/`, `/background`, `/learn`, `/learn/:slug`. Add `/background` to `react-router.config.ts` `prerender()`.

## Navigation Model

- **Primary navigation** (max 5 + logo): `[SA monogram]` · **Home** · **Work** · **Background** · **Learn** · **Contact**.
  - "Home", "Work", "Contact" are anchor links to `/#`, `/#work`, `/#contact` (work cross-page from other routes by linking to `/#work`).
  - "Background", "Learn" are route links.
  - Logo (SA monogram) always links to `/`.
- **Utility navigation** (right cluster): **"✦ Open to work · KL"** status chip (informational) + **theme toggle** (light/dark) + optional avatar/monogram. The reference's date stamp is dropped (not meaningful here).
- **Secondary navigation**:
  - Background page: in-page sticky sub-nav or scroll-spy is optional; section anchors are enough.
  - Learn index: category filter chips (client-side, scalable) — visual only until article count grows.
  - Article page: breadcrumb (`Learn / <title>`) + bottom "All topics" + "Back to portfolio".
- **Active state**: highlight current route; on Home, scroll-spy highlights the active section.
- **Mobile navigation**: hamburger → full-height drawer (rebuild of `MobileNav.tsx`) listing the 5 primary items + status chip + theme toggle. Focus trap, Escape to close, body scroll lock, focus restore. No bottom tab bar (content site, not app).
- **Sticky behavior**: header is sticky/condenses on scroll (shrinks padding, gains hairline border / subtle backdrop) — a single persistent bar, replacing the old floating centred pill.

## Content Hierarchy

### Home `/`
1. **Hero** — name as oversized type + role/positioning line + amber portrait card + stat blocks (years/tenure, projects/breadth) + social pills + signature. *First impression; answers "who, where, available?".*
2. **About** — short editorial paragraph(s): what I do, where (KL/MY + SG), how I work. *Context before proof.*
3. **Work (Projects)** — LokalGig featured, then grid (Hikayat Daily Global, Hikayat Diri mobile/web, CitySage, Interactive Room). *The proof; the thing recruiters/clients came to see.*
4. **Services + Process + What you'll need + CTA** — what I offer (Web, Mobile), how I work (Design→Dev→Production), what infra a project needs, then "Have a project in mind?". *Converts client visitors.*
5. **Contact** — email, phone/WhatsApp, location, socials. *The action.*
6. **FAQ** — 7 Q&A from `HOMEPAGE_FAQ` (also FAQPage JSON-LD). *AEO + objection handling, below the fold.*

### Background `/background`
1. **Experience** — Paywatch (current) → Zonar → Accenture, reverse-chronological timeline. *Strongest CV signal first.*
2. **Education** — B.IT IIUM (2017–2020), Foundation CFS IIUM PJ (2015–2017).
3. **Skills** — Languages / Frameworks / Tools / Databases (grid + optional marquee strip).
- Page intro line + link back to Home `#contact`.

### Learn `/learn`
1. **Featured article** — most recent/important (currently OWASP Top 10), large editorial card.
2. **Category filter chips** — visual scaffolding for growth.
3. **Topic grid** — remaining articles; "more coming" placeholder.

### Article `/learn/:slug`
1. Breadcrumb + title + meta (category, read time, dates).
2. Article body (existing typed content components, restyled).
3. FAQ (if present) + bottom nav (All topics · Portfolio).

## User Flows

### Flow A — Hiring manager evaluating a candidate
1. Lands on `/` (likely from LinkedIn/Google).
2. Hero communicates name, role, KL location, "open to work" in <3s.
3. Skims **Work** → clicks a live project (external).
4. Wants depth → nav **Background** → scans Experience timeline + Skills.
5. Converts → nav/anchor **Contact** → email / LinkedIn / WhatsApp.

### Flow B — Client with a project
1. Lands on `/` (Google: "react native developer Malaysia" / referral).
2. Hero + About establish credibility.
3. Jumps to **Services** → reads offer, Process, "What you'll need".
4. Reassurance → **FAQ** (cost, iOS+Android, SME-friendly).
5. Converts → "Have a project in mind?" CTA → **Contact** (WhatsApp/email).

### Flow C — Peer / recruiter reading content
1. Lands on `/learn` or an article (SEO).
2. Reads article → bottom nav → **All topics** or **Portfolio**.
3. Optional: nav to Home/Background.

### Flow D — Returning / dark-mode user
1. Toggles theme → persists across routes and reloads (localStorage, no flash).

## Naming Conventions

| Concept | Label in UI | Notes |
| --- | --- | --- |
| Projects section | **Work** | Punchier than "Projects" in nav; section heading can read "Selected Work". |
| Experience/Education/Skills page | **Background** | Matches user's term; "background space". |
| Writing/learning hub | **Learn** | Keep existing route + term ("Learning Space" as page title is fine). |
| Availability | **"Open to work"** | British/neutral; pairs with "· KL". |
| Contact CTA | **"Have a chat" / "Get in touch"** | Hospitable MY tone (per AGENTS.md), not "Book a demo". |
| Services intro | **"Services"** nav / "What I do" heading | — |
| Infra section | **"What you'll need"** | Keep existing label (already SEO-indexed copy). |

## Component Reuse Map

| Component | Used on | Behavior differences |
| --- | --- | --- |
| `RootLayout` (header + footer + page-transition wrapper + theme provider) | All routes | — |
| `Header` / nav | All routes | On Home: anchor links + scroll-spy. On other routes: "Home/Work/Contact" link to `/#…`. |
| `MobileNav` drawer | All routes | Same items as header. |
| `ThemeToggle` | All routes (in header + drawer) | — |
| `Footer` | All routes | Article page may add minimal variant. |
| `SectionHeading` | Home, Background, Learn | — |
| `Reveal` / `Stagger` / `PageTransition` motion primitives | All routes | Disabled under reduced-motion. |
| `ProjectCard` | Home (Work) | Featured vs. grid variant. |
| `StatBlock` | Home hero; reusable on Background | Count-up in view. |
| `SkillsGrid` / marquee | Background (could tease on Home later) | — |

## Content Growth Plan

- **Projects (Work)**: grid scales; if it exceeds ~6–8, introduce "featured" vs. "all" or a `/work` index later. Drive from typed data in `app/content/`.
- **Learn**: built to scale now — featured + category chips + grid. When articles grow: real filtering by category, pagination/archive, search. Each article = entry in the `articles` registry + a prerender path.
- **Experience/Skills**: append to typed data; timeline + grid absorb growth without layout change.
- **Background page** keeps Home lean as credentials accumulate.

## URL Strategy

- **Pattern**: flat, human, lowercase-hyphenated. Top-level pages: `/background`, `/learn`. Content: `/learn/<slug>`.
- **Home anchors**: `/#about`, `/#work`, `/#services`, `/#contact`, `/#faq`. Cross-route links use absolute `/#work` form.
- **Dynamic segments**: `:slug` for articles (existing `learn.$slug.tsx`).
- **Query parameters**: none required now; reserve `?category=` for Learn filtering when it ships.
- **Prerender**: add `/background` to the prerender list alongside `/`, `/learn`, `/learn/owasp-top-10`.
- **Redirects**: none needed — `/` and `/learn` paths unchanged; only addition is `/background` (old home had these as `#experience/#education/#skills` anchors — optionally keep anchor IDs as no-ops or 1-line client redirect to `/background#…` if old links exist; low priority).
