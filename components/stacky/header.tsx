"use client"

import { motion, AnimatePresence } from "framer-motion"
import { Clock, Menu, X } from "lucide-react"
import { useState, useEffect } from "react"
import Link from "next/link"

const openingHours: Record<number, { open: string; close: string } | null> = {
  0: null,  // Vasárnap
  1: null,  // Hétfő
  2: { open: "12:00", close: "20:00" }, // Kedd
  3: { open: "12:00", close: "20:00" },
  4: { open: "12:00", close: "20:00" },
  5: { open: "12:00", close: "21:00" },
  6: { open: "12:00", close: "21:00" },
}

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [todayHours, setTodayHours] = useState<string>("Betöltés...")

  useEffect(() => {
    const day = new Date().getDay()
    const hours = openingHours[day]
    setTodayHours(hours ? `${hours.open} - ${hours.close}` : "Ma: Zárva")
  }, [])

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      // A háttér a te krémfehér színed (#fff5ec) 80%-os átlátszósággal
      className="fixed top-0 left-0 right-0 z-50 bg-[#fff5ec]/80 backdrop-blur-xl border-b border-[#00674b]/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16">
          <Link href="/" className="flex items-center group">
            <span 
              className="text-xl sm:text-2xl font-bold tracking-tight text-[#00674b] transition-transform group-hover:scale-105" 
              style={{ fontFamily: 'var(--font-display)' }}
            >
              STACKY
            </span>
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex items-center gap-8">
            <div className="flex items-center gap-2 text-xs font-medium text-[#00674b]/60 bg-[#00674b]/5 px-3 py-1.5 rounded-full border border-[#00674b]/10">
              <Clock className="w-3.5 h-3.5 text-[#00674b]" />
              <span>{todayHours}</span>
            </div>
            
            {["ÉTLAP", "GYIK", "KAPCSOLAT"].map((item) => (
              <Link
                key={item}
                href={`#${item === "ÉTLAP" ? "menu" : item === "GYIK" ? "faq" : "contact"}`}
                className="text-[#00674b]/80 hover:text-[#00674b] transition-colors text-xs font-bold tracking-widest"
              >
                {item}
              </Link>
            ))}
          </nav>

          {/* MOBILE TOGGLE */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-[#00674b]"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* MOBILE NAV */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden overflow-hidden bg-[#fff5ec]"
            >
              <div className="flex flex-col gap-4 py-6 border-t border-[#00674b]/10">
                <div className="flex items-center gap-2 text-sm font-semibold text-[#00674b] px-2">
                  <Clock className="w-4 h-4" />
                  <span>Ma: {todayHours}</span>
                </div>
                {["ÉTLAP", "GYIK", "KAPCSOLAT"].map((item) => (
                  <Link
                    key={item}
                    href={`#${item === "ÉTLAP" ? "menu" : item === "GYIK" ? "faq" : "contact"}`}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-[#00674b] hover:bg-[#00674b]/5 p-2 rounded-lg transition-colors text-lg font-bold"
                  >
                    {item}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  )
}