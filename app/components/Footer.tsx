import Link from "next/link";
import AnimatedLogo from "./AnimatedLogo";

export default function Footer() {
  return (
    <footer className="bg-cream border-t border-charcoal/10">
      <div className="max-w-6xl mx-auto px-4 py-16 flex flex-col md:flex-row md:justify-between gap-12 text-center md:text-left">
        <div className="flex flex-col items-center md:items-start">
          <div className="w-70">
            <AnimatedLogo />
            <span className="block text-center text-sm tracking-[0.3em] -mt-1">ZUGLÓ</span>
            <span className="block text-center text-[0.65rem] tracking-[0.15em] text-charcoal/60 mt-1">
              MAKEUP - LASHES - BROWS
            </span>
          </div>
          <p className="mt-4 text-charcoal/70 max-w-xs">
            Műszempilla építés Zuglóban, természetes hatással és tartós eredménnyel.
          </p>
        </div>

        <h3 className="text-sm font-semibold tracking-[0.2em] text-gold-dark mb-4">
  NYITVATARTÁS
</h3>
<p className="text-charcoal/80">Hétfőtől csütörtökig: 10:00-19:00</p>
<p className="text-charcoal/80 mb-1">Péntek: 10:00-17:00</p>
<p className="text-charcoal/80">Szombat - Vasárnap: Zárva</p>

        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-sm font-semibold tracking-[0.2em] text-gold-dark mb-4">
            ELÉRHETŐSÉGEK
          </h3>

          <div className="flex items-start gap-2 mb-2">
            <svg className="w-5 h-5 text-gold-dark shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
            </svg>
            <p className="text-charcoal/80">
              Budapest, Szugló utca 61, 1145
              <br />
              XIV. kerület, Zugló
            </p>
          </div>

          <div className="flex items-center gap-2 mb-2">
            <svg className="w-5 h-5 text-gold-dark shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h1.5a1.5 1.5 0 001.5-1.5v-2.415a1.5 1.5 0 00-1.146-1.457l-3.585-.897a1.5 1.5 0 00-1.5.428l-1.045 1.045a12.02 12.02 0 01-5.68-5.68l1.045-1.045a1.5 1.5 0 00.428-1.5l-.897-3.585A1.5 1.5 0 007.365 4.5H4.95A1.5 1.5 0 003.45 6z" />
            </svg>
            <a href="tel:+36301564605" className="text-charcoal/80 hover:text-gold-dark transition-colors">
              +36 30 156 4605
            </a>
          </div>

          <div className="flex items-center gap-2 mb-6">
            <svg className="w-5 h-5 text-gold-dark shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
            </svg>
            <a href="mailto:lottibeautyzuglo@gmail.com" className="text-charcoal/80 hover:text-gold-dark transition-colors">
              lottibeautyzuglo@gmail.com
            </a>
          </div>

          <div className="flex gap-3">
            <a
              href="https://www.instagram.com/lotti.lashstylist/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-9 h-9 rounded-full bg-gold hover:bg-gold-dark flex items-center justify-center transition-colors"
            >
              <svg className="w-4 h-4 text-black" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
            </a>

            <a
              href="https://www.facebook.com/lotti.csikos?locale=hu_HU"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="w-9 h-9 rounded-full bg-gold hover:bg-gold-dark flex items-center justify-center transition-colors"
            >
              <svg className="w-4 h-4 text-black" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879v-6.988h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.891h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-charcoal/10 px-4 py-6 text-center text-sm text-charcoal/60">
        &copy; {new Date().getFullYear()} Lotti Beauty Zugló. Minden jog fenntartva.
        {" · "}
        <Link href="/aszf" className="hover:text-gold-dark transition-colors">
          ÁSZF
        </Link>
      </div>
    </footer>
  );
}