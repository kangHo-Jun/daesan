import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const STATS = [
  { label: 'YEARS EXPERIENCE', value: 35, suffix: '' },
  { label: 'CLIENTS', value: 10000, suffix: '+' },
  { label: 'PRODUCTS', value: 2000, suffix: '+' },
  { label: 'LOGISTICS NETWORK', value: 24, suffix: 'H' },
];

export default function ImpactNumbers() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const numbers = sectionRef.current?.querySelectorAll('.stat-number');
      
      numbers?.forEach((num) => {
        const target = parseInt(num.getAttribute('data-target') || '0');
        gsap.to(num, {
          innerText: target,
          duration: 2,
          snap: { innerText: 1 },
          scrollTrigger: {
            trigger: num,
            start: 'top 85%',
          },
          onUpdate: function() {
            // Format numbers with commas
            const val = Math.floor(this.targets()[0].innerText);
            this.targets()[0].innerText = val.toLocaleString();
          }
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-[120px] bg-white">
      <div className="max-w-[1200px] mx-auto px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {STATS.map((stat, idx) => (
            <div key={idx} className="text-center lg:text-left border-l-0 lg:border-l border-border lg:pl-8 first:border-0">
              <div className="text-accent text-[11px] font-bold tracking-widest uppercase mb-4">
                {stat.label}
              </div>
              <div className="text-4xl lg:text-6xl font-bold text-dark tracking-tighter flex items-baseline justify-center lg:justify-start">
                <span className="stat-number" data-target={stat.value}>0</span>
                <span className="text-accent ml-1">{stat.suffix}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
