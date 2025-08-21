"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Phone, Mail } from "lucide-react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";

export default function BookNowPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    checkIn: "",
    checkOut: "",
    guests: "",
    roomType: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const today = new Date().toISOString().split("T")[0];

  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowModal(true);
  };

  const handleFinalSubmit = () => {
    setStatus("loading");

    const currentTime = new Date().toLocaleString();

    const templateParams = {
      ...formData,
      time: currentTime,
    };

    emailjs
      .send(
        "service_bw2u5ze",
        "template_f2n2y5q",
        templateParams,
        "K-S9YZeukjUULp3IR"
      )
      .then(() => {
        setStatus("success");
        setFormData({
          name: "",
          email: "",
          phone: "",
          checkIn: "",
          checkOut: "",
          guests: "",
          roomType: "",
        });
      })
      .catch(() => setStatus("error"))
      .finally(() => {
        setShowModal(false);
      });
  };

  return (
    <main className="min-h-screen bg-[#F5F3EF] text-[#4B2E1D]">
      {/* Hero */}
      <section
        className="relative h-[85vh] bg-fixed bg-center bg-cover flex items-end justify-center pb-12 sm:pb-16 md:pb-20"
        style={{ backgroundImage: "url('/bg.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
        <motion.div
          className="relative z-10 text-center text-white px-4"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight drop-shadow-md pt-24">Book your stay</h1>
          <p className="mt-4 text-lg md:text-xl font-light">Your escape to luxury begins here.</p>
        </motion.div>
      </section>

      {/* Booking Form */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-semibold mb-10 text-center text-[#4B2E1D]">Plan Your Getaway</h2>
        
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white p-8 rounded-3xl shadow-xl"
        >
          {/* Full Name */}
          <div className="flex flex-col">
            <label htmlFor="name" className="mb-1 text-sm font-medium text-[#4B2E1D]">Full Name</label>
            <input
              type="text"
              id="name"
              required
              placeholder="John Doe"
              className="border border-gray-300 p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#B8860B]"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
          </div>

          {/* Email */}
          <div className="flex flex-col">
            <label htmlFor="email" className="mb-1 text-sm font-medium text-[#4B2E1D]">Email Address</label>
            <input
              type="email"
              id="email"
              required
              placeholder="example@email.com"
              className="border border-gray-300 p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#B8860B]"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>

          {/* Phone Number */}
          <div className="flex flex-col">
            <label htmlFor="phone" className="mb-1 text-sm font-medium text-[#4B2E1D]">Phone Number</label>
            <input
              type="tel"
              id="phone"
              required
              placeholder="+1 234 567 890"
              inputMode="tel"
              className="border border-gray-300 p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#B8860B]"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            />
          </div>

          {/* Number of Guests */}
          <div className="flex flex-col">
            <label htmlFor="guests" className="mb-1 text-sm font-medium text-[#4B2E1D]">Number of Guests</label>
            <input
              type="number"
              id="guests"
              min="1"
              required
              placeholder="e.g. 2"
              className="border border-gray-300 p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#B8860B]"
              value={formData.guests}
              onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
            />
          </div>

          {/* Check-In */}
          <div className="flex flex-col">
            <label htmlFor="checkIn" className="mb-1 text-sm font-medium text-[#4B2E1D]">Check-In Date</label>
            <input
              type="date"
              id="checkIn"
              required
              min={today}
              className="border border-gray-300 p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#B8860B]"
              value={formData.checkIn}
              onChange={(e) => setFormData({ ...formData, checkIn: e.target.value })}
            />
          </div>

          {/* Check-Out */}
          <div className="flex flex-col">
            <label htmlFor="checkOut" className="mb-1 text-sm font-medium text-[#4B2E1D]">Check-Out Date</label>
            <input
              type="date"
              id="checkOut"
              required
              min={formData.checkIn || today}
              className="border border-gray-300 p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#B8860B]"
              value={formData.checkOut}
              onChange={(e) => setFormData({ ...formData, checkOut: e.target.value })}
            />
          </div>

          {/* Room Type */}
          <div className="flex flex-col md:col-span-2">
            <label htmlFor="roomType" className="mb-1 text-sm font-medium text-[#4B2E1D]">Room Type</label>
            <select
              id="roomType"
              required
              className="border border-gray-300 p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#B8860B]"
              value={formData.roomType}
              onChange={(e) => setFormData({ ...formData, roomType: e.target.value })}
            >
              <option value="">Select Room Option</option>
              <option value="Double Room - Sunset Vista Deluxe - Villa Celestia">Double Room - Sunset Vista Deluxe - Villa Celestia</option>
              <option value="Triple Room - Horizon Retreat - Villa Celestia">Triple Room - Horizon Retreat - Villa Celestia</option>
              <option value="Family Room - Starlight Deluxe - Villa Celestia">Family Room - Starlight Deluxe - Villa Celestia</option>
              <option value="Double Room - Fern Grove Retreat - Villa Elanora">Double Room - Fern Grove Retreat - Villa Elanora</option>
              <option value="Triple Room - Canopy View Deluxe - Villa Elanora">Triple Room - Canopy View Deluxe - Villa Elanora</option>
              <option value="Family Room - Woodland Deluxe - Villa Elanora">Family Room - Woodland Deluxe - Villa Elanora</option>
              <option value="Double Room - Forest Hideaway Room - The Canopy House">Double Room - Forest Hideaway Room - The Canopy House</option>
              <option value="Triple Room - Garden View Room - The Canopy House">Triple Room - Garden View Room - The Canopy House</option>
              <option value="Family Room - Forest Corner Room - The Canopy House">Family Room - Forest Corner Room - The Canopy House</option>
              <option value="Entire Villa Celestia">Entire Villa Celestia</option>
              <option value="Entire Villa Elanora">Entire Villa Elanora</option>
            </select>
          </div>

          {/* Submit Button & Status */}
          <div className="md:col-span-2 text-center mt-6">
            <Button
              type="submit"
              className="bg-[#4B2E1D] text-white px-8 py-3 rounded-full hover:bg-[#3A2115] transition"
            >
              {status === "loading" ? "Sending..." : "Confirm Booking"}
            </Button>

            {status === "success" && (
              <p className="mt-4 text-green-600">Booking request sent successfully!</p>
            )}
            {status === "error" && (
              <p className="mt-4 text-red-600">Failed to send request. Please try again later.</p>
            )}
          </div>
        </form>
      </section>

      {/* Contact Info */}
      <section className="bg-[#EFE8DC] py-16">
        <div className="max-w-4xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
          <div>
            <h3 className="text-2xl font-semibold mb-2">Need Help?</h3>
            <p className="flex items-center justify-center md:justify-start gap-2"><Phone className="w-4" /> +94 77 997 8591</p>
            <p className="flex items-center justify-center md:justify-start gap-2"><Phone className="w-4" /> +94 71 801 6538</p>
            <p className="flex items-center justify-center md:justify-start gap-2"><Mail className="w-4" /> hello@sunsetforestvilla.lk</p>
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
      {/* Booking FAQ */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-semibold text-center mb-10 text-[#4B2E1D]">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            {/* FAQ Item */}
            <details className="border rounded-lg p-4 group open:shadow-md transition">
              <summary className="font-medium text-[#4B2E1D] cursor-pointer group-open:text-[#B8860B]">
                What is the check-in and check-out time?
              </summary>
              <p className="mt-2 text-gray-700">Check-in is from 2:00 PM and check-out is by 11:00 AM.</p>
            </details>

            <details className="border rounded-lg p-4 group open:shadow-md transition">
              <summary className="font-medium text-[#4B2E1D] cursor-pointer group-open:text-[#B8860B]">
                Can I cancel or modify my booking?
              </summary>
              <p className="mt-2 text-gray-700">Yes, bookings can be modified or canceled up to 48 hours before check-in without a fee.</p>
            </details>

            <details className="border rounded-lg p-4 group open:shadow-md transition">
              <summary className="font-medium text-[#4B2E1D] cursor-pointer group-open:text-[#B8860B]">
                Is breakfast included in the room price?
              </summary>
              <p className="mt-2 text-gray-700">Yes, breakfast is included for all room types unless specified otherwise.</p>
            </details>

            <details className="border rounded-lg p-4 group open:shadow-md transition">
              <summary className="font-medium text-[#4B2E1D] cursor-pointer group-open:text-[#B8860B]">
                Do you offer airport pickup?
              </summary>
              <p className="mt-2 text-gray-700">We do! Airport pickup can be arranged upon request at an additional cost.</p>
            </details>

            <details className="border rounded-lg p-4 group open:shadow-md transition">
              <summary className="font-medium text-[#4B2E1D] cursor-pointer group-open:text-[#B8860B]">
                Can I book the entire villa for private events?
              </summary>
              <p className="mt-2 text-gray-700">Absolutely. Select &quot;Entire Villa&quot; when booking or contact us directly for custom packages.</p>
            </details>
          </div>
        </div>
      </section>
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-xl p-6 max-w-lg w-full shadow-lg text-[#4B2E1D]">
            <h3 className="text-xl font-bold mb-4">Confirm Your Booking</h3>

            <div className="space-y-2 text-sm">
              <p><strong>Name:</strong> {formData.name}</p>
              <p><strong>Email:</strong> {formData.email}</p>
              <p><strong>Phone:</strong> {formData.phone}</p>
              <p><strong>Check-In:</strong> {formData.checkIn}</p>
              <p><strong>Check-Out:</strong> {formData.checkOut}</p>
              <p><strong>Guests:</strong> {formData.guests}</p>
              <p><strong>Room Type:</strong> {formData.roomType}</p>
            </div>

            <div className="mt-6 text-sm bg-yellow-100 border border-yellow-300 p-3 rounded">
              <ul className="list-disc pl-5 space-y-1">
                <li>Free cancellation only before 48 hours of check-in.</li>
                <li>Booking is confirmed only after an official email from the hotel.</li>
                <li>Please <strong>do not make any payments</strong> before confirmation.</li>
              </ul>
            </div>

            <div className="mt-6 flex justify-end space-x-4">
              <Button
                type="button"
                className="bg-gray-300 text-black hover:bg-gray-400"
                onClick={() => setShowModal(false)}
              >
                Cancel
              </Button>
              <Button
                type="button"
                className="bg-[#4B2E1D] text-white hover:bg-[#3A2115]"
                onClick={handleFinalSubmit}
              >
                Confirm & Send
              </Button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}