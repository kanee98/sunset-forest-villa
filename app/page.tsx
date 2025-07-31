import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import RoomShowcase from "@/components/RoomShowcase";
import BookingCTA from "@/components/BookingCTA";
import Welcome from "@/components/Welcome"
import Explore from "@/components/Explore"
import TestimonialCarousel from "@/components/TestimonialCarousel";
import Location from "@/components/Location"
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Welcome />
        <Explore />
        <Location />
        <RoomShowcase />
        <TestimonialCarousel />
        <BookingCTA />
      </main>
      <Footer />
    </>
  );
}