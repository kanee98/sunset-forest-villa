"use client";
import { motion } from "framer-motion";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="relative w-full h-screen flex items-center justify-between px-6 sm:px-10 md:px-20 lg:px-28 xl:px-36 text-white overflow-hidden">

      {/* Background image with slow zoom */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/bg.jpg')", 
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        initial={{ scale: 1 }}
        animate={{ scale: 1.05 }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        }}
      />

      {/* Gradient overlay for luxury feel */}
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background: `
            linear-gradient(to right, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.3) 30%, rgba(0,0,0,0) 50%, rgba(0,0,0,0.2) 80%, rgba(0,0,0,0.4) 100%),
            linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0))
          `,
          mixBlendMode: "normal",
        }}
      />

      {/* Text Content */}
      <motion.div
        className="z-20 max-w-xl text-left md:text-left"
        initial={{ x: -30, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight drop-shadow-lg">
          Escape. Relax. Rejuvenate.
        </h1>
        <p className="mt-4 text-lg sm:text-xl text-white/90">
          Discover timeless comfort and elegant luxury at Sun Set Forest Villa.
        </p>
        <a
          href="#book"
          className="inline-block mt-6 px-8 py-3 bg-white text-black font-semibold rounded-lg shadow-lg hover:bg-gray-200 transition"
        >
          Book Your Stay
        </a>
      </motion.div>

      {/* Social Media Icons */}
      <motion.div
        className="hidden md:flex flex-col gap-6 z-20"
        initial={{ x: 30, opacity: 0 }}
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
