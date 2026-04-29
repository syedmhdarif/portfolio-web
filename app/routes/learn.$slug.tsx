import type { Route } from "./+types/learn.$slug";
import { Link, useParams } from "react-router";
import { ArrowLeft, BookOpen, Shield, Clock } from "../components/icons";

type ArticleMeta = {
  title: string;
  description: string;
  category: string;
  readTime: string;
  /** ISO date for schema.org datePublished */
  datePublished: string;
  /** ISO date for schema.org dateModified */
  dateModified: string;
  /** Display label */
  date: string;
  /** Reading time in minutes for schema.org timeRequired (ISO 8601 duration) */
  timeRequiredISO: string;
  /** Word count for schema.org wordCount */
  wordCount: number;
  /** Topical keywords for schema.org keywords */
  keywords: string[];
  /** FAQ used for FAQPage schema (also surfaces in AI answer engines) */
  faq: { question: string; answer: string }[];
  /** Speakable CSS selectors for voice search */
  speakableSelectors: string[];
  content: () => React.ReactNode;
};

const SITE_URL = "https://syedmohamadarif.site";
const OG_IMAGE = `${SITE_URL}/og-image.png`;

const articles: Record<string, ArticleMeta> = {
  "owasp-top-10": {
    title: "OWASP Top 10 — Key Takeaways",
    description:
      "A concise study guide to the OWASP Top 10 (2021): what OWASP is, the methodology behind the list, key terminology (CWE, CVE, CVSS, ASVS), and a deep dive into the #1 risk — Broken Access Control.",
    category: "Security",
    readTime: "12 min read",
    datePublished: "2025-10-15",
    dateModified: "2026-04-29",
    date: "2025",
    timeRequiredISO: "PT12M",
    wordCount: 1800,
    keywords: [
      "OWASP",
      "OWASP Top 10",
      "Broken Access Control",
      "Web Application Security",
      "ASVS",
      "CWE",
      "CVE",
      "CVSS",
      "Authentication",
      "Authorization",
      "RBAC",
    ],
    faq: [
      {
        question: "What does OWASP stand for?",
        answer:
          "OWASP stands for Open Web Application Security Project. It is a free, open, non-profit global community founded in 2001 (non-profit since 2004) that produces freely available articles, methodologies, documentation, tools, and technologies to help organizations make web applications safer.",
      },
      {
        question: "What is the OWASP Top 10?",
        answer:
          "The OWASP Top 10 is an awareness document that lists the most critical web application security risks. It is published roughly every 3–4 years. The current 2021 edition is based on data from 500,000+ applications — the largest dataset OWASP has ever used — with 8 of 10 categories derived from data and 2 from practitioner surveys.",
      },
      {
        question: "What is the #1 risk in the OWASP Top 10 (2021)?",
        answer:
          "The #1 risk is Broken Access Control. It maps to 34 CWEs, was found in up to 94.55% of tested apps, and affected 318,487 of the 500,000+ applications studied — meaning users could access things they should not be able to access.",
      },
      {
        question: "What is the difference between authentication and authorization?",
        answer:
          "Authentication answers \"who are you?\" — proving identity, for example with a password or biometric. Authorization answers \"what can you do?\" — checking permissions, for example whether you are allowed to delete a record. Both must be enforced; authentication alone does not protect resources.",
      },
      {
        question: "How do you prevent Broken Access Control?",
        answer:
          "Deny by default, enforce access checks server-side (never trust client-side), implement access control logic once and reuse it, enforce record ownership so users can only CRUD their own data, disable directory listings, invalidate JWTs on logout, rate-limit APIs, log all failures, and test like an attacker.",
      },
      {
        question: "What is the difference between CWE, CVE, and CVSS?",
        answer:
          "CWE is a general category of a software weakness, such as path traversal. CVE is a specific named vulnerability in a real product, such as Log4Shell. CVSS is a 1–10 scoring system that rates how exploitable and impactful a vulnerability is.",
      },
      {
        question: "What is OWASP ASVS?",
        answer:
          "ASVS is the OWASP Application Security Verification Standard — an actionable checklist you run against your application. The Top 10 tells you what the problems are; ASVS tells you how to build against them.",
      },
    ],
    speakableSelectors: ["h1", "h2", "h3", ".article-content p"],
    content: OWASPContent,
  },
};

