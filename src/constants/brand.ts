/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * Verified Brand Facts for 91rent a car
 * Only strictly verified business data is declared here.
 */
export const BRAND = {
  name: "91rent a car",
  legalCategory: "Car rental agency",
  rating: 5.0,
  reviewsCount: 33,
  phoneFormatted: "+92 313 7934003",
  phoneRaw: "+923137934003",
  address: "274, Block K, Johar Town, Lahore, 54782, Pakistan",
  area: "Johar Town",
  city: "Lahore",
  postalCode: "54782",
  country: "Pakistan",
  coordinates: {
    lat: 31.4697, // Johar Town, Lahore
    lng: 74.2728,
  },
  whatsappUrl: "https://wa.me/923137934003?text=Hello%2091rent%20a%20car%2C%20I%20would%20like%20to%20inquire%20about%20vehicle%20rental.",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=91rent+a+car+Johar+Town+Lahore",
  navItems: [
    { label: "Home", href: "#home" },
    { label: "Cars", href: "#cars" },
    { label: "Services", href: "#services" },
    { label: "About", href: "#about" },
    { label: "Reviews", href: "#reviews" },
    { label: "Contact", href: "#contact" },
  ],
} as const;
