/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { MapPin, Phone, MessageSquare, ArrowUpRight, Star } from "lucide-react";
import { BRAND } from "../../constants/brand";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";

export const LocationSection: React.FC = () => {
  return (
    <section
      id="contact"
      className="py-16 sm:py-24 border-b border-[rgba(255,255,255,0.06)] bg-[#0b0e14] relative"
    >
      <Container size="default">
        {/* Section Header */}
        <div className="mb-10 sm:mb-14 max-w-2xl">
          <SectionHeading
            kicker="Location & Contact"
            title="Johar Town Office"
            description="Visit us in Johar Town, Lahore, or contact us directly for rental enquiries."
          />
        </div>

        {/* Location & Map Composition: Vertically centered on desktop (40% / 60%) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 lg:items-center">
          {/* Left Column: Clean Editorial Contact Details (approx 40% on desktop) */}
          <div className="lg:col-span-5 flex flex-col justify-center space-y-6 py-1">
            {/* 1. Office Address */}
            <div className="pb-5 border-b border-[rgba(255,255,255,0.07)]">
              <div className="text-[10px] font-semibold tracking-[0.2em] uppercase text-[#c89b3c] mb-1.5 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5" />
                <span>Office Address</span>
              </div>
              <p className="text-sm font-medium text-[#f8f9fa] leading-relaxed">
                274, Block K, Johar Town, Lahore, 54782, Pakistan
              </p>
            </div>

            {/* 2. Phone */}
            <div className="pb-5 border-b border-[rgba(255,255,255,0.07)]">
              <div className="text-[10px] font-semibold tracking-[0.2em] uppercase text-[#c89b3c] mb-1.5 flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5" />
                <span>Phone</span>
              </div>
              <a
                href={`tel:${BRAND.phoneRaw}`}
                className="text-base font-semibold text-[#f8f9fa] hover:text-[#c89b3c] transition-colors inline-block font-mono"
              >
                +92 313 7934003
              </a>
            </div>

            {/* 3. WhatsApp */}
            <div className="pb-5 border-b border-[rgba(255,255,255,0.07)]">
              <div className="text-[10px] font-semibold tracking-[0.2em] uppercase text-[#c89b3c] mb-1.5 flex items-center gap-1.5">
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </div>
              <a
                href={BRAND.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-base font-semibold text-[#f8f9fa] hover:text-[#25D366] transition-colors inline-block font-mono"
              >
                +92 313 7934003
              </a>
            </div>

            {/* Google Reviews Verification */}
            <div className="flex items-center gap-3 pt-1 text-xs text-[#9ea8b6]">
              <div className="flex items-center gap-1.5 text-[#f8f9fa] font-medium">
                <Star className="w-4 h-4 fill-[#c89b3c] text-[#c89b3c]" />
                <span>5.0 ★ on Google Maps</span>
              </div>
              <span className="text-[#3a4250]">·</span>
              <span>33 Google Reviews</span>
            </div>

            {/* Contact Actions */}
            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              {/* Primary Action: Get Directions on Google Maps */}
              <a
                href={BRAND.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 h-11 px-6 rounded-lg bg-[#c89b3c] hover:bg-[#dbad47] text-black text-xs sm:text-sm font-semibold transition-colors duration-200 shadow-[0_2px_12px_rgba(200,155,60,0.2)]"
              >
                <span>Get Directions on Google Maps</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              {/* Secondary Action: Message on WhatsApp */}
              <a
                href={BRAND.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 h-11 px-6 rounded-lg bg-transparent hover:bg-white/[0.04] text-[#f8f9fa] border border-white/[0.14] hover:border-white/[0.22] text-xs sm:text-sm font-medium transition-colors duration-200"
              >
                <MessageSquare className="w-4 h-4 text-[#25D366]" />
                <span>Message on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Right Column: Real Interactive Google Map (approx 60% on desktop) */}
          <div className="lg:col-span-7 rounded-2xl overflow-hidden border border-[rgba(255,255,255,0.08)] bg-[#11141d] shadow-[0_16px_40px_rgba(0,0,0,0.35)] relative flex flex-col h-[380px] sm:h-[420px] lg:h-[480px]">
            {/* Map Top Bar with location badge & quick external link */}
            <div className="px-4 py-3 bg-[#0d1017] border-b border-[rgba(255,255,255,0.06)] flex items-center justify-between gap-3 shrink-0">
              <div className="flex items-center gap-2 text-xs text-[#f8f9fa] truncate">
                <MapPin className="w-3.5 h-3.5 text-[#c89b3c] shrink-0" />
                <span className="font-medium truncate">274, Block K, Johar Town, Lahore</span>
              </div>
              <a
                href={BRAND.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-medium text-[#c89b3c] hover:underline shrink-0"
              >
                <span>Open in Google Maps</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Real Interactive Google Map iframe */}
            <div className="flex-1 w-full relative">
              <iframe
                title="91rent a car Location - Johar Town, Lahore"
                src="https://maps.google.com/maps?q=91rent+a+car,+274+Block+K+Johar+Town+Lahore+Pakistan&t=&z=16&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full border-0 absolute inset-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default LocationSection;
