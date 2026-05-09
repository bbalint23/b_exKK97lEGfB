"use client"

import { motion } from "framer-motion"
import { UtensilsCrossed } from "lucide-react"
import Image from "next/image"

export function MenuSection() {
  return (
    <section id="menu" className="py-20 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-xl mb-4">
            <UtensilsCrossed className="w-4 h-4" />
            <span className="text-sm font-medium">KÍNÁLATUNK</span>
          </div>
          <h2 
            className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-secondary tracking-tight"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Étlapunk
          </h2>
          <p className="mt-4 text-secondary/70 max-w-2xl mx-auto font-light">
            Fedezd fel a menünket és válaszd ki a kedvenced!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center"
        >
          <div className="relative w-full max-w-4xl">
            <div className="relative bg-background rounded-2xl shadow-xl shadow-secondary/5 overflow-hidden border border-secondary/10">
              <div className="aspect-[3/4] sm:aspect-[4/5] lg:aspect-[3/4] relative">
                <Image
                  src="/images/zold.png"
                  alt="STACKY Etlap"
                  fill
                  priority
                  className="object-contain"
                />
                
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
