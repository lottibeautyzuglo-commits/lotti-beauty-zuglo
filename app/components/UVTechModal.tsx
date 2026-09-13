"use client";

import { useState } from "react";

export default function UVTechModal() {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);

  const handleOpen = () => {
    setOpen(true);
    requestAnimationFrame(() => {
      requestAnimationFrame(() => setVisible(true));
    });
  };

  const handleClose = () => {
    setVisible(false);
    setTimeout(() => setOpen(false), 300);
  };

  return (
    <>
      <button
        onClick={handleOpen}
        className="text-charcoal underline decoration-gold-dark decoration-2 underline-offset-4 hover:text-gold-dark transition-colors font-semibold"
      >
        UV technológiával
      </button>

      {open && (
        <div
          className={`fixed inset-0 z-50 flex items-center justify-center px-4 bg-black/50 transition-opacity duration-300 ${
            visible ? "opacity-100" : "opacity-0"
          }`}
          onClick={handleClose}
        >
          <div
            className={`bg-background rounded-2xl max-w-lg w-full max-h-[85vh] overflow-y-auto p-8 md:p-10 text-left relative transition-all duration-300 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={handleClose}
              aria-label="Bezárás"
              className="absolute top-4 right-4 w-9 h-9 rounded-full bg-cream hover:bg-gold flex items-center justify-center text-charcoal text-xl transition-colors"
            >
              ✕
            </button>

            <h3 className="text-2xl font-(family-name:--font-playfair) text-charcoal mb-4 pr-8">
              Mi is az UV technológiás műszempilla építés?
            </h3>

            <p className="text-charcoal/85 leading-relaxed mb-4">
              Az UV technológia során a ragasztó UV fény hatására köt meg, így nem a levegő
              páratartalmától vagy hőmérsékletétől függ. Ennek köszönhetően a kötés
              azonnali, precíz és rendkívül stabil.
            </p>

            <h4 className="text-lg font-semibold text-charcoal mb-3">
              Miért jobb, mint a levegőre kötő ragasztó?
            </h4>

            <ul className="space-y-2 text-charcoal/85 mb-4">
              <li>✔️ Azonnali kötés, nincs várakozás</li>
              <li>✔️ Tartósabb és erősebb tapadás</li>
              <li>✔️ Kevésbé csíp és kevésbé irritál, kíméletesebb a szemhez</li>
              <li>✔️ Érzékeny szemű vendégeknek is ideális</li>
              <li>✔️ Párás időben is megbízható végeredmény</li>
            </ul>

            <p className="text-charcoal/85 leading-relaxed mb-4">
              A professzionális UV/LED lámpák alacsony UV szinten működnek, és a fény
              célzottan csak a ragasztóra hat, miközben a kezelési idő nagyon rövid marad,
              így a bőr és a szem környéke nem kap felesleges sugárzást.
            </p>

            <p className="text-charcoal/85 leading-relaxed">
              Ha a komfort, a minőség és a tartósság fontos számodra, próbáld ki az UV
              technológiás pillákat.
            </p>
          </div>
        </div>
      )}
    </>
  );
}