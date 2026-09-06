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
      width="280"
      height="70"
      viewBox="0 0 280 70"
      className="overflow-visible cursor-pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <text
        ref={textRef}
        x="2"
        y="52"
        style={{ ["--len" as string]: len ?? 300 } as React.CSSProperties}
        className={`logo-text font-(family-name:--font-script) text-5xl ${
          hovered ? "drawing" : ""
        }`}
      >
        Lotti Beauty
      </text>
    </svg>
  );
}