
import type { Metadata } from "next";
import Reveal from "../components/Reveal";
import BookingButton from "../components/BookingButton";
import GalleryGrid, { GalleryImage } from "../components/GalleryGrid";

export const metadata: Metadata = {
  title: "Galéria – Szempillaépítés munkáim | Lotti Beauty Zugló",
  description:
    "Nézd meg a saját munkáimat – ízelítő a Lotti Beauty Zugló szempillaépítéseiből, Zuglóban, a XIV. kerületben.",
};

const images: GalleryImage[] = [
  {
    src: "/galeria/galeria-01.jpeg",
    alt: "Természetes hatású szempillaépítés közelről, Lotti Beauty Zugló",
  },
  {
    src: "/galeria/galeria-02.jpeg",
    alt: "Dús szempillasor oldalnézetből, műszempilla építés Zuglóban",
  },
  {
    src: "/galeria/galeria-03.jpeg",
    alt: "Wispy hatású szempillaépítés, Lotti Beauty Zugló, XIV. kerület",
  },
  {
    src: "/galeria/galeria-04.jpeg",
    alt: "Dús Volume hatású szempillaépítés közeli fotója",
  },
  {
    src: "/galeria/galeria-05.jpeg",
    alt: "Dramatikus, sűrű Volume szempillahatás oldalnézetből",
  },
  {
    src: "/galeria/galeria-06.jpeg",
    alt: "Klasszikus, visszafogott szempillaépítés természetes hatással",
  },
  {
    src: "/galeria/galeria-07.jpeg",
    alt: "Dús szempillasor kezelés közben, Lotti Beauty Zugló szalon",
  },
  {
    src: "/galeria/galeria-08.jpeg",
    alt: "Elkészült szempillaépítés eredménye, portré Lotti Beauty Zugló vendégéről",
  },
  {
    src: "/galeria/galeria-09.jpeg",
    alt: "Wispy fox hatású szempillaépítés közelről",
  },
  {
    src: "/galeria/galeria-10.jpeg",
    alt: "Dús Volume szempillaépítés oldalnézetből, Zugló",
  },
];

export default function Galeria() {
  return (
    <main className="flex-1">
      <section className="px-4 py-20 md:py-32 bg-background text-center overflow-hidden">
        <Reveal direction="up">
          <div>
            <h1 className="text-4xl md:text-5xl font-(family-name:--font-playfair) text-charcoal mb-8">
              Munkáim – ízelítő a szempillaépítésekből
            </h1>
            <p className="max-w-2xl mx-auto text-lg md:text-xl text-charcoal/80">
              Az alábbi galériában néhány elkészült munkámat mutatom be,
              klasszikus, természetes hatástól a dúsabb, különleges
              effektekig. Kattints bármelyik képre a nagyobb nézethez.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="px-4 py-16 md:py-24 bg-cream overflow-hidden">
        <Reveal direction="up">
          <div className="max-w-5xl mx-auto">
            <GalleryGrid images={images} />
          </div>
        </Reveal>
      </section>

      <section className="px-4 py-20 md:py-32 bg-[#faf3e4] text-center overflow-hidden">
        <Reveal direction="up">
          <div>
            <p className="max-w-xl mx-auto text-lg md:text-xl text-charcoal/80 mb-10">
              Ha megtetszett valamelyik stílus, szívesen elkészítem neked is,
              foglalj időpontot, és beszéljük át, mi illene hozzád
              legjobban.
            </p>
            <div className="flex justify-center">
              <BookingButton />
            </div>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
