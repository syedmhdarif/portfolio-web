import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { MOTION } from "./tokens";

type RevealProps = {
  children: ReactNode;
  /** Slide direction the element rises/slides from. */
  from?: "up" | "down" | "left" | "right" | "none";
  /** Seconds to delay the reveal (for manual sequencing). */
  delay?: number;
  /** Travel distance in px. */
  distance?: number;
  /** Add a subtle blur-in (use sparingly — headings, hero copy). */
  blur?: boolean;
  className?: string;
  as?: "div" | "section" | "li" | "article" | "span" | "p";
};

/**
 * One-shot in-view reveal. Fades + slides (and optionally blurs) content as it
 * enters the viewport. Animates only compositor-friendly properties (opacity,
 * transform, filter) so it never triggers layout while scrolling.
 * No-ops (renders content immediately, no transform) under prefers-reduced-motion.
 */
export function Reveal({
  children,
  from = "up",
  delay = 0,
  distance = 24,
  blur = false,
  className,
  as = "div",
}: RevealProps) {
  const reduce = useReducedMotion();
  const MotionTag = motion[as];

  if (reduce) {
    const Tag = as;
    return <Tag className={className}>{children}</Tag>;
  }

  const offset = {
    up: { y: distance },
    down: { y: -distance },
    left: { x: distance },
    right: { x: -distance },
    none: {},
  }[from];

  return (
    <MotionTag
      className={className}
      style={{ willChange: "transform, opacity" }}
      initial={{ opacity: 0, ...offset, ...(blur ? { filter: `blur(${MOTION.blur}px)` } : {}) }}
      whileInView={{ opacity: 1, x: 0, y: 0, ...(blur ? { filter: "blur(0px)" } : {}) }}
      viewport={{ once: true, amount: 0.2, margin: "0px 0px -8% 0px" }}
      transition={{ duration: MOTION.dur.slow, ease: MOTION.easeOut, delay }}
    >
      {children}
    </MotionTag>
  );
}
