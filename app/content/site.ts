/**
 * Centralised content constants for the portfolio site.
 *
 * Why this file exists:
 * - SEO audit (P0): experience claims were inconsistent across visible page,
 *   metadata, JSON-LD, and LLM files. Storing them here ensures a single
 *   source of truth.
 * - SEO audit (P0): `dateModified` was dynamically set to the build date,
 *   creating artificial freshness. Storing it here makes it a deliberate
 *   editorial decision that is reviewable in git.
 *
 * Update `CONTENT_LAST_MODIFIED` only when profile/service content
 * substantially changes. Do NOT auto-generate it at build time.
 */

// ── Identity ────────────────────────────────────────────────────────────────

export const PERSON_NAME = "Syed Mohamad Arif";
export const PERSON_GIVEN_NAME = "Syed Mohamad";
export const PERSON_FAMILY_NAME = "Arif";
export const PERSON_ALTERNATE_NAMES = ["syedmhdarif", "Syed Arif"];

// ── Experience ──────────────────────────────────────────────────────────────

/**
 * Canonical experience claim used across visible UI, JSON-LD, metadata, and
 * LLM files. Update this when the claim changes (e.g. annually).
 *
 * Decision rationale: work history starts Aug 2021 (AiSara, UI/UX), roughly
 * 5 years 3 months as of Nov 2026, so "5+ years" is accurate.
 */
export const EXPERIENCE_YEARS = "5+";
export const EXPERIENCE_YEARS_LONG = "5+ years";

// ── Location ────────────────────────────────────────────────────────────────

export const LOCATION_SHORT = "Kuala Lumpur, Malaysia";
export const LOCATION_FULL = "Sentul, Kuala Lumpur, Malaysia";

// ── Contact ─────────────────────────────────────────────────────────────────

export const EMAIL = "syedarifjr@gmail.com";
export const PHONE = "+60145297072";
export const PHONE_DISPLAY = "+60 14-529 7072";
export const WHATSAPP_URL = "https://wa.me/60145297072";
export const LINKEDIN_URL = "https://linkedin.com/in/syedmhdarif";
export const GITHUB_URL = "https://github.com/syedmhdarif";
/** CV PDF in public/. Relative (no leading slash) callers must prefix the deploy base path. */
export const RESUME_FILE = "syed-mohamad-arif-resume.pdf";

// ── Site URLs ───────────────────────────────────────────────────────────────

export const SITE_URL = "https://syedmohamadarif.site";
export const OG_IMAGE_URL = `${SITE_URL}/og-image.png`;

// ── Dates ───────────────────────────────────────────────────────────────────

/**
 * Manually maintained date for structured data `dateModified`.
 * Update ONLY when profile/service content substantially changes.
 */
export const CONTENT_LAST_MODIFIED = "2026-11-27";
export const PROFILE_DATE_CREATED = "2024-01-01";

// ── Current role ────────────────────────────────────────────────────────────

export const CURRENT_ROLE = "Software Engineer (Mobile & Backend)";
export const CURRENT_EMPLOYER = "Paywatch Malaysia";
export const CURRENT_EMPLOYER_URL = "https://paywatch.com/";

// ── FAQ (homepage) ──────────────────────────────────────────────────────────
// These answers appear as visible UI on the homepage AND in JSON-LD.
// Keep them factual, concise, and in sync.

export const HOMEPAGE_FAQ: { question: string; answer: string }[] = [
  {
    question: "Who is Syed Mohamad Arif?",
    answer:
      `Syed Mohamad Arif is a full-stack developer based in ${LOCATION_SHORT} with ${EXPERIENCE_YEARS_LONG} of product experience across React Native, Next.js, and Node.js. He currently works as a ${CURRENT_ROLE} at ${CURRENT_EMPLOYER}, building earned-wage access fintech across 6 markets (MY, HK, PH, ID, SG, VN), and is the creator of Hikayat Daily Global, Hikayat Diri, and LokalGig.`,
  },
  {
    question: "What development services do you offer in Malaysia?",
    answer:
      `Cross-platform iOS and Android apps in React Native, Next.js web apps and portals, and Node.js / Fastify backend services, including payments and bank integrations. Release pipelines run through Codemagic or Expo EAS, including Apple App Store and Google Play Store submission. Services cover design in Figma, development in TypeScript, testing, and deployment.`,
  },
  {
    question: "Do you build both iOS and Android apps?",
    answer:
      "Yes. Syed Mohamad Arif builds cross-platform iOS and Android apps in React Native from a single codebase, with native modules where needed. Releases run through Codemagic or Expo EAS, including Apple App Store and Google Play Store submission and over-the-air updates.",
  },
  {
    question: "Do you work on fintech and backend projects?",
    answer:
      "Yes. At Paywatch he works on earned-wage access fintech across 6 markets (MY, HK, PH, ID, SG, VN): React Native apps, Next.js portals, and Node / Fastify services, including QR payments and bank payout integrations, backed by PostgreSQL, Kubernetes, and CI/CD.",
  },
  {
    question: "What stack do you use?",
    answer:
      "React Native for mobile, Next.js and React 19 for web, and TypeScript with Node.js, Fastify, NestJS, and GraphQL for backend services. Data layers use PostgreSQL (Drizzle), Cosmos DB, or Firebase; delivery uses Codemagic, EAS, GitHub Actions, and Kubernetes. He also works AI-first with Claude Code skills and MCP integrations.",
  },
  {
    question: "How much does a mobile app cost in Malaysia?",
    answer:
      "Cost depends on scope, integrations, and timeline. A basic single-platform MVP typically starts in the low five figures MYR; a full cross-platform iOS and Android app with auth, payments, push notifications, and store submission usually lands in the mid-to-high five figures MYR. Syed Mohamad Arif provides clear, fixed-scope quotes after a free discovery call. Reach out at syedarifjr@gmail.com for a tailored estimate.",
  },
  {
    question: "Do you work with Malaysian SMEs and startups?",
    answer:
      `Yes. Syed Mohamad Arif works with Malaysian SMEs, startups, and international clients on websites, web apps, and cross-platform mobile apps. Engagements run remotely across Malaysia (Kuala Lumpur, Selangor, Penang, Johor) and worldwide. Invoicing is supported in MYR or USD.`,
  },
  {
    question: "How can I contact you?",
    answer:
      `Email: ${EMAIL}. Phone / WhatsApp: ${PHONE_DISPLAY}. LinkedIn: ${LINKEDIN_URL}. GitHub: ${GITHUB_URL}.`,
  },
];
