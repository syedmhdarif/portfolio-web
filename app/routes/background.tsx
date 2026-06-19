import type { Route } from "./+types/background";
import { Link } from "react-router";
import { Reveal, Stagger, StaggerItem } from "../components/motion";
import { SectionHeading } from "../components/SectionHeading";
import { GraduationCap, ArrowUpRight } from "../components/icons";
import { EXPERIENCE, EDUCATION, SKILLS, SKILLS_MARQUEE } from "../content/background";
import { SITE_URL, OG_IMAGE_URL, PERSON_NAME } from "../content/site";

const TITLE = `Background — Experience, Education & Skills | ${PERSON_NAME}`;
const DESCRIPTION =
  "The professional background of Syed Mohamad Arif — mobile app developer roles at Paywatch, Zonar, and Accenture, an Information Technology degree from IIUM, and a full skills breakdown across React Native, React, and TypeScript.";
const URL = `${SITE_URL}/background`;

export function meta(_: Route.MetaArgs) {
  return [
    { title: TITLE },
    { name: "description", content: DESCRIPTION },
    { tagName: "link", rel: "canonical", href: URL },
    { property: "og:title", content: TITLE },
    { property: "og:description", content: DESCRIPTION },
    { property: "og:type", content: "profile" },
    { property: "og:url", content: URL },
    { property: "og:image", content: OG_IMAGE_URL },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:image", content: OG_IMAGE_URL },
    { name: "twitter:title", content: TITLE },
    { name: "twitter:description", content: DESCRIPTION },
    {
      "script:ld+json": {
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "ProfilePage",
            "@id": `${URL}#profilepage`,
            url: URL,
            name: TITLE,
            description: DESCRIPTION,
            mainEntity: { "@id": `${SITE_URL}/#person` },
            inLanguage: "en-MY",
          },
          {
            "@type": "BreadcrumbList",
            "@id": `${URL}#breadcrumb`,
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
              { "@type": "ListItem", position: 2, name: "Background", item: URL },
            ],
          },
        ],
      },
    },
  ];
}

function ExperienceTimeline() {
  return (
    <section id="experience" className="wrap section scroll-mt-24" aria-labelledby="experience-title">
      <SectionHeading
        index="01"
        eyebrow="Experience"
        title={<span id="experience-title">Where I've worked.</span>}
        className="mb-12"
      />
      <div className="relative border-l border-line pl-6 sm:pl-10">
        <Stagger className="space-y-12" stagger={0.1}>
          {EXPERIENCE.map((job) => (
            <StaggerItem key={`${job.company}-${job.period}`} as="article" className="relative">
              <span
                className="absolute -left-[1.65rem] top-1.5 h-3 w-3 rounded-full border-2 border-paper bg-amber sm:-left-[2.65rem]"
                aria-hidden="true"
              />
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <h3 className="text-xl font-bold text-ink">
                  {job.title}
                  {job.isCurrent && (
                    <span className="ml-3 inline-flex items-center gap-1.5 align-middle text-sm font-medium text-ink-2">
                      <span className="chip-dot" aria-hidden="true" />
                      Current
                    </span>
                  )}
                </h3>
                <span className="font-mono text-sm text-ink-3">{job.period}</span>
              </div>
              <p className="mt-1 font-medium text-amber-text">{job.company}</p>
              <ul className="mt-4 space-y-2">
                {job.responsibilities.map((r, i) => (
                  <li key={i} className="flex gap-3 text-ink-2">
                    <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-ink-3" aria-hidden="true" />
                    <span>{r}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-4 flex flex-wrap gap-2">
                {job.technologies.map((t) => (
                  <span key={t} className="tag text-xs">
                    {t}
                  </span>
                ))}
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

function EducationList() {
  return (
    <section
      id="education"
      className="bg-paper-2 border-y border-line scroll-mt-24"
      aria-labelledby="education-title"
    >
      <div className="wrap section">
        <SectionHeading
          index="02"
          eyebrow="Education"
          title={<span id="education-title">Academic background.</span>}
          className="mb-12"
        />
        <Stagger className="grid gap-6 md:grid-cols-2" stagger={0.1}>
          {EDUCATION.map((e) => (
            <StaggerItem key={e.qualification} className="card flex gap-5 p-7">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-line text-amber-text">
                <GraduationCap className="h-6 w-6" />
              </span>
              <div>
                <h3 className="text-lg font-bold text-ink">{e.qualification}</h3>
                <p className="mt-1 font-medium text-amber-text">{e.institution}</p>
                <p className="mt-1 font-mono text-sm text-ink-3">{e.period}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

function SkillsSection() {
  return (
    <section id="skills" className="section scroll-mt-24" aria-labelledby="skills-title">
      <div className="wrap">
        <SectionHeading
          index="03"
          eyebrow="Skills"
          title={<span id="skills-title">Tools of the trade.</span>}
          className="mb-12"
        />
        <Stagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4" stagger={0.08}>
          {SKILLS.map((group) => (
            <StaggerItem key={group.title} className="card p-6">
              <h3 className="text-lg font-bold text-ink">{group.title}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.skills.map((s) => (
                  <span key={s} className="tag text-xs">
                    {s}
                  </span>
                ))}
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>

      {/* Marquee strip */}
      <div className="marquee mt-16 border-y border-line py-6" aria-hidden="true">
        <div className="marquee-track">
          {[...SKILLS_MARQUEE, ...SKILLS_MARQUEE].map((s, i) => (
            <span key={i} className="display text-2xl text-ink-3">
              {s}
              <span className="mx-6 text-amber">✦</span>
            </span>
          ))}
        </div>
      </div>

      <div className="wrap mt-16">
        <Reveal>
          <Link to="/#contact" className="btn btn-primary">
            Let's work together
            <ArrowUpRight className="h-5 w-5" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

export default function Background() {
  return (
    <main>
      <section className="wrap pt-28 pb-4 md:pt-36" aria-label="Background intro">
        <Reveal>
          <span className="eyebrow">Background</span>
          <h1 className="display mt-4 text-5xl sm:text-6xl">
            Experience, education<br />&amp; skills.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-2">
            Four years across fintech, telco, and product teams in Malaysia —
            building and shipping cross-platform mobile apps.
          </p>
        </Reveal>
      </section>
      <ExperienceTimeline />
      <EducationList />
      <SkillsSection />
    </main>
  );
}
