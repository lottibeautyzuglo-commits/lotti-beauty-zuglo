import Image from "next/image";
import Link from "next/link";
import HeroBackground from "./components/HeroBackground";

export default function Home() {
  return (
    <main className="flex-1">
      {/* Hero szekció */}
      <section className="relative overflow-hidden">
        <div className="relative flex flex-col items-center justify-center text-center px-4 py-24 md:py-40 min-h-95 md:min-h-140 overflow-hidden">
          <HeroBackground />

          <div className="relative z-10 flex flex-col items-center">
            <h1 className="max-w-6xl text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-(family-name:--font-playfair) text-charcoal leading-tight md:whitespace-nowrap text-balance">
              Műszempilla építés Zuglóban, ahol a természetes hatás és a tartósság találkozik.
            </h1>
            <p className="mt-3 max-w-xl text-base md:text-lg text-charcoal/80">
              Classic, Volume és Hibrid technikák személyre szabottan.
            </p>
          </div>
        </div>

        <div className="flex justify-center px-4 py-8 md:py-10 bg-cream">
          <button className="group relative flex items-center gap-3 bg-gold hover:bg-gold-dark text-black px-8 py-3 rounded-full text-lg transition-colors">
            <span className="relative inline-block w-14 h-10">
              <Image src="/eye-open.png" alt="" fill className="eye-open object-contain" />
              <Image src="/eye-closed.png" alt="" fill className="eye-closed object-contain" />
            </span>
            Időpontot foglalok
          </button>
        </div>
      </section>

      {/* Rövid bemutatkozás */}
      <section className="px-4 py-16 md:py-24 bg-cream text-center">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-[1fr_2fr_1fr] items-center gap-10">
          <div className="hidden md:block relative w-full max-w-sm mx-auto aspect-3/4 rounded-2xl overflow-hidden">
            <Image
              src="/about/about-left.jpeg"
              alt="Csikós Lotti"
              fill
              className="object-cover"
            />
          </div>

          <div>
            <p className="text-xl md:text-2xl text-charcoal/90 leading-relaxed">
  Üdvözöllek Kedves Látogató!
  <br />
  Csikós Lotti vagyok, szempillastylist.
</p>
            <Link
              href="/rolam"
              className="inline-block mt-6 text-lg text-charcoal underline underline-offset-4 decoration-gold-dark hover:text-gold-dark transition-colors"
            >
              Tudj meg többet rólam
            </Link>
          </div>

          <div className="hidden md:block relative w-full max-w-sm mx-auto aspect-3/4 rounded-2xl overflow-hidden">
            <Image
              src="/about/about-right.jpeg"
              alt="Csikós Lotti munka közben"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Szolgáltatások áttekintése */}
<section className="px-4 py-20 md:py-32 bg-background">
  <h2 className="text-center text-3xl md:text-4xl font-(family-name:--font-playfair) text-charcoal mb-14">
    Szolgáltatások
  </h2>
  <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8">
    <div className="bg-cream rounded-2xl p-8 md:p-10 text-center flex flex-col items-center">
      <h3 className="font-(family-name:--font-playfair) text-2xl text-charcoal mb-3">
        Szempillaépítés (1D–6D)
      </h3>
      <p className="text-charcoal/80 text-base">
        Klasszikus, dús vagy különleges hatású (wispy, fox) szempillák – mindig az
        egyéni szemformádhoz igazítva.
      </p>
    </div>
    <div className="bg-cream rounded-2xl p-8 md:p-10 text-center flex flex-col items-center">
      <h3 className="font-(family-name:--font-playfair) text-2xl text-charcoal mb-3">
        Szempilla lifting &amp; festés
      </h3>
      <p className="text-charcoal/80 text-base">
        A természetes szempilláid göndörítéséhez és mélyebb színéhez.
      </p>
    </div>
    <div className="bg-cream rounded-2xl p-8 md:p-10 text-center flex flex-col items-center">
      <h3 className="font-(family-name:--font-playfair) text-2xl text-charcoal mb-3">
        Szemöldök szolgáltatások
      </h3>
      <p className="text-charcoal/80 text-base">
        Szedés, laminálás, festés – a teljes tekintet harmóniájáért.
      </p>
    </div>
  </div>
  <div className="text-center mt-10">
    <Link
      href="/arak"
      className="text-lg text-charcoal underline underline-offset-4 decoration-gold-dark hover:text-gold-dark transition-colors"
    >
      Nézd meg a teljes árlistát
    </Link>
  </div>
</section>

      {/* Galéria-előnézet */}
      <section className="px-4 py-16 md:py-24 bg-cream text-center">
        <h2 className="text-2xl md:text-3xl font-(family-name:--font-playfair) text-charcoal mb-10">
          Munkáim
        </h2>
        <div className="max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="aspect-square rounded-xl bg-gold/30 flex items-center justify-center text-charcoal/50 text-sm"
            >
              Hamarosan
            </div>
          ))}
        </div>
        <Link
          href="/galeria"
          className="inline-block mt-8 text-charcoal underline underline-offset-4 decoration-gold-dark hover:text-gold-dark transition-colors"
        >
          Teljes galéria megtekintése
        </Link>
      </section>

      {/* Vélemények */}
      <section className="px-4 py-16 md:py-24 bg-background text-center">
        <h2 className="text-2xl md:text-3xl font-(family-name:--font-playfair) text-charcoal mb-8">
          Vélemények
        </h2>
        <p className="max-w-xl mx-auto text-charcoal/70 italic">
          „Ide kerülnek majd az első vendégek visszajelzései, amint elindul a szalon."
        </p>
      </section>

      {/* Kapcsolat / Foglalás */}
      <section className="px-4 py-16 md:py-24 bg-cream text-center">
        <h2 className="text-2xl md:text-3xl font-(family-name:--font-playfair) text-charcoal mb-4">
          Lotti Beauty Zugló
        </h2>
        <p className="text-charcoal/80">Budapest, Szugló utca 61, 1145 (XIV. kerület)</p>
        <p className="text-charcoal/80 mb-8">Nyitvatartás: H–P 8:00–19:00</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="bg-gold hover:bg-gold-dark text-black px-8 py-3 rounded-full text-lg transition-colors">
            Időpontot foglalok
          </button>
          <Link
            href="/kapcsolat"
            className="text-charcoal underline underline-offset-4 decoration-gold-dark hover:text-gold-dark transition-colors"
          >
            Elérhetőségek és térkép
          </Link>
        </div>
      </section>
    </main>
  );
}