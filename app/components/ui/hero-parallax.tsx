import React from "react";
import { cn } from "~/lib/utils";
import {
  gsap,
  ScrollTrigger,
  useGSAP,
  MOTION_OK,
  refreshTriggersAfterFonts,
} from "~/lib/gsap";

export type HeroParallaxProduct = {
  title: string;
  link: string;
  thumbnail: string;
  /** Optional: use "contain" for logos/icons instead of cropped screenshots. */
  fit?: "cover" | "contain";
};

const ROWS = 3;
/** Horizontal travel of each row, each way: 7vw capped at 112px (the edge mask hides the gap). */
const amplitude = () => Math.min(window.innerWidth * 0.07, 112);

/**
 * Hero-parallax wall, ported to GSAP ScrollTrigger after taleem-connect's
 * `gallery-parallax.tsx`. Desktop + motion only: the plane un-tilts, rises and
 * fades to full opacity while the stage enters (finished at "top 25%", so no
 * lingering wash), and rows drift in alternating directions while the stage
 * crosses the viewport. Scrubbed (0.6s smoothing), no pin, no extra scroll
 * height. Reduced motion / no JS renders the static final state as a grid.
 */
export const HeroParallax = ({
  products,
}: {
  products: HeroParallaxProduct[];
}) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const perRow = Math.ceil(products.length / ROWS);
  // Each row carries the full list, rotated so its own slice sits mid-row; the
  // rest are clones that fill the row edge to edge (motion only, hidden from AT).
  const rows = Array.from({ length: ROWS }, (_, r) => {
    const start = r * perRow;
    const own = Math.min(perRow, products.length - start);
    const lead = Math.floor((products.length - own) / 2);
    return Array.from({ length: products.length }, (_, i) => {
      const k = i - lead;
      const index =
        (((start + k) % products.length) + products.length) % products.length;
      return { product: products[index], clone: k < 0 || k >= own };
    });
  }).filter((_, r) => r * perRow < products.length);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(MOTION_OK, () => {
        const stage = ref.current!;
        const plane = stage.querySelector<HTMLElement>("[data-plane]");
        const rowEls = gsap.utils.toArray<HTMLElement>("[data-row]", stage);
        if (!plane) return;

        gsap.fromTo(
          plane,
          { rotateX: 12, rotateZ: 4, y: 120, opacity: 0.2 },
          {
            rotateX: 0,
            rotateZ: 0,
            y: 0,
            opacity: 1,
            ease: "none",
            scrollTrigger: {
              trigger: stage,
              start: "top 90%",
              end: "top 25%",
              scrub: 0.6,
            },
          },
        );

        rowEls.forEach((row, i) => {
          const dir = i % 2 === 0 ? 1 : -1;
          gsap.fromTo(
            row,
            { x: () => -dir * amplitude() },
            {
              x: () => dir * amplitude(),
              ease: "none",
              scrollTrigger: {
                trigger: stage,
                start: "top bottom",
                end: "bottom top",
                scrub: 0.6,
                invalidateOnRefresh: true,
              },
            },
          );
        });
      });
      refreshTriggersAfterFonts();
      // Content above (splash, lazy images, reveals) changes height after mount;
      // stale start/end would leave the plane stuck part-faded. Re-measure on change.
      let t = 0;
      const ro = new ResizeObserver(() => {
        clearTimeout(t);
        t = window.setTimeout(() => ScrollTrigger.refresh(), 150);
      });
      ro.observe(document.body);
      return () => {
        clearTimeout(t);
        ro.disconnect();
        mm.revert();
      };
    },
    { scope: ref },
  );

  return (
    // Full bleed out of `.wrap`, clipped here so the over-wide rows never scroll the page sideways.
    <div ref={ref} className="mx-[calc(50%-50vw)] overflow-x-clip">
      <div className="motion-safe:[mask-image:linear-gradient(to_right,transparent,black_7%,black_93%,transparent)] motion-safe:[perspective:1000px]">
        <div
          data-plane
          className="mx-auto grid max-w-[var(--wrap-page)] grid-cols-3 gap-6 px-10 motion-safe:flex motion-safe:max-w-none motion-safe:flex-col motion-safe:items-center motion-safe:px-0 motion-safe:will-change-transform"
        >
          {rows.map((row, r) => (
            <div
              key={r}
              data-row
              className="contents motion-safe:flex motion-safe:w-max motion-safe:gap-6 motion-safe:will-change-transform"
            >
              {row.map(({ product, clone }) => (
                <ProductCard
                  product={product}
                  clone={clone}
                  key={product.title}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export const ProductCard = ({
  product,
  clone = false,
}: {
  product: HeroParallaxProduct;
  clone?: boolean;
}) => (
  <div
    aria-hidden={clone || undefined}
    className={cn(
      "group/product relative aspect-[5/4] w-full shrink-0 motion-safe:aspect-auto motion-safe:h-80 motion-safe:w-[32rem]",
      clone && "hidden motion-safe:block",
    )}
  >
    <a
      tabIndex={clone ? -1 : undefined}
      href={product.link}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${product.title} (opens in a new tab)`}
      className={cn(
        "block h-full w-full overflow-hidden rounded-xl border border-line bg-paper-3 transition-[transform,box-shadow] duration-300 group-hover/product:-translate-y-2 group-hover/product:shadow-2xl",
        "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber",
      )}
    >
      <img
        src={product.thumbnail}
        height={600}
        width={600}
        className={cn(
          "h-full w-full",
          product.fit === "contain"
            ? "object-contain p-10"
            : "object-cover object-left-top",
        )}
        alt={product.title}
        loading="lazy"
        decoding="async"
      />
      <span className="pointer-events-none absolute inset-0 rounded-xl bg-ink opacity-0 transition-opacity group-hover/product:opacity-80 group-focus-within/product:opacity-80" />
      <span className="absolute bottom-4 left-4 text-lg font-bold text-paper opacity-0 transition-opacity group-hover/product:opacity-100 group-focus-within/product:opacity-100">
        {product.title}
      </span>
    </a>
  </div>
);
