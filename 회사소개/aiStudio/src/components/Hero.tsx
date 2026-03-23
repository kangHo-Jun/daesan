import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out', duration: 1 } });
    
    tl.fromTo(labelRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, delay: 0.5 })
      .fromTo(titleRef.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0 }, '-=0.7')
      .fromTo(subtitleRef.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0 }, '-=0.7')
      .fromTo(buttonsRef.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0 }, '-=0.7');
  }, []);

  return (
    <section 
      id="hero" 
      className="relative h-screen flex items-center justify-center overflow-hidden bg-dark"
      ref={containerRef}
    >
      {/* Dynamic Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full">
          <video 
            autoPlay 
            muted 
            loop 
            playsInline 
            poster="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=2000"
            className="w-full h-full object-cover opacity-40"
          >
            <source src="https://player.vimeo.com/external/434045526.sd.mp4?s=c27dbed30727439923f590f309671661a0e1207a&profile_id=164&oauth2_token_id=57447761" type="video/mp4" />
            <img 
              src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=2000" 
              alt="Warehouse Logistics Fallback"
              className="w-full h-full object-cover"
            />
          </video>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-dark/80 via-dark/40 to-dark/90" />
      </div>

      {/* Floating Particles/Shapes */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute border border-accent/20 rounded-lg opacity-10"
            style={{ 
              width: Math.random() * 100 + 50 + "px", 
              height: Math.random() * 100 + 50 + "px",
              left: Math.random() * 100 + "%", 
              top: Math.random() * 100 + "%" 
            }}
          />
        ))}
        
        {/* Animated Light Leak */}
        <div className="absolute top-0 left-0 w-[150%] h-[150%] bg-radial-gradient from-accent/5 to-transparent blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-[1200px] w-full px-8 text-center lg:text-left">
        <div className="flex items-center justify-center lg:justify-start gap-3 mb-6">
          <div className="w-8 h-[1px] bg-accent hidden lg:block" />
          <span 
            ref={labelRef}
            className="inline-block text-accent text-[10px] md:text-xs font-bold tracking-[0.4em] uppercase"
          >
            건축 자재 유통 플랫폼
          </span>
        </div>
        <h1 
          ref={titleRef}
          className="text-white text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.05] mb-8 tracking-tighter drop-shadow-2xl"
        >
          <div className="flex items-center justify-center lg:justify-start gap-1 mb-4 animate-glow-scan relative font-display text-[#123628]">
            {/* 'Daesan' Sequential Assembly */}
            {["D", "a", "e", "s", "a", "n"].map((letter, i) => (
              <span key={i} className="inline-block">
                {letter}
              </span>
            ))}
            
            {/* Registered Trademark Symbol */}
            <span className="text-2xl md:text-4xl self-start mt-2 ml-1">
              ®
            </span>
          </div>
          <span className="font-serif text-primary italic font-extrabold text-4xl md:text-6xl lg:text-7xl block mt-4 tracking-normal drop-shadow-lg">
            유통의 새로운 기준
          </span>
        </h1>
        <p 
          ref={subtitleRef}
          className="text-white/80 text-lg md:text-xl max-w-2xl mb-12 leading-relaxed font-light"
        >
          35년의 신뢰와 AI 기술을 결합한 건축 자재 원스톱 공급 플랫폼.<br className="hidden md:block" />
          우리는 건축 자재 유통의 미래를 설계합니다.
        </p>
        
        <div ref={buttonsRef} className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
          <button className="bg-accent hover:bg-accent/90 text-dark px-10 py-5 rounded-full font-bold transition-all flex items-center group">
            제품 보러가기
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="border border-white/30 hover:bg-white/10 text-white px-10 py-5 rounded-full font-bold transition-all">
            문의하기
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-white/30 text-[10px] uppercase tracking-widest">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-accent to-transparent" />
      </div>
    </section>
  );
}
