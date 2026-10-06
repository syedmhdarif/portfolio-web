import { cloneElement, isValidElement, useRef, type ReactElement, type ReactNode } from "react";
import { gsap, useGSAP, MOTION_OK, MOTION_REDUCED, refreshTriggersAfterFonts } from "~/lib/gsap";
import { useAfterSplash } from "./useAfterSplash";

type WordRevealProps = {
  /** A string, or a single element whose children are a string (e.g. `<span id="x">Title.</span>`). */
  children: ReactNode;
  className?: string;
  /** Seconds between words. */
  stagger?: number;
  /** ScrollTrigger start. Defaults to the heading's top crossing 85% of the viewport. */
  start?: string;
  as?: "span" | "div";
};

const WORD_SELECTOR = "[data-word]";

function splitWords(text: string) {
  // Keep the spaces as real text nodes so the line still wraps naturally and
  // screen readers read one sentence, not a list of words.
  return text.split(/(\s+)/).map((part, i) =>
    /^\s+$/.test(part) ? (
      <span key={i}>{part}</span>
    ) : part ? (
      <span key={i} className="inline-block overflow-hidden pb-[0.08em] align-bottom">
        <span data-word className="inline-block will-change-transform">
          {part}
        </span>
      </span>
    ) : null
  );
}

function toSplitTree(node: ReactNode): ReactNode {
  if (typeof node === "string") return splitWords(node);
  if (isValidElement(node)) {
    const el = node as ReactElement<{ children?: ReactNode }>;
    if (typeof el.props.children === "string") {
      return cloneElement(el, undefined, splitWords(el.props.children));
    }
  }
  // Mixed content (nested spans etc.): reveal as a single block instead.
  return (
    <span className="inline-block overflow-hidden pb-[0.08em] align-bottom">
      <span data-word className="inline-block will-change-transform">
        {node}
      </span>
    </span>
  );
}

/**
 * Word-by-word rise for display headings. Manual split (no SplitText licence
 * needed), staggered `yPercent` + opacity, driven by GSAP ScrollTrigger and
 * played once. Holds until the splash is done; no-ops under reduced motion.
 *
 * Do not wrap this in a Framer `Reveal` that animates the same text — one
 * element, one engine.
 */
export function WordReveal({
  children,
  className,
  stagger = 0.045,
  start = "top 85%",
  as = "span",
}: WordRevealProps) {
  const ref = useRef<HTMLSpanElement & HTMLDivElement>(null);
  const ready = useAfterSplash();

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;
      refreshTriggersAfterFonts();
      const mm = gsap.matchMedia();
      mm.add(MOTION_REDUCED, () => {
        gsap.set(WORD_SELECTOR, { clearProps: "all" });
      });
      mm.add(MOTION_OK, () => {
        const words = gsap.utils.toArray<HTMLElement>(WORD_SELECTOR, el);
        if (!ready) {
          gsap.set(words, { yPercent: 110, opacity: 0 });
          return;
        }
        gsap.fromTo(
          words,
          { yPercent: 110, opacity: 0 },
          {
            yPercent: 0,
            opacity: 1,
            duration: 0.9,
            ease: "expo.out",
            stagger,
            scrollTrigger: { trigger: el, start, once: true },
          }
        );
      });
      return () => mm.revert();
    },
    { scope: ref, dependencies: [ready], revertOnUpdate: true }
  );

  const Tag = as;
  return (
    <Tag ref={ref} className={className}>
      {toSplitTree(children)}
    </Tag>
  );
}
