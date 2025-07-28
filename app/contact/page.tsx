"use client";

import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Mail, Phone, MapPin } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactPage() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://weatherwidget.io/js/widget.min.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[85vh] bg-fixed bg-center bg-cover flex items-center justify-center" style={{ backgroundImage: "url('/bg.jpg')" }}>
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
        <motion.div
          className="relative z-10 text-center text-white px-4"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight drop-shadow-md">
            Get in Touch with Us
          </h1>
          <p className="mt-4 text-lg md:text-xl font-light">
            Your escape to luxury begins here.
          </p>
        </motion.div>
      </section>

      {/* Main Content */}
      <main className="bg-[#FCF8F3] py-24 px-6 sm:px-12 lg:px-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Panel - Contact Info & Weather */}
          <div className="space-y-10">
            <div>
              <h2 className="text-3xl font-semibold text-[#4B2E1D] mb-4">Contact Information</h2>
              <p className="text-[#4B2E1D]/80 mb-6">
                Reach out for booking inquiries, special requests, or anything else we can help with.
              </p>

              <div className="space-y-4 text-[#4B2E1D] text-lg">
                <div className="flex items-center gap-3">
                  <Phone className="text-[#B8860B]" />
                  <span>+94 77 123 4567</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="text-[#B8860B]" />
                  <span>info@sunsetforestvilla.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="text-[#B8860B]" />
                  <span>
                    Sunset Forest Villa,<br />
                    Kandy, Sri Lanka
                  </span>
                </div>
              </div>
            </div>

            {/* Weather Widget Card */}
            <div className="bg-white/80 border border-[#e3d9c8] rounded-xl shadow-lg p-6 backdrop-blur-sm">
              <h3 className="text-xl font-semibold text-[#4B2E1D] mb-2">Current Weather</h3>
              <a
                className="weatherwidget-io"
                href="https://forecast7.com/en/7d2980d63/kandy/"
                data-label_1="KANDY"
                data-label_2="WEATHER"
                data-theme="pure"
                data-basecolor="#ffffff"
                data-accent="#B8860B"
                data-textcolor="#4B2E1D"
              >
                KANDY WEATHER
              </a>
            </div>
          </div>

          {/* Right Panel - Contact Form */}
          <form
            onSubmit={(e) => e.preventDefault()}
            className="bg-white border border-[#e3d9c8] shadow-lg rounded-2xl p-8 space-y-6"
          >
            <h2 className="text-2xl font-semibold text-[#4B2E1D]">Send a Message</h2>

            <div className="flex flex-col gap-4">
              <div>
                <label htmlFor="name" className="block text-sm text-[#4B2E1D] mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-[#B8860B] outline-none"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm text-[#4B2E1D] mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-[#B8860B] outline-none"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm text-[#4B2E1D] mb-1">
                  Your Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  required
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-[#B8860B] outline-none"
                ></textarea>
              </div>
            </div>

            <button
              type="submit"
              className="bg-[#B8860B] text-white font-medium px-6 py-3 rounded-md hover:bg-[#a87708] transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </main>

      <Footer />
    </>
  );
}
