import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const LOGOS_ROW_1 = [
  { name: '자이천연석고보드', src: '/images/zai.jpg' },
  { name: 'LX Z:IN', src: '/images/LX.png' },
  { name: 'GS건설', src: '/images/GS.svg' },
  { name: '영림몰딩도어', src: '/images/youngrim.png' },
  { name: '자이천연석고보드', src: '/images/zai.jpg' },
  { name: 'LX Z:IN', src: '/images/LX.png' },
  { name: 'GS건설', src: '/images/GS.svg' },
  { name: '영림몰딩도어', src: '/images/youngrim.png' },
];

const LOGOS_ROW_2 = [
  { name: 'GS건설', src: '/images/GS.svg' },
  { name: '영림몰딩도어', src: '/images/youngrim.png' },
  { name: '자이천연석고보드', src: '/images/zai.jpg' },
  { name: 'LX Z:IN', src: '/images/LX.png' },
  { name: 'GS건설', src: '/images/GS.svg' },
  { name: '영림몰딩도어', src: '/images/youngrim.png' },
  { name: '자이천연석고보드', src: '/images/zai.jpg' },
  { name: 'LX Z:IN', src: '/images/LX.png' },
];

const PERFORMANCE_CARDS = [
  {
    logoName: '자이천연석고보드',
    tag: '3년 연속',
    title: 'GS건설 공식 납품업체 선정',
    desc: '석고보드 전 라인 공급. 신축 현장 기준 연간 안정적 납품 유지',
    stats: [
      { label: '연속 납품', value: '3년+' },
      { label: '납품 현장', value: '100+' }
    ]
  },
  {
    logoName: 'LX Z:IN',
    tag: '공식 대리점',
    title: 'LX 완성창호·도어·PF보드 공식 대리점',
    desc: '완성창호 / 도어 / PF보드 전 제품 직거래 단가 제공',
    stats: [
      { label: '단가 제공', value: '직거래' },
      { label: '제품군 취급', value: '3개' }
    ]
  },
  {
    logoName: '영림몰딩도어',
    tag: '공식 대리점',
    title: '영림몰딩도어 공식 대리점',
    desc: '도어·몰딩 전 제품 취급. 공식 대리점으로 최저 단가 보장',
    stats: [
      { label: '제품 취급', value: '전 라인' },
      { label: '단가 보장', value: '최저가' }
    ]
  }
];

