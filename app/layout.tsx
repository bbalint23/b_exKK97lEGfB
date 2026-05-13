import type { Metadata } from 'next'
import { Outfit, Space_Grotesk } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

// Betűtípusok beállítása
const outfit = Outfit({ 
  subsets: ["latin"],
  variable: '--font-outfit'
});

const spaceGrotesk = Space_Grotesk({ 
  subsets: ["latin"],
  variable: '--font-space-grotesk'
});

export const metadata: Metadata = {
  metadataBase: new URL('https://stackyburger.hu'),
  title: 'STACKY Smashburgers & more | Nyíregyháza',
  description: 'A legropogósabb szélű smash burgerek Nyíregyházán. Látogass el hozzánk és kóstold meg a legjobb smash burgereket!',
  generator: 'v0.app',
  verification: {
    google: '9Oqyw2B77jK7QKLJdcpQnFNXRoP_HNJJ0Kn_GIzNkpE',
  },
  icons: {
    icon: [
      { url: "/stacky_logo.svg" }, // Alapértelmezett
      { url: "/icon-light.png", media: "(prefers-color-scheme: light)" },
      { url: "/icon-dark.png", media: "(prefers-color-scheme: dark)" },
    ],
    apple: "/apple-icon.png",
  },
  openGraph: {
    title: 'STACKY Smashburgers & more | Nyíregyháza',
    description: 'A legropogósabb szélű smash burgerek Nyíregyházán!',
    url: 'https://stackyburger.hu',
    siteName: 'STACKY',
    images: [
      {
        url: '/opengraph-image.jpg',
        width: 1200,
        height: 630,
        alt: 'STACKY Smashburgers kínálata',
      },
    ],
    locale: 'hu_HU',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="hu" className="scroll-smooth bg-background">
      <body className={`${outfit.variable} ${spaceGrotesk.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}