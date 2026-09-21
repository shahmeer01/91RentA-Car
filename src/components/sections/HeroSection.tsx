/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { ArrowUpRight, MessageSquare, ChevronDown } from "lucide-react";
import { BRAND } from "../../constants/brand";
import { Container } from "../ui/Container";

interface HeroSectionProps {
  onBookClick: (prefillData?: {
    vehicleCategory?: string;
    dates?: string;
    serviceType?: string;
    location?: string;
  }) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onBookClick }) => {
  // Booking bar state with verified Lahore defaults
  const [pickupLocation, setPickupLocation] = useState("Johar Town, Lahore");
  const [vehicleCategory, setVehicleCategory] = useState("Any Vehicle");
  const [rentalDate, setRentalDate] = useState(() => {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, "0");
    const day = String(now.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  });
  const [rentalType, setRentalType] = useState<"with-driver" | "self-drive">("with-driver");

  const minDate = () => {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, "0");
    const day = String(now.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const handleQuickSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onBookClick({
      location: pickupLocation || "Johar Town, Lahore",
      vehicleCategory,
      serviceType: rentalType === "with-driver" ? "With Driver" : "Self Drive",
      dates: rentalDate,
    });
  };

  return (
    <section
      id="home"
      className="relative pt-6 sm:pt-10 lg:pt-12 pb-12 sm:pb-16 lg:pb-18 overflow-hidden border-b border-white/[0.05]"
    >
      {/* Desktop Automotive Visual Anchor (Right Half of Viewport) */}
      <div className="hidden lg:block absolute right-0 top-0 bottom-0 w-[50%] xl:w-[48%] pointer-events-none select-none overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=2000&q=85"
          alt="Executive rental automobile in Lahore"
          className="w-full h-full object-cover object-[65%_center]"
          referrerPolicy="no-referrer"
        />
        {/* Natural gradient transitions that seamlessly dissolve the image into the dark layout */}
        <div className="absolute inset-y-0 left-0 w-44 bg-gradient-to-r from-[#0b0d11] via-[#0b0d11]/60 to-transparent" />
        <div className="absolute top-0 inset-x-0 h-16 bg-gradient-to-b from-[#0b0d11] to-transparent" />
        <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-[#0b0d11] to-transparent" />
      </div>

      <Container size="default" className="relative z-10">
        {/* Main Content Area */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Text Hierarchy */}
          <div className="lg:col-span-7 xl:col-span-7 space-y-5 sm:space-y-6">
            {/* Level 1: Verified Social Proof */}
            <div className="flex items-center gap-1.5 text-xs text-[#8a94a6]">
              <span className="text-[#f8f9fa] font-medium">5.0 ★</span>
              <span className="text-[#414856]">·</span>
              <span>33 Google Reviews</span>
            </div>

            {/* Level 2: Confident, Controlled Headline */}
            <h1 className="text-[32px] sm:text-4xl lg:text-[44px] font-semibold text-[#f8f9fa] tracking-[-0.02em] leading-[1.16] max-w-xl">
              Premium Car Rental <br />
              in Johar Town, Lahore.
            </h1>

            {/* Level 3: Restrained, Factual Positioning Statement */}
            <p className="text-sm sm:text-[15px] text-[#9ea8b6] font-normal leading-relaxed max-w-md">
              Premium car rental, based in Johar Town, Lahore. Choose your vehicle and reserve directly with 91rent a car.
            </p>

            {/* Level 4: Clear Call-To-Action Hierarchy */}
            <div className="pt-1 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              {/* Primary CTA */}
              <button
                type="button"
                id="hero-primary-book-button"
                onClick={() => onBookClick()}
                className="inline-flex items-center justify-center gap-2 h-11 px-7 rounded-lg bg-[#c29b4e] hover:bg-[#b38d3f] text-[#0b0d11] text-sm font-semibold transition-colors duration-200 cursor-pointer shadow-[0_1px_3px_rgba(0,0,0,0.3)]"
              >
                <span>Book a Car</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              {/* Secondary CTA */}
              <a
                id="hero-whatsapp-inquiry-button"
                href={BRAND.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 h-11 px-6 rounded-lg bg-transparent hover:bg-white/[0.04] text-[#f8f9fa] border border-white/[0.14] hover:border-white/[0.22] text-sm font-medium transition-colors duration-200"
              >
                <MessageSquare className="w-4 h-4 text-[#25D366]" />
                <span>WhatsApp Us</span>
              </a>
            </div>
          </div>
        </div>

        {/* Mobile & Tablet Visual (Rendered between CTAs and Reservation Bar on <lg screens) */}
        <div className="lg:hidden mt-7 mb-6 rounded-lg overflow-hidden border border-white/[0.08] relative aspect-[16/9] sm:aspect-[21/9]">
          <img
            src="https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=1200&q=85"
            alt="Executive rental automobile in Lahore"
            className="w-full h-full object-cover object-center"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0b0d11]/70 via-transparent to-transparent" />
        </div>

        {/* Level 5: Refined Automotive Reservation Bar */}
        <div className="mt-8 sm:mt-10 lg:mt-14 max-w-5xl">
          <form
            onSubmit={handleQuickSearch}
            className="rounded-lg bg-[#11141c] border border-white/[0.08] shadow-[0_12px_32px_rgba(0,0,0,0.35)] p-3 sm:p-3.5 lg:p-2.5"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-2.5 lg:gap-0 lg:divide-x lg:divide-white/[0.06] items-center">
              {/* Field 1: Pickup Location */}
              <div className="lg:col-span-3 px-3 py-1">
                <label
                  htmlFor="hero-pickup-location"
                  className="block text-[10px] font-medium tracking-[0.14em] uppercase text-[#717b8c] mb-0.5"
                >
                  Pickup Location
                </label>
                <div className="relative flex items-center">
                  <input
                    type="text"
                    id="hero-pickup-location"
                    list="pickup-location-options"
                    value={pickupLocation}
                    onChange={(e) => setPickupLocation(e.target.value)}
                    placeholder="Johar Town, Lahore"
                    className="w-full text-xs sm:text-[13px] font-medium text-[#f8f9fa] bg-transparent border-0 p-0 pr-4 focus:outline-none focus:ring-0 truncate cursor-text"
                  />
                  <ChevronDown className="w-3.5 h-3.5 text-[#717b8c] absolute right-0 pointer-events-none" />
                  <datalist id="pickup-location-options">
                    <option value="Johar Town, Lahore" />
                    <option value="Allama Iqbal Int'l Airport (LHE), Lahore" />
                    <option value="Gulberg, Lahore" />
                    <option value="DHA, Lahore" />
                    <option value="Model Town, Lahore" />
                  </datalist>
                </div>
              </div>

              {/* Field 2: Vehicle / Category */}
              <div className="lg:col-span-3 px-3 py-1">
                <label
                  htmlFor="hero-vehicle-category"
                  className="block text-[10px] font-medium tracking-[0.14em] uppercase text-[#717b8c] mb-0.5"
                >
                  Vehicle / Category
                </label>
                <div className="relative flex items-center">
                  <select
                    id="hero-vehicle-category"
                    value={vehicleCategory}
                    onChange={(e) => setVehicleCategory(e.target.value)}
                    className="w-full text-xs sm:text-[13px] font-medium text-[#f8f9fa] bg-transparent border-0 p-0 pr-5 focus:outline-none focus:ring-0 cursor-pointer appearance-none truncate"
                  >
                    <option value="Any Vehicle" className="bg-[#11141c] text-white">
                      Any Vehicle
                    </option>
                    <option value="Sedan" className="bg-[#11141c] text-white">
                      Sedan
                    </option>
                    <option value="SUV & 4×4" className="bg-[#11141c] text-white">
                      SUV & 4×4
                    </option>
                    <option value="Luxury" className="bg-[#11141c] text-white">
                      Luxury
                    </option>
                  </select>
                  <ChevronDown className="w-3.5 h-3.5 text-[#717b8c] absolute right-0 pointer-events-none" />
                </div>
              </div>

              {/* Field 3: Rental Dates */}
              <div className="lg:col-span-2 px-3 py-1">
                <label
                  htmlFor="hero-rental-dates"
                  className="block text-[10px] font-medium tracking-[0.14em] uppercase text-[#717b8c] mb-0.5"
                >
                  Rental Dates
                </label>
                <div className="relative flex items-center">
                  <input
                    type="date"
                    id="hero-rental-dates"
                    min={minDate()}
                    value={rentalDate}
                    onChange={(e) => setRentalDate(e.target.value)}
                    className="w-full text-xs sm:text-[13px] font-medium text-[#f8f9fa] bg-transparent border-0 p-0 pr-1 focus:outline-none focus:ring-0 [color-scheme:dark] cursor-pointer appearance-none"
                  />
                </div>
              </div>

              {/* Field 4: Rental Type */}
              <div className="lg:col-span-2 px-3 py-1">
                <label
                  htmlFor="hero-rental-type"
                  className="block text-[10px] font-medium tracking-[0.14em] uppercase text-[#717b8c] mb-0.5"
                >
                  Rental Type
                </label>
                <div className="relative flex items-center">
                  <select
                    id="hero-rental-type"
                    value={rentalType}
                    onChange={(e) => setRentalType(e.target.value as "with-driver" | "self-drive")}
                    className="w-full text-xs sm:text-[13px] font-medium text-[#f8f9fa] bg-transparent border-0 p-0 pr-5 focus:outline-none focus:ring-0 cursor-pointer appearance-none truncate"
                  >
                    <option value="with-driver" className="bg-[#11141c] text-white">
                      With Driver
                    </option>
                    <option value="self-drive" className="bg-[#11141c] text-white">
                      Self Drive
                    </option>
                  </select>
                  <ChevronDown className="w-3.5 h-3.5 text-[#717b8c] absolute right-0 pointer-events-none" />
                </div>
              </div>

              {/* Action: Request a Booking */}
              <div className="lg:col-span-2 px-1.5 pt-1.5 lg:pt-0">
                <button
                  id="hero-request-booking-button"
                  type="submit"
                  className="w-full h-10 px-3 rounded-md bg-[#c29b4e] hover:bg-[#b38d3f] text-[#0b0d11] text-xs font-semibold tracking-normal transition-colors duration-200 cursor-pointer text-center flex items-center justify-center whitespace-nowrap"
                >
                  Request a Booking
                </button>
              </div>
            </div>
          </form>
        </div>
      </Container>
    </section>
  );
};

export default HeroSection;
