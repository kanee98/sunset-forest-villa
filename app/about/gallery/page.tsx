"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

// Dynamically import lightGallery to prevent SSR issues
const LightGallery = dynamic(() => import("lightgallery/react"), { ssr: false });

const galleryItems = [
  { src: "/rooms/V1R1/1.webp", alt: "Villa 1 Room 1", category: "Rooms" },
  { src: "/rooms/V1R1/2.webp", alt: "Villa 1 Room 1", category: "Rooms" },
  { src: "/rooms/V1R1/3.webp", alt: "Villa 1 Room 1", category: "Rooms" },
  { src: "/rooms/V1R1/4.webp", alt: "Villa 1 Room 1", category: "Rooms" },
  { src: "/rooms/V1R1/5.webp", alt: "Villa 1 Room 1", category: "Rooms" },
  { src: "/rooms/V1R1/6.webp", alt: "Villa 1 Room 1", category: "Rooms" },
  { src: "/rooms/V1R1/7.webp", alt: "Villa 1 Room 1", category: "Rooms" },
  { src: "/rooms/V1R1/8.webp", alt: "Villa 1 Room 1", category: "Rooms" },
  { src: "/rooms/V1R1/9.webp", alt: "Villa 1 Room 1", category: "Rooms" },
  { src: "/gallery/guest8.jpeg", alt: "Dining", category: "Dining" },
  { src: "/gallery/guest10.jpeg", alt: "Dining", category: "Dining" },
  { src: "/gallery/guest11.jpeg", alt: "Dining", category: "Dining" },
];

const categories = ["All", "Rooms", "Nature", "Dining"];

export default function GalleryPage() {
  const [filter, setFilter] = useState("All");

  const filteredItems =
    filter === "All" ? galleryItems : galleryItems.filter((item) => item.category === filter);

  return (
    <>
    {/* Hero Section */}
    <section
      className="relative h-[85vh] bg-fixed bg-center bg-cover flex items-center justify-center"
      style={{ backgroundImage: "url('/bg.jpg')" }}
    >
    <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
      <motion.div
        className="relative z-10 px-6 text-center max-w-4xl"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
      >
        <h1 className="text-white text-5xl md:text-7xl font-extrabold drop-shadow-lg font-serif pt-24">
          Explore the Gallery
        </h1>
        <p className="mt-6 text-lg md:text-xl font-light text-white/90 max-w-3xl mx-auto">
          Discover the serene beauty, modern architecture, and lush surroundings of Sunset Forest Villa through our curated photo collection.
        </p>
      </motion.div>
    </section>
    <div className="min-h-screen bg-cover bg-center bg-no-repeat p-8 relative bg-[#0f172a] ">
      <div className="absolute inset-0 bg-black/30 z-0" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 backdrop-blur-md bg-white/10 border border-white/30 rounded-xl p-6 shadow-xl"
      >
        <div className="flex justify-center flex-wrap gap-4 mb-6">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 text-sm font-medium rounded-full transition ${
                filter === cat
                  ? "bg-white text-black"
                  : "bg-white/20 text-white hover:bg-white/30"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 xl:grid-cols-9 gap-4">
  <LightGallery
    speed={500}
    plugins={[]}
    elementClassNames="contents" // avoid nested grid inside grid
  >
    {filteredItems.map((item, index) => (
      <a
        key={index}
        href={item.src}
        data-lg-size="1600-1067"
        className="overflow-hidden rounded-lg shadow-lg group"
      >
        <motion.img
          src={item.src}
          alt={item.alt}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          className="w-full h-32 object-cover" // Reduced height to fit more on one row
        />
      </a>
    ))}
  </LightGallery>
</div>

      </motion.div>
    </div>
    </>
  );
}