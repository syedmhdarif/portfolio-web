import { Reveal, Stagger, StaggerItem } from "../motion";
import { SectionHeading } from "../SectionHeading";
import { ArrowUpRight, Check } from "../icons";
import { SERVICES, PROCESS, PROJECT_STACK } from "../../content/services";

function ServiceCard({ service }: { service: (typeof SERVICES)[number] }) {
  return (
    <StaggerItem as="article" className="card flex flex-col p-7 md:p-9">
      <h3 className="display text-2xl sm:text-3xl">{service.title}</h3>
      <p className="mt-2 font-medium text-amber-text">{service.tagline}</p>
      <p className="mt-4 leading-relaxed text-ink-2">{service.description}</p>
      <ul className="mt-6 space-y-3">
        {service.deliverables.map((d) => (
          <li key={d} className="flex gap-3 text-ink">
            <Check className="mt-0.5 h-5 w-5 shrink-0 text-amber-text" />
            <span>{d}</span>
          </li>
        ))}
      </ul>
      <div className="mt-7 flex flex-wrap gap-2 border-t border-line pt-6">
        {service.stack.map((s) => (
          <span key={s} className="tag text-xs">
            {s}
          </span>
        ))}
      </div>
    </StaggerItem>
  );
}

export function Services() {
  return (
    <section
      id="services"
      className="bg-paper-2 border-y border-line scroll-mt-24"
      aria-labelledby="services-title"
    >
      <div className="wrap section">
        <SectionHeading
          index="03"
          eyebrow="Services"
          title={<span id="services-title">What I can build for you.</span>}
          lead="Freelance development for Malaysian and international clients — based in Kuala Lumpur, available remotely worldwide."
          className="mb-12"
        />

        {/* Service offerings */}
        <Stagger className="grid gap-8 md:grid-cols-2" stagger={0.1}>
          {SERVICES.map((s) => (
            <ServiceCard key={s.id} service={s} />
          ))}
        </Stagger>

        {/* Process */}
        <div className="mt-20">
          <Reveal>
            <h3 className="display text-2xl sm:text-3xl">How I work</h3>
            <p className="mt-2 max-w-2xl text-ink-2">
              A clear path from idea to production — collaborative, transparent,
              and shippable at every step.
            </p>
          </Reveal>
          <Stagger className="mt-10 grid gap-6 md:grid-cols-3" stagger={0.1}>
            {PROCESS.map((step) => (
              <StaggerItem
                key={step.step}
                className="rounded-lg border border-line bg-paper p-6"
              >
                <div className="flex items-baseline justify-between">
                  <span className="display text-5xl text-amber">{step.step}</span>
                  <h4 className="text-lg font-bold text-ink">{step.title}</h4>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-ink-2">
                  {step.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {step.tools.map((t) => (
                    <span key={t} className="tag text-xs">
                      {t}
                    </span>
                  ))}
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>

        {/* What you'll need */}
        <div className="mt-20">
          <Reveal>
            <h3 className="display text-2xl sm:text-3xl">What you'll need</h3>
            <p className="mt-2 max-w-2xl text-ink-2">
              Every project ships with its own stack of services. Here's what I
              set up — and what it costs you to run — across domain, hosting,
              database, and mobile build.
            </p>
          </Reveal>
          <Stagger
            className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
            stagger={0.07}
          >
            {PROJECT_STACK.map((item) => (
              <StaggerItem
                key={item.title}
                className="flex flex-col rounded-lg border border-line bg-paper p-6"
              >
                <h4 className="text-lg font-bold text-ink">{item.title}</h4>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-2">
                  {item.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2 border-t border-line pt-4">
                  {item.items.map((i) => (
                    <span key={i} className="tag text-xs">
                      {i}
                    </span>
                  ))}
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>

        {/* CTA */}
        <Reveal className="mt-20">
          <div className="flex flex-col items-start gap-6 rounded-2xl bg-ink p-8 md:flex-row md:items-center md:justify-between md:p-12">
            <div>
              <h3 className="display text-3xl text-paper sm:text-4xl">
                Have a project in mind?
              </h3>
              <p className="mt-3 max-w-xl text-paper/70">
                Whether it's a landing page, a full product, or a mobile app —
                let's talk through scope, stack, and timeline. No obligation.
              </p>
            </div>
            <a href="#contact" className="btn btn-amber shrink-0">
              Have a chat
              <ArrowUpRight className="h-5 w-5" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
