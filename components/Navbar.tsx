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
    if (scrolled) setMobileMenuOpen(false);
  }, [scrolled]);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [mobileMenuOpen]);

  return (
    <>
      {/* Big centered header before scroll */}
      <AnimatePresence>
        {!scrolled && (
          <motion.div
            initial={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5 }}
            className="fixed top-6 left-1/2 -translate-x-1/2 z-50 select-none pointer-events-none flex flex-col items-center space-y-6 px-4 max-w-[90vw]"
          >
            <h1 className="text-white text-5xl sm:text-6xl md:text-7xl font-serif font-bold tracking-wider drop-shadow-lg text-center leading-tight">
              Sunset Forest Villa
            </h1>

            {/* Hide nav links and Book button in big header on mobile (only hamburger visible) */}
            <nav>
              <ul className="hidden md:flex space-x-12 text-yellow-400 font-medium text-xl cursor-default">
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

      {/* Sticky navbar after scroll */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={scrolled ? { y: 0, opacity: 1 } : { y: -100, opacity: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur-md shadow-md"
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Shrunk logo */}
          <Link
            href="/"
            className="text-yellow-400 text-xl sm:text-2xl font-serif font-bold tracking-wide"
          >
            Sunset Forest Villa
          </Link>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center space-x-8 text-yellow-400 font-medium">
            <Link href="#rooms" className="hover:text-yellow-300">
              Rooms
            </Link>
            <Link href="#book" className="hover:text-yellow-300">
              Book
            </Link>
            <Link href="#contact" className="hover:text-yellow-300">
              Contact
            </Link>
            {/* Book Now button */}
            <Link
              href="#book"
              className="ml-6 px-5 py-2 bg-yellow-400 text-black font-semibold rounded-full hover:bg-yellow-300 transition"
            >
              Book Now
            </Link>
          </div>

          {/* Mobile hamburger button - ALWAYS visible */}
          <button
            className="md:hidden text-yellow-400 focus:outline-none"
            aria-label="Toggle menu"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          {/* On mobile, show Book Now button in navbar (right side), ONLY after scroll */}
          {scrolled && (
            <Link
              href="#book"
              className="md:hidden ml-4 px-4 py-2 bg-yellow-400 text-black font-semibold rounded-full hover:bg-yellow-300 transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              Book Now
            </Link>
          )}
        </div>

        {/* Mobile menu drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-black/90 backdrop-blur-md overflow-hidden"
            >
              <nav className="flex flex-col px-6 py-4 space-y-4 text-yellow-400 font-medium">
                <Link
                  href="#rooms"
                  className="hover:text-yellow-300"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Rooms
                </Link>
                <Link
                  href="#book"
                  className="hover:text-yellow-300"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Book
                </Link>
                <Link
                  href="#contact"
                  className="hover:text-yellow-300"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact
                </Link>
                <Link
                  href="#book"
                  className="mt-4 px-5 py-2 bg-yellow-400 text-black font-semibold rounded-full text-center hover:bg-yellow-300 transition"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Book Now
                </Link>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}
