import { useEffect, useState } from "react";

/**
 * Returns true once it's safe to play above-the-fold entrance animations.
 *
 * On a first landing the splash overlay covers the page for a couple of
 * seconds. If the hero animated on mount, the entrance would play *behind* the
 * splash and be wasted. This hook holds entrance animations until the splash
 * finishes (it dispatches a `splash:done` event) — or starts them immediately
 * when no splash is showing (repeat visits, reduced motion, client nav).
 *
 * The splash decision is made before paint by the head script in root.tsx,
 * which sets `html[data-splash="active"]`. We read that attribute on the client.
 */
export function useAfterSplash() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const active =
      typeof document !== "undefined" &&
      document.documentElement.dataset.splash === "active";

    if (!active) {
      setReady(true);
      return;
    }

    const onDone = () => setReady(true);
    window.addEventListener("splash:done", onDone, { once: true });
    // Failsafe: never strand the hero hidden if the event is somehow missed.
    const failsafe = window.setTimeout(onDone, 6500);
    return () => {
      window.removeEventListener("splash:done", onDone);
      window.clearTimeout(failsafe);
    };
  }, []);

  return ready;
}
