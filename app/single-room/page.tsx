"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import React360Viewer from "react-360-view";

const roomImages = [
  "/rooms/single-room1.jpg",
  "/rooms/single-room2.jpg",
  "/rooms/single-room3.jpg",
  "/rooms/single-room4.jpg",
];

export default function SingleRoom() {
  const [selectedImage, setSelectedImage] = useState(roomImages[0]);

  return (
    <>
      <Navbar />

      {/* Hero Banner */}
      <section
        className="relative h-[60vh] md:h-[70vh] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${selectedImage})` }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <h1 className="relative text-white text-4xl md:text-6xl font-serif font-extrabold drop-shadow-lg max-w-4xl px-6 text-center pt-12">
          Single Room
        </h1>
      </section>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 pt-16 pb-32 space-y-24">

        {/* Image Gallery */}
        <section>
          <h2 className="text-3xl font-bold text-[#F7E9D7] mb-8 border-b-4 border-[#B8860B] inline-block pb-2">
            Room Gallery
          </h2>
          <div className="flex gap-6 overflow-x-auto no-scrollbar py-2">
            {roomImages.map((img) => (
              <div
                key={img}
                className={`relative w-48 h-32 rounded-lg overflow-hidden cursor-pointer border-4 ${
                  selectedImage === img
                    ? "border-[#B8860B]"
                    : "border-transparent"
                } shadow-md hover:shadow-lg transition`}
                onClick={() => setSelectedImage(img)}
              >
                <Image
                  src={img}
                  alt="Room image"
                  fill
                  className="object-cover"
                  loading="lazy"
                  draggable={false}
                />
              </div>
            ))}
          </div>
        </section>

        {/* 360° Panorama Viewer */}
        {/* <section>
          <h2 className="text-3xl font-bold text-[#4B2E1D] mb-8 border-b-4 border-[#B8860B] inline-block pb-2">
            Explore in 360°
          </h2>

          <div className="max-w-4xl mx-auto rounded-xl overflow-hidden shadow-xl border border-[#D4AF37]">
            <React360Viewer
              amount={36} // total frames in 360 sequence
              imagePath="/360/single-room/" // folder path containing images named 1.jpg, 2.jpg, ... 36.jpg
              fileName="single-room-{index}.jpg" // pattern, {index} replaced by frame number
              autoplay={true}
              loop={true}
              width={800}
              height={450}
            />
          </div>
        </section> */}

        {/* Room Details */}
        <section className="max-w-4xl mx-auto text-[#F7E9D7] space-y-6">
          <h2 className="text-3xl font-bold border-b-4 border-[#B8860B] inline-block pb-2">
            Room Details
          </h2>
          <p className="text-lg leading-relaxed">
            Our cozy Single Room offers guests a perfect blend of comfort and traditional Kandyan aesthetics. Featuring a queen-sized bed, private balcony with stunning forest views, and modern amenities including air conditioning, Wi-Fi, and en-suite bathroom.
          </p>
          <ul className="list-disc list-inside space-y-2 text-[#F7E9D7]">
            <li>Queen-sized bed with premium linens</li>
            <li>Private balcony overlooking the gardens</li>
            <li>Complimentary high-speed Wi-Fi</li>
            <li>Air conditioning and ceiling fan</li>
            <li>En-suite bathroom with hot water</li>
            <li>Tea & coffee making facilities</li>
          </ul>
          <button className="mt-6 bg-[#B8860B] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#a87708] transition">
            Book Now
          </button>
        </section>
      </main>

      <Footer />
    </>
  );
}