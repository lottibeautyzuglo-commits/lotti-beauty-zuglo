import Image from "next/image";
import Link from "next/link";
import HeroBackground from "./components/HeroBackground";
import WorkGallery from "./components/WorkGallery";
import BookingButton from "./components/BookingButton";
import Reveal from "./components/Reveal";
import PromoPopup from "./components/PromoPopup";

export default function Home() {
  return (
    <main className="flex-1">
      <PromoPopup id="home" />
      {/* Hero szekcio */}
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

        <div className="flex justify-center px-4 py-8 md:py-10 bg-[#ece0c6]">
          <BookingButton />
        </div>
      </section>

      {/* Rovid bemutatkozas */}
      <section className="px-4 py-16 md:py-24 bg-cream text-center overflow-hidden">
        <Reveal direction="up">
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

              <div className="md:hidden relative w-full max-w-xs mx-auto aspect-3/4 rounded-2xl overflow-hidden mt-6">
                <Image
                  src="/about/about-left.jpeg"
                  alt="Csikós Lotti"
                  fill
                  className="object-cover"
                />
              </div>

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
        </Reveal>
      </section>

      {/* Szolgáltatások áttekintése */}
      <section className="px-4 py-20 md:py-32 bg-background overflow-hidden">
        <Reveal direction="left">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-(family-name:--font-playfair) text-charcoal mb-14">
              Szolgáltatások
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              <div className="bg-cream rounded-2xl p-8 md:p-10 text-center flex flex-col items-center">
                <h3 className="font-(family-name:--font-playfair) text-2xl text-charcoal mb-3">
                  Műszempilla építés
                  <br />
                  (1D-6D)
                </h3>
                <p className="text-charcoal/80 text-base">
                  Klasszikus, dús vagy különleges hatású (wispy, fox) szempillák - mindig az
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
                  Szedés, laminálás, festés - a teljes tekintet harmóniájáért.
                </p>
              </div>
            </div>
            <div className="mt-10">
              <Link
                href="/arak"
                className="text-lg text-charcoal underline underline-offset-4 decoration-gold-dark hover:text-gold-dark transition-colors"
              >
                Nézd meg a teljes árlistát
              </Link>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Galéria-előnézet */}
      <section className="px-4 py-20 md:py-32 bg-cream text-center overflow-hidden">
        <Reveal direction="right">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-(family-name:--font-playfair) text-charcoal mb-14">
              Munkáim
            </h2>
            <WorkGallery />
            <Link
              href="/galeria"
              className="inline-block mt-10 text-lg text-charcoal underline underline-offset-4 decoration-gold-dark hover:text-gold-dark transition-colors"
            >
              Teljes galéria megtekintése
            </Link>
          </div>
        </Reveal>
      </section>

      {/* Vélemények */}
      <section className="px-4 py-20 md:py-32 bg-background text-center overflow-hidden">
        <Reveal direction="left">
          <div>
            <h2 className="text-3xl md:text-4xl font-(family-name:--font-playfair) text-charcoal mb-10">
              Vélemények
            </h2>
            <p className="max-w-2xl mx-auto text-lg md:text-xl text-charcoal/70 italic">
              Ide kerülnek majd az első vendégek visszajelzései, amint elindul a szalon.
            </p>
          </div>
        </Reveal>
      </section>

      {/* Kapcsolat / Foglalás */}
      <section className="px-4 py-20 md:py-32 bg-cream text-center overflow-hidden">
        <Reveal direction="right">
          <div>
            <h2 className="text-3xl md:text-4xl font-(family-name:--font-playfair) text-charcoal mb-6">
              Lotti Beauty Zugló
            </h2>
            <p className="text-lg text-charcoal/80">Budapest, Szugló utca 61, 1145 (XIV. kerület)</p>
            <p className="text-lg text-charcoal/80 mb-8">Nyitvatartás: H-P 8:00-19:00</p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
              <button className="bg-gold hover:bg-gold-dark text-black px-8 py-3 rounded-full text-lg transition-colors">
                Időpontot foglalok
              </button>
              <Link
                href="/kapcsolat"
                className="text-lg text-charcoal underline underline-offset-4 decoration-gold-dark hover:text-gold-dark transition-colors"
              >
                Kapcsolat
              </Link>
            </div>

            <div className="max-w-4xl mx-auto rounded-2xl overflow-hidden">
              <iframe
                src="https://www.google.com/maps?q=Budapest,+Szugl%C3%B3+utca+61,+1145&output=embed"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Lotti Beauty Zugló térkép"
              />
            </div>
          </div>
        </Reveal>
      </section>
    </main>
  );
}