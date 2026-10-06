import { useRef, type ComponentType } from "react";
import { Link } from "react-router";
import profileImage from "../../assets/syedArif.png";
import { ArrowUpRight, Github, Linkedin, Mail, WhatsApp } from "../icons";
import { Stagger, StaggerItem, CountUp, Tilt3D, TextReveal, useAfterSplash } from "../motion";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../ui/tooltip";
import { gsap, useGSAP, MOTION_OK, MOTION_REDUCED, FINE_POINTER } from "~/lib/gsap";
import { HERO_STATS, SOCIAL_PILLS } from "../../content/hero";
import { PERSON_NAME, GITHUB_URL } from "../../content/site";

const HERO_SHAPE_VIEWBOX = "0 0 358 371";
const HERO_SHAPE_PATH =
  "M285.478 0.00585938C285.651 0.00181226 285.825 0 286 0C298.15 0 308 9.84974 308 22C308 22.1743 307.997 22.3481 307.993 22.5215C307.996 22.6806 308 22.8401 308 23V28H308.186C309.662 39.8389 319.761 49 332 49H334C346.15 49 356 58.8497 356 71V324C356 349.957 334.957 371 309 371H99C74.6995 371 55 351.301 55 327V254C55 239.088 42.9117 227 28 227H22V226.916C17.1915 226.519 12.785 224.707 9.19922 221.894C3.62948 217.902 0 211.375 0 204C0 203.829 0.0019769 203.658 0.00585938 203.488C0.00261875 203.326 4.7088e-09 203.163 0 203V44C0 19.6995 19.6995 1.06303e-06 44 0H285C285.16 0 285.319 0.00262501 285.478 0.00585938Z";

/** Extra reach, in px beyond the button's edge, inside which it is pulled toward the pointer. */
const MAGNET_RADIUS = 40;
/** Max pointer-driven drift of the portrait, in px. */
const PHOTO_SHIFT = 6;

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

/**
 * Amber portrait card. Entrance, scroll parallax, pointer drift and the
 * magnetic buttons are all GSAP (one timeline, gated on the splash). Tilt3D
 * stays Framer Motion on its own wrapper — no element is driven by both.
 */
