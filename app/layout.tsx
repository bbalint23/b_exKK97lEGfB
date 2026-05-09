import type { Metadata } from 'next'
import { Outfit, Space_Grotesk } from 'next/font/google' //Inter csere Outfit-re
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

// Ez lesz az alapértelmezett betűtípus
const outfit = Outfit({ 
  subsets: ["latin"],
  variable: '--font-outfit'
});

// Ez marad a címeknek (H1, H2, H3)
const spaceGrotesk = Space_Grotesk({ 
  subsets: ["latin"],
  variable: '--font-space-grotesk'
});

export const metadata: Metadata = {
  title: 'STACKY Smashburgers & more | Nyíregyháza',
  description: 'A legropogósabb szélű smash burgerek Nyíregyházán. Látogass el hozzánk és kóstold meg a legjobb smash burgereket!',
  generator: 'v0.app',
  icons: {
    icon: "/stacky_logo.svg", // Ez a fő ikon a böngésző fülre
    apple: "/stacky_logo.svg", // Mobilos "kezdőképernyőhöz" is jó lesz ez egyelőre  
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="hu" className="scroll-smooth bg-background">
      {/* 
          A 'font-sans' mostantól az Outfit lesz, 
          a címeknél pedig majd manuálisan a 'font-heading' osztályt 
      */}
      <body className={`${outfit.variable} ${spaceGrotesk.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
