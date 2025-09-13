// Navbar.jsx
import { useState } from "react";
import {
  Bars3Icon,
  XMarkIcon,
  CurrencyDollarIcon,
} from "@heroicons/react/24/outline";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white text-gray-600 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Brand */}
        <div className="flex items-center text-2xl font-bold text-violet-500">
          <CurrencyDollarIcon className="h-10 w-10 text-violet-500" />
          Cryptera
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8 items-center">
          <a href="#hero" className="hover:text-violet-500 transition">
            Home
          </a>
          <a href="#About" className="hover:text-violet-500 transition">
            About
          </a>
          <a href="#Learn" className="hover:text-violet-500 transition">
            Learn
          </a>
          <a href="#Invest" className="hover:text-violet-500 transition">
            Invest
          </a>
          <a href="#Contact" className="hover:text-violet-500 transition">
            Contact
          </a>
          <button className="bg-violet-500 text-white px-4 py-2 rounded hover:bg-violet-600 transition">
            Get Started
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-800 px-6 py-4 space-y-4">
          <a href="#hero" className="block hover:text-violet-500 transition">
            Home
          </a>
          <a
            href="#features"
            className="block hover:text-violet-500 transition"
          >
            Features
          </a>
          <a
            href="#testimonials"
            className="block hover:text-violet-500 transition"
          >
            Testimonials
          </a>
          <a href="#pricing" className="block hover:text-violet-500 transition">
            Pricing
          </a>
          <button className="w-full bg-violet-500 text-white px-4 py-2 rounded hover:bg-violet-600 transition">
            Get Started
          </button>
        </div>
      )}
    </nav>
  );
}
