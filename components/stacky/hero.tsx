"use client"

import { motion } from "framer-motion"
import { ArrowDown } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function Hero() {
  return (
    <section className="relative min-h-screen bg-background overflow-hidden pt-16">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-8rem)]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center lg:text-left"
          >
            <h1 
              className="text-4xl sm:text-5xl lg:text-7xl font-semibold text-secondary leading-tight tracking-tight"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              <span className="text-balance text-primary">STACKY</span>
              <br />
              <span>Smashburgers </span>
              <br />
              <span className="text-secondary/80 text-3xl sm:text-4xl lg:text-5xl font-normal">& more</span>
            </h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-6 text-lg sm:text-xl text-secondary/70 max-w-lg mx-auto lg:mx-0 font-light"
            >
              Smashburger úgy, ahogy kell.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Link
                href="#menu"
                className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-primary/90 text-background px-6 py-3 rounded-xl text-base font-medium transition-all active:scale-[0.98]"
              >
                Irány az étlap
                <ArrowDown className="w-4 h-4" />
              </Link>
              <Link
                href="#contact"
                className="inline-flex items-center justify-center gap-2 bg-primary/20 hover:bg-secondary/15 text-secondary px-6 py-3 rounded-xl text-base font-medium transition-all active:scale-[0.98]"
              >
                Kapcsolat
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-md lg:max-w-lg aspect-square">
              <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl shadow-secondary/10">
                <Image
                  src="/images/hero-burger.jpg"
                  alt="STACKY Smashburger"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ArrowDown className="w-5 h-5 text-secondary/40" />
        </motion.div>
      </motion.div>
    </section>
  )
}
