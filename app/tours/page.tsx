"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const tours = [
  {
    title: "Kandy City Tour",
    description:
      "Explore the heart of Kandy with our curated city tour covering key cultural and historical attractions.",
    features: [
      "Temple of the Tooth",
      "Kandy Lake",
      "Royal Botanical Gardens",
      "Kandy View Point",
      "Bahirawakanda Temple",
      "Gem Museum",
      "Cultural Dance Show",
      "Local Markets",
      "Tea Museum",
    ],
    image:
      "/bg.jpg",
  },
  {
    title: "Airport Pickup & Drop",
    description:
      "Reliable airport transfer services to and from Colombo Airport with professional drivers.",
    features: [
      "AC vehicles",
      "On-time service",
      "Friendly drivers",
      "Direct route to Sunset Forest Villa",
    ],
    image:
      "/bg.jpg",
  },
  {
    title: "Vehicle with Driver",
    description:
      "Hire our well-maintained vehicles with experienced drivers for day trips, long routes, or personal use.",
    features: [
      "Comfortable cars & vans",
      "Knowledgeable local drivers",
      "Flexible scheduling",
    ],
    image:
      "/bg.jpg",
  },
  {
    title: "Bike Rentals",
    description:
      "Enjoy the surrounding landscapes and Kandy city at your own pace with our bike rental services.",
    features: [
      "Mountain bikes available",
      "Safety gear included",
      "Affordable hourly/daily rates",
    ],
    image:
      "/bg.jpg",
  },
];

export default function TravelsAndTours() {
  return (
    <>
      {/* Hero Section */}
      <section
        className="relative h-[85vh] bg-fixed bg-center bg-cover flex items-center justify-center"
        style={{
          backgroundImage: "url('/bg.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
        <motion.div
          className="relative z-10 px-6 text-center max-w-4xl"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          <h1 className="text-white text-5xl md:text-7xl font-extrabold drop-shadow-lg font-serif pt-24">
            Travels & Tours
          </h1>
          <p className="mt-6 text-lg md:text-xl font-light text-white/90 max-w-3xl mx-auto">
            Explore Sri Lanka with ease — from cultural city tours to airport
            pickups and bike rentals, we’ve got you covered.
          </p>
        </motion.div>
      </section>

      {/* Content Section */}
      <section className="bg-[#FCF8F3] py-24 px-6 sm:px-12 lg:px-32">
        <motion.div
          className="text-center max-w-4xl mx-auto mb-20"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          <h2 className="text-4xl font-bold text-[#4B2E1D] mb-4">
            Our Services
          </h2>
          <p className="text-lg md:text-xl text-[#5C4433]">
            Comfort, convenience, and curated experiences await every guest.
          </p>
        </motion.div>

        <div className="grid gap-16 md:grid-cols-2">
          {tours.map((tour, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-3xl shadow-xl overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <Image
                src={tour.image}
                alt={tour.title}
                width={800}
                height={500}
                className="object-cover w-full h-64"
              />
              <div className="p-8">
                <h3 className="text-3xl font-semibold text-[#4B2E1D] mb-4">
                  {tour.title}
                </h3>
                <p className="text-[#5C4433] mb-4">{tour.description}</p>
                <ul className="list-disc list-inside space-y-2 text-[#5C4433]">
                  {tour.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}
