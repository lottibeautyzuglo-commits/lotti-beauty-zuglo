export default function Home() {
  return (
    <main className="flex-1">
      {/* Hero szekció */}
      <section className="flex flex-col items-center justify-center text-center px-4 py-24 md:py-32 bg-background">
        <h1 className="max-w-6xl text-xl md:text-3xl font-(family-name:--font-playfair) text-charcoal leading-tight whitespace-nowrap">
          Műszempilla építés Zuglóban, ahol a természetes hatás és a tartósság találkozik.
        </h1>
        <p className="mt-3 max-w-xl text-lg text-charcoal/80">
          Classic, Volume és Hibrid technikák személyre szabottan.
        </p>
        <button className="mt-4 bg-gold hover:bg-gold-dark text-black px-8 py-3 rounded-full text-lg transition-colors">
          Időpontot foglalok
        </button>
      </section>
    </main>
  );
}