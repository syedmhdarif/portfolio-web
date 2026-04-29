import { useEffect, useState } from "react";
import { Link } from "react-router";
import { Mail, Menu, X } from "./icons";

type NavLink = {
  label: string;
  href?: string;
  to?: string;
};

const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "#" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Learn", to: "/learn" },
];

export function MobileNav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <div className="md:hidden fixed top-4 left-4 right-4 z-50 flex items-center justify-between glass-card px-4 py-3">
        <a href="#" className="font-bold text-text-primary" aria-label="Home">
          <span className="gradient-text text-lg">Syed Arif</span>
        </a>
        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-nav-drawer"
          onClick={() => setOpen((v) => !v)}
          className="w-11 h-11 -mr-2 flex items-center justify-center text-text-primary hover:text-accent transition-colors"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      <div
        id="mobile-nav-drawer"
        role="dialog"
        aria-modal="true"
        aria-label="Site navigation"
        className={`md:hidden fixed inset-0 z-40 transition-opacity duration-300 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className="absolute inset-0 bg-surface/80 backdrop-blur-md"
          onClick={() => setOpen(false)}
        />
        <nav
          className={`absolute top-0 left-0 right-0 pt-24 pb-8 px-6 bg-surface-light border-b border-border transition-transform duration-300 ${
            open ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          <ul className="flex flex-col gap-1">
            {NAV_LINKS.map((link) =>
              link.to ? (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    onClick={() => setOpen(false)}
                    className="block px-4 py-3 rounded-xl text-base font-medium text-text-secondary hover:text-accent hover:bg-surface-elevated transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ) : (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block px-4 py-3 rounded-xl text-base font-medium text-text-secondary hover:text-accent hover:bg-surface-elevated transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              )
            )}
            <li className="mt-3">
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="flex items-center justify-center gap-2 px-4 py-3 bg-accent hover:bg-accent-dark text-white font-medium rounded-xl transition-colors"
              >
                <Mail className="w-5 h-5" />
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
