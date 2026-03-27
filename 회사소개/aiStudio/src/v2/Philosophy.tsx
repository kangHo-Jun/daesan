import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Zap, Target, Shield, Tag } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const VALUES = [
  {
    id: '01',
    keywordEn: 'SPEED',
    keywordKo: '신속',
    desc: '당일·익일 배송 시스템, 현장 일정에 맞춘 즉각 대응',
    theme: 'white',
    gridSpan: 'col-span-1'
  },
  {
    id: '02',
    keywordEn: 'ACCURACY',
    keywordKo: '정확',
    desc: '수량·규격·납기 오차 없는 정밀 발주 관리',
    theme: 'gold',
    gridSpan: 'col-span-2'
  },
  {
    id: '03',
    keywordEn: 'QUALITY',
    keywordKo: '품질',
    desc: '검증된 브랜드 자재만 취급, 하자 없는 현장 완성',
    theme: 'gold',
    gridSpan: 'col-span-2'
  },
  {
    id: '04',
    keywordEn: 'PRICE',
    keywordKo: '가격',
    desc: '직거래 기반 합리적 단가, 투명한 견적 공개',
    theme: 'white',
    gridSpan: 'col-span-1'
  }
];

export default function Philosophy() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // 1. Card Entrance Animations
    const cards = document.querySelectorAll('.philosophy-card');
    
    cards.forEach((card, i) => {
      gsap.fromTo(card,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          delay: i * 0.15,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 90%',
            once: true,
          }
        }
      );
    });
    
    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <section 
      id="philosophy" 
      ref={sectionRef}
      className="philosophy-section relative py-[120px] overflow-hidden"
    >
      {/* Overlay Layer (Z-index 0 to be behind content) */}
      <div 
        className="absolute inset-0 z-0 bg-[#0d2318]/45" 
      />

      <div className="relative z-10 max-w-[1240px] mx-auto px-8">
        {/* Header */}
        <div className="text-center mb-20 max-w-2xl mx-auto">
          <span className="text-[#C9A84C] text-[10px] font-bold tracking-[0.35em] uppercase mb-6 block">
            01 · PHILOSOPHY
          </span>
          <h2 className="text-white text-4xl lg:text-5xl font-[800] leading-tight mb-6 font-serif tracking-tight">
            거창한 구호보다<br />강력한 기본의 힘
          </h2>
          <p className="text-white/45 text-[13px] leading-relaxed tracking-wide">
            ㈜대산은 35년의 업력이 증명하는 4대 핵심 가치로 움직입니다
          </p>
        </div>

        {/* Card Grid - Asymmetric 3-column system to achieve 1:2 and 2:1 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-[1100px] mx-auto">
          {VALUES.map((item, idx) => (
            <div
              key={item.id}
              className={`
                philosophy-card group relative p-8 py-10 rounded-[12px] flex flex-col items-center text-center
                transition-all duration-300 ease-out hover:-translate-y-2 border-none overflow-hidden
                ${item.gridSpan}
                ${item.theme === 'gold' 
                  ? 'bg-[#C9A84C] text-white' 
                  : 'bg-white/90 backdrop-blur-[12px] text-[#1a3a28]'
                }
              `}
            >
              {/* Individual Card Hover CSS */}
              <style dangerouslySetInnerHTML={{ __html: `
                .philosophy-card:hover {
                  box-shadow: 0 20px 40px rgba(0,0,0,0.15) !important;
                }
              `}} />

              {/* Number Badge */}
              <div 
                className={`
                  w-[34px] h-[34px] rounded-[4px] flex items-center justify-center text-[12px] font-[800] mb-4 
                  ${item.theme === 'white' ? 'bg-[#C9A84C] text-white' : 'bg-white text-[#C9A84C]'}
                `}
              >
                {item.id}
              </div>

              {/* English Keyword */}
              <span className={`
                text-[11px] font-bold tracking-[0.15em] uppercase mb-1
                ${item.theme === 'white' ? 'text-[#bbbbbb]' : 'text-white/60'}
              `}>
                {item.keywordEn}
              </span>

              {/* Korean Keyword */}
              <h3 className={`
                text-[28px] font-[800] mb-4 tracking-tight
                ${item.theme === 'white' ? 'text-[#1a3a28]' : 'text-white'}
              `}>
                {item.keywordKo}
              </h3>

              {/* Description */}
              <p className={`
                text-[12px] leading-[1.65] max-w-[240px] font-medium
                ${item.theme === 'white' ? 'text-[#666666]' : 'text-white/75'}
              `}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
