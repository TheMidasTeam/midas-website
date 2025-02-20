"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const lastActivityTimestamp = useRef(Date.now());
  const animationFrameId = useRef<number | null>(null);

  useEffect(() => {
    const checkInactivity = () => {
      if (Date.now() - lastActivityTimestamp.current > 3000 && window.scrollY > 0 && !isHovered) {
        setIsNavVisible(false);
      } else {
        animationFrameId.current = requestAnimationFrame(checkInactivity);
      }
    };

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      lastActivityTimestamp.current = Date.now(); // Reset activity timer

      if (currentScrollY === 0) {
        setIsNavVisible(true);
        setHasScrolled(false);
        return;
      }

      if (!hasScrolled) setHasScrolled(true);

      if (currentScrollY > lastScrollY) {
        // Scrolling down → Hide navbar
        setIsNavVisible(false);
      } else {
        // Scrolling up → Show navbar and start inactivity check
        setIsNavVisible(true);
        if (animationFrameId.current) cancelAnimationFrame(animationFrameId.current);
        animationFrameId.current = requestAnimationFrame(checkInactivity);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    animationFrameId.current = requestAnimationFrame(checkInactivity);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (animationFrameId.current) cancelAnimationFrame(animationFrameId.current);
    };
  }, [lastScrollY, hasScrolled, isHovered]);

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

      {/* Floating Navigation Bar */}
      <nav
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => {
          setIsHovered(false);
          lastActivityTimestamp.current = Date.now(); // Restart inactivity timer on leave
        }}
        className={`fixed top-6 left-1/2 transform -translate-x-1/2 transition-all duration-300 ${
          isNavVisible ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"
        } bg-gray-900 text-white rounded-full px-6 py-3 shadow-lg z-40`}
      >
        <div className="flex space-x-6">
          <Link href="#OfferingCards" className="hover:text-gray-300 transition">
            Services
          </Link>
          <Link href="#PastWork" className="hover:text-gray-300 transition">
            Portfolio
          </Link>
          <Link href="#Reviews" className="hover:text-gray-300 transition">
            Reviews
          </Link>
          <Link href="#FAQs" className="hover:text-gray-300 transition">
            FAQs
          </Link>
        </div>
      </nav>
    </>
  );
}













