"use client";

import React from "react";
import { MapPin } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Location() {
  return (
    <section className="relative z-20 py-24 bg-[#0a192f] text-white overflow-hidden">
      {/* Elegant Decorative Gradients */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div
          className="absolute top-0 left-0 w-1/2 h-full"
          style={{
            background: "radial-gradient(circle at top left, rgba(255,215,0,0.08), transparent 70%)",
          }}
        />
        <div
          className="absolute bottom-0 right-0 w-2/3 h-full"
          style={{
            background: "radial-gradient(circle at bottom right, rgba(255,215,0,0.05), transparent 80%)",
          }}
        />
      </div>

      {/* Decorative Temple of Tooth Relic image */}
      <div className="absolute inset-0 flex justify-center items-center opacity-10 z-0">
        <Image
            src="/temple.png"
            alt="Temple"
            fill
            quality={100}
            className="object-cover pointer-events-none"
            priority
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-6 max-w-6xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-serif font-extrabold tracking-wide drop-shadow-2xl mb-4 bg-gradient-to-r from-[#F7E9D7] via-[#E8C89C] to-yellow-100 bg-clip-text text-transparent py-10">
            Visit Us in the Heart of Heritage
          </h2>
          <p className="text-gray-300 text-lg md:text-xl mb-12 max-w-3xl mx-auto">
            Perched amidst the serene hills of Kandy, <span className="text-white font-semibold">Sunset Forest Villa</span> is more than a destination — it&apos;s an experience of nature, tradition, and timeless luxury.
          </p>
        </motion.div>

        {/* Map Section with Animated Frame */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative rounded-3xl shadow-[0_0_60px_rgba(255,215,0,0.1)] border border-white/10 overflow-hidden aspect-video"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d989.3607567408986!2d80.64670613787364!3d7.304021401861914!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae367b8214460ad%3A0x9a441af40a47485a!2sSunset%20Forest%20Villa!5e0!3m2!1sen!2slk!4v1753709646869!5m2!1sen!2slk"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full"
          ></iframe>
        </motion.div>

        {/* Address Details */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mt-10 flex flex-col md:flex-row items-center justify-center gap-4 text-gray-300"
        >
          <MapPin className="w-6 h-6 text-yellow-400" />
          <span>
            Sunset Forest Villa, Wagolla Road, Dharmashoka Mawatha, Kandy, Sri Lanka
          </span>
        </motion.div>
      </div>
    </section>
  );
}
