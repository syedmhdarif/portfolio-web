# SEO, GEO, and AEO Audit and Enhancement Plan

Audited: 2026-05-13  
Site: `https://syedmohamadarif.site`  
Project: `portfolio-web`  
Framework: React Router 7, prerendered static output, Cloudflare deployment target

## Executive Verdict

The site is ahead of most personal portfolios on technical discoverability. It already has route-level titles, descriptions, canonical URLs, Open Graph metadata, JSON-LD, sitemap, robots.txt, and `llms.txt` / `llms-full.txt`. The foundation is strong.

The main weakness is not missing SEO plumbing. The main weakness is trust calibration. Some metadata says more than the visible page proves, some structured data is global when it should be route-specific, and the content strategy is still thin for the commercial queries the homepage targets. For SEO, GEO, and AEO, the next gains should come from making the site more factual, more modular, more answerable, and more evidence-backed.

Priority verdict: fix entity trust and structured-data hygiene first, then build focused service and proof pages, then optimize performance and measurement.

## Audit Scope

Reviewed files:

- `app/root.tsx`
- `app/routes/_index.tsx`
- `app/routes/learn.tsx`
- `app/routes/learn.$slug.tsx`
- `app/components/Portfolio.tsx`
- `app/app.css`
- `public/robots.txt`
- `public/sitemap.xml`
- `public/llms.txt`
- `public/llms-full.txt`
- `public/site.webmanifest`
- built output under `build/client/`

Validation performed:

- `npm run build` passes.
- Build prerenders `/`, `/learn`, `/learn/owasp-top-10`, and SPA fallback.
- Built asset sizes inspected.
- Rendered HTML head inspected for route metadata and JSON-LD output.

Design-plan status:

- No `.design/`, `DESIGN_BRIEF.md`, or design plan file exists in the repo.
- Current UI direction appears to be a dark glassmorphism portfolio with purple, pink, and cyan accents.
- Recommendation: add a design brief before major content expansion so new service pages do not drift visually or become generic SEO landing pages.

## External Guidance Used

- Google Search Essentials: create helpful, people-first content, use crawlable links, and use words people use in prominent places.  
  https://developers.google.com/search/docs/essentials
- Google SEO Starter Guide: SEO should help search engines understand content and help users decide whether to visit.  
  https://developers.google.com/search/docs/fundamentals/seo-starter-guide
- Google helpful content guidance: demonstrate first-hand expertise, trust, clear authorship, and people-first purpose.  
  https://developers.google.com/search/docs/fundamentals/creating-helpful-content
- Google title link guidance: each page needs concise, descriptive titles aligned with prominent page content.  
  https://developers.google.com/search/docs/advanced/appearance/good-titles-snippets
- Google ProfilePage structured data: profile markup should focus on a single person or organization and provide truthful creator/entity context.  
  https://developers.google.com/search/docs/appearance/structured-data/profile-page
- Google FAQ structured data: FAQ content must be visible on the page; FAQ rich results are restricted mainly to well-known government or health sites.  
  https://developers.google.com/search/docs/appearance/structured-data/faqpage
- `llms.txt` proposal: provide concise LLM-friendly background plus links to detailed markdown files.  
  https://llmstxt.org/

## Current Strengths

1. Crawlability foundation is good.
   - `robots.txt` allows general and AI crawlers.
   - `sitemap.xml` lists the main portfolio and learning pages.
   - Build output is prerendered static HTML, not client-only blank shells.

2. Route metadata exists.
   - Homepage has targeted title, description, canonical, OG, and Twitter tags.
   - `/learn` and `/learn/owasp-top-10` have their own route metadata.

3. Entity markup is already present.
   - `Person`, `WebSite`, `ProfilePage`, `ProfessionalService`, `MobileApplication`, `BreadcrumbList`, `CollectionPage`, and `TechArticle` JSON-LD are used.

4. AEO/GEO groundwork exists.
   - `llms.txt` and `llms-full.txt` summarize the person, services, projects, and contact information in markdown.
   - FAQ-style answers exist in structured data and in `llms-full.txt`.

5. Internal linking is clear.
   - Homepage links to Learn.
   - Learn index links to the OWASP article.
   - Article links back to Learn and Portfolio.

6. The service intent is visible.
   - The homepage has a Services section for website and mobile app development.
   - Contact methods are crawlable links: email, phone, WhatsApp, LinkedIn, GitHub.

## Critical Findings

### P0 - Structured FAQ markup is not matched by visible homepage FAQ content

Evidence:

