import React from 'react';

const PARTNERS = [
  'LX Hausys', 'KCC', 'Younglim', 'Saint-Gobain', 'Soudal', 'Hanssem', 'Eagon', 'Dongwha'
];

export default function Partners() {
  return (
    <section className="py-[120px] bg-bg-main">
      <div className="max-w-[1200px] mx-auto px-8">
        <div className="mb-16 text-center">
          <span className="text-accent text-[11px] font-bold tracking-widest uppercase mb-4 block">Brand Partners</span>
          <h2 className="text-3xl font-bold text-text-dark tracking-tight">신뢰로 함께하는 파트너</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {PARTNERS.map((partner, idx) => (
            <div 
              key={idx} 
              className="h-32 border border-border flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-500 group"
            >
              <span className="text-text-gray font-bold tracking-tighter text-xl group-hover:text-text-dark transition-colors">
                {partner}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
