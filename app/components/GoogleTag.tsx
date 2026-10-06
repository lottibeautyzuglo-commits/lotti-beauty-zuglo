"use client";

import Script from "next/script";
import { useEffect } from "react";

// Google Ads fiók azonosítója (Google-címke)
export const GOOGLE_ADS_ID = "AW-18478188790";

// Az "Időpont foglalása" konverzió címkéje (a perjel utáni rész).
// Amíg üres, a foglalás gomb kattintását nem küldjük el konverzióként.
export const BOOKING_CONVERSION_LABEL = "";

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
  }
}

export default function GoogleTag() {
  // Minden Fresha linkre kattintást konverzióként küldünk el
  // (foglalás gomb, menü, felugró ablak stb.), így nem kell
  // minden gombot külön módosítani.
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      const link = target?.closest("a");
      if (!link || !link.href.includes("fresha.com")) return;
      if (!BOOKING_CONVERSION_LABEL) return;
      if (typeof window.gtag !== "function") return;

      window.gtag("event", "conversion", {
        send_to: `${GOOGLE_ADS_ID}/${BOOKING_CONVERSION_LABEL}`,
      });
    };

    document.addEventListener("click", handleClick, true);
    return () => document.removeEventListener("click", handleClick, true);
  }, []);

  return (
    <>
      <Script id="google-tag-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          window.gtag = gtag;

          var granted = false;
          try {
            granted = localStorage.getItem("cookie-consent") === "accepted";
          } catch (e) {}
          var state = granted ? "granted" : "denied";

          gtag("consent", "default", {
            ad_storage: state,
            ad_user_data: state,
            ad_personalization: state,
            analytics_storage: state
          });

          gtag("js", new Date());
          gtag("config", "${GOOGLE_ADS_ID}");
        `}
      </Script>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ADS_ID}`}
        strategy="afterInteractive"
      />
    </>
  );
}