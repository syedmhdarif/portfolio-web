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
    { title: "Syed Arif – Frontend & Mobile Developer" },
    {
      name: "description",
      content:
        "Frontend & React Native developer specializing in high-performance apps, clean UI/UX, and scalable systems.",
    },
    { name: "author", content: "Syed Arif" },
    { name: "robots", content: "index, follow" },
    // Open Graph
    { property: "og:title", content: "Syed Arif – Frontend & Mobile Developer" },
    {
      property: "og:description",
      content:
        "Frontend & React Native developer specializing in high-performance apps, clean UI/UX, and scalable systems.",
    },
    { property: "og:type", content: "website" },
    { property: "og:url", content: "https://syed-arif-portfolio.pages.dev/" },
    { property: "og:image", content: "https://syed-arif-portfolio.pages.dev/assets/syedArif-BwDWV4i4.png" },
    // Twitter Card
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:image", content: "https://syed-arif-portfolio.pages.dev/assets/syedArif-BwDWV4i4.png" },
    { name: "twitter:title", content: "Syed Arif – Frontend & Mobile Developer" },
    {
      name: "twitter:description",
      content:
        "Frontend & React Native developer specializing in high-performance apps, clean UI/UX, and scalable systems.",
    },
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
              "@type": "Person",
              name: "Syed Arif",
              jobTitle: "Frontend & Mobile Developer",
              url: "https://syed-arif-portfolio.pages.dev/",
              sameAs: [
                "https://github.com/syedmhdarif",
                "https://www.linkedin.com/in/syedmhdarif",
              ],
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
