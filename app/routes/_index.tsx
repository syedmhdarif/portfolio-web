import type { Route } from "./+types/_index";
import { Portfolio } from "../components/Portfolio";

const TITLE = "Freelance Mobile App Developer Malaysia | Syed Mohamad Arif";
const DESCRIPTION =
  "Hire Syed Mohamad Arif — a freelance mobile app and web developer in Kuala Lumpur, Malaysia. 5 years building React Native, React, and Next.js apps for Malaysian and international clients. Creator of Hikayat Daily Global, Hikayat Diri, and LokalGig.";
const OG_TITLE = "Syed Mohamad Arif – Mobile App & Web Developer in Malaysia";
const URL = "https://syedmohamadarif.site/";
const OG_IMAGE = "https://syedmohamadarif.site/og-image.png";

export function meta(_: Route.MetaArgs) {
  return [
    { title: TITLE },
    { name: "description", content: DESCRIPTION },
    { tagName: "link", rel: "canonical", href: URL },
    { property: "og:title", content: OG_TITLE },
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
    { name: "twitter:title", content: OG_TITLE },
    { name: "twitter:description", content: DESCRIPTION },
  ];
}

export default function Home() {
  return <Portfolio />;
}
