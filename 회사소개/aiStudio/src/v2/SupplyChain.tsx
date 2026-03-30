import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function SupplyChain() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      return;
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        [headerRef.current, videoRef.current],
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: 'power2.out',
          stagger: 0.12,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            once: true,
          },
        },
      );
    }, sectionRef);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section id="supply-chain" ref={sectionRef} className="relative overflow-hidden bg-[#f5f0e8] px-[40px] py-[80px]">
      <div className="mx-auto max-w-[1100px]">
        <div ref={headerRef} className="mx-auto mb-14 max-w-3xl text-center">
          <h2 className="mb-5 font-[700] leading-[1.3] tracking-tight text-[#1a3a28]" style={{ fontFamily: "'Nanum Myeongjo', serif", fontSize: '38px' }}>
            모든 자재를 한곳에서 한번에 주문
          </h2>
          <p className="text-[16px] font-normal leading-[1.75] text-[rgba(26,58,40,0.6)]" style={{ fontFamily: 'Pretendard, sans-serif' }}>
            기초부터 마감까지, 한 번의 발주로 해결합니다
          </p>
        </div>

        <div ref={videoRef}>
          <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', borderRadius: '12px' }}>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/tJ_8JRkG3JI?controls=1&autoplay=1&mute=1&loop=1&playlist=tJ_8JRkG3JI"
              loading="lazy"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
