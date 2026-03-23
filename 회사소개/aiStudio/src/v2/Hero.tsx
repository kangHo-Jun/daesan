import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { motion } from 'motion/react';
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
      className="relative h-screen flex items-center justify-center overflow-hidden bg-primary"
      ref={containerRef}
    >
      <div className="relative z-10 max-w-[1200px] w-full px-8 text-center lg:text-left pt-20">
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
          className="text-bg-card text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.05] mb-8 tracking-tighter"
        >
          <div className="flex items-center justify-center lg:justify-start gap-2 mb-4 relative font-display text-bg-card">
            {["대", "산"].map((letter, i) => (
              <motion.span
                key={i}
                initial={{ 
                  y: i % 2 === 0 ? -100 : 100, 
                  opacity: 0,
                  filter: "blur(10px)"
                }}
                animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                transition={{ 
                  delay: 0.6 + (i * 0.2), 
                  type: "spring", 
                  damping: 12, 
                  stiffness: 100 
                }}
                className="inline-block"
              >
                {letter}
              </motion.span>
            ))}
            
            {/* Registered Trademark Symbol */}
            <motion.span
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 1.5, duration: 0.5 }}
              className="text-2xl md:text-4xl self-start mt-2 ml-1 text-accent"
            >
              ®
            </motion.span>
          </div>
          <span className="font-serif text-accent italic font-extrabold text-4xl md:text-6xl lg:text-7xl block mt-4 tracking-normal drop-shadow-xl">
            유통의 새로운 기준
          </span>
        </h1>
        <p 
          ref={subtitleRef}
          className="text-bg-card/80 text-lg md:text-xl max-w-2xl mb-12 leading-relaxed font-light"
        >
          35년의 신뢰와 AI 기술을 결합한 건축 자재 원스톱 공급 플랫폼.<br className="hidden md:block" />
          우리는 건축 자재 유통의 미래를 설계합니다.
        </p>
        
        <div ref={buttonsRef} className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
          <button className="bg-accent hover:opacity-90 text-primary px-10 py-5 rounded-full font-bold transition-all flex items-center group">
            제품 보러가기
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="border border-bg-card/30 hover:bg-bg-card/10 text-bg-card px-10 py-5 rounded-full font-bold transition-all">
            문의하기
          </button>
        </div>
      </div>

      {/* Impact Bar - Floating Pill at bottom */}
      <motion.div 
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 2, duration: 1, ease: "backOut" }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20"
      >
        <div className="bg-white/95 backdrop-blur-md px-8 py-4 rounded-full shadow-2xl flex items-center gap-8 border border-accent/20">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center">
              <span className="text-accent font-bold">35+</span>
            </div>
            <div className="text-left">
              <p className="text-[10px] text-text-gray font-bold uppercase tracking-tighter">Established</p>
              <p className="text-sm text-text-dark font-black">Since 1989</p>
            </div>
          </div>
          <div className="w-[1px] h-8 bg-black/10" />
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center">
              <span className="text-accent font-bold">AI</span>
            </div>
            <div className="text-left">
              <p className="text-[10px] text-text-gray font-bold uppercase tracking-tighter">Technology</p>
              <p className="text-sm text-text-dark font-black">Innovation</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
        <div className="w-[1px] h-6 bg-gradient-to-b from-accent to-transparent" />
      </div>
    </section>



  );
}
