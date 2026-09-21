/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ReactNode } from "react";

export interface NavItem {
  label: string;
  href: string;
  isExternal?: boolean;
}

export type ButtonVariant = "primary" | "secondary" | "outline" | "ghost" | "gold";
export type ButtonSize = "sm" | "md" | "lg";

export type FleetCategory = "all" | "sedans" | "suvs" | "luxury";

export interface VehiclePlaceholder {
  id: string;
  brand: string;
  name: string;
  category: "Sedans" | "SUVs & 4×4" | "Luxury";
  segment: string;
  transmission: "Automatic" | "Manual";
  seats: number;
  luggage?: number;
  fuelType?: "Petrol" | "Diesel" | "Hybrid";
  rentalType: string;
  featuredImage: string;
  isPlaceholderData: boolean;
  ratePlaceholder: string;
  features?: string[];
}

export interface ServicePlaceholder {
  id: string;
  title: string;
  description: string;
  iconName: "Key" | "ShieldCheck" | "Clock" | "Plane" | "Briefcase" | "Compass";
  isPlaceholderData: boolean;
}

export interface ReviewItem {
  id: string;
  author: string;
  rating: number;
  reviewText: string;
  dateRelative: string;
  source: "Google Reviews";
  isVerifiedRating: boolean;
}

export interface SectionHeadingProps {
  kicker?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
  id?: string;
}

export interface BadgeProps {
  children: ReactNode;
  variant?: "default" | "gold" | "outline" | "verified";
  className?: string;
  id?: string;
}
