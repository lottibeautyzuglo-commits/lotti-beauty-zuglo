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
              Az árak forintban (Ft) értendők, az árváltoztatás jogát fenntartom.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="px-4 py-20 md:py-28 overflow-hidden">
        <Reveal direction="left">
          <div className="max-w-3xl mx-auto rounded-2xl bg-gold p-10 md:p-16 text-center uppercase">
            <h2 className="text-3xl md:text-5xl font-(family-name:--font-playfair) text-black mb-6">
              Nyitási akció
            </h2>
            <p className="text-black/80 text-xl md:text-2xl mb-6">
              2026. november 5-ig foglalt időpontok esetén:
            </p>
            <p className="font-(family-name:--font-playfair) text-black text-2xl md:text-3xl mb-2">
              Műszempilla építésnél dupla kedvezmény
            </p>
            <p className="text-black/90 text-lg md:text-xl mb-6">
              -20% az első új szett árából, majd -15% az azt követő első töltés árából
            </p>
            <p className="font-(family-name:--font-playfair) text-black text-2xl md:text-3xl">
              Minden egyéb szolgáltatásból -10% kedvezmény
            </p>
          </div>
        </Reveal>
      </section>

      <section className="px-4 py-20 md:py-32 bg-cream overflow-hidden">
        <Reveal direction="right">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-(family-name:--font-playfair) text-charcoal mb-10 text-center">
              Műszempilla építés – Új szett és Töltés
            </h2>
            <div className="md:hidden space-y-4">
              <div className="bg-background rounded-2xl p-5">
                <div className="flex items-center justify-between mb-4">
                  <p className="font-semibold text-charcoal text-xl">1D</p>
                  <div className="text-right">
                    <p className="text-sm text-charcoal/60">Új szett</p>
                    <p className="text-xl text-charcoal font-medium">17 000 Ft</p>
                  </div>
                </div>
                <div className="border-t border-charcoal/10 pt-4">
                  <p className="text-sm text-charcoal/60 mb-2">Töltés</p>
                  <div className="space-y-2">
                    <div className="flex justify-between text-charcoal/90">
                      <span className="text-sm text-charcoal/60">0-14 nap</span>
                      <span className="text-lg">13 000 Ft</span>
                    </div>
                    <div className="flex justify-between text-charcoal/90">
                      <span className="text-sm text-charcoal/60">15-21 nap</span>
                      <span className="text-lg">13 500 Ft</span>
                    </div>
                    <div className="flex justify-between text-charcoal/90">
                      <span className="text-sm text-charcoal/60">21-28 nap</span>
                      <span className="text-lg">14 500 Ft</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-background rounded-2xl p-5">
                <div className="flex items-center justify-between mb-4">
                  <p className="font-semibold text-charcoal text-xl">2D</p>
                  <div className="text-right">
                    <p className="text-sm text-charcoal/60">Új szett</p>
                    <p className="text-xl text-charcoal font-medium">18 500 Ft</p>
                  </div>
                </div>
                <div className="border-t border-charcoal/10 pt-4">
                  <p className="text-sm text-charcoal/60 mb-2">Töltés</p>
                  <div className="space-y-2">
                    <div className="flex justify-between text-charcoal/90">
                      <span className="text-sm text-charcoal/60">0-14 nap</span>
                      <span className="text-lg">14 000 Ft</span>
                    </div>
                    <div className="flex justify-between text-charcoal/90">
                      <span className="text-sm text-charcoal/60">15-21 nap</span>
                      <span className="text-lg">14 500 Ft</span>
                    </div>
                    <div className="flex justify-between text-charcoal/90">
                      <span className="text-sm text-charcoal/60">21-28 nap</span>
                      <span className="text-lg">15 500 Ft</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-background rounded-2xl p-5">
                <div className="flex items-center justify-between mb-4">
                  <p className="font-semibold text-charcoal text-xl">3D</p>
                  <div className="text-right">
                    <p className="text-sm text-charcoal/60">Új szett</p>
                    <p className="text-xl text-charcoal font-medium">20 000 Ft</p>
                  </div>
                </div>
                <div className="border-t border-charcoal/10 pt-4">
                  <p className="text-sm text-charcoal/60 mb-2">Töltés</p>
                  <div className="space-y-2">
                    <div className="flex justify-between text-charcoal/90">
                      <span className="text-sm text-charcoal/60">0-14 nap</span>
                      <span className="text-lg">15 000 Ft</span>
                    </div>
                    <div className="flex justify-between text-charcoal/90">
                      <span className="text-sm text-charcoal/60">15-21 nap</span>
                      <span className="text-lg">15 500 Ft</span>
                    </div>
                    <div className="flex justify-between text-charcoal/90">
                      <span className="text-sm text-charcoal/60">21-28 nap</span>
                      <span className="text-lg">16 500 Ft</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-background rounded-2xl p-5">
                <div className="flex items-center justify-between mb-4">
                  <p className="font-semibold text-charcoal text-xl">4D</p>
                  <div className="text-right">
                    <p className="text-sm text-charcoal/60">Új szett</p>
                    <p className="text-xl text-charcoal font-medium">21 500 Ft</p>
                  </div>
                </div>
                <div className="border-t border-charcoal/10 pt-4">
                  <p className="text-sm text-charcoal/60 mb-2">Töltés</p>
                  <div className="space-y-2">
                    <div className="flex justify-between text-charcoal/90">
                      <span className="text-sm text-charcoal/60">0-14 nap</span>
                      <span className="text-lg">16 000 Ft</span>
                    </div>
                    <div className="flex justify-between text-charcoal/90">
                      <span className="text-sm text-charcoal/60">15-21 nap</span>
                      <span className="text-lg">16 500 Ft</span>
                    </div>
                    <div className="flex justify-between text-charcoal/90">
                      <span className="text-sm text-charcoal/60">21-28 nap</span>
                      <span className="text-lg">17 500 Ft</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-background rounded-2xl p-5">
                <div className="flex items-center justify-between mb-4">
                  <p className="font-semibold text-charcoal text-xl">5D</p>
                  <div className="text-right">
                    <p className="text-sm text-charcoal/60">Új szett</p>
                    <p className="text-xl text-charcoal font-medium">23 000 Ft</p>
                  </div>
                </div>
                <div className="border-t border-charcoal/10 pt-4">
                  <p className="text-sm text-charcoal/60 mb-2">Töltés</p>
                  <div className="space-y-2">
                    <div className="flex justify-between text-charcoal/90">
                      <span className="text-sm text-charcoal/60">0-14 nap</span>
                      <span className="text-lg">17 000 Ft</span>
                    </div>
                    <div className="flex justify-between text-charcoal/90">
                      <span className="text-sm text-charcoal/60">15-21 nap</span>
                      <span className="text-lg">17 500 Ft</span>
                    </div>
                    <div className="flex justify-between text-charcoal/90">
                      <span className="text-sm text-charcoal/60">21-28 nap</span>
                      <span className="text-lg">18 500 Ft</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-background rounded-2xl p-5">
                <div className="flex items-center justify-between mb-4">
                  <p className="font-semibold text-charcoal text-xl">6D</p>
                  <div className="text-right">
                    <p className="text-sm text-charcoal/60">Új szett</p>
                    <p className="text-xl text-charcoal font-medium">24 500 Ft</p>
                  </div>
                </div>
                <div className="border-t border-charcoal/10 pt-4">
                  <p className="text-sm text-charcoal/60 mb-2">Töltés</p>
                  <div className="space-y-2">
                    <div className="flex justify-between text-charcoal/90">
                      <span className="text-sm text-charcoal/60">0-14 nap</span>
                      <span className="text-lg">18 000 Ft</span>
                    </div>
                    <div className="flex justify-between text-charcoal/90">
                      <span className="text-sm text-charcoal/60">15-21 nap</span>
                      <span className="text-lg">18 500 Ft</span>
                    </div>
                    <div className="flex justify-between text-charcoal/90">
                      <span className="text-sm text-charcoal/60">21-28 nap</span>
                      <span className="text-lg">19 500 Ft</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="hidden md:block overflow-x-auto rounded-2xl bg-background">
              <table className="w-full text-center border-collapse min-w-[620px] whitespace-nowrap">
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
                    <td className="p-5 text-lg">17 000 Ft</td>
                    <td className="p-5 text-lg">13 000 Ft</td>
                    <td className="p-5 text-lg">13 500 Ft</td>
                    <td className="p-5 text-lg">14 500 Ft</td>
                  </tr>
                  <tr className="border-t border-charcoal/10">
                    <td className="p-5 text-lg font-semibold text-charcoal">2D</td>
                    <td className="p-5 text-lg">18 500 Ft</td>
                    <td className="p-5 text-lg">14 000 Ft</td>
                    <td className="p-5 text-lg">14 500 Ft</td>
                    <td className="p-5 text-lg">15 500 Ft</td>
                  </tr>
                  <tr className="border-t border-charcoal/10">
                    <td className="p-5 text-lg font-semibold text-charcoal">3D</td>
                    <td className="p-5 text-lg">20 000 Ft</td>
                    <td className="p-5 text-lg">15 000 Ft</td>
                    <td className="p-5 text-lg">15 500 Ft</td>
                    <td className="p-5 text-lg">16 500 Ft</td>
                  </tr>
                  <tr className="border-t border-charcoal/10">
                    <td className="p-5 text-lg font-semibold text-charcoal">4D</td>
                    <td className="p-5 text-lg">21 500 Ft</td>
                    <td className="p-5 text-lg">16 000 Ft</td>
                    <td className="p-5 text-lg">16 500 Ft</td>
                    <td className="p-5 text-lg">17 500 Ft</td>
                  </tr>
                  <tr className="border-t border-charcoal/10">
                    <td className="p-5 text-lg font-semibold text-charcoal">5D</td>
                    <td className="p-5 text-lg">23 000 Ft</td>
                    <td className="p-5 text-lg">17 000 Ft</td>
                    <td className="p-5 text-lg">17 500 Ft</td>
                    <td className="p-5 text-lg">18 500 Ft</td>
                  </tr>
                  <tr className="border-t border-charcoal/10">
                    <td className="p-5 text-lg font-semibold text-charcoal">6D</td>
                    <td className="p-5 text-lg">24 500 Ft</td>
                    <td className="p-5 text-lg">18 000 Ft</td>
                    <td className="p-5 text-lg">18 500 Ft</td>
                    <td className="p-5 text-lg">19 500 Ft</td>
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
        <Reveal direction="left">
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
                    <td className="p-5 text-lg">4 000 Ft</td>
                  </tr>
                  <tr className="border-t border-charcoal/10">
                    <td className="p-5 text-lg text-left">Oldás (más munkája esetén)</td>
                    <td className="p-5 text-lg">5 500 Ft</td>
                  </tr>
                  <tr className="border-t border-charcoal/10">
                    <td className="p-5 text-lg text-left">Szempilla lifting</td>
                    <td className="p-5 text-lg">11 500 Ft</td>
                  </tr>
                  <tr className="border-t border-charcoal/10">
                    <td className="p-5 text-lg text-left">Szempilla festés</td>
                    <td className="p-5 text-lg">2 500 Ft</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="px-4 py-20 md:py-32 bg-cream overflow-hidden">
        <Reveal direction="right">
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
                    <td className="p-5 text-lg">10 500 Ft</td>
                  </tr>
                  <tr className="border-t border-charcoal/10">
                    <td className="p-5 text-lg text-left">Szemöldök festés</td>
                    <td className="p-5 text-lg">4 000 Ft</td>
                  </tr>
                  <tr className="border-t border-charcoal/10">
                    <td className="p-5 text-lg text-left">Szemöldök laminálás + festés (csomagban)</td>
                    <td className="p-5 text-lg">14 000 Ft</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="px-4 py-20 md:py-32 bg-background overflow-hidden">
        <Reveal direction="left">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-(family-name:--font-playfair) text-charcoal mb-10 text-center">
              Szabályzat
            </h2>
            <div className="rounded-2xl bg-cream p-8 md:p-10">
              <ol className="space-y-4 text-charcoal/80 text-lg list-decimal list-inside">
                <li>Az időpontodat legkésőbb 48 órával korábban díjmentesen módosíthatod vagy lemondhatod.</li>
                <li>48 órán belüli lemondás vagy módosítás esetén a lefoglalt szolgáltatás árának 50%a fizetendő.</li>
                <li>24 órán belüli lemondás vagy módosítás esetén a lefoglalt szolgáltatás árának 100%a fizetendő.</li>
                <li>Meg nem jelenés esetén a szolgáltatás teljes összege (100%) fizetendő, új időpont kizárólag a fennálló tartozás rendezése után foglalható.</li>
                <li>15 perc késés esetén a szolgáltatás időtartama rövidülhet.</li>
                <li>15 percnél hosszabb késés esetén az időpontot törölhetem, ebben az esetben a szolgáltatás teljes összege fizetendő.</li>
                <li>Amennyiben a korábbi, más szolgáltatónál végzett szempilla vagy szemöldök kezelés állapota szakmai szempontból nem teszi lehetővé a lefoglalt szolgáltatás elvégzését, fenntartom a jogot a kezelés visszautasítására. Ebben az esetben is a lefoglalt szolgáltatás teljes díja fizetendő.</li>
                <li>Az időpont lefoglalásával a fenti feltételeket elfogadod.</li>
              </ol>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="px-4 py-20 md:py-32 bg-[#faf3e4] text-center overflow-hidden">
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