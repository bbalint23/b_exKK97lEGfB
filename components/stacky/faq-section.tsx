"use client"

import { motion, AnimatePresence } from "framer-motion"
import { HelpCircle, ChevronDown } from "lucide-react"
import { useState } from "react"

const faqs = [
  {
    question: "Mi az a smash burger?",
    answer: "A smash burger egy specialis hamburger keszitesi technika, ahol a hust laposra nyomjuk a forolapon. Igy alakul ki a jellegzetes ropogos, karamellizalt szele es az intenziv hus iz."
  },
  {
    question: "Van vegetarianus vagy vegan opcio?",
    answer: "Igen! Kinalatunkban talalhatoak noveny alapu burgerek is, amelyek ugyanolyan izletesek mint a klasszikus valtozatok. Kerdezd a személyzetet az aktualis opciokortsarkokrol!"
  },
  {
    question: "Lehet-e elore rendelni?",
    answer: "Termeszetesen! Telefonon vagy a social media csatornainkon keresztul is leadhatod a rendelesed, hogy erkezeskor mar keszen varjon a burgerod."
  },
  {
    question: "Van-e hazszallitas?",
    answer: "Igen, Nyiregyhaza teruleten biztositunk hazszallitast. A reszletekert es a szallitasi zonaert kerj tajekoztatast telefonon vagy uzenetben!"
  },
  {
    question: "Milyen fizetesei modokat fogadtok el?",
    answer: "Elfogadunk keszpenzt, bankkartyas fizetesst es online mobilfizetest is (Apple Pay, Google Pay). A kenyelmed a legfontosabb szamunkra!"
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
      >
        <span className="text-base font-medium text-secondary pr-4">{question}</span>
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

  return (
    <section id="faq" className="py-20 lg:py-32 bg-background">
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
            <span className="text-sm font-medium">Kerdesek</span>
          </div>
          <h2 
            className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-secondary tracking-tight"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Gyakori kerdesek
          </h2>
          <p className="mt-4 text-secondary/70 max-w-2xl mx-auto font-light">
            Valaszok a leggyakrabban felmerulo kerdesekre
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
