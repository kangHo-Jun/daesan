import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const title1Ref = useRef<HTMLDivElement>(null);
  const title2Ref = useRef<HTMLDivElement>(null);
  const underlineRedRef = useRef<SVGPathElement>(null);
  const underlineGoldRef = useRef<SVGPathElement>(null);
  const subcopyRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);

  // Stat value refs for count-up
  const statVal1Ref = useRef<HTMLSpanElement>(null);
  const statVal2Ref = useRef<HTMLSpanElement>(null);
  const statVal3Ref = useRef<HTMLSpanElement>(null);
  const statVal4Ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out', duration: 0.8 } });

    gsap.set([title1Ref.current, title2Ref.current, subcopyRef.current, buttonsRef.current], { opacity: 0, y: 30 });
    gsap.set([underlineRedRef.current, underlineGoldRef.current], { strokeDasharray: 1000, strokeDashoffset: 1000 });

    tl.to(title1Ref.current, { opacity: 1, y: 0, delay: 0.3 })
      .to(title2Ref.current, { opacity: 1, y: 0 }, "-=0.5")
      .to(underlineRedRef.current, { strokeDashoffset: 0, duration: 0.6, ease: 'power4.out' }, "+=0.1")
      .to(underlineGoldRef.current, { strokeDashoffset: 0, duration: 0.6, ease: 'power4.out' }, "-=0.45")
      .to(subcopyRef.current, { opacity: 1, y: 0 }, "-=0.3")
      .to(buttonsRef.current, { opacity: 1, y: 0 }, "-=0.5");

    const statData = { v1: 0, v2: 0, v3: 0, v4: 0 };
    tl.to(statData, {
      v1: 35,
      v2: 1500,
      v3: 420,
      v4: 30,
      duration: 2,
      ease: 'power2.out',
      onUpdate: () => {
        if (statVal1Ref.current) statVal1Ref.current.textContent = Math.floor(statData.v1).toString();
        if (statVal2Ref.current) statVal2Ref.current.textContent = Math.floor(statData.v2).toLocaleString();
        if (statVal3Ref.current) statVal3Ref.current.textContent = Math.floor(statData.v3).toString();
        if (statVal4Ref.current) statVal4Ref.current.textContent = Math.floor(statData.v4).toString();
      }
    }, "-=1.5");

  }, []);

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#0d2318] px-[40px] py-[80px]"
      ref={containerRef}
    >
      <div className="relative z-10 flex w-full max-w-[1100px] flex-col items-center text-center">
        <h1 className="flex flex-col items-center font-serif text-[#C9A84C] leading-[1.1] mb-12 tracking-tight">
          <div ref={title1Ref} className="mb-2 text-[36px] font-[400]" style={{ fontFamily: "'Nanum Myeongjo', serif" }}>3년 연속</div>
          <div ref={title2Ref} className="relative text-[40px] font-[700] md:text-[46px] lg:text-[52px]" style={{ fontFamily: "'Nanum Myeongjo', serif" }}>
            LG건설 납품업체
            <svg
              className="absolute -bottom-4 left-0 w-full h-8 overflow-visible"
              viewBox="0 0 1000 30"
              preserveAspectRatio="none"
            >
              <path
                ref={underlineRedRef}
                d="M10,15 Q250,5 500,15 T990,15"
                fill="none"
                stroke="#E8392A"
                strokeWidth="8"
                strokeLinecap="round"
              />
              <path
                ref={underlineGoldRef}
                d="M50,22 Q300,15 550,22 T950,22"
                fill="none"
                stroke="#C9A84C"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </h1>

        <p ref={subcopyRef} className="mb-12 max-w-3xl text-[16px] font-normal leading-[1.75] text-white/60" style={{ fontFamily: 'Pretendard, sans-serif' }}>
          오랜 전통 + AI 혁신 = 원스톱 올인원 플랫폼<br />
          우리는 건축자재 유통의 미래를 설계합니다.
        </p>

        <div ref={buttonsRef} className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="https://daesan.ai"
            target="_blank"
            rel="noreferrer"
            className="group flex items-center rounded-full bg-[#C9A84C] px-10 py-4 font-bold text-[#0d2318] transition-opacity hover:opacity-90"
          >
            제품 보러가기
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="https://web-cadalog-ver10.vercel.app"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-white/20 px-10 py-4 font-bold text-white transition-colors hover:bg-white/10"
          >
            문의하기
          </a>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full border-t border-white/10 bg-[#0d2318]">
        <div className="mx-auto max-w-[1100px] px-[40px] py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex flex-col items-center">
              <div className="flex items-baseline gap-1 mb-2">
                <span ref={statVal1Ref} className="text-white text-[32px] font-[800]">0</span>
                <span className="text-[#C9A84C] text-2xl font-black">년차+</span>
              </div>
              <p className="text-xs text-white/40 font-bold tracking-[0.2em]">사업연차</p>
            </div>

            <div className="flex flex-col items-center border-l-0 md:border-l border-white/10">
              <div className="flex items-baseline gap-1 mb-2">
                <span ref={statVal2Ref} className="text-white text-[32px] font-[800]">0</span>
                <span className="text-[#C9A84C] text-2xl font-black">개+</span>
              </div>
              <p className="text-xs text-white/40 font-bold tracking-[0.2em]">거래처</p>
            </div>

            <div className="flex flex-col items-center border-l-0 md:border-l border-white/10">
              <div className="flex items-baseline gap-1 mb-2">
                <span ref={statVal3Ref} className="text-white text-[32px] font-[800]">0</span>
                <span className="text-[#C9A84C] text-2xl font-black">억+</span>
              </div>
              <p className="text-xs text-white/40 font-bold tracking-[0.2em]">평균매출(최근3년)</p>
            </div>

            <div className="flex flex-col items-center border-l-0 md:border-l border-white/10">
              <div className="flex items-baseline gap-1 mb-2">
                <span ref={statVal4Ref} className="text-white text-[32px] font-[800]">0</span>
                <span className="text-[#C9A84C] text-2xl font-black">명+</span>
              </div>
              <p className="text-xs text-white/40 font-bold tracking-[0.2em]">정규직원수</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
