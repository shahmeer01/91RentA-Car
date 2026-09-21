/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { Phone, Menu, MessageSquare, Star, ArrowUpRight } from "lucide-react";
import { BRAND } from "../../constants/brand";
import { Button } from "../ui/Button";
import { Badge } from "../ui/Badge";
import { Container } from "../ui/Container";
import { MobileNav } from "./MobileNav";

interface HeaderProps {
  onBookClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onBookClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        id="main-header"
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled
            ? "bg-[#0b0d11]/95 backdrop-blur-md border-b border-white/[0.06] py-3.5 shadow-[0_4px_24px_rgba(0,0,0,0.35)]"
            : "bg-transparent border-b border-white/[0.04] py-4 sm:py-5"
        }`}
      >
        <Container size="wide">
          <div className="flex items-center justify-between">
            {/* Brand Logo */}
            <a
              href="#home"
              id="header-brand-logo"
              className="flex items-center gap-3 group focus-visible:outline-[#c29b4e]"
            >
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-[#141822] border border-[#c29b4e]/30 group-hover:border-[#c29b4e] flex items-center justify-center transition-colors">
                <span className="text-[#c29b4e] font-display font-bold text-base sm:text-lg tracking-tighter">
                  91
                </span>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <span className="font-display font-semibold text-lg sm:text-xl text-[#f8f9fa] tracking-tight group-hover:text-white transition-colors">
                    91rent a car
                  </span>
                </div>
                <span className="text-[11px] text-[#7e899b] tracking-wider uppercase hidden sm:block font-normal">
                  Johar Town • Lahore
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav
              id="desktop-nav"
              className="hidden lg:flex items-center gap-8 text-sm font-normal text-[#9ea8b6]"
            >
              {BRAND.navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="hover:text-[#f8f9fa] transition-colors py-1 relative group tracking-normal"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#c29b4e] transition-all duration-200 group-hover:w-full" />
                </a>
              ))}
            </nav>

            {/* Right Action Cluster */}
            <div className="flex items-center gap-3 sm:gap-4">
              {/* Direct Phone Call Link (Desktop) */}
              <a
                href={`tel:${BRAND.phoneRaw}`}
                className="hidden xl:flex items-center gap-2 px-3 py-1.5 rounded-md text-xs font-normal text-[#9ea8b6] hover:text-[#f8f9fa] transition-colors"
                title={`Call ${BRAND.phoneFormatted}`}
              >
                <Phone className="w-3.5 h-3.5 text-[#c29b4e]" />
                <span>{BRAND.phoneFormatted}</span>
              </a>

              {/* WhatsApp Quick Link (Mobile & Desktop) */}
              <a
                href={BRAND.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center p-2.5 rounded-lg bg-[#141822] hover:bg-[#1a202c] border border-white/[0.08] text-[#25D366] transition-colors"
                aria-label="Contact via WhatsApp"
              >
                <MessageSquare className="w-4 h-4" />
              </a>

              {/* Primary Booking CTA */}
              <Button
                id="header-book-button"
                variant="primary"
                size="sm"
                onClick={onBookClick}
                className="hidden sm:inline-flex"
                iconRight={<ArrowUpRight className="w-3.5 h-3.5" />}
              >
                Book a Car
              </Button>

              {/* Mobile Menu Trigger */}
              <button
                id="mobile-menu-trigger"
                type="button"
                onClick={() => setIsMobileMenuOpen(true)}
                aria-label="Open mobile navigation menu"
                className="lg:hidden p-2.5 rounded-lg text-[#9ea8b6] hover:text-[#f8f9fa] bg-[#141822] border border-white/[0.08] transition-colors focus-visible:outline-[#c29b4e]"
              >
                <Menu className="w-5 h-5" />
              </button>
            </div>
          </div>
        </Container>
      </header>

      {/* Mobile Drawer */}
      <MobileNav
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        onBookClick={onBookClick}
      />
    </>
  );
};

export default Header;
