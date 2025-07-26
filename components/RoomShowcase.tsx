"use client";
const rooms = [
  {
    title: "Forest View Suite",
    price: "$199",
    img: "/room1.jpg",
  },
  {
    title: "Skyline Deluxe",
    price: "$249",
    img: "/room2.jpg",
  },
  {
    title: "Eco Bungalow",
    price: "$179",
    img: "/room3.jpg",
  },
];

export default function RoomShowcase() {
  return (
    <section id="rooms" className="py-20 px-6 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-white mb-10 text-center">Our Rooms</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {rooms.map((room, i) => (
          <div key={i} className="bg-white text-primary rounded-xl overflow-hidden shadow-lg hover:scale-105 transition">
            <img src={room.img} alt={room.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="font-semibold text-lg">{room.title}</h3>
              <p className="text-sm text-gray-600">{room.price} / night</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}