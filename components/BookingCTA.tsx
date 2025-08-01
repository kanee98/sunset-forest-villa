"use client";
import Image from "next/image";

export default function BookingCTA() {
  return (
    <section className="relative bg-gradient-to-br from-[#F7E9D7] to-[#E8C89C] py-24 px-6 text-center overflow-hidden" id="book">

      {/* Decorative Kandyan Banner Art image */}
      <div className="absolute inset-0 flex justify-center items-center opacity-10 z-0">
        <Image
          src="/banner-art.png"
          alt="Banner Art"
          fill
          quality={100}
          className="object-cover pointer-events-none"
          priority
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-3xl mx-auto text-[#4B2E1D]">
        <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4 font-serif">
          Your Serene Getaway Awaits
        </h2>
        <p className="text-lg sm:text-xl">
          Reconnect with nature, unwind in comfort, and make memories that last a lifetime.
        </p>
        <a
          href="/book-now"
          className="inline-block mt-8 px-10 py-4 bg-white text-[#3E2C24] font-semibold text-lg rounded-full shadow-lg hover:bg-[#f3e5dc] transition-all duration-300"
        >
          Reserve Your Escape
        </a>
      </div>
    </section>
  );
}
