"use client";

import {useState } from "react";
import Image from "next/image";
import SphereViewer from "@/components/PhotoSphereViewer";
import Link from "next/link";

const roomImages = [
  "/rooms/HR3/1.webp",
  "/rooms/HR3/2.webp",
  "/rooms/HR3/3.webp",
  "/rooms/HR3/4.webp",
];

export default function SingleRoom() {
  const [selectedImage, setSelectedImage] = useState(roomImages[0]);

  return (
    <> 
      {/* Hero Banner */}
      <section
        className="relative h-[60vh] md:h-[70vh] flex items-end justify-center bg-cover bg-center pb-12 md:pb-16"
        style={{ backgroundImage: `url(${selectedImage})` }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <h1 className="relative text-white text-4xl md:text-6xl font-serif font-extrabold drop-shadow-lg max-w-4xl px-6 text-center pt-36">
          Forest Corner Room
        </h1>
      </section>

      <section className="bg-[#0f172a] px-6 sm:px-12 lg:px-32">
        {/* Main Content */}
        <main className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 pt-16 pb-32 space-y-24">

          {/* Image Gallery */}
          <section>
            <h2 className="text-3xl font-bold text-[#F7E9D7] mb-8 border-b-4 border-[#B8860B] inline-block pb-2">
              Room Gallery
            </h2>
            <section className="relative h-[30vh] sm:h-[50vh] md:h-[70vh] w-full overflow-hidden">
            <Image
                src={selectedImage}
                alt="Selected room"
                fill
                className="object-contain sm:object-cover"
                priority
            />
            </section>
            <div className="flex gap-4 overflow-x-auto no-scrollbar py-4 min-h-[8rem] sm:min-h-[8rem]">
            {roomImages.map((img) => (
                <div
                key={img}
                className={`relative w-40 h-28 min-w-[10rem] rounded-lg overflow-hidden cursor-pointer border-4 ${
                    selectedImage === img ? "border-[#B8860B]" : "border-transparent"
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

          {/* 360° Virtual Room Viewer */}
          <section>
            <h2 className="text-3xl font-bold text-[#F7E9D7] mb-8 border-b-4 border-[#B8860B] inline-block pb-2">
              Explore the Room
            </h2>
            <SphereViewer src="/rooms/HR3/pano.jpg" />
          </section>

          {/* Room 2 – Forest Corner Room */}
          <section className="max-w-4xl mx-auto text-[#F7E9D7] space-y-6 mt-12">
            <h2 className="text-3xl font-bold border-b-4 border-[#B8860B] inline-block pb-2">
              Forest Corner Room
            </h2>
            <p className="text-lg leading-relaxed">
              Nestled in a quiet corner with views of the forest canopy, this room offers a cozy single bed and shares a bathroom with Room 3. Ideal for solo travelers or friends traveling together.
            </p>
            <ul className="list-disc list-inside space-y-2 text-[#F7E9D7]">
              <li>Single bed with soft linens</li>
              <li>Shared bathroom with Forest Hideaway Room</li>
              <li>Complimentary high-speed Wi-Fi</li>
              <li>Access to shared kitchen</li>
              <li>Ceiling fan for comfort</li>
            </ul>
            <Link href="/book-now">
              <button className="mt-6 bg-[#B8860B] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#a87708] transition">
                Book Now
              </button>
            </Link>
          </section>
        </main>
      </section>
    </>
  );
}