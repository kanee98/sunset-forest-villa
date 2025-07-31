"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { CalendarDays, Phone, Mail } from "lucide-react";

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
      <section className="relative h-[60vh] flex items-center justify-center text-center bg-cover bg-center" style={{ backgroundImage: "url('/villa-hero.jpg')" }}>
        <div className="absolute inset-0 bg-black/40" />
        <h1 className="relative z-10 text-white text-5xl font-bold">Book Your Stay</h1>
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
            src="https://www.google.com/maps/embed?pb=!1m18!..." // Replace with actual Google Map embed
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