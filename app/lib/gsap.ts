/**
 * Single GSAP registration point (mirrors taleem-connect `lib/gsap.ts`).
 *
 * The site prerenders, so plugin registration is guarded: nothing here touches
 * `window` at module scope on the server. Import `gsap`, `ScrollTrigger` and
 * `useGSAP` from this module only — never register plugins per component.
 */
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

/** Media query shared by every scroll/entrance effect. */
export const MOTION_OK = "(prefers-reduced-motion: no-preference)";
export const MOTION_REDUCED = "(prefers-reduced-motion: reduce)";
/** Pointer-driven effects (parallax, magnetic, mouse-shift) only on desktop fine pointers. */
export const FINE_POINTER = "(min-width: 64rem) and (hover: hover) and (pointer: fine)";

let fontRefreshScheduled = false;
/**
 * Web fonts (Archivo / Sacramento) shift layout when they land, which moves
 * every ScrollTrigger start/end. Refresh once after `document.fonts.ready`.
 * Safe to call from many components — it only schedules once.
 */
export function refreshTriggersAfterFonts() {
  if (fontRefreshScheduled || typeof document === "undefined") return;
  fontRefreshScheduled = true;
  document.fonts?.ready.then(() => ScrollTrigger.refresh());
}

export { gsap, ScrollTrigger, useGSAP };