export default function Partners() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);
  const row1Ref = useRef<HTMLDivElement>(null);
  const row2Ref = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  const row1Anim = useRef<gsap.core.Tween | null>(null);
  const row2Anim = useRef<gsap.core.Tween | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Header Animation
      gsap.fromTo(headerRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            once: true,
          }
        }
      );

      // 2. Slider Entry Animation
      gsap.fromTo(sliderRef.current,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: sliderRef.current,
            start: 'top 85%',
            once: true,
          }
        }
      );

      // 3. Infinite Sliding Animation (GSAP)
      if (row1Ref.current) {
        row1Anim.current = gsap.to(row1Ref.current, {
          xPercent: -50,
          repeat: -1,
          duration: 20,
          ease: 'none',
        });
      }

      if (row2Ref.current) {
        row2Anim.current = gsap.to(row2Ref.current, {
          xPercent: 0,
          repeat: -1,
          duration: 25,
          ease: 'none',
          startAt: { xPercent: -50 }
        });
      }

      // 4. Cards Staggered Animation
      cardsRef.current.forEach((card, i) => {
        if (!card) return;
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
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleMouseEnter = (row: 1 | 2) => {
    if (row === 1) row1Anim.current?.pause();
    else row2Anim.current?.pause();
  };

  const handleMouseLeave = (row: 1 | 2) => {
    if (row === 1) row1Anim.current?.play();
    else row2Anim.current?.play();
  };

  return (
    <section 
      id="partners"
      ref={sectionRef}
      className="bg-[#0d2318] py-[56px] px-[40px] overflow-hidden relative"
    >
      <div className="max-w-[1240px] mx-auto">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-16">
          <span className="text-[#C9A84C] text-[10px] font-bold tracking-[0.35em] uppercase mb-4 block">
            04 · PARTNERS
          </span>
          <h2 className="text-white text-4xl lg:text-5xl font-[800] leading-tight mb-6 font-serif tracking-tight">
            신뢰가 증명하는 파트너십
          </h2>
          <p className="text-white/40 text-[13px] leading-relaxed tracking-wide">
            대한민국 대표 건자재 브랜드와 함께합니다
          </p>
        </div>

        {/* Infinite Logo Slider */}
        <div ref={sliderRef} className="relative mb-20 overflow-hidden">
          {/* Side Fades */}
          <div className="absolute inset-y-0 left-0 w-[120px] bg-gradient-to-r from-[#0d2318] to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-[120px] bg-gradient-to-l from-[#0d2318] to-transparent z-10 pointer-events-none" />

          {/* Row 1: Right to Left (GSAP) */}
          <div 
            className="flex mb-6 cursor-pointer"
            onMouseEnter={() => handleMouseEnter(1)}
            onMouseLeave={() => handleMouseLeave(1)}
          >
            <div ref={row1Ref} className="flex whitespace-nowrap">
              {[...LOGOS_ROW_1, ...LOGOS_ROW_1].map((logo, i) => (
                <div 
                  key={i}
                  className="w-[160px] h-[60px] bg-white/90 border border-white/10 rounded-[8px] mx-[12px] flex items-center justify-center shrink-0 transition-all hover:bg-white hover:border-[#C9A84C]/30"
                >
                  <img 
                    src={logo.src} 
                    alt={logo.name} 
                    className="max-h-[36px] object-contain opacity-[0.85] hover:opacity-100 transition-opacity"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Row 2: Left to Right (GSAP) */}
          <div 
            className="flex cursor-pointer"
            onMouseEnter={() => handleMouseEnter(2)}
            onMouseLeave={() => handleMouseLeave(2)}
          >
            <div ref={row2Ref} className="flex whitespace-nowrap">
              {[...LOGOS_ROW_2, ...LOGOS_ROW_2].map((logo, i) => (
                <div 
                  key={i}
                  className="w-[160px] h-[60px] bg-white/90 border border-white/10 rounded-[8px] mx-[12px] flex items-center justify-center shrink-0 transition-all hover:bg-white hover:border-[#C9A84C]/30"
                >
                  <img 
                    src={logo.src} 
                    alt={logo.name} 
                    className="max-h-[36px] object-contain opacity-[0.85] hover:opacity-100 transition-opacity"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Performance Cards */}
        <div className="grid md:grid-cols-3 gap-[14px] mb-20">
          {PERFORMANCE_CARDS.map((card, i) => (
            <div 
              key={i}
              ref={el => { cardsRef.current[i] = el; }}
              className="bg-white/5 border border-[#C9A84C]/20 rounded-[10px] p-5 transition-all duration-300 hover:border-[#C9A84C] hover:-translate-y-1"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-white/60 text-[11px] font-bold">{card.logoName}</span>
                <span className="bg-[#C9A84C]/10 text-[#C9A84C] text-[9px] font-bold px-2 py-0.5 rounded-full">
                  {card.tag}
                </span>
              </div>
              <h3 className="text-white text-[16px] font-[800] mb-2 leading-tight tracking-tight">
                {card.title}
              </h3>
              <p className="text-white/40 text-[12px] leading-relaxed mb-6 font-medium">
                {card.desc}
              </p>
              
              <div className="pt-4 border-t border-white/5 flex gap-4">
                {card.stats.map((stat, si) => (
                  <div key={si} className="flex flex-col">
                    <span className="text-[#C9A84C] text-[15px] font-[800]">
                      {stat.value}
                    </span>
                    <span className="text-white/30 text-[9px] font-bold uppercase tracking-wider">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-12 text-center">
          <div className="flex items-center justify-center gap-6">
            <div className="h-[0.5px] w-16 bg-[#C9A84C]/20" />
            <p className="text-white/30 text-[11px] font-medium tracking-tight">
              <span className="text-[#C9A84C]">대산</span>은 대한민국 건자재 유통 업계 최초로 AI를 도입했습니다
            </p>
            <div className="h-[0.5px] w-16 bg-[#C9A84C]/20" />
          </div>
        </div>
      </div>
    </section>
  );
}
