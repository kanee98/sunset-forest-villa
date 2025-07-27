"use client";
import { motion } from "framer-motion";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";

export default function Hero() {
  return (
    <section
      className="relative w-full h-screen flex items-center justify-between px-6 sm:px-10 md:px-20 lg:px-28 xl:px-36 bg-cover bg-center text-white"
      style={{ backgroundImage: "url('/bg.jpg')" }}
    >

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60 z-0" />

      {/* Text Content */}
      <motion.div
        className="z-10 max-w-xl text-center md:text-left"
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight drop-shadow-xl">
          Escape. Relax. Rejuvenate.
        </h1>
        <p className="mt-4 text-lg sm:text-xl text-white/90">
          Discover the perfect blend of nature and luxury at Sunset Forest Villa.
        </p>
        <a
          href="#book"
          className="inline-block mt-6 px-8 py-3 bg-white text-black font-semibold rounded-lg shadow-lg hover:bg-gray-200 transition"
        >
          Book Your Stay
        </a>
      </motion.div>

      {/* Social Media Icons (hidden on small, shown on md+) */}
      <motion.div
        className="hidden md:flex flex-col gap-6 z-10"
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebookF className="text-white hover:text-blue-400 text-2xl transition duration-300" />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="text-white hover:text-pink-400 text-2xl transition duration-300" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter className="text-white hover:text-cyan-400 text-2xl transition duration-300" />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <FaLinkedinIn className="text-white hover:text-blue-300 text-2xl transition duration-300" />
        </a>
      </motion.div>
    </section>
  );
}
