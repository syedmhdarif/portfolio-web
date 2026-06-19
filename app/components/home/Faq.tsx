import { Reveal } from "../motion";
import { SectionHeading } from "../SectionHeading";
import { ChevronRight } from "../icons";
import { HOMEPAGE_FAQ } from "../../content/site";

export function Faq() {
  return (
    <section
      id="faq"
      className="bg-paper-2 border-t border-line scroll-mt-24"
      aria-labelledby="faq-title"
    >
      <div className="wrap section">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-4">
            <SectionHeading
              index="05"
              eyebrow="FAQ"
              title={<span id="faq-title">Good to know.</span>}
            />
          </div>

          <div className="lg:col-span-8">
            <Reveal>
              <div className="overflow-hidden rounded-lg border border-line bg-paper">
                {HOMEPAGE_FAQ.map((qa, i) => (
                  <details key={i} className="group border-b border-line last:border-b-0">
                    <summary className="flex cursor-pointer items-center justify-between gap-4 p-5 text-lg font-medium text-ink transition-colors hover:text-amber-text sm:p-6">
                      <span>{qa.question}</span>
                      <ChevronRight className="h-5 w-5 shrink-0 text-ink-3 transition-transform duration-200 group-open:rotate-90" />
                    </summary>
                    <div className="px-5 pb-6 sm:px-6">
                      <p className="leading-relaxed text-ink-2">{qa.answer}</p>
                    </div>
                  </details>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
