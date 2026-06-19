import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { MOTION } from "./tokens";

type StaggerProps = {
  children: ReactNode;
  className?: string;
  /** Gap between each child's reveal, in seconds. */
  stagger?: number;
  /** Delay before the first child, in seconds. */
  delay?: number;
  /** Animate on mount (hero) or when scrolled into view (sections). */
  trigger?: "mount" | "inView";
  as?: "div" | "ul" | "section";
};

/**
 * Container that reveals its <StaggerItem> children in sequence.
 * Under reduced motion the container and items render statically.
 */
export function Stagger({
  children,
  className,
  stagger = 0.08,
  delay = 0,
  trigger = "inView",
  as = "div",
}: StaggerProps) {
  const reduce = useReducedMotion();
  const MotionTag = motion[as];

  if (reduce) {
    const Tag = as;
    return <Tag className={className}>{children}</Tag>;
  }

  const triggerProps =
    trigger === "mount"
      ? { animate: "show" }
      : { whileInView: "show", viewport: { once: true, amount: 0.2 } };

  return (
    <MotionTag
      className={className}
      initial="hidden"
      {...triggerProps}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: stagger, delayChildren: delay } },
      }}
    >
      {children}
    </MotionTag>
  );
}

type StaggerItemProps = {
  children: ReactNode;
  className?: string;
  from?: "up" | "down" | "left" | "right" | "none";
  distance?: number;
  as?: "div" | "li" | "span" | "article";
};

export function StaggerItem({
  children,
  className,
  from = "up",
  distance = 24,
  as = "div",
}: StaggerItemProps) {
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
      variants={{
        hidden: { opacity: 0, ...offset },
        show: {
          opacity: 1,
          x: 0,
          y: 0,
          transition: { duration: MOTION.dur.slow, ease: MOTION.easeOut },
        },
      }}
    >
      {children}
    </MotionTag>
  );
}
