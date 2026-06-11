import type { MenuItem, Testimonial, OpeningHour, stats } from "../types";

export const menuItems: MenuItem[] = [
  {
    id: 1,
    name: "Classic Espresso",
    description: "Rich and bold espresso shot.",
    price: 120,
    category: "espresso",
    isPopular: true,
  },
  {
    id: 2,
    name: "Cappuccino",
    description: "Essepresso with steamed milk and foam.",
    price: 180,
    category: "espresso",
    isPopular: true,
  },
  {
    id: 3,
    name: "Vanilla Latte",
    description: "Smooth latte infused with vanilla flavor.",
    price: 220,
    category: "cold",
  },
  {
    id: 4,
    name: "Iced Americano",
    description: "Refreshing espresso with chilled water.",
    price: 170,
    category: "cold",
    isPopular: true,
  },
  {
    id: 5,
    name: "Cold Brew",
    description: "Slow-steeped coffee served over ice.",
    price: 250,
    category: "cold",
  },
  {
    id: 6,
    name: "Caramel Frappe",
    description: "Blended coffee with caremel drizzle.",
    price: 280,
    category: "cold",
  },
  {
    id: 7,
    name: "Ethiopion Pour Over",
    description: "Bright and fruity specially coffee",
    price: 300,
    category: "pourover",
  },
  {
    id: 8,
    name: "Colombian Pour Over",
    description: "Balanced flavor with chocolate notes.",
    price: 290,
    category: "pourover",
    isPopular: true,
  },
  {
    id: 9,
    name: "Pumpkin Spice Latte",
    description: "Seasonal favorite with warm spices.",
    price: 260,
    category: "seasonal",
  },
  {
    id: 10,
    name: "Peppermint Mocha",
    description: "Chocolate and peppermint holiday blend.",
    price: 270,
    category: "seasonal",
    isPopular: true,
  },
];

export const testiomonils: Testimonial[] = [
  {
    id: 1,
    name: "priya Sharma",
    initials: "PS",
    text: "The best coffee shop in town! The cold brew is absolutely amazing.",
    rating: 5,
  },
  {
    id: 2,
    name: "Rahul Patel",
    initials: "RP",
    text: "Excellent atmosphere and friendly staff. Highly recommended.",
    rating: 5,
  },
  {
    id: 3,
    name: "Anjali Mehta",
    initials: "AM",
    text: "Loved the cappuccino and cozy seating area.",
    rating: 4,
  },
  {
    id: 4,
    name: "Vikram Shah",
    initials: "VS",
    text: "Perfect place to work and enjoy premium coffee.",
    rating: 5,
  },
];

export const openingHours: OpeningHour[] = [
  {
    day: "Monday",
    hours: "8:00 AM - 9:00 PM",
  },
  {
    day: "Tuesday",
    hours: "8:00 AM - 9:00 PM",
  },
  {
    day: "Wednesday",
    hours: "8:00 AM - 9:00 PM",
  },
  {
    day: "Thursday",
    hours: "8:00 AM - 9:00 PM",
  },
  {
    day: "Friday",
    hours: "8:00 AM - 10:00 PM",
  },
  {
    day: "Saturday",
    hours: "9:00 AM - 10:00 PM",
  },
  {
    day: "Sunday",
    hours: "9:00 AM - 8:00 PM",
  },
];

export const state: stats[] = [
  {
    Number: 12,
    label: "Brewing methods",
  },
  {
    Number: 6,
    label: "Origins sourced",
  },
  {
    Number: 4.9,
    label: "Average rating",
  },
  {
    Number: 2000,
    label: "Happy regulars",
  },
];

export const amenities: string[] = [
  "Free Wi-Fi",
  "Outdoor seating",
  "Vegan options",
  "Takeaway",
];
