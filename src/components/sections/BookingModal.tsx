/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { X, MessageSquare, Phone, MapPin, Calendar, Car, User, CheckCircle } from "lucide-react";
import { BRAND } from "../../constants/brand";
import { Button } from "../ui/Button";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialVehicleName?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  initialVehicleName = "",
}) => {
  const [vehicle, setVehicle] = useState(initialVehicleName);
  const [name, setName] = useState("");
  const [dates, setDates] = useState("");
  const [driverOption, setDriverOption] = useState<"with-driver" | "self-drive">("with-driver");
  const [isSent, setIsSent] = useState(false);

  useEffect(() => {
    if (initialVehicleName) {
      setVehicle(initialVehicleName);
    }
  }, [initialVehicleName]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      setIsSent(false);
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Hello 91rent a car,\nI would like to inquire about booking:\n- Vehicle: ${
      vehicle || "General Inquiry"
    }\n- Option: ${
      driverOption === "with-driver" ? "With Chauffeur/Driver" : "Self-Drive"
    }\n- Rental Dates: ${dates || "Flexible"}\n- Client Name: ${name || "Customer"}`;

    const url = `https://wa.me/923137934003?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank", "noopener,noreferrer");
    setIsSent(true);
  };

  return (
    <div
      id="booking-modal-backdrop"
      className="fixed inset-0 z-50 bg-[#0b0d11]/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-headline"
    >
      <div className="relative w-full max-w-lg rounded-2xl bg-[#12161e] border border-[rgba(255,255,255,0.1)] shadow-2xl p-6 sm:p-8 overflow-hidden">
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-5 right-5 p-2 rounded-lg text-[#9ea8b6] hover:text-[#f8f9fa] hover:bg-[#181d28] border border-transparent hover:border-[rgba(255,255,255,0.08)] transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {isSent ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-12 h-12 rounded-full bg-[#182a1c] border border-[#25D366]/40 text-[#25D366] flex items-center justify-center mx-auto">
              <CheckCircle className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-[#f8f9fa]">Inquiry Redirected</h3>
            <p className="text-sm text-[#9ea8b6] max-w-sm mx-auto">
              Your inquiry has been prepared for WhatsApp direct dispatch. Our reservation team at
              Johar Town, Lahore will assist you shortly.
            </p>
            <div className="pt-2">
              <Button variant="secondary" size="md" onClick={onClose}>
                Close Window
              </Button>
            </div>
          </div>
        ) : (
          <div className="space-y-5">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#c89b3c]">
                <span>91rent a car • Johar Town</span>
              </div>
              <h3 id="modal-headline" className="text-editorial-h3 text-2xl text-[#f8f9fa] mt-1">
                Book a Car Inquiry
              </h3>
              <p className="text-xs text-[#9ea8b6] mt-1">
                Fast reservation confirmation via our official WhatsApp or direct phone.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-[#9ea8b6] mb-1.5">
                  Your Full Name
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-[#647082] absolute left-3.5 top-3.5" />
                  <input
                    type="text"
                    required
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-[#181e2a] border border-[rgba(255,255,255,0.08)] text-sm text-[#f8f9fa] placeholder-[#647082] focus:border-[#c89b3c] focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-[#9ea8b6] mb-1.5">
                  Requested Vehicle / Category
                </label>
                <div className="relative">
                  <Car className="w-4 h-4 text-[#647082] absolute left-3.5 top-3.5" />
                  <input
                    type="text"
                    placeholder="e.g. Sedan, Executive SUV, or Specific Model"
                    value={vehicle}
                    onChange={(e) => setVehicle(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-[#181e2a] border border-[rgba(255,255,255,0.08)] text-sm text-[#f8f9fa] placeholder-[#647082] focus:border-[#c89b3c] focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-[#9ea8b6] mb-1.5">
                    Rental Dates / Duration
                  </label>
                  <div className="relative">
                    <Calendar className="w-4 h-4 text-[#647082] absolute left-3.5 top-3.5" />
                    <input
                      type="text"
                      placeholder="e.g. 3 Days / Weekend"
                      value={dates}
                      onChange={(e) => setDates(e.target.value)}
                      className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-[#181e2a] border border-[rgba(255,255,255,0.08)] text-sm text-[#f8f9fa] placeholder-[#647082] focus:border-[#c89b3c] focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#9ea8b6] mb-1.5">
                    Service Type
                  </label>
                  <select
                    value={driverOption}
                    onChange={(e) => setDriverOption(e.target.value as any)}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#181e2a] border border-[rgba(255,255,255,0.08)] text-sm text-[#f8f9fa] focus:border-[#c89b3c] focus:outline-none transition-colors"
                  >
                    <option value="with-driver">With Driver (Chauffeur)</option>
                    <option value="self-drive">Self-Drive</option>
                  </select>
                </div>
              </div>

              <div className="pt-2 space-y-2.5">
                <Button
                  type="submit"
                  variant="primary"
                  size="md"
                  fullWidth
                  iconLeft={<MessageSquare className="w-4 h-4" />}
                >
                  Send Inquiry via WhatsApp
                </Button>

                <div className="flex items-center justify-between text-xs text-[#9ea8b6] px-1 pt-1">
                  <div className="flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-[#c89b3c]" />
                    <a href={`tel:${BRAND.phoneRaw}`} className="hover:text-[#f8f9fa]">
                      Or call {BRAND.phoneFormatted}
                    </a>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-[#c89b3c]" />
                    <span>Johar Town, Lahore</span>
                  </div>
                </div>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default BookingModal;
