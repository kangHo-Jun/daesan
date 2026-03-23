import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLDivElement>(null);
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

    // Initial States
    gsap.set([labelRef.current, title1Ref.current, title2Ref.current, subcopyRef.current, buttonsRef.current], { opacity: 0, y: 30 });
    gsap.set([underlineRedRef.current, underlineGoldRef.current], { strokeDasharray: 1000, strokeDashoffset: 1000 });

    // Animation Sequence
    tl.to(labelRef.current, { opacity: 1, y: 0, delay: 0.3 })
      .to(title1Ref.current, { opacity: 1, y: 0 }, "-=0.5")
      .to(title2Ref.current, { opacity: 1, y: 0 }, "-=0.5")
      // Underline Drawing
      .to(underlineRedRef.current, { strokeDashoffset: 0, duration: 0.6, ease: 'power4.out' }, "+=0.1")
      .to(underlineGoldRef.current, { strokeDashoffset: 0, duration: 0.6, ease: 'power4.out' }, "-=0.45")
      .to(subcopyRef.current, { opacity: 1, y: 0 }, "-=0.3")
      .to(buttonsRef.current, { opacity: 1, y: 0 }, "-=0.5");

    // Stat Count-up
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
      className="relative h-screen flex flex-col items-center justify-center overflow-hidden bg-[#0d2318] pt-[48px] pb-[80px]"
      ref={containerRef}
    >
      <div className="relative z-10 max-w-[1200px] w-full px-8 text-center flex flex-col items-center">
        {/* Brand Label */}
        <div ref={labelRef} className="flex items-center justify-center gap-3 mb-10">
          <div className="w-8 h-[1px] bg-accent" />
          <span className="text-accent text-sm md:text-base font-bold tracking-[0.4em] uppercase">
            건축자재는 대산이다
          </span>
          <div className="w-8 h-[1px] bg-accent" />
        </div>

        {/* Main Title */}
        <h1 className="flex flex-col items-center font-serif text-[#C9A84C] leading-[1.1] mb-12 tracking-tight">
          <div ref={title1Ref} className="text-4xl md:text-6xl lg:text-7xl font-light mb-2">3년 연속</div>
          <div ref={title2Ref} className="relative text-5xl md:text-8xl lg:text-9xl font-[800]">
            LG건설 건자재 납품업체
            {/* Dual Underline SVG */}
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

        <p ref={subcopyRef} className="text-white/60 text-lg md:text-2xl max-w-3xl mb-14 leading-relaxed font-light">
          오랜 전통 + AI 혁신 = 원스톱 올인원 플랫폼<br />
          우리는 건축자재 유통의 미래를 설계합니다.
        </p>

        <div ref={buttonsRef} className="flex flex-col sm:flex-row items-center gap-6 justify-center">
          <button className="bg-[#C9A84C] hover:opacity-90 text-[#0d2318] px-12 py-6 rounded-full font-bold transition-all flex items-center group shadow-xl shadow-accent/20">
            제품 보러가기
            <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="border-2 border-white/20 hover:bg-white/10 text-white px-12 py-6 rounded-full font-bold transition-all backdrop-blur-sm">
            문의하기
          </button>
        </div>
      </div>

      {/* Integrated Stat Bar */}
      <div className="absolute bottom-0 left-0 w-full border-t border-white/10 bg-[#0d2318]">
        <div className="max-w-[1200px] mx-auto px-8 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {/* Stat 1 */}
            <div className="flex flex-col items-center">
              <div className="flex items-baseline gap-1 mb-2">
                <span ref={statVal1Ref} className="text-white text-3xl md:text-5xl font-black">0</span>
                <span className="text-[#C9A84C] text-2xl font-black">년차+</span>
              </div>
              <p className="text-xs text-white/40 font-bold uppercase tracking-widest">사업연차</p>
            </div>

            {/* Stat 2 */}
            <div className="flex flex-col items-center border-l-0 md:border-l border-white/10">
              <div className="flex items-baseline gap-1 mb-2">
                <span ref={statVal2Ref} className="text-white text-3xl md:text-5xl font-black">0</span>
                <span className="text-[#C9A84C] text-2xl font-black">개+</span>
              </div>
              <p className="text-xs text-white/40 font-bold uppercase tracking-widest">거래처</p>
            </div>

            {/* Stat 3 */}
            <div className="flex flex-col items-center border-l-0 md:border-l border-white/10">
              <div className="flex items-baseline gap-1 mb-2">
                <span ref={statVal3Ref} className="text-white text-3xl md:text-5xl font-black">0</span>
                <span className="text-[#C9A84C] text-2xl font-black">억+</span>
              </div>
              <p className="text-xs text-white/40 font-bold uppercase tracking-widest">평균매출(최근3년)</p>
            </div>

            {/* Stat 4 */}
            <div className="flex flex-col items-center border-l-0 md:border-l border-white/10">
              <div className="flex items-baseline gap-1 mb-2">
                <span ref={statVal4Ref} className="text-white text-3xl md:text-5xl font-black">0</span>
                <span className="text-[#C9A84C] text-2xl font-black">명+</span>
              </div>
              <p className="text-xs text-white/40 font-bold uppercase tracking-widest">정규직원수</p>
            </div>
          </div>
        </div>
      </div>
    </section>





  );
}