- Homepage/global JSON-LD includes `FAQPage` in `app/root.tsx`.
- The visible homepage does not render a matching FAQ section.
- Because this JSON-LD is in `Layout`, it appears on every route, including `/learn` and article pages.

Why it matters:

- Google FAQ guidance says FAQ content must be visible on the source page.
- Global FAQ markup can confuse page intent. The OWASP article ends up with both its article FAQ and the homepage service FAQ in the same rendered document.
- AEO/GEO answer engines may cite answers that users cannot verify on the visible page.

Plan:

- Move homepage FAQ JSON-LD out of `app/root.tsx` and into the homepage route/component only.
- Add a visible FAQ section to the homepage if keeping homepage FAQ schema.
- Do not inject homepage FAQ schema on `/learn` or article pages.
- Keep article-specific FAQ schema only on article pages where the Q&A is visible or add a visible FAQ block to the article.

Files:

- `app/root.tsx`
- `app/routes/_index.tsx`
- `app/components/Portfolio.tsx`
- `app/routes/learn.$slug.tsx`

Acceptance criteria:

- `/` contains only homepage FAQ JSON-LD and matching visible FAQ content.
- `/learn` contains no homepage FAQ JSON-LD.
- `/learn/owasp-top-10` contains only article-relevant FAQ JSON-LD and matching visible FAQ content.

### P0 - Experience claims are inconsistent across visible page, metadata, and LLM files

Evidence:

- Visible homepage says `4+ Years` and `4+ years of experience`.
- Metadata, JSON-LD, `llms.txt`, and `llms-full.txt` say `5 years`.

Why it matters:

- Entity trust depends on consistency.
- Answer engines may extract `5 years`, while human users see `4+ years`.
- This weakens perceived accuracy and can look like keyword-driven metadata rather than reliable authorship.

Plan:

- Decide the correct experience claim.
- Store it in one shared content source or constant.
- Update homepage visible content, JSON-LD, meta descriptions, and LLM files together.

Files:

- `app/components/Portfolio.tsx`
- `app/root.tsx`
- `app/routes/_index.tsx`
- `public/llms.txt`
- `public/llms-full.txt`

Acceptance criteria:

- A repo-wide search for `4+ years`, `4+ Years`, `5 years`, and `5+ years` shows intentional, consistent usage.

### P0 - Dynamic `dateModified` creates artificial freshness

Evidence:

- `app/root.tsx` sets `dateModified` with `new Date().toISOString().split('T')[0]`.

Why it matters:

- Google helpful content guidance explicitly warns against changing dates to appear fresh when content has not substantially changed.
- Static builds will stamp the current build date, not the actual content modification date.
- This can hurt trust for both search and AEO.

Plan:

- Replace dynamic `dateModified` with a manually maintained date from a content constant.
- Update it only when profile/service content substantially changes.
- Keep article `dateModified` per article.

Files:

- `app/root.tsx`
- possible new `app/content/site.ts`

Acceptance criteria:

- `dateModified` is deterministic and reviewable in git.
- Build date no longer changes structured data automatically.

### P0 - Global site JSON-LD is too broad for every route

Evidence:

- `app/root.tsx` injects `Person`, `WebSite`, `MobileApplication`, `ProfilePage`, `ProfessionalService`, `BreadcrumbList`, and `FAQPage` into every route.
- `/learn` also injects `CollectionPage`.
- `/learn/owasp-top-10` also injects `TechArticle`, `BreadcrumbList`, and `FAQPage`.

Why it matters:

- The root entity graph is useful, but not every node should be present on every page.
- Route-specific pages should have route-specific main entities.
- Over-broad schema can dilute page intent.

Plan:

- Keep global graph small: `Person` and `WebSite`.
- Move `ProfilePage`, `ProfessionalService`, service offers, homepage breadcrumbs, and homepage FAQ to the homepage route.
- Keep `CollectionPage` and collection breadcrumb only on `/learn`.
- Keep `TechArticle`, article breadcrumb, and article FAQ only on article pages.

Files:

- `app/root.tsx`
- `app/routes/_index.tsx`
- `app/routes/learn.tsx`
- `app/routes/learn.$slug.tsx`

Acceptance criteria:

- Each route has a single clear `mainEntity`.
- Rich Results Test / Schema Markup Validator shows no duplicate or irrelevant page entities.

## High-Impact Enhancements

### P1 - Create dedicated commercial service pages

Current state:

- The homepage targets high-intent commercial phrases like `freelance mobile app developer Malaysia`.
- Services are currently sections on a single page, not deep landing pages.

