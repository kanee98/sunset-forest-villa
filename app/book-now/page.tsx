"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Phone, Mail } from "lucide-react";
import { motion } from "framer-motion";

export default function BookNowPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    checkIn: "",
    checkOut: "",
    guests: 1,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted", formData);
    // TODO: Send to backend or external booking system
  };

  return (
    <main className="min-h-screen bg-[#F5F3EF] text-[#4B2E1D]">
      {/* Hero */}
      <section className="relative h-[85vh] bg-fixed bg-center bg-cover flex items-center justify-center" style={{ backgroundImage: "url('/bg.jpg')" }}>
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
        <motion.div
          className="relative z-10 text-center text-white px-4"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight drop-shadow-md">
            Book your stay
          </h1>
          <p className="mt-4 text-lg md:text-xl font-light">
            Your escape to luxury begins here.
          </p>
        </motion.div>
      </section>

      {/* Booking Form */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-semibold mb-10 text-center">Plan Your Getaway</h2>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white p-8 rounded-3xl shadow-xl">
          <input type="text" placeholder="Full Name" required
            className="border p-4 rounded-lg" 
            onChange={(e) => setFormData({ ...formData, name: e.target.value })} />

          <input type="email" placeholder="Email Address" required
            className="border p-4 rounded-lg" 
            onChange={(e) => setFormData({ ...formData, email: e.target.value })} />

          <input type="tel" placeholder="Phone Number" required
            className="border p-4 rounded-lg" 
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })} />

          <input type="number" min="1" placeholder="No. of Guests"
            className="border p-4 rounded-lg" 
            onChange={(e) => setFormData({ ...formData, guests: Number(e.target.value) })} />

          <input type="date" required
            className="border p-4 rounded-lg"
            onChange={(e) => setFormData({ ...formData, checkIn: e.target.value })} />

          <input type="date" required
            className="border p-4 rounded-lg"
            onChange={(e) => setFormData({ ...formData, checkOut: e.target.value })} />

          <div className="md:col-span-2 text-center">
            <Button type="submit" className="bg-[#4B2E1D] text-white px-8 py-3 rounded-full hover:bg-[#3A2115] transition">Confirm Booking</Button>
          </div>
        </form>
      </section>

      {/* Contact Info */}
      <section className="bg-[#EFE8DC] py-16">
        <div className="max-w-4xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
          <div>
            <h3 className="text-2xl font-semibold mb-2">Need Help?</h3>
            <p className="flex items-center justify-center md:justify-start gap-2"><Phone className="w-4" /> +94 71 234 5678</p>
            <p className="flex items-center justify-center md:justify-start gap-2"><Mail className="w-4" /> info@sunsetforestvilla.com</p>
          </div>

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d989.3607567408986!2d80.64670613787364!3d7.304021401861914!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae367b8214460ad%3A0x9a441af40a47485a!2sSunset%20Forest%20Villa!5e0!3m2!1sen!2slk!4v1753709646869!5m2!1sen!2slk"
            width="100%"
            height="250"
            className="rounded-xl shadow-md md:w-1/2"
            loading="lazy"
          />
        </div>
      </section>
    </main>
  );
}