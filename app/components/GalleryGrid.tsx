"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

export interface GalleryImage {
  src: string;
  alt: string;
}

export default function GalleryGrid({ images }: { images: GalleryImage[] }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (activeIndex === null) {
      document.body.style.overflow = "";
      return;
    }
    document.body.style.overflow = "hidden";

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveIndex(null);
      if (e.key === "ArrowRight") {
        setActiveIndex((i) => (i === null ? null : (i + 1) % images.length));
      }
      if (e.key === "ArrowLeft") {
        setActiveIndex((i) =>
          i === null ? null : (i - 1 + images.length) % images.length
        );
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [activeIndex, images.length]);

  const lightbox =
    activeIndex !== null ? (
      <div
        className="fixed inset-0 z-[100] flex items-center justify-center px-4 bg-black/85"
        onClick={() => setActiveIndex(null)}
      >
        <button
          onClick={() => setActiveIndex(null)}
          aria-label="Bezárás"
          className="absolute top-4 right-4 w-11 h-11 rounded-full bg-cream/90 hover:bg-gold flex items-center justify-center text-charcoal text-xl transition-colors"
        >
          ✕
        </button>

        <button
          onClick={(e) => {
            e.stopPropagation();
            setActiveIndex((i) =>
              i === null ? null : (i - 1 + images.length) % images.length
            );
          }}
          aria-label="Előző kép"
          className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-cream/90 hover:bg-gold flex items-center justify-center text-charcoal text-2xl transition-colors"
        >
          ‹
        </button>

        <button
          onClick={(e) => {
            e.stopPropagation();
            setActiveIndex((i) =>
              i === null ? null : (i + 1) % images.length
            );
          }}
          aria-label="Következő kép"
          className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-cream/90 hover:bg-gold flex items-center justify-center text-charcoal text-2xl transition-colors"
        >
          ›
        </button>

        <div
          className="relative w-full max-w-3xl h-[80vh]"
          onClick={(e) => e.stopPropagation()}
        >
          <Image
            src={images[activeIndex].src}
            alt={images[activeIndex].alt}
            fill
            sizes="(max-width: 768px) 100vw, 800px"
            className="object-contain"
            priority
          />
        </div>
      </div>
    ) : null;

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-5">
        {images.map((img, index) => (
          <button
            key={img.src}
            onClick={() => setActiveIndex(index)}
            className="relative aspect-square rounded-2xl overflow-hidden group"
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              sizes="(max-width: 768px) 50vw, 33vw"
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <span className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
          </button>
        ))}
      </div>

      {mounted && lightbox && createPortal(lightbox, document.body)}
    </>
  );
}