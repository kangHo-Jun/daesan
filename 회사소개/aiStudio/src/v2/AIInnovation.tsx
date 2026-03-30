import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const heroPriceRows = [
  { label: 'LG 석고보드 9.5T', value: '₩4,200', badge: '▲ LIVE' },
  { label: '합판 12T 1220×2440', value: '₩22,000' },
  { label: '각재 30×40×3600', value: '₩1,800' },
];

const sideCards = [
  {
    id: '02',
    title: 'AI 웹 카탈로그',
    description: '전 제품 실시간 검색 · 견적 · 발주 원스톱',
    href: 'https://web-cadalog-ver10.vercel.app/',
    linkLabel: '바로가기 →',
    variant: 'light',
  },
  {
    id: '03',
    title: '재단도면 그리기',
    description: 'AI 최적 절단 배치로 자재 낭비 최소화',
    href: 'https://kangho-jun.github.io/woodcutter_v4/',
    linkLabel: '바로가기 →',
    variant: 'gold',
  },
  {
    id: '04',
    title: 'AI 도어 견적 자동화',
    description: '사양 입력 → 8초 만에 완성 견적 자동 출력',
    href: null,
    linkLabel: '준비 중',
    variant: 'light',
  },
] as const;

export default function AIInnovation() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const heroCardRef = useRef<HTMLDivElement>(null);
  const dataBoxRef = useRef<HTMLDivElement>(null);
  const sideCardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            once: true,
          },
        },
      );

      gsap.fromTo(
        heroCardRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          delay: 0.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            once: true,
          },
        },
      );

      gsap.fromTo(
        dataBoxRef.current,
        { opacity: 0, y: 16 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          delay: 0.5,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            once: true,
          },
        },
      );

      sideCardRefs.current.forEach((card, index) => {
        if (!card) return;
        gsap.fromTo(
          card,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.65,
            delay: 0.35 + index * 0.15,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 80%',
              once: true,
            },
          },
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="ai-innovation" ref={sectionRef} className="bg-[#f5f0e8] px-[40px] py-[80px]">
      <div className="mx-auto max-w-[1100px]">
        <div ref={headerRef} className="mb-12 text-center">
          <h2
            className="mb-4 text-[#1a3a28]"
            style={{
              fontFamily: "'Nanum Myeongjo', serif",
              fontSize: '38px',
              fontWeight: 700,
              lineHeight: 1.3,
            }}
          >
            대한민국 건자재 유통에 AI를 입히다
          </h2>
          <p
            className="text-[rgba(26,58,40,0.6)]"
            style={{
              fontFamily: 'Pretendard, sans-serif',
              fontSize: '16px',
              fontWeight: 400,
              lineHeight: 1.75,
            }}
          >
            35년 현장 데이터 + AI 기술로 유통의 패러다임을 바꿉니다
          </p>
        </div>

        <div className="grid items-stretch gap-4 lg:grid-cols-[1.6fr_1fr]">
          <div
            ref={heroCardRef}
            className="flex min-h-[380px] flex-col justify-between rounded-[12px] bg-[#1a3a28] p-8 transition-transform duration-300 hover:-translate-y-1"
          >
            <div>
              <div className="mb-4 text-[11px] tracking-[0.15em] text-[#C9A84C]/60">01</div>
              <h3
                className="mb-4 text-white"
                style={{
                  fontFamily: "'Nanum Myeongjo', serif",
                  fontSize: '26px',
                  fontWeight: 700,
                }}
              >
                실시간 단가표
              </h3>
              <p
                className="mb-8 text-[rgba(255,255,255,0.55)]"
                style={{
                  fontFamily: 'Pretendard, sans-serif',
                  fontSize: '13px',
                  lineHeight: 1.65,
                }}
              >
                시장 변동 즉시 반영. 업계 최초 실시간 자재 단가 공개 시스템
              </p>
            </div>

            <div>
              <div
                ref={dataBoxRef}
                className="rounded-[8px] border border-[rgba(201,168,76,0.2)] bg-[rgba(255,255,255,0.06)] px-4 py-[14px]"
              >
                {heroPriceRows.map((row, index) => (
                  <div
                    key={row.label}
                    className={`${index > 0 ? 'border-t border-[rgba(255,255,255,0.06)]' : ''} flex items-center justify-between gap-4 py-3 first:pt-0 last:pb-0`}
                  >
                    <span
                      className="text-[rgba(255,255,255,0.4)]"
                      style={{
                        fontFamily: 'Pretendard, sans-serif',
                        fontSize: '10px',
                      }}
                    >
                      {row.label}
                    </span>
                    <div className="flex items-center gap-2">
                      <span
                        className="text-[#C9A84C]"
                        style={{
                          fontFamily: 'Pretendard, sans-serif',
                          fontSize: '13px',
                          fontWeight: 700,
                        }}
                      >
                        {row.value}
                      </span>
                      {row.badge && (
                        <span
                          className="text-[#4ADE80]"
                          style={{
                            fontFamily: 'Pretendard, sans-serif',
                            fontSize: '10px',
                            fontWeight: 700,
                          }}
                        >
                          {row.badge}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <a
                href="https://web-cadalog-ver10.vercel.app/price"
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-block text-[#C9A84C]"
                style={{
                  fontFamily: 'Pretendard, sans-serif',
                  fontSize: '12px',
                  fontWeight: 700,
                }}
              >
                단가표 바로가기 →
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            {sideCards.map((card, index) => {
              const light = card.variant === 'light';
              const Wrapper = card.href ? 'a' : 'div';

              return (
                <Wrapper
                  key={card.id}
                  {...(card.href
                    ? {
                        href: card.href,
                        target: '_blank',
                        rel: 'noreferrer',
                      }
                    : {})}
                  ref={(el: HTMLDivElement | null) => {
                    sideCardRefs.current[index] = el;
                  }}
                  className={`flex flex-1 flex-col justify-between rounded-[10px] p-[22px] transition-all duration-300 ${
                    light
                      ? 'border border-[rgba(26,58,40,0.08)] bg-white hover:-translate-y-[3px] hover:border-[#C9A84C]'
                      : 'bg-[#C9A84C] hover:-translate-y-[3px]'
                  } ${card.href ? 'cursor-pointer no-underline' : 'pointer-events-none'}`}
                >
                  <div>
                    <div
                      className={light ? 'text-[rgba(26,58,40,0.35)]' : 'text-white/50'}
                      style={{
                        fontFamily: 'Pretendard, sans-serif',
                        fontSize: '9px',
                        letterSpacing: '0.15em',
                      }}
                    >
                      {card.id}
                    </div>
                    <h3
                      className={`mt-3 ${light ? 'text-[#1a3a28]' : 'text-white'}`}
                      style={{
                        fontFamily: 'Pretendard, sans-serif',
                        fontSize: '16px',
                        fontWeight: 700,
                      }}
                    >
                      {card.title}
                    </h3>
                    <p
                      className={`mt-3 ${light ? 'text-[rgba(26,58,40,0.5)]' : 'text-white/70'}`}
                      style={{
                        fontFamily: 'Pretendard, sans-serif',
                        fontSize: '12px',
                        lineHeight: 1.65,
                      }}
                    >
                      {card.description}
                    </p>
                  </div>

                  <div
                    className={`mt-5 ${light ? (card.href ? 'text-[#C9A84C]' : 'text-[rgba(26,58,40,0.3)]') : 'text-[#1a3a28]'}`}
                    style={{
                      fontFamily: 'Pretendard, sans-serif',
                      fontSize: '12px',
                      fontWeight: 700,
                    }}
                  >
                    {card.linkLabel}
                  </div>
                </Wrapper>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
