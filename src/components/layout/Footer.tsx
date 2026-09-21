/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { MapPin, Phone, MessageSquare, Star, ArrowUpRight } from "lucide-react";
import { BRAND } from "../../constants/brand";
import { Container } from "../ui/Container";
import { Button } from "../ui/Button";

interface FooterProps {
  onBookClick: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onBookClick }) => {
  return (
    <footer
      id="main-footer"
      className="bg-[#090b0e] border-t border-[rgba(255,255,255,0.08)] pt-16 pb-12 text-[#9ea8b6]"
    >
      <Container size="wide">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-[rgba(255,255,255,0.06)]">
          {/* Brand Column (5 cols) */}
          <div className="lg:col-span-5 space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-[#141822] border border-[#c89b3c]/40 flex items-center justify-center">
                <span className="text-[#c89b3c] font-display font-extrabold text-base tracking-tighter">
                  91
                </span>
              </div>
              <div>
                <span className="font-display font-bold text-xl text-[#f8f9fa] tracking-tight block leading-none">
                  91rent a car
                </span>
                <span className="text-xs text-[#9ea8b6] uppercase tracking-[0.14em] mt-1 block">
                  Johar Town • Lahore
                </span>
              </div>
            </div>

            <p className="text-sm text-[#9ea8b6] leading-relaxed max-w-sm">
              Car rental agency based at 274, Block K, Johar Town, Lahore. Offering passenger vehicle rentals for local travel, business requirements, and airport transfers.
            </p>

            {/* Google Review Display */}
            <a
              href={BRAND.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 p-3 rounded-xl bg-[#12161e] border border-[rgba(200,155,60,0.25)] hover:border-[rgba(200,155,60,0.45)] transition-colors"
            >
              <div className="flex text-[#c89b3c]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-[#c89b3c]" />
                ))}
              </div>
              <div className="text-xs">
                <span className="font-bold text-[#f8f9fa] mr-1.5">5.0 ★</span>
                <span className="text-[#9ea8b6]">({BRAND.reviewsCount} Google Reviews)</span>
              </div>
            </a>
          </div>

          {/* Quick Navigation (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-[#f8f9fa]">
              Navigation
            </h3>
            <ul className="space-y-2.5 text-sm">
              {BRAND.navItems.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="hover:text-[#f8f9fa] hover:translate-x-0.5 inline-block transition-transform"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Contact (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-[#f8f9fa]">
              Johar Town Office
            </h3>

            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#c89b3c] shrink-0 mt-1" />
                <span className="text-[#f8f9fa]">{BRAND.address}</span>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#c89b3c] shrink-0" />
                <a
                  href={`tel:${BRAND.phoneRaw}`}
                  className="text-[#f8f9fa] hover:text-[#c89b3c] font-medium transition-colors font-mono"
                >
                  {BRAND.phoneFormatted}
                </a>
              </div>

              <div className="flex items-center gap-3">
                <MessageSquare className="w-4 h-4 text-[#25D366] shrink-0" />
                <a
                  href={BRAND.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#25D366] hover:underline font-medium font-mono"
                >
                  +92 313 7934003 (WhatsApp)
                </a>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap gap-3">
              <Button
                variant="primary"
                size="sm"
                onClick={onBookClick}
                iconRight={<ArrowUpRight className="w-3.5 h-3.5" />}
              >
                Inquire Vehicle
              </Button>
              <Button
                variant="secondary"
                size="sm"
                href={BRAND.whatsappUrl}
                target="_blank"
                iconLeft={<MessageSquare className="w-3.5 h-3.5 text-[#25D366]" />}
              >
                WhatsApp
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#647082]">
          <p>
            &copy; {new Date().getFullYear()} {BRAND.name}. All rights reserved.
          </p>
          <p className="text-center sm:text-right">
            274, Block K, Johar Town, Lahore, Pakistan
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
