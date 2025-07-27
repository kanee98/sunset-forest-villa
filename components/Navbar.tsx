"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronUp, ChevronDown  } from "lucide-react";
import KandyanDivider from "./KandyanDivider";
import useNavbarState from "@/hooks/useNavbarState";
import { Dancing_Script } from "next/font/google";
import useActiveSection from "@/hooks/useActiveSection";

const dancingScript = Dancing_Script({ weight: "600", subsets: ["latin"] });

export default function Navbar() {
  const { scrolled, isCompactView } = useNavbarState();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [accommodationOpen, setAccommodationOpen] = useState(false);

  const activeSection = useActiveSection([
    "about",
    "accommodation",
    "contact",
  ]);

  const isActive = (id: string) =>
    activeSection === id
      ? "text-[#D4AF37] font-bold"
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
            className="fixed top-6 left-1/2 -translate-x-1/2 z-40 select-none hidden xl:flex flex-col items-center space-y-4 px-6 text-center max-w-screen-xl"
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
                  <div className="relative group">
                    <button
                      className={`flex items-center space-x-1 transition ${isActive("accommodation")} focus:outline-none`}
                    >
                      <span>Accommodation</span>
                      <ChevronDown size={16} className="mt-0.5 group-hover:rotate-180 transition-transform duration-300" />
                    </button>
                    <ul className="absolute top-full left-0 mt-2 w-56 bg-[#B8860B] border border-[#B8860B] shadow-2xl opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transform -translate-y-2 transition-all duration-300 z-50 p-2 divide-y divide-[#C09728]">
                      {[
                        { label: "Single Room", href: "#single-room" },
                        { label: "Double Room", href: "#double-room" },
                        { label: "Family Suite", href: "#family-suite" },
                      ].map((item) => (
                        <li key={item.href}>
                          <Link
                            href={item.href}
                            className="block px-4 py-2 hover:bg-[#C09728] rounded-md transition-colors"
                          >
                            {item.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
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
            <div className="relative group">
              <button
                className={`flex items-center space-x-1 transition ${isActive("accommodation")} focus:outline-none`}
              >
                <span>Accommodation</span>
                <ChevronDown size={16} className="mt-0.5 group-hover:rotate-180 transition-transform duration-300" />
              </button>
              <ul className="absolute top-full left-0 mt-2 w-56 bg-[#B8860B] border border-[#B8860B] shadow-2xl opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transform -translate-y-2 transition-all duration-300 z-50 p-2 divide-y divide-[#C09728]">
                {[
                  { label: "Single Room", href: "#single-room" },
                  { label: "Double Room", href: "#double-room" },
                  { label: "Family Suite", href: "#family-suite" },
                ].map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="block px-4 py-2 hover:bg-[#C09728] rounded-md transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <Link href="#contact" className={`transition ${isActive("contact")}`}>Contact Us</Link>
            <Link
              href="#book"
              className="ml-6 px-5 py-2 bg-[#D4AF37] text-black font-semibold rounded-full hover:bg-[#f8d564ff] transition"
            >
              Book Now
            </Link>
          </div>

          {/* Hamburger Button */}
          <button
            className="md:hidden text-[#D4AF37] focus:outline-none z-[60]"
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
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black z-40"
              aria-hidden="true"
              onClick={() => setMobileMenuOpen(false)}
            />

            {/* Sidebar Menu */}
            <motion.nav
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 w-72 max-w-full h-full bg-[#121212] text-[#f1f5f9] z-50 shadow-xl flex flex-col px-6 py-8"
              role="dialog"
              aria-modal="true"
              aria-label="Mobile menu"
            >
              {/* Close Button */}
              <button
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close menu"
                className="self-end mb-6 text-[#D4AF37] hover:text-[#f1f5f9] transition"
              >
                <X size={28} />
              </button>

              {/* Menu Items */}
              <ul className="flex flex-col space-y-5 text-lg font-medium">
                <li>
                  <Link href="/" onClick={() => setMobileMenuOpen(false)} className={`block transition ${isActive("")}`}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="#about" onClick={() => setMobileMenuOpen(false)} className={`block transition ${isActive("about")}`}>
                    About Us
                  </Link>
                </li>

                {/* Accommodation dropdown */}
                <li>
                  <button
                    onClick={() => setAccommodationOpen(!accommodationOpen)}
                    className={`flex items-center justify-between w-full text-left transition ${isActive("accommodation")} focus:outline-none`}
                    aria-expanded={accommodationOpen}
                    aria-controls="accommodation-submenu"
                  >
                    <span>Accommodation</span>
                    {accommodationOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                  </button>

                  {accommodationOpen && (
                    <ul
                      id="accommodation-submenu"
                      className="mt-3 ml-4 flex flex-col space-y-3 text-[#d4af37]"
                      role="menu"
                      aria-label="Accommodation submenu"
                    >
                      <li>
                        <Link
                          href="#single-room"
                          onClick={() => setMobileMenuOpen(false)}
                          className="block px-3 py-2 rounded hover:bg-[#2a2a2a] transition"
                          role="menuitem"
                        >
                          Single Room
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="#double-room"
                          onClick={() => setMobileMenuOpen(false)}
                          className="block px-3 py-2 rounded hover:bg-[#2a2a2a] transition"
                          role="menuitem"
                        >
                          Double Room
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="#family-suite"
                          onClick={() => setMobileMenuOpen(false)}
                          className="block px-3 py-2 rounded hover:bg-[#2a2a2a] transition"
                          role="menuitem"
                        >
                          Family Suite
                        </Link>
                      </li>
                    </ul>
                  )}
                </li>

                <li>
                  <Link href="#contact" onClick={() => setMobileMenuOpen(false)} className={`block transition ${isActive("contact")}`}>
                    Contact
                  </Link>
                </li>
              </ul>

              <Link
                href="#book"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-auto inline-block px-6 py-3 bg-[#D4AF37] text-black font-semibold rounded-full text-center hover:bg-sky-300 transition"
              >
                Book Now
              </Link>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
}