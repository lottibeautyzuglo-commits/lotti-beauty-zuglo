"use client";

import Link from "next/link";
import { useState } from "react";
import AnimatedLogo from "./AnimatedLogo";
import { FRESHA_BOOKING_URL } from "../lib/constants";

const navLinks = [
  { href: "/", label: "Főoldal" },
  { href: "/rolam", label: "Rólam" },
  { href: "/arak", label: "Árak" },
  { href: "/galeria", label: "Galéria" },
  { href: "/gyik", label: "GYIK" },
  { href: "/szabalyzat", label: "Szabályzat" },
  { href: "/kapcsolat", label: "Kapcsolat" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-cream/95 backdrop-blur-sm shadow-sm">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-4 md:px-8 py-4 md:py-5">
        <Link href="/" className="flex flex-col items-center leading-none text-charcoal">
          <div className="w-[280px] max-w-full">
            <AnimatedLogo />
            <span className="block text-center text-sm -mt-1">Z U G L Ó</span>
          </div>
        </Link>

        <div className="hidden lg:flex items-center gap-5 xl:gap-7 text-base xl:text-lg">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-charcoal hover:text-gold-dark transition-colors whitespace-nowrap"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <a
          href={FRESHA_BOOKING_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden lg:block bg-gold hover:bg-gold-dark text-black px-6 xl:px-7 py-3 rounded-full text-base xl:text-lg whitespace-nowrap transition-colors"
        >
          Időpontot foglalok
        </a>

        <button
          className="lg:hidden text-charcoal text-2xl"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Menü megnyitása"
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </nav>

      {isOpen && (
        <div className="lg:hidden flex flex-col items-center gap-4 px-4 pb-4 text-lg">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-charcoal hover:text-gold-dark"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <a
            href={FRESHA_BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gold hover:bg-gold-dark text-black px-5 py-2 rounded-full transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Időpontot foglalok
          </a>
        </div>
      )}
    </header>
  );
}