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
    title: "Domain & DNS",
    description:
      "Your name on the web. I register the domain, point DNS through Cloudflare, and sort out SSL and email records.",
    items: ["Spaceship", "GoDaddy", "Exabytes", "Cloudflare"],
  },
  {
    title: "Hosting & Deploy",
    description:
      "Edge hosting for the front end, a managed server for the API, and preview builds on every push.",
    items: ["Vercel", "Cloudflare", "Railway", "GitHub Actions"],
  },
  {
    title: "Database & Auth",
    description:
      "Postgres, auth, storage, and realtime on Supabase. Firebase where push notifications or an existing app need it.",
    items: ["Supabase", "Firebase"],
  },
  {
    title: "Media & Email",
    description:
      "Images resized and served from a CDN, plus transactional email — sign-ups, receipts, password resets — that lands in the inbox.",
    items: ["Cloudinary", "Resend"],
  },
  {
    title: "Payments",
    description:
      "Malaysian payment gateways with FPX online banking, cards, and e-wallets, settled in RM.",
    items: ["ToyyibPay", "Razorpay Curlec"],
  },
  {
    title: "Analytics & Monitoring",
    description:
      "See how people use the product, catch errors before your users report them, and track how Google indexes the site.",
    items: ["PostHog", "SigNoz", "Google Search Console"],
  },
  {
    title: "Mobile Build & Release",
    description:
      "Automated iOS and Android builds, signing, and store submissions — or a PWA / TWA when a full native app is more than you need.",
    items: ["Expo EAS", "Codemagic", "PWA / TWA", "App Store", "Play Store"],
  },
  {
    title: "Project Docs & Handover",
    description:
      "Specs, progress notes, and a handover guide in one shared workspace, so you are never left guessing how things run.",
    items: ["Notion", "GitHub"],
  },
];
