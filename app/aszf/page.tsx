import type { Metadata } from "next";
import Reveal from "../components/Reveal";

export const metadata: Metadata = {
  title: "Általános Szerződési Feltételek (ÁSZF) | Lotti Beauty Zugló",
  description:
    "A Lotti Beauty Zugló (Csikós Lotti EV) általános szerződési feltételei az időpontfoglalásra és a szépségápolási szolgáltatások igénybevételére.",
};

export default function Aszf() {
  return (
    <main className="flex-1">
      <section className="px-4 py-20 md:py-32 bg-background text-center overflow-hidden">
        <Reveal direction="up">
          <div>
            <h1 className="text-4xl md:text-5xl font-(family-name:--font-playfair) text-charcoal mb-8">
              Általános Szerződési Feltételek
            </h1>
            <p className="max-w-2xl mx-auto text-lg md:text-xl text-charcoal/80">
              Jelen Általános Szerződési Feltételek (a továbbiakban: ÁSZF) a
              Lotti Beauty Zugló szépségszalon (Szolgáltató) által nyújtott
              szolgáltatások igénybevételének feltételeit tartalmazzák.
              Hatályos: 2026. október 1-jétől.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="px-4 py-16 md:py-24 bg-cream overflow-hidden">
        <Reveal direction="left">
          <div className="max-w-3xl mx-auto space-y-12 text-charcoal/80 text-lg">

            <div>
              <h2 className="text-2xl md:text-3xl font-(family-name:--font-playfair) text-charcoal mb-4">
                1. A Szolgáltató adatai
              </h2>
              <div className="rounded-2xl bg-background p-6 md:p-8 space-y-1">
                <p><span className="font-semibold text-charcoal">Név:</span> Csikós Lotti, egyéni vállalkozó (üzleti név: Lotti Beauty Zugló)</p>
                <p><span className="font-semibold text-charcoal">Nyilvántartási szám:</span> 59498542</p>
                <p><span className="font-semibold text-charcoal">Adószám:</span> 90318344-1-23</p>
                <p><span className="font-semibold text-charcoal">Statisztikai számjel:</span> 90318344-9602-231-03</p>
                <p><span className="font-semibold text-charcoal">Székhely:</span> 6041 Kerekegyháza, Falu dűlő 2/A.</p>
                <p><span className="font-semibold text-charcoal">A szolgáltatás nyújtásának helye:</span> 1145 Budapest, Szugló utca 61. (XIV. kerület)</p>
                <p><span className="font-semibold text-charcoal">Telefon:</span> +36 30 156 4605</p>
                <p><span className="font-semibold text-charcoal">E-mail:</span> lottibeautyzuglo@gmail.com</p>
                <p><span className="font-semibold text-charcoal">Tevékenység:</span> 9602&apos;10 Sminkelés, műszempilla-építés</p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-(family-name:--font-playfair) text-charcoal mb-4">
                2. Általános rendelkezések
              </h2>
              <p className="mb-3">
                Jelen ÁSZF a Szolgáltató által a lottibeautyzuglo.hu weboldalon
                és a Szolgáltató online foglalási rendszerén (Fresha)
                keresztül, illetve telefonon vagy személyesen igénybe vehető
                szolgáltatásokra vonatkozik.
              </p>
              <p>
                Az időpont lefoglalásával a vendég (a továbbiakban: Ügyfél)
                elfogadja a jelen ÁSZF-ben, valamint a weboldal{" "}
                <a href="/szabalyzat" className="text-gold-dark underline">
                  Szabályzat
                </a>{" "}
                oldalán foglalt feltételeket.
              </p>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-(family-name:--font-playfair) text-charcoal mb-4">
                3. A szolgáltatások, az árak
              </h2>
              <p>
                A Szolgáltató által nyújtott szolgáltatások és azok
                tájékoztató jellegű, mindenkor aktuális árai a weboldal{" "}
                <a href="/arak" className="text-gold-dark underline">
                  Árak
                </a>{" "}
                oldalán érhetők el. A pontos végösszeg a szolgáltatás
                egyedi jellemzőitől (például a választott hatástól,
                szálmennyiségtől) függően eltérhet, ezt a Szolgáltató a
                kezelés előtt egyezteti az Ügyféllel.
              </p>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-(family-name:--font-playfair) text-charcoal mb-4">
                4. Időpontfoglalás
              </h2>
              <p className="mb-3">
                Időpontot foglalni a weboldalon elérhető online foglalási
                felületen (Fresha), telefonon, vagy közösségi média
                felületeinken keresztül lehet.
              </p>
              <p>
                Az online foglalási felület üzemeltetője a Fresha
                (Fresha International Limited), amely a foglalás és a
                foglaló online fizetésének technikai lebonyolítását végzi. A
                fizetési tranzakciók biztonságáért és a Fresha rendszerének
                működéséért a Szolgáltató felelősséget nem vállal.
              </p>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-(family-name:--font-playfair) text-charcoal mb-4">
                5. Foglaló, fizetés
              </h2>
              <p className="mb-3">
                Online időpontfoglaláskor a választott szolgáltatástól függő
                összegű foglaló fizetendő, amely a kezelés végösszegébe
                beszámít. A helyszínen a fennmaradó összeget készpénzzel vagy
                azonnali (átutalásos) fizetéssel lehet rendezni.
              </p>
              <p>
                A foglaló visszatérítésének feltételeit, valamint a
                lemondásra és módosításra vonatkozó szabályokat a weboldal{" "}
                <a href="/szabalyzat" className="text-gold-dark underline">
                  Szabályzat
                </a>{" "}
                oldala tartalmazza részletesen.
              </p>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-(family-name:--font-playfair) text-charcoal mb-4">
                6. Elállás, lemondás
              </h2>
              <p>
                Mivel a Szolgáltató egyedi időpontra lefoglalt, időponthoz
                kötött szolgáltatást nyújt, az Ügyfél a fogyasztó és a
                vállalkozás közötti szerződések részletes szabályairól szóló
                45/2014. (II. 26.) Korm. rendelet 29. § (1) bekezdés l)
                pontja alapján a szerződéstől nem tud elállni, miután a
                Szolgáltató az Ügyfél kifejezett kérésére, a megbeszélt
                időpontban megkezdte a szolgáltatás nyújtását. A lemondásra
                és módosításra vonatkozó feltételeket a{" "}
                <a href="/szabalyzat" className="text-gold-dark underline">
                  Szabályzat
                </a>{" "}
                oldal tartalmazza.
              </p>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-(family-name:--font-playfair) text-charcoal mb-4">
                7. Panaszkezelés, jogorvoslat
              </h2>
              <p className="mb-3">
                Az Ügyfél a szolgáltatással kapcsolatos panaszát elsődlegesen
                a Szolgáltató fenti elérhetőségein (telefon, e-mail)
                jelezheti, a Szolgáltató törekszik a panaszok mielőbbi,
                egyeztetés útján történő rendezésére.
              </p>
              <p className="mb-3">
                Amennyiben a panasz egyeztetés útján nem rendezhető, az
                Ügyfél fogyasztói jogvita esetén békéltető testületi
                eljárást kezdeményezhet. A Szolgáltató székhelye szerint
                illetékes testület:
              </p>
              <div className="rounded-2xl bg-background p-6 md:p-8">
                <p className="font-semibold text-charcoal">
                  Csongrád-Csanád Vármegyei Békéltető Testület
                </p>
                <p>Cím: 6721 Szeged, Párizsi krt. 8-12.</p>
              </div>
              <p className="mt-3">
                Az Ügyfél panaszával a fogyasztóvédelmi hatósághoz
                (területileg illetékes vármegyei kormányhivatal), illetve az
                Európai Unión belüli, határon átnyúló online vásárlásból
                eredő jogvita esetén az Európai Bizottság{" "}
                <a
                  href="https://ec.europa.eu/consumers/odr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gold-dark underline"
                >
                  online vitarendezési platformjához
                </a>{" "}
                is fordulhat.
              </p>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-(family-name:--font-playfair) text-charcoal mb-4">
                8. Felelősség
              </h2>
              <p>
                A weboldalon található tartalmak tájékoztató jellegűek, a
                Szolgáltató törekszik azok pontosságára, de nem vállal
                felelősséget az esetleges elírásokból vagy technikai
                hibákból eredő eltérésekért. A weboldal használatából eredő
                közvetett károkért a Szolgáltató felelősséget nem vállal.
              </p>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-(family-name:--font-playfair) text-charcoal mb-4">
                9. Egyéb rendelkezések
              </h2>
              <p>
                A jelen ÁSZF-ben nem szabályozott kérdésekben a magyar jog,
                így különösen a Polgári Törvénykönyvről szóló 2013. évi V.
                törvény és a fogyasztóvédelemről szóló 1997. évi CLV.
                törvény rendelkezései az irányadók. A Szolgáltató fenntartja
                a jogot a jelen ÁSZF módosítására, a módosítás a weboldalon
                történő közzététellel lép hatályba.
              </p>
            </div>

          </div>
        </Reveal>
      </section>
    </main>
  );
}