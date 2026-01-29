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

export const meta = () => {
  return [
    { title: "Syed Mohamad Arif – Frontend & Mobile Developer | Creator of Hikayat Daily" },
    {
      name: "description",
      content:
        "Syed Mohamad Arif is a Frontend & React Native developer from Kuala Lumpur, Malaysia. Creator of Hikayat Daily Global app. 4+ years experience building high-performance mobile apps with React Native, TypeScript, and modern web technologies.",
    },
    { name: "author", content: "Syed Mohamad Arif" },
    { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" },
    { name: "keywords", content: "Syed Mohamad Arif, Hikayat Daily, Hikayat Daily Global, React Native Developer, Mobile App Developer, Frontend Developer, Malaysia Developer, Kuala Lumpur, syedmhdarif, React Developer, TypeScript Developer" },
    { rel: "canonical", href: "https://syed-arif-portfolio.pages.dev/" },
    // Google Search Console
    { name: "google-site-verification", content: "6n28iJJhOuBcRAY4U_0kOigQ8Xbv2KCDlmahCnch_nM" },
    // Open Graph
    { property: "og:title", content: "Syed Mohamad Arif – Frontend & Mobile Developer | Creator of Hikayat Daily" },
    {
      property: "og:description",
      content:
        "Syed Mohamad Arif is a Frontend & React Native developer from Kuala Lumpur, Malaysia. Creator of Hikayat Daily Global app on Google Play Store. Specializing in high-performance mobile apps and clean UI/UX.",
    },
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
    {
      name: "twitter:description",
      content:
        "Frontend & React Native developer from Malaysia. Creator of Hikayat Daily Global app. Building high-performance mobile apps with modern technologies.",
    },
    { name: "twitter:creator", content: "@syedmhdarif" },
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
                  "@id": "https://syed-arif-portfolio.pages.dev/#person",
                  name: "Syed Mohamad Arif",
                  givenName: "Syed Mohamad",
                  familyName: "Arif",
                  alternateName: ["syedmhdarif", "Syed Arif"],
                  jobTitle: "Frontend & Mobile Developer",
                  description: "Frontend & React Native developer with 4+ years of experience specializing in high-performance mobile apps, clean UI/UX, and scalable systems. Creator of Hikayat Daily Global app.",
                  url: "https://syed-arif-portfolio.pages.dev/",
                  image: "https://syed-arif-portfolio.pages.dev/assets/syedArif-BwDWV4i4.png",
                  email: "syedarifjr@gmail.com",
                  telephone: "+60145297072",
                  address: {
                    "@type": "PostalAddress",
                    addressLocality: "Sentul, Kuala Lumpur",
                    addressCountry: "Malaysia"
                  },
                  alumniOf: [
                    {
                      "@type": "CollegeOrUniversity",
                      name: "International Islamic University Malaysia",
                      department: "Information Technology"
                    }
                  ],
                  knowsAbout: [
                    "React Native", "React", "TypeScript", "JavaScript", "Mobile App Development",
                    "Frontend Development", "Next.js", "Node.js", "Redux", "Firebase",
                    "iOS Development", "Android Development", "UI/UX Design", "Figma"
                  ],
                  hasOccupation: [
                    {
                      "@type": "Occupation",
                      name: "Mobile App Developer",
                      occupationLocation: { "@type": "Country", name: "Malaysia" },
                      skills: "React Native, TypeScript, Firebase, Redux, CI/CD"
                    }
                  ],
                  worksFor: {
                    "@type": "Organization",
                    name: "Paywatch Malaysia"
                  },
                  sameAs: [
                    "https://github.com/syedmhdarif",
                    "https://www.linkedin.com/in/syedmhdarif",
                    "https://wa.me/60145297072"
                  ]
                },
                {
                  "@type": "WebSite",
                  "@id": "https://syed-arif-portfolio.pages.dev/#website",
                  url: "https://syed-arif-portfolio.pages.dev/",
                  name: "Syed Mohamad Arif - Portfolio",
                  description: "Portfolio website of Syed Mohamad Arif, a Frontend & Mobile Developer from Malaysia",
                  publisher: { "@id": "https://syed-arif-portfolio.pages.dev/#person" },
                  inLanguage: "en-US"
                },
                {
                  "@type": "MobileApplication",
                  "@id": "https://syed-arif-portfolio.pages.dev/#hikayatdaily",
                  name: "Hikayat Daily Global",
                  alternateName: "Hikayat Daily",
                  description: "A mobile application available on Google Play Store, showcasing expertise in mobile app development and delivering production-ready applications.",
                  applicationCategory: "LifestyleApplication",
                  operatingSystem: "Android",
                  url: "https://play.google.com/store/apps/details?id=com.hikayatdailyglobal&hl=en",
                  downloadUrl: "https://play.google.com/store/apps/details?id=com.hikayatdailyglobal&hl=en",
                  softwareVersion: "1.0",
                  author: { "@id": "https://syed-arif-portfolio.pages.dev/#person" },
                  creator: { "@id": "https://syed-arif-portfolio.pages.dev/#person" },
                  offers: {
                    "@type": "Offer",
                    price: "0",
                    priceCurrency: "USD",
                    availability: "https://schema.org/InStock"
                  }
                },
                {
                  "@type": "ProfilePage",
                  "@id": "https://syed-arif-portfolio.pages.dev/#profilepage",
                  url: "https://syed-arif-portfolio.pages.dev/",
                  name: "Syed Mohamad Arif - Frontend & Mobile Developer Portfolio",
                  mainEntity: { "@id": "https://syed-arif-portfolio.pages.dev/#person" },
                  dateCreated: "2024-01-01",
                  dateModified: new Date().toISOString().split('T')[0],
                  inLanguage: "en-US"
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
