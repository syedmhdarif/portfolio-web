import type { ReactNode } from "react";
import { Reveal } from "./motion";

type SectionHeadingProps = {
  eyebrow?: string;
  title: ReactNode;
  lead?: ReactNode;
  /** Index number shown alongside the eyebrow, editorial style. */
  index?: string;
  align?: "left" | "center";
  className?: string;
};

/**
 * Editorial section heading: small-caps eyebrow (+ optional index) and an
 * oversized display title. Reveals on scroll.
 */
export function SectionHeading({
  eyebrow,
  title,
  lead,
  index,
  align = "left",
  className = "",
}: SectionHeadingProps) {
  const alignment = align === "center" ? "items-center text-center mx-auto" : "items-start";
  return (
    <Reveal blur className={`flex max-w-3xl flex-col ${alignment} ${className}`}>
      {eyebrow && (
        <span className="eyebrow flex items-center gap-2">
          {index && <span className="text-amber-text">{index}</span>}
          {index && <span className="h-px w-6 bg-line" aria-hidden="true" />}
          {eyebrow}
        </span>
      )}
      <h2 className="display mt-4 text-4xl sm:text-5xl">{title}</h2>
      {lead && (
        <p
          className={`mt-5 text-lg leading-relaxed text-ink-2 ${
            align === "center" ? "max-w-2xl" : "max-w-xl"
          }`}
        >
          {lead}
        </p>
      )}
    </Reveal>
  );
}
