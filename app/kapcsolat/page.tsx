import type { Metadata } from "next";
import BookingButton from "../components/BookingButton";
import RotatingPhoto from "../components/RotatingPhoto";
import Reveal from "../components/Reveal";

export const metadata: Metadata = {
  title: "Kapcsolat & Időpontfoglalás | Lotti Beauty Zugló, XIV. kerület",
  description:
    "Foglalj időpontot online a Lotti Beauty Zugló szalonban, Zuglóban (Szugló utca 61, XIV. kerület). Várlak szeretettel!",
};

const munkaimImages = [
  "/munkaim/munka-1.jpeg",
  "/munkaim/munka-2.jpeg",
  "/munkaim/munka-3.jpeg",
  "/munkaim/munka-4.jpeg",
  "/munkaim/munka-5.jpeg",
  "/munkaim/munka-6.jpeg",
  "/munkaim/munka-7.jpeg",
  "/munkaim/munka-8.jpeg",
  "/munkaim/munka-9.jpeg",
];

export default function Kapcsolat() {
  return (
    <main className="flex-1">
      <section className="px-4 py-20 md:py-32 bg-background text-center overflow-hidden">
        <Reveal direction="up">
          <div>
           <h1 className="text-3xl md:text-4xl font-(family-name:--font-playfair) text-charcoal">
  Foglalj időpontot
</h1>

<div className="h-px w-24 bg-charcoal/20 mx-auto my-4" />

<h1 className="text-3xl md:text-4xl font-(family-name:--font-playfair) text-charcoal mb-14">
  Lotti Beauty Zugló
</h1>
            <h2 className="text-2xl md:text-3xl font-(family-name:--font-playfair) text-charcoal mb-10">
              Elérhetőségek
            </h2>

            <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
              <div className="bg-cream rounded-2xl p-8 flex flex-col items-center gap-3">
                <svg className="w-8 h-8 text-charcoal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                <span className="font-semibold text-charcoal">Cím</span>
                <p className="text-charcoal/80">
                  Budapest, Szugló utca 61, 1145
                  <br />
                  XIV. kerület, Zugló
                </p>
              </div>

              <div className="bg-cream rounded-2xl p-8 flex flex-col items-center gap-3">
                <svg className="w-8 h-8 text-charcoal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h1.5a1.5 1.5 0 001.5-1.5v-2.415a1.5 1.5 0 00-1.146-1.457l-3.585-.897a1.5 1.5 0 00-1.5.428l-1.045 1.045a12.02 12.02 0 01-5.68-5.68l1.045-1.045a1.5 1.5 0 00.428-1.5l-.897-3.585A1.5 1.5 0 007.365 4.5H4.95A1.5 1.5 0 003.45 6z" />
                </svg>
                <span className="font-semibold text-charcoal">Telefonszám</span>
                <a href="tel:+36301564605" className="text-charcoal/80 hover:text-gold-dark transition-colors">
                  +36 30 156 4605
                </a>
              </div>

              <div className="bg-cream rounded-2xl p-8 flex flex-col items-center gap-3">
                <svg className="w-8 h-8 text-charcoal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="font-semibold text-charcoal">Nyitvatartás</span>
<span className="font-semibold text-charcoal">Nyitvatartás</span>
<p className="text-charcoal/80">
  Hétfőtől csütörtökig
  <br />
  10:00-19:00
  <br />
  Péntek
  <br />
  10:00-17:00
  <br />
  Szombat - Vasárnap: Zárva
</p>
              </div>
            </div>

            <div className="flex justify-center gap-4">
              <a
                href="https://www.instagram.com/lotti.lashstylist/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-gold hover:bg-gold-dark text-black px-6 py-3 rounded-full transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
                Instagram
              </a>

              <a
                href="https://www.facebook.com/lotti.csikos?locale=hu_HU"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-gold hover:bg-gold-dark text-black px-6 py-3 rounded-full transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879v-6.988h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.891h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
                Facebook
              </a>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="px-4 py-20 md:py-32 bg-cream overflow-hidden">
        <Reveal direction="left">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-[1fr_2fr_1fr] items-center gap-10 text-center">
            <RotatingPhoto
              images={munkaimImages}
              startIndex={0}
              className="hidden md:block w-full max-w-lg mx-auto aspect-3/4"
            />

            <div className="self-center">
              <p className="max-w-xl mx-auto text-lg text-charcoal/80 mb-10">
                Az időpontfoglalás egyszerűen, online történik. Válaszd ki a számodra megfelelő
                időpontot, és már foglalhatsz is!
              </p>
              <div className="flex justify-center">
                <BookingButton />
              </div>
            </div>

            <RotatingPhoto
              images={munkaimImages}
              startIndex={4}
              className="hidden md:block w-full max-w-lg mx-auto aspect-3/4"
            />
          </div>
        </Reveal>
      </section>

      <section className="px-4 py-20 md:py-32 bg-background text-center overflow-hidden">
        <Reveal direction="right">
          <div>
            <h2 className="text-3xl md:text-4xl font-(family-name:--font-playfair) text-charcoal mb-6">
              Megközelíthetőség
            </h2>
            <p className="max-w-2xl mx-auto text-lg text-charcoal/80 mb-12">
              A szalon könnyen megközelíthető a XIV. kerület egész területéről, akár
              tömegközlekedéssel, akár autóval érkezel.
            </p>
            <div className="max-w-4xl mx-auto rounded-2xl overflow-hidden">
              <iframe
                src="https://www.google.com/maps?q=Budapest,+Szugl%C3%B3+utca+61,+1145&output=embed"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Lotti Beauty Zugló térkép"
              />
            </div>
          </div>
        </Reveal>
      </section>
    </main>
  );
}