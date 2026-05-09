"use client"

import { motion, AnimatePresence } from "framer-motion"
import { HelpCircle, ChevronDown } from "lucide-react"
import { useState } from "react"

const faqs = [
  {
    question: "Mi az a smash burger?",
    answer: "A smash burger egy speciális technika, ahol a húst golyó formában a forró lapra tesszük, majd egy nehéz préssel maximálisan kilapítjuk. Ez a stílus a húsról és a puha buciról szól: kevés zöldséget használunk, hogy semmi ne nyomja el a jellegzetes ropogós, karamellizált hús ízét."
  },
  {
    question: "Van vegetáriánus vagy vegán opció?",
    answer: "Sajnos jelenleg nem kínálunk vegetáriánus vagy vegán burgereket. Hiszünk abban, hogy abban kell a legjobbat nyújtanunk, amihez a legjobban értünk, ez pedig a 100% marhahúsból készült smash burger. Elnézést kérünk, ha emiatt csalódást okozunk!"
  },
  {
    question: "Lehet-e előre rendelni?",
    answer: "Természetesen! Telefonon is leadhatod a rendelésed, hogy érkezéskor már frissen és készen várjon a burgered. Így elkerülheted a várakozást a csúcsidőben."
  },
  {
    question: "Van-e házhozszállítás Nyíregyházán?",
    answer: "Igen, Nyíregyháza területén biztosítunk házhozszállítást. A részletekért, a szállítási díjakért és a pontos zónákért érdeklődj telefonon vagy nézd meg partnereink (Wolt, Foodora) felületét!"
  },
  {
    question: "Milyen fizetési módokat fogadtok el?",
    answer: "Elfogadunk készpénzt, bankkártyás fizetést és online mobilfizetést is (Apple Pay, Google Pay). A kényelmed a legfontosabb számunkra!"
  }
]

function FAQItem({ question, answer, isOpen, onClick }: { 
  question: string
  answer: string
  isOpen: boolean
  onClick: () => void 
}) {
  return (
    <div className="border-b border-secondary/10 last:border-b-0">
      <button
        onClick={onClick}
        className="w-full py-5 flex items-center justify-between text-left group"
        aria-expanded={isOpen}
      >
        {/* SEO tipp: a kérdés h3 lett */}
        <h3 className="text-base font-medium text-secondary pr-4">{question}</h3>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="flex-shrink-0"
        >
          <ChevronDown className="w-5 h-5 text-secondary/50 group-hover:text-primary transition-colors" />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-secondary/70 font-light leading-relaxed">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  // Strukturált adatok a Google számára
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  }

  return (
    <section id="faq" className="py-20 lg:py-32 bg-background">
      {/* JSON-LD Script beillesztése */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-secondary/10 text-secondary px-4 py-2 rounded-xl mb-4">
            <HelpCircle className="w-4 h-4" />
            <span className="text-sm font-medium uppercase tracking-wider">Kérdések</span>
          </div>
          <h2 
            className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-secondary tracking-tight"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Gyakori kérdések
          </h2>
          <p className="mt-4 text-secondary/70 max-w-2xl mx-auto font-light">
            Válaszok a leggyakrabban felmerülő kérdésekre a Stacky Burgerrel kapcsolatban.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-background rounded-2xl border border-secondary/10 shadow-xl shadow-secondary/5 px-6"
        >
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  )
}