import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { useLocation } from "react-router";
import { MOTION } from "./tokens";

/**
 * Animated route transition. Cross-fades + lifts the page on every route change.
 * Under reduced motion it renders children directly with no animation.
 */
export function PageTransition({ children }: { children: ReactNode }) {
  const reduce = useReducedMotion();
  const { pathname } = useLocation();

  if (reduce) return <>{children}</>;

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={pathname}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
        transition={{ duration: MOTION.dur.normal, ease: MOTION.easeOut }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
