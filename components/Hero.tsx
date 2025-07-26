"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <motion.section
      className="h-screen flex flex-col justify-center items-center text-center bg-cover bg-center px-4"
      style={{ backgroundImage: `url('/bg.jpg')` }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
    >
      <motion.h1
        className="text-5xl md:text-7xl font-bold text-white drop-shadow-lg"
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.3 }}
      >
        Welcome to Sunset Forest Villa
      </motion.h1>
      <motion.p
        className="text-xl md:text-2xl mt-4 text-accent"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        Luxury meets nature. Sleep beneath the stars.
      </motion.p>
      <motion.a
        href="#book"
        className="mt-6 px-6 py-3 bg-accent text-primary font-bold rounded-xl hover:bg-white transition"
        whileHover={{ scale: 1.05 }}
      >
        Book Now
      </motion.a>
    </motion.section>
  );
}