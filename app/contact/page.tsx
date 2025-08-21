"use client";

import { useEffect, useState } from "react";
import { Mail, Phone, MapPin, CheckCircle, XCircle } from "lucide-react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";

export default function ContactPage() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://weatherwidget.io/js/widget.min.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "success" | "error" | "loading">("idle");

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    const currentTime = new Date().toLocaleString();

    const templateParams = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      message: formData.message,
      time: currentTime,
    };

    try {
      await emailjs.send(
        "service_bw2u5ze",
        "template_h4hwyuk",
        templateParams,
        "K-S9YZeukjUULp3IR"
      );
      setFormData({ name: "", email: "", phone: "", message: "" });
      setStatus("success");
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  return (
    <>
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
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight drop-shadow-md">
            Get in Touch with Us
          </h1>
          <p className="mt-4 text-lg md:text-xl font-light">
            Your escape to luxury begins here.
          </p>
        </motion.div>
      </section>

      <main className="bg-[#FCF8F3] py-24 px-6 sm:px-12 lg:px-32">
        <div className="bg-white/80 border border-[#e3d9c8] rounded-xl shadow-lg p-6 backdrop-blur-sm mb-10">
          <h3 className="text-xl font-semibold text-[#4B2E1D] mb-2">Current Weather</h3>
          <a
            className="weatherwidget-io"
            href="https://forecast7.com/en/7d2980d63/kandy/"
            data-label_1="KANDY"
            data-label_2="WEATHER"
            data-theme="pure"
            data-basecolor="#ffffff"
            data-accent="#4B2E1D"
            data-textcolor="#B8860B"
          >
            KANDY WEATHER
          </a>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="bg-white border border-[#e3d9c8] shadow-lg rounded-2xl p-8 space-y-6 space-y-10">
            <div>
              <h2 className="text-3xl font-semibold text-[#4B2E1D] mb-4">Contact Information</h2>
              <p className="text-[#4B2E1D]/80 mb-6">
                Reach out for booking inquiries, special requests, or anything else we can help with.
              </p>
              <div className="space-y-4 text-[#4B2E1D] text-lg">
                <div className="flex items-center gap-3">
                  <Phone className="text-[#B8860B]" />
                  <span>+94 77 997 8591</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="text-[#B8860B]" />
                  <span>hello@sunsetforestvilla.lk</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="text-[#B8860B]" />
                  <span>Sunset Forest Villa,<br />Wagolla Road, Aruppola,<br />Kandy, Sri Lanka</span>
                </div>
              </div>
            </div>

            <section className="pb-24">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-semibold text-[#4B2E1D] mb-8 text-left">Frequently Asked Questions</h2>
                <div className="space-y-4">
                  {[{
                    question: "What are the check-in and check-out times?",
                    answer: "Check-in starts at 2:00 PM and check-out is by 11:00 AM."
                  },{
                    question: "Do you have WiFi and kitchen access",
                    answer: "Yes, we provide free high-speed Wi-Fi and a fully equipped kitchen for self-cooking."
                  },{
                    question: "Can we book the whole villa for a group?",
                    answer: "Absolutely! The Three-Bedroom Villa is perfect for group stays up to 10 guests."
                  },{
                    question: "Do you offer airport transfers?",
                    answer: "Yes, we can arrange airport transfers upon request. Additional charges may apply."
                  },{
                    question: "Are pets allowed at the villa?",
                    answer: "Unfortunately, pets are not allowed in our villa premises."
                  },{
                    question: "How can I modify or cancel my booking?",
                    answer: "Please reach out to us via phone or email at least 48 hours in advance to modify or cancel bookings."
                  }].map(({ question, answer }, idx) => (
                    <details key={idx} className="border border-[#e3d9c8] bg-white rounded-md p-4">
                      <summary className="cursor-pointer font-medium text-[#4B2E1D] text-lg">{question}</summary>
                      <p className="mt-2 text-[#4B2E1D]/80">{answer}</p>
                    </details>
                  ))}
                </div>
              </div>
            </section>
          </div>

          {/* Contact Form */}
          <form onSubmit={sendEmail} className="bg-white border border-[#e3d9c8] shadow-lg rounded-2xl p-8 space-y-6">
            <h2 className="text-2xl font-semibold text-[#4B2E1D]">Send a Message</h2>
            <div className="flex flex-col gap-4">
              <div>
                <label htmlFor="name" className="block text-sm text-[#4B2E1D] mb-1">Full Name</label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-[#B8860B] outline-none"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm text-[#4B2E1D] mb-1">
                  Phone Number
                </label>
                <input
                  type="text"
                  id="phone"
                  required
                  value={formData.phone}
                  onChange={(e) => {
                    const onlyNumbers = e.target.value.replace(/\D/g, ""); // remove non-digits
                    setFormData({ ...formData, phone: onlyNumbers });
                  }}
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-[#B8860B] outline-none"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm text-[#4B2E1D] mb-1">Email Address</label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-[#B8860B] outline-none"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm text-[#4B2E1D] mb-1">Your Message</label>
                <textarea
                  id="message"
                  rows={5}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-[#B8860B] outline-none"
                ></textarea>
              </div>
            </div>
            <button
              type="submit"
              disabled={status === "loading"}
              className="bg-[#B8860B] text-white font-medium px-6 py-3 rounded-md hover:bg-[#a87708] transition duration-300"
            >
              {status === "loading" ? "Sending..." : "Send Message"}
            </button>

            {status === "success" && (
              <div className="flex items-center gap-2 mt-4 text-green-600">
                <CheckCircle className="w-5 h-5" />
                Message sent successfully!
              </div>
            )}

            {status === "error" && (
              <div className="flex items-center gap-2 mt-4 text-red-600">
                <XCircle className="w-5 h-5" />
                Failed to send message. Please try again later.
              </div>
            )}
          </form>
        </div>
      </main>
    </>
  );
}