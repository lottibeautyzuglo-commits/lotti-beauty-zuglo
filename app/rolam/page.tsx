import type { Metadata } from "next";
import Image from "next/image";
import UVTechModal from "../components/UVTechModal";
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
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-[1fr_1.4fr] items-start gap-10 md:gap-16">
            <div className="relative w-full max-w-sm mx-auto aspect-3/4 rounded-2xl overflow-hidden md:sticky md:top-28">
              <Image
                src="/about/about-right.jpeg"
                alt="Csikós Lotti"
                fill
                className="object-cover"
              />
            </div>

            <div className="text-lg text-charcoal/90 leading-relaxed space-y-5">
             <p>
  Csikós Lotti vagyok, szempilla-stylist.
</p>
              <p>
                Mindig is közel állt hozzám a szépség világa, a kreativitás és az az érzés,
                amikor egy apró változtatás által valaki még magabiztosabbnak érzi magát.
                Szempilla stylistként megtaláltam azt a hivatást, amit igazán szeretek, és
                amiben nap mint nap örömmel alkotok.
              </p>
              <p>
                Munkám három alappillére a precizitás, az esztétikum és a tartósság.
                Hiszek abban, hogy egy szép szempillaszett nem csupán kiemeli a tekintetet,
                hanem magabiztosságot is ad. Éppen ezért minden szettet az egyéni
                adottságokhoz és elképzelésekhez igazítok, hogy a végeredmény harmonikus és
                igazán személyes legyen. 1D-től egészen 6D-ig dolgozom, így a
                természetesebb hatástól a dúsabb, hangsúlyosabb megjelenésig többféle
                stílus kialakítására van lehetőség. A klasszikus és volumen szettek mellett
                Fox és Wispy effektek is elérhetőek nálam azok számára, akik egy
                karakteresebb, különlegesebb tekintetre vágynak.
              </p>
              <p>
                A műszempilla építés mellett szempilla liftinggel és szemöldök
                laminálással is foglalkozom. Ezekkel a kezelésekkel a természetes szépség
                finom kiemelésétől egészen a hangsúlyosabb megjelenésig többféle stílus
                megvalósítható.
              </p>
              <p>
                Úgy gondolom, hogy a valódi minőség ott kezdődik, amikor az ember
                szívvel-lélekkel végzi azt, amit választott. Számomra ez nem csupán
                hivatás, hanem szenvedély, amelyben a folyamatos fejlődés és a részletekre
                való odafigyelés természetes része a mindennapoknak.
              </p>

              <h2 className="text-2xl md:text-3xl font-(family-name:--font-playfair) text-charcoal pt-4">
                Minőség, precizitás, modern technológia
              </h2>

              <p>
                A műszempilla építés során kizárólag <UVTechModal /> dolgozom. Az UV
                fény segítségével a ragasztó kötése kontrolláltabbá válik, ami
                hozzájárulhat a tartós és precíz végeredményhez. Mindezt minőségi
                alapanyagokkal és gondos munkavégzéssel egészítem ki.
              </p>
              <p>
                A prémium élmény számomra nem merül ki a végeredményben. Ugyanilyen
                lényeges, hogy a nálam töltött idő alatt nyugodtan kikapcsolódhass,
                komfortosan érezd magad, és valóban legyen egy kis időd önmagadra. A célom,
                hogy minden alkalom után elégedetten nézz a tükörbe, és azt érezd: ez
                tényleg én vagyok, csak egy kicsit még ragyogóbban.
              </p>
              <p>
                Sok szeretettel várlak Zuglóban, egy nyugodt, igényes környezetben.
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