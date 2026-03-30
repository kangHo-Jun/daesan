import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const LOGOS_ROW_1 = [
  { name: '자이천연석고보드', src: `${import.meta.env.BASE_URL}images/zai.jpg` },
  { name: 'LX Z:IN', src: `${import.meta.env.BASE_URL}images/LX.png` },
  { name: 'GS건설', src: `${import.meta.env.BASE_URL}images/GS.svg` },
  { name: '영림몰딩도어', src: `${import.meta.env.BASE_URL}images/youngrim.png` },
  { name: '자이천연석고보드', src: `${import.meta.env.BASE_URL}images/zai.jpg` },
  { name: 'LX Z:IN', src: `${import.meta.env.BASE_URL}images/LX.png` },
  { name: 'GS건설', src: `${import.meta.env.BASE_URL}images/GS.svg` },
  { name: '영림몰딩도어', src: `${import.meta.env.BASE_URL}images/youngrim.png` },
];

const LOGOS_ROW_2 = [
  { name: 'GS건설', src: `${import.meta.env.BASE_URL}images/GS.svg` },
  { name: '영림몰딩도어', src: `${import.meta.env.BASE_URL}images/youngrim.png` },
  { name: '자이천연석고보드', src: `${import.meta.env.BASE_URL}images/zai.jpg` },
  { name: 'LX Z:IN', src: `${import.meta.env.BASE_URL}images/LX.png` },
  { name: 'GS건설', src: `${import.meta.env.BASE_URL}images/GS.svg` },
  { name: '영림몰딩도어', src: `${import.meta.env.BASE_URL}images/youngrim.png` },
  { name: '자이천연석고보드', src: `${import.meta.env.BASE_URL}images/zai.jpg` },
  { name: 'LX Z:IN', src: `${import.meta.env.BASE_URL}images/LX.png` },
];

const PERFORMANCE_CARDS = [
  {
    logoName: '자이천연석고보드',
    tag: '3년 연속',
    title: 'GS건설 공식 납품업체 선정',
    desc: '석고보드 전 라인 공급. 신축 현장 기준 연간 안정적 납품 유지',
    stats: [
      { label: '연속 납품', value: '3년+' },
      { label: '납품 현장', value: '100+' },
    ],
  },
  {
    logoName: 'LX Z:IN',
    tag: '공식 대리점',
    title: 'LX 완성창호·도어·PF보드 공식 대리점',
    desc: '완성창호 · 도어 · PF보드 전 제품 직거래 단가 제공',
    stats: [
      { label: '단가 제공', value: '직거래' },
      { label: '제품군 취급', value: '3개' },
    ],
  },
  {
    logoName: '영림몰딩도어',
    tag: '공식 대리점',
    title: '영림몰딩도어 공식 대리점',
    desc: '도어·몰딩 전 제품 취급. 공식 대리점으로 최저 단가 보장',
    stats: [
      { label: '제품 취급', value: '전 라인' },
      { label: '단가 보장', value: '최저가' },
    ],
  },
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
      gsap.fromTo(
        headerRef.current,
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
          },
        },
      );

      gsap.fromTo(
        sliderRef.current,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: sliderRef.current,
            start: 'top 85%',
            once: true,
          },
        },
      );

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
          startAt: { xPercent: -50 },
        });
      }

      cardsRef.current.forEach((card, i) => {
        if (!card) return;
        gsap.fromTo(
          card,
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
            },
          },
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
    <section id="partners" ref={sectionRef} className="relative overflow-hidden bg-[#f5f0e8] px-[40px] py-[80px]">
      <div className="mx-auto max-w-[1100px]">
        <div ref={headerRef} className="mb-14 text-center">
          <h2 className="mb-5 font-[700] leading-[1.3] tracking-tight text-[#1a3a28]" style={{ fontFamily: "'Nanum Myeongjo', serif", fontSize: '38px' }}>
            신뢰가 증명하는 파트너십
          </h2>
          <p className="text-[16px] font-normal leading-[1.75] text-[rgba(26,58,40,0.6)]" style={{ fontFamily: 'Pretendard, sans-serif' }}>
            대한민국 대표 건자재 브랜드와 함께합니다
          </p>
        </div>

        <div ref={sliderRef} className="relative mb-16 overflow-hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-[120px] bg-gradient-to-r from-[#f5f0e8] to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-[120px] bg-gradient-to-l from-[#f5f0e8] to-transparent" />

          <div className="mb-6 flex cursor-pointer" onMouseEnter={() => handleMouseEnter(1)} onMouseLeave={() => handleMouseLeave(1)}>
            <div ref={row1Ref} className="flex whitespace-nowrap">
              {[...LOGOS_ROW_1, ...LOGOS_ROW_1].map((logo, i) => (
                <div
                  key={i}
                  className="mx-[12px] flex h-[60px] w-[160px] shrink-0 items-center justify-center rounded-[8px] border border-[#1a3a28]/10 bg-white transition-colors hover:border-[#C9A84C]/40"
                >
                  <img src={logo.src} alt={logo.name} className="max-h-[36px] object-contain opacity-[0.85] transition-opacity hover:opacity-100" />
                </div>
              ))}
            </div>
          </div>

          <div className="flex cursor-pointer" onMouseEnter={() => handleMouseEnter(2)} onMouseLeave={() => handleMouseLeave(2)}>
            <div ref={row2Ref} className="flex whitespace-nowrap">
              {[...LOGOS_ROW_2, ...LOGOS_ROW_2].map((logo, i) => (
                <div
                  key={i}
                  className="mx-[12px] flex h-[60px] w-[160px] shrink-0 items-center justify-center rounded-[8px] border border-[#1a3a28]/10 bg-white transition-colors hover:border-[#C9A84C]/40"
                >
                  <img src={logo.src} alt={logo.name} className="max-h-[36px] object-contain opacity-[0.85] transition-opacity hover:opacity-100" />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mb-14 grid gap-[14px] md:grid-cols-3">
          {PERFORMANCE_CARDS.map((card, i) => (
            <div
              key={i}
              ref={(el) => {
                cardsRef.current[i] = el;
              }}
              className="rounded-[10px] border border-[#1a3a28]/10 bg-white p-5 transition-colors duration-300 hover:border-[#C9A84C]/50"
            >
              <div className="mb-4 flex items-center justify-between">
                <span className="text-[11px] font-bold text-[rgba(26,58,40,0.62)]">{card.logoName}</span>
                <span className="rounded-full bg-[#C9A84C]/10 px-2 py-0.5 text-[9px] font-bold text-[#C9A84C]">{card.tag}</span>
              </div>
              <h3 className="mb-2 text-[20px] font-[700] tracking-tight text-[#1a3a28]" style={{ fontFamily: 'Pretendard, sans-serif' }}>{card.title}</h3>
              <p className="mb-6 text-[15px] font-normal leading-[1.7] text-[rgba(26,58,40,0.62)]" style={{ fontFamily: 'Pretendard, sans-serif' }}>{card.desc}</p>

              <div className="flex gap-4 border-t border-[#1a3a28]/10 pt-4">
                {card.stats.map((stat, si) => (
                  <div key={si} className="flex flex-col">
                    <span className="text-[15px] font-[800] text-[#C9A84C]">{stat.value}</span>
                    <span className="text-[9px] font-bold tracking-[0.14em] text-[rgba(26,58,40,0.5)]">{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
