import { Header } from "@/components/stacky/header"
import { Hero } from "@/components/stacky/hero"
import { MenuSection } from "@/components/stacky/menu-section"
import { FAQSection } from "@/components/stacky/faq-section"
import { ContactSection } from "@/components/stacky/contact-section"
import { Footer } from "@/components/stacky/footer"

export default function Home() {
  // Állítsd false-ra, ha megvolt a nyitás és élesíteni akarod a teljes oldalt!
  const isComingSoon = true;

  if (isComingSoon) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center bg-[#0a0a0a] px-4 text-center">
        {/* Dekorációs elem / Logó helye */}
        <div className="mb-8 h-20 w-20 rounded-2xl bg-yellow-400 flex items-center justify-center rotate-3 shadow-[0_0_30px_rgba(250,204,21,0.3)]">
           <span className="text-5xl font-black text-black -rotate-3 italic">S</span>
        </div>
        
        {/* Főcím */}
        <h1 className="font-outfit text-6xl md:text-8xl font-black text-white tracking-tighter uppercase italic leading-none">
          Stacky <span className="text-yellow-400">Smashburgers</span>
        </h1>
        
        {/* Leírás */}
        <p className="mt-6 font-space-grotesk text-lg md:text-2xl text-gray-400 max-w-lg leading-relaxed">
          Nyíregyháza legdurvább burgerei a belvárosban. Hamarosan találkozunk!
        </p>

        {/* Állapotjelző */}
        <div className="mt-12 flex flex-col items-center gap-4">
          <div className="py-2 px-6 border border-yellow-400/50 rounded-full text-yellow-400 font-space-grotesk text-sm uppercase tracking-[0.2em] animate-pulse">
            Előkészületek folyamatban
          </div>
          <p className="text-gray-600 font-space-grotesk text-sm uppercase tracking-widest">
            Nyitás: 2026. xx. hó
          </p>
        </div>

        {/* Alsó díszítés / Link */}
        <div className="absolute bottom-10 left-0 right-0 flex justify-center opacity-30">
          <span className="font-outfit text-white font-bold tracking-widest">STACKYBURGER.HU</span>
        </div>
      </main>
    );
  }

  // Ez a rész akkor fut le, ha a isComingSoon = false
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