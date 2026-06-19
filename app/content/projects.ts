import hikayatAppIcon from "../assets/hikayatDailyWhiteBg.png";
import hikayatDiriImage from "../assets/Hikayat-diri-logo.png";
import interactiveRoomImage from "../assets/Interactive-room.png";

export type ProjectStatus = "web" | "playstore" | null;

export type Project = {
  id: string;
  name: string;
  category: string;
  /** schema.org type for microdata. */
  schemaType: "WebApplication" | "MobileApplication";
  os?: "Android" | "iOS";
  status: ProjectStatus;
  statusLabel?: string;
  description: string;
  tech: string[];
  href: string;
  hrefLabel: string;
  image: string;
  /** object-fit treatment for the card media. */
  fit: "contain" | "cover";
  featured?: boolean;
};

export const PROJECTS: Project[] = [
  {
    id: "lokalgig",
    name: "LokalGig",
    category: "Web Platform · Marketplace",
    schemaType: "WebApplication",
    status: "web",
    statusLabel: "Live on the web",
    description:
      "A Malaysian local services marketplace connecting freelancers with clients for everyday gigs and side projects. Built end-to-end with a modern React stack, Supabase for auth and data, and shipped on Vercel — covering discovery, booking, and the full client–freelancer workflow.",
    tech: ["React", "TypeScript", "Tailwind", "Supabase", "Vercel"],
    href: "https://lokalgig.my/",
    hrefLabel: "Visit lokalgig.my",
    image: "/lokalgig-thumbnail.png",
    fit: "cover",
    featured: true,
  },
  {
    id: "hikayat-daily-global",
    name: "Hikayat Daily Global",
    category: "Mobile Application",
    schemaType: "MobileApplication",
    os: "Android",
    status: "playstore",
    statusLabel: "Live on Play Store",
    description:
      "A daily storytelling Android app showcasing end-to-end mobile work — from UI/UX design to production release.",
    tech: ["React Native", "TypeScript", "Firebase", "Redux"],
    href: "https://play.google.com/store/apps/details?id=com.hikayatdailyglobal&hl=en",
    hrefLabel: "View on Play Store",
    image: hikayatAppIcon,
    fit: "contain",
  },
  {
    id: "hikayat-diri-mobile",
    name: "Hikayat Diri (Mobile)",
    category: "Mobile Application",
    schemaType: "MobileApplication",
    os: "Android",
    status: "playstore",
    statusLabel: "Live on Play Store",
    description:
      "The Android companion to Hikayat Diri — journal and revisit personal stories anywhere, with a calm, focused reading experience.",
    tech: ["React Native", "Expo", "TypeScript"],
    href: "https://play.google.com/store/apps/details?id=com.syedmhdarif.hikayatdiri&hl=en",
    hrefLabel: "View on Play Store",
    image: hikayatDiriImage,
    fit: "contain",
  },
  {
    id: "citysage",
    name: "CitySage",
    category: "Web Application",
    schemaType: "WebApplication",
    status: "web",
    description:
      "A city guide web application providing smart insights and recommendations for urban exploration.",
    tech: ["React", "TypeScript", "Tailwind CSS"],
    href: "https://syedmhdarif.github.io/citysage-web-project/",
    hrefLabel: "View live",
    image: "/citysage-thumbnail.png",
    fit: "cover",
  },
  {
    id: "interactive-room",
    name: "Interactive Room",
    category: "3D Web Experience",
    schemaType: "WebApplication",
    status: "web",
    description:
      "An interactive 3D portfolio world built with Three.js, featuring explorable environments and immersive navigation.",
    tech: ["Three.js", "React", "3D", "WebGL"],
    href: "https://interactive-room-wine.vercel.app/",
    hrefLabel: "View live",
    image: interactiveRoomImage,
    fit: "cover",
  },
];

export const FEATURED_PROJECT = PROJECTS.find((p) => p.featured)!;
export const GRID_PROJECTS = PROJECTS.filter((p) => !p.featured);

/** Truthful, countable hero stat. */
export const LIVE_APP_COUNT = PROJECTS.filter((p) => p.status === "playstore").length;
export const SHIPPED_PROJECT_COUNT = PROJECTS.length;
