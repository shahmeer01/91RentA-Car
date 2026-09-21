/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { MessageSquare, ArrowUpRight, MapPin, Phone, Star } from "lucide-react";
import { BRAND } from "../../constants/brand";
import { Container } from "../ui/Container";
import { Button } from "../ui/Button";

interface CTASectionProps {
  onBookClick: () => void;
  id?: string;
}

export const CTASection: React.FC<CTASectionProps> = ({ onBookClick, id }) => {
  return (
    <section id={id || "booking-cta"} className="py-16 sm:py-24 relative overflow-hidden">
      <Container size="default">
        <div className="relative rounded-2xl bg-gradient-to-b from-[#141822] to-[#0f1218] border border-[rgba(200,155,60,0.25)] p-8 sm:p-12 lg:p-16">
          <div className="relative z-10 max-w-3xl space-y-6">
            {/* Rating Indicator */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#181e2a] border border-[rgba(255,255,255,0.1)] text-xs">
              <div className="flex text-[#c89b3c]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-[#c89b3c]" />
                ))}
              </div>
              <span className="font-semibold text-[#f8f9fa]">
                5.0 ★ Rating
              </span>
              <span className="text-[#9ea8b6]">({BRAND.reviewsCount} Google Reviews)</span>
            </div>

            <h2 className="text-editorial-h1 text-3xl sm:text-4xl lg:text-5xl text-[#f8f9fa] tracking-tight">
              Inquire for Car Rental in Johar Town, Lahore
            </h2>

            <p className="text-body-lead text-base sm:text-lg text-[#9ea8b6] max-w-xl">
              Contact 91rent a car for vehicle availability, chauffeur options, or self-drive hire in Johar Town, Lahore. Reach out directly by phone or WhatsApp.
            </p>

            {/* Actions */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <Button
                variant="primary"
                size="lg"
                onClick={onBookClick}
                iconRight={<ArrowUpRight className="w-4 h-4" />}
              >
                Inquire Vehicle
              </Button>

              <Button
                variant="secondary"
                size="lg"
                href={BRAND.whatsappUrl}
                target="_blank"
                iconLeft={<MessageSquare className="w-4 h-4 text-[#25D366]" />}
              >
                WhatsApp Inquiry
              </Button>
            </div>

            {/* Details Ribbon */}
            <div className="pt-6 border-t border-[rgba(255,255,255,0.08)] flex flex-wrap items-center gap-6 text-xs text-[#9ea8b6]">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#c89b3c]" />
                <span>274, Block K, Johar Town, Lahore</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#c89b3c]" />
                <a href={`tel:${BRAND.phoneRaw}`} className="text-[#f8f9fa] hover:underline font-mono">
                  {BRAND.phoneFormatted}
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CTASection;
