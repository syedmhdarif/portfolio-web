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
 * Decision rationale: work history starts Aug 2022 (Accenture). As of
 * May 2026, that is roughly 3 years 9 months of professional experience.
 * "4+ years" is the most accurate forward-looking claim. Using "5 years"
 * previously overstated; "4+ years" keeps it truthful.
 */
export const EXPERIENCE_YEARS = "4+";
export const EXPERIENCE_YEARS_LONG = "4+ years";

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

// ── Site URLs ───────────────────────────────────────────────────────────────

export const SITE_URL = "https://syedmohamadarif.site";
export const OG_IMAGE_URL = `${SITE_URL}/og-image.png`;

// ── Dates ───────────────────────────────────────────────────────────────────

/**
 * Manually maintained date for structured data `dateModified`.
 * Update ONLY when profile/service content substantially changes.
 */
export const CONTENT_LAST_MODIFIED = "2026-05-13";
export const PROFILE_DATE_CREATED = "2024-01-01";

// ── Current role ────────────────────────────────────────────────────────────

export const CURRENT_ROLE = "Mobile App Developer";
export const CURRENT_EMPLOYER = "Paywatch Malaysia";
export const CURRENT_EMPLOYER_URL = "https://paywatch.com/";

// ── FAQ (homepage) ──────────────────────────────────────────────────────────
// These answers appear as visible UI on the homepage AND in JSON-LD.
// Keep them factual, concise, and in sync.

export const HOMEPAGE_FAQ: { question: string; answer: string }[] = [
  {
    question: "Who is Syed Mohamad Arif?",
    answer:
      `Syed Mohamad Arif is a mobile app and web developer based in ${LOCATION_SHORT} with ${EXPERIENCE_YEARS_LONG} of experience building cross-platform applications with React Native, React, and TypeScript. He currently works as a ${CURRENT_ROLE} at ${CURRENT_EMPLOYER} and is the creator of Hikayat Daily Global, Hikayat Diri, and LokalGig.`,
  },
  {
    question: "What mobile app development services do you offer in Malaysia?",
    answer:
      `Cross-platform iOS and Android apps from a single React Native + Expo codebase, with native modules where needed. Full release pipelines run through Expo EAS or Codemagic, including Apple App Store and Google Play Store submission. Services cover design in Figma, development in TypeScript, testing, and deployment.`,
  },
  {
    question: "Do you build both iOS and Android apps?",
    answer:
      "Yes. Syed Mohamad Arif builds cross-platform iOS and Android apps from a single React Native + Expo codebase, with native modules where needed. Full release pipelines run through Expo EAS or Codemagic, including Apple App Store and Google Play Store submission.",
  },
  {
    question: "What stack do you use for React Native projects?",
    answer:
      "React Native with Expo for the core framework, TypeScript for type safety, Redux or React Query for state management, Firebase or Supabase for backend services, and Expo EAS or Codemagic for CI/CD and store submissions.",
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
