import { useEffect, useRef, useState, type ComponentType } from "react";
import { Link } from "react-router";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import profileImage from "../../assets/syedArif.png";
import lokalgigIcon from "../../assets/lokalgig-logo-placeholder.png";
import hikayatdailyIcon from "../../assets/hikayatdaily-logo-placeholder.png";
import { ArrowUpRight, Github, Linkedin, Mail, WhatsApp } from "../icons";
import { Stagger, StaggerItem, CountUp, Tilt3D, TextReveal, useAfterSplash } from "../motion";
import { HERO_STATS, SOCIAL_PILLS } from "../../content/hero";
import { PERSON_NAME, GITHUB_URL } from "../../content/site";

const HERO_SHAPE_VIEWBOX = "0 0 358 371";
const HERO_SHAPE_PATH =
  "M285.478 0.00585938C285.651 0.00181226 285.825 0 286 0C298.15 0 308 9.84974 308 22C308 22.1743 307.997 22.3481 307.993 22.5215C307.996 22.6806 308 22.8401 308 23V28H308.186C309.662 39.8389 319.761 49 332 49H334C346.15 49 356 58.8497 356 71V324C356 349.957 334.957 371 309 371H99C74.6995 371 55 351.301 55 327V254C55 239.088 42.9117 227 28 227H22V226.916C17.1915 226.519 12.785 224.707 9.19922 221.894C3.62948 217.902 0 211.375 0 204C0 203.829 0.0019769 203.658 0.00585938 203.488C0.00261875 203.326 4.7088e-09 203.163 0 203V44C0 19.6995 19.6995 1.06303e-06 44 0H285C285.16 0 285.319 0.00262501 285.478 0.00585938Z";

const SOCIAL_ICONS: Record<string, ComponentType<{ className?: string }>> = {
  LinkedIn: Linkedin,
  GitHub: Github,
  WhatsApp: WhatsApp,
  Email: Mail,
};

function SocialIcons() {
  return (
    <ul className="flex items-center gap-2.5">
      {SOCIAL_PILLS.map((s) => {
        const Icon = SOCIAL_ICONS[s.label] ?? Mail;
        return (
          <li key={s.label}>
            <a
              href={s.href}
              target={s.href.startsWith("mailto:") ? undefined : "_blank"}
              rel="noopener noreferrer"
              aria-label={s.label}
              className="grid h-11 w-11 place-items-center rounded-full border border-line text-ink-2 transition-colors hover:border-ink hover:bg-ink hover:text-paper"
            >
              <Icon className="h-[18px] w-[18px]" />
            </a>
          </li>
        );
      })}
    </ul>
  );
}

