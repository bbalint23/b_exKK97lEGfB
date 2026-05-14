import React from 'react';

export const metadata = {
  title: 'Jogi Nyilatkozat | STACKY',
  robots: 'noindex, nofollow',
};

export default function JogiNyilatkozat() {
  return (
    <main className="max-w-4xl mx-auto py-20 px-6 font-sans text-white/80 bg-black min-h-screen">
      <h1 className="text-3xl font-bold mb-8 text-white">Jogi Nyilatkozat & Impresszum</h1>
      
      <section className="mb-8 border-l-2 border-primary pl-4">
        <h2 className="text-xl font-semibold mb-4 text-white">1. Impresszum</h2>
        <p>A weboldal üzemeltetője:</p>
        <ul className="list-none mt-2 space-y-1">
          <li><strong>Név/Cégnév:</strong> [TM ev.]</li>
          <li><strong>Székhely:</strong> [székhely cím]</li>
          <li><strong>Adószám:</strong> [adószám]</li>
          <li><strong>Email:</strong> info@stacky burger.hu</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4 text-white">2. Adatkezelés</h2>
        <p>A weboldalon található kapcsolatfelvételi űrlap kitöltésével a felhasználó hozzájárul adatainak kezeléséhez. Az adatokat kizárólag kapcsolattartásra használjuk.</p>
        <p className="mt-2 text-sm italic">Tárhelyszolgáltató: Vercel Inc. (USA)</p>
      </section>

      <section className="mb-8 text-sm opacity-50">
        <h2 className="text-lg font-semibold mb-2 text-white">3. Szerzői jogok</h2>
        <p>A STACKY logó, a fotók és a szöveges tartalom szerzői jogvédelem alatt állnak.</p>
      </section>
    </main>
  );
}