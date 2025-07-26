"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Playfair_Display } from 'next/font/google';

const playfair = Playfair_Display({ subsets: ['latin'], weight: ['400', '700'] });

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);

  return (
    <section ref={ref} className="relative h-screen w-full overflow-hidden">
      {/* Parallax background image */}
      <motion.div
        className="absolute inset-0 z-[-2] bg-cover bg-center"
        style={{
          y: backgroundY,
          backgroundImage: "url('/bg.jpg')",
        }}
      />

      {/* Soft black gradient overlay */}
      <div className="absolute inset-0 z-[-1] bg-gradient-to-b from-black/60 via-black/40 to-black/80" />

      {/* Hero content */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="relative z-10 h-full flex flex-col justify-center items-center text-center px-6"
      >
         <h1 className={`${playfair.className} text-white text-5xl md:text-6xl lg:text-7xl font-light tracking-wide leading-tight max-w-4xl`}>
          Experience Timeless Luxury <br />
          in the Heart of the Forest
        </h1>

        <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-xl">
          Sunset Forest Villa — A sanctuary of elegance, nature, and serenity.
        </p>

        <motion.a
          href="#book"
          whileHover={{ scale: 1.05 }}
          className="mt-10 px-8 py-4 text-lg font-medium rounded-full bg-white text-black hover:bg-accent hover:text-white transition"
        >
          Book Your Stay
        </motion.a>
      </motion.div>
    </section>
  );
}