export function meta({ params }: Route.MetaArgs) {
  const slug = params.slug ?? "";
  const article = articles[slug];
  if (!article) {
    return [
      { title: "Article Not Found – Learning Space | Syed Mohamad Arif" },
      { name: "robots", content: "noindex, follow" },
    ];
  }

  const url = `${SITE_URL}/learn/${slug}`;
  const title = `${article.title} – Learning Space | Syed Mohamad Arif`;
  const description = article.description;

  return [
    { title },
    { name: "description", content: description },
    { tagName: "link", rel: "canonical", href: url },
    { property: "og:title", content: article.title },
    { property: "og:description", content: description },
    { property: "og:type", content: "article" },
    { property: "og:url", content: url },
    { property: "og:image", content: OG_IMAGE },
    { property: "article:published_time", content: article.datePublished },
    { property: "article:modified_time", content: article.dateModified },
    { property: "article:author", content: "Syed Mohamad Arif" },
    { property: "article:section", content: article.category },
    ...article.keywords.map((tag) => ({ property: "article:tag", content: tag })),
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: article.title },
    { name: "twitter:description", content: description },
    { name: "twitter:image", content: OG_IMAGE },
    {
      "script:ld+json": {
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "TechArticle",
            "@id": `${url}#article`,
            headline: article.title,
            description,
            url,
            mainEntityOfPage: url,
            datePublished: article.datePublished,
            dateModified: article.dateModified,
            inLanguage: "en-US",
            articleSection: article.category,
            keywords: article.keywords.join(", "),
            wordCount: article.wordCount,
            timeRequired: article.timeRequiredISO,
            image: { "@type": "ImageObject", url: OG_IMAGE, width: 1200, height: 630 },
            author: { "@id": `${SITE_URL}/#person` },
            creator: { "@id": `${SITE_URL}/#person` },
            publisher: { "@id": `${SITE_URL}/#person` },
            isPartOf: { "@id": `${SITE_URL}/#website` },
            about: article.keywords.map((k) => ({ "@type": "Thing", name: k })),
            speakable: {
              "@type": "SpeakableSpecification",
              cssSelector: article.speakableSelectors,
            },
            citation: "OWASP Top 10 (2021) — InfoSec Skills Learning Path by John Wagnon (F5 Networks)",
          },
          {
            "@type": "BreadcrumbList",
            "@id": `${url}#breadcrumb`,
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
              { "@type": "ListItem", position: 2, name: "Learning Space", item: `${SITE_URL}/learn` },
              { "@type": "ListItem", position: 3, name: article.title, item: url },
            ],
          },
          {
            "@type": "FAQPage",
            "@id": `${url}#faq`,
            mainEntity: article.faq.map((qa) => ({
              "@type": "Question",
              name: qa.question,
              acceptedAnswer: { "@type": "Answer", text: qa.answer },
            })),
          },
        ],
      },
    },
  ];
}

