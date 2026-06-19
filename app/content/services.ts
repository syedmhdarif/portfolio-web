export type Service = {
  id: string;
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
  stack: string[];
};

export const SERVICES: Service[] = [
  {
    id: "web",
    title: "Website Development",
    tagline: "Marketing sites, dashboards & full-stack web apps",
    description:
      "From a fast landing page to a multi-tenant SaaS dashboard. Built with React, React Router, and Next.js — typed, tested, and tuned for SEO and Core Web Vitals.",
    deliverables: [
      "Responsive UI in React + Tailwind",
      "Auth, payments & dashboards",
      "SEO, sitemap & analytics",
      "Domain, hosting & email setup",
    ],
    stack: ["React", "React Router", "Next.js", "Tailwind", "Supabase", "Vercel"],
  },
  {
    id: "mobile",
    title: "Mobile App Development",
    tagline: "Cross-platform iOS & Android, ready for the stores",
    description:
      "One codebase, two stores. React Native + Expo for fast iteration, native modules where it counts, and full release pipelines through EAS or Codemagic.",
    deliverables: [
      "iOS & Android from one codebase",
      "Push notifications & deep links",
      "OTA updates & crash reporting",
      "App Store & Play Store submission",
    ],
    stack: ["React Native", "Expo", "TypeScript", "Firebase", "EAS", "Codemagic"],
  },
];

export type ProcessStep = {
  step: string;
  title: string;
  description: string;
  tools: string[];
};

export const PROCESS: ProcessStep[] = [
  {
    step: "01",
    title: "Design",
    description:
      "Wireframes and high-fidelity prototypes in Figma. Clarify the problem, validate the flow, and lock in the visual language before a single line of code.",
    tools: ["Figma", "Adobe XD", "User Flows", "Prototypes"],
  },
  {
    step: "02",
    title: "Development",
    description:
      "Typed, modular, version-controlled code with Git-based reviews and preview deployments. Frequent demos so you see progress every sprint.",
    tools: ["TypeScript", "React / RN", "Git", "CI/CD"],
  },
  {
    step: "03",
    title: "Production & Deployment",
    description:
      "Custom domain, SSL, analytics, and store submissions handled. Monitoring and OTA updates so the product keeps improving after launch.",
    tools: ["Vercel", "Expo EAS", "Codemagic", "Firebase"],
  },
];

export type StackItem = {
  title: string;
  description: string;
  items: string[];
};

export const PROJECT_STACK: StackItem[] = [
  {
    title: "Domain",
    description:
      "Your name on the web. I help register, configure DNS, set up SSL, and wire up email forwarding.",
    items: ["Cloudflare", "Namecheap", "Google Domains"],
  },
  {
    title: "Web Hosting",
    description:
      "Global edge delivery with preview URLs on every commit. Vercel is my default for React and Next.js.",
    items: ["Vercel", "Cloudflare Pages", "Netlify"],
  },
  {
    title: "Database & Auth",
    description:
      "Postgres, auth, storage, and realtime — Supabase gives you a production backend without the ops overhead.",
    items: ["Supabase", "Firebase", "PostgreSQL"],
  },
  {
    title: "Mobile Build & Release",
    description:
      "Automated iOS & Android builds, signing, and store submissions through Expo EAS or Codemagic.",
    items: ["Expo EAS", "Codemagic", "App Store", "Play Store"],
  },
];
