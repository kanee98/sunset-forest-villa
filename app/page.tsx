import Hero from "@/components/Hero";
import RoomShowcase from "@/components/RoomShowcase";
import BookingCTA from "@/components/BookingCTA";
import Welcome from "@/components/Welcome"
import Explore from "@/components/Explore"
import TestimonialCarousel from "@/components/TestimonialCarousel";
import Location from "@/components/Location"

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <Welcome />
        <Explore />
        <Location />
        <RoomShowcase />
        <TestimonialCarousel />
        <BookingCTA />
      </main>
    </>
  );
}