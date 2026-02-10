export const NAV_LINKS = [
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#location", label: "Location" },
  { href: "#contact", label: "Contact" },
] as const;

export const ANIMATION_DURATION = {
  fast: 0.3,
  normal: 0.6,
  slow: 0.9,
} as const;

export const ANIMATION_STAGGER = {
  children: 0.1,
  cards: 0.15,
} as const;
