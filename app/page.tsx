import { Header } from "@/components/stacky/header"
import { Hero } from "@/components/stacky/hero"
import { MenuSection } from "@/components/stacky/menu-section"
import { FAQSection } from "@/components/stacky/faq-section"
import { ContactSection } from "@/components/stacky/contact-section"
import { Footer } from "@/components/stacky/footer"

export default function Home() {
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
