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
    title: "Mobile App Developer",
    company: "Paywatch Malaysia",
    period: "Feb 2025 — Present",
    isCurrent: true,
    responsibilities: [
      "Build and enhance key features such as health insurance, critical illness insurance, QR payments, and voucher systems",
      "Work closely with UI/UX designers to translate designs into smooth, user-friendly components",
      "Manage TestFlight and Firebase App Distribution for testing and releases",
      "Support CI/CD processes through Azure Pipeline to ensure efficient builds and deployments",
    ],
    technologies: ["React Native", "TypeScript", "Firebase", "Azure DevOps", "Maestro"],
  },
  {
    title: "Junior Mobile App Developer",
    company: "Zonar Malaysia",
    period: "Sep 2023 — Jan 2025",
    responsibilities: [
      "Specialise in React Native development using Firebase, Redux, and React Navigation",
      "Responsible for designing the UI/UX of the Zonar app, ensuring user-friendly functionality",
      "Work across the full project lifecycle using insights from Google Analytics",
      "Follow Agile sprints with regular scrum meetings to track progress",
    ],
    technologies: ["React Native", "Firebase", "Redux", "Figma", "Google Analytics"],
  },
  {
    title: "Junior Mobile App Developer",
    company: "Accenture",
    period: "Aug 2022 — Sep 2023",
    responsibilities: [
      "Maintain, enhance, and build new features for the Unifi mobile prepaid (TM) app",
      "Integrate RESTful APIs and manage state with Redux",
      "Implement OneSignal for push notifications",
      "Use Git for efficient version control and team collaboration",
    ],
    technologies: ["React Native", "Redux", "RESTful APIs", "OneSignal", "Git"],
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
    period: "2017 — 2020",
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
    title: "Languages",
    skills: ["JavaScript", "TypeScript", "HTML/CSS", "SQL", "Swift", "Java/Kotlin"],
  },
  {
    title: "Frameworks",
    skills: ["React Native", "React.js", "Next.js", "Node.js", "Redux", "React Query"],
  },
  {
    title: "Tools",
    skills: ["Android Studio", "Xcode", "VS Code", "Figma", "Postman", "Maestro"],
  },
  {
    title: "Databases",
    skills: ["PostgreSQL", "MySQL", "MongoDB", "Firebase"],
  },
];

/** Flat list for the marquee strip. */
export const SKILLS_MARQUEE: string[] = [
  "React Native",
  "React",
  "TypeScript",
  "Next.js",
  "Expo",
  "Firebase",
  "Supabase",
  "Redux",
  "Tailwind",
  "Figma",
  "Node.js",
  "PostgreSQL",
  "CI/CD",
  "Three.js",
];
