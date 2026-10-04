import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "../components/Reveal";
import BookingButton from "../components/BookingButton";

export const metadata: Metadata = {
  title: "GYIK – Gyakori kérdések a műszempilla építésről | Lotti Beauty Zugló",
  description:
    "Válaszok a műszempilla építéssel kapcsolatos leggyakoribb kérdésekre: szettek, ívek, ápolás, allergia, foglalás és lemondás Zuglóban, a XIV. kerületben.",
};

const faqItems: { question: string; answer: string[] }[] = [
  {
    question: "Melyik szempilla szettet válasszam?",
    answer: [
      "Ha bizonytalan vagy, nem kell előre tudnod, melyik szettet szeretnéd. A kezelés előtt közösen megbeszéljük, milyen hatást szeretnél elérni, és a saját szempilláid adottságait, valamint a szemformádat is figyelembe véve választjuk ki a számodra legmegfelelőbb megoldást.",
    ],
  },
  {
    question: "Mit jelent az 1D, 2D, 3D, 4D, 5D és 6D?",
    answer: [
      "A D szám azt jelzi, hogy egy természetes szempillára hány szál vékony műszempilla kerül.",
      "Az 1D klasszikus, természetesebb hatást ad, míg a 2D–6D fokozatosan dúsabb megjelenést biztosít. A nagyobb D szám azonban nem feltétlenül jelent nehezebb vagy feltűnőbb szettet, a megfelelően megválasztott vékonyság és hosszúság mellett a végeredmény könnyed és harmonikus maradhat.",
    ],
  },
  {
    question: "Milyen ívek közül választhatok?",
    answer: [
      "Jelenleg C, CC és M ívekkel dolgozom. D ív csak korlátozottan elérhető. Az ívet mindig a kívánt hatás, a szemformád és a saját szempilláid adottságai alapján választjuk ki.",
      "A CC ív egy igazi jolly joker: szépen nyitja a tekintetet, miközben sokféle szemformához jól illeszkedik. Az M ívvel karakteresebb, látványosabb, rókás hatás is kialakítható.",
    ],
  },
  {
    question: "Készítesz barna szempillát is?",
    answer: [
      "Igen. Ha természetesebb, lágyabb összhatást szeretnél, a barna szempillák gyönyörű alternatívát jelenthetnek a klasszikus fekete helyett.",
    ],
  },
  {
    question: "Mennyi ideig tart egy új szett elkészítése?",
    answer: [
      "Egy új szett elkészítése maximum 2 órát vesz igénybe. A töltés általában 1,5 óra.",
      "A kezelés időtartama a választott szettől és a saját szempilláid mennyiségétől is függhet.",
    ],
  },
  {
    question: "Mikor érdemes töltésre érkezni?",
    answer: [
      "A megfelelő időpontot a lenövés és a kihullott szempillák mennyisége alapján érdemes megválasztani.",
      "Nálam a töltések 0–14 nap, 14–21 nap, vagy 21–28 nap között érhetők el.",
      "28 nap után már új szett készítése szükséges.",
      "Ha a szett több mint 50%-a hiányzik, szintén új szett árával érdemes számolni.",
    ],
  },
  {
    question: "Más pillás munkájára is vállalsz töltést?",
    answer: [
      "Nem. Más stylist által készített szettet nem töltök.",
      "Ennek oka, hogy minden stylist más technikával, anyagokkal és szabályokkal dolgozik, ezért csak a saját munkámra tudok garanciát vállalni. Ilyen esetben leoldást követően új szettet készítek.",
    ],
  },
  {
    question: "Hogyan ápoljam otthon a műszempillámat?",
    answer: [
      "A szép és tartós eredményhez az otthoni ápolás is nagyon fontos.",
      "A szempillákat rendszeresen, kíméletesen tisztítani kell, erre kifejezetten szempillákhoz való tisztítóhab használata ajánlott. A pillákat ne dörzsöld és ne húzd, ne szempillaspirálozd, valamint kerüld az olajos, zsíros termékeket a szem környékén, mert az olaj meggyengíti a ragasztást és ezzel befolyásolja a tartósságot.",
      "Tisztítás után hagyd őket megszáradni, majd egy tiszta szempillakefével finoman fésüld át őket.",
      "A megfelelő higiénia nemcsak a tartósság, hanem a szemhéj egészsége miatt is fontos.",
    ],
  },
  {
    question: "Érheti víz a műszempillát?",
    answer: [
      "Igen. Az UV technológiával készült szett esetében nincs szükség arra, hogy a műszempillákat napokig szárazon tartsd.",
      "A megfelelő tisztítás kifejezetten fontos, ezért a pillákat a megfelelő szempilla sampon használatával rendszeresen tisztítani kell.",
    ],
  },
  {
    question: "Mi az UV szempillaépítés?",
    answer: [
      "Az UV technológia során az UV-fényre kötő ragasztó a megfelelő fény hatására polimerizálódik és megköt. Én kizárólag UV technológiával dolgozom.",
      "Fontos azonban, hogy az UV technológia sem jelent allergiamentességet: a ragasztó összetevőire továbbra is kialakulhat érzékenység vagy allergiás reakció.",
    ],
  },
  {
    question: "Van lehetőség allergiatesztre?",
    answer: [
      "Igen, amennyiben szeretnéd, lehetőség van próba felhelyezésre.",
      "A teszt során a külső szemzugba körülbelül 10–15 műszempillát helyezek fel, majd 24–48 órán keresztül figyelni kell, jelentkezik-e bármilyen szokatlan reakció.",
      "Fontos tudnod, hogy egy negatív allergiateszt nem zárja ki teljes bizonyossággal egy későbbi allergiás reakció lehetőségét. A ragasztóval szembeni érzékenység akár korábbi, problémamentes viselés után is kialakulhat.",
    ],
  },
  {
    question: "Mi a teendő, ha a kezelés után irritációt tapasztalok?",
    answer: [
      "Ha a kezelés után enyhébb kellemetlenséget, viszkető érzést, bőrpírt vagy a szemhéjbőr érzékenységét tapasztalod, mindenképpen jelezd felém.",
      "Ilyen esetben az Eesterlash szérum használatát is javasolhatom. Ez a kifejezetten érzékeny szemhéjbőr ápolására fejlesztett szérum nyugtató és hidratáló ápolást biztosít, és a műszempilla-ragasztó használata után jelentkező kellemetlen bőrérzet enyhítésére szolgál.",
      "Fontos azonban, hogy a szérum nem gyógyszer és nem allergia elleni készítmény, ezért erősebb vagy romló tünetek, például jelentős duzzanat, erős fájdalom, kifejezett szemvörösség vagy látászavar esetén orvosi, szükség esetén szemészeti segítség szükséges.",
    ],
  },
  {
    question: "Mikor nem javasolt a szempillaépítés?",
    answer: [
      "Szemgyulladás, fertőzés, árpa, irritált vagy sérült szemkörnyék, illetve friss szemészeti beavatkozás esetén a kezelés nem javasolt.",
      "Ha bizonytalan vagy abban, hogy egy adott állapot mellett készíthető-e szempilla, inkább előzetesen egyeztess velem.",
    ],
  },
  {
    question: "Hogyan érkezzek a kezelésre?",
    answer: [
      "Kérlek, lehetőség szerint tiszta, sminkmentes szemkörnyékkel érkezz.",
      "Ha kontaktlencsét viselsz, a kezelés előtt ki kell venned, ezért érdemes magaddal hoznod a lencsetartódat és a folyadékodat.",
      "A pontos időpont betartása is fontos, hiszen egy teljes szett elkészítéséhez elegendő időre van szükség.",
    ],
  },
  {
    question:
      "Mi történik, ha késésben vagyok vagy le kell mondanom az időpontomat?",
    answer: [
      "Kérlek, ha közbejön valami, minél hamarabb jelezd.",
      "Az időpontfoglaláskor előleg fizetendő (ennek összege függ az adott szolgáltatástól), amely a kezelés végösszegéből levonásra kerül.",
      "48 órán belüli lemondás esetén a szolgáltatás 50%-a, 24 órán belüli lemondás vagy meg nem jelenés esetén 100%-a fizetendő.",
      "Másik időpontot csak az összeg megfizetése után tudok biztosítani.",
      "15 percnél nagyobb késés esetén előfordulhat, hogy a kezelés a rendelkezésre álló idő miatt már nem kivitelezhető. Ebben az esetben az időpontot törölhetem és a szolgáltatás teljes összege fizetendő.",
    ],
  },
  {
    question: "Miért 0 Ft-ot mutat a bankom jóváhagyó ablaka fizetéskor?",
    answer: [
      "Ha most fizetsz nálunk először kártyával, a bankod előbb egy 0 Ft-os ellenőrző jóváhagyást kérhet, hogy biztonságosan hozzáadja a kártyádat. Ezt erősítsd meg, majd nyomd meg újra a fizetés gombot, ekkor vonja le a tényleges foglaló összegét.",
    ],
  },
  {
    question: "Mi történik, ha nem vagyok elégedett az eredménnyel?",
    answer: [
      "Jelezd kérlek a helyszínen és együtt megnézzük, mit lehet rajta javítani. A cél mindig az, hogy elégedetten hagyd el a szalont.",
    ],
  },
  {
    question: "Hol található a szalon?",
    answer: [
      "Budapesten, a XIV. kerületben, a Szugló utca 61. szám alatt. A pontos megközelíthetőségről a Kapcsolat oldalon találsz térképet.",
    ],
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
      text: item.answer.join(" "),
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
              Összegyűjtöttem a leggyakrabban felmerülő kérdéseket a szettek
              és ívek választásáról, az ápolásról, az allergiáról és a
              foglalásról. Ha valami mást is szeretnél kérdezni, keress
              bátran a Kapcsolat oldalon.
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
                <div className="mt-4 space-y-3 text-charcoal/80 text-lg">
                  {item.answer.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
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