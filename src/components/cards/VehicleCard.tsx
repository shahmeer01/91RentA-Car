/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { Users, Gauge, ArrowUpRight, Fuel, ChevronRight } from "lucide-react";
import { VehiclePlaceholder } from "../../types";
import { Button } from "../ui/Button";

interface VehicleCardProps {
  vehicle: VehiclePlaceholder;
  onBook?: (vehicle: VehiclePlaceholder) => void;
  onViewDetails?: (vehicle: VehiclePlaceholder) => void;
  id?: string;
}

export const VehicleCard: React.FC<VehicleCardProps> = ({
  vehicle,
  onBook,
  onViewDetails,
  id,
}) => {
  return (
    <article
      id={id}
      className="group bg-[#11151e] border border-[rgba(255,255,255,0.07)] hover:border-[rgba(200,155,60,0.35)] rounded-2xl overflow-hidden transition-all duration-300 flex flex-col justify-between"
    >
      <div>
        {/* Vehicle Image (50-60% visual card ratio, consistent studio treatment) */}
        <div className="relative overflow-hidden aspect-[16/10] bg-[#090b0e]">
          <img
            src={vehicle.featuredImage}
            alt={`${vehicle.brand} ${vehicle.name}`}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            referrerPolicy="no-referrer"
          />
          {/* Subtle gradient only where needed */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#11151e] via-transparent to-black/30 pointer-events-none" />

          {/* Category Label */}
          <div className="absolute top-3.5 left-3.5 z-10">
            <span className="px-2.5 py-1 rounded-md text-[10px] font-semibold uppercase tracking-widest bg-[#0b0d11]/85 text-[#c89b3c] border border-[rgba(200,155,60,0.2)] backdrop-blur-md">
              {vehicle.category}
            </span>
          </div>

          {/* Rental Type Indicator */}
          <div className="absolute bottom-3 left-3.5 z-10">
            <span className="text-[11px] font-medium text-[#9ea8b6] bg-[#0b0d11]/70 px-2 py-0.5 rounded backdrop-blur-sm border border-[rgba(255,255,255,0.06)]">
              {vehicle.rentalType}
            </span>
          </div>
        </div>

        {/* Card Information */}
        <div className="p-5 sm:p-6 space-y-4">
          <div className="flex items-start justify-between gap-3">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#c89b3c] block">
                {vehicle.brand}
              </span>
              <h3 className="text-xl sm:text-2xl font-serif text-[#f8f9fa] tracking-tight group-hover:text-white transition-colors mt-0.5">
                {vehicle.name}
              </h3>
              <p className="text-xs text-[#9ea8b6] mt-0.5">
                {vehicle.segment}
              </p>
            </div>

            {/* Price on request */}
            <div className="text-right shrink-0 pt-0.5">
              <span className="text-xs font-semibold text-[#c89b3c] tracking-wide block">
                {vehicle.ratePlaceholder}
              </span>
            </div>
          </div>

          {/* Key Specifications */}
          <div className="flex items-center gap-4 sm:gap-6 pt-3 border-t border-[rgba(255,255,255,0.06)] text-xs text-[#9ea8b6]">
            <div className="flex items-center gap-1.5">
              <Gauge className="w-3.5 h-3.5 text-[#c89b3c] shrink-0" />
              <span>{vehicle.transmission}</span>
            </div>

            <div className="flex items-center gap-1.5">
              <Users className="w-3.5 h-3.5 text-[#c89b3c] shrink-0" />
              <span>{vehicle.seats} Seats</span>
            </div>

            {vehicle.fuelType && (
              <div className="flex items-center gap-1.5">
                <Fuel className="w-3.5 h-3.5 text-[#c89b3c] shrink-0" />
                <span>{vehicle.fuelType}</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Action Buttons: View Details & Book Now */}
      <div className="p-5 sm:p-6 pt-0 grid grid-cols-2 gap-3 items-center">
        <button
          type="button"
          onClick={() => onViewDetails?.(vehicle)}
          className="h-10 px-4 rounded-lg text-xs font-medium text-[#9ea8b6] hover:text-[#f8f9fa] hover:bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.08)] transition-all flex items-center justify-center gap-1.5 cursor-pointer"
        >
          <span>View Details</span>
          <ChevronRight className="w-3 h-3 text-[#647082]" />
        </button>

        <button
          type="button"
          onClick={() => onBook?.(vehicle)}
          className="h-10 px-4 rounded-lg text-xs font-semibold text-black bg-[#c89b3c] hover:bg-[#dbad47] transition-all flex items-center justify-center gap-1.5 shadow-[0_2px_12px_rgba(200,155,60,0.2)] cursor-pointer"
        >
          <span>Book Now</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </article>
  );
};

export default VehicleCard;
