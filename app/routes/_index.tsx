import type { Route } from "./+types/_index";
import { Portfolio } from "../components/Portfolio";

const TITLE = "Syed Mohamad Arif – Frontend & Mobile Developer | Creator of Hikayat Daily";
const DESCRIPTION =
  "Syed Mohamad Arif is a Frontend & React Native developer based in Kuala Lumpur, Malaysia. Creator of Hikayat Daily Global, Hikayat Diri, and LokalGig. 5 years of experience building high-performance mobile apps and web platforms with React Native, React, and TypeScript.";
const URL = "https://syedmohamadarif.site/";
const OG_IMAGE = "https://syedmohamadarif.site/og-image.png";

export function meta(_: Route.MetaArgs) {
  return [
    { title: TITLE },
    { name: "description", content: DESCRIPTION },
    { tagName: "link", rel: "canonical", href: URL },
    { property: "og:title", content: TITLE },
    { property: "og:description", content: DESCRIPTION },
    { property: "og:type", content: "profile" },
    { property: "og:url", content: URL },
    { property: "og:image", content: OG_IMAGE },
    { property: "og:image:alt", content: "Syed Mohamad Arif - Frontend & Mobile Developer" },
    { property: "profile:first_name", content: "Syed Mohamad" },
    { property: "profile:last_name", content: "Arif" },
    { property: "profile:username", content: "syedmhdarif" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:image", content: OG_IMAGE },
    { name: "twitter:title", content: TITLE },
    { name: "twitter:description", content: DESCRIPTION },
  ];
}

export default function Home() {
  return <Portfolio />;
}
