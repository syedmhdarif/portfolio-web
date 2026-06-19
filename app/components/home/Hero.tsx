import { useRef } from "react";
import { Link } from "react-router";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import profileImage from "../../assets/syedArif.webp";
import { ArrowUpRight, Mail } from "../icons";
import { Stagger, StaggerItem, CountUp } from "../motion";
import { HERO_STATS, LIVE_APPS, SOCIAL_PILLS } from "../../content/hero";
import { PERSON_NAME } from "../../content/site";

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
          className="lg:col-span-5"
          initial={reduce ? false : { opacity: 0, scale: 0.96 }}
          animate={reduce ? undefined : { opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
          style={reduce ? undefined : { y: parallaxY }}
        >
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-amber">
            <span
              className="signature absolute left-6 top-5 z-10 text-4xl sm:text-5xl"
              style={{ color: "var(--on-amber)" }}
              aria-hidden="true"
            >
              {PERSON_NAME}
            </span>
            <img
              src={profileImage}
              alt="Syed Mohamad Arif, mobile and web developer based in Kuala Lumpur"
              className="absolute inset-0 h-full w-full object-cover object-top"
              loading="eager"
              fetchPriority="high"
              width={800}
              height={861}
            />
            <Link
              to="/#work"
              aria-label="Jump to selected work"
              className="absolute bottom-5 right-5 z-10 grid h-14 w-14 place-items-center rounded-full bg-ink text-paper transition-transform hover:scale-105"
            >
              <ArrowUpRight className="h-6 w-6" />
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
