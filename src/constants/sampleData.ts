/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { VehiclePlaceholder, ServicePlaceholder, FleetCategory } from "../types";

// Import unified studio-lit vehicle assets
import corollaImg from "../assets/images/toyota_corolla_white_1790018109604.jpg";
import civicImg from "../assets/images/honda_civic_black_1790018124532.jpg";
import fortunerImg from "../assets/images/toyota_fortuner_white_1790018140374.jpg";
import pradoImg from "../assets/images/toyota_prado_black_1790018158194.jpg";
import landCruiserImg from "../assets/images/toyota_land_cruiser_1790018175824.jpg";
import audiA6Img from "../assets/images/audi_a6_black_1790018192272.jpg";
import mercedesEClassImg from "../assets/images/mercedes_e_class_1790018209126.jpg";
import lexusLxImg from "../assets/images/lexus_lx_luxury_1790018230267.jpg";
import cityImg from "../assets/images/honda_city_white_1790018244067.jpg";
import sportageImg from "../assets/images/kia_sportage_black_1790018262841.jpg";

/**
 * Candidate Fleet Architecture for Pakistani / Lahore Market
 * Reflects familiar models searched by local and corporate clients.
 * Clear candidate placeholders until actual fleet inventory is confirmed by 91rent.
 */
export const SAMPLE_VEHICLES: VehiclePlaceholder[] = [
  {
    id: "toyota-corolla-grande",
    brand: "TOYOTA",
    name: "Corolla Grande",
    category: "Sedans",
    segment: "Executive Sedan",
    transmission: "Automatic",
    seats: 5,
    fuelType: "Petrol",
    rentalType: "With Driver or Self-Drive",
    ratePlaceholder: "Price on request",
    featuredImage: corollaImg,
    isPlaceholderData: true,
  },
  {
    id: "honda-civic",
    brand: "HONDA",
    name: "Civic",
    category: "Sedans",
    segment: "Executive Sedan",
    transmission: "Automatic",
    seats: 5,
    fuelType: "Petrol",
    rentalType: "With Driver or Self-Drive",
    ratePlaceholder: "Price on request",
    featuredImage: civicImg,
    isPlaceholderData: true,
  },
  {
    id: "toyota-fortuner",
    brand: "TOYOTA",
    name: "Fortuner",
    category: "SUVs & 4×4",
    segment: "Mid-Size 4×4 SUV",
    transmission: "Automatic",
    seats: 7,
    fuelType: "Diesel",
    rentalType: "With Driver or Self-Drive",
    ratePlaceholder: "Price on request",
    featuredImage: fortunerImg,
    isPlaceholderData: true,
  },
  {
    id: "toyota-prado",
    brand: "TOYOTA",
    name: "Prado",
    category: "SUVs & 4×4",
    segment: "Full-Size 4×4 SUV",
    transmission: "Automatic",
    seats: 7,
    fuelType: "Diesel",
    rentalType: "With Driver or Self-Drive",
    ratePlaceholder: "Price on request",
    featuredImage: pradoImg,
    isPlaceholderData: true,
  },
  {
    id: "toyota-land-cruiser",
    brand: "TOYOTA",
    name: "Land Cruiser",
    category: "SUVs & 4×4",
    segment: "Prestige 4×4",
    transmission: "Automatic",
    seats: 7,
    fuelType: "Diesel",
    rentalType: "With Driver or Self-Drive",
    ratePlaceholder: "Price on request",
    featuredImage: landCruiserImg,
    isPlaceholderData: true,
  },
  {
    id: "audi-a6",
    brand: "AUDI",
    name: "A6",
    category: "Luxury",
    segment: "Executive Luxury Saloon",
    transmission: "Automatic",
    seats: 5,
    fuelType: "Petrol",
    rentalType: "With Driver or Self-Drive",
    ratePlaceholder: "Price on request",
    featuredImage: audiA6Img,
    isPlaceholderData: true,
  },
  {
    id: "mercedes-benz-e-class",
    brand: "MERCEDES-BENZ",
    name: "E-Class",
    category: "Luxury",
    segment: "Prestige Executive Saloon",
    transmission: "Automatic",
    seats: 5,
    fuelType: "Petrol",
    rentalType: "With Driver or Self-Drive",
    ratePlaceholder: "Price on request",
    featuredImage: mercedesEClassImg,
    isPlaceholderData: true,
  },
  {
    id: "lexus-lx",
    brand: "LEXUS",
    name: "LX",
    category: "Luxury",
    segment: "Flagship Luxury 4×4",
    transmission: "Automatic",
    seats: 7,
    fuelType: "Petrol",
    rentalType: "With Driver or Self-Drive",
    ratePlaceholder: "Price on request",
    featuredImage: lexusLxImg,
    isPlaceholderData: true,
  },
  {
    id: "honda-city",
    brand: "HONDA",
    name: "City",
    category: "Sedans",
    segment: "Compact Sedan",
    transmission: "Automatic",
    seats: 5,
    fuelType: "Petrol",
    rentalType: "With Driver or Self-Drive",
    ratePlaceholder: "Price on request",
    featuredImage: cityImg,
    isPlaceholderData: true,
  },
  {
    id: "kia-sportage",
    brand: "KIA",
    name: "Sportage",
    category: "SUVs & 4×4",
    segment: "Urban Crossover SUV",
    transmission: "Automatic",
    seats: 5,
    fuelType: "Petrol",
    rentalType: "With Driver or Self-Drive",
    ratePlaceholder: "Price on request",
    featuredImage: sportageImg,
    isPlaceholderData: true,
  },
];

