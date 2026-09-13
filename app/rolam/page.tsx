import type { Metadata } from "next";
import Image from "next/image";
import BookingButton from "../components/BookingButton";
import Reveal from "../components/Reveal";

export const metadata: Metadata = {
  title: "Rólam – Csikós Lotti, szempilla stylist Zuglóban | Lotti Beauty Zugló",
  description:
    "Csikós Lotti vagyok, a Lotti Beauty Zugló szempilla stylistja. Mesélek arról, hogyan lett a műszempilla építés a szenvedélyemmé.",
};

export default function Rolam() {
  return (
    <main className="flex-1">
      <section className="px-4 py-20 md:py-32 bg-background text-center overflow-hidden">
        <Reveal direction="up">
          <h1 className="text-4xl md:text-5xl font-(family-name:--font-playfair) text-charcoal">
            Ismerj meg engem
          </h1>
        </Reveal>
      </section>

      <section className="px-4 py-16 md:py-24 bg-cream overflow-hidden">
        <Reveal direction="left">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-[1fr_1.4fr] items-center gap-10 md:gap-16">
            <div className="relative w-full max-w-sm mx-auto aspect-3/4 rounded-2xl overflow-hidden">
              <Image
                src="/about/about-right.jpeg"
                alt="Csikós Lotti"
                fill
                className="object-cover"
              />
            </div>

            <div className="text-lg text-charcoal/90 leading-relaxed space-y-5">
              <p>
                Csikós Lotti vagyok. Számomra a műszempilla építés nem csak egy szakma,
                hanem igazi szenvedély – imádom azt a pillanatot, amikor egy vendég belenéz
                a tükörbe, és megcsillan a szeme az új pillák láttán.
              </p>
              <p>
                2022-ben szereztem meg az alapképzésemet, és azóta sem álltam meg:
                folyamatosan képzem magam, hogy mindig a legjobb, legtartósabb megoldásokat
                tudjam kínálni. Dolgozom 1D-től egészen 6D-ig, a visszafogott, természetes
                hatástól a dúsabb, különleges wispy és fox effektekig – mindig a Te
                szemedhez, stílusodhoz igazítva.
              </p>
              <p>
                UV technológiával dolgozom, ami gyors és tartós kötést biztosít, és
                igyekszem mindenkinek megtalálni a számára legmegfelelőbb megoldást, akár
                érzékenyebb szemekhez is.
              </p>
              <p>
                A szempillák mellett szívesen foglalkozom szempilla liftinggel és
                festéssel, valamint szemöldök szedéssel, laminálással és festéssel is –
                hogy egy helyen, egy alkalommal gondoskodhassak a teljes tekintetedről.
              </p>
              <p>
                2026 októberétől Zuglóban, a XIV. kerület szívében várlak a Lotti Beauty
                Zugló szalonban.
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="px-4 py-16 md:py-24 bg-background text-center overflow-hidden">
        <Reveal direction="up">
          <div className="flex justify-center">
            <BookingButton />
          </div>
        </Reveal>
      </section>
    </main>
  );
}