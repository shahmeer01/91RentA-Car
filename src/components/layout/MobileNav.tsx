/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from "react";
import { X, Phone, MessageSquare, MapPin, Star, ArrowRight } from "lucide-react";
import { BRAND } from "../../constants/brand";
import { Button } from "../ui/Button";
import { Badge } from "../ui/Badge";

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
  onBookClick: () => void;
}

export const MobileNav: React.FC<MobileNavProps> = ({
  isOpen,
  onClose,
  onBookClick,
}) => {
  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  const handleNavClick = () => {
    document.body.style.overflow = "";
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div
      id="mobile-nav-backdrop"
      className="fixed inset-0 z-50 bg-[#0b0d11]/85 backdrop-blur-xl transition-opacity duration-300 flex flex-col justify-between"
      role="dialog"
      aria-modal="true"
      aria-label="Mobile Navigation Menu"
    >
      {/* Top Bar */}
      <div className="flex items-center justify-between px-6 py-5 border-b border-[rgba(255,255,255,0.08)] bg-[#0b0d11]">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-md bg-[#181d26] border border-[#c89b3c]/40 flex items-center justify-center">
            <span className="text-[#c89b3c] font-display font-bold text-sm tracking-tighter">
              91
            </span>
          </div>
          <div className="flex flex-col">
            <span className="font-display font-bold text-base tracking-tight text-[#f8f9fa] leading-none">
              91rent a car
            </span>
            <span className="text-[10px] text-[#9ea8b6] uppercase tracking-[0.14em] mt-0.5">
              Johar Town, Lahore
            </span>
          </div>
        </div>

        <button
          type="button"
          onClick={onClose}
          aria-label="Close navigation menu"
          className="p-2.5 rounded-lg text-[#9ea8b6] hover:text-[#f8f9fa] hover:bg-[#191e29] border border-transparent hover:border-[rgba(255,255,255,0.1)] transition-colors focus-visible:outline-[#c89b3c]"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Main Navigation Links */}
      <div className="flex-1 overflow-y-auto px-6 py-6 space-y-6">
        {/* Rating summary banner in menu */}
        <div className="p-4 rounded-xl bg-[#141822] border border-[rgba(255,255,255,0.08)] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex text-[#c89b3c]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-[#c89b3c]" />
              ))}
            </div>
            <span className="text-xs font-semibold text-[#f8f9fa]">
              {BRAND.rating.toFixed(1)} Rating
            </span>
          </div>
          <span className="text-[11px] text-[#9ea8b6]">
            {BRAND.reviewsCount} Google Reviews
          </span>
        </div>

        {/* Links */}
        <nav className="space-y-1">
          {BRAND.navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={handleNavClick}
              className="group flex items-center justify-between py-3.5 px-3 rounded-lg text-lg font-medium text-[#f8f9fa] hover:text-[#c89b3c] hover:bg-[#141822] transition-colors"
            >
              <span>{item.label}</span>
              <ArrowRight className="w-4 h-4 text-[#647082] group-hover:text-[#c89b3c] group-hover:translate-x-1 transition-all" />
            </a>
          ))}
        </nav>

        {/* Verified Location Card */}
        <div className="p-4 rounded-xl bg-[#12161e] border border-[rgba(255,255,255,0.06)] space-y-2">
          <div className="flex items-start gap-2.5 text-xs text-[#9ea8b6]">
            <MapPin className="w-4 h-4 text-[#c89b3c] shrink-0 mt-0.5" />
            <span>{BRAND.address}</span>
          </div>
          <div className="flex items-center gap-2.5 text-xs text-[#9ea8b6]">
            <Phone className="w-4 h-4 text-[#c89b3c] shrink-0" />
            <a
              href={`tel:${BRAND.phoneRaw}`}
              className="text-[#f8f9fa] hover:text-[#c89b3c] font-medium"
            >
              {BRAND.phoneFormatted}
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Sticky Action Buttons */}
      <div className="p-6 border-t border-[rgba(255,255,255,0.08)] bg-[#0b0d11] space-y-3">
        <Button
          variant="primary"
          size="md"
          fullWidth
          onClick={() => {
            onClose();
            onBookClick();
          }}
          iconRight={<ArrowRight className="w-4 h-4" />}
        >
          Book a Car
        </Button>

        <Button
          variant="secondary"
          size="md"
          fullWidth
          href={BRAND.whatsappUrl}
          target="_blank"
          iconLeft={<MessageSquare className="w-4 h-4 text-[#25D366]" />}
        >
          WhatsApp Us
        </Button>
      </div>
    </div>
  );
};

export default MobileNav;
