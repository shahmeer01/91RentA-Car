/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from "react";
import { X, Users, Gauge, Briefcase, MapPin, MessageSquare, ArrowUpRight, Shield, Fuel } from "lucide-react";
import { VehiclePlaceholder } from "../../types";
import { BRAND } from "../../constants/brand";
import { Button } from "../ui/Button";

interface VehicleDetailsModalProps {
  vehicle: VehiclePlaceholder | null;
  isOpen: boolean;
  onClose: () => void;
  onBook: (vehicle: VehiclePlaceholder) => void;
}

export const VehicleDetailsModal: React.FC<VehicleDetailsModalProps> = ({
  vehicle,
  isOpen,
  onClose,
  onBook,
}) => {
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

  if (!isOpen || !vehicle) return null;

  const whatsappInquiryUrl = `https://wa.me/923137934003?text=${encodeURIComponent(
    `Hello 91rent a car, I would like to inquire about availability and rental terms for the ${vehicle.brand} ${vehicle.name} (${vehicle.category}) in Johar Town, Lahore.`
  )}`;

  return (
    <div
      id="vehicle-details-modal-backdrop"
      className="fixed inset-0 z-50 bg-[#0b0d11]/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="vehicle-details-title"
    >
      <div className="relative w-full max-w-2xl rounded-2xl bg-[#12161e] border border-[rgba(255,255,255,0.1)] shadow-2xl overflow-hidden my-auto max-h-[90vh] flex flex-col">
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-[#0b0d11]/70 text-[#9ea8b6] hover:text-[#f8f9fa] hover:bg-[#181d28] border border-[rgba(255,255,255,0.1)] transition-colors backdrop-blur-sm cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Scrollable Modal Body */}
        <div className="overflow-y-auto flex-1 p-6 sm:p-8 space-y-6">
          {/* Header Image */}
          <div className="relative rounded-xl overflow-hidden aspect-video border border-[rgba(255,255,255,0.08)] bg-[#090b0e]">
            <img
              src={vehicle.featuredImage}
              alt={`${vehicle.brand} ${vehicle.name}`}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute top-3 left-3">
              <span className="px-3 py-1 rounded text-xs font-semibold uppercase tracking-wider bg-[#0b0d11]/90 text-[#c89b3c] border border-[rgba(200,155,60,0.25)] backdrop-blur-md">
                {vehicle.category}
              </span>
            </div>
            <div className="absolute bottom-3 right-3">
              <span className="px-3 py-1 rounded text-xs font-semibold text-[#c89b3c] bg-[#0b0d11]/90 border border-[rgba(200,155,60,0.3)] backdrop-blur-md">
                {vehicle.ratePlaceholder}
              </span>
            </div>
          </div>

          {/* Title & Overview */}
          <div>
            <div className="flex flex-wrap items-center gap-2 text-xs text-[#c89b3c] font-medium uppercase tracking-wider mb-1">
              <span>{vehicle.brand}</span>
              <span>•</span>
              <span className="text-[#9ea8b6]">{vehicle.segment}</span>
              <span>•</span>
              <span className="flex items-center gap-1 text-[#c89b3c]">
                <MapPin className="w-3 h-3" /> Johar Town, Lahore
              </span>
            </div>
            <h2 id="vehicle-details-title" className="text-editorial-h2 text-2xl sm:text-3xl text-[#f8f9fa]">
              {vehicle.name}
            </h2>
            <p className="text-sm text-[#9ea8b6] mt-2 leading-relaxed">
              Candidate vehicle category for rental from our Johar Town office in Lahore. Inquire directly for current fleet availability, driver options, and customized rental rates.
            </p>
          </div>

          {/* Core Specifications */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-[#647082] mb-3">
              Category Details
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="bg-[#181e2a] p-3 rounded-lg border border-[rgba(255,255,255,0.06)]">
                <div className="flex items-center gap-1.5 text-xs text-[#9ea8b6] mb-1">
                  <Gauge className="w-3.5 h-3.5 text-[#c89b3c]" />
                  <span>Transmission</span>
                </div>
                <div className="text-sm font-semibold text-[#f8f9fa]">{vehicle.transmission}</div>
              </div>

              <div className="bg-[#181e2a] p-3 rounded-lg border border-[rgba(255,255,255,0.06)]">
                <div className="flex items-center gap-1.5 text-xs text-[#9ea8b6] mb-1">
                  <Users className="w-3.5 h-3.5 text-[#c89b3c]" />
                  <span>Seating</span>
                </div>
                <div className="text-sm font-semibold text-[#f8f9fa]">{vehicle.seats} Seats</div>
              </div>

              <div className="bg-[#181e2a] p-3 rounded-lg border border-[rgba(255,255,255,0.06)]">
                <div className="flex items-center gap-1.5 text-xs text-[#9ea8b6] mb-1">
                  <Fuel className="w-3.5 h-3.5 text-[#c89b3c]" />
                  <span>Fuel</span>
                </div>
                <div className="text-sm font-semibold text-[#f8f9fa]">{vehicle.fuelType || "Petrol"}</div>
              </div>

              <div className="bg-[#181e2a] p-3 rounded-lg border border-[rgba(255,255,255,0.06)]">
                <div className="flex items-center gap-1.5 text-xs text-[#9ea8b6] mb-1">
                  <Briefcase className="w-3.5 h-3.5 text-[#c89b3c]" />
                  <span>Service</span>
                </div>
                <div className="text-xs font-semibold text-[#f8f9fa] leading-tight mt-0.5">{vehicle.rentalType}</div>
              </div>
            </div>
          </div>

          {/* Rental Terms Notice */}
          <div className="p-4 rounded-xl bg-[#0e1219] border border-[rgba(255,255,255,0.08)] space-y-2">
            <div className="flex items-center gap-2 text-xs font-semibold text-[#f8f9fa]">
              <Shield className="w-4 h-4 text-[#c89b3c]" />
              <span>Rental Inquiries & Verification</span>
            </div>
            <p className="text-xs text-[#9ea8b6] leading-relaxed">
              Standard identification documents (CNIC / Passport and valid driver's licence for self-drive) required. Rates and bookings are finalized via phone or official WhatsApp.
            </p>
          </div>
        </div>

        {/* Modal Action Footer */}
        <div className="p-4 sm:p-6 bg-[#0e1219] border-t border-[rgba(255,255,255,0.08)] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
          <Button
            variant="secondary"
            size="md"
            href={whatsappInquiryUrl}
            target="_blank"
            iconLeft={<MessageSquare className="w-4 h-4 text-[#25D366]" />}
          >
            Inquire on WhatsApp
          </Button>

          <Button
            variant="primary"
            size="md"
            onClick={() => {
              onClose();
              onBook(vehicle);
            }}
            iconRight={<ArrowUpRight className="w-4 h-4" />}
          >
            Inquire This Option
          </Button>
        </div>
      </div>
    </div>
  );
};

export default VehicleDetailsModal;
