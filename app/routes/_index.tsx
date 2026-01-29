import type { Route } from "./+types/_index";
import { Portfolio } from "../components/Portfolio";

export function meta(_: Route.MetaArgs) {
  return [
    { title: "Syed Mohamad Arif – Frontend & Mobile Developer | Creator of Hikayat Daily" },
    { name: "description", content: "Syed Mohamad Arif is a Frontend & React Native developer from Kuala Lumpur, Malaysia. Creator of Hikayat Daily Global app. 4+ years experience building high-performance mobile apps with React Native, TypeScript, and modern web technologies." },
    { name: "author", content: "Syed Mohamad Arif" },
    { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" },
    { name: "keywords", content: "Syed Mohamad Arif, Hikayat Daily, Hikayat Daily Global, React Native Developer, Mobile App Developer, Frontend Developer, Malaysia Developer, Kuala Lumpur, syedmhdarif, React Developer, TypeScript Developer" },
    // Google Search Console
    { name: "google-site-verification", content: "6n28iJJhOuBcRAY4U_0kOigQ8Xbv2KCDlmahCnch_nM" },
    // Open Graph
    { property: "og:title", content: "Syed Mohamad Arif – Frontend & Mobile Developer | Creator of Hikayat Daily" },
    { property: "og:description", content: "Syed Mohamad Arif is a Frontend & React Native developer from Kuala Lumpur, Malaysia. Creator of Hikayat Daily Global app on Google Play Store. Specializing in high-performance mobile apps and clean UI/UX." },
    { property: "og:type", content: "website" },
    { property: "og:url", content: "https://syed-arif-portfolio.pages.dev/" },
    { property: "og:image", content: "https://syed-arif-portfolio.pages.dev/assets/syedArif-BwDWV4i4.png" },
    { property: "og:image:alt", content: "Syed Mohamad Arif - Frontend & Mobile Developer" },
    { property: "og:site_name", content: "Syed Mohamad Arif Portfolio" },
    { property: "og:locale", content: "en_US" },
    // Twitter Card
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:image", content: "https://syed-arif-portfolio.pages.dev/assets/syedArif-BwDWV4i4.png" },
    { name: "twitter:title", content: "Syed Mohamad Arif – Frontend & Mobile Developer | Hikayat Daily Creator" },
    { name: "twitter:description", content: "Frontend & React Native developer from Malaysia. Creator of Hikayat Daily Global app. Building high-performance mobile apps with modern technologies." },
    { name: "twitter:creator", content: "@syedmhdarif" },
  ];
}

export default function Home() {
  return <Portfolio />;
}
