"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { motion } from "framer-motion";

const teamMembers = [
  {
    name: "Ravi Perera",
    role: "General Manager",
    img: "/bg.jpg",
    bio: "Bringing 15+ years of expertise, Ravi blends hospitality excellence with Kandyan tradition.",
  },
  {
    name: "Nisha Fernando",
    role: "Guest Relations",
    img: "/bg2.jpg",
    bio: "Expert in personalized guest service ensuring memorable stays.",
  },
  {
    name: "Suneth Perera",
    role: "Operations Manager",
    img: "/bg3.jpg",
    bio: "Mastermind behind smooth operations and authentic experiences.",
  },
];

const galleryImages = [
  "/gallery/bg.jpg",
  "/gallery/bg2.jpg",
  "/gallery/bg3.jpg",
  "/gallery/room1.jpg",
  "/gallery/room2.jpg",
  "/gallery/room3.jpg",
];

export default function AboutPage() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section
        className="relative h-[85vh] bg-fixed bg-center bg-cover flex items-center justify-center"
        style={{ backgroundImage: "url('/bg.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
        <motion.div
          className="relative z-10 px-6 text-center max-w-4xl"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          <h1 className="text-white text-5xl md:text-7xl font-extrabold drop-shadow-lg font-serif">
            About Sunset Forest Villa
          </h1>
          <p className="mt-6 text-lg md:text-xl font-light text-white/90 max-w-3xl mx-auto">
            Experience the perfect blend of Kandyan heritage, luxury, and nature’s tranquility.
          </p>
        </motion.div>
      </section>

      {/* Main Content */}
      <main className="bg-[#FCF8F3] py-24 px-6 sm:px-12 lg:px-32 space-y-32 max-w-[1400px] mx-auto">

        {/* Our Story */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-4xl font-bold text-[#4B2E1D] mb-6 border-b-4 border-[#B8860B] inline-block pb-1">
              Our Story
            </h2>
            <p className="text-[#5C4433] text-lg leading-relaxed">
              Sunset Forest Villa was born from a vision to combine the rich Kandyan heritage with the tranquility of nature. Nestled in the heart of Sri Lanka’s hill country, we offer guests an authentic experience blending culture, luxury, and sustainability.
            </p>
          </motion.div>
          <motion.div
            className="rounded-lg overflow-hidden shadow-2xl"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <Image
              src="/bg2.jpg"
              alt="About Our Story"
              width={600}
              height={400}
              className="object-cover w-full h-full"
              priority
            />
          </motion.div>
        </section>

        {/* Vision & Mission */}
        <section className="bg-[#F7E9D7] rounded-3xl p-14 shadow-xl max-w-4xl mx-auto text-center space-y-10">
          <h2 className="text-4xl font-bold text-[#4B2E1D] border-b-4 border-[#B8860B] inline-block pb-1 mx-auto">
            Vision & Mission
          </h2>
          <div className="flex flex-col md:flex-row md:justify-center md:space-x-24 space-y-10 md:space-y-0 text-[#5C4433] text-lg max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className=""
            >
              <h3 className="font-semibold text-xl mb-2">Our Vision</h3>
              <p>
                To be the premier destination where cultural heritage and sustainable luxury unite to create memorable experiences.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              className=""
            >
              <h3 className="font-semibold text-xl mb-2">Our Mission</h3>
              <p>
                Deliver exceptional hospitality inspired by Kandyan traditions and natural beauty, with personalized service and care.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Team Section */}
        <section>
          <h2 className="text-4xl font-bold text-[#4B2E1D] mb-14 border-b-4 border-[#B8860B] pb-2 text-center">
            Meet Our Team
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
            {teamMembers.map(({ name, role, img, bio }) => (
              <motion.div
                key={name}
                className="flex flex-col items-center text-center space-y-5 place-items-center bg-white rounded-2xl p-6 shadow-lg border border-[#D4AF37]"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="relative w-48 h-48 rounded-full overflow-hidden shadow-lg border-4 border-[#D4AF37]">
                  <Image
                    src={img}
                    alt={name}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <h3 className="text-xl font-semibold text-[#4B2E1D]">{name}</h3>
                <p className="italic text-[#5C4433]">{role}</p>
                <p className="max-w-xs text-[#5C4433]">{bio}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Gallery Section */}
        <section>
          <h2 className="text-4xl font-bold text-[#4B2E1D] mb-14 border-b-4 border-[#B8860B] pb-2 text-center">
            Gallery
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {galleryImages.map((src) => (
              <motion.div
                key={src}
                className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer hover:scale-105 transition-transform duration-300"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <Image
                  src={src}
                  alt="Gallery image"
                  width={400}
                  height={300}
                  className="object-cover w-full h-full"
                  loading="lazy"
                />
              </motion.div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
