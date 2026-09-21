/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef, useEffect, useCallback } from "react";
import {
  ChevronLeft,
  ChevronRight,
  ArrowUpRight,
  MessageSquare,
  Briefcase,
  Key,
  Plane,
  ShieldCheck,
  Clock,
  Compass,
} from "lucide-react";
import { SAMPLE_SERVICES } from "../../constants/sampleData";
import { BRAND } from "../../constants/brand";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";

interface ServicesSectionProps {
  onServiceSelect: (serviceTitle: string) => void;
}

const ICON_MAP = {
  Briefcase,
  Key,
  Plane,
  ShieldCheck,
  Clock,
  Compass,
};

// Key verified highlights for each mobility service in Lahore
const SERVICE_HIGHLIGHTS: Record<string, string[]> = {
  "service-chauffeur": [
    "Experienced professional chauffeurs familiar with Lahore routes",
    "Available for full-day city travel and intercity journeys across Punjab",
    "Fuel and driver allowance terms coordinated on request",
  ],
  "service-selfdrive": [
    "Independent rental for local residents and visiting guests",
    "Standard CNIC / Passport and valid driver's licence verification",
    "Flexible daily, multi-day, or scheduled arrangements",
  ],
  "service-airport": [
    "Direct transfers to and from Allama Iqbal International Airport (LHE)",
    "Punctual pick-up tailored to commercial flight schedules",
    "Spacious luggage accommodation for domestic and overseas travelers",
  ],
  "service-corporate": [
    "Executive transport for business meetings, conferences, and visiting delegations",
    "Reliable corporate accounts and customized invoicing available",
    "Discreet, premium vehicle presentation",
  ],
  "service-longterm": [
    "Cost-effective weekly and monthly rental plans",
    "Priority maintenance support and vehicle replacement options",
    "Ideal for expatriates, ongoing corporate projects, or extended stays",
  ],
  "service-events": [
    "Coordinated transportation for weddings, family ceremonies, and VIP guests",
    "Multi-vehicle convoy arrangements available on advance booking",
    "Outstation travel covering Islamabad, Faisalabad, Sialkot, and beyond",
  ],
};

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onServiceSelect }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const isMouseDownRef = useRef(false);
  const startXRef = useRef(0);
  const scrollLeftRef = useRef(0);
  const hasMovedRef = useRef(false);

  const totalServices = SAMPLE_SERVICES.length;

  // Track active slide based on scroll position
  const handleScroll = useCallback(() => {
    const container = carouselRef.current;
    if (!container) return;

    const scrollPos = container.scrollLeft;
    const cardElements = Array.from(container.children) as HTMLElement[];
    if (cardElements.length === 0) return;

    let nearestIndex = 0;
    let minDiff = Infinity;
    const centerOffset = scrollPos + container.clientWidth / 2;

    cardElements.forEach((el, idx) => {
      const elCenter = el.offsetLeft + el.clientWidth / 2;
      const diff = Math.abs(centerOffset - elCenter);
      if (diff < minDiff) {
        minDiff = diff;
        nearestIndex = idx;
      }
    });

    setActiveIndex(nearestIndex);
  }, []);

  useEffect(() => {
    const container = carouselRef.current;
    if (!container) return;

    container.addEventListener("scroll", handleScroll, { passive: true });
    return () => container.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // Navigate to specific slide
  const scrollToSlide = (index: number) => {
    const container = carouselRef.current;
    if (!container) return;

    const boundedIndex = Math.max(0, Math.min(index, totalServices - 1));
    const cardElements = Array.from(container.children) as HTMLElement[];
    const targetElement = cardElements[boundedIndex];

    if (targetElement) {
      // Calculate position so card aligns neatly
      const targetScroll =
        targetElement.offsetLeft - (container.clientWidth - targetElement.clientWidth) / 2;

      container.scrollTo({
        left: Math.max(0, targetScroll),
        behavior: "smooth",
      });
      setActiveIndex(boundedIndex);
    }
  };

  const handlePrev = () => {
    if (activeIndex > 0) {
      scrollToSlide(activeIndex - 1);
    }
  };

  const handleNext = () => {
    if (activeIndex < totalServices - 1) {
      scrollToSlide(activeIndex + 1);
    }
  };

  // Mouse drag handlers for desktop
  const handleMouseDown = (e: React.MouseEvent) => {
    const container = carouselRef.current;
    if (!container) return;

    isMouseDownRef.current = true;
    hasMovedRef.current = false;
    startXRef.current = e.pageX - container.offsetLeft;
    scrollLeftRef.current = container.scrollLeft;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isMouseDownRef.current) return;
    const container = carouselRef.current;
    if (!container) return;

    e.preventDefault();
    const x = e.pageX - container.offsetLeft;
    const walk = (x - startXRef.current) * 1.3;
    if (Math.abs(walk) > 4) {
      hasMovedRef.current = true;
    }
    container.scrollLeft = scrollLeftRef.current - walk;
  };

  const handleMouseUp = () => {
    isMouseDownRef.current = false;
  };

  const handleMouseLeave = () => {
    isMouseDownRef.current = false;
  };

  return (
    <section
      id="services"
      className="py-16 sm:py-24 border-b border-[rgba(255,255,255,0.06)] bg-[#0b0e14] relative overflow-hidden"
    >
      <Container size="default">
        {/* Section Heading & Desktop Carousel Controls */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-12 gap-6">
          <SectionHeading
            kicker="Rental Services"
            title="Mobility Services in Lahore"
            description="Explore our range of car rental services based in Johar Town, tailored for personal travel, airport transfers, corporate transport, and special events."
          />

          {/* Desktop Arrow Controls */}
          <div className="hidden sm:flex items-center gap-2.5 shrink-0 self-end sm:self-auto">
            <button
              type="button"
              onClick={handlePrev}
              disabled={activeIndex === 0}
              aria-label="Previous service"
              className={`w-10 h-10 rounded-lg flex items-center justify-center border transition-all cursor-pointer ${
                activeIndex === 0
                  ? "border-[rgba(255,255,255,0.05)] text-[#485366] cursor-not-allowed bg-[#0e121a]"
                  : "border-[rgba(255,255,255,0.12)] text-[#f8f9fa] hover:text-[#c89b3c] hover:border-[rgba(200,155,60,0.3)] bg-[#121620] hover:bg-[#181e2a]"
              }`}
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <button
              type="button"
              onClick={handleNext}
              disabled={activeIndex === totalServices - 1}
              aria-label="Next service"
              className={`w-10 h-10 rounded-lg flex items-center justify-center border transition-all cursor-pointer ${
                activeIndex === totalServices - 1
                  ? "border-[rgba(255,255,255,0.05)] text-[#485366] cursor-not-allowed bg-[#0e121a]"
                  : "border-[rgba(255,255,255,0.12)] text-[#f8f9fa] hover:text-[#c89b3c] hover:border-[rgba(200,155,60,0.3)] bg-[#121620] hover:bg-[#181e2a]"
              }`}
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Carousel Viewport Container */}
        <div className="relative -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8">
          <div
            ref={carouselRef}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
            className="flex gap-4 sm:gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-4 pt-1 cursor-grab active:cursor-grabbing [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
            style={{ WebkitOverflowScrolling: "touch" }}
          >
            {SAMPLE_SERVICES.map((service, index) => {
              const IconComp = ICON_MAP[service.iconName as keyof typeof ICON_MAP] || Key;
              const isActive = activeIndex === index;
              const highlights = SERVICE_HIGHLIGHTS[service.id] || [];
              const formattedIndex = String(index + 1).padStart(2, "0");
              const totalFormatted = String(totalServices).padStart(2, "0");

              return (
                <div
                  key={service.id}
                  className="w-[86%] sm:w-[78%] md:w-[72%] lg:w-[64%] xl:w-[58%] shrink-0 snap-center select-none"
                >
                  <article
                    className={`h-full min-h-[380px] sm:min-h-[400px] rounded-2xl p-6 sm:p-8 md:p-10 flex flex-col justify-between transition-all duration-300 border ${
                      isActive
                        ? "bg-[#131722] border-[rgba(200,155,60,0.35)] shadow-[0_16px_40px_rgba(0,0,0,0.4)]"
                        : "bg-[#10141d] border-[rgba(255,255,255,0.07)] opacity-85 hover:opacity-100 hover:border-[rgba(255,255,255,0.12)]"
                    }`}
                  >
                    {/* Top Meta Bar */}
                    <div>
                      <div className="flex items-center justify-between gap-4 pb-5 border-b border-[rgba(255,255,255,0.06)]">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-xl bg-[#181f2c] border border-[rgba(255,255,255,0.08)] text-[#c89b3c] flex items-center justify-center shrink-0">
                            <IconComp className="w-5 h-5" />
                          </div>
                          <div>
                            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#c89b3c] block">
                              Service {formattedIndex}
                            </span>
                            <span className="text-xs text-[#8a94a6]">91rent a car • Johar Town</span>
                          </div>
                        </div>

                        <div className="text-right font-mono text-xs text-[#647082]">
                          <span className="text-[#f8f9fa] font-semibold">{formattedIndex}</span>
                          <span className="mx-1 text-[#414856]">/</span>
                          <span>{totalFormatted}</span>
                        </div>
                      </div>

                      {/* Main Service Info */}
                      <div className="mt-6 space-y-3">
                        <h3 className="text-2xl sm:text-3xl font-serif text-[#f8f9fa] tracking-tight">
                          {service.title}
                        </h3>
                        <p className="text-sm sm:text-[15px] text-[#9ea8b6] leading-relaxed max-w-2xl">
                          {service.description}
                        </p>
                      </div>

                      {/* Service Highlights / Practical Notes */}
                      {highlights.length > 0 && (
                        <div className="mt-6 pt-5 border-t border-[rgba(255,255,255,0.05)] space-y-2.5">
                          {highlights.map((item, hIdx) => (
                            <div
                              key={hIdx}
                              className="flex items-start gap-2.5 text-xs sm:text-[13px] text-[#8a94a6] leading-snug"
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-[#c89b3c] mt-1.5 shrink-0" />
                              <span>{item}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Bottom Actions Bar */}
                    <div className="pt-6 mt-6 sm:mt-8 border-t border-[rgba(255,255,255,0.06)] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                      <button
                        type="button"
                        onClick={() => onServiceSelect(service.title)}
                        className="h-10 px-5 rounded-lg bg-[#c89b3c] hover:bg-[#dbad47] text-black text-xs font-semibold tracking-normal transition-all flex items-center justify-center gap-2 cursor-pointer shadow-[0_2px_12px_rgba(200,155,60,0.2)]"
                      >
                        <span>Inquire This Service</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </button>

                      <a
                        href={BRAND.whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 text-xs font-medium text-[#9ea8b6] hover:text-[#f8f9fa] py-2 sm:py-0 transition-colors"
                      >
                        <MessageSquare className="w-3.5 h-3.5 text-[#25D366]" />
                        <span>Discuss Terms on WhatsApp</span>
                      </a>
                    </div>
                  </article>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Pagination & Progress Controls */}
        <div className="mt-8 flex items-center justify-between pt-2">
          {/* Mobile Arrow Navigation */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              type="button"
              onClick={handlePrev}
              disabled={activeIndex === 0}
              aria-label="Previous service"
              className={`w-9 h-9 rounded-lg flex items-center justify-center border transition-all ${
                activeIndex === 0
                  ? "border-[rgba(255,255,255,0.05)] text-[#485366] bg-[#0e121a]"
                  : "border-[rgba(255,255,255,0.12)] text-[#f8f9fa] bg-[#121620]"
              }`}
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <button
              type="button"
              onClick={handleNext}
              disabled={activeIndex === totalServices - 1}
              aria-label="Next service"
              className={`w-9 h-9 rounded-lg flex items-center justify-center border transition-all ${
                activeIndex === totalServices - 1
                  ? "border-[rgba(255,255,255,0.05)] text-[#485366] bg-[#0e121a]"
                  : "border-[rgba(255,255,255,0.12)] text-[#f8f9fa] bg-[#121620]"
              }`}
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Minimal Indicators / Progress Bars */}
          <div className="flex items-center gap-2 mx-auto sm:mx-0">
            {SAMPLE_SERVICES.map((_, idx) => {
              const isActive = activeIndex === idx;
              return (
                <button
                  key={idx}
                  type="button"
                  onClick={() => scrollToSlide(idx)}
                  aria-label={`Go to service ${idx + 1}`}
                  className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                    isActive
                      ? "w-8 bg-[#c89b3c]"
                      : "w-2 bg-[rgba(255,255,255,0.15)] hover:bg-[rgba(255,255,255,0.3)]"
                  }`}
                />
              );
            })}
          </div>

          {/* Swipe / Drag Hint */}
          <div className="hidden sm:block text-right">
            <span className="text-[11px] text-[#647082] tracking-wider uppercase">
              Drag or swipe to browse services
            </span>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ServicesSection;
