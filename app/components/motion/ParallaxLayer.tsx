import { useRef, type ReactNode } from "react";
import { gsap, useGSAP, MOTION_OK, refreshTriggersAfterFonts } from "~/lib/gsap";

type ParallaxLayerProps = {
  children: ReactNode;
  /**
   * Total travel as yPercent, split evenly either side of rest (so 10 means
   * -5% at the bottom of the viewport to +5% at the top). Keep it 8–12 and use
   * it on decorative layers only — never on the main reading column.
   */
  amount?: number;
  className?: string;
  as?: "div" | "span";
};

/**
 * Scroll-scrubbed parallax (GSAP + ScrollTrigger). Drives only `yPercent`, so
 * it is compositor-only and never fights a Framer Motion parent that owns
 * opacity. Disabled under prefers-reduced-motion via gsap.matchMedia().
 */
export function ParallaxLayer({
  children,
  amount = 10,
  className,
  as = "div",
}: ParallaxLayerProps) {
  const ref = useRef<HTMLDivElement & HTMLSpanElement>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;
      refreshTriggersAfterFonts();
      const mm = gsap.matchMedia();
      mm.add(MOTION_OK, () => {
        gsap.fromTo(
          el,
          { yPercent: amount / 2 },
          {
            yPercent: -amount / 2,
            ease: "none",
            scrollTrigger: {
              trigger: el,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          }
        );
      });
      return () => mm.revert();
    },
    { scope: ref }
  );

  const Tag = as;
  return (
    <Tag ref={ref} className={className} style={{ willChange: "transform" }}>
      {children}
    </Tag>
  );
}
