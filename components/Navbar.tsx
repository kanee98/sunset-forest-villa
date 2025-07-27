"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import KandyanDivider from "./KandyanDivider";
import useNavbarState from "@/hooks/useNavbarState";
import { Dancing_Script } from "next/font/google";
import useActiveSection from "@/hooks/useActiveSection";

const dancingScript = Dancing_Script({ weight: "600", subsets: ["latin"] });

export default function Navbar() {
  const { scrolled, isCompactView } = useNavbarState();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const activeSection = useActiveSection([
    "about",
    "accommodation",
    "contact",
  ]);

  const isActive = (id: string) =>
    activeSection === id
      ? "text-white font-bold"
      : "text-[#c1c2c2ff] hover:text-white";

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
  }, [mobileMenuOpen]);

  return (
    <>
      {/* Large screen title and nav (only when not scrolled) */}
      <AnimatePresence>
        {!scrolled && !isCompactView && (
          <motion.div
            initial={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5 }}
            className="fixed top-6 left-1/2 -translate-x-1/2 z-40 select-none pointer-events-none hidden xl:flex flex-col items-center space-y-4 px-6 text-center max-w-screen-xl"
          >
            <h1 className={`${dancingScript.className} text-7xl sm:text-8xl md:text-9xl font-semibold tracking-wide drop-shadow-xl text-[#B8860B]`}>
              Sun Set
            </h1>
            <h2 className="text-[#B8860B] text-2xl sm:text-3xl md:text-4xl font-sans uppercase tracking-widest drop-shadow-md leading-tight mt-[-0.75rem]">
              Forest Villa
            </h2>
            <p className="text-[#f1f5f9] font-medium italic text-lg max-w-md">
              Where <span className="font-semibold text-[#B8860B]">Golden evenings</span> meet the soul of Kandy
            </p>
            <KandyanDivider />
            <nav>
              <ul className="flex space-x-8 text-[#f1f5f9] font-medium text-xl cursor-default">
                <li>
                  <Link href="/" className={`hover:text-white pointer-events-auto transition-colors ${isActive("")}`}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="#about" className={`hover:text-white pointer-events-auto transition-colors ${isActive("about")}`}>
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#accommodation" className={`hover:text-white pointer-events-auto transition-colors ${isActive("accommodation")}`}>
                    Accommodation
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className={`hover:text-white pointer-events-auto transition-colors ${isActive("contact")}`}>
                    Contact Us
                  </Link>
                </li>
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Sticky navbar (compact or scrolled) */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={(scrolled || isCompactView) ? { y: 0, opacity: 1 } : { y: -100, opacity: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`fixed top-0 left-0 w-full z-50 transition-all ${
          scrolled ? "bg-dark-800/80 backdrop-blur-md shadow-md" : "bg-transparent"
        }`}
      >
       <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Title */}
          <Link href="/" className="flex items-center space-x-2 z-[60]">
            <span className={`${dancingScript.className} text-xl sm:text-2xl font-serif font-bold tracking-wide drop-shadow-xl text-[#B8860B]`}>
              Sun Set
            </span>
            <span className="text-[#B8860B] text-xl sm:text-2xl font-sans uppercase tracking-widest drop-shadow-md leading-tight">
              Forest Villa
            </span>
          </Link>

          {/* Desktop Nav */}
          <div
            className={`hidden md:flex items-center space-x-8 font-medium transition-opacity duration-300 ${
              scrolled || isCompactView ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            <Link href="/" className={`transition ${isActive("")}`}>Home</Link>
            <Link href="#about" className={`transition ${isActive("about")}`}>About Us</Link>
            <Link href="#accommodation" className={`transition ${isActive("accommodation")}`}>Accommodation</Link>
            <Link href="#contact" className={`transition ${isActive("contact")}`}>Contact Us</Link>
            <Link
              href="#book"
              className="ml-6 px-5 py-2 bg-sky-400 text-black font-semibold rounded-full hover:bg-sky-300 transition"
            >
              Book Now
            </Link>
          </div>

          {/* Hamburger Button */}
          <button
            className="md:hidden text-sky-300 focus:outline-none z-[60]"
            aria-label="Toggle menu"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="fixed top-0 left-0 w-full h-screen md:hidden bg-gradient-to-br from-dark-900 via-slate-800 to-dark-900 backdrop-blur-md z-40 flex flex-col items-center justify-center px-6 space-y-6 text-xl font-medium"
          >
            <Link href="/" onClick={() => setMobileMenuOpen(false)} className={`transition ${isActive("")}`}>Home</Link>
            <Link href="#about" onClick={() => setMobileMenuOpen(false)} className={`transition ${isActive("about")}`}>About Us</Link>
            <Link href="#accommodation" onClick={() => setMobileMenuOpen(false)} className={`transition ${isActive("accommodation")}`}>Accommodation</Link>
            <Link href="#contact" onClick={() => setMobileMenuOpen(false)} className={`transition ${isActive("contact")}`}>Contact</Link>
            <Link
              href="#book"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-4 px-6 py-2 bg-sky-400 text-black font-semibold rounded-full hover:bg-sky-300 transition"
            >
              Book Now
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}