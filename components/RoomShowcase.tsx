"use client";

import Image from "next/image";

const rooms = [
  {
    title: "Forest View Suite",
    price: "$199",
    img: "/room1.jpg",
    description: "Wake up to serene views of the lush forest.",
  },
  {
    title: "Skyline Deluxe",
    price: "$249",
    img: "/room2.jpg",
    description: "Unwind under a starry Kandyan sky.",
  },
  {
    title: "Eco Bungalow",
    price: "$179",
    img: "/room3.jpg",
    description: "Sustainable comfort surrounded by nature.",
  },
];

export default function RoomShowcase() {
  return (
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
  );
}
