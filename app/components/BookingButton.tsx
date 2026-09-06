"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function BookingButton() {
  const [autoBlink, setAutoBlink] = useState(false);

  useEffect(() => {
    const startTimeout = setTimeout(() => {
      setAutoBlink(true);
      const endTimeout = setTimeout(() => setAutoBlink(false), 300);
      return () => clearTimeout(endTimeout);
    }, 1200);
    return () => clearTimeout(startTimeout);
  }, []);

  return (
    <button
      className={`group relative flex items-center gap-3 bg-gold hover:bg-gold-dark text-black px-8 py-3 rounded-full text-lg transition-colors ${
        autoBlink ? "auto-blink" : ""
      }`}
    >
      <span className="relative inline-block w-14 h-10">
        <Image src="/eye-open.png" alt="" fill className="eye-open object-contain" />
        <Image src="/eye-closed.png" alt="" fill className="eye-closed object-contain" />
      </span>
      Időpontot foglalok
    </button>
  );
}