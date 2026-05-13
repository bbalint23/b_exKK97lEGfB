import { Header } from "@/components/stacky/header"
import { Hero } from "@/components/stacky/hero"
import { MenuSection } from "@/components/stacky/menu-section"
import { FAQSection } from "@/components/stacky/faq-section"
import { ContactSection } from "@/components/stacky/contact-section"
import { Footer } from "@/components/stacky/footer"

export default function Home() {
  // Kapcsoló: true = Hamarosan oldal, false = Éles oldal
  const isComingSoon = true;

  if (isComingSoon) {
    return (
      <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-[#00674b] px-6 text-center">
        
        {/* HÁTTÉR DEKORÁCIÓ: A krémszínű fény (fff5ec) a mélyzöld háttéren */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#fff5ec]/10 rounded-full blur-[120px] pointer-events-none" />

        {/* LOGO EGYSÉG: Krémszínű alap (fff5ec), mélyzöld betűvel (00674b) */}
        <div className="relative mb-12 animate-bounce duration-[3000ms]">
          <div className="h-24 w-24 rounded-[2.5rem] bg-[#fff5ec] flex items-center justify-center shadow-[0_20px_50px_rgba(0,0,0,0.3)] transform rotate-12">
             <span className="text-6xl font-black text-[#00674b] italic -ml-1">S</span>
          </div>
          {/* Kis dekor csillogás */}
          <div className="absolute -top-2 -right-2 h-6 w-6 bg-[#fff5ec] rounded-full blur-sm opacity-50 animate-pulse" />
        </div>
        
        {/* FŐCÍM: Krémszínű szöveg, hogy jól olvasható legyen a zöldön */}
        <div className="space-y-2">
          <h1 className="font-outfit text-[clamp(3.5rem,15vw,6rem)] font-black text-[#fff5ec] tracking-tight uppercase italic leading-[0.85]">
            Stacky
          </h1>
          <h1 className="font-outfit text-[clamp(3.5rem,15vw,6rem)] font-black text-[#fff5ec]/80 tracking-tight uppercase italic leading-[0.85]">
            Smash
          </h1>
        </div>
        
        {/* LEÍRÁS: Krémszínű szöveg alacsonyabb áttetszőséggel */}
        <p className="mt-8 font-space-grotesk text-base md:text-xl text-[#fff5ec]/70 max-w-[280px] md:max-w-md leading-relaxed border-t border-[#fff5ec]/20 pt-8">
          Nyíregyháza legropogósabb szélű burgerei már sülnek. <br className="hidden md:block" /> Hamarosan találkozunk!
        </p>

        {/* LOADING BAR: A te krémszíneddel (fff5ec) fut a csík */}
        <div className="mt-12 flex flex-col items-center w-full max-w-[200px]">
          <div className="w-full h-1 bg-[#fff5ec]/20 rounded-full overflow-hidden">
            <div className="h-full bg-[#fff5ec] animate-[loading_2s_ease-in-out_infinite]" />
          </div>
          <p className="mt-4 text-[#fff5ec] font-space-grotesk text-xs uppercase tracking-[0.3em] font-bold">
            Loading Perfection
          </p>
        </div>

        {/* LÁBJEGYZET */}
        <div className="absolute bottom-10 flex flex-col items-center gap-2">
          <p className="text-[#fff5ec]/40 font-space-grotesk text-[10px] uppercase tracking-widest italic font-bold">
            Nyitás: 2026. Június
          </p>
        </div>

        {/* CSS Animáció a betöltő csíkhoz */}
        <style jsx italic>{`
          @keyframes loading {
            0% { transform: translateX(-100%); }
            50% { transform: translateX(0); }
            100% { transform: translateX(100%); }
          }
        `}</style>
      </main>
    );
  }

  // ÉLES OLDAL
  return (
    <main>
      <Header />
      <Hero />
      <MenuSection />
      <FAQSection />
      <ContactSection />
      <Footer />
    </main>
  )
}