export default function ArticlePage() {
  const { slug } = useParams();
  const article = articles[slug ?? ""];

  if (!article) {
    return (
      <div className="min-h-screen bg-surface flex items-center justify-center">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-text-primary">
            Article not found
          </h1>
          <Link
            to="/learn"
            className="inline-flex items-center gap-2 text-accent hover:text-accent-light transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Learning Space
          </Link>
        </div>
      </div>
    );
  }

  const Content = article.content;

  return (
    <div className="min-h-screen bg-surface">
      {/* Navigation */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
        <div className="glass-card px-2 py-2 flex items-center gap-1">
          <Link
            to="/"
            className="px-4 py-2 text-sm font-medium text-text-secondary hover:text-accent transition-colors"
          >
            Home
          </Link>
          <Link
            to="/learn"
            className="px-4 py-2 text-sm font-medium text-text-secondary hover:text-accent transition-colors"
          >
            Learn
          </Link>
        </div>
      </nav>

      {/* Article Header */}
      <header className="mesh-gradient pt-32 pb-16 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6">
          <Link
            to="/learn"
            className="inline-flex items-center gap-2 text-text-muted hover:text-accent transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm">Back to Learning Space</span>
          </Link>

          <div className="space-y-4">
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium">
                <Shield className="w-3.5 h-3.5" />
                {article.category}
              </span>
              <span className="flex items-center gap-1.5 text-text-muted text-sm">
                <Clock className="w-3.5 h-3.5" />
                {article.readTime}
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-text-primary">
              {article.title}
            </h1>
            <p className="text-lg text-text-secondary max-w-2xl leading-relaxed">
              {article.description}
            </p>
          </div>
        </div>
      </header>

      {/* Article Content */}
      <main className="max-w-4xl mx-auto px-6 py-16">
        <article className="article-content">
          <Content />
        </article>

        {/* Bottom Navigation */}
        <div className="mt-16 pt-8 border-t border-border flex items-center justify-between">
          <Link
            to="/learn"
            className="inline-flex items-center gap-2 text-text-muted hover:text-accent transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>All Topics</span>
          </Link>
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-surface-elevated border border-border hover:border-accent text-text-primary font-medium rounded-xl transition-all hover:scale-105"
          >
            <BookOpen className="w-4 h-4" />
            Portfolio
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-8 border-t border-border">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-text-muted text-sm">
              &copy; 2025 Syed Mohamad Arif. All rights reserved.
            </p>
            <Link
              to="/"
              className="text-text-muted text-sm hover:text-accent transition-colors"
            >
              Back to Portfolio
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

/* ─── OWASP Article Content ─── */

function SectionCard({ children }: { children: React.ReactNode }) {
  return <div className="glass-card p-6 md:p-8 mb-8">{children}</div>;
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-2xl md:text-3xl font-bold text-text-primary mb-4">
      {children}
    </h2>
  );
}

function SubTitle({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="text-xl font-bold text-text-primary mb-3">{children}</h3>
  );
}

function Paragraph({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-text-secondary leading-relaxed mb-4">{children}</p>
  );
}

function Highlight({ children }: { children: React.ReactNode }) {
  return <span className="text-accent font-medium">{children}</span>;
}

function Bold({ children }: { children: React.ReactNode }) {
  return <span className="text-text-primary font-medium">{children}</span>;
}

function InfoTable({
  headers,
  rows,
}: {
  headers: string[];
  rows: string[][];
}) {
  return (
    <div className="overflow-x-auto mb-4">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-border">
            {headers.map((h) => (
              <th
                key={h}
                className="text-left py-3 px-4 text-text-primary font-semibold"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr
              key={i}
              className="border-b border-border/50 hover:bg-surface-elevated/50 transition-colors"
            >
              {row.map((cell, j) => (
                <td key={j} className="py-3 px-4 text-text-secondary">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function CodeBlock({ children }: { children: React.ReactNode }) {
  return (
    <pre className="bg-surface-elevated border border-border rounded-xl p-4 mb-4 overflow-x-auto">
      <code className="text-sm text-text-secondary font-mono">{children}</code>
    </pre>
  );
}

function Callout({ children }: { children: React.ReactNode }) {
  return (
    <blockquote className="border-l-4 border-accent pl-4 py-2 mb-4 bg-accent/5 rounded-r-lg">
      <p className="text-text-secondary leading-relaxed italic">{children}</p>
    </blockquote>
  );
}

function OWASPContent() {
  return (
    <>
      {/* What is OWASP */}
      <SectionCard>
        <SectionTitle>What is OWASP?</SectionTitle>
        <Paragraph>
          <Highlight>OWASP</Highlight> stands for{" "}
          <Bold>Open Web Application Security Project</Bold> — a free, open,
          non-profit global community founded in <Bold>2001</Bold> (non-profit
          since 2004), dedicated to making web applications safer worldwide.
        </Paragraph>
        <InfoTable
          headers={["Core Value", "What it Means"]}
          rows={[
            ["Open", "Everything is transparent — code, finances, documents"],
            ["Innovation", "Encourages experimentation, hackathons, CTFs"],
            ["Global", "Inclusive of everyone, everywhere"],
            ["Integrity", "Vendor-neutral — no product bias"],
          ]}
        />
        <Callout>
          Anyone can join — beginners welcome. Members are volunteers from all
          walks of the tech world.
        </Callout>
      </SectionCard>

      {/* What is the OWASP Top 10 */}
      <SectionCard>
        <SectionTitle>What is the OWASP Top 10?</SectionTitle>
        <Paragraph>
          An <Bold>awareness document</Bold> listing the{" "}
          <Bold>most critical web application security risks</Bold>, published
          roughly every <Highlight>3–4 years</Highlight>.
        </Paragraph>
        <ul className="space-y-2 mb-4">
          {[
            "Latest edition: 2021",
            "Based on data from 500,000+ applications — the largest dataset OWASP has ever used",
            "8 of 10 categories derived from hard data",
            "2 of 10 derived from security practitioner surveys",
            "Focus shifted to root causes (e.g. bad cryptography) over symptoms (e.g. exposed credit card data)",
          ].map((item, i) => (
            <li key={i} className="flex gap-3 text-text-secondary">
              <span className="text-accent mt-1 shrink-0">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </SectionCard>

      {/* Key Terminology */}
      <SectionCard>
        <SectionTitle>Key Terminology</SectionTitle>
        <InfoTable
          headers={["Term", "Simple Definition"]}
          rows={[
            [
              "CWE",
              'General category of a software weakness (e.g. "path traversal")',
            ],
            [
              "CVE",
              "A specific, named vulnerability in a real product (e.g. Log4j)",
            ],
            [
              "CVSS",
              "A scoring system (1–10) for how exploitable or impactful a vulnerability is",
            ],
            [
              "ASVS",
              "OWASP's Application Security Verification Standard — an actionable checklist you run against your app",
            ],
          ]}
        />
      </SectionCard>

      {/* The 2021 OWASP Top 10 */}
      <SectionCard>
        <SectionTitle>The 2021 OWASP Top 10 at a Glance</SectionTitle>
        <InfoTable
          headers={["#", "Risk", "One-liner"]}
          rows={[
            [
              "1",
              "Broken Access Control",
              "Users can access things they shouldn't",
            ],
            [
              "2",
              "Cryptographic Failures",
              "Weak or missing encryption exposes data",
            ],
            [
              "3",
              "Injection",
              "Attackers execute unauthorized commands (was #1 in 2017)",
            ],
            [
              "4",
              "Insecure Design",
              "Poor architecture makes security impossible",
            ],
            [
              "5",
              "Security Misconfiguration",
              "Default settings, wrong configs left exposed",
            ],
            [
              "6",
              "Vulnerable & Outdated Components",
              "Unpatched third-party libraries",
            ],
            [
              "7",
              "Identification & Auth Failures",
              "Weak login/session mechanisms",
            ],
            [
              "8",
              "Software & Data Integrity Failures",
              "Untrusted updates, CI/CD pipeline risks",
            ],
            [
              "9",
              "Security Logging & Monitoring Failures",
              "No logs = no visibility into attacks",
            ],
            [
              "10",
              "Server-Side Request Forgery (SSRF)",
              "Server tricked into making unintended requests",
            ],
          ]}
        />
      </SectionCard>

      {/* Deep Dive: Broken Access Control */}
      <SectionCard>
        <SectionTitle>Deep Dive: Broken Access Control (#1)</SectionTitle>

        <SubTitle>Why it's #1 — The Numbers</SubTitle>
        <InfoTable
          headers={["Metric", "Value"]}
          rows={[
            ["CWEs mapped", "34"],
            ["Apps affected (max)", "55.97%"],
            [
              "Max coverage",
              "94.55% — nearly every app tested had this issue",
            ],
            ["Exploit score", "6.92 / 10"],
            ["Impact score", "5.93 / 10"],
            ["Total vulnerable apps", "318,487 out of 500,000+"],
            ["Unique exploit paths (CVEs)", "19,013"],
          ]}
        />

        <SubTitle>Authentication vs Authorization</SubTitle>
        <Paragraph>Don't confuse them — both must be enforced.</Paragraph>
        <CodeBlock>
          {`Authentication  →  WHO are you? (Proving your identity)
Authorization   →  WHAT can you do? (Your permissions)`}
        </CodeBlock>

        <SubTitle>Types of Access Control</SubTitle>
        <InfoTable
          headers={["Type", "How it Works"]}
          rows={[
            [
              "RBAC (Role-Based)",
              "Access based on your role: user / admin / superuser",
            ],
            [
              "DAC (Discretionary)",
              "Access based on user identity or group membership",
            ],
            [
              "MAC (Mandatory)",
              "Access based on sensitivity labels assigned to data",
            ],
            [
              "Permission-Based",
              "Access based on specific action strings: read / write / delete",
            ],
          ]}
        />

        <SubTitle>Common Attack Scenarios</SubTitle>
        <ul className="space-y-2 mb-4">
          {[
            "Changing URL params: ?account=john → ?account=admin",
            "Force-browsing to /admin without being an admin",
            "Privilege escalation — acting as a higher-level user",
            "JWT token tampering or replay after logout",
            "CORS misconfiguration exposing APIs to unintended origins",
            "Using unauthorized HTTP methods (e.g. DELETE) on API endpoints",
          ].map((item, i) => (
            <li key={i} className="flex gap-3 text-text-secondary">
              <span className="text-accent mt-1 shrink-0">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </SectionCard>

      {/* How to Protect */}
      <SectionCard>
        <SectionTitle>How to Protect Your App</SectionTitle>
        <InfoTable
          headers={["Principle", "Action"]}
          rows={[
            ["Deny by default", "Block everything unless explicitly granted"],
            [
              "Enforce server-side",
              "Never trust client-side access checks",
            ],
            [
              "Implement once, reuse",
              "Standardize access control logic across the app",
            ],
            [
              "Enforce record ownership",
              "Users should only CRUD their own data",
            ],
            [
              "Disable directory listings",
              "Don't expose your app's file structure",
            ],
            [
              "Invalidate JWT on logout",
              "Prevent token replay attacks",
            ],
            ["Rate-limit APIs", "Minimize damage if a breach occurs"],
            [
              "Log all failures",
              "Track and alert on unauthorized access attempts",
            ],
            [
              "Test like an attacker",
              "Include security-focused QA, not just happy-path",
            ],
          ]}
        />
      </SectionCard>

      {/* Final Takeaways */}
      <SectionCard>
        <SectionTitle>Final Takeaways</SectionTitle>
        <div className="space-y-4">
          <Callout>
            <Bold>1. OWASP Top 10 ≠ Your Top 10</Bold> — Use it as a baseline
            awareness document. Your specific app may have different priority
            risks.
          </Callout>
          <Callout>
            <Bold>2. Build security in from the start</Bold> — Retrofitting
            access control is harder and costlier than doing it right during
            design.
          </Callout>
          <Callout>
            <Bold>3. Use ASVS alongside the Top 10</Bold> — The Top 10 tells
            you <em>what the problems are</em>. ASVS tells you{" "}
            <em>how to build against them</em>.
          </Callout>
          <Callout>
            <Bold>4. Access control is only effective if enforced server-side</Bold>{" "}
            — Client-side checks can always be bypassed. The server is the
            source of truth.
          </Callout>
          <Callout>
            <Bold>5. Keep watching for updates</Bold> — The Top 10 refreshes
            every 3–4 years. Next edition expected around 2024–2025.
          </Callout>
        </div>

        <p className="text-text-muted text-sm mt-6 italic">
          Based on the OWASP Top 10 (2021) — InfoSec Skills Learning Path by
          John Wagnon (F5 Networks)
        </p>
      </SectionCard>
    </>
  );
}
