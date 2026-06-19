import { Reveal } from "../motion";
import { SectionHeading } from "../SectionHeading";
import { ArrowUpRight, Mail, Phone, WhatsApp, MapPin, Linkedin, Github } from "../icons";
import {
  EMAIL,
  PHONE,
  PHONE_DISPLAY,
  WHATSAPP_URL,
  LOCATION_SHORT,
  LINKEDIN_URL,
  GITHUB_URL,
} from "../../content/site";

const CHANNELS = [
  { label: "Email", value: EMAIL, href: `mailto:${EMAIL}`, Icon: Mail, external: false },
  { label: "Phone", value: PHONE_DISPLAY, href: `tel:${PHONE}`, Icon: Phone, external: false },
  { label: "WhatsApp", value: PHONE_DISPLAY, href: WHATSAPP_URL, Icon: WhatsApp, external: true },
];

const SOCIALS = [
  { label: "LinkedIn", href: LINKEDIN_URL, Icon: Linkedin },
  { label: "GitHub", href: GITHUB_URL, Icon: Github },
];

export function Contact() {
  return (
    <section id="contact" className="wrap section scroll-mt-24" aria-labelledby="contact-title">
      <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-5">
          <SectionHeading
            index="04"
            eyebrow="Contact"
            title={<span id="contact-title">Free for a chat?</span>}
            lead="Tell me a little about what you're building. I'm in MYT (UTC+8) and usually reply within a day."
          />
          <Reveal delay={0.1}>
            <a
              href={`mailto:${EMAIL}`}
              className="signature mt-8 inline-block text-5xl text-amber-text transition-transform hover:-translate-y-0.5 sm:text-6xl"
            >
              {EMAIL}
            </a>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="mt-8 flex items-center gap-3">
              <span className="flex items-center gap-2 text-ink-2">
                <MapPin className="h-5 w-5 text-amber-text" />
                {LOCATION_SHORT}
              </span>
            </div>
          </Reveal>
        </div>

        <div className="lg:col-span-7">
          <Reveal>
            <ul className="overflow-hidden rounded-lg border border-line">
              {CHANNELS.map(({ label, value, href, Icon, external }) => (
                <li key={label} className="border-b border-line last:border-b-0">
                  <a
                    href={href}
                    target={external ? "_blank" : undefined}
                    rel={external ? "noopener noreferrer" : undefined}
                    className="group flex items-center gap-4 bg-paper-2 p-5 transition-colors hover:bg-paper-3 sm:p-6"
                  >
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-line text-amber-text">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="flex-1">
                      <span className="eyebrow block">{label}</span>
                      <span className="mt-1 block text-lg font-medium text-ink">{value}</span>
                    </span>
                    <ArrowUpRight className="h-5 w-5 text-ink-3 transition-colors group-hover:text-ink" />
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-6 flex items-center gap-3">
              {SOCIALS.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="grid h-12 w-12 place-items-center rounded-full border border-line text-ink transition-colors hover:border-ink-3 hover:text-amber-text"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
