import type { Metadata } from "next";
import BookingButton from "../components/BookingButton";
import Reveal from "../components/Reveal";

export const metadata: Metadata = {
  title: "Árak – Műszempilla építés árlista | Lotti Beauty Zugló, Zugló XIV. kerület",
  description:
    "Műszempilla építés árak Zuglóban: Classic, Volume és különleges effektek (wispy, fox) 1D-től 6D-ig. Töltés, oldás, szempilla és szemöldök kezelések árlistája.",
};

export default function Arak() {
  return (
    <main className="flex-1">
      <section className="px-4 py-20 md:py-32 bg-background text-center overflow-hidden">
        <Reveal direction="up">
          <div>
            <h1 className="text-4xl md:text-5xl font-(family-name:--font-playfair) text-charcoal mb-8">
  Árlista
</h1>
            <p className="max-w-2xl mx-auto text-lg md:text-xl text-charcoal/80">
              Az alábbi árlista tartalmazza a Lotti Beauty Zugló szolgáltatásait. Az árak
              tájékoztató jellegűek, a pontos ár az egyéni igényektől (szálmennyiség,
              hatás) függően változhat – ezt mindig személyesen egyeztetjük az időpont előtt.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="px-4 py-20 md:py-32 bg-cream overflow-hidden">
        <Reveal direction="left">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-(family-name:--font-playfair) text-charcoal mb-10 text-center">
              Műszempilla építés – Új szett és Töltés
            </h2>
            <div className="overflow-x-auto rounded-2xl bg-background">
              <table className="w-full text-center border-collapse min-w-[520px]">
                <thead>
                  <tr className="bg-gold text-black">
                    <th className="p-5 text-lg font-semibold"></th>
                    <th className="p-5 text-lg font-semibold">Új szett</th>
                    <th className="p-5 text-lg font-semibold">Töltés 0-14 nap</th>
                    <th className="p-5 text-lg font-semibold">Töltés 15-21 nap</th>
                    <th className="p-5 text-lg font-semibold">Töltés 21-28 nap</th>
                  </tr>
                </thead>
                <tbody className="text-charcoal/80">
                  <tr className="border-t border-charcoal/10">
                    <td className="p-5 text-lg font-semibold text-charcoal">1D</td>
                    <td className="p-5 text-lg">17 500 Ft</td>
                    <td className="p-5 text-lg">13 500 Ft</td>
                    <td className="p-5 text-lg">14 000 Ft</td>
                    <td className="p-5 text-lg">15 000 Ft</td>
                  </tr>
                  <tr className="border-t border-charcoal/10">
                    <td className="p-5 text-lg font-semibold text-charcoal">2D</td>
                    <td className="p-5 text-lg">19 500 Ft</td>
                    <td className="p-5 text-lg">15 000 Ft</td>
                    <td className="p-5 text-lg">16 000 Ft</td>
                    <td className="p-5 text-lg">17 000 Ft</td>
                  </tr>
                  <tr className="border-t border-charcoal/10">
                    <td className="p-5 text-lg font-semibold text-charcoal">3D</td>
                    <td className="p-5 text-lg">21 500 Ft</td>
                    <td className="p-5 text-lg">16 500 Ft</td>
                    <td className="p-5 text-lg">17 500 Ft</td>
                    <td className="p-5 text-lg">18 500 Ft</td>
                  </tr>
                  <tr className="border-t border-charcoal/10">
                    <td className="p-5 text-lg font-semibold text-charcoal">4D</td>
                    <td className="p-5 text-lg">23 500 Ft</td>
                    <td className="p-5 text-lg">17 000 Ft</td>
                    <td className="p-5 text-lg">19 000 Ft</td>
                    <td className="p-5 text-lg">20 000 Ft</td>
                  </tr>
                  <tr className="border-t border-charcoal/10">
                    <td className="p-5 text-lg font-semibold text-charcoal">5D</td>
                    <td className="p-5 text-lg">25 500 Ft</td>
                    <td className="p-5 text-lg">19 500 Ft</td>
                    <td className="p-5 text-lg">20 500 Ft</td>
                    <td className="p-5 text-lg">21 500 Ft</td>
                  </tr>
                  <tr className="border-t border-charcoal/10">
                    <td className="p-5 text-lg font-semibold text-charcoal">6D</td>
                    <td className="p-5 text-lg">27 500 Ft</td>
                    <td className="p-5 text-lg">21 000 Ft</td>
                    <td className="p-5 text-lg">23 000 Ft</td>
                    <td className="p-5 text-lg">24 000 Ft</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-center text-charcoal/70 italic text-lg mt-8">
              M ív (fox) és Wispy effekt: +1000 Ft minden pillánál
            </p>
          </div>
        </Reveal>
      </section>

      <section className="px-4 py-20 md:py-32 bg-background overflow-hidden">
        <Reveal direction="right">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-(family-name:--font-playfair) text-charcoal mb-10 text-center">
              Egyéb szempilla szolgáltatások
            </h2>
            <div className="rounded-2xl bg-cream overflow-hidden">
              <table className="w-full text-center border-collapse">
                <thead>
                  <tr className="bg-gold text-black">
                    <th className="p-5 text-lg font-semibold">Szolgáltatás</th>
                    <th className="p-5 text-lg font-semibold">Ár</th>
                  </tr>
                </thead>
                <tbody className="text-charcoal/80">
                  <tr className="border-t border-charcoal/10">
                    <td className="p-5 text-lg text-left">Oldás (saját munka esetén)</td>
                    <td className="p-5 text-lg">5 000 Ft</td>
                  </tr>
                  <tr className="border-t border-charcoal/10">
                    <td className="p-5 text-lg text-left">Oldás (más munkája esetén)</td>
                    <td className="p-5 text-lg">6 500 Ft</td>
                  </tr>
                  <tr className="border-t border-charcoal/10">
                    <td className="p-5 text-lg text-left">Szempilla lifting</td>
                    <td className="p-5 text-lg">12 500 Ft</td>
                  </tr>
                  <tr className="border-t border-charcoal/10">
                    <td className="p-5 text-lg text-left">Szempilla festés</td>
                    <td className="p-5 text-lg">3 500 Ft</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="px-4 py-20 md:py-32 bg-cream overflow-hidden">
        <Reveal direction="left">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-(family-name:--font-playfair) text-charcoal mb-10 text-center">
              Szemöldök szolgáltatások
            </h2>
            <div className="rounded-2xl bg-background overflow-hidden">
              <table className="w-full text-center border-collapse">
                <thead>
                  <tr className="bg-gold text-black">
                    <th className="p-5 text-lg font-semibold">Szolgáltatás</th>
                    <th className="p-5 text-lg font-semibold">Ár</th>
                  </tr>
                </thead>
                <tbody className="text-charcoal/80">
                  <tr className="border-t border-charcoal/10">
                    <td className="p-5 text-lg text-left">Szemöldök szedés csipesszel</td>
                    <td className="p-5 text-lg">2 000 Ft</td>
                  </tr>
                  <tr className="border-t border-charcoal/10">
                    <td className="p-5 text-lg text-left">Szemöldök laminálás</td>
                    <td className="p-5 text-lg">11 500 Ft</td>
                  </tr>
                  <tr className="border-t border-charcoal/10">
                    <td className="p-5 text-lg text-left">Szemöldök festés</td>
                    <td className="p-5 text-lg">5 000 Ft</td>
                  </tr>
                  <tr className="border-t border-charcoal/10">
                    <td className="p-5 text-lg text-left">Szemöldök laminálás + festés (csomagban)</td>
                    <td className="p-5 text-lg">15 000 Ft</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="px-4 py-20 md:py-32 bg-background text-center overflow-hidden">
        <Reveal direction="up">
          <div>
            <p className="max-w-xl mx-auto text-lg md:text-xl text-charcoal/80 mb-10">
              Bizonytalan vagy, melyik effekt illik hozzád? Foglalj időpontot, és
              személyesen segítek megtalálni a stílusodhoz és szemformádhoz leginkább illő megoldást, legyen szó visszafogott, természetes hatásról vagy dúsabb,
              különleges wispy/fox effektről.
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