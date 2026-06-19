import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";

type CountUpProps = {
  /** Target number to count to. */
  value: number;
  /** Rendered before the number, e.g. "+". */
  prefix?: string;
  /** Rendered after the number, e.g. "+" or "k". */
  suffix?: string;
  durationMs?: number;
  className?: string;
};

/**
 * Counts from 0 → value once when scrolled into view.
 * Renders the final value immediately under prefers-reduced-motion.
 */
export function CountUp({
  value,
  prefix = "",
  suffix = "",
  durationMs = 1100,
  className,
}: CountUpProps) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -15% 0px" });
  const [display, setDisplay] = useState(reduce ? value : 0);

  useEffect(() => {
    if (reduce || !inView) return;
    let raf = 0;
    let start: number | null = null;
    const ease = (t: number) => 1 - Math.pow(1 - t, 3); // cubic ease-out
    const tick = (now: number) => {
      if (start === null) start = now;
      const t = Math.min(1, (now - start) / durationMs);
      setDisplay(Math.round(ease(t) * value));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, reduce, value, durationMs]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {display}
      {suffix}
    </span>
  );
}
