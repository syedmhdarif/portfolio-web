import type { Route } from "./+types/_index";
import { Portfolio } from "../components/Portfolio";
import {
  SITE_URL,
  OG_IMAGE_URL,
  EXPERIENCE_YEARS_LONG,
  CONTENT_LAST_MODIFIED,
  PROFILE_DATE_CREATED,
  HOMEPAGE_FAQ,
} from "../content/site";

const TITLE = `Freelance Mobile App Developer Malaysia | Syed Mohamad Arif`;
const DESCRIPTION =
  `Hire Syed Mohamad Arif — a freelance mobile app and web developer in Kuala Lumpur, Malaysia. ${EXPERIENCE_YEARS_LONG} building React Native, React, and Next.js apps for Malaysian and international clients. Creator of Hikayat Daily Global, Hikayat Diri, and LokalGig.`;
const OG_TITLE = "Syed Mohamad Arif – Mobile App & Web Developer in Malaysia";
const URL = `${SITE_URL}/`;

export function meta(_: Route.MetaArgs) {
  return [
    { title: TITLE },
    { name: "description", content: DESCRIPTION },
    { tagName: "link", rel: "canonical", href: URL },
    { property: "og:title", content: OG_TITLE },
    { property: "og:description", content: DESCRIPTION },
    { property: "og:type", content: "profile" },
    { property: "og:url", content: URL },
    { property: "og:image", content: OG_IMAGE_URL },
    { property: "og:image:alt", content: "Syed Mohamad Arif - Frontend & Mobile Developer" },
    { property: "profile:first_name", content: "Syed Mohamad" },
    { property: "profile:last_name", content: "Arif" },
    { property: "profile:username", content: "syedmhdarif" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:image", content: OG_IMAGE_URL },
    { name: "twitter:title", content: OG_TITLE },
    { name: "twitter:description", content: DESCRIPTION },
    // Route-specific keywords (short, relevant to homepage only)
    {
      name: "keywords",
      content: "Syed Mohamad Arif, mobile app developer Malaysia, freelance React Native developer, web developer Kuala Lumpur, LokalGig, Hikayat Daily Global",
    },
    // Homepage-specific JSON-LD: ProfilePage, ProfessionalService, MobileApplication, BreadcrumbList, FAQPage
    {
      "script:ld+json": {
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "ProfilePage",
            "@id": `${SITE_URL}/#profilepage`,
            url: URL,
            name: "Syed Mohamad Arif - Frontend & Mobile Developer Portfolio",
            mainEntity: { "@id": `${SITE_URL}/#person` },
            dateCreated: PROFILE_DATE_CREATED,
            dateModified: CONTENT_LAST_MODIFIED,
            inLanguage: "en-US",
          },
          {
            "@type": "MobileApplication",
            "@id": `${SITE_URL}/#hikayatdaily`,
            name: "Hikayat Daily Global",
            alternateName: "Hikayat Daily",
            description:
              "A mobile application available on Google Play Store, showcasing expertise in mobile app development and delivering production-ready applications.",
            applicationCategory: "LifestyleApplication",
            operatingSystem: "Android",
            url: "https://play.google.com/store/apps/details?id=com.hikayatdailyglobal&hl=en",
            downloadUrl:
              "https://play.google.com/store/apps/details?id=com.hikayatdailyglobal&hl=en",
            softwareVersion: "1.0",
            author: { "@id": `${SITE_URL}/#person` },
            creator: { "@id": `${SITE_URL}/#person` },
            offers: {
              "@type": "Offer",
              price: "0",
              priceCurrency: "USD",
              availability: "https://schema.org/InStock",
            },
          },
          {
            "@type": "ProfessionalService",
            "@id": `${SITE_URL}/#service`,
            name: "Syed Mohamad Arif — Freelance Mobile App & Web Developer in Malaysia",
            description:
              "Freelance mobile app and web development services for Malaysian and international clients. Marketing sites, dashboards, full-stack web apps, and cross-platform iOS & Android apps with React Native.",
            url: `${URL}#services`,
            image: OG_IMAGE_URL,
            priceRange: "$$",
            currenciesAccepted: "MYR, USD",
            paymentAccepted: "Bank Transfer, DuitNow, Wise, PayPal",
            telephone: "+60145297072",
            email: "syedarifjr@gmail.com",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Sentul, Kuala Lumpur",
              addressRegion: "Wilayah Persekutuan Kuala Lumpur",
              addressCountry: "MY",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: 3.139,
              longitude: 101.6869,
            },
            provider: { "@id": `${SITE_URL}/#person` },
            availableLanguage: ["English", "Malay", "Bahasa Malaysia"],
            areaServed: [
              { "@type": "Country", name: "Malaysia" },
              { "@type": "City", name: "Kuala Lumpur" },
              { "@type": "City", name: "Petaling Jaya" },
              { "@type": "City", name: "Shah Alam" },
              { "@type": "AdministrativeArea", name: "Selangor" },
              { "@type": "Place", name: "Worldwide (remote)" },
            ],
            serviceType: [
              "Mobile App Development",
              "React Native Development",
              "iOS App Development",
              "Android App Development",
              "Cross-platform App Development",
              "Website Development",
              "Web App Development",
              "Frontend Development",
              "React Development",
              "Next.js Development",
              "UI/UX Implementation",
            ],
            knowsAbout: [
              "React Native",
              "Expo",
              "React",
              "Next.js",
              "TypeScript",
              "Tailwind CSS",
              "Supabase",
              "Firebase",
              "Vercel",
              "EAS",
              "Codemagic",
            ],
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Development Services",
              itemListElement: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Mobile App Development (iOS & Android) — Malaysia",
                    description:
                      "Cross-platform iOS and Android apps from one React Native + Expo codebase, with full release pipelines through EAS or Codemagic. Available to Malaysian and international clients.",
                    serviceType: "Mobile App Development",
                    areaServed: { "@type": "Country", name: "Malaysia" },
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Website & Web App Development — Malaysia",
                    description:
                      "Marketing sites, dashboards, and full-stack web apps built with React, React Router, and Next.js — typed, tested, and tuned for SEO and Core Web Vitals.",
                    serviceType: "Web Development",
                    areaServed: { "@type": "Country", name: "Malaysia" },
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "UI/UX Design to Development",
                    description:
                      "End-to-end design and development — Figma wireframes and high-fidelity prototypes translated into typed React or React Native components.",
                    serviceType: "UI/UX Design and Implementation",
                  },
                },
              ],
            },
          },
          {
            "@type": "BreadcrumbList",
            "@id": `${SITE_URL}/#breadcrumb-home`,
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: URL,
              },
            ],
          },
          {
            "@type": "FAQPage",
            "@id": `${SITE_URL}/#faq`,
            mainEntity: HOMEPAGE_FAQ.map((qa) => ({
              "@type": "Question",
              name: qa.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: qa.answer,
              },
            })),
          },
        ],
      },
    },
  ];
}

export default function Home() {
  return <Portfolio />;
}
