"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "cookie-consent";

function updateGoogleConsent(granted: boolean) {
  if (typeof window.gtag !== "function") return;
  const state = granted ? "granted" : "denied";
  window.gtag("consent", "update", {
    ad_storage: state,
    ad_user_data: state,
    ad_personalization: state,
    analytics_storage: state,
  });
}

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const consent = localStorage.getItem(STORAGE_KEY);
      if (!consent) {
        setVisible(true);
      }
    } catch {
      // ha a localStorage nem elérhető, ne jelenjen meg a sáv
    }
  }, []);

  const saveChoice = (granted: boolean) => {
    try {
      localStorage.setItem(STORAGE_KEY, granted ? "accepted" : "declined");
    } catch {
      // ignore
    }
    updateGoogleConsent(granted);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 inset-x-0 z-50 bg-charcoal text-cream px-4 py-4 md:py-5 shadow-[0_-4px_12px_rgba(0,0,0,0.15)]">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-4 md:gap-6 text-center md:text-left">
        <p className="text-sm md:text-base text-cream/90">
          Weboldalunk sütiket használ a megfelelő működéshez, valamint a
          hirdetéseink hatékonyságának méréséhez (Google Ads). A mérési
          sütiket elutasíthatod.
        </p>
        <div className="flex shrink-0 gap-3">
          <button
            onClick={() => saveChoice(false)}
            className="border border-cream/50 hover:bg-cream/10 text-cream px-6 py-2 rounded-full text-sm md:text-base transition-colors whitespace-nowrap"
          >
            Elutasítom
          </button>
          <button
            onClick={() => saveChoice(true)}
            className="bg-gold hover:bg-gold-dark text-black px-6 py-2 rounded-full text-sm md:text-base transition-colors whitespace-nowrap"
          >
            Elfogadom
          </button>
        </div>
      </div>
    </div>
  );
}