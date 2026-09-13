"use client";

import { useEffect, useRef, useState } from "react";

export default function AnimatedLogo() {
  const textRef = useRef<SVGTextElement>(null);
  const [len, setLen] = useState<number | null>(null);
  const [hovered, setHovered] = useState(false);
  const [autoPlaying, setAutoPlaying] = useState(false);

  useEffect(() => {
    if (textRef.current) {
      setLen(textRef.current.getComputedTextLength());
    }

    const startTimeout = setTimeout(() => {
      setAutoPlaying(true);
      const endTimeout = setTimeout(() => setAutoPlaying(false), 1500);
      return () => clearTimeout(endTimeout);
    }, 800);

    return () => clearTimeout(startTimeout);
  }, []);

  const isDrawing = hovered || autoPlaying;

  return (
    <svg
      width="280"
      height="70"
      viewBox="0 0 280 70"
      className="overflow-visible cursor-pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <text
        ref={textRef}
        x="140"
        y="52"
        textAnchor="middle"
        style={{ ["--len" as string]: len ?? 300 } as React.CSSProperties}
        className={`logo-text font-(family-name:--font-script) text-5xl ${
          isDrawing ? "drawing" : ""
        }`}
      >
        Lotti Beauty
      </text>
    </svg>
  );
}