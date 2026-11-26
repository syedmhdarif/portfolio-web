import * as React from "react";
import { cn } from "~/lib/utils";

/**
 * Design-system primitives. Styling lives in the `.btn/.chip/.tag/.card`
 * classes in app/app.css (token-driven); these only give them a typed API.
 * Buttons expose class helpers (shadcn `buttonVariants` style) so the same
 * look applies to <button>, <a> and React Router <Link> without wrappers.
 */

const BUTTON = {
  primary: "btn btn-primary",
  amber: "btn btn-amber",
  ghost: "btn btn-ghost",
} as const;

export type ButtonVariant = keyof typeof BUTTON;

export function buttonVariants({
  variant = "primary",
  className,
}: { variant?: ButtonVariant; className?: string } = {}) {
  return cn(BUTTON[variant], className);
}

export function Button({
  variant,
  className,
  type = "button",
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: ButtonVariant }) {
  return <button type={type} className={buttonVariants({ variant, className })} {...props} />;
}

/** Round 44px icon control (theme toggle, socials, menu). Needs an aria-label. */
export function iconButtonVariants({
  size = "md",
  className,
}: { size?: "md" | "lg"; className?: string } = {}) {
  return cn(
    "grid shrink-0 place-items-center rounded-full border border-line text-ink transition-colors hover:border-ink-3 hover:text-amber-text",
    size === "lg" ? "h-12 w-12" : "h-11 w-11",
    className,
  );
}

export function Chip({
  dot = false,
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLSpanElement> & { dot?: boolean }) {
  return (
    <span className={cn("chip", className)} {...props}>
      {dot && <span className="chip-dot" aria-hidden="true" />}
      {children}
    </span>
  );
}

export function Tag({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) {
  return <span className={cn("tag text-xs", className)} {...props} />;
}

export function Card({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("card", className)} {...props} />;
}