export function Hero() {
  const reduce = useReducedMotion();
  // Hold the entrance until the splash finishes, so it doesn't play behind it.
  const ready = useAfterSplash();
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start start", "end start"],
  });
  const parallaxY = useTransform(scrollYProgress, [0, 1], [0, -60]);

  // Parallax only on large, fine-pointer screens — on touch/mobile a scroll-
  // linked transform is the main source of scroll jank, so we drop it there.
  const [parallax, setParallax] = useState(false);
  useEffect(() => {
    if (reduce) return;
    const mq = window.matchMedia(
      "(min-width: 64rem) and (hover: hover) and (pointer: fine)"
    );
    const update = () => setParallax(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, [reduce]);

  return (
    <section
      id="top"
      className="wrap flex min-h-svh items-center pt-24 pb-12 md:pt-28"
      aria-label="Introduction"
    >
      <div className="grid w-full items-center gap-10 lg:grid-cols-12 lg:gap-10">
        {/* Left — type-led intro */}
        <Stagger
          as="div"
          trigger="mount"
          play={ready}
          stagger={0.08}
          className="order-2 lg:order-1 lg:col-span-5"
        >
          <StaggerItem>
            <span className="chip">
              <span className="chip-dot" aria-hidden="true" />
              Available for freelance &amp; full-time
            </span>
          </StaggerItem>

          {/* Masked clip-rise on the display headline — the signature entrance. */}
          <h1 className="display mt-5 text-[clamp(3rem,7vw,5.5rem)] leading-[0.9]">
            <TextReveal trigger="mount" play={ready} delay={0.12} className="block">
              Frontend
            </TextReveal>
            <TextReveal trigger="mount" play={ready} delay={0.22} className="block">
              Developer<span className="text-amber">.</span>
            </TextReveal>
          </h1>

          <StaggerItem>
            <p className="mt-5 max-w-md leading-relaxed text-ink-2">
              I'm <span className="font-medium text-ink">{PERSON_NAME}</span>, a
              freelance mobile &amp; frontend developer in Kuala Lumpur,
              Malaysia. I ship cross-platform apps and fast websites across
              Malaysia, Singapore &amp; SEA — and I'm the creator of{" "}
              <span className="text-amber-text">LokalGig</span> and{" "}
              <span className="text-amber-text">Hikayat Daily</span>.
            </p>
          </StaggerItem>

          <StaggerItem className="mt-6 flex flex-wrap items-center gap-3">
            <a href="#contact" className="btn btn-primary">
              <Mail className="h-5 w-5" />
              Get in touch
            </a>
            <a href="#work" className="btn btn-ghost">
              View work
            </a>
          </StaggerItem>

          <StaggerItem className="mt-6">
            <SocialIcons />
          </StaggerItem>

          {/* Stats — on the left, in view with everything else */}
          <StaggerItem className="mt-9 flex gap-10 border-t border-line pt-6">
            {HERO_STATS.map((stat) => (
              <div key={stat.label}>
                <p className="display text-3xl sm:text-4xl">
                  <CountUp value={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
                </p>
                <p className="mt-1 max-w-[11rem] text-sm text-ink-2">{stat.label}</p>
              </div>
            ))}
          </StaggerItem>
        </Stagger>

        {/* Right — amber portrait card: 3D tilt + parallax */}
        <motion.div
          ref={cardRef}
          className="order-1 lg:order-2 md:col-span-7"
          initial={reduce ? false : { opacity: 0, scale: 0.96 }}
          animate={
            reduce ? undefined : ready ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.96 }
          }
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
          style={parallax ? { y: parallaxY } : undefined}
        >
          <Tilt3D className="relative mx-auto w-full max-w-[38rem] lg:mr-0 lg:ml-auto">
            <div className="relative" style={{ aspectRatio: "358 / 371" }}>
              <svg
                viewBox={HERO_SHAPE_VIEWBOX}
                preserveAspectRatio="xMidYMid meet"
                className="absolute inset-0 h-full w-full"
                role="img"
                aria-label="Syed Mohamad Arif — mobile and web developer based in Kuala Lumpur"
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
                  height="380"
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

              {/* GitHub — top-right circle */}
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

              {/* LokalGig — left stack top */}
              {/* <a
                href="https://lokalgig.my/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit LokalGig"
                className="group absolute z-10 aspect-square -translate-x-1/2 -translate-y-1/2 rounded-full"
                style={{ left: "7.12%", top: "68.6%", width: "10.7%" }}
              >
                <span className="wave-ring" aria-hidden="true" />
                <span className="wave-ring wave-ring--delay" aria-hidden="true" />
                <span className="relative grid h-full w-full place-items-center overflow-hidden rounded-full bg-amber shadow-[0_0_0_2px_var(--amber)] transition-transform duration-300 group-hover:scale-105">
                  <img src={lokalgigIcon} alt="" className="h-full w-full object-contain p-1.5" loading="lazy" />
                </span>
              </a> */}

              {/* Hikayat Daily — left stack middle */}
              {/* <a
                href="https://play.google.com/store/apps/details?id=com.hikayatdailyglobal&hl=en"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Hikayat Daily Global on Google Play"
                className="group absolute z-10 aspect-square -translate-x-1/2 -translate-y-1/2 rounded-full"
                style={{ left: "7.12%", top: "81.27%", width: "10.7%" }}
              >
                <span className="wave-ring" aria-hidden="true" />
                <span className="wave-ring wave-ring--delay" aria-hidden="true" />
                <span className="relative grid h-full w-full place-items-center overflow-hidden rounded-full bg-amber shadow-[0_0_0_2px_var(--amber)] transition-transform duration-300 group-hover:scale-105">
                  <img src={hikayatdailyIcon} alt="" className="h-full w-full object-contain p-1.5" loading="lazy" />
                </span>
              </a> */}

              {/* Arrow → Work — left stack bottom */}
              <Link
                to="/#work"
                aria-label="Jump to selected work"
                className="absolute z-10 grid aspect-square -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-amber text-paper transition-transform hover:scale-105"
                style={{ left: "7.12%", top: "68.6%", width: "10.7%" }}
              >
                <ArrowUpRight className="h-2/5 w-2/5" />
              </Link>
            </div>
          </Tilt3D>
        </motion.div>
      </div>
    </section>
  );
}
