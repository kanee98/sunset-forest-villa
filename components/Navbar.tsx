"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Big logo top center, visible only when NOT scrolled */}
      <AnimatePresence>
        {!scrolled && (
          <motion.div
            initial={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="fixed top-4 left-1/2 -translate-x-1/2 z-40 pointer-events-none select-none"
          >
            <h1 className="text-white text-6xl font-serif font-bold tracking-wide drop-shadow-lg">
              Sunset Forest Villa
            </h1>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Navbar: visible only when scrolled */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={scrolled ? { y: 0, opacity: 1 } : { y: -100, opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur-md shadow-md"
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Shrunk logo on left */}
          <Link href="/" className="text-yellow-400 text-2xl font-serif font-bold tracking-wide">
            Sunset Forest Villa
          </Link>

          {/* Nav links */}
          <div className="hidden md:flex space-x-8 text-yellow-400 font-medium">
            <Link href="#rooms" className="hover:text-yellow-300">
              Rooms
            </Link>
            <Link href="#book" className="hover:text-yellow-300">
              Book
            </Link>
            <Link href="#contact" className="hover:text-yellow-300">
              Contact
            </Link>
          </div>
        </div>
      </motion.nav>
    </>
  );
}