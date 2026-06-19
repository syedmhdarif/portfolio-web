import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router";
import { ThemeToggle } from "./ThemeToggle";
import { MobileNav } from "./MobileNav";
import { NAV_ITEMS, HOME_SECTION_IDS } from "./nav-items";
import { LOCATION_SHORT } from "../content/site";

function useScrolled(threshold = 16) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > threshold);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);
  return scrolled;
}

/** Scroll-spy: tracks the section currently in view on the home page. */
function useActiveSection(enabled: boolean) {
  const [active, setActive] = useState("top");
  useEffect(() => {
    if (!enabled) return;
    const sections = HOME_SECTION_IDS
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: [0, 0.25, 0.5, 1] }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [enabled]);
  return active;
}

export function Header() {
  const { pathname } = useLocation();
  const isHome = pathname === "/";
  const scrolled = useScrolled();
  const activeSection = useActiveSection(isHome);

  function isActive(to: string, sectionId?: string) {
    if (to === "/") return isHome && activeSection === "top";
    if (to.startsWith("/#")) return isHome && sectionId === activeSection;
    return pathname === to || pathname.startsWith(to + "/");
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b border-line transition-all duration-300 ${
        scrolled ? "bg-paper/85 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="wrap flex h-16 items-center justify-between gap-4 md:h-20">
        <Link
          to="/"
          aria-label="Home — Syed Arif"
          className="display text-xl leading-none text-ink transition-colors hover:text-amber-text md:text-2xl"
        >
          Syed Arif<span className="text-amber">.</span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-1 md:flex">
          {NAV_ITEMS.map((item) => {
            const active = isActive(item.to, item.sectionId);
            return (
              <Link
                key={item.label}
                to={item.to}
                aria-current={active ? "page" : undefined}
                className={`relative px-3 py-2 text-sm font-medium transition-colors ${
                  active ? "text-ink" : "text-ink-2 hover:text-ink"
                }`}
              >
                {item.label}
                <span
                  className={`absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-amber transition-transform duration-300 ${
                    active ? "scale-x-100" : "scale-x-0"
                  }`}
                  style={{ transformOrigin: "left" }}
                />
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <span className="chip hidden lg:inline-flex">
            <span className="chip-dot" aria-hidden="true" />
            Open to work · {LOCATION_SHORT.split(",")[0]}
          </span>
          <ThemeToggle className="hidden sm:grid" />
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