Why it matters:

- A homepage can rank for brand and broad portfolio queries, but dedicated pages are better for specific commercial intent.
- Service pages give answer engines precise, citable pages for "Can Syed build X?" and "Who builds React Native apps in Malaysia?"

Recommended pages:

- `/services/mobile-app-development-malaysia`
- `/services/react-native-developer-malaysia`
- `/services/web-app-development-malaysia`
- `/services/ui-ux-to-development`

Each page should include:

- H1 matching the service intent.
- Who it is for.
- Outcomes and deliverables.
- Process.
- Stack.
- Proof: relevant projects and work history.
- Pricing model or "starting from" guidance if accurate.
- FAQ visible on page.
- `Service` JSON-LD and `BreadcrumbList`.
- Strong CTA to email / WhatsApp.

Acceptance criteria:

- Sitemap includes service pages.
- `llms.txt` links to service pages.
- Each service page has unique title, description, canonical, OG tags, and structured data.
- No duplicated thin copy.

### P1 - Add proof-first project case studies

Current state:

- Project cards are good for scanning but light for trust.
- Projects do not have individual detail pages.

Recommended pages:

- `/projects/lokalgig`
- `/projects/hikayat-daily-global`
- `/projects/hikayat-diri`
- `/projects/interactive-room`

Each case study should include:

- Problem.
- Role.
- Constraints.
- Stack.
- Key features.
- Architecture notes.
- Screenshots.
- Outcome or learning.
- External link.
- `SoftwareApplication` / `WebApplication` JSON-LD when appropriate.

Why it matters:

- Google helpful content guidance emphasizes first-hand expertise and original information.
- GEO and AEO systems need evidence-rich, concise pages that can be cited directly.

Acceptance criteria:

- Homepage project cards link to case studies.
- `llms-full.txt` summarizes each case study with links.
- Case studies include real screenshots, not only logos.

### P1 - Add visible homepage FAQ

Recommended questions:

- Who is Syed Mohamad Arif?
- What mobile app development services do you offer in Malaysia?
- Do you build both iOS and Android apps?
- What stack do you use for React Native projects?
- How much does a mobile app cost in Malaysia?
- Do you work with Malaysian SMEs and startups?
- How can I contact you?

Rules:

- Keep answers factual and visible.
- Avoid stuffing location phrases into every answer.
- Use the same answers in visible UI, JSON-LD, and `llms-full.txt`.

### P1 - Make the homepage H1 more search-aligned

Current H1:

- `Hi, I'm Syed Arif`

Issue:

- The page title targets `Freelance Mobile App Developer Malaysia`, but the visible H1 is brand-first and does not carry the commercial/entity intent.

Recommendation:

- Change H1 to one of:
  - `Syed Mohamad Arif, Mobile App Developer in Malaysia`
  - `Freelance Mobile App and Web Developer in Malaysia`
  - `React Native and Web Developer in Kuala Lumpur`

Keep a warmer intro in supporting text.

Acceptance criteria:

- H1, title, OG title, and first paragraph reinforce the same entity and service intent.
- The hero still feels like a portfolio, not a keyword page.

### P1 - Remove or reduce `meta keywords`

Current state:

- `app/root.tsx` renders a long `meta name="keywords"` on every route.

Issue:

- Modern Google search does not rely on meta keywords, and the long list reads as legacy keyword stuffing.
- It also applies commercial portfolio keywords to the OWASP article.

Recommendation:

- Remove global `meta keywords`.
- If keeping keywords for non-Google crawlers, make them short and route-specific.
- Prefer visible headings, link text, page copy, and structured data.

Acceptance criteria:

- No global commercial keyword list on article pages.
- Route content naturally contains the target terms.

### P1 - Add bilingual Malay/English support intentionally

Current state:

- Site language is `en`, but keywords include Bahasa Malaysia terms.
- `og:locale:alternate` includes `ms_MY`, but there is no Malay route.

Recommendation:

- Either remove Malay locale hints for now or add real Malay pages:
  - `/ms`
  - `/ms/services/pembangun-aplikasi-mudah-alih-malaysia`
  - `/ms/services/pembangun-web-malaysia`

If adding Malay pages:

- Use `hreflang` alternates.
- Add Malay sitemap entries.
- Translate human copy, not just metadata.

Acceptance criteria:

- Locale hints match real localized content.
- Malay pages answer Malaysia-specific hiring questions naturally.

## GEO and AEO Enhancements

