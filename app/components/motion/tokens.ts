/**
 * Motion constants shared across Framer Motion variants.
 * Mirrors the easing/duration tokens in app.css so CSS and JS animations agree.
 */
export const MOTION = {
  easeOut: [0.16, 1, 0.3, 1] as const,
  easeInOut: [0.65, 0, 0.35, 1] as const,
  dur: {
    fast: 0.15,
    normal: 0.45,
    slow: 0.7,
  },
} as const;
