"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const images = [
  "/hero/hero-1.jpeg",
  "/hero/hero-2.jpeg",
  "/hero/hero-3.jpeg",
  "/hero/hero-4.jpeg",
  "/hero/hero-5.jpeg",
  "/hero/hero-6.jpeg",
  "/hero/hero-7.jpeg",
  "/hero/hero-8.jpeg",
  "/hero/hero-9.jpeg",
  "/hero/hero-10.jpeg",
];

export default function HeroBackground() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {images.map((src, i) => (
        <Image
          key={src}
          src={src}
          alt=""
          fill
          priority={i === 0}
          className={`object-cover transition-opacity duration-1000 ease-in-out ${
            i === index ? "opacity-45" : "opacity-0"
          }`}
        />
      ))}
      {/* Krémszínű átfedés, hogy a szöveg mindig olvasható maradjon */}
      <div className="absolute inset-0 bg-cream/40" />
    </div>
  );
}