"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import ReviewStars from "./ReviewStars";
import type { GoogleReview } from "../lib/googleReviews";

const AUTOPLAY_MS = 6000;
const FADE_MS = 250;

function ReviewCard({ review }: { review: GoogleReview }) {
  return (
    <article className="bg-cream rounded-2xl p-8 flex flex-col text-left w-full h-full">
      <ReviewStars rating={review.rating} className="text-lg" />
      <p className="mt-4 text-charcoal/85 leading-relaxed line-clamp-6 flex-1">
        {review.text}
      </p>
      <div className="mt-6 flex items-center gap-3">
        <span className="w-10 h-10 rounded-full bg-gold flex items-center justify-center text-black font-semibold shrink-0">
          {review.authorName.charAt(0).toUpperCase()}
        </span>
        <div className="text-sm">
          {review.authorUrl ? (
            <a
              href={review.authorUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-charcoal font-medium hover:text-gold-dark transition-colors"
            >
              {review.authorName}
            </a>
          ) : (
            <span className="text-charcoal font-medium">{review.authorName}</span>
          )}
          <p className="text-charcoal/60">
            {review.relativeTime}
            {review.relativeTime ? ", " : ""}Google
          </p>
        </div>
      </div>
    </article>
  );
}

export default function ReviewsCarousel({ reviews }: { reviews: GoogleReview[] }) {
  // Telefonon 1, tableten 2, gépen 3 vélemény látszik egyszerre
  const [perView, setPerView] = useState(1);
  const [start, setStart] = useState(0);
  const [shown, setShown] = useState(true);
  const [resetKey, setResetKey] = useState(0);
  const touchStartX = useRef<number | null>(null);

  useEffect(() => {
    const update = () => {
      if (window.matchMedia("(min-width: 1024px)").matches) setPerView(3);
      else if (window.matchMedia("(min-width: 768px)").matches) setPerView(2);
      else setPerView(1);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const total = reviews.length;
  const isCarousel = total > perView;
  const visibleCount = Math.min(perView, total);

  const goTo = useCallback(
    (next: number) => {
      setShown(false);
      setTimeout(() => {
        setStart(((next % total) + total) % total);
        setShown(true);
      }, FADE_MS);
    },
    [total]
  );

  const step = (dir: 1 | -1) => {
    goTo(start + dir);
    setResetKey((k) => k + 1); // kattintás után újraindul a számláló
  };

  // Automatikus lapozás (kikapcsolva, ha a látogató a csökkentett mozgást kérte)
  useEffect(() => {
    if (!isCarousel) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => goTo(start + 1), AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [isCarousel, start, goTo, resetKey]);

  const visible = Array.from(
    { length: visibleCount },
    (_, i) => reviews[(start + i) % total]
  );

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(diff) > 40) step(diff < 0 ? 1 : -1);
    touchStartX.current = null;
  };

  const arrowClass =
    "shrink-0 w-11 h-11 rounded-full bg-cream hover:bg-gold text-charcoal text-2xl flex items-center justify-center transition-colors focus-visible:outline-2 focus-visible:outline-gold-dark";

  return (
    <div>
      <div className="flex items-center gap-3 md:gap-6">
        {isCarousel && (
          <button type="button" onClick={() => step(-1)} aria-label="Előző vélemény" className={arrowClass}>
            ‹
          </button>
        )}

        <div
          className={`flex-1 grid gap-6 md:gap-8 transition-opacity duration-200 ${
            shown ? "opacity-100" : "opacity-0"
          }`}
          style={{
            gridTemplateColumns: `repeat(${visibleCount}, minmax(0, 1fr))`,
            maxWidth: isCarousel ? undefined : `${visibleCount * 24}rem`,
            marginInline: "auto",
          }}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
          aria-live="polite"
        >
          {visible.map((review, i) => (
            <ReviewCard key={`${start}-${i}`} review={review} />
          ))}
        </div>

        {isCarousel && (
          <button type="button" onClick={() => step(1)} aria-label="Következő vélemény" className={arrowClass}>
            ›
          </button>
        )}
      </div>

      {isCarousel && (
        <div className="mt-8 flex justify-center gap-2">
          {reviews.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => {
                goTo(i);
                setResetKey((k) => k + 1);
              }}
              aria-label={`${i + 1}. vélemény`}
              className={`h-2 rounded-full transition-all ${
                i === start ? "w-6 bg-gold-dark" : "w-2 bg-charcoal/20"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}