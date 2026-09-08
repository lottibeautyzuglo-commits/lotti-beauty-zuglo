"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type RotatingPhotoProps = {
  images: string[];
  startIndex?: number;
  className?: string;
};

export default function RotatingPhoto({
  images,
  startIndex = 0,
  className = "",
}: RotatingPhotoProps) {
  const [index, setIndex] = useState(startIndex);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className={`relative rounded-2xl overflow-hidden ${className}`}>
      {images.map((src, i) => (
        <Image
          key={src}
          src={src}
          alt=""
          fill
          className={`object-cover transition-opacity duration-1000 ease-in-out ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
    </div>
  );
}