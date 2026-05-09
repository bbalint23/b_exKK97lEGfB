"use client"

import { motion } from "framer-motion"
import { Clock, Menu, X } from "lucide-react"
import { useState, useEffect } from "react"
import Link from "next/link"

const openingHours: Record<number, { open: string; close: string } | null> = {
  0: null,  //Vasárnap
  1: null, //Hétfő
  2: { open: "12:00", close: "20:00" }, //Kedd
  3: { open: "12:00", close: "20:00" },
  4: { open: "12:00", close: "20:00" },
  5: { open: "12:00", close: "21:00" },
  6: { open: "12:00", close: "21:00" },
}

function getTodayHours() {
  const day = new Date().getDay()
  const hours = openingHours[day]
  if (!hours) return "Zárva"
  return `${hours.open} - ${hours.close}`
}

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [todayHours, setTodayHours] = useState("")

  useEffect(() => {
    setTodayHours(getTodayHours())
  }, [])

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-secondary/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16">
          <Link href="/" className="flex items-center">
            <span className="text-xl sm:text-2xl font-bold tracking-tight text-primary" style={{ fontFamily: 'var(--font-display)' }}>
              STACKY
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <div className="flex items-center gap-2 text-sm text-secondary/70">
              <Clock className="w-4 h-4" />
              <span>Ma: {todayHours}</span>
            </div>
            <Link
              href="#menu"
              className="text-secondary hover:text-primary transition-colors text-sm font-medium"
            >
              ÉTLAP
            </Link>
            <Link
              href="#faq"
              className="text-secondary hover:text-primary transition-colors text-sm font-medium"
            >
              GYIK
            </Link>
            <Link
              href="#contact"
              className="text-secondary hover:text-primary transition-colors text-sm font-medium"
            >
              KAPCSOLAT
            </Link>
          </nav>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-secondary"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden py-4 border-t border-secondary/10"
          >
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2 text-sm text-secondary/70">
                <Clock className="w-4 h-4" />
                <span>Ma: {todayHours}</span>
              </div>
              <Link
                href="#menu"
                onClick={() => setIsMenuOpen(false)}
                className="text-secondary hover:text-primary transition-colors text-sm font-medium"
              >
                ÉTLAP
              </Link>
              <Link
                href="#faq"
                onClick={() => setIsMenuOpen(false)}
                className="text-secondary hover:text-primary transition-colors text-sm font-medium"
              >
                GYIK
              </Link>
              <Link
                href="#contact"
                onClick={() => setIsMenuOpen(false)}
                className="text-secondary hover:text-primary transition-colors text-sm font-medium"
              >
                KAPCSOLAT
              </Link>
            </div>
          </motion.div>
        )}
      </div>
    </motion.header>
  )
}
