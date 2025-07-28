"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function AboutPage() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section
        className="relative h-[60vh] md:h-[70vh] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('/bg.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <h1 className="relative text-white text-4xl sm:text-5xl md:text-6xl font-serif font-extrabold drop-shadow-lg max-w-4xl px-6 text-center">
          About Sunset Forest Villa
        </h1>
      </section>

      <main className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 pt-[90px] pb-24 space-y-32">

        {/* Our Story & Image */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold text-[#4B2E1D] mb-6 border-b-4 border-[#B8860B] inline-block pb-1">
              Our Story
            </h2>
            <p className="text-[#5C4433] text-lg leading-relaxed">
              Sunset Forest Villa was born from a vision to combine the rich Kandyan heritage with the tranquility of nature. Nestled in the heart of Sri Lanka’s hill country, we offer guests an authentic experience blending culture, luxury, and sustainability.
            </p>
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/bg2.jpg"
              alt="About Our Story"
              width={600}
              height={400}
              className="object-cover w-full h-full"
              priority
            />
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="bg-[#F7E9D7] rounded-3xl p-12 shadow-xl max-w-5xl mx-auto text-center space-y-8">
          <h2 className="text-4xl font-bold text-[#4B2E1D] border-b-4 border-[#B8860B] inline-block pb-1 mx-auto">
            Vision & Mission
          </h2>

          <div className="flex flex-col md:flex-row md:justify-center md:space-x-20 space-y-10 md:space-y-0 text-[#5C4433] text-lg max-w-4xl mx-auto">
            <div>
              <h3 className="font-semibold text-xl mb-2">Our Vision</h3>
              <p>
                To be the premier destination where cultural heritage and sustainable luxury unite to create memorable experiences.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-xl mb-2">Our Mission</h3>
              <p>
                Deliver exceptional hospitality inspired by Kandyan traditions and natural beauty, with personalized service and care.
              </p>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section>
          <h2 className="text-4xl font-bold text-[#4B2E1D] mb-10 border-b-4 border-[#B8860B] inline-block pb-1">
            Meet Our Team
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
            {/* Manager */}
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="w-48 h-48 rounded-full overflow-hidden shadow-lg border-4 border-[#D4AF37]">
                <Image
                  src="/bg.jpg"
                  alt="Suneth Perera"
                  width={192}
                  height={192}
                  className="object-cover"
                  priority
                />
              </div>
              <h3 className="text-xl font-semibold text-[#4B2E1D]">Suneth Perera</h3>
              <p className="italic text-[#5C4433]">General Manager</p>
              <p className="max-w-xs text-[#5C4433]">
                Bringing 15+ years of expertise, Suneth blends hospitality excellence with Kandyan tradition.
              </p>
            </div>

            {/* Add more team members similarly if needed */}
          </div>
        </section>

        {/* Image Gallery */}
        <section>
          <h2 className="text-4xl font-bold text-[#4B2E1D] mb-10 border-b-4 border-[#B8860B] inline-block pb-1 text-center">
            Gallery
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              "/gallery/bg.jpg",
              "/gallery/bg2.jpg",
              "/gallery/bg3.jpg",
              "/gallery/room1.jpg",
              "/gallery/room2.jpg",
              "/gallery/room3.jpg",
            ].map((src) => (
              <div
                key={src}
                className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer hover:scale-105 transition-transform duration-300"
              >
                <Image
                  src={src}
                  alt="Gallery image"
                  width={400}
                  height={300}
                  className="object-cover w-full h-full"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
