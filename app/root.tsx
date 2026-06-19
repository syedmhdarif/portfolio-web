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
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Splash } from "./components/Splash";
import { PageTransition } from "./components/motion/PageTransition";

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
    href: "https://fonts.googleapis.com/css2?family=Archivo:ital,wght@0,400..900;1,400..900&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Sacramento&display=swap",
  },
];

// Set the colour theme before first paint to avoid a flash of the wrong theme.
// Reads an explicit user choice from localStorage, else falls back to the OS preference.
const NO_FLASH_THEME = `(function(){try{var t=localStorage.getItem('theme');if(t==='dark'||t==='light'){document.documentElement.setAttribute('data-theme',t);}else if(window.matchMedia&&window.matchMedia('(prefers-color-scheme: dark)').matches){document.documentElement.setAttribute('data-theme','dark');}}catch(e){}})();`;

// Decide the splash BEFORE first paint so the visitor never glimpses the real
// page first. When motion is allowed and the splash hasn't been seen this
// session, flag <html data-splash="active"> — CSS then paints #splash-cover over
// everything and locks scroll immediately. The React <Splash/> reads this flag,
// plays the boot sequence, then clears it. The timeout is a failsafe so a JS or
// hydration failure can never strand the page behind the cover.
const SPLASH_INIT = `(function(){try{var m=window.matchMedia;var reduce=m&&m('(prefers-reduced-motion: reduce)').matches;var seen;try{seen=sessionStorage.getItem('splashSeen')==='1';}catch(e){seen=false;}if(!reduce&&!seen){var d=document.documentElement;d.setAttribute('data-splash','active');setTimeout(function(){d.removeAttribute('data-splash');},6000);}}catch(e){}})();`;

// In React Router v7, a child route's meta() REPLACES the parent's meta (it does not merge by default).
// Site-wide static tags are therefore rendered directly in <head> below so they appear on every route.

// NOTE: Global `meta keywords` tag removed per SEO audit (P1).
// Modern Google search does not rely on meta keywords, and the previous long
// list read as legacy keyword stuffing. Prefer visible headings, link text,
// page copy, and structured data.

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script dangerouslySetInnerHTML={{ __html: NO_FLASH_THEME }} />
        <script dangerouslySetInnerHTML={{ __html: SPLASH_INIT }} />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Site-wide static meta — render here so they appear on every route (root.tsx meta() export is overridden by child routes in RR v7) */}
        <meta name="author" content="Syed Mohamad Arif" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="google-site-verification" content="6n28iJJhOuBcRAY4U_0kOigQ8Xbv2KCDlmahCnch_nM" />
        {/* Geo targeting (Bing and some legacy crawlers still use these) */}
        <meta name="geo.region" content="MY-14" />
        <meta name="geo.placename" content="Kuala Lumpur" />
        <meta name="geo.position" content="3.1390;101.6869" />
        <meta name="ICBM" content="3.1390, 101.6869" />
        <meta property="og:site_name" content="Syed Mohamad Arif Portfolio" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:locale:alternate" content="en_MY" />
        {/* ms_MY locale alternate removed: no Malay pages exist yet.
            Re-add when real hreflang-alternate Malay routes are created. */}
        <meta name="twitter:creator" content="@syedmhdarif" />
        <meta name="twitter:site" content="@syedmhdarif" />
        <Meta />
        <Links />
        {/*
          Global JSON-LD: Person + WebSite only.
          Route-specific entities (ProfilePage, ProfessionalService, FAQPage,
          BreadcrumbList, MobileApplication) are injected per-route so each
          page has a single clear mainEntity.
        */}
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
                  description: `Freelance mobile app and web developer based in Kuala Lumpur, Malaysia, with 4+ years of experience building React Native, React, and Next.js apps for Malaysian and international clients. Creator of Hikayat Daily Global, Hikayat Diri, and LokalGig.`,
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
              ]
            }),
          }}
        />
      </head>
      <body>
        {/* Painted before first paint via html[data-splash="active"] (see SPLASH_INIT)
            so the real page is never glimpsed before the splash. Sits below the
            animated <Splash/> overlay; cleared when the splash finishes. */}
        <div id="splash-cover" aria-hidden="true" />
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return (
    <>
      <Splash />
      <Header />
      <PageTransition>
        <Outlet />
      </PageTransition>
      <Footer />
    </>
  );
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
