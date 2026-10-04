import type { Metadata } from "next";
import Reveal from "../components/Reveal";
import BookingButton from "../components/BookingButton";

export const metadata: Metadata = {
  title: "Szabályzat – Lemondási és foglalási feltételek | Lotti Beauty Zugló",
  description:
    "A Lotti Beauty Zugló lemondási, módosítási és foglalási szabályzata. Ismerd meg a feltételeket az időpontfoglalás előtt.",
};

export default function Szabalyzat() {
  return (
    <main className="flex-1">
      <section className="px-4 py-20 md:py-32 bg-background text-center overflow-hidden">
        <Reveal direction="up">
          <div>
            <h1 className="text-4xl md:text-5xl font-(family-name:--font-playfair) text-charcoal mb-8">
              Szabályzat
            </h1>
            <p className="max-w-2xl mx-auto text-lg md:text-xl text-charcoal/80">
              Az alábbi feltételek minden időpontfoglalásra érvényesek,
              függetlenül attól, hogy online vagy telefonon foglaltál.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="px-4 py-20 md:py-32 bg-cream overflow-hidden">
        <Reveal direction="left">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-(family-name:--font-playfair) text-charcoal mb-10 text-center">
              Fontos tudnivalók
            </h2>
            <div className="rounded-2xl bg-background p-8 md:p-10">
              <ul className="space-y-4 text-charcoal/80 text-lg list-disc list-inside">
                <li>Amennyiben új szettre érkezel, kérlek a pillázást megelőző 3 napban ne használj vízálló szemfestéket a tartós munka érdekében.</li>
                <li>Új szett esetében az építési idő körülbelül 2 óra, oldás szükségessége esetén ez az idő megnövekedhet. Kérlek, így tervezz az időddel.</li>
                <li>Más szakember munkája után nem áll módomban töltést végezni.</li>
                <li>Pillázás előtt minimum 3–4 órával ne fogyassz koffeintartalmú italt, mert szemremegést okozhat, ami megnehezíti a munkámat és befolyásolhatja a pillák tartósságát.</li>
                <li>Amennyiben korábban allergiás tüneteid voltak, kérlek, előre jelezd felém.</li>
                <li>Betegen kérlek ne érkezz a kezelésre. Amint tudod, jelezd minél hamarabb. A lemondási szabályzat betegség esetén is érvényes.</li>
                <li>Amennyiben betegen érkezel, és a szolgáltatás emiatt nem végezhető el, az időpontot a helyszínen lemondhatom, a szolgáltatás teljes ára pedig fizetendő.</li>
                <li>Fizetési módok: fizetni készpénzzel vagy azonnali utalással tudsz a helyszínen.</li>
              </ul>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="px-4 py-20 md:py-32 bg-background overflow-hidden">
        <Reveal direction="right">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-(family-name:--font-playfair) text-charcoal mb-10 text-center">
              Lemondási és módosítási feltételek
            </h2>
            <div className="rounded-2xl bg-cream p-8 md:p-10">
              <ul className="space-y-4 text-charcoal/80 text-lg list-disc list-inside">
                <li>Az időpontodat legkésőbb 48 órával korábban díjmentesen módosíthatod vagy lemondhatod.</li>
                <li>48 órán belüli lemondás vagy módosítás esetén a lefoglalt szolgáltatás árának 50%-a fizetendő.</li>
                <li>24 órán belüli lemondás vagy módosítás esetén a lefoglalt szolgáltatás árának 100%-a fizetendő.</li>
                <li>Meg nem jelenés esetén a szolgáltatás teljes összege (100%) fizetendő, új időpont kizárólag a fennálló tartozás rendezése után foglalható.</li>
                <li>15 perc késés esetén a szolgáltatás időtartama rövidülhet.</li>
                <li>15 percnél hosszabb késés esetén az időpontot törölhetem, ebben az esetben a szolgáltatás teljes összege fizetendő.</li>
                <li>Amennyiben a korábbi, más szolgáltatónál végzett szempilla vagy szemöldök kezelés állapota szakmai szempontból nem teszi lehetővé a lefoglalt szolgáltatás elvégzését, fenntartom a jogot a kezelés visszautasítására. Ebben az esetben is a lefoglalt szolgáltatás teljes díja fizetendő.</li>
                <li>Az időpont lefoglalásával a fenti feltételeket elfogadod.</li>
              </ul>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="px-4 py-20 md:py-32 bg-[#faf3e4] text-center overflow-hidden">
        <Reveal direction="up">
          <div>
            <p className="max-w-xl mx-auto text-lg md:text-xl text-charcoal/80 mb-10">
              Ha bármi kérdésed van a szabályzattal kapcsolatban, keress
              bizalommal, mielőtt lefoglalod az időpontodat.
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