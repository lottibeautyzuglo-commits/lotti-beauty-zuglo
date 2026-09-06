"use client";

import Link from "next/link";
import { useState } from "react";
import AnimatedLogo from "./AnimatedLogo";

const navLinks = [
  { href: "/", label: "Főoldal" },
  { href: "/rolam", label: "Rólam" },
  { href: "/arak", label: "Árak" },
  { href: "/galeria", label: "Galéria" },
  { href: "/kapcsolat", label: "Kapcsolat" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-cream/95 backdrop-blur-sm shadow-sm">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-4 md:px-8 py-4 md:py-5">
        <Link href="/" className="flex flex-col items-center leading-none text-charcoal">
          <AnimatedLogo />
          <span className="text-sm tracking-[0.3em] -mt-1">ZUGLÓ</span>
        </Link>

        {/* Desktop menü */}
        <div className="hidden md:flex items-center gap-8 text-lg">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-charcoal hover:text-gold-dark transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Foglalás gomb */}
        <button className="hidden md:block bg-gold hover:bg-gold-dark text-black px-7 py-3 rounded-full text-lg transition-colors">
          Időpontot foglalok
        </button>

        {/* Mobil hamburger gomb */}
        <button
          className="md:hidden text-charcoal text-2xl"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Menü megnyitása"
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </nav>

      {/* Mobil lenyíló menü */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center gap-4 px-4 pb-4 text-lg">
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
          <button className="bg-gold hover:bg-gold-dark text-black px-5 py-2 rounded-full transition-colors">
            Időpontot foglalok
          </button>
        </div>
      )}
    </header>
  );
}