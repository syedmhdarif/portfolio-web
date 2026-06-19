import { useState } from "react";
import type { Route } from "./+types/learn";
import { Link } from "react-router";
import { Shield, Clock, ArrowUpRight } from "../components/icons";
import { Reveal, Stagger, StaggerItem } from "../components/motion";
import { SectionHeading } from "../components/SectionHeading";

const PAGE_TITLE = "Learning Space – Notes on Software Engineering & Security | Syed Mohamad Arif";
const PAGE_DESCRIPTION =
  "Notes, takeaways, and deep dives from Syed Mohamad Arif's continuous learning journey in software development and web application security — including the OWASP Top 10.";
const PAGE_URL = "https://syedmohamadarif.site/learn";
const OG_IMAGE = "https://syedmohamadarif.site/og-image.png";

export function meta(_: Route.MetaArgs) {
  return [
    { title: PAGE_TITLE },
    { name: "description", content: PAGE_DESCRIPTION },
    { tagName: "link", rel: "canonical", href: PAGE_URL },
    { property: "og:title", content: PAGE_TITLE },
    { property: "og:description", content: PAGE_DESCRIPTION },
    { property: "og:type", content: "website" },
    { property: "og:url", content: PAGE_URL },
    { property: "og:image", content: OG_IMAGE },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: PAGE_TITLE },
    { name: "twitter:description", content: PAGE_DESCRIPTION },
    { name: "twitter:image", content: OG_IMAGE },
    {
      "script:ld+json": {
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "CollectionPage",
            "@id": `${PAGE_URL}#collection`,
            url: PAGE_URL,
            name: PAGE_TITLE,
            description: PAGE_DESCRIPTION,
            inLanguage: "en-US",
            isPartOf: { "@id": "https://syedmohamadarif.site/#website" },
            about: { "@id": "https://syedmohamadarif.site/#person" },
            author: { "@id": "https://syedmohamadarif.site/#person" },
            mainEntity: {
              "@type": "ItemList",
              itemListOrder: "https://schema.org/ItemListOrderDescending",
              numberOfItems: 1,
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  url: "https://syedmohamadarif.site/learn/owasp-top-10",
                  name: "OWASP Top 10 — Key Takeaways",
                },
              ],
            },
          },
          {
            "@type": "BreadcrumbList",
            "@id": `${PAGE_URL}#breadcrumb`,
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://syedmohamadarif.site/" },
              { "@type": "ListItem", position: 2, name: "Learning Space", item: PAGE_URL },
            ],
          },
        ],
      },
    },
  ];
}

const topics = [
  {
    slug: "owasp-top-10",
    title: "OWASP Top 10 — Key Takeaways",
    description:
      "A concise study guide covering the OWASP organization, its methodology, and the #1 security risk: Broken Access Control.",
    category: "Security",
    icon: Shield,
    color: "accent",
    tags: ["OWASP", "Web Security", "Access Control", "ASVS"],
    readTime: "12 min read",
    date: "2025",
  },
];

const [featured, ...rest] = topics;
const CATEGORIES = ["All", ...Array.from(new Set(topics.map((t) => t.category)))];

export default function LearnPage() {
  const [filter, setFilter] = useState("All");
  const visible = filter === "All" ? rest : rest.filter((t) => t.category === filter);

  return (
    <main>
      {/* Hero */}
      <section className="wrap pt-28 pb-4 md:pt-36" aria-label="Learning space intro">
        <Reveal>
          <span className="eyebrow">Learning space</span>
          <h1 className="display mt-4 text-5xl sm:text-6xl">
            Notes &amp; deep dives.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-2">
            Takeaways from topics I've been exploring across software
            engineering and security — because the best way to learn is to
            teach.
          </p>
        </Reveal>
      </section>

      {/* Featured */}
      <section className="wrap section" aria-label="Featured article">
        <Reveal>
          <Link
            to={`/learn/${featured.slug}`}
            className="card group block overflow-hidden md:grid md:grid-cols-12"
          >
            <div className="grid place-items-center bg-paper-3 p-12 md:col-span-4">
              <featured.icon className="h-16 w-16 text-amber-text transition-transform duration-500 group-hover:scale-110" />
            </div>
            <div className="p-7 md:col-span-8 md:p-10">
              <div className="flex items-center gap-3">
                <span className="tag text-xs">{featured.category}</span>
                <span className="flex items-center gap-1.5 text-sm text-ink-3">
                  <Clock className="h-4 w-4" />
                  {featured.readTime}
                </span>
                <span className="eyebrow text-amber-text">Featured</span>
              </div>
              <h2 className="display mt-4 text-3xl transition-colors group-hover:text-amber-text sm:text-4xl">
                {featured.title}
              </h2>
              <p className="mt-4 leading-relaxed text-ink-2">{featured.description}</p>
              <span className="mt-6 inline-flex items-center gap-2 font-medium text-ink">
                Read the notes
                <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </div>
          </Link>
        </Reveal>
      </section>

      {/* Index */}
      <section className="wrap section pt-0" aria-label="All topics">
        <SectionHeading
          eyebrow="All topics"
          title="Browse the library."
          className="mb-8"
        />

        {/* Category filter */}
        <div className="mb-10 flex flex-wrap gap-2" role="tablist" aria-label="Filter by category">
          {CATEGORIES.map((c) => (
            <button
              key={c}
              type="button"
              role="tab"
              aria-selected={filter === c}
              onClick={() => setFilter(c)}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                filter === c
                  ? "border-ink bg-ink text-paper"
                  : "border-line text-ink-2 hover:border-ink-3 hover:text-ink"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        {visible.length > 0 ? (
          <Stagger className="grid gap-6 md:grid-cols-2" stagger={0.08}>
            {visible.map((topic) => (
              <StaggerItem
                as="article"
                key={topic.slug}
                className="card group flex flex-col p-7"
              >
                <Link to={`/learn/${topic.slug}`} className="flex h-full flex-col">
                  <div className="flex items-center gap-3">
                    <topic.icon className="h-6 w-6 text-amber-text" />
                    <span className="tag text-xs">{topic.category}</span>
                  </div>
                  <h3 className="mt-4 text-xl font-bold text-ink group-hover:text-amber-text">
                    {topic.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-2">
                    {topic.description}
                  </p>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
        ) : (
          <Reveal>
            <div className="rounded-lg border border-dashed border-line p-10 text-center">
              <p className="text-lg text-ink-2">More topics coming soon.</p>
              <p className="mt-2 text-sm text-ink-3">
                I'm always learning something new — check back later.
              </p>
            </div>
          </Reveal>
        )}
      </section>
    </main>
  );
}
