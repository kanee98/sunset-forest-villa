"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronUp, ChevronDown, ChevronRight } from "lucide-react"; // added ChevronRight
import KandyanDivider from "./KandyanDivider";
import useNavbarState from "@/hooks/useNavbarState";
import { Dancing_Script } from "next/font/google";

const dancingScript = Dancing_Script({ weight: "600", subsets: ["latin"] });

export default function Navbar() {
  const pathname = usePathname();
  const { scrolled, isCompactView } = useNavbarState();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [accommodationOpen, setAccommodationOpen] = useState(false);
  const [openVillaSubmenus, setOpenVillaSubmenus] = useState<{ [key: string]: boolean }>({});

  const accommodationRoutes = ["/accommodation", "/single-room", "/double-room", "/family-suite"];
  const isAccommodationActive = accommodationRoutes.includes(pathname);

  const isActive = (path: string) =>
    pathname === path ? "text-[#D4AF37] font-bold" : "text-white hover:text-[#D4AF37]";

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
  }, [mobileMenuOpen]);

  const accommodationLinks = [
    {
      label: "Villa 1",
      href: "/accommodation/villa1rooms",
      children: [
        { label: "Single Room", href: "/accommodation/villa1rooms/single-room" },
        { label: "Double Room", href: "/accommodation/villa1rooms/double-room" },
        { label: "Suite", href: "/accommodation/villa1rooms/suite" },
      ],
    },
    {
      label: "Villa 2",
      href: "/accommodation/villa2rooms",
      children: [
        { label: "Single Room", href: "/accommodation/villa1rooms/single-room" },
        { label: "Double Room", href: "/accommodation/villa1rooms/double-room" },
        { label: "Suite", href: "/accommodation/villa1rooms/suite" },
      ],
    },
    {
      label: "Guest House",
      href: "/accommodation/houserooms",
      children: [
        { label: "Single Room", href: "/accommodation/villa1rooms/single-room" },
        { label: "Double Room", href: "/accommodation/villa1rooms/double-room" },
        { label: "Suite", href: "/accommodation/villa1rooms/suite" },
      ],
    },
  ];

  return (
    <>
      {/* Large screen hero nav */}
      <AnimatePresence>
        {!scrolled && !isCompactView && (
          <motion.div
            initial={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5 }}
            className="fixed top-6 left-1/2 -translate-x-1/2 z-40 hidden xl:flex flex-col items-center space-y-4 px-6 text-center max-w-screen-xl"
          >
            <div className="flex flex-col items-center gap-1 text-center">
              <h1 className={`${dancingScript.className} text-7xl font-semibold tracking-wide drop-shadow-xl text-[#B8860B] px-4`}>
                Sun Set
              </h1>
              <h2 className="text-[#B8860B] text-2xl font-sans uppercase tracking-widest drop-shadow-md">
                Forest Villa
              </h2>
            </div>
            <p className="text-[#f1f5f9] font-medium italic text-lg max-w-md">
              Where <span className="font-semibold text-[#B8860B]">Golden evenings</span> meet the soul of Kandy
            </p>
            <KandyanDivider />
            <nav>
              <ul className="flex space-x-8 text-[#5C3A25] font-medium text-xl">
                <li><Link href="/" className={`transition ${isActive("/")}`}>Home</Link></li>
                <li><Link href="/about" className={`transition ${isActive("/about")}`}>About Us</Link></li>
                <li>
                  <div className="relative group">
                    <button
                      className={`flex items-center space-x-1 transition ${
                        isAccommodationActive ? "text-[#D4AF37] font-bold" : "text-white hover:text-[#D4AF37]"
                      }`}
                    >
                      <span>Accommodation</span>
                      <ChevronDown size={16} className="mt-0.5 group-hover:rotate-180 transition-transform duration-300" />
                    </button>
                    <ul className="absolute top-full left-0 mt-2 w-56 bg-[#B8860B] border border-[#5C3A25] shadow-2xl opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transform -translate-y-2 transition-all duration-300 z-50 p-2 divide-y divide-[#5C3A25]">
                      {accommodationLinks.map((item) => (
                        <li key={item.href} className="relative group/item">
                          <Link
                            href={item.href}
                            className={`block px-4 py-2 rounded-md transition-colors ${
                              pathname === item.href
                                ? "bg-[#C09728] text-white font-semibold"
                                : "hover:bg-[#C09728] text-white"
                            }`}
                          >
                            <div className="flex justify-between items-center">
                              <span>{item.label}</span>
                              {item.children && (
                                <ChevronRight size={16} className="ml-2" />
                              )}
                            </div>
                          </Link>

                          {item.children && (
                            <ul className="absolute left-full top-0 mt-0 ml-1 w-56 bg-[#B8860B] border border-[#5C3A25] shadow-xl opacity-0 group-hover/item:opacity-100 group-hover/item:translate-x-0 transform translate-x-2 transition-all duration-300 z-50 p-2 space-y-1 pointer-events-none group-hover/item:pointer-events-auto divide-y divide-[#5C3A25]">
                              {item.children.map((sub) => (
                                <li key={sub.href}>
                                  <Link
                                    href={sub.href}
                                    className={`block px-4 py-2 rounded-md transition-colors ${
                                      pathname === sub.href
                                        ? "bg-[#C09728] text-white font-semibold"
                                        : "hover:bg-[#C09728] text-white"
                                    }`}
                                  >
                                    {sub.label}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
                <li><Link href="/contact" className={`transition ${isActive("/contact")}`}>Contact Us</Link></li>
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Sticky nav */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={(scrolled || isCompactView) ? { y: 0, opacity: 1 } : { y: -100, opacity: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 w-full z-50 bg-[#4B2E1D] ${scrolled ? "backdrop-blur-md shadow-md" : ""}`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Brand */}
          <Link href="/" className="flex flex-col leading-tight z-[60]">
            <span className={`${dancingScript.className} text-3xl font-bold text-[#B8860B]`}>Sun Set</span>
            <span className="text-[#B8860B] text-l font-sans uppercase tracking-widest">Forest Villa</span>
          </Link>

          {/* Desktop nav */}
          <div className={`hidden lg:flex items-center space-x-8 font-medium transition-opacity duration-300 ${
            scrolled || isCompactView ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}>
            <Link href="/" className={`transition ${isActive("/")}`}>Home</Link>
            <Link href="/about" className={`transition ${isActive("/about")}`}>About Us</Link>
            <div className="relative group">
              <button
                className={`flex items-center space-x-1 transition ${
                  isAccommodationActive ? "text-[#D4AF37] font-bold" : "text-white hover:text-[#D4AF37]"
                }`}
              >
                <span>Accommodation</span>
                <ChevronDown size={16} className="mt-0.5 group-hover:rotate-180 transition-transform duration-300" />
              </button>
              <ul className="absolute top-full left-0 mt-2 w-56 bg-[#B8860B] border border-[#5C3A25] shadow-2xl opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transform -translate-y-2 transition-all duration-300 z-50 p-2 divide-y divide-[#5C3A25]">
                {accommodationLinks.map((item) => (
                  <li key={item.href} className="relative group/item">
                    <Link
                      href={item.href}
                      className={`block px-4 py-2 rounded-md transition-colors ${
                        pathname === item.href
                          ? "bg-[#C09728] text-white font-semibold"
                          : "hover:bg-[#C09728] text-white"
                        }`}
                    >
                      <div className="flex justify-between items-center">
                        <span>{item.label}</span>
                        {item.children && (
                          <ChevronRight size={16} className="ml-2" />
                        )}
                      </div>
                    </Link>

                    {item.children && (
                      <ul className="absolute left-full top-0 mt-0 ml-1 w-56 bg-[#B8860B] border border-[#5C3A25] shadow-xl opacity-0 group-hover/item:opacity-100 group-hover/item:translate-x-0 transform translate-x-2 transition-all duration-300 z-50 p-2 space-y-1 pointer-events-none group-hover/item:pointer-events-auto divide-y divide-[#5C3A25]">
                        {item.children.map((sub) => (
                          <li key={sub.href}>
                            <Link
                              href={sub.href}
                              className={`block px-4 py-2 rounded-md transition-colors ${
                                pathname === sub.href
                                  ? "bg-[#C09728] text-white font-semibold"
                                  : "hover:bg-[#C09728] text-white"
                              }`}
                            >
                              {sub.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </div>
            <Link href="/contact" className={`transition ${isActive("/contact")}`}>Contact Us</Link>
            <Link
              href="/book-now"
              className="ml-6 px-5 py-2 bg-[#D4AF37] text-black font-semibold rounded-full hover:bg-[#f8d564ff] transition"
            >
              Book Now
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden text-[#D4AF37] z-[60]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile sidebar menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black z-40"
              onClick={() => setMobileMenuOpen(false)}
            />
            <motion.nav
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 w-72 h-full bg-[#121212] text-white z-50 px-6 py-8 flex flex-col"
            >
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="self-end mb-6 text-[#D4AF37]"
              >
                <X size={28} />
              </button>

              <ul className="flex flex-col space-y-5 text-lg font-medium">
                <li><Link href="/" onClick={() => setMobileMenuOpen(false)} className={`block ${isActive("/")}`}>Home</Link></li>
                <li><Link href="/about" onClick={() => setMobileMenuOpen(false)} className={`block ${isActive("/about")}`}>About Us</Link></li>

                <li>
                  <button
                    onClick={() => setAccommodationOpen(!accommodationOpen)}
                    className={`flex items-center justify-between w-full ${isAccommodationActive ? "text-[#D4AF37] font-bold" : "text-white"}`}
                  >
                    <span>Accommodation</span>
                    {accommodationOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                  </button>
                  {accommodationOpen && (
                    <ul className="mt-3 ml-4 flex flex-col space-y-3 text-[#d4af37]">
                      {accommodationLinks.map((item) => (
                        <li key={item.href}>
                          <div className="flex items-center justify-between">
                            <Link
                              href={item.href}
                              onClick={() => setMobileMenuOpen(false)}
                              className={`block px-3 py-2 rounded w-full ${
                                pathname === item.href ? "bg-[#2a2a2a] font-semibold text-white" : "hover:bg-[#2a2a2a]"
                              }`}
                            >
                              {item.label}
                            </Link>

                            {item.children && (
                              <button
                                onClick={() =>
                                  setOpenVillaSubmenus((prev) => ({
                                    ...prev,
                                    [item.href]: !prev[item.href],
                                  }))
                                }
                                className="text-[#D4AF37] ml-2"
                              >
                                {openVillaSubmenus[item.href] ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                              </button>
                            )}
                          </div>

                          {/* Submenu */}
                          {item.children && openVillaSubmenus[item.href] && (
                            <ul className="ml-4 mt-2 space-y-2 text-sm text-[#d4af37]">
                              {item.children.map((sub) => (
                                <li key={sub.href}>
                                  <Link
                                    href={sub.href}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className={`block px-3 py-1 rounded ${
                                      pathname === sub.href ? "bg-[#2a2a2a] font-semibold text-white" : "hover:bg-[#2a2a2a]"
                                    }`}
                                  >
                                    {sub.label}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          )}
                        </li>
                      ))}
                    </ul>
                  )}
                </li>

                <li><Link href="/contact" onClick={() => setMobileMenuOpen(false)} className={`block ${isActive("/contact")}`}>Contact</Link></li>
              </ul>

              <Link
                href="/book-now"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-auto inline-block px-6 py-3 bg-[#D4AF37] text-black font-semibold rounded-full text-center hover:bg-[#f8d564ff] transition"
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