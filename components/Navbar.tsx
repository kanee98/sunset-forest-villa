"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import KandyanDivider from "./KandyanDivider";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isCompactView, setIsCompactView] = useState(false); // lg and down = compact

  useEffect(() => {
    const handleResize = () => {
      setIsCompactView(window.innerWidth <= 1280); // Nest Hub Max and below
    };

    const handleScroll = () => setScrolled(window.scrollY > 20);

    handleResize(); // run once on mount
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
  }, [mobileMenuOpen]);

  return (
    <>
      {/* Header Title — only on XL screens and not scrolled */}
      <AnimatePresence>
        {!scrolled && !isCompactView && (
          <motion.div
            initial={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5 }}
            className="
              fixed top-6 left-1/2 -translate-x-1/2
              z-40 select-none pointer-events-none
              hidden xl:flex flex-col items-center
              space-y-4 px-6 text-center
              max-w-[90vw] max-w-screen-xl
            "
          >
            <h1 className="text-yellow-100 text-5xl sm:text-6xl md:text-7xl font-serif font-bold tracking-wider drop-shadow-xl leading-tight bg-gradient-to-r from-red-900 via-yellow-500 to-red-900 text-transparent bg-clip-text">
              Sunset Forest Villa
            </h1>
            <p className="text-yellow-200 font-medium italic text-lg max-w-md">
              Celebrate the spirit of <span className="font-semibold text-yellow-300">Esala Perahera</span> with us in Kandy
            </p>
            <KandyanDivider />
            <nav>
              <ul className="flex space-x-8 text-yellow-300 font-medium text-xl cursor-default max-w-full overflow-hidden">
                <li><Link href="#rooms" className="hover:text-yellow-100 pointer-events-auto transition-colors">Rooms</Link></li>
                <li><Link href="#book" className="hover:text-yellow-100 pointer-events-auto transition-colors">Book</Link></li>
                <li><Link href="#contact" className="hover:text-yellow-100 pointer-events-auto transition-colors">Contact</Link></li>
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Sticky Navbar — always visible on small/medium screens */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={(scrolled || isCompactView) ? { y: 0, opacity: 1 } : { y: -100, opacity: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`fixed top-0 left-0 w-full z-50 transition-all ${
          scrolled ? "bg-black/80 backdrop-blur-md shadow-md" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-yellow-300 text-xl sm:text-2xl font-serif font-bold tracking-wide z-[60]">
            Sunset Forest Villa
          </Link>

          {/* Desktop Nav (visible only if scrolled or compact view) */}
          <div
            className={`hidden md:flex items-center space-x-8 text-yellow-200 font-medium transition-opacity duration-300 ${
              scrolled || isCompactView ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            <Link href="#rooms" className="hover:text-yellow-100 transition">Rooms</Link>
            <Link href="#book" className="hover:text-yellow-100 transition">Book</Link>
            <Link href="#contact" className="hover:text-yellow-100 transition">Contact</Link>
            <Link
              href="#book"
              className="ml-6 px-5 py-2 bg-yellow-400 text-black font-semibold rounded-full hover:bg-yellow-300 transition"
            >
              Book Now
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden text-yellow-300 focus:outline-none z-[60]"
            aria-label="Toggle menu"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 left-0 w-full h-screen md:hidden bg-gradient-to-br from-black via-red-950 to-black backdrop-blur-md z-40 flex flex-col items-center justify-center px-6 space-y-6 text-yellow-200 text-xl font-medium"
          >
            <Link href="#rooms" onClick={() => setMobileMenuOpen(false)} className="hover:text-yellow-100">Rooms</Link>
            <Link href="#book" onClick={() => setMobileMenuOpen(false)} className="hover:text-yellow-100">Book</Link>
            <Link href="#contact" onClick={() => setMobileMenuOpen(false)} className="hover:text-yellow-100">Contact</Link>
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
