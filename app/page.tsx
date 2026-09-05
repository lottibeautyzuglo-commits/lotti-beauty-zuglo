import Image from "next/image";

export default function Home() {
  return (
    <main className="flex-1">
      {/* Hero szekció */}
      <section className="flex flex-col items-center justify-center text-center px-4 py-16 md:py-32 bg-background">
        <h1 className="max-w-6xl text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-(family-name:--font-playfair) text-charcoal leading-tight md:whitespace-nowrap text-balance">
          Műszempilla építés Zuglóban, ahol a természetes hatás és a tartósság találkozik.
        </h1>
        <p className="mt-3 max-w-xl text-base md:text-lg text-charcoal/80">
          Classic, Volume és Hibrid technikák személyre szabottan.
        </p>

        <button className="group relative mt-8 md:mt-10 flex items-center gap-3 bg-gold hover:bg-gold-dark text-black px-8 py-3 rounded-full text-lg transition-colors">
          <span className="relative inline-block w-14 h-10">
            <Image
              src="/eye-open.png"
              alt=""
              fill
              className="eye-open object-contain"
            />
            <Image
              src="/eye-closed.png"
              alt=""
              fill
              className="eye-closed object-contain"
            />
          </span>

          Időpontot foglalok
        </button>
      </section>
    </main>
  );
}