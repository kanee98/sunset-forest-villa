"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const testimonialImages = [
  "/gallery/guest4.jpeg",
  "/gallery/guest5.jpeg",
  "/gallery/guest6.jpeg",
  "/gallery/guest7.jpeg",
  "/gallery/guest8.jpeg",
  "/gallery/guest9.jpeg",
  "/gallery/guest10.jpeg",
  "/gallery/guest11.jpeg",
];

const testimonials = [
  {
    name: "Emily R.",
    message: "Truly a hidden gem. The peaceful surroundings and beautiful villa made our honeymoon unforgettable.",
    image: "/gallery/guest1.jpeg",
  },
  {
    name: "Sabrina M.",
    message: "Amazing hospitality. The owner went above and beyond to make us feel welcome.",
    image: "/gallery/guest2.jpeg",
  },
  {
    name: "Aisha T.",
    message: "Perfect getaway from city life. We’ll be back for sure!",
    image: "/gallery/guest3.jpeg",
  },
];

export default function TestimonialsPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

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
              Guest Testimonials
            </h1>
            <p className="mt-6 text-lg md:text-xl font-light text-white/90 max-w-3xl mx-auto">
              Real stories from our valued guests who found peace, luxury, and warmth at Sunset Forest Villa.
            </p>
          </motion.div>
        </section>

        {/* Testimonials */}
        <section className="bg-[#FCF8F3] py-24 px-6 sm:px-12 lg:px-32 space-y-32 max-w-[1400px] mx-auto">
          <section className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-xl"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={80}
                  height={80}
                  className="rounded-full mx-auto mb-4"
                />
                <p className="text-[#4B2E1D] italic mb-3">"{testimonial.message}"</p>
                <p className="text-[#B8860B] font-bold">{testimonial.name}</p>
              </motion.div>
            ))}
          </section>

          {/* Why Guests Love Us */}
          <section className="max-w-4xl mx-auto bg-white rounded-3xl p-14 shadow-xl text-[#4B2E1D] space-y-6">
            <h2 className="text-4xl font-bold border-b-4 border-[#B8860B] inline-block pb-1 mb-6">
              Why Guests Love Us
            </h2>
            <ul className="list-disc list-inside text-lg space-y-3">
              <li>Peaceful Forest Surroundings and Mountain Views</li>
              <li>Genuine Hospitality & Personalized Experiences</li>
              <li>Perfect for Romantic Getaways and Family Retreats</li>
              <li>Modern Comfort Blended with Kandyan Heritage</li>
              <li>Owner-Operated Villa with Personalized Care</li>
            </ul>
          </section>

          {/* Visual Memories (Gallery) */}
          <section>
            <h2 className="text-4xl font-bold text-[#4B2E1D] mb-14 border-b-4 border-[#B8860B] pb-2 text-center">
              Visual Memories from Our Guests
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {testimonialImages.map((src) => (
                <motion.div
                  key={src}
                  className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer hover:scale-105 transition-transform duration-300"
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  onClick={() => setSelectedImage(src)}
                >
                  <Image
                    src={src}
                    alt="Guest memory"
                    width={400}
                    height={300}
                    className="object-cover w-full h-full"
                    loading="lazy"
                  />
                </motion.div>
              ))}
            </div>

            {/* Fullscreen Image Modal */}
            <AnimatePresence>
              {selectedImage && (
                <motion.div
                  className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={() => setSelectedImage(null)}
                >
                  <motion.div
                    className="relative max-w-5xl w-full"
                    initial={{ scale: 0.9 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0.9 }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Image
                      src={selectedImage}
                      alt="Guest photo"
                      width={1200}
                      height={800}
                      className="rounded-xl w-full h-auto object-contain"
                    />
                    <button
                      onClick={() => setSelectedImage(null)}
                      className="absolute top-3 right-3 text-white bg-black/70 p-2 rounded-full hover:bg-black"
                    >
                      ✕
                    </button>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </section>
        </section>
      </section>
    </>
  );
}
