"use client"
import { useState } from "react";

export default function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      {/* Hamburger Button */}
      <button
        className="flex flex-col items-center justify-center w-12 h-12 bg-gray-800 text-white rounded-full focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div
          className={`h-1 w-8 bg-white rounded transition-transform duration-300 ${
            isOpen ? "transform rotate-45 translate-y-2.5" : ""
          }`}
        ></div>
        <div
          className={`h-1 w-8 bg-white rounded transition-opacity duration-300 ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
        ></div>
        <div
          className={`h-1 w-8 bg-white rounded transition-transform duration-300 ${
            isOpen ? "transform -rotate-45 -translate-y-2.5" : ""
          }`}
        ></div>
      </button>

      {/* Menu */}
      <div
        className={`absolute top-14 right-0 bg-gray-800 text-white rounded-lg shadow-lg p-5 transform transition-transform duration-300 ${
          isOpen ? "translate-y-0 opacity-100" : "-translate-y-5 opacity-0"
        }`}
      >
        <ul className="space-y-3">
          {["Home", "New & Featured", "Men", "Women", "Kids", "Sales", "SNKRS"].map(
            (item, index) => (
              <li
                key={index}
                className="hover:bg-gray-700 px-4 py-2 rounded-lg cursor-pointer text-lg font-medium"
              >
                {item}
              </li>
            )
          )}
        </ul>
      </div>
    </div>
  );
}