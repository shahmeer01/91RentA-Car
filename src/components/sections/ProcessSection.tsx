/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { ArrowRight } from "lucide-react";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";

interface ProcessSectionProps {
  onStartBooking: () => void;
}

const STEPS = [
  {
    number: "01",
    title: "Choose Your Car",
    description: "Select a vehicle or category that suits your requirements.",
  },
  {
    number: "02",
    title: "Send Your Request",
    description: "Share your preferred dates, rental type, and requirements.",
  },
  {
    number: "03",
    title: "Confirm Your Rental",
    description: "Discuss the rental details and confirm the arrangement.",
  },
  {
    number: "04",
    title: "Collect Your Vehicle",
    description: "Collect the vehicle from the agreed location and begin your rental.",
  },
];

export const ProcessSection: React.FC<ProcessSectionProps> = ({ onStartBooking }) => {
  return (
    <section
      id="process"
      className="py-16 sm:py-24 border-b border-[rgba(255,255,255,0.06)] bg-[#090b0f] relative overflow-hidden"
    >
      <Container size="default">
        {/* Centered Heading */}
        <div className="max-w-2xl mx-auto text-center mb-14 sm:mb-20">
          <SectionHeading
            kicker="Rental Process"
            title="How It Works"
            description="Four simple steps to arrange your vehicle rental in Johar Town, Lahore."
            align="center"
          />
        </div>

        {/* Desktop Layout: Horizontal 4-Step Continuous Sequence */}
        <div className="hidden lg:block relative pt-4">
          {/* Continuous thin connecting track across all steps */}
          <div className="absolute top-0 left-[4%] right-[4%] h-[1px] bg-[rgba(255,255,255,0.08)]" />

          <div className="grid grid-cols-4 gap-8 xl:gap-10">
            {STEPS.map((step) => (
              <div
                key={step.number}
                className="relative pt-7 group transition-all duration-300 cursor-default"
              >
                {/* Subtle top indicator on the track that emphasizes on hover */}
                <div className="absolute top-[-1px] left-0 w-8 h-[2px] bg-[#c89b3c] opacity-60 group-hover:w-16 group-hover:opacity-100 transition-all duration-300" />

                {/* Elegant Step Number as Primary Visual Element */}
                <div className="font-serif text-5xl xl:text-6xl font-light text-[#c89b3c] tracking-tight leading-none mb-4 group-hover:text-[#dbad47] transition-colors">
                  {step.number}
                </div>

                {/* Step Title */}
                <h3 className="text-lg font-medium text-[#f8f9fa] tracking-tight mb-2 group-hover:text-white transition-colors">
                  {step.title}
                </h3>

                {/* Step Description */}
                <p className="text-[13px] text-[#9ea8b6] leading-relaxed max-w-[260px]">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile & Tablet Layout: Clean Vertical Timeline */}
        <div className="lg:hidden relative pl-8 sm:pl-10 space-y-10 sm:space-y-12 max-w-lg mx-auto">
          {/* Continuous vertical connecting line */}
          <div className="absolute top-4 bottom-4 left-[11px] sm:left-[13px] w-[1px] bg-[rgba(255,255,255,0.1)]" />

          {STEPS.map((step) => (
            <div key={step.number} className="relative group cursor-default">
              {/* Timeline Node sitting directly on the vertical line */}
              <div className="absolute -left-[27px] sm:-left-[31px] top-2 w-2.5 h-2.5 rounded-full bg-[#090b0f] border border-[#c89b3c]" />

              {/* Step Number */}
              <div className="font-serif text-4xl sm:text-5xl font-light text-[#c89b3c] tracking-tight leading-none mb-2.5">
                {step.number}
              </div>

              {/* Step Title */}
              <h3 className="text-base sm:text-lg font-medium text-[#f8f9fa] tracking-tight mb-1.5">
                {step.title}
              </h3>

              {/* Step Description */}
              <p className="text-xs sm:text-[13px] text-[#9ea8b6] leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Simple Reservation CTA */}
        <div className="mt-14 sm:mt-20 text-center">
          <button
            type="button"
            onClick={onStartBooking}
            className="inline-flex items-center justify-center gap-2 h-11 px-7 rounded-lg bg-[#c89b3c] hover:bg-[#dbad47] text-black text-xs sm:text-sm font-semibold tracking-normal transition-all duration-200 cursor-pointer shadow-[0_2px_12px_rgba(200,155,60,0.2)]"
          >
            <span>Start Your Reservation</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </Container>
    </section>
  );
};

export default ProcessSection;
