"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md p-4 md:px-10 flex justify-between items-center z-50">
      {/* Left side logo/name */}
      <div className="flex items-center">
        <a href="#home" className="font-bold text-xl text-blue-600 flex items-center">
          <span className="bg-blue-600 text-white p-2 rounded-full mr-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
              <circle cx="9" cy="7" r="4"></circle>
              <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
            </svg>
          </span>
          SureCorrect Aligners 
        </a>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-8 items-center">
        <a href="#home" className="text-gray-800 hover:text-blue-600 font-medium transition">Home</a>
        <a href="#about" className="text-gray-800 hover:text-blue-600 font-medium transition">About Us</a>
        <a href="#whyus" className="text-gray-800 hover:text-blue-600 font-medium transition">Why Us</a>
        <a href="#howitworks" className="text-gray-800 hover:text-blue-600 font-medium transition">How It Works</a>
        <a 
          href="#appointment" 
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition"
        >
          Book Appointment
        </a>
      </div>

      {/* Mobile Hamburger Button */}
      <button
        className="md:hidden text-gray-800"
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
      >
        {open ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Menu Dropdown */}
      {open && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-lg flex flex-col items-center gap-4 py-6 md:hidden border-t border-gray-100">
          <a 
            href="#home" 
            className="w-full text-center py-2 text-gray-800 hover:text-blue-600 font-medium transition"
            onClick={() => setOpen(false)}
          >
            Home
          </a>
          <a 
            href="#about" 
            className="w-full text-center py-2 text-gray-800 hover:text-blue-600 font-medium transition"
            onClick={() => setOpen(false)}
          >
            About Us
          </a>
          <a 
            href="#whyus" 
            className="w-full text-center py-2 text-gray-800 hover:text-blue-600 font-medium transition"
            onClick={() => setOpen(false)}
          >
            Why Us
          </a>
          <a 
            href="#howitworks" 
            className="w-full text-center py-2 text-gray-800 hover:text-blue-600 font-medium transition"
            onClick={() => setOpen(false)}
          >
            How It Works
          </a>
          <a 
            href="#appointment" 
            className="w-full text-center py-2 px-6 bg-blue-600 text-white rounded-lg font-medium mt-2 transition"
            onClick={() => setOpen(false)}
          >
            Book Appointment
          </a>
        </div>
      )}
    </nav>
  );
}