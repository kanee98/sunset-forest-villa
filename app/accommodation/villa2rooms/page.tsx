"use client";

import {useState } from "react";
import Image from "next/image";
import SphereViewer from "@/components/PhotoSphereViewer";
import Link from "next/link";

const roomImages = [
  "/rooms/V2/1.webp",
  "/rooms/V2/2.webp",
  "/rooms/V2/3.webp",
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
          Welcome to The Villa Elanora 
        </h1>
      </section>

      <section className="bg-[#0f172a] px-6 sm:px-12 lg:px-32">
        {/* Main Content */}
        <main className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 pt-16 pb-32 space-y-24">

          {/* Image Gallery */}
          <section>
            <h2 className="text-3xl font-bold text-[#F7E9D7] mb-8 border-b-4 border-[#B8860B] inline-block pb-2">
              Villa Gallery
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
              Explore the Villa Kitchen and Pantry
            </h2>
            <SphereViewer src="/rooms/V2/pano.jpg" />
          </section>

           {/* Villa Elanora */}
          <section className="max-w-4xl mx-auto text-[#F7E9D7] space-y-6">
            <h2 className="text-3xl font-bold border-b-4 border-[#B8860B] inline-block pb-2">
              Villa Elanora
            </h2>
            <p className="text-lg leading-relaxed">
              A sanctuary of calm and rustic elegance, Villa Elanora brings together earthy design, forest views, and warm hospitality. Each of its three unique rooms embraces natural textures and comfort, offering guests a memorable stay surrounded by tranquility.
            </p>
            <ul className="list-disc list-inside space-y-2 text-[#F7E9D7]">
              <li>Can accomodate 9 pax</li>
              <li>2x Family Rooms with shared bathroom ideal for families with kids</li>
              <li>Private roof top access</li>
              <li>Balconies facing the forest</li>
              <li>BBQ machine on request</li>
              <li>TV lounge area for socializing activities</li>
              <li>Access to the kitchen</li>
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