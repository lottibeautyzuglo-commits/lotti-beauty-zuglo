import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "../components/Reveal";
import BookingButton from "../components/BookingButton";

export const metadata: Metadata = {
  title: "GYIK – Gyakori kérdések a műszempilla építésről | Lotti Beauty Zugló",
  description:
    "Válaszok a műszempilla építéssel kapcsolatos leggyakoribb kérdésekre: időtartam, ápolás, foglalás és előleg Zuglóban, a XIV. kerületben.",
};

const faqItems = [
  {
    question: "Mennyi ideig tart egy alkalom?",
    answer:
      "Az új szett elkészítése körülbelül 2 órát vesz igénybe, a töltés 1,5 órát. A pontos időtartam a választott effekttől és a szálmennyiségtől is függhet.",
  },
  {
    question: "Fáj a műszempilla építés?",
    answer:
      "Nem, a kezelés fájdalommentes. A szemed végig csukva marad, sok vendég el is szundít a kényelmes körülmények között.",
  },
  {
    question: "Milyen gyakran kell tölteni?",
    answer:
      "A szempillák saját növekedési ciklusa miatt 3-4 hetente érdemes tölteni, hogy a szett mindig dús és rendezett maradjon. Ez egyénenként eltérő lehet.",
  },
  {
    question: "Kell-e allergiateszt az első alkalom előtt?",
    answer:
      "Érzékenyebb bőrűeknek, illetve ha korábban még nem volt műszempillád, javasolt előzetesen elvégeztetni az allergiatesztet. Ezt időpontfoglaláskor tudod jelezni.",
  },
  {
    question: "Hogyan tudok időpontot foglalni?",
    answer:
      "Online, a weboldal bármelyik Időpontot foglalok gombjára kattintva, ahol kiválasztod a szolgáltatást és a neked megfelelő időpontot. Ha inkább személyesen egyeztetnél, telefonon is elérhető vagyok.",
  },
  {
    question: "Mennyi az előleg (foglaló), és visszajár-e?",
    answer:
      "Online foglaláskor szolgáltatásonként eltérő összegű foglaló fizetendő, ami a végösszegbe beszámít. A foglaló feltételeit a Szabályzat oldalon találod.",
  },
  {
    question: "Mire figyeljek az időpont előtt?",
    answer:
      "Érkezz szemsmink nélkül, és ha kontaktlencsét viselsz, érdemes azt a kezelés idejére kivenned. Ha gyógyszert szedsz, vagy bőrgyógyászati problémád van, szólj előre.",
  },
  {
    question: "Hogyan vigyázzak az új szempilláimra?",
    answer:
      "Az első 24-48 órában kerüld a vizet, gőzt és az izzadást. Ne dörzsöld, ne húzgáld a szálakat, sminklemosáshoz pedig olajmentes terméket használj, mert az olaj meggyengíti a ragasztást.",
  },
  {
    question: "Mi történik, ha nem vagyok elégedett az eredménnyel?",
    answer:
      "Jelezd mielőbb, és együtt megnézzük, mit lehet rajta javítani. A cél mindig az, hogy elégedetten hagyd el a szalont.",
  },
  {
    question: "Hol található a szalon?",
    answer:
      "Budapesten, a XIV. kerületben, a Szugló utca 61. szám alatt. A pontos megközelíthetőségről a Kapcsolat oldalon találsz térképet.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export default function Gyik() {
  return (
    <main className="flex-1">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <section className="px-4 py-20 md:py-32 bg-background text-center overflow-hidden">
        <Reveal direction="up">
          <div>
            <h1 className="text-4xl md:text-5xl font-(family-name:--font-playfair) text-charcoal mb-8">
              Gyakori kérdések
            </h1>
            <p className="max-w-2xl mx-auto text-lg md:text-xl text-charcoal/80">
              Összegyűjtöttem a leggyakrabban felmerülő kérdéseket a műszempilla
              építésről, az ápolásról és a foglalásról. Ha valami mást is
              szeretnél kérdezni, keress bátran a Kapcsolat oldalon.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="px-4 py-20 md:py-32 bg-cream overflow-hidden">
        <Reveal direction="right">
          <div className="max-w-3xl mx-auto space-y-4">
            {faqItems.map((item) => (
              <details
                key={item.question}
                className="group rounded-2xl bg-background p-6 md:p-8"
              >
                <summary className="flex items-center justify-between gap-4 cursor-pointer text-lg md:text-xl font-semibold text-charcoal list-none">
                  {item.question}
                  <span className="shrink-0 text-gold-dark text-2xl leading-none transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-4 text-charcoal/80 text-lg">{item.answer}</p>
              </details>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="px-4 py-20 md:py-32 bg-[#faf3e4] text-center overflow-hidden">
        <Reveal direction="up">
          <div>
            <p className="max-w-xl mx-auto text-lg md:text-xl text-charcoal/80 mb-10">
              Nem találtad a válaszod? Nézd meg a{" "}
              <Link href="/szabalyzat" className="text-gold-dark underline">
                Szabályzat
              </Link>{" "}
              oldalt, vagy foglalj időpontot, és személyesen válaszolok minden
              kérdésedre.
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