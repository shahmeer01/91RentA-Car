/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { Star, ExternalLink, MapPin, MessageSquare } from "lucide-react";
import { BRAND } from "../../constants/brand";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { Button } from "../ui/Button";

export const ReviewsSection: React.FC = () => {
  const googleMapsReviewsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    "91rent a car 274 Block K Johar Town Lahore"
  )}`;

  return (
    <section id="reviews" className="py-16 sm:py-24 border-b border-[rgba(255,255,255,0.06)] bg-[#0c0f16] relative">
      <Container size="default">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-12 gap-6">
          <SectionHeading
            kicker="Client Ratings"
            title="5.0 ★ on Google Maps"
            description={`91rent a car holds a 5.0 rating based on ${BRAND.reviewsCount} reviews on Google from customers in Lahore.`}
          />

          <div className="shrink-0">
            <Button
              variant="outline"
              size="sm"
              href={googleMapsReviewsUrl}
              target="_blank"
              iconRight={<ExternalLink className="w-3.5 h-3.5" />}
            >
              View on Google Maps
            </Button>
          </div>
        </div>

        {/* Honest Architectural Reputation Presentation */}
        <div className="rounded-2xl bg-[#121620] border border-[rgba(255,255,255,0.08)] p-8 sm:p-12 lg:p-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left: Prominent Confirmed Rating Display */}
            <div className="lg:col-span-5 text-center lg:text-left border-b lg:border-b-0 lg:border-r border-[rgba(255,255,255,0.06)] pb-8 lg:pb-0 lg:pr-8">
              <div className="inline-flex items-baseline gap-2">
                <span className="text-5xl sm:text-6xl font-serif font-bold text-[#f8f9fa] tracking-tight">
                  {BRAND.rating.toFixed(1)}
                </span>
                <span className="text-2xl font-serif text-[#c89b3c]">★</span>
              </div>

              <div className="flex items-center justify-center lg:justify-start gap-1 text-[#c89b3c] my-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#c89b3c]" />
                ))}
              </div>

              <p className="text-sm font-semibold text-[#f8f9fa]">
                {BRAND.reviewsCount} Google Reviews
              </p>
              <p className="text-xs text-[#9ea8b6] mt-1 flex items-center justify-center lg:justify-start gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#c89b3c]" />
                <span>274, Block K, Johar Town, Lahore</span>
              </p>
            </div>

            {/* Right: Transparent Guidance & Verification CTA */}
            <div className="lg:col-span-7 space-y-5">
              <div className="space-y-2">
                <h3 className="text-editorial-h3 text-xl text-[#f8f9fa]">
                  Read the latest customer reviews on Google.
                </h3>
                <p className="text-sm text-[#9ea8b6] leading-relaxed max-w-xl">
                  To ensure complete transparency and authenticity, all customer feedback and rating history can be viewed directly on our official Google Maps profile.
                </p>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-3.5">
                <Button
                  variant="primary"
                  size="md"
                  href={googleMapsReviewsUrl}
                  target="_blank"
                  iconRight={<ExternalLink className="w-4 h-4" />}
                >
                  Read Reviews on Google Maps
                </Button>

                <Button
                  variant="secondary"
                  size="md"
                  href={BRAND.whatsappUrl}
                  target="_blank"
                  iconLeft={<MessageSquare className="w-4 h-4 text-[#25D366]" />}
                >
                  Ask a Question
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ReviewsSection;
