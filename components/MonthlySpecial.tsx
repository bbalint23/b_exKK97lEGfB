import React from 'react';

const monthlyBurger = {
  isActive: true,
  name: "BEKONY BOMB SMASH",
  description: "szkibidi szkibidi, szkibidi szkibidi yeah oh yeah szkibidi, igen szkibidi. szkibidi szkibidi, szkibidi szkibidi yeah oh yeah szkibidi, igen szkibidi.",
  price: "3.690 Ft",
  imageUrl: "/burger-placeholder.png", // Ide jön majd a kép elérési útja
};

export default function MonthlySpecial() {
  if (!monthlyBurger.isActive) return null;

  return (
    <section className="w-full px-4 py-12 flex justify-center overflow-hidden">
      {/* Kártya konténer finom lebegő animációval és színes árnyékkal */}
      <div className="w-full max-w-5xl bg-[#fff5ec] rounded-[2rem] border-2 border-[#22c55e] relative shadow-[0_20px_50px_rgba(34,197,94,0.2)] animate-gentle-bounce flex flex-col md:flex-row overflow-hidden">
        
        {/* "HAVI AJÁNLAT" SÁV - Most már a 22c55e színnel */}
        <div className="bg-[#22c55e] p-3 flex items-center justify-center md:w-16 order-2 md:order-1">
          <h2 className="text-[#fff5ec] font-black text-lg md:-rotate-90 whitespace-nowrap uppercase tracking-[0.2em]">
            HÓNAP BURGERE
          </h2>
        </div>

        {/* KÉP HELYE */}
        <div className="w-full md:w-2/5 h-64 md:h-auto bg-[#00674b]/5 relative order-1 md:order-2">
          {/* Itt egy placeholder vagy maga a kép */}
          <div className="absolute inset-0 flex items-center justify-center text-[#00674b]/20 font-bold uppercase tracking-widest text-xs p-4 text-center">
             [ majdani fotó helye. ]
          </div>
          {/* Ha van kész képed, így használd:
          <img src={monthlyBurger.imageUrl} alt={monthlyBurger.name} className="w-full h-full object-contain p-6 scale-110 drop-shadow-2xl" /> 
          */}
        </div>

        {/* SZÖVEGES TARTALOM */}
        <div className="p-8 md:p-12 flex-1 flex flex-col justify-center order-3">
          <div className="mb-6">
            {/* LIMITÁLT KIADÁS - 22c55e színnel */}
            <span className="text-[#22c55e] font-black text-sm uppercase tracking-[0.3em] mb-4 block">
              // Limitált kiadás
            </span>
            
            {/* BURGER NEVE - 22c55e színnel */}
            <h3 className="text-[#22c55e] text-5xl md:text-7xl font-black italic uppercase leading-[0.9] mb-6 drop-shadow-sm">
              {monthlyBurger.name}
            </h3>
            
            <p className="text-[#00674b] text-lg md:text-xl font-medium max-w-md leading-relaxed opacity-90">
              {monthlyBurger.description}
            </p>
          </div>

          <div className="flex items-baseline gap-4">
            <span className="text-4xl md:text-5xl font-black text-[#22c55e]">
              {monthlyBurger.price}
            </span>
          </div>
        </div>
      </div>

      {/* Egyedi animációk stílusa */}
      <style jsx>{`
        @keyframes gentle-bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-gentle-bounce {
          animation: gentle-bounce 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}