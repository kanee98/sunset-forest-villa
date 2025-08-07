"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const backgroundImages = ["/bg/bg.jpg", "/bg/bg2.jpg", "/bg/bg3.jpg"];
const slideInterval = 5000;

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % backgroundImages.length);
    }, slideInterval);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full h-screen flex items-center justify-between px-6 sm:px-10 md:px-20 lg:px-28 xl:px-36 text-white overflow-hidden bg-black">

      {/* Fading Backgrounds */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={backgroundImages[currentImage]}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full"
          >
            <Image
              src={backgroundImages[currentImage]}
              alt="Hero Background"
              fill
              className="object-cover"
              priority
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Content */}
      <motion.div
        className="z-20 max-w-xl text-left"
        initial={{ x: -30, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight drop-shadow-lg font-serif">
          Escape. Relax. Rejuvenate.
        </h1>
        <p className="mt-4 text-lg sm:text-xl text-white/90">
          Discover timeless comfort and elegant luxury at Sun Set Forest Villa.
        </p>
        
        <Link href="/book-now" passHref>
          <div className="inline-block mt-6 px-8 py-3 bg-white text-black font-semibold rounded-lg shadow-lg hover:bg-gray-200 transition cursor-pointer">
            Book Your Stay
          </div>
        </Link>
      </motion.div>

      {/* Social Icons */}
      <motion.div
        className="hidden md:flex flex-col gap-6 z-20 bg-white/20 backdrop-blur-md rounded-xl p-6 shadow-lg"
        initial={{ x: 30, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        {/* Facebook */}
        <a href="https://web.facebook.com/sunsetforestvillakandy/?_rdc=1&_rdr#" target="_blank" rel="noopener noreferrer">
          <Image
            src="/icons/facebook.svg"
            alt="Facebook"
            width={28}
            height={28}
            className="hover:opacity-70 transition-opacity"
          />
        </a>

        {/* Booking.com */}
        <a href="https://www.booking.com/hotel/lk/sun-set-forrest-villa-kandy.en-gb.html" target="_blank" rel="noopener noreferrer">
          <Image
            src="/icons/booking.svg"
            alt="Booking.com"
            width={28}
            height={28}
            className="hover:opacity-70 transition-opacity"
          />
        </a>

        {/* Agoda */}
        <a href="https://www.agoda.com/en-ie/sun-set-forest-villa-h30956746/hotel/kandy-lk.html?cid=1844104" target="_blank" rel="noopener noreferrer">
          <Image
            src="/icons/agoda.svg"
            alt="Agoda"
            width={28}
            height={28}
            className="hover:opacity-70 transition-opacity"
          />
        </a>

        {/* Tripadvisor */}
        <a href="https://www.tripadvisor.com/Hotel_Review-g304138-d15221641-Reviews-Sunset_Forest_Villa-Kandy_Kandy_District_Central_Province.html" target="_blank" rel="noopener noreferrer">
          <Image
            src="/icons/tripadvisor.svg"
            alt="Tripadvisor"
            width={28}
            height={28}
            className="hover:opacity-70 transition-opacity"
          />
        </a>
      </motion.div>
    </section>
  );
}
