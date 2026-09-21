/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { BRAND } from "./constants/brand";
import { VehiclePlaceholder } from "./types";
import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";
import { HeroSection } from "./components/sections/HeroSection";
import { TrustStrip } from "./components/sections/TrustStrip";
import { FleetSection } from "./components/sections/FleetSection";
import { BrandEditorialSection } from "./components/sections/BrandEditorialSection";
import { ServicesSection } from "./components/sections/ServicesSection";
import { ProcessSection } from "./components/sections/ProcessSection";
import { ReviewsSection } from "./components/sections/ReviewsSection";
import { LocationSection } from "./components/sections/LocationSection";
import { CTASection } from "./components/sections/CTASection";
import { WhatsAppFloatingCTA } from "./components/sections/WhatsAppFloatingCTA";
import { BookingModal } from "./components/sections/BookingModal";
import { VehicleDetailsModal } from "./components/modals/VehicleDetailsModal";

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedVehicle, setSelectedVehicle] = useState<string>("");
  const [isVehicleDetailsOpen, setIsVehicleDetailsOpen] = useState(false);
  const [viewingVehicle, setViewingVehicle] = useState<VehiclePlaceholder | null>(null);

  const handleOpenBooking = (vehicleName?: string, prefillDetails?: string) => {
    if (vehicleName) {
      setSelectedVehicle(vehicleName);
    } else if (prefillDetails) {
      setSelectedVehicle(prefillDetails);
    } else {
      setSelectedVehicle("");
    }
    setIsBookingOpen(true);
  };

  const handleHeroQuickSearch = (data?: {
    vehicleCategory?: string;
    dates?: string;
    serviceType?: string;
    location?: string;
  }) => {
    if (data) {
      const summary = `${data.vehicleCategory || "Vehicle"} (${data.serviceType || "With Chauffeur"}) — ${data.location || "Johar Town"}`;
      handleOpenBooking(summary);
    } else {
      handleOpenBooking();
    }
  };

  const handleVehicleBook = (vehicle: VehiclePlaceholder) => {
    handleOpenBooking(`${vehicle.brand} ${vehicle.name} (${vehicle.category})`);
  };

  const handleViewVehicleDetails = (vehicle: VehiclePlaceholder) => {
    setViewingVehicle(vehicle);
    setIsVehicleDetailsOpen(true);
  };

  const handleServiceSelect = (serviceTitle: string) => {
    handleOpenBooking(serviceTitle);
  };

  const handleCustomRequest = () => {
    handleOpenBooking("Custom Specific Vehicle Inquiries");
  };

  return (
    <div className="min-h-screen bg-[#0b0d11] text-[#f8f9fa] flex flex-col selection:bg-[#c89b3c] selection:text-black">
      {/* Sticky Luxury Header */}
      <Header onBookClick={() => handleOpenBooking()} />

      {/* Main Content Sections adhering to Phase 2 Visual Rhythm */}
      <main className="flex-1">
        {/* Section 1: Cinematic Automotive Hero with Integrated Booking Bar */}
        <HeroSection onBookClick={handleHeroQuickSearch} />

        {/* Section 2: Compact Trust & Verified Facts Strip */}
        <TrustStrip />

        {/* Section 3: Featured Vehicles Fleet Showcase ("Choose Your Ride") */}
        <FleetSection
          onBook={handleVehicleBook}
          onViewDetails={handleViewVehicleDetails}
          onCustomRequest={handleCustomRequest}
        />

        {/* Section 4: Tailored Rental Services Architecture */}
        <ServicesSection onServiceSelect={handleServiceSelect} />

        {/* Section 5: Editorial Brand / Why 91rent a car Section */}
        <BrandEditorialSection onBookClick={() => handleOpenBooking()} />

        {/* Section 6: 4-Step Rental Process Timeline */}
        <ProcessSection onStartBooking={() => handleOpenBooking()} />

        {/* Section 7: Verified Google Reviews & Reputation */}
        <ReviewsSection />

        {/* Section 8: Central Johar Town Hub & Location Showcase */}
        <LocationSection />

        {/* Section 9: Cinematic Closing CTA Section */}
        <CTASection onBookClick={() => handleOpenBooking()} />
      </main>

      {/* Section 10: Luxury Automotive Footer */}
      <Footer onBookClick={() => handleOpenBooking()} />

      {/* Persistent Floating WhatsApp Channel */}
      <WhatsAppFloatingCTA />

      {/* Interactive Booking / Inquiry Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        initialVehicleName={selectedVehicle}
      />

      {/* Interactive Vehicle Specifications & Inspection Modal */}
      <VehicleDetailsModal
        vehicle={viewingVehicle}
        isOpen={isVehicleDetailsOpen}
        onClose={() => {
          setIsVehicleDetailsOpen(false);
          setViewingVehicle(null);
        }}
        onBook={(veh) => {
          setIsVehicleDetailsOpen(false);
          handleVehicleBook(veh);
        }}
      />
    </div>
  );
}

