"use client";

import { motion } from "framer-motion";

export default function PackagesPage() {
  return (
    <>
    <section className="bg-[#FCF8F3]">
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
            Our Packages
          </h1>
          <p className="mt-6 text-lg md:text-xl font-light text-white/90 max-w-3xl mx-auto">
            Explore curated experiences tailored for couples, families, and day-trippers at Sunset Forest Villa.
          </p>
        </motion.div>
      </section>

      {/* Packages Section */}
      <section className="bg-[#FCF8F3] py-24 px-6 sm:px-12 lg:px-32 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-3xl shadow-xl overflow-hidden hover:scale-[1.02] transition-transform"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <img
                src={pkg.image}
                alt={pkg.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-6 space-y-4">
                <h3 className="text-2xl font-bold text-[#4B2E1D]">{pkg.title}</h3>
                <p className="text-[#5C4433] text-base leading-relaxed">
                  {pkg.description}
                </p>
                <ul className="list-disc list-inside text-sm text-[#4B2E1D]">
                  {pkg.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </section>
    </>
  );
}

const packages = [
  {
    title: "Couple's Romantic Escape",
    image: "/packages/couple.jpg",
    description:
      "Enjoy a serene getaway with your loved one, featuring candlelight dinners, scenic walks, and private villa amenities.",
    features: ["1 Night Stay", "Candlelight Dinner", "Complimentary Breakfast", "Nature Walk"],
  },
  {
    title: "Family Adventure Package",
    image: "/packages/family.jpg",
    description:
      "Fun for all ages! This package includes a cozy villa stay, games for the kids, and excursions for the entire family.",
    features: ["2 Night Stay", "Family Room", "Kids Play Area", "Day Excursion"],
  },
  {
    title: "Day Out Retreat",
    image: "/packages/dayout.jpg",
    description:
      "Spend the day relaxing in nature with access to all villa facilities, a hearty lunch, and tea by the sunset.",
    features: ["Villa Access (9AM - 6PM)", "Lunch & Evening Tea", "Forest View Deck", "Optional BBQ"],
  },
  {
    title: "Wellness Rejuvenation",
    image: "/packages/wellness.jpg",
    description:
      "A perfect escape to recharge your mind and body with nature therapy, yoga, and organic meals.",
    features: ["Guided Yoga Sessions", "Organic Meals", "Nature Trails", "1 Night Stay"],
  },
  {
    title: "Photography Escape",
    image: "/packages/photography.jpg",
    description:
      "Capture the untouched beauty of Sunset Forest Villa, ideal for photographers and creatives.",
    features: ["Guided Location Tour", "Early Morning Access", "Editing Workspace", "Tea & Snacks"],
  },
  {
    title: "Corporate Day Package",
    image: "/packages/corporate.jpg",
    description:
      "Ideal for team-building or business meetings in a peaceful natural setting.",
    features: ["Conference Setup", "Lunch & Tea", "Team Activities", "Forest Walk"],
  },
];
