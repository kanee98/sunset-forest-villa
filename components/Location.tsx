"use client";

import React from "react";

export default function Location() {
  return (
    <section className="relative z-20 py-20 bg-[#0a192f] text-white">
      {/* Decorative overlay for Kandyan luxury feel */}
      <div
        className="absolute inset-0 pointer-events-none z-10"
        style={{
          background: `
            linear-gradient(to right, rgba(10, 25, 47, 0.85) 0%, rgba(32, 45, 70, 0.4) 25%, rgba(255, 215, 0, 0.0) 50%, rgba(32, 45, 70, 0.2) 75%, rgba(10, 25, 47, 0.4) 100%),
            linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0))
          `,
          mixBlendMode: "normal",
        }}
      />

      <div className="container mx-auto px-6 text-center max-w-4xl relative z-20">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-wide drop-shadow-xl">
          Our Location
        </h2>
        <p className="text-lg md:text-xl mb-10 text-gray-300">
          Nestled in the heart of the hill capital, Sunset Forest Villa offers a tranquil getaway surrounded by nature and Kandyan heritage.
        </p>

        <div className="w-full aspect-video overflow-hidden rounded-2xl shadow-lg border border-white/10">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d989.3607567408986!2d80.64670613787364!3d7.304021401861914!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae367b8214460ad%3A0x9a441af40a47485a!2sSunset%20Forest%20Villa!5e0!3m2!1sen!2slk!4v1753709646869!5m2!1sen!2slk"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full"
          ></iframe>
        </div>
      </div>
    </section>
  );
}