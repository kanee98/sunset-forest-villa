"use client";

import Image from "next/image";
import {
  BedDouble,
  Tv,
  Utensils,
  Mountain,
  Wifi,
  Sparkles,
  ShieldCheck,
  MapPin,
} from "lucide-react";

const rooms = [
  {
    title: "Forest View Suite",
    price: "Rs. 6,500",
    img: "/rooms/V1R1/1.webp",
    description: "Wake up to serene views of the lush forest.",
  },
  {
    title: "Skyline Deluxe",
    price: "Rs. 5,000",
    img: "/rooms/V1R2/1.webp",
    description: "Unwind under a starry Kandyan sky.",
  },
  {
    title: "Eco Bungalow",
    price: "Rs. 15,000",
    img: "/rooms/V2R1/1.webp",
    description: "Sustainable comfort surrounded by nature.",
  },
];

const amenities = [
  { icon: BedDouble, label: "Fully Furnished Villa" },
  { icon: Tv, label: "Living Area with Smart TV" },
  { icon: Utensils, label: "Well-Equipped Kitchen" },
  { icon: Mountain, label: "Private Balcony with Forest View" },
  { icon: Wifi, label: "High-Speed Wi-Fi" },
  { icon: Sparkles, label: "Optional Cleaning Service" },
  { icon: ShieldCheck, label: "Safe & Peaceful Neighborhood" },
  { icon: MapPin, label: "Close to Kandy City (2km)" },
];

export default function RoomShowcase() {
  return (
    <>
    <section className="bg-[#0f172a] px-6 sm:px-12 lg:px-32">
      <section id="rooms" className="relative py-24 px-6 max-w-7xl mx-auto z-10">
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-center text-white mb-12 tracking-wide">
          Our Signature Rooms
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 relative z-10">
          {rooms.map((room, i) => (
            <div
              key={i}
              className="bg-white/10 backdrop-blur-md text-white rounded-2xl overflow-hidden shadow-2xl hover:scale-[1.03] transition duration-300"
            >
              <div className="relative h-60 w-full">
                <Image
                  src={room.img}
                  alt={room.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">{room.title}</h3>
                <p className="text-sm text-gray-300 mb-3">{room.description}</p>
                <div className="text-right">
                  <span className="text-lg font-bold">{room.price}</span>
                  <span className="text-sm text-gray-400 ml-1">/ night</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* What We Offer Section */}
      <section className="pb-24 px-6 sm:px-12 lg:px-32">
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-center text-white mb-12 tracking-wide">
          What We Offer
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {amenities.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-4 bg-white border border-[#e3d9c8] shadow-sm rounded-xl p-4"
            >
              <item.icon className="text-[#B8860B] w-6 h-6 shrink-0" />
              <span className="text-[#4B2E1D] font-medium">{item.label}</span>
            </div>
          ))}
        </div>
      </section>
    </section>
    </>
  );
}
