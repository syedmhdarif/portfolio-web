import { Reveal, Stagger, StaggerItem } from "../motion";
import { SectionHeading } from "../SectionHeading";
import { ArrowUpRight } from "../icons";
import { FEATURED_PROJECT, GRID_PROJECTS, type Project } from "../../content/projects";

function StatusTag({ project }: { project: Project }) {
  if (!project.statusLabel) return null;
  return (
    <span className="inline-flex items-center gap-2 text-sm font-medium text-ink-2">
      <span className="chip-dot" aria-hidden="true" />
      {project.statusLabel}
    </span>
  );
}

function TechTags({ tech }: { tech: string[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {tech.map((t) => (
        <span key={t} className="tag text-xs">
          {t}
        </span>
      ))}
    </div>
  );
}

function FeaturedProject({ project }: { project: Project }) {
  return (
    <Reveal>
      <article
        className="card group grid overflow-hidden md:grid-cols-2"
        itemScope
        itemType={`https://schema.org/${project.schemaType}`}
      >
        <div className="relative grid min-h-64 place-items-center bg-paper-3 p-10 md:order-2">
          <img
            src={project.image}
            alt={`${project.name} — ${project.category}`}
            className="max-h-56 w-auto object-contain transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
            itemProp="image"
          />
        </div>
        <div className="flex flex-col p-7 md:order-1 md:p-10">
          <StatusTag project={project} />
          <h3 className="display mt-4 text-3xl sm:text-4xl" itemProp="name">
            {project.name}
          </h3>
          <p className="mt-2 font-medium text-amber-text" itemProp="applicationCategory">
            {project.category}
          </p>
          <p className="mt-4 leading-relaxed text-ink-2" itemProp="description">
            {project.description}
          </p>
          <meta itemProp="author" content="Syed Mohamad Arif" />
          {project.os && <meta itemProp="operatingSystem" content={project.os} />}
          <div className="mt-6">
            <TechTags tech={project.tech} />
          </div>
          <a
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            itemProp="url"
            className="btn btn-amber mt-7 w-fit"
          >
            {project.hrefLabel}
            <ArrowUpRight className="h-5 w-5" />
          </a>
        </div>
      </article>
    </Reveal>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <StaggerItem
      as="article"
      className="card group flex flex-col overflow-hidden"
    >
      <a
        href={project.href}
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-full flex-col"
        itemScope
        itemType={`https://schema.org/${project.schemaType}`}
      >
        <div className="relative grid h-44 place-items-center overflow-hidden bg-paper-3">
          <img
            src={project.image}
            alt={`${project.name} — ${project.category}`}
            className={
              project.fit === "cover"
                ? "h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                : "h-20 w-20 object-contain transition-transform duration-500 group-hover:scale-110"
            }
            loading="lazy"
            itemProp="image"
          />
          <span className="absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full bg-paper/80 text-ink opacity-0 backdrop-blur transition-opacity duration-300 group-hover:opacity-100">
            <ArrowUpRight className="h-4 w-4" />
          </span>
        </div>
        <div className="flex flex-1 flex-col p-6">
          {project.statusLabel && (
            <span className="mb-3">
              <StatusTag project={project} />
            </span>
          )}
          <h3 className="text-xl font-bold text-ink" itemProp="name">
            {project.name}
          </h3>
          <p className="mt-1 text-sm font-medium text-amber-text" itemProp="applicationCategory">
            {project.category}
          </p>
          <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-2" itemProp="description">
            {project.description}
          </p>
          <meta itemProp="author" content="Syed Mohamad Arif" />
          {project.os && <meta itemProp="operatingSystem" content={project.os} />}
          <div className="mt-5">
            <TechTags tech={project.tech} />
          </div>
        </div>
      </a>
    </StaggerItem>
  );
}

export function Work() {
  return (
    <section id="work" className="wrap section scroll-mt-24" aria-labelledby="work-title">
      <SectionHeading
        index="02"
        eyebrow="Selected work"
        title={<span id="work-title">Things I've shipped.</span>}
        lead="Personal products and client builds — from a marketplace to mobile apps on the Play Store."
        className="mb-12"
      />

      <div className="space-y-8">
        <FeaturedProject project={FEATURED_PROJECT} />
        <Stagger className="grid gap-8 md:grid-cols-2 lg:grid-cols-3" stagger={0.07}>
          {GRID_PROJECTS.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </Stagger>
      </div>
    </section>
  );
}
