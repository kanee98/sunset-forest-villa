"use client";

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { useEffect } from "react";

type Review = {
  author_name: string;
  rating: number;
  text: string;
};

const reviews: Review[] = [
  {
    author_name: "Sanduni Perera",
    rating: 5,
    text: "Absolutely loved the peaceful atmosphere. A perfect getaway from the busy city life.",
  },
  {
    author_name: "Michael Thompson",
    rating: 5,
    text: "Exceptional hospitality and beautiful surroundings. Highly recommended for nature lovers!",
  },
  {
    author_name: "Nuwan Jayasuriya",
    rating: 4,
    text: "A cozy place with friendly staff. Will visit again with my family.",
  },
  {
    author_name: "Claire Dubois",
    rating: 5,
    text: "The villa exceeded our expectations. Everything was perfectly arranged.",
  },
  {
    author_name: "Harsha Fernando",
    rating: 4,
    text: "Great service and a calm environment. Food could be improved slightly.",
  },
  {
    author_name: "Emma Chen",
    rating: 5,
    text: "One of the best travel experiences I’ve had. Everything was just perfect.",
  },
  {
    author_name: "Isuru Madushan",
    rating: 5,
    text: "A hidden gem! Clean, quiet, and beautiful scenery all around.",
  },
  {
    author_name: "Laura Müller",
    rating: 5,
    text: "Wonderful place with amazing service. Definitely coming back!",
  },
  {
    author_name: "Dilani Samarasinghe",
    rating: 4,
    text: "Beautiful location and very well maintained. Great for short stays.",
  },
  {
    author_name: "David Green",
    rating: 5,
    text: "Top-notch experience. Impressed with the quality and friendliness of the staff.",
  },
];

export default function TestimonialCarousel() {
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    slides: { perView: 1, spacing: 16 },
    breakpoints: {
      "(min-width: 768px)": {
        slides: { perView: 2, spacing: 16 },
      },
      "(min-width: 1024px)": {
        slides: { perView: 3, spacing: 24 },
      },
    },
  });

  useEffect(() => {
    const timer = setInterval(() => {
      instanceRef.current?.next();
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-[#FCF8F3] py-24 px-6 sm:px-12 lg:px-32">
      <h2 className="text-3xl md:text-4xl font-bold text-[#4B2E1D] text-center mb-12">
        What Our Guests Say
      </h2>

      <div className="keen-slider" ref={sliderRef}>
        {reviews.map((review, index) => (
          <div key={index} className="keen-slider__slide px-4">
            <div className="bg-white border border-[#e3d9c8] p-6 rounded-xl shadow-lg h-full">
              <div className="mb-4">
                <p className="font-semibold text-[#4B2E1D]">{review.author_name}</p>
                <p className="text-sm text-yellow-500">
                  {"★".repeat(review.rating)}
                  {"☆".repeat(5 - review.rating)}
                </p>
              </div>
              <p className="text-[#4B2E1D]/80">{review.text}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center gap-4 mt-8">
        <button
          onClick={() => instanceRef.current?.prev()}
          className="bg-[#B8860B] text-white px-4 py-2 rounded hover:bg-[#a7770b]"
        >
          Prev
        </button>
        <button
          onClick={() => instanceRef.current?.next()}
          className="bg-[#B8860B] text-white px-4 py-2 rounded hover:bg-[#a7770b]"
        >
          Next
        </button>
      </div>
    </section>
  );
}