import { useEffect, useRef, useState } from "react";
import { Link } from "react-router";
import { Menu, X } from "./icons";
import { ThemeToggle } from "./ThemeToggle";
import { NAV_ITEMS } from "./nav-items";
import { LOCATION_SHORT } from "../content/site";

/**
 * Mobile navigation: hamburger trigger + full-height drawer.
 * Accessibility: focus trap, Escape to close, body scroll lock, focus restore.
 * Only rendered on small screens (md:hidden); the desktop nav lives in Header.
 */
export function MobileNav() {
  const [open, setOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const drawerRef = useRef<HTMLDivElement>(null);

  // Lock body scroll while open
  useEffect(() => {
    if (!open) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
    };
  }, [open]);

  // Escape to close + focus trap
  useEffect(() => {
    if (!open) return;
    const drawer = drawerRef.current;
    const focusables = drawer?.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
    );
    focusables?.[0]?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        return;
      }
      if (e.key === "Tab" && focusables && focusables.length > 0) {
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  // Restore focus to trigger on close
  useEffect(() => {
    if (!open) triggerRef.current?.focus({ preventScroll: true });
  }, [open]);

  return (
    <div className="md:hidden">
      <button
        ref={triggerRef}
        type="button"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        aria-controls="mobile-nav-drawer"
        onClick={() => setOpen((v) => !v)}
        className="grid h-10 w-10 place-items-center rounded-full border border-line text-ink transition-colors hover:border-ink-3"
      >
        {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </button>

      <div
        id="mobile-nav-drawer"
        role="dialog"
        aria-modal="true"
        aria-label="Site navigation"
        className={`fixed inset-0 z-40 transition-opacity duration-300 ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <button
          type="button"
          tabIndex={-1}
          aria-hidden="true"
          className="absolute inset-0 h-full w-full cursor-default bg-ink/40 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        />
        <div
          ref={drawerRef}
          className={`absolute inset-y-0 right-0 flex w-[86%] max-w-sm flex-col bg-paper px-6 pb-10 pt-24 shadow-lg transition-transform duration-300 ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <nav aria-label="Mobile">
            <ul className="flex flex-col">
              {NAV_ITEMS.map((item, i) => (
                <li key={item.label} className="border-b border-line">
                  <Link
                    to={item.to}
                    onClick={() => setOpen(false)}
                    className="display block py-4 text-4xl text-ink transition-colors hover:text-amber-text"
                    style={{ transitionDelay: open ? `${i * 30}ms` : "0ms" }}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="mt-auto flex items-center justify-between pt-8">
            <span className="chip">
              <span className="chip-dot" aria-hidden="true" />
              Open to work · {LOCATION_SHORT.split(",")[0]}
            </span>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </div>
  );
}
