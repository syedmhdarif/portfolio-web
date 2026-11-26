export type Experience = {
  title: string;
  company: string;
  period: string;
  isCurrent?: boolean;
  responsibilities: string[];
  technologies: string[];
};

export const EXPERIENCE: Experience[] = [
  {
    title: "Software Engineer (Mobile & Backend)",
    company: "Paywatch Malaysia",
    period: "Feb 2025 — Present",
    isCurrent: true,
    responsibilities: [
      "Built React Native insurance and healthcare purchase flows (MoneeInsure life insurance, Zurich TenangCare, IMU Healthcare with MediPay QR payments), including the SeaInsure to MoneeInsure rebrand",
      "Built QR Pay, the Indonesian QRIS payment flow in the app with partner M-Bayar, added Codemagic Patch OTA updates with CI guards, and maintained and upgraded core mobile dependencies (React Navigation v7, React Query, Reanimated 4)",
      "Primary author of the IMU Healthcare Merchant Portal, taking it from scaffold to production with Next.js, GraphQL and role-based access",
      "Built Shinhan Bank Vietnam payouts end to end on Node/Fastify, from bank integration to admin UI, and carried the launch through bank UAT and ops handoff",
      "Built and maintained data and infrastructure for these services, including PostgreSQL and Cosmos DB data layers, Kubernetes deployments, CI/CD and observability",
      "Built the team Claude Code skills and MCP integrations, covering AI-assisted pre-PR checks and ticket-to-code and spec-to-story workflows, and set the team AI-use rules",
    ],
    technologies: [
      "React Native", "Next.js", "GraphQL", "Node.js", "Fastify", "PostgreSQL",
      "Cosmos DB", "Kubernetes", "Codemagic", "Claude Code", "MCP",
    ],
  },
  {
    title: "Junior Mobile App Developer",
    company: "Zonar Malaysia",
    period: "Sep 2023 — Jan 2025",
    responsibilities: [
      "Led React Native development of the Zonar app, with core modules from authentication to real-time sync on iOS and Android",
      "Owned UI/UX in Figma",
      "Shipped in Agile sprints",
    ],
    technologies: ["React Native", "Firebase", "Redux", "React Navigation", "Figma"],
  },
  {
    title: "Junior Mobile App Developer",
    company: "Accenture",
    period: "Aug 2022 — Sep 2023",
    responsibilities: [
      "Shipped Unifi Mobile Prepaid (TM) features on iOS and Android with REST APIs, Redux and OneSignal in an enterprise Git workflow",
    ],
    technologies: ["React Native", "Redux", "REST APIs", "OneSignal", "Git"],
  },
  {
    title: "UI UX",
    company: "AiSara",
    period: "Aug 2021 — Jul 2022",
    responsibilities: [
      "UI/UX design with Figma and Adobe XD for product interfaces",
    ],
    technologies: ["Figma", "Adobe XD"],
  },
];

export type Education = {
  qualification: string;
  institution: string;
  period: string;
};

export const EDUCATION: Education[] = [
  {
    qualification: "Bachelor of Information Technology",
    institution: "International Islamic University Malaysia",
    period: "2017 — 2021",
  },
  {
    qualification: "Foundation in Engineering",
    institution: "CFS IIUM Petaling Jaya",
    period: "2015 — 2017",
  },
];

export type SkillGroup = {
  title: string;
  skills: string[];
};

export const SKILLS: SkillGroup[] = [
  {
    title: "Mobile",
    skills: ["React Native (New Arch)", "Redux Toolkit", "Firebase", "React Query", "Reanimated", "Codemagic", "EAS", "Figma", "Adobe XD"],
  },
  {
    title: "Backend",
    skills: ["TypeScript", "JavaScript", "Node.js", "Fastify", "NestJS", "GraphQL (Yoga)", "Next.js", "React 19", "Playwright", "Vitest"],
  },
  {
    title: "Data and Infra",
    skills: ["PostgreSQL", "Drizzle", "Azure Cosmos DB", "Kubernetes", "Kustomize", "Argo CD", "Azure Key Vault", "GitHub Actions", "OpenTelemetry", "SigNoz"],
  },
  {
    title: "AI Tooling",
    skills: ["Claude Code (skills)", "Codex", "Cursor", "MCP integrations", "Automation pipelines"],
  },
];

/** Flat list for the marquee strip. */
export const SKILLS_MARQUEE: string[] = [
  "React Native",
  "TypeScript",
  "Next.js",
  "Node.js",
  "Fastify",
  "NestJS",
  "GraphQL",
  "PostgreSQL",
  "Kubernetes",
  "Codemagic",
  "GitHub Actions",
  "OpenTelemetry",
  "Claude Code",
  "MCP",
  "Figma",
];
