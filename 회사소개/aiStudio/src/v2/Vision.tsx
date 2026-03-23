import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Vision() {
  const underlineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.fromTo(underlineRef.current, 
      { scaleX: 0 }, 
      { 
        scaleX: 1, 
        duration: 1.5, 
        ease: 'power3.inOut',
        scrollTrigger: {
          trigger: underlineRef.current,
          start: 'top 90%',
        }
      }
    );
  }, []);

  return (
    <section id="vision" className="py-[160px] bg-primary text-bg-card text-center">
      <div className="max-w-[1200px] mx-auto px-8">
        <span className="text-accent text-[11px] font-bold tracking-widest uppercase mb-8 block">Our Vision</span>
        <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight tracking-tighter mb-12">
          건축 자재 업계의 쿠팡<br />
          <span className="relative inline-block">
            그 이상의 혁신
            <div 
              ref={underlineRef}
              className="absolute bottom-2 left-0 w-full h-2 lg:h-4 bg-accent origin-left -z-10" 
            />
          </span>
        </h2>
        <p className="text-bg-card/40 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
          우리는 단순한 유통을 넘어, 기술과 신뢰를 바탕으로 
          대한민국 건축 현장의 패러다임을 바꿉니다.
        </p>
      </div>
    </section>
  );
}
