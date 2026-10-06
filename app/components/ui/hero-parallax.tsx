"use client";
import React from "react";
import { cn } from "~/lib/utils";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  type MotionValue,
} from "motion/react";

export type HeroParallaxProduct = {
  title: string;
  link: string;
  thumbnail: string;
  /** Optional: use "contain" for logos/icons instead of cropped screenshots. */
  fit?: "cover" | "contain";
};

export const HeroParallax = ({
  products,
  header,
}: {
  products: HeroParallaxProduct[];
  header?: React.ReactNode;
}) => {
  const perRow = Math.ceil(products.length / 3);
  const firstRow = products.slice(0, perRow);
  const secondRow = products.slice(perRow, perRow * 2);
  const thirdRow = products.slice(perRow * 2);
  const ref = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 1000]),
    springConfig,
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -1000]),
    springConfig,
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig,
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig,
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig,
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-700, 500]),
    springConfig,
  );

  return (
    <div
      ref={ref}
      className="relative flex h-[300vh] flex-col self-auto overflow-hidden py-40 antialiased [perspective:1000px] [transform-style:preserve-3d]"
    >
      {header === undefined ? <Header /> : header}
      <motion.div style={{ rotateX, rotateZ, translateY, opacity }}>
        <motion.div className="mb-20 flex flex-row-reverse space-x-20 space-x-reverse">
          {firstRow.map((product) => (
            <ProductCard product={product} translate={translateX} key={product.title} />
          ))}
        </motion.div>
        <motion.div className="mb-20 flex flex-row space-x-20">
          {secondRow.map((product) => (
            <ProductCard product={product} translate={translateXReverse} key={product.title} />
          ))}
        </motion.div>
        <motion.div className="flex flex-row-reverse space-x-20 space-x-reverse">
          {thirdRow.map((product) => (
            <ProductCard product={product} translate={translateX} key={product.title} />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export const Header = () => (
  <div className="relative left-0 top-0 mx-auto w-full max-w-7xl px-4 py-20 md:py-40">
    <h2 className="text-2xl font-bold text-ink md:text-7xl">The Ultimate development studio</h2>
    <p className="mt-8 max-w-2xl text-base text-ink-2 md:text-xl">
      We build beautiful products with the latest technologies and frameworks.
    </p>
  </div>
);

export const ProductCard = ({
  product,
  translate,
}: {
  product: HeroParallaxProduct;
  translate: MotionValue<number>;
}) => (
  <motion.div
    style={{ x: translate }}
    whileHover={{ y: -20 }}
    key={product.title}
    className="group/product relative h-96 w-[30rem] shrink-0"
  >
    <a
      href={product.link}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${product.title} (opens in a new tab)`}
      className={cn(
        "block h-full w-full overflow-hidden rounded-xl border border-line bg-paper-3 group-hover/product:shadow-2xl",
        "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber",
      )}
    >
      <img
        src={product.thumbnail}
        height={600}
        width={600}
        className={cn(
          "h-full w-full",
          product.fit === "contain" ? "object-contain p-10" : "object-cover object-left-top",
        )}
        alt={product.title}
        loading="lazy"
      />
    </a>
    <div className="pointer-events-none absolute inset-0 h-full w-full rounded-xl bg-ink opacity-0 transition-opacity group-hover/product:opacity-80 group-focus-within/product:opacity-80" />
    <h2 className="absolute bottom-4 left-4 text-lg font-bold text-paper opacity-0 transition-opacity group-hover/product:opacity-100 group-focus-within/product:opacity-100">
      {product.title}
    </h2>
  </motion.div>
);
