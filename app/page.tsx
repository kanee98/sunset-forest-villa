import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import RoomShowcase from "@/components/RoomShowcase";
import BookingCTA from "@/components/BookingCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <RoomShowcase />
        <BookingCTA />
      </main>
      <Footer />
    </>
  );
}