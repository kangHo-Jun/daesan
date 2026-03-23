import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Zap, Target, Shield, Tag } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const VALUES = [
  {
    id: '01',
    keyword: '신속 SPEED',
    desc: '당일·익일 배송 시스템, 현장 일정에 맞춘 즉각 대응',
    icon: Zap,
    style: 'basic'
  },
  {
    id: '02',
    keyword: '정확 ACCURACY',
    desc: '수량·규격·납기 오차 없는 정밀 발주 관리',
    icon: Target,
    style: 'highlight'
  },
  {
    id: '03',
    keyword: '품질 QUALITY',
    desc: '검증된 브랜드 자재만 취급, 하자 없는 현장 완성',
    icon: Shield,
    style: 'basic'
  },
  {
    id: '04',
    keyword: '가격 PRICE',
    desc: '직거래 기반 합리적 단가, 투명한 견적 공개',
    icon: Tag,
    style: 'basic'
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
        className="absolute inset-0 z-0 bg-[#0d2318]/65" 
      />

      <div className="relative z-10 max-w-[1200px] mx-auto px-8">
        {/* Header */}
        <div className="text-center mb-20 max-w-2xl mx-auto">
          <span className="text-[#C9A84C] text-[10px] font-bold tracking-[0.35em] uppercase mb-6 block">
            01 · PHILOSOPHY
          </span>
          <h2 className="text-white text-4xl lg:text-5xl font-[800] leading-tight mb-6 font-serif tracking-tight">
            거창한 구호보다<br />강력한 기본의 힘
          </h2>
          <p className="text-white/50 text-sm md:text-base leading-relaxed tracking-wide">
            ㈜대산은 35년의 업력이 증명하는 4대 핵심 가치로 움직입니다
          </p>
        </div>

        {/* Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[1000px] mx-auto">
          {VALUES.map((item, idx) => (
            <div
              key={item.id}
              className={`
                philosophy-card group relative p-10 rounded-xl transition-all duration-300 hover:-translate-y-2
                ${item.style === 'highlight' 
                  ? 'bg-[#C9A84C] text-[#0d2318]' 
                  : 'bg-[#0d2318]/75 backdrop-blur-md border border-[#C9A84C]/30 text-white'
                }
              `}
            >
              {/* Number Badge */}
              <div className={`
                inline-flex items-center justify-center px-2 py-0.5 border text-[10px] mb-8
                ${item.style === 'highlight' ? 'border-[#0d2318]/30' : 'border-[#C9A84C]/50 text-[#C9A84C]'}
              `}>
                {item.id}
              </div>

              {/* Icon */}
              <div className="mb-6">
                <item.icon className="w-8 h-8 stroke-[1.5]" />
              </div>

              {/* Keyword */}
              <h3 className="text-2xl font-bold mb-4 tracking-tight">
                {item.keyword}
              </h3>

              {/* Description */}
              <p className={`
                text-sm leading-relaxed max-w-[280px]
                ${item.style === 'highlight' ? 'text-[#0d2318]/80' : 'text-white/60'}
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
