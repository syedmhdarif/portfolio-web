import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

const LINES = [
  { cmd: "whoami", out: "Syed Mohamad Arif — Mobile & Web Developer" },
  { cmd: "cat stack.txt", out: "React Native · React · TypeScript · Next.js" },
  { cmd: "./launch --portfolio", out: "booting interface ▸▸▸ ✓ ready" },
];

const PER_LINE = 620; // ms between lines
const HOLD = 520; // ms after last line before exit

/**
 * Terminal-style splash screen (adapted from Aceternity's terminal).
 * Shows once per browser session as a boot sequence, then fades to reveal the
 * site. Skipped entirely under prefers-reduced-motion.
 */
export function Splash() {
  const reduce = useReducedMotion();
  const [show, setShow] = useState(false);
  const [step, setStep] = useState(0);

  useEffect(() => {
    if (reduce) return;
    let seen = false;
    try {
      seen = sessionStorage.getItem("splashSeen") === "1";
    } catch {
      /* private mode */
    }
    if (seen) return;

    setShow(true);
    try {
      sessionStorage.setItem("splashSeen", "1");
    } catch {
      /* ignore */
    }
    document.body.style.overflow = "hidden";

    const timers = LINES.map((_, i) =>
      setTimeout(() => setStep(i + 1), i * PER_LINE + 350)
    );
    const end = setTimeout(
      () => setShow(false),
      LINES.length * PER_LINE + HOLD + 350
    );

    return () => {
      timers.forEach(clearTimeout);
      clearTimeout(end);
      document.body.style.overflow = "";
    };
  }, [reduce]);

  function skip() {
    setShow(false);
    document.body.style.overflow = "";
  }

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[100] grid place-items-center px-6"
          style={{ background: "#0f0e0c" }}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          onAnimationComplete={() => {
            document.body.style.overflow = "";
          }}
        >
          <motion.div
            initial={{ y: 16, opacity: 0, scale: 0.98 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="w-[min(92vw,560px)] overflow-hidden rounded-xl border border-white/10 font-mono text-sm shadow-2xl"
            style={{ background: "#16130f", color: "#f1ede3" }}
          >
            <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
              <span className="h-3 w-3 rounded-full" style={{ background: "#ff5f56" }} />
              <span className="h-3 w-3 rounded-full" style={{ background: "#ffbd2e" }} />
              <span className="h-3 w-3 rounded-full" style={{ background: "#27c93f" }} />
              <span className="ml-2 text-xs text-white/40">zsh — syed-portfolio</span>
            </div>
            <div className="space-y-2.5 p-5 leading-relaxed">
              {LINES.slice(0, step).map((l, i) => (
                <motion.div
                  key={l.cmd}
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.25 }}
                >
                  <div>
                    <span style={{ color: "#f2a93b" }}>syed@kl</span>
                    <span className="text-white/40">:~$ </span>
                    <span>{l.cmd}</span>
                  </div>
                  <div className="text-white/70">{l.out}</div>
                </motion.div>
              ))}
              <span className="inline-block h-4 w-2 animate-pulse" style={{ background: "#f2a93b" }} />
            </div>
          </motion.div>

          <button
            type="button"
            onClick={skip}
            className="absolute bottom-8 text-xs uppercase tracking-widest text-white/40 transition-colors hover:text-white/80"
          >
            Skip intro
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
