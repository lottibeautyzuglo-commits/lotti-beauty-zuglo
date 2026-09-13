"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

export default function PromoPopup({ id, repeat = false }: { id: string; repeat?: boolean }) {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const storageKey = `promoShown_${id}`;
    if (!repeat) {
      const alreadyShown = sessionStorage.getItem(storageKey);
      if (alreadyShown) return;
    }

    const timer = setTimeout(() => {
      setOpen(true);
      document.body.style.overflow = "hidden";
      requestAnimationFrame(() => {
        requestAnimationFrame(() => setVisible(true));
      });
      if (!repeat) {
        sessionStorage.setItem(storageKey, "1");
      }
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setVisible(false);
    document.body.style.overflow = "";
    setTimeout(() => setOpen(false), 300);
  };

  if (!mounted || !open) return null;

  const modal = (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center px-4 bg-black/50 transition-opacity duration-300 ${
        visible ? "opacity-100" : "opacity-0"
      }`}
      onClick={handleClose}
    >
      <div
        className={`relative bg-gold rounded-2xl max-w-md w-full p-8 md:p-12 text-center transition-all duration-300 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={handleClose}
          aria-label="Bezárás"
          className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/10 hover:bg-black/20 flex items-center justify-center text-black text-xl transition-colors"
        >
          ✕
        </button>

        <h2 className="text-3xl md:text-4xl font-(family-name:--font-playfair) font-black uppercase text-black mb-6">
          Nyitási akció
        </h2>

       <p className="text-black/80 text-base md:text-lg mb-6">
  2026. október 5. és november 5. között érvényes
</p>

        <div className="space-y-2 mb-6">
          <p className="font-(family-name:--font-playfair) font-black uppercase text-black text-xl md:text-2xl">
            Műszempilla építésnél
            <br />
            dupla kedvezmény
          </p>
          <p className="text-black/85 text-sm md:text-base">
            -20% az első új szett árából,
            <br />
            majd -15% az azt követő első töltés árából
          </p>
        </div>

        <div className="h-px bg-black/15 mb-6" />

        <p className="font-(family-name:--font-playfair) font-black uppercase text-black text-xl md:text-2xl">
          Minden egyéb szolgáltatásból
          <br />
          -10% kedvezmény
        </p>
      </div>
    </div>
  );

  return createPortal(modal, document.body);
}