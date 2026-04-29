import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";

import type { Route } from "./+types/root";
import "./app.css";

export const links: Route.LinksFunction = () => [
  { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon-32.png" },
  { rel: "apple-touch-icon", sizes: "180x180", href: "/icon-180.png" },
  { rel: "manifest", href: "/site.webmanifest" },
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
];

// In React Router v7, a child route's meta() REPLACES the parent's meta (it does not merge by default).
// Site-wide static tags are therefore rendered directly in <head> below so they appear on every route.

const SITE_KEYWORDS = [
  // Brand
  "Syed Mohamad Arif", "syedmhdarif", "Hikayat Daily", "Hikayat Daily Global", "Hikayat Diri", "LokalGig",
  // Primary commercial — Malaysia geo
  "mobile app developer Malaysia", "Malaysia mobile app developer", "freelance mobile app developer Malaysia",
  "mobile app developer Kuala Lumpur", "freelance app developer Kuala Lumpur", "app developer KL",
  "hire mobile app developer Malaysia", "hire React Native developer Malaysia",
  // Web / frontend
  "web developer Malaysia", "freelance web developer Malaysia", "web app developer Malaysia",
  "frontend developer Malaysia", "frontend developer Kuala Lumpur", "React developer Malaysia",
  "React Native developer Malaysia", "Next.js developer Malaysia", "TypeScript developer Malaysia",
  // Mobile platforms
  "iOS app developer Malaysia", "Android app developer Malaysia", "cross-platform app developer Malaysia",
  // UI/UX + services
  "UI UX developer Malaysia", "UI UX designer Kuala Lumpur",
  "mobile app development services Malaysia", "mobile app development Kuala Lumpur",
  "web development services Malaysia", "web design Malaysia",
  // Bahasa Malay
  "pembangun aplikasi mudah alih Malaysia", "pembangun web Malaysia",
  // Topical
  "OWASP Top 10", "React Native Expo", "Supabase Malaysia"
].join(", ");

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Site-wide static meta — render here so they appear on every route (root.tsx meta() export is overridden by child routes in RR v7) */}
        <meta name="author" content="Syed Mohamad Arif" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="keywords" content={SITE_KEYWORDS} />
        <meta name="google-site-verification" content="6n28iJJhOuBcRAY4U_0kOigQ8Xbv2KCDlmahCnch_nM" />
        {/* Geo targeting (Bing and some legacy crawlers still use these) */}
        <meta name="geo.region" content="MY-14" />
        <meta name="geo.placename" content="Kuala Lumpur" />
        <meta name="geo.position" content="3.1390;101.6869" />
        <meta name="ICBM" content="3.1390, 101.6869" />
        <meta property="og:site_name" content="Syed Mohamad Arif Portfolio" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:locale:alternate" content="en_MY" />
        <meta property="og:locale:alternate" content="ms_MY" />
        <meta name="twitter:creator" content="@syedmhdarif" />
        <meta name="twitter:site" content="@syedmhdarif" />
        <Meta />
        <Links />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Person",
                  "@id": "https://syedmohamadarif.site/#person",
                  name: "Syed Mohamad Arif",
                  givenName: "Syed Mohamad",
                  familyName: "Arif",
                  alternateName: ["syedmhdarif", "Syed Arif"],
                  jobTitle: [
                    "Freelance Mobile App Developer",
                    "Frontend Developer",
                    "React Native Developer",
                    "Web App Developer"
                  ],
                  description: "Freelance mobile app and web developer based in Kuala Lumpur, Malaysia, with 5 years of experience building React Native, React, and Next.js apps for Malaysian and international clients. Creator of Hikayat Daily Global, Hikayat Diri, and LokalGig.",
                  url: "https://syedmohamadarif.site/",
                  mainEntityOfPage: "https://syedmohamadarif.site/",
                  image: {
                    "@type": "ImageObject",
                    url: "https://syedmohamadarif.site/og-image.png",
                    width: 1200,
                    height: 630
                  },
                  email: "mailto:syedarifjr@gmail.com",
                  telephone: "+60145297072",
                  nationality: { "@type": "Country", name: "Malaysia" },
                  address: {
                    "@type": "PostalAddress",
                    addressLocality: "Sentul, Kuala Lumpur",
                    addressRegion: "Wilayah Persekutuan Kuala Lumpur",
                    addressCountry: "MY"
                  },
                  alumniOf: [
                    {
                      "@type": "CollegeOrUniversity",
                      name: "International Islamic University Malaysia",
                      sameAs: "https://www.iium.edu.my/",
                      department: "Information Technology"
                    },
                    {
                      "@type": "EducationalOrganization",
                      name: "CFS IIUM Petaling Jaya",
                      department: "Foundation in Engineering"
                    }
                  ],
                  knowsAbout: [
                    "React Native", "React", "TypeScript", "JavaScript", "Mobile App Development",
                    "Frontend Development", "Next.js", "Node.js", "Redux", "Firebase",
                    "iOS Development", "Android Development", "UI/UX Design", "Figma",
                    "Supabase", "Tailwind CSS", "Three.js", "OWASP Top 10", "Web Application Security"
                  ],
                  knowsLanguage: ["English", "Malay"],
                  hasOccupation: [
                    {
                      "@type": "Occupation",
                      name: "Mobile App Developer",
                      occupationLocation: { "@type": "Country", name: "Malaysia" },
                      estimatedSalary: { "@type": "MonetaryAmountDistribution", name: "base", currency: "MYR" },
                      skills: "React Native, TypeScript, Firebase, Redux, CI/CD, Expo, EAS, Codemagic"
                    }
                  ],
                  worksFor: {
                    "@type": "Organization",
                    name: "Paywatch Malaysia",
                    url: "https://paywatch.com/"
                  },
                  sameAs: [
                    "https://github.com/syedmhdarif",
                    "https://www.linkedin.com/in/syedmhdarif",
                    "https://wa.me/60145297072",
                    "https://play.google.com/store/apps/dev?id=com.hikayatdailyglobal"
                  ]
                },
                {
                  "@type": "WebSite",
                  "@id": "https://syedmohamadarif.site/#website",
                  url: "https://syedmohamadarif.site/",
                  name: "Syed Mohamad Arif - Portfolio",
                  description: "Portfolio website of Syed Mohamad Arif, a Frontend & Mobile Developer from Malaysia",
                  publisher: { "@id": "https://syedmohamadarif.site/#person" },
                  inLanguage: "en-US"
                },
                {
                  "@type": "MobileApplication",
                  "@id": "https://syedmohamadarif.site/#hikayatdaily",
                  name: "Hikayat Daily Global",
                  alternateName: "Hikayat Daily",
                  description: "A mobile application available on Google Play Store, showcasing expertise in mobile app development and delivering production-ready applications.",
                  applicationCategory: "LifestyleApplication",
                  operatingSystem: "Android",
                  url: "https://play.google.com/store/apps/details?id=com.hikayatdailyglobal&hl=en",
                  downloadUrl: "https://play.google.com/store/apps/details?id=com.hikayatdailyglobal&hl=en",
                  softwareVersion: "1.0",
                  author: { "@id": "https://syedmohamadarif.site/#person" },
                  creator: { "@id": "https://syedmohamadarif.site/#person" },
                  offers: {
                    "@type": "Offer",
                    price: "0",
                    priceCurrency: "USD",
                    availability: "https://schema.org/InStock"
                  }
                },
                {
                  "@type": "ProfilePage",
                  "@id": "https://syedmohamadarif.site/#profilepage",
                  url: "https://syedmohamadarif.site/",
                  name: "Syed Mohamad Arif - Frontend & Mobile Developer Portfolio",
                  mainEntity: { "@id": "https://syedmohamadarif.site/#person" },
                  dateCreated: "2024-01-01",
                  dateModified: new Date().toISOString().split('T')[0],
                  inLanguage: "en-US"
                },
                {
                  "@type": "ProfessionalService",
                  "@id": "https://syedmohamadarif.site/#service",
                  name: "Syed Mohamad Arif — Freelance Mobile App & Web Developer in Malaysia",
                  description: "Freelance mobile app and web development services for Malaysian and international clients. Marketing sites, dashboards, full-stack web apps, and cross-platform iOS & Android apps with React Native.",
                  url: "https://syedmohamadarif.site/#services",
                  image: "https://syedmohamadarif.site/og-image.png",
                  priceRange: "$$",
                  currenciesAccepted: "MYR, USD",
                  paymentAccepted: "Bank Transfer, DuitNow, Wise, PayPal",
                  telephone: "+60145297072",
                  email: "syedarifjr@gmail.com",
                  address: {
                    "@type": "PostalAddress",
                    addressLocality: "Sentul, Kuala Lumpur",
                    addressRegion: "Wilayah Persekutuan Kuala Lumpur",
                    addressCountry: "MY"
                  },
                  geo: {
                    "@type": "GeoCoordinates",
                    latitude: 3.1390,
                    longitude: 101.6869
                  },
                  provider: { "@id": "https://syedmohamadarif.site/#person" },
                  availableLanguage: ["English", "Malay", "Bahasa Malaysia"],
                  areaServed: [
                    { "@type": "Country", name: "Malaysia" },
                    { "@type": "City", name: "Kuala Lumpur" },
                    { "@type": "City", name: "Petaling Jaya" },
                    { "@type": "City", name: "Shah Alam" },
                    { "@type": "AdministrativeArea", name: "Selangor" },
                    { "@type": "Place", name: "Worldwide (remote)" }
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
                    "UI/UX Implementation"
                  ],
                  knowsAbout: [
                    "React Native", "Expo", "React", "Next.js", "TypeScript",
                    "Tailwind CSS", "Supabase", "Firebase", "Vercel", "EAS", "Codemagic"
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
                          description: "Cross-platform iOS and Android apps from one React Native + Expo codebase, with full release pipelines through EAS or Codemagic. Available to Malaysian and international clients.",
                          serviceType: "Mobile App Development",
                          areaServed: { "@type": "Country", name: "Malaysia" }
                        }
                      },
                      {
                        "@type": "Offer",
                        itemOffered: {
                          "@type": "Service",
                          name: "Website & Web App Development — Malaysia",
                          description: "Marketing sites, dashboards, and full-stack web apps built with React, React Router, and Next.js — typed, tested, and tuned for SEO and Core Web Vitals.",
                          serviceType: "Web Development",
                          areaServed: { "@type": "Country", name: "Malaysia" }
                        }
                      },
                      {
                        "@type": "Offer",
                        itemOffered: {
                          "@type": "Service",
                          name: "UI/UX Design to Development",
                          description: "End-to-end design and development — Figma wireframes and high-fidelity prototypes translated into typed React or React Native components.",
                          serviceType: "UI/UX Design and Implementation"
                        }
                      }
                    ]
                  }
                },
                {
                  "@type": "BreadcrumbList",
                  "@id": "https://syedmohamadarif.site/#breadcrumb-home",
                  itemListElement: [
                    { "@type": "ListItem", position: 1, name: "Home", item: "https://syedmohamadarif.site/" }
                  ]
                },
                {
                  "@type": "FAQPage",
                  "@id": "https://syedmohamadarif.site/#faq",
                  mainEntity: [
                    {
                      "@type": "Question",
                      name: "Who is Syed Mohamad Arif?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "Syed Mohamad Arif is a Frontend and Mobile Developer based in Kuala Lumpur, Malaysia, with 5 years of experience building cross-platform applications with React Native, React, and TypeScript. He currently works as a Mobile App Developer at Paywatch Malaysia and is the creator of the Hikayat Daily Global app on Google Play."
                      }
                    },
                    {
                      "@type": "Question",
                      name: "Who created Hikayat Daily Global?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "Hikayat Daily Global was created by Syed Mohamad Arif, a Malaysian React Native developer. The Android app is published on the Google Play Store at https://play.google.com/store/apps/details?id=com.hikayatdailyglobal."
                      }
                    },
                    {
                      "@type": "Question",
                      name: "What is LokalGig?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "LokalGig is a Malaysian local services marketplace connecting freelancers with clients for everyday gigs and side projects. It was built end-to-end by Syed Mohamad Arif with React, TypeScript, Tailwind, Supabase, and Vercel, and is live at https://lokalgig.my/."
                      }
                    },
                    {
                      "@type": "Question",
                      name: "What technologies does Syed Mohamad Arif specialize in?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "Syed Mohamad Arif specializes in React Native and Expo for cross-platform mobile apps, and React, Next.js, and TypeScript for web. His regular toolkit also includes Tailwind CSS, Redux, React Query, Firebase, Supabase, PostgreSQL, and CI/CD pipelines through Azure DevOps, Expo EAS, and Codemagic."
                      }
                    },
                    {
                      "@type": "Question",
                      name: "Is Syed Mohamad Arif available for freelance or contract work?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. Syed Mohamad Arif offers freelance website and mobile app development services to clients in Malaysia and remotely worldwide. Engagements typically cover design in Figma, development in React or React Native, and full deployment to Vercel and the App Store / Play Store. Reach him at syedarifjr@gmail.com or +60 14-529 7072."
                      }
                    },
                    {
                      "@type": "Question",
                      name: "Where is Syed Mohamad Arif based?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "Syed Mohamad Arif is based in Sentul, Kuala Lumpur, Malaysia, and is open to remote work worldwide."
                      }
                    },
                    {
                      "@type": "Question",
                      name: "How can I contact Syed Mohamad Arif?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "Email: syedarifjr@gmail.com. Phone / WhatsApp: +60 14-529 7072. LinkedIn: https://linkedin.com/in/syedmhdarif. GitHub: https://github.com/syedmhdarif."
                      }
                    },
                    {
                      "@type": "Question",
                      name: "How do I hire a mobile app developer in Malaysia?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "You can hire Syed Mohamad Arif directly as a freelance mobile app developer based in Kuala Lumpur, Malaysia. He builds cross-platform iOS and Android apps with React Native and Expo, handles design in Figma, development in TypeScript, and full submission to the App Store and Play Store. Email syedarifjr@gmail.com or WhatsApp +60 14-529 7072 to start a conversation."
                      }
                    },
                    {
                      "@type": "Question",
                      name: "Where can I find a freelance React Native developer in Kuala Lumpur?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "Syed Mohamad Arif is a freelance React Native developer based in Kuala Lumpur, Malaysia, with 5 years of professional experience and live apps on the Google Play Store (Hikayat Daily Global, Hikayat Diri). He works with clients across Malaysia — including Petaling Jaya, Shah Alam, and Selangor — and remotely worldwide. Visit https://syedmohamadarif.site for projects and contact details."
                      }
                    },
                    {
                      "@type": "Question",
                      name: "How much does it cost to build a mobile app in Malaysia?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "Cost depends on scope, integrations, and timeline. A basic single-platform MVP typically starts in the low five figures MYR; a full cross-platform iOS and Android app with auth, payments, push notifications, and store submission usually lands in the mid-to-high five figures MYR. Syed Mohamad Arif provides clear, fixed-scope quotes after a free discovery call. Reach out at syedarifjr@gmail.com for a tailored estimate."
                      }
                    },
                    {
                      "@type": "Question",
                      name: "Do you build both iOS and Android apps?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. Syed Mohamad Arif builds cross-platform iOS and Android apps from a single React Native + Expo codebase, with native modules where needed. Full release pipelines run through Expo EAS or Codemagic, including Apple App Store and Google Play Store submission."
                      }
                    },
                    {
                      "@type": "Question",
                      name: "Do you offer both UI/UX design and development?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. Syed Mohamad Arif works across the full product lifecycle — UI/UX design and prototyping in Figma, development in TypeScript with React or React Native, testing, CI/CD, and deployment. This bridges the gap between design and engineering and avoids handoff friction."
                      }
                    },
                    {
                      "@type": "Question",
                      name: "Do you work with Malaysian SMEs and startups?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. Syed Mohamad Arif works with Malaysian SMEs, startups, and international clients on websites, web apps, and cross-platform mobile apps. Engagements run remotely across Malaysia (Kuala Lumpur, Selangor, Penang, Johor) and worldwide. Invoicing supported in MYR or USD."
                      }
                    }
                  ]
                }
              ]
            }),
          }}
        />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="pt-16 p-4 container mx-auto">
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre className="w-full p-4 overflow-x-auto">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}