/**
 * Service Outlines for Lahore Market
 */
export const SAMPLE_SERVICES: ServicePlaceholder[] = [
  {
    id: "service-chauffeur",
    title: "Chauffeur Driven Rental",
    description:
      "Vehicles provided with a driver for city travel, corporate itineraries, and long-distance journeys across Punjab.",
    iconName: "Briefcase",
    isPlaceholderData: true,
  },
  {
    id: "service-selfdrive",
    title: "Self-Drive Rental",
    description:
      "Independent rental options subject to standard document verification and security terms.",
    iconName: "Key",
    isPlaceholderData: true,
  },
  {
    id: "service-airport",
    title: "Airport Transfers",
    description:
      "Scheduled pick-up and drop-off services for Allama Iqbal International Airport (LHE), Lahore.",
    iconName: "Plane",
    isPlaceholderData: true,
  },
  {
    id: "service-corporate",
    title: "Corporate & Business Hire",
    description:
      "Arrangements tailored for executive mobility, visiting business associates, and project requirements.",
    iconName: "ShieldCheck",
    isPlaceholderData: true,
  },
  {
    id: "service-longterm",
    title: "Long-Term & Monthly Rentals",
    description:
      "Extended duration arrangements for individuals and companies requiring vehicles on weekly or monthly terms.",
    iconName: "Clock",
    isPlaceholderData: true,
  },
  {
    id: "service-events",
    title: "Events & Outstation Travel",
    description:
      "Transportation for family functions, wedding parties, and intercity trips starting from Lahore.",
    iconName: "Compass",
    isPlaceholderData: true,
  },
];

/**
 * 4-Step Rental Process Experience
 */
export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export const RENTAL_PROCESS_STEPS: ProcessStep[] = [
  {
    number: "01",
    title: "Choose Your Car",
    description:
      "Select a vehicle category from our fleet or contact us for specific model availability.",
  },
  {
    number: "02",
    title: "Send Your Request",
    description:
      "Specify your rental dates, service preference (with driver or self-drive), and destination.",
  },
  {
    number: "03",
    title: "Confirm Your Rental",
    description:
      "Discuss terms, rates, and verification requirements directly via WhatsApp or phone call.",
  },
  {
    number: "04",
    title: "Collect / Receive Your Vehicle",
    description:
      "Pick up your car at our Johar Town office or coordinate an agreed pick-up location in Lahore.",
  },
];
