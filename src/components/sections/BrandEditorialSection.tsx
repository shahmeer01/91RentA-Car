/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { MapPin, Car, Shield, MessageSquare, ArrowUpRight } from "lucide-react";
import { BRAND } from "../../constants/brand";
import { Container } from "../ui/Container";
import { Button } from "../ui/Button";

interface BrandEditorialSectionProps {
  onBookClick: () => void;
}

export const BrandEditorialSection: React.FC<BrandEditorialSectionProps> = ({ onBookClick }) => {
  const pillars = [
    {
      icon: MapPin,
      title: "Johar Town Location",
      description:
        "Based at 274, Block K, Johar Town, conveniently situated for vehicle pickups and dispatches in Lahore.",
    },
    {
      icon: Car,
      title: "Driver & Self-Drive Options",
      description:
        "Choose between chauffeur-driven travel or independent self-drive hire subject to verification.",
    },
    {
      icon: Shield,
      title: "Direct Rental Terms",
      description:
        "Straightforward communication regarding vehicle availability, rental rates, and required documentation.",
    },
    {
      icon: MessageSquare,
      title: "WhatsApp & Phone Inquiry",
      description:
        "Communicate directly with our Johar Town desk via +92 313 7934003 for rapid confirmation.",
    },
  ];

  return (
    <section id="about" className="py-16 sm:py-24 border-b border-[rgba(255,255,255,0.06)] bg-[#0c0f16] relative overflow-hidden">
      <Container size="default">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Visual Storytelling Imagery with Editorial Framing */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-[rgba(255,255,255,0.08)] aspect-[4/5] bg-[#12161e]">
              <img
                src="https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1200&q=80"
                alt="Executive automotive vehicle"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b0d11] via-transparent to-black/20" />

              {/* Factual Information Card */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-[#10141d]/95 border border-[rgba(255,255,255,0.1)] backdrop-blur-md">
                <div className="text-xs font-semibold text-[#c89b3c] uppercase tracking-wider mb-1">
                  Johar Town • Lahore
                </div>
                <p className="text-xs text-[#f8f9fa] font-medium leading-snug">
                  274, Block K, Johar Town, Lahore, 54782
                </p>
                <span className="text-[11px] text-[#9ea8b6] block mt-1.5">
                  5.0 ★ · 33 Google Reviews
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Typography & Factual Pillars */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-3">
              <span className="text-xs uppercase tracking-[0.2em] text-[#c89b3c] font-semibold block">
                Car Rental in Lahore
              </span>
              <h2 className="text-editorial-h1 text-3xl sm:text-4xl lg:text-5xl text-[#f8f9fa] tracking-tight leading-[1.2]">
                91rent a car, Johar Town.
              </h2>
              <p className="text-body-lead text-base sm:text-lg text-[#9ea8b6] leading-relaxed pt-2">
                Operating from our office in Johar Town, 91rent a car provides car rental services across Lahore. Whether you need a vehicle for city commutes, corporate travel, or airport transfer, we offer both chauffeur-driven and self-drive options with direct communication.
              </p>
            </div>

            {/* 4 Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
              {pillars.map((pillar, idx) => {
                const Icon = pillar.icon;
                return (
                  <div key={idx} className="space-y-2">
                    <div className="flex items-center gap-2.5">
                      <div className="p-2 rounded-lg bg-[rgba(200,155,60,0.1)] text-[#c89b3c]">
                        <Icon className="w-4 h-4" />
                      </div>
                      <h3 className="text-sm font-semibold text-[#f8f9fa]">
                        {pillar.title}
                      </h3>
                    </div>
                    <p className="text-xs text-[#9ea8b6] leading-relaxed pl-9">
                      {pillar.description}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Editorial Footer Trigger */}
            <div className="pt-4 border-t border-[rgba(255,255,255,0.06)] flex flex-wrap items-center gap-4">
              <Button
                variant="primary"
                size="md"
                onClick={onBookClick}
                iconRight={<ArrowUpRight className="w-4 h-4" />}
              >
                Inquire for Your Dates
              </Button>

              <a
                href={BRAND.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold text-[#c89b3c] hover:underline"
              >
                Direct WhatsApp inquiry →
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default BrandEditorialSection;
