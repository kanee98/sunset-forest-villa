"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function WelcomeSection() {
  return (
    <section
      aria-label="Welcome Section"
      className="relative bg-gradient-to-br from-[#F7E9D7] to-[#E8C89C] py-20 px-6 overflow-hidden max-w-full min-h-screen shadow-xl flex items-center justify-center"
    >
      {/* Decorative Kandyan Flower background */}
      <div
        aria-hidden="true"
        className="absolute inset-0 flex justify-center items-center opacity-10 z-0 pointer-events-none"
      >
        <Image
          src="/kandyan-flower.jpg"
          alt=""
          fill
          quality={100}
          className="object-cover"
          priority
        />
        {/* Optional subtle gradient overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-[#F7E9D7]/70 to-[#E8C89C]/90 pointer-events-none" />
      </div>

      <motion.div
        className="relative z-10 max-w-4xl mx-auto text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
      >
        <h1 className="text-5xl sm:text-6xl font-serif font-extrabold text-[#4B2E1D] drop-shadow-md leading-tight relative inline-block">
          Ayubowan!
          {/* Animated underline */}
          <motion.span
            className="block h-1 bg-yellow-500 rounded-full mt-2 mx-auto w-20"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            style={{ transformOrigin: "left" }}
          />
        </h1>

        {/* Tagline */}
        <motion.p
          className="mt-2 text-lg italic text-[#7E5A2A]"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          "May you live a long, healthy, and happy life."
        </motion.p>

        {/* Kandyan Nilame illustrations (mirrored) */}
        <div className="my-8 flex justify-center gap-12">
          {/* Flipped image */}
          <motion.div>
            <Image
              src="/kandyan-nilame.png"
              alt="Kandyan Nilame illustration flipped horizontally"
              width={160}
              height={160}
              className="object-contain scale-x-[-1] w-auto h-auto"
              quality={100}
              priority
            />
          </motion.div>
          {/* Original image */}
          <motion.div>
            <Image
              src="/kandyan-nilame.png"
              alt="Kandyan Nilame illustration"
              width={160}
              height={160}
              className="object-contain w-auto h-auto"
              quality={100}
              priority
            />
          </motion.div>
        </div>

        <p className="mt-6 text-lg sm:text-xl text-[#5C3A25] max-w-3xl mx-auto font-light leading-relaxed tracking-wide">
          Welcome to <span className="font-semibold">Sunset Forest Villa</span>, where timeless tradition meets serene tranquility. Immerse yourself in genuine Sri Lankan hospitality, inspired by the majestic Kandyan heritage and crafted for your ultimate comfort.
        </p>
      </motion.div>
    </section>
  );
}