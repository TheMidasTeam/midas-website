"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [hasScrolled, setHasScrolled] = useState(false);
  const timeoutId = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        // If the user is at the top, keep the nav bar visible
        setIsNavVisible(true);
        setHasScrolled(false);
        if (timeoutId.current) clearTimeout(timeoutId.current);
        return;
      }

      // User started scrolling, set hasScrolled to true
      if (!hasScrolled) setHasScrolled(true);

      if (window.scrollY > lastScrollY) {
        setIsNavVisible(false); // Hide when scrolling down
      } else {
        setIsNavVisible(true); // Show when scrolling up
      }
      setLastScrollY(window.scrollY);

      // Start inactivity timeout only after scrolling begins
      if (hasScrolled) {
        if (timeoutId.current) clearTimeout(timeoutId.current);
        timeoutId.current = setTimeout(() => setIsNavVisible(false), 3000); // Hide after 3s of inactivity
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (timeoutId.current) clearTimeout(timeoutId.current);
    };
  }, [lastScrollY, hasScrolled]);

  return (
    <>
      {/* Static Logo & Contact Button (DOES NOT SCROLL) */}
      <div className="w-full flex justify-between items-center px-6 py-4 max-w-screen-2xl mx-auto">
        {/* Logo */}
        <Link href="/">
          <Image src="/logo.png" alt="Logo" width={40} height={40} className="cursor-pointer" priority />
        </Link>

        {/* Contact Us Button */}
        <Link href="#contact">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition">
            Contact Us
          </button>
        </Link>
      </div>

      {/* Floating Navigation Bar (ONLY hides after scrolling & inactivity) */}
      <nav
        className={`fixed top-6 left-1/2 transform -translate-x-1/2 transition-all duration-300 ${
          isNavVisible ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"
        } bg-gray-900 text-white rounded-full px-6 py-3 shadow-lg z-40`}
      >
        <div className="flex space-x-6">
          <Link href="#services" className="hover:text-gray-300 transition">
            Services
          </Link>
          <Link href="#portfolio" className="hover:text-gray-300 transition">
            Portfolio
          </Link>
          <Link href="#reviews" className="hover:text-gray-300 transition">
            Reviews
          </Link>
          <Link href="#faqs" className="hover:text-gray-300 transition">
            FAQs
          </Link>
        </div>
      </nav>
    </>
  );
}






