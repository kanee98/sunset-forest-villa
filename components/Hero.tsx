"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <motion.section
      className="relative w-full bg-cover bg-center px-4 pt-[120px] md:pt-[160px] min-h-screen flex flex-col justify-center items-center text-center"
      style={{ backgroundImage: `url('/bg.jpg')` }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60 z-0" />

      {/* Content */}
      <div className="relative z-10">
        <motion.h1
          className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg"
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Welcome to Sunset Forest Villa
        </motion.h1>

        <motion.p
          className="text-lg md:text-2xl mt-4 text-white/90"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          Luxury meets nature. Sleep beneath the stars.
        </motion.p>

        <motion.a
          href="#book"
          className="inline-block mt-6 px-6 py-3 bg-white text-black font-bold rounded-xl hover:bg-accent hover:text-white transition"
          whileHover={{ scale: 1.05 }}
        >
          Book Now
        </motion.a>
      </div>
    </motion.section>
  );
}
