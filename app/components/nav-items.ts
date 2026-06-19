export type NavItem = {
  label: string;
  /** React Router target. Hash items point at a home-page section. */
  to: string;
  /** For scroll-spy on the home page. */
  sectionId?: string;
};

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", to: "/", sectionId: "top" },
  { label: "Work", to: "/#work", sectionId: "work" },
  { label: "Background", to: "/background" },
  { label: "Learn", to: "/learn" },
  { label: "Contact", to: "/#contact", sectionId: "contact" },
];

/** Section ids on the home page used by the scroll-spy. */
export const HOME_SECTION_IDS = ["top", "about", "work", "services", "contact", "faq"];
