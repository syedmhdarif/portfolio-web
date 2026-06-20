import { Link } from "react-router";
import { Reveal } from "../motion";
import { SectionHeading } from "../SectionHeading";
import {
  EXPERIENCE_YEARS_LONG,
  LOCATION_SHORT,
  CURRENT_ROLE,
  CURRENT_EMPLOYER,
} from "../../content/site";

const FACTS = [
  { k: "Based in", v: "Kuala Lumpur, MY" },
  { k: "Focus", v: "React Native · React" },
  { k: "Now", v: `${CURRENT_ROLE}, ${CURRENT_EMPLOYER}` },
  { k: "Markets", v: "Malaysia · Singapore · SEA" },
];

export function About() {
  return (
    <section id="about" className="wrap section scroll-mt-24" aria-labelledby="about-title">
      <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-5">
          <SectionHeading
            index="01"
            eyebrow="About"
            title={<span id="about-title">Design-minded engineer.</span>}
          />
        </div>

        <div className="lg:col-span-7">
          <Reveal>
            <div itemScope itemType="https://schema.org/Person">
              <meta itemProp="name" content="Syed Mohamad Arif" />
              <meta itemProp="jobTitle" content="Mobile & Web Developer" />
              <meta itemProp="address" content="Kuala Lumpur, Malaysia" />
              <p className="text-xl leading-relaxed text-ink sm:text-2xl" itemProp="description">
                I'm a mobile &amp; web developer based in{" "}
                <span className="text-amber-text">{LOCATION_SHORT}</span>, with{" "}
                {EXPERIENCE_YEARS_LONG} building cross-platform apps with React
                Native and fast web products with React.
              </p>
              <p className="mt-6 text-lg leading-relaxed text-ink-2">
                I work across the full product lifecycle — UI/UX in Figma,
                development in TypeScript, testing, and store deployment. I care
                about the details that make software feel calm and considered:
                type, motion, performance, and accessibility. Comfortable with
                Git, CI/CD, and Agile delivery, I bridge design and engineering
                to ship interfaces people actually enjoy using.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <dl className="mt-10 grid grid-cols-1 gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-2">
              {FACTS.map((f) => (
                <div key={f.k} className="bg-paper-2 p-5">
                  <dt className="eyebrow">{f.k}</dt>
                  <dd className="mt-2 font-medium text-ink">{f.v}</dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <Reveal delay={0.15}>
            <p className="mt-8 text-ink-2">
              Want the full story?{" "}
              <Link to="/background" className="link-underline font-medium">
                See my background
              </Link>{" "}
              — experience, education &amp; skills.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
