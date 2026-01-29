import type { Route } from "./+types/_index";
import { Portfolio } from "../components/Portfolio";

export function meta(_: Route.MetaArgs) {
  return [
    { title: "Syed Mohamad Arif – Frontend & Mobile Developer" },
    { name: "description", content: "Frontend & React Native developer specializing in high-performance apps, clean UI/UX, and scalable systems." },
    { name: "author", content: "Syed Mohamad Arif" },
    { name: "robots", content: "index, follow" },
    // Google Search Console
    { name: "google-site-verification", content: "6n28iJJhOuBcRAY4U_0kOigQ8Xbv2KCDlmahCnch_nM" },
    // Open Graph
    { property: "og:title", content: "Syed Mohamad Arif – Frontend & Mobile Developer" },
    { property: "og:description", content: "Frontend & React Native developer specializing in high-performance apps, clean UI/UX, and scalable systems." },
    { property: "og:type", content: "website" },
    { property: "og:url", content: "https://syed-arif-portfolio.pages.dev/" },
    { property: "og:image", content: "https://syed-arif-portfolio.pages.dev/assets/syedArif-BwDWV4i4.png" },
    // Twitter Card
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:image", content: "https://syed-arif-portfolio.pages.dev/assets/syedArif-BwDWV4i4.png" },
    { name: "twitter:title", content: "Syed Mohamad Arif – Frontend & Mobile Developer" },
    { name: "twitter:description", content: "Frontend & React Native developer specializing in high-performance apps, clean UI/UX, and scalable systems." },
  ];
}

export default function Home() {
  return <Portfolio />;
}