function PortraitCard({ ready }: { ready: boolean }) {
  const cardRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const card = cardRef.current;
      if (!card) return;

      const q = gsap.utils.selector(card);
      const shape = q<SVGPathElement>("[data-hero-shape]");
      const wipe = q<SVGRectElement>("[data-hero-wipe]");
      const photo = q<SVGGElement>("[data-hero-photo]");
      const scrim = q<SVGRectElement>("[data-hero-scrim]");
      const name = q<HTMLElement>("[data-hero-name]");
      const buttons = q<HTMLElement>("[data-magnet]");

      const mm = gsap.matchMedia();

      // Reduced motion: show everything, animate nothing.
      mm.add(MOTION_REDUCED, () => {
        gsap.set(card, { opacity: 1 });
        gsap.set(wipe, { attr: { height: 380 } });
      });

      // Entrance timeline — plays once the splash has finished.
      mm.add(MOTION_OK, () => {
        const hidden = () => {
          gsap.set(card, { opacity: 0, scale: 0.96, transformOrigin: "50% 50%" });
          gsap.set(shape, { scale: 0.94, transformOrigin: "50% 50%" });
          gsap.set(wipe, { attr: { height: 0 } });
          gsap.set(scrim, { opacity: 0 });
          gsap.set(name, { opacity: 0, y: 14, filter: "blur(6px)" });
          gsap.set(buttons, { opacity: 0, scale: 0.6 });
        };
        hidden();
        if (!ready) return;

        const tl = gsap.timeline({ defaults: { ease: "expo.out" }, delay: 0.15 });
        tl.to(card, { opacity: 1, scale: 1, duration: 0.7 })
          .to(shape, { scale: 1, duration: 0.9 }, 0.05)
          // SVG mask wipe: the rect grows downward and the portrait appears beneath it.
          .to(wipe, { attr: { height: 380 }, duration: 0.9 }, 0.15)
          .to(scrim, { opacity: 1, duration: 0.6 }, 0.55)
          .to(
            name,
            { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.7, ease: "power3.out" },
            0.65
          )
          .to(
            buttons,
            { opacity: 1, scale: 1, duration: 0.6, stagger: 0.08, ease: "back.out(1.8)" },
            0.8
          );
      });

      // Pointer-driven effects — desktop fine pointers only (touch scroll stays jank-free).
      mm.add(`${MOTION_OK} and ${FINE_POINTER}`, () => {
        // Scroll parallax of the whole card as the hero scrolls away.
        gsap.to(card, {
          y: -60,
          ease: "none",
          scrollTrigger: { trigger: card, start: "top top", end: "bottom top", scrub: true },
        });

        // Portrait drifts with the pointer (±PHOTO_SHIFT px).
        const photoX = gsap.quickTo(photo, "x", { duration: 0.6, ease: "power3.out" });
        const photoY = gsap.quickTo(photo, "y", { duration: 0.6, ease: "power3.out" });

        // Magnetic buttons: pulled toward the pointer within MAGNET_RADIUS of their edge.
        const magnets = buttons.map((el) => ({
          el,
          x: gsap.quickTo(el, "x", { duration: 0.45, ease: "power3.out" }),
          y: gsap.quickTo(el, "y", { duration: 0.45, ease: "power3.out" }),
        }));

        const onMove = (e: MouseEvent) => {
          const r = card.getBoundingClientRect();
          const nx = (e.clientX - r.left) / r.width - 0.5;
          const ny = (e.clientY - r.top) / r.height - 0.5;
          photoX(nx * PHOTO_SHIFT * 2);
          photoY(ny * PHOTO_SHIFT * 2);

          for (const m of magnets) {
            const b = m.el.getBoundingClientRect();
            const cx = b.left + b.width / 2;
            const cy = b.top + b.height / 2;
            const dx = e.clientX - cx;
            const dy = e.clientY - cy;
            const reach = b.width / 2 + MAGNET_RADIUS;
            const dist = Math.hypot(dx, dy);
            if (dist < reach) {
              const pull = (1 - dist / reach) * 0.45;
              m.x(dx * pull);
              m.y(dy * pull);
            } else {
              m.x(0);
              m.y(0);
            }
          }
        };
        const onLeave = () => {
          photoX(0);
          photoY(0);
          for (const m of magnets) {
            m.x(0);
            m.y(0);
          }
        };
        card.addEventListener("mousemove", onMove);
        card.addEventListener("mouseleave", onLeave);
        return () => {
          card.removeEventListener("mousemove", onMove);
          card.removeEventListener("mouseleave", onLeave);
        };
      });

      return () => mm.revert();
    },
    { scope: cardRef, dependencies: [ready], revertOnUpdate: true }
  );

  return (
    <div ref={cardRef} className="hero-card order-1 lg:order-2 md:col-span-7">
      <Tilt3D className="relative mx-auto w-full max-w-[38rem] lg:mr-0 lg:ml-auto">
        <div className="relative" style={{ aspectRatio: "358 / 371" }}>
          <svg
            viewBox={HERO_SHAPE_VIEWBOX}
            preserveAspectRatio="xMidYMid meet"
            className="absolute inset-0 h-full w-full overflow-visible"
            role="img"
            aria-label="Syed Mohamad Arif — mobile and web developer based in Kuala Lumpur"
          >
            <defs>
              {/* Notch shape: a clipPath keeps the edge crisp regardless of the animated mask. */}
              <clipPath id="heroShape" clipPathUnits="userSpaceOnUse">
                <path d={HERO_SHAPE_PATH} />
              </clipPath>
              <mask id="heroWipe" maskUnits="userSpaceOnUse" x="0" y="0" width="358" height="380">
                <rect data-hero-wipe x="0" y="0" width="358" height="380" fill="#fff" />
              </mask>
              <linearGradient id="heroScrim" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stopColor="#16130f" stopOpacity="0.55" />
                <stop offset="1" stopColor="#16130f" stopOpacity="0" />
              </linearGradient>
            </defs>

            <path data-hero-shape d={HERO_SHAPE_PATH} fill="var(--amber)" />

            <g clipPath="url(#heroShape)">
              <g mask="url(#heroWipe)">
                {/* Slightly oversized so the ±6px pointer drift never shows the amber behind it. */}
                <g data-hero-photo>
                  <image
                    href={profileImage}
                    x="-8"
                    y="-8"
                    width="374"
                    height="396"
                    preserveAspectRatio="xMidYMid slice"
                  />
                </g>
                {/* Soft scrim so the script name stays legible over the photo. */}
                <rect data-hero-scrim x="0" y="0" width="358" height="150" fill="url(#heroScrim)" />
              </g>
            </g>
          </svg>

          <span
            data-hero-name
            className="signature absolute left-[7%] top-[5%] z-10 text-xl sm:text-2xl"
            style={{ color: "#fff", textShadow: "0 1px 10px rgba(0,0,0,0.25)" }}
            aria-hidden="true"
          >
            {PERSON_NAME}
          </span>

          {/* Buttons: an outer span owns the % positioning; the inner link is what GSAP moves. */}
          <span
            className="absolute z-10 block aspect-square min-w-11 -translate-x-1/2 -translate-y-1/2"
            style={{ left: "93.85%", top: "5.93%", width: "10.5%" }}
          >
            <Tooltip>
              <TooltipTrigger asChild>
                <a
                  data-magnet
                  href={GITHUB_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub profile"
                  className="group grid h-full w-full place-items-center rounded-full bg-ink text-paper shadow-[0_6px_20px_-8px_rgba(0,0,0,0.5)]"
                >
                  <Github className="h-2/5 w-2/5 transition-transform duration-[var(--dur-normal)] ease-[var(--ease-out)] group-hover:scale-110" />
                </a>
              </TooltipTrigger>
              <TooltipContent side="left">github.com/syedmhdarif</TooltipContent>
            </Tooltip>
          </span>

          <span
            className="absolute z-10 block aspect-square min-w-11 -translate-x-1/2 -translate-y-1/2"
            style={{ left: "7.12%", top: "68.6%", width: "10.7%" }}
          >
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  data-magnet
                  to="/#work"
                  aria-label="Jump to selected work"
                  className="group grid h-full w-full place-items-center rounded-full bg-amber text-paper shadow-[0_6px_20px_-8px_rgba(0,0,0,0.35)]"
                >
                  {/* ↗ rotates to → on hover: "go". */}
                  <ArrowUpRight className="h-2/5 w-2/5 transition-transform duration-[var(--dur-normal)] ease-[var(--ease-out)] group-hover:rotate-45" />
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Selected work</TooltipContent>
            </Tooltip>
          </span>
        </div>
      </Tilt3D>
    </div>
  );
}

export function Hero() {
  // Hold the entrance until the splash finishes, so it doesn't play behind it.
  const ready = useAfterSplash();

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
          <h1 className="display mt-5 text-[clamp(2.75rem,7vw,5.5rem)] leading-[0.9]">
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
          <StaggerItem className="mt-9 flex flex-wrap gap-8 border-t border-line pt-6 sm:gap-10">
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

        {/* Right — amber portrait card (GSAP entrance + parallax, Framer tilt) */}
        <TooltipProvider delayDuration={200}>
          <PortraitCard ready={ready} />
        </TooltipProvider>
      </div>
    </section>
  );
}
