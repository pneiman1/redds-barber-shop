"use client";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/config/site";
import { NAV_LINKS } from "@/lib/constants";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();
  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ["rgba(10, 10, 10, 0)", "rgba(10, 10, 10, 0.8)"]
  );

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      const headerOffset = 100; // Account for fixed header height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <motion.header
      style={{ backgroundColor }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "backdrop-blur-md shadow-lg" : ""
      }`}
    >
      <Container>
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center justify-between py-4">
          <a
            href="#"
            className="logo-font text-3xl text-primary-500 hover:text-primary-600 transition-colors tracking-wider"
          >
            {siteConfig.business.name}
          </a>

          <div className="flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-foreground hover:text-primary-500 transition-colors font-medium"
              >
                {link.label}
              </button>
            ))}
            <Button
              variant="primary"
              size="sm"
              onClick={() => window.open(siteConfig.booksy.url, '_blank')}
            >
              Book Now
            </Button>
          </div>
        </nav>

        {/* Mobile Header */}
        <div className="md:hidden py-4 text-center">
          <div className="logo-font text-2xl text-primary-500 tracking-wider">
            {siteConfig.business.name}
          </div>
          <div className="logo-font text-sm text-white tracking-wide">
            Pacific Beach, San Diego
          </div>
        </div>

      </Container>
    </motion.header>
  );
}
