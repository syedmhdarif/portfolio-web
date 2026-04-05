import type { Route } from "./+types/learn";
import { Link } from "react-router";
import { ArrowLeft, BookOpen, Shield, Clock, ChevronRight } from "../components/icons";

export function meta(_: Route.MetaArgs) {
  return [
    { title: "Learning Space – Syed Mohamad Arif" },
    {
      name: "description",
      content:
        "A collection of notes, takeaways, and deep dives from my continuous learning journey in software development and security.",
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

export default function LearnPage() {
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
            className="px-4 py-2 text-sm font-medium text-text-primary"
          >
            Learn
          </Link>
        </div>
      </nav>

      {/* Hero Header */}
      <header className="mesh-gradient pt-32 pb-20 relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-6">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-text-muted hover:text-accent transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm">Back to Portfolio</span>
          </Link>

          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20">
              <BookOpen className="w-4 h-4 text-accent" />
              <span className="text-sm text-text-secondary">
                Continuous Learning
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              My{" "}
              <span className="gradient-text">Learning Space</span>
            </h1>
            <p className="text-lg md:text-xl text-text-secondary max-w-2xl leading-relaxed">
              Notes, takeaways, and deep dives from topics I've been exploring.
              Because the best way to learn is to teach.
            </p>
          </div>
        </div>
      </header>

      {/* Topics Grid */}
      <main className="max-w-5xl mx-auto px-6 py-16">
        <div className="flex items-center justify-between mb-10">
          <div>
            <h2 className="text-2xl font-bold text-text-primary">Topics</h2>
            <p className="text-text-muted text-sm mt-1">
              {topics.length} {topics.length === 1 ? "article" : "articles"} so
              far
            </p>
          </div>
        </div>

        <div className="grid gap-6">
          {topics.map((topic) => {
            const Icon = topic.icon;
            return (
              <Link
                key={topic.slug}
                to={`/learn/${topic.slug}`}
                className="glass-card p-6 md:p-8 hover-lift group block"
              >
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-2xl bg-accent/20 flex items-center justify-center shrink-0 group-hover:bg-accent/30 transition-colors">
                    <Icon className="w-7 h-7 text-accent" />
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="inline-flex px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-medium">
                        {topic.category}
                      </span>
                      <span className="flex items-center gap-1 text-text-muted text-xs">
                        <Clock className="w-3.5 h-3.5" />
                        {topic.readTime}
                      </span>
                    </div>

                    <h3 className="text-xl md:text-2xl font-bold text-text-primary mb-2 group-hover:text-accent transition-colors">
                      {topic.title}
                    </h3>

                    <p className="text-text-secondary leading-relaxed mb-4">
                      {topic.description}
                    </p>

                    <div className="flex flex-wrap items-center gap-2">
                      {topic.tags.map((tag) => (
                        <span key={tag} className="skill-badge text-xs">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Arrow */}
                  <div className="hidden md:flex items-center self-center">
                    <ChevronRight className="w-5 h-5 text-text-muted group-hover:text-accent group-hover:translate-x-1 transition-all" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Coming Soon Placeholder */}
        <div className="mt-8 glass-card p-8 border-dashed text-center">
          <p className="text-text-muted text-lg">More topics coming soon...</p>
          <p className="text-text-muted text-sm mt-2">
            I'm always learning something new. Stay tuned!
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-8 border-t border-border">
        <div className="max-w-5xl mx-auto px-6">
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
