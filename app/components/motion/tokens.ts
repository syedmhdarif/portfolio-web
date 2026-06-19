/**
 * Motion constants shared across Framer Motion variants.
 * Mirrors the easing/duration tokens in app.css so CSS and JS animations agree.
 */
export const MOTION = {
  /** Editorial ease-out — quick start, long settle. Matches --ease-out in CSS. */
  easeOut: [0.16, 1, 0.3, 1] as const,
  easeInOut: [0.65, 0, 0.35, 1] as const,
  dur: {
    fast: 0.15,
    normal: 0.45,
    /** Entrance reveals — long enough to read as deliberate, short enough to feel responsive. */
    slow: 0.6,
  },
  /** Blur applied to "blur-in" reveals before they settle, in px. */
  blur: 8,
} as const;
