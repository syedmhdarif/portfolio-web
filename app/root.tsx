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

// Site-wide defaults. Per-route meta() overrides title/description/og/twitter/canonical for that route.
export const meta = () => {
  return [
    { name: "author", content: "Syed Mohamad Arif" },
    { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" },
    { name: "keywords", content: "Syed Mohamad Arif, Hikayat Daily, Hikayat Daily Global, React Native Developer, Mobile App Developer, Frontend Developer, Malaysia Developer, Kuala Lumpur, syedmhdarif, React Developer, TypeScript Developer, LokalGig, Hikayat Diri, OWASP Top 10" },
    { name: "google-site-verification", content: "6n28iJJhOuBcRAY4U_0kOigQ8Xbv2KCDlmahCnch_nM" },
    { property: "og:site_name", content: "Syed Mohamad Arif Portfolio" },
    { property: "og:locale", content: "en_US" },
    { property: "og:locale:alternate", content: "en_MY" },
    { property: "og:locale:alternate", content: "ms_MY" },
    { name: "twitter:creator", content: "@syedmhdarif" },
    { name: "twitter:site", content: "@syedmhdarif" },
  ];
};


export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
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
                  jobTitle: "Frontend & Mobile Developer",
                  description: "Frontend & React Native developer based in Kuala Lumpur, Malaysia, with 5 years of experience specializing in high-performance mobile apps, clean UI/UX, and scalable systems. Creator of Hikayat Daily Global, Hikayat Diri, and LokalGig.",
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
                  name: "Syed Mohamad Arif — Web & Mobile Development Services",
                  description: "Freelance web and mobile app development services for Malaysian and international clients. Marketing sites, dashboards, full-stack web apps, and cross-platform iOS & Android apps with React Native.",
                  url: "https://syedmohamadarif.site/#services",
                  provider: { "@id": "https://syedmohamadarif.site/#person" },
                  areaServed: [
                    { "@type": "Country", name: "Malaysia" },
                    { "@type": "Place", name: "Worldwide (remote)" }
                  ],
                  serviceType: ["Website Development", "Mobile App Development", "React Native Development", "Frontend Development"],
                  hasOfferCatalog: {
                    "@type": "OfferCatalog",
                    name: "Development Services",
                    itemListElement: [
                      {
                        "@type": "Offer",
                        itemOffered: {
                          "@type": "Service",
                          name: "Website Development",
                          description: "Marketing sites, dashboards, and full-stack web apps built with React, React Router, and Next.js — typed, tested, and tuned for SEO and Core Web Vitals."
                        }
                      },
                      {
                        "@type": "Offer",
                        itemOffered: {
                          "@type": "Service",
                          name: "Mobile App Development",
                          description: "Cross-platform iOS and Android apps from one React Native + Expo codebase, with full release pipelines through EAS or Codemagic."
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