### P1 - Create answer blocks on key pages

Pattern:

```md
Question: Who is Syed Mohamad Arif?
Answer: Syed Mohamad Arif is a mobile app and web developer based in Kuala Lumpur, Malaysia. He builds React Native, React, and TypeScript applications for Malaysian and international clients.
```

Implementation:

- Add concise Q&A sections to homepage, service pages, and case studies.
- Use visible HTML first.
- Mirror key answers in `llms-full.txt`.
- Use FAQ JSON-LD only when the visible page has matching Q&A.

### P1 - Upgrade `llms.txt` into a stronger AI navigation layer

Current state:

- Good concise summary.
- Links only to home, Learn, OWASP article, full details, sitemap.

Enhancement:

- Add service page links after they exist.
- Add project case study links after they exist.
- Add "Best source for..." routing:
  - Best source for hiring: service page.
  - Best source for portfolio proof: project case studies.
  - Best source for security writing: OWASP article.
- Add last updated date manually.

Acceptance criteria:

- `llms.txt` is short and navigational.
- `llms-full.txt` is comprehensive and factual.
- Both are updated in the same PR as new pages.

### P2 - Add markdown mirrors for article and service content

Based on the `llms.txt` proposal, markdown equivalents can make dense content easier for LLMs to parse.

Recommended paths:

- `/learn/owasp-top-10.md`
- `/services/mobile-app-development-malaysia.md`
- `/projects/lokalgig.md`

Acceptance criteria:

- Markdown mirrors contain the same factual content as visible pages.
- `llms.txt` links to the markdown versions where useful.

### P2 - Add "Who, How, Why" author disclosure for learning articles

For learning content:

- Who wrote it: Syed Mohamad Arif.
- How it was created: based on study notes and cited sources.
- Why it exists: to teach and document learning.
- Review/update date.

Why:

- Helps E-E-A-T.
- Helps AI answer engines assess source reliability.

## Technical SEO Enhancements

### P1 - Optimize large images

Evidence:

- `app/assets/syedArif.png`: about 1.2 MB.
- `public/og-image.png`: about 1.2 MB.
- Build output keeps `syedArif` around 1.2 MB.

Plan:

- Convert profile image to WebP/AVIF with responsive sizes.
- Keep a 1200x630 OG image, but compress it aggressively.
- Add explicit `width` and `height` attributes to images.
- Use `fetchpriority="high"` for the profile image only if it remains the LCP image.
- Lazy-load below-the-fold project images, already partly done.

Acceptance criteria:

- Profile image under 200 KB for the rendered size.
- OG image ideally under 300 KB.
- Lighthouse image warnings reduced.

### P1 - Add analytics and conversion measurement

Current state:

- No obvious analytics script in the app.

Recommendation:

- Add privacy-conscious analytics such as Cloudflare Web Analytics, Plausible, or Google Analytics.
- Track:
  - Contact CTA clicks.
  - Email clicks.
  - WhatsApp clicks.
  - LinkedIn/GitHub outbound clicks.
  - Service page views.
  - Project case study views.

Acceptance criteria:

- Tracking does not block rendering.
- No personal data is collected unnecessarily.
- Conversion events are documented.

### P1 - Validate structured data in CI or with a script

Plan:

- Add a script that builds the site and extracts JSON-LD per route.
- Check JSON parses.
- Check route-specific forbidden entities:
  - `/learn` must not include homepage FAQ.
  - article pages must not include homepage FAQ.
- Optional: add Schema Markup Validator manual checklist before deploy.

Acceptance criteria:

- `npm run build` plus metadata validation catches duplicated FAQ or malformed JSON-LD.

### P2 - Improve PWA manifest consistency

Current state:

- Manifest uses white/blue colors while the site is dark purple/cyan.

Plan:

- Align `background_color` and `theme_color` with current design tokens.
- Add 192x192 and 512x512 icons.
- Consider maskable icons.

Acceptance criteria:

- Manifest theme matches UI.
- Browser install metadata is complete.

### P2 - Add security and trust headers at deployment

Recommended headers:

- `Content-Security-Policy`
- `X-Content-Type-Options: nosniff`
- `Referrer-Policy`
- `Permissions-Policy`
- long cache headers for hashed assets

Why:

- Security posture supports trust, especially because the site presents security learning content.

Files:

- `wrangler.toml`
- Cloudflare settings

## Content Strategy Plan

### Target Query Groups

Primary commercial:

- mobile app developer Malaysia
- freelance mobile app developer Malaysia
- React Native developer Malaysia
- app developer Kuala Lumpur
- web app developer Malaysia

