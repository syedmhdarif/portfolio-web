import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { MOTION } from "./tokens";

type TextRevealProps = {
  children: ReactNode;
  className?: string;
  /** Seconds to delay (for sequencing successive lines). */
  delay?: number;
  /** Animate on mount (hero) or when scrolled into view. */
  trigger?: "mount" | "inView";
  /** trigger="mount" only: hold hidden until true (e.g. after the splash). */
  play?: boolean;
};

/**
 * Masked clip-rise for large display type — the line sits below a clipped edge
 * and slides up into view. Best for short, single-line headings (no wrapping).
 * The mask carries a little extra bottom room so descenders aren't clipped at
 * rest. Renders plain text under prefers-reduced-motion.
 */
export function TextReveal({
  children,
  className,
  delay = 0,
  trigger = "inView",
  play = true,
}: TextRevealProps) {
  const reduce = useReducedMotion();

  if (reduce) {
    return <span className={className}>{children}</span>;
  }

  const stateProps =
    trigger === "mount"
      ? { animate: play ? "show" : "hidden" }
      : { whileInView: "show", viewport: { once: true, amount: 0.5 } as const };

  return (
    <motion.span
      className={className}
      style={{
        display: "block",
        overflow: "hidden",
        paddingBottom: "0.14em",
        marginBottom: "-0.14em",
      }}
      initial="hidden"
      {...stateProps}
    >
      <motion.span
        style={{ display: "block", willChange: "transform" }}
        variants={{
          hidden: { y: "115%" },
          show: {
            y: "0%",
            transition: { duration: MOTION.dur.slow, ease: MOTION.easeOut, delay },
          },
        }}
      >
        {children}
      </motion.span>
    </motion.span>
  );
}
