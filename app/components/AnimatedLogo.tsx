"use client";

import { useEffect, useRef, useState } from "react";

export default function AnimatedLogo() {
  const textRef = useRef<SVGTextElement>(null);
  const [len, setLen] = useState<number | null>(null);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    if (textRef.current) {
      setLen(textRef.current.getComputedTextLength());
    }
  }, []);

  return (
    <svg
      width="220"
      height="56"
      viewBox="0 0 220 56"
      className="overflow-visible cursor-pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <text
        ref={textRef}
        x="2"
        y="42"
        style={{ ["--len" as string]: len ?? 300 } as React.CSSProperties}
        className={`logo-text font-(family-name:--font-script) text-4xl ${
          hovered ? "drawing" : ""
        }`}
      >
        Lotti Beauty
      </text>
    </svg>
  );
}