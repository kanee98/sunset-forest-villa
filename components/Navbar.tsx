"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-primary bg-opacity-90 backdrop-blur-md shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center text-white">
        <Link href="/" className="text-2xl font-bold text-accent">
          Sunset Forest Villa
        </Link>
        <div className="space-x-6">
          <Link href="#rooms" className="hover:text-accent">Rooms</Link>
          <Link href="#book" className="hover:text-accent">Book</Link>
          <Link href="#contact" className="hover:text-accent">Contact</Link>
        </div>
      </div>
    </nav>
  );
}