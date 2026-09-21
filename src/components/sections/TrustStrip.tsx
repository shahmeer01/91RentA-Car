/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { Star, MapPin, Car, Phone } from "lucide-react";
import { BRAND } from "../../constants/brand";
import { Container } from "../ui/Container";

export const TrustStrip: React.FC = () => {
  return (
    <section className="py-5 sm:py-6 bg-[#0e121a] border-b border-[rgba(255,255,255,0.06)]">
      <Container size="default">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {/* Item 1: Google Rating */}
          <div className="flex items-start gap-3 p-2.5 rounded-lg">
            <div className="p-2 rounded-lg bg-[rgba(200,155,60,0.1)] text-[#c89b3c] shrink-0">
              <Star className="w-4 h-4 fill-[#c89b3c]" />
            </div>
            <div>
              <div className="text-xs sm:text-sm font-semibold text-[#f8f9fa]">
                5.0 ★ Rating
              </div>
              <p className="text-[11px] sm:text-xs text-[#9ea8b6] mt-0.5">
                {BRAND.reviewsCount} Google Reviews
              </p>
            </div>
          </div>

          {/* Item 2: Physical Johar Town Office */}
          <div className="flex items-start gap-3 p-2.5 rounded-lg">
            <div className="p-2 rounded-lg bg-[rgba(255,255,255,0.04)] text-[#c89b3c] shrink-0">
              <MapPin className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs sm:text-sm font-semibold text-[#f8f9fa]">
                Johar Town, Lahore
              </div>
              <p className="text-[11px] sm:text-xs text-[#9ea8b6] mt-0.5 truncate">
                274, Block K
              </p>
            </div>
          </div>

          {/* Item 3: Driver & Self-Drive Options */}
          <div className="flex items-start gap-3 p-2.5 rounded-lg">
            <div className="p-2 rounded-lg bg-[rgba(255,255,255,0.04)] text-[#c89b3c] shrink-0">
              <Car className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs sm:text-sm font-semibold text-[#f8f9fa]">
                Rental Options
              </div>
              <p className="text-[11px] sm:text-xs text-[#9ea8b6] mt-0.5">
                With Driver & Self-Drive
              </p>
            </div>
          </div>

          {/* Item 4: Direct Inquiries */}
          <div className="flex items-start gap-3 p-2.5 rounded-lg">
            <div className="p-2 rounded-lg bg-[rgba(200,155,60,0.1)] text-[#c89b3c] shrink-0">
              <Phone className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs sm:text-sm font-semibold text-[#f8f9fa]">
                Direct Contact
              </div>
              <p className="text-[11px] sm:text-xs text-[#9ea8b6] mt-0.5 font-mono">
                {BRAND.phoneFormatted}
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default TrustStrip;
