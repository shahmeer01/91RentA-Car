/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { ArrowUpRight, PhoneCall } from "lucide-react";
import { SAMPLE_VEHICLES } from "../../constants/sampleData";
import { BRAND } from "../../constants/brand";
import { VehiclePlaceholder } from "../../types";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { VehicleCard } from "../cards/VehicleCard";
import { Button } from "../ui/Button";

interface FleetSectionProps {
  onBook: (vehicle: VehiclePlaceholder) => void;
  onViewDetails: (vehicle: VehiclePlaceholder) => void;
  onCustomRequest: () => void;
}

type CategoryTab = "all" | "sedans" | "suvs" | "luxury";

export const FleetSection: React.FC<FleetSectionProps> = ({
  onBook,
  onViewDetails,
  onCustomRequest,
}) => {
  const [activeCategory, setActiveCategory] = useState<CategoryTab>("all");

  const categories: { id: CategoryTab; label: string }[] = [
    { id: "all", label: "All Cars" },
    { id: "sedans", label: "Sedans" },
    { id: "suvs", label: "SUVs & 4×4" },
    { id: "luxury", label: "Luxury" },
  ];

  const filteredVehicles = SAMPLE_VEHICLES.filter((vehicle) => {
    if (activeCategory === "all") return true;
    if (activeCategory === "sedans") return vehicle.category === "Sedans";
    if (activeCategory === "suvs") return vehicle.category === "SUVs & 4×4";
    if (activeCategory === "luxury") return vehicle.category === "Luxury";
    return true;
  });

  return (
    <section id="cars" className="py-16 sm:py-24 border-b border-[rgba(255,255,255,0.06)] relative bg-[#0a0d13]">
      <Container size="default">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 gap-6">
          <SectionHeading
            kicker="Fleet Categories"
            title="Rental Fleet in Lahore"
            description="Explore popular vehicle choices for personal commutes, family travel, corporate mobility, and events in Lahore. Available with chauffeur or as self-drive."
          />

          <div className="shrink-0">
            <button
              type="button"
              onClick={onCustomRequest}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-semibold text-[#f8f9fa] hover:text-[#c89b3c] bg-[#141822] hover:bg-[#181e2a] border border-[rgba(255,255,255,0.08)] hover:border-[rgba(200,155,60,0.3)] transition-all cursor-pointer"
            >
              <span>Request a Specific Model</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#c89b3c]" />
            </button>
          </div>
        </div>

        {/* Refined Category Navigation Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 sm:mb-10 no-scrollbar border-b border-[rgba(255,255,255,0.06)]">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all whitespace-nowrap cursor-pointer ${
                  isActive
                    ? "bg-[#c89b3c] text-black shadow-[0_2px_10px_rgba(200,155,60,0.25)]"
                    : "bg-[#11151e] text-[#9ea8b6] hover:text-[#f8f9fa] border border-[rgba(255,255,255,0.06)] hover:border-[rgba(255,255,255,0.12)]"
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Fleet Grid: 1 column on mobile, 2 on tablet, 2 or 3 on large screens */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-7">
          {filteredVehicles.map((vehicle) => (
            <VehicleCard
              key={vehicle.id}
              vehicle={vehicle}
              onBook={onBook}
              onViewDetails={onViewDetails}
              id={`vehicle-${vehicle.id}`}
            />
          ))}
        </div>

        {/* Grounded Fleet Notice & Direct Contact Ribbon */}
        <div className="mt-12 p-5 rounded-xl bg-[#11151e] border border-[rgba(255,255,255,0.07)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="text-xs text-[#9ea8b6] leading-relaxed">
            <span className="font-semibold text-[#f8f9fa]">Fleet Inquiry: </span>
            Vehicle types shown represent popular rental categories in Lahore. Exact model availability, rental terms, and custom rates are confirmed directly via phone or WhatsApp.
          </div>

          <a
            href={`tel:${BRAND.phoneRaw}`}
            className="shrink-0 inline-flex items-center gap-2 text-xs font-semibold text-[#c89b3c] hover:underline"
          >
            <PhoneCall className="w-3.5 h-3.5" />
            <span>Call: {BRAND.phoneFormatted}</span>
          </a>
        </div>
      </Container>
    </section>
  );
};

export default FleetSection;
