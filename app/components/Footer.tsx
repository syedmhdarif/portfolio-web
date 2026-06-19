import { Link } from "react-router";
import { Github, Linkedin, Mail, WhatsApp } from "./icons";
import { Monogram } from "./Monogram";
import { NAV_ITEMS } from "./nav-items";
import { EMAIL, GITHUB_URL, LINKEDIN_URL, WHATSAPP_URL, PERSON_NAME } from "../content/site";

const SOCIALS = [
  { label: "LinkedIn", href: LINKEDIN_URL, Icon: Linkedin },
  { label: "GitHub", href: GITHUB_URL, Icon: Github },
  { label: "WhatsApp", href: WHATSAPP_URL, Icon: WhatsApp },
  { label: "Email", href: `mailto:${EMAIL}`, Icon: Mail },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line" role="contentinfo">
      <div className="wrap py-14 md:py-20">
        <div className="flex flex-col gap-12 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <Link to="/" aria-label="Home" className="inline-block text-ink">
              <Monogram className="h-12 w-12" />
            </Link>
            <p className="mt-5 text-lg leading-relaxed text-ink-2">
              Mobile &amp; web developer in Kuala Lumpur. Building for Malaysia,
              Singapore &amp; the wider SEA region.
            </p>
          </div>

          <nav aria-label="Footer" className="flex flex-col gap-3">
            <span className="eyebrow mb-1">Navigate</span>
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                className="w-fit text-ink-2 transition-colors hover:text-ink"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex flex-col gap-3">
            <span className="eyebrow mb-1">Elsewhere</span>
            <div className="flex gap-3">
              {SOCIALS.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("mailto:") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="grid h-11 w-11 place-items-center rounded-full border border-line text-ink transition-colors hover:border-ink-3 hover:text-amber-text"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-line pt-6 text-sm text-ink-3 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} {PERSON_NAME}. All rights reserved.</p>
          <p>
            Creator of <span className="text-amber-text">Hikayat Daily Global</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
