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
  className?: string;
  as?: "div" | "section" | "li" | "article" | "span";
};

/**
 * One-shot in-view reveal. Fades + slides content as it enters the viewport.
 * No-ops (renders content immediately, no transform) under prefers-reduced-motion.
 */
export function Reveal({
  children,
  from = "up",
  delay = 0,
  distance = 28,
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
      initial={{ opacity: 0, ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -12% 0px" }}
      transition={{ duration: MOTION.dur.slow, ease: MOTION.easeOut, delay }}
    >
      {children}
    </MotionTag>
  );
}