Secondary proof/entity:

- Syed Mohamad Arif
- syedmhdarif
- Hikayat Daily Global creator
- LokalGig creator
- Hikayat Diri app

Learning authority:

- OWASP Top 10 key takeaways
- Broken Access Control explanation
- React Native security notes
- Supabase auth security notes

### Recommended Content Roadmap

Phase 1: Trust cleanup

- Fix inconsistent years.
- Remove dynamic modified date.
- Route-scope JSON-LD.
- Add visible homepage FAQ.
- Remove or route-scope meta keywords.

Phase 2: Commercial expansion

- Add mobile app service page.
- Add React Native service page.
- Add web app service page.
- Add homepage links to service pages.
- Update sitemap and `llms.txt`.

Phase 3: Proof expansion

- Add LokalGig case study.
- Add Hikayat Daily Global case study.
- Add Hikayat Diri case study.
- Add project screenshots and measurable outcomes where truthful.

Phase 4: Authority expansion

- Add 3 to 5 learning articles connected to actual expertise:
  - React Native release checklist for Malaysia clients.
  - Expo EAS vs Codemagic.
  - Supabase auth patterns for web apps.
  - Broken Access Control examples in React/Supabase.
  - Mobile app MVP scope checklist.

Phase 5: Measurement and iteration

- Add analytics.
- Monitor Search Console queries.
- Refresh titles/meta based on impressions and CTR.
- Add internal links from articles to service pages only where contextually useful.

## Design and UX Recommendations

Since no design plan exists, create one before page expansion:

- Define the design principle: dark technical portfolio, proof-first, polished but not decorative-heavy.
- Standardize card radius and avoid excessive nested glass cards on long service pages.
- Keep service pages denser and more work-focused than the current homepage hero.
- Add real project screenshots for proof pages.
- Keep CTA persistent but not intrusive.
- Ensure all mobile touch targets stay at least 44x44.
- Add reduced-motion handling for floating and pulse animations.

Immediate UI improvements:

- Make the H1 more descriptive.
- Add a small trust row below hero: location, current role, primary stack, live apps.
- Add visible FAQ near the contact section.
- Add service detail links from service cards.
- Add "Selected proof" links from service cards to relevant projects.

## Implementation Checklist

P0:

- [ ] Decide canonical experience claim: `4+ years`, `5 years`, or `5+ years`.
- [ ] Replace all inconsistent experience mentions.
- [ ] Replace dynamic `dateModified` with static content metadata.
- [ ] Move homepage-only JSON-LD out of `app/root.tsx`.
- [ ] Add visible homepage FAQ or remove homepage FAQ schema.
- [ ] Remove homepage FAQ schema from `/learn` and article pages.

P1:

- [ ] Remove or route-scope `meta keywords`.
- [ ] Update homepage H1 and first paragraph.
- [ ] Add service pages.
- [ ] Add service pages to sitemap.
- [ ] Add service pages to `llms.txt` and `llms-full.txt`.
- [ ] Add project case study pages.
- [ ] Compress profile and OG images.
- [ ] Add analytics and conversion events.

P2:

- [ ] Add markdown mirrors for key pages.
- [ ] Add Malay pages or remove Malay locale hints until ready.
- [ ] Add structured-data validation script.
- [ ] Align web manifest colors/icons.
- [ ] Add reduced-motion CSS.
- [ ] Add deployment security headers.

## Measurement Plan

Track before and after:

- Google Search Console impressions, clicks, CTR, average position.
- Queries for brand, service, project, and learning clusters.
- Indexed pages count.
- Rich result / structured-data warnings.
- Contact CTA conversion rate.
- WhatsApp and email clicks.
- Lighthouse performance, accessibility, best practices, SEO.
- Core Web Vitals after image optimization.

Success signals:

- Brand queries return the homepage with correct entity information.
- Service queries start showing impressions for dedicated service pages.
- Answer engines summarize contact/service/project details consistently.
- Search snippets use accurate titles/descriptions.
- Users can verify every structured-data claim on the visible page.

## Final Recommendation

Do not add more keywords first. The site already has enough keyword targeting. The best next move is to make the entity graph cleaner, make claims consistent, and create visible, evidence-rich pages that answer specific hiring and proof questions.

The strongest positioning is:

> Syed Mohamad Arif is a Kuala Lumpur-based React Native and web app developer who ships real products, not just portfolio demos.

Build the next SEO/GEO/AEO work around that proof.
