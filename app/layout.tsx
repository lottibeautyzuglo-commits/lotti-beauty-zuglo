import type { Metadata } from "next";
import { Geist, Geist_Mono, Great_Vibes, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";
import CookieConsent from "./components/CookieConsent";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const greatVibes = Great_Vibes({
  variable: "--font-script",
  subsets: ["latin"],
  weight: "400",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "600", "700", "900"],
});

export const metadata: Metadata = {
  title: "Műszempilla építés XIV. kerület, Zugló | Lotti Beauty Zugló",
  description:
    "Professzionális műszempilla építés Zuglóban, a XIV. kerület szívében. Classic, Volume, Hibrid technikák egyéni igény szerint. Foglalj időpontot most!",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="hu"
      className={`${geistSans.variable} ${geistMono.variable} ${greatVibes.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col antialiased">
        <Navbar />
        {children}
        <Footer />
        <BackToTop />
        <CookieConsent />
      </body>
    </html>
  );
}