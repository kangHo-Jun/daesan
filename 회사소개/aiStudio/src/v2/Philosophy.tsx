import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const VALUES = [
  {
    id: '01',
    keywordKo: '신속',
    desc: '당일·익일 배송 시스템, 현장 일정에 맞춘 즉각 대응',
    theme: 'white',
    gridSpan: 'col-span-1',
  },
  {
    id: '02',
    keywordKo: '정확',
    desc: '수량·규격·납기 오차 없는 정밀 발주 관리',
    theme: 'gold',
    gridSpan: 'col-span-2',
  },
  {
    id: '03',
    keywordKo: '품질',
    desc: '검증된 브랜드 자재만 취급, 하자 없는 현장 완성',
    theme: 'gold',
    gridSpan: 'col-span-2',
  },
  {
    id: '04',
    keywordKo: '가격',
    desc: '직거래 기반 합리적 단가, 투명한 견적 공개',
    theme: 'white',
    gridSpan: 'col-span-1',
  },
];

export default function Philosophy() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const cards = document.querySelectorAll('.philosophy-card');

    cards.forEach((card, i) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.55,
          delay: i * 0.12,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 90%',
            once: true,
          },
        },
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section id="philosophy" ref={sectionRef} className="relative overflow-hidden bg-[#f5f0e8] px-[40px] py-[80px]">
      <div className="relative z-10 mx-auto max-w-[1100px]">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="mb-5 font-[700] leading-[1.3] tracking-tight text-[#1a3a28]" style={{ fontFamily: "'Nanum Myeongjo', serif", fontSize: '38px' }}>
            거창한 구호보다 강력한 기본의 힘
          </h2>
          <p className="text-[16px] font-normal leading-[1.75] text-[rgba(26,58,40,0.6)]" style={{ fontFamily: 'Pretendard, sans-serif' }}>
            ㈜대산은 35년의 업력이 증명하는 4대 핵심 가치로 움직입니다
          </p>
        </div>

        <div className="mx-auto grid max-w-[1100px] grid-cols-1 gap-4 md:grid-cols-3">
          {VALUES.map((item) => (
            <div
              key={item.id}
              className={`philosophy-card group relative flex flex-col items-center overflow-hidden rounded-[12px] border border-transparent p-8 py-9 text-center transition-colors duration-300 hover:border-[#C9A84C]/40 ${item.gridSpan} ${item.theme === 'gold' ? 'bg-[#C9A84C] text-white' : 'bg-white text-[#1a3a28]'}`}
            >
              <div
                className={`mb-4 flex h-[34px] w-[34px] items-center justify-center rounded-[4px] text-[12px] font-[800] ${item.theme === 'white' ? 'bg-[#C9A84C] text-white' : 'bg-white text-[#C9A84C]'}`}
              >
                {item.id}
              </div>

              <h3 className={`mb-4 text-[20px] font-[700] tracking-tight ${item.theme === 'white' ? 'text-[#1a3a28]' : 'text-white'}`} style={{ fontFamily: 'Pretendard, sans-serif' }}>
                {item.keywordKo}
              </h3>

              <p className={`max-w-[240px] text-[15px] font-normal leading-[1.7] ${item.theme === 'white' ? 'text-[rgba(26,58,40,0.68)]' : 'text-white/75'}`} style={{ fontFamily: 'Pretendard, sans-serif' }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
