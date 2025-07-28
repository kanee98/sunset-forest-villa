"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function WelcomeSection() {
  return (
    <section className="relative bg-gradient-to-br from-[#F7E9D7] to-[#E8C89C] py-20 px-6 overflow-hidden max-w-full shadow-xl">
      {/* Decorative Kandyan Flower image */}
      <div className="absolute inset-0 flex justify-center items-center opacity-10 z-0">
        <Image
            src="/kandyan-flower.jpg"
            alt="Kandyan Flower"
            fill
            quality={100}
            className="object-cover pointer-events-none"
            priority
        />
      </div>

      <motion.div
        className="relative z-10 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl sm:text-6xl font-serif font-bold text-[#4B2E1D] drop-shadow-lg">
          Ayubowan!
        </h1>
       {/* Kandyan Nilame illustrations (mirrored) */}
        <div className="my-6 flex justify-center gap-8">
            {/* Flipped image */}
            <Image
                src="/kandyan-nilame.png"
                alt="Kandyan Nilame Right (Flipped)"
                width={150}
                height={150}
                className="object-contain scale-x-[-1]"
                quality={100}
                priority
            />
             {/* Original image */}
            <Image
                src="/kandyan-nilame.png"
                alt="Kandyan Nilame Left"
                width={150}
                height={150}
                className="object-contain"
                quality={100}
                priority
            />
        </div>
        <p className="mt-4 text-xl sm:text-2xl text-[#5C3A25] max-w-2xl mx-auto font-light">
          Welcome to <span className="font-semibold">Sunset Forest Villa</span>, where tradition meets tranquility. Experience authentic Sri Lankan hospitality inspired by the grandeur of Kandyan heritage.
        </p>
        <div className="mt-8">
          <button className="bg-[#4B2E1D] text-white px-8 py-4 rounded-lg text-lg hover:bg-[#3A2115] transition-all shadow-md">
            Explore Our Villa
          </button>
        </div>
      </motion.div>
    </section>
  );
}
