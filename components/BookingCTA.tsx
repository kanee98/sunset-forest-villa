"use client";
export default function BookingCTA() {
  return (
    <section id="book" className="bg-accent text-primary py-20 text-center">
      <h2 className="text-4xl font-bold">Ready for your escape?</h2>
      <p className="mt-4 text-lg">Book your stay now and experience tranquility.</p>
      <a
        href="#"
        className="inline-block mt-6 px-8 py-4 bg-primary text-accent font-bold rounded-xl hover:bg-white hover:text-primary transition"
      >
        Reserve Your Room
      </a>
    </section>
  );
}