"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
  }, [mobileMenuOpen]);

  return (
    <>
      {/* Top Large Title (Desktop Only, Not Scrolled) */}
      <AnimatePresence>
        {!scrolled && (
          <motion.div
            initial={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5 }}
            className="fixed top-6 left-1/2 -translate-x-1/2 z-40 select-none pointer-events-none hidden md:flex flex-col items-center space-y-6 px-4 max-w-[90vw]"
          >
            <h1 className="text-white text-5xl sm:text-6xl md:text-7xl font-serif font-bold tracking-wider drop-shadow-lg text-center leading-tight">
              Sunset Forest Villa
            </h1>

            <nav>
              <ul className="flex space-x-12 text-yellow-400 font-medium text-xl cursor-default">
                <li>
                  <Link
                    href="#rooms"
                    className="hover:text-yellow-300 pointer-events-auto"
                  >
                    Rooms
                  </Link>
                </li>
                <li>
                  <Link
                    href="#book"
                    className="hover:text-yellow-300 pointer-events-auto"
                  >
                    Book
                  </Link>
                </li>
                <li>
                  <Link
                    href="#contact"
                    className="hover:text-yellow-300 pointer-events-auto"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Sticky Navbar (Always on mobile, only on scroll for desktop) */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={(scrolled || typeof window !== "undefined" && window.innerWidth < 768) ? { y: 0, opacity: 1 } : { y: -100, opacity: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`fixed top-0 left-0 w-full z-50 transition-all ${
          scrolled ? "bg-black/70 backdrop-blur-md shadow-md" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="text-yellow-400 text-xl sm:text-2xl font-serif font-bold tracking-wide z-[60]"
          >
            Sunset Forest Villa
          </Link>

          {/* Desktop Nav (only visible when scrolled) */}
          <div
            className={`hidden md:flex items-center space-x-8 text-yellow-400 font-medium transition-opacity duration-300 ${
              scrolled ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            <Link href="#rooms" className="hover:text-yellow-300">
              Rooms
            </Link>
            <Link href="#book" className="hover:text-yellow-300">
              Book
            </Link>
            <Link href="#contact" className="hover:text-yellow-300">
              Contact
            </Link>
            <Link
              href="#book"
              className="ml-6 px-5 py-2 bg-yellow-400 text-black font-semibold rounded-full hover:bg-yellow-300 transition"
            >
              Book Now
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden text-yellow-400 focus:outline-none z-[60]"
            aria-label="Toggle menu"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Drawer Fullscreen Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 left-0 w-full h-screen md:hidden bg-black/90 backdrop-blur-md z-40 flex flex-col items-center justify-center px-6 space-y-6 text-yellow-400 text-xl font-medium"
          >
            <Link href="#rooms" onClick={() => setMobileMenuOpen(false)} className="hover:text-yellow-300">
              Rooms
            </Link>
            <Link href="#book" onClick={() => setMobileMenuOpen(false)} className="hover:text-yellow-300">
              Book
            </Link>
            <Link href="#contact" onClick={() => setMobileMenuOpen(false)} className="hover:text-yellow-300">
              Contact
            </Link>
            <Link
              href="#book"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-4 px-6 py-2 bg-yellow-400 text-black font-semibold rounded-full hover:bg-yellow-300 transition"
            >
              Book Now
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
