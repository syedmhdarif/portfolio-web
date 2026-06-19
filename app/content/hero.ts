import { EMAIL, GITHUB_URL, LINKEDIN_URL, WHATSAPP_URL } from "./site";
import { LIVE_APP_COUNT, SHIPPED_PROJECT_COUNT } from "./projects";

export type HeroStat = {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
};

/** Truthful, countable figures only (see brief — no inflated metrics). */
export const HERO_STATS: HeroStat[] = [
  { value: 4, suffix: "+", label: "Years building products" },
  { value: SHIPPED_PROJECT_COUNT, suffix: "+", label: "Web & mobile products shipped" },
];

export const LIVE_APPS = LIVE_APP_COUNT;

export type SocialPill = {
  short: string;
  label: string;
  href: string;
};

export const SOCIAL_PILLS: SocialPill[] = [
  { short: "in", label: "LinkedIn", href: LINKEDIN_URL },
  { short: "gh", label: "GitHub", href: GITHUB_URL },
  { short: "wa", label: "WhatsApp", href: WHATSAPP_URL },
  { short: "@", label: "Email", href: `mailto:${EMAIL}` },
];
