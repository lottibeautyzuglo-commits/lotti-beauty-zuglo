"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const images = [
  "/munkaim/munka-1.jpeg",
  "/munkaim/munka-2.jpeg",
  "/munkaim/munka-3.jpeg",
  "/munkaim/munka-4.jpeg",
  "/munkaim/munka-5.jpeg",
  "/munkaim/munka-6.jpeg",
  "/munkaim/munka-7.jpeg",
  "/munkaim/munka-8.jpeg",
  "/munkaim/munka-9.jpeg",
];

const VISIBLE = 3;

export default function WorkGallery() {
  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
  const interval = setInterval(() => {
    setStartIndex((prev) => (prev + 1) % images.length);
  }, 5000);
  return () => clearInterval(interval);
}, [startIndex]);

  const goPrev = () => {
    setStartIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goNext = () => {
    setStartIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <div className="relative max-w-5xl mx-auto">
      <button
  onClick={goPrev}
  aria-label="Előző kép"
  className="absolute -left-4 md:-left-10 top-1/2 -translate-y-1/2 z-10 text-charcoal/40 hover:text-charcoal/80 transition-colors text-4xl md:text-5xl"
>
  ‹
</button>

      <button
  onClick={goNext}
  aria-label="Következő kép"
  className="absolute -right-4 md:-right-10 top-1/2 -translate-y-1/2 z-10 text-charcoal/40 hover:text-charcoal/80 transition-colors text-4xl md:text-5xl"
>
  ›
</button>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
  {Array.from({ length: VISIBLE }).map((_, slot) => (
    <div
      key={slot}
      className={`${
        slot === 0 ? "" : "hidden sm:block"
      } relative aspect-square rounded-2xl overflow-hidden bg-gold/20`}
    >
            {images.map((src, i) => (
              <Image
                key={src}
                src={src}
                alt=""
                fill
                className={`object-cover transition-opacity duration-1000 ease-in-out ${
                  i === (startIndex + slot) % images.length ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}