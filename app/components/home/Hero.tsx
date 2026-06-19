import { useRef } from "react";
import { Link } from "react-router";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import profileImage from "../../assets/syedArif.webp";
import lokalgigIcon from "../../assets/Lokalgig-icon.png";
import { ArrowUpRight, BookOpen, Github, Mail } from "../icons";
import { Stagger, StaggerItem, CountUp } from "../motion";
import { HERO_STATS, LIVE_APPS, SOCIAL_PILLS } from "../../content/hero";
import { PERSON_NAME, GITHUB_URL } from "../../content/site";

/**
 * Hero card silhouette (provided design asset). viewBox 356×371, with a
 * concave notch top-right (globe) and bottom-left (arrow). The portrait is
 * clipped to this path; the two circular buttons are positioned as a % of the
 * card so they stay seated in the notches at every size.
 */
const HERO_SHAPE_VIEWBOX = "0 0 358 371";
const HERO_SHAPE_PATH =
  "M285.478 0.00585938C285.651 0.00181226 285.825 0 286 0C298.15 0 308 9.84974 308 22C308 22.1743 307.997 22.3481 307.993 22.5215C307.996 22.6806 308 22.8401 308 23V28H308.186C309.662 39.8389 319.761 49 332 49H334C346.15 49 356 58.8497 356 71V324C356 349.957 334.957 371 309 371H99C74.6995 371 55 351.301 55 327V254C55 239.088 42.9117 227 28 227H22V226.916C17.1915 226.519 12.785 224.707 9.19922 221.894C3.62948 217.902 0 211.375 0 204C0 203.829 0.0019769 203.658 0.00585938 203.488C0.00261875 203.326 4.7088e-09 203.163 0 203V44C0 19.6995 19.6995 1.06303e-06 44 0H285C285.16 0 285.319 0.00262501 285.478 0.00585938Z";

function SocialPills() {
  return (
    <ul className="flex items-center gap-2">
      {SOCIAL_PILLS.map((s) => (
        <li key={s.label}>
          <a
            href={s.href}
            target={s.href.startsWith("mailto:") ? undefined : "_blank"}
            rel="noopener noreferrer"
            aria-label={s.label}
            className="grid h-11 w-11 place-items-center rounded-full border border-line text-sm font-medium lowercase text-ink-2 transition-colors hover:border-ink hover:text-ink"
          >
            {s.short}
          </a>
        </li>
      ))}
    </ul>
  );
}

export function Hero() {
  const reduce = useReducedMotion();
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start start", "end start"],
  });
  const parallaxY = useTransform(scrollYProgress, [0, 1], [0, -70]);

  return (
    <section id="top" className="wrap pt-28 pb-16 md:pt-36 md:pb-24" aria-label="Introduction">
      <div className="grid items-end gap-10 lg:grid-cols-12 lg:gap-8">
        {/* Left — type-led intro */}
        <Stagger
          as="div"
          trigger="mount"
          stagger={0.09}
          className="lg:col-span-7"
        >
          <StaggerItem>
            <span className="chip">
              <span className="chip-dot" aria-hidden="true" />
              Available for freelance &amp; full-time
            </span>
          </StaggerItem>

          <h1 className="display mt-6 text-[clamp(3.25rem,12vw,8.5rem)] leading-[0.9]">
            <StaggerItem as="span" className="block">
              Syed
            </StaggerItem>
            <StaggerItem as="span" className="block">
              Arif<span className="text-amber">.</span>
            </StaggerItem>
          </h1>

          <StaggerItem>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-ink-2 sm:text-xl">
              Mobile &amp; web developer in Kuala Lumpur. I design and ship
              cross-platform apps and fast websites for businesses across
              Malaysia, Singapore &amp; SEA — from Figma to the app stores.
            </p>
          </StaggerItem>

          <StaggerItem className="mt-8 flex flex-wrap items-center gap-4">
            <a href="#contact" className="btn btn-primary">
              <Mail className="h-5 w-5" />
              Get in touch
            </a>
            <a href="#work" className="btn btn-ghost">
              View work
            </a>
          </StaggerItem>

          <StaggerItem className="mt-8">
            <SocialPills />
          </StaggerItem>
        </Stagger>

        {/* Right — amber portrait card with parallax */}
        <motion.div
          ref={cardRef}
          className="relative lg:col-span-5"
          initial={reduce ? false : { opacity: 0, scale: 0.96 }}
          animate={reduce ? undefined : { opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
          style={reduce ? undefined : { y: parallaxY }}
        >
          <div className="relative" style={{ aspectRatio: "358 / 371" }}>
            <svg
              viewBox={HERO_SHAPE_VIEWBOX}
              preserveAspectRatio="xMidYMid meet"
              className="absolute inset-0 h-full w-full"
              aria-hidden="true"
            >
              <defs>
                <clipPath id="heroShape" clipPathUnits="userSpaceOnUse">
                  <path d={HERO_SHAPE_PATH} />
                </clipPath>
              </defs>
              <path d={HERO_SHAPE_PATH} fill="var(--amber)" />
              <image
                href={profileImage}
                x="0"
                y="0"
                width="358"
                height="371"
                preserveAspectRatio="xMidYMid slice"
                clipPath="url(#heroShape)"
              />
            </svg>

            <span
              className="signature absolute left-[7%] top-[5%] z-10 text-xl sm:text-2xl"
              style={{ color: "#fff", textShadow: "0 1px 10px rgba(0,0,0,0.25)" }}
              aria-hidden="true"
            >
              {PERSON_NAME}
            </span>

            {/* GitHub — top-right circle (cx336 cy22 r22) */}
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="absolute z-10 grid aspect-square -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-ink text-paper transition-transform hover:scale-105"
              style={{ left: "93.85%", top: "5.93%", width: "10.5%" }}
            >
              <Github className="h-2/5 w-2/5" />
            </a>

            {/* LokalGig — left stack top (cx25.5 cy254.5 r22.5) */}
            <a
              href="https://lokalgig.my/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit LokalGig"
              className="absolute z-10 aspect-square -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-full bg-ink transition-transform hover:scale-105"
              style={{ left: "7.12%", top: "68.6%", width: "10.7%" }}
            >
              <img src={lokalgigIcon} alt="" className="h-full w-full object-contain p-2.5" loading="lazy" />
            </a>

            {/* Hikayat Daily — left stack middle (cx25.5 cy301.5 r22.5) */}
            <a
              href="https://play.google.com/store/apps/details?id=com.hikayatdailyglobal&hl=en"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Hikayat Daily Global on Google Play"
              className="absolute z-10 grid aspect-square -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-ink text-paper transition-transform hover:scale-105"
              style={{ left: "7.12%", top: "81.27%", width: "10.7%" }}
            >
              <BookOpen className="h-2/5 w-2/5" />
            </a>

            {/* Arrow → Work — left stack bottom (cx25.5 cy348.5 r22.5) */}
            <Link
              to="/#work"
              aria-label="Jump to selected work"
              className="absolute z-10 grid aspect-square -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-ink text-paper transition-transform hover:scale-105"
              style={{ left: "7.12%", top: "93.94%", width: "10.7%" }}
            >
              <ArrowUpRight className="h-2/5 w-2/5" />
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Stats strip */}
      <div className="mt-14 grid gap-8 border-t border-line pt-8 sm:grid-cols-2 lg:mt-20">
        {HERO_STATS.map((stat) => (
          <div key={stat.label}>
            <p className="display text-5xl sm:text-6xl">
              <CountUp value={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
            </p>
            <p className="mt-2 max-w-xs text-ink-2">{stat.label}</p>
          </div>
        ))}
      </div>

      <p className="mt-6 text-sm text-ink-3">
        {LIVE_APPS} apps live on Google Play · Creator of Hikayat Daily Global,
        Hikayat Diri &amp; LokalGig
      </p>
    </section>
  );
}
