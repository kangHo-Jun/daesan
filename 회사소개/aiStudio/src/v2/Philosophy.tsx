import React from 'react';
import { Zap, ShieldCheck, Award, Tag } from 'lucide-react';

const VALUES = [
  { 
    title: '신속', 
    desc: '24시간 이내 배송 시스템으로 현장의 멈춤 없는 시공을 지원합니다.', 
    icon: Zap 
  },
  { 
    title: '정확', 
    desc: 'AI 기반 스마트 검수 시스템으로 오배송 제로를 지향합니다.', 
    icon: ShieldCheck 
  },
  { 
    title: '품질', 
    desc: '엄격한 품질 기준을 통과한 검증된 자재만을 공급합니다.', 
    icon: Award 
  },
  { 
    title: '가격', 
    desc: '유통 단계 축소를 통해 업계 최저 수준의 단가를 실현합니다.', 
    icon: Tag 
  },
];

export default function Philosophy() {
  return (
    <section id="philosophy" className="py-[120px] bg-bg-main">
      <div className="max-w-[1200px] mx-auto px-8">
        <div className="mb-20 text-center lg:text-left">
          <span className="text-accent text-[11px] font-bold tracking-widest uppercase mb-4 block">Our Philosophy</span>
          <h2 className="text-4xl lg:text-5xl font-bold text-text-dark tracking-tight">
            대산이 지키는 <br className="lg:hidden" /> 4대 핵심 가치
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {VALUES.map((item, idx) => (
            <div 
              key={idx}
              className="bg-bg-card p-10 border border-border transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/5 group"
            >
              <div className="w-14 h-14 bg-bg-main rounded-2xl flex items-center justify-center mb-8 group-hover:bg-accent transition-colors duration-500">
                <item.icon className="w-6 h-6 text-text-dark group-hover:text-bg-card transition-colors duration-500" />
              </div>
              <h3 className="text-2xl font-bold text-text-dark mb-4">{item.title}</h3>
              <p className="text-text-gray leading-relaxed text-sm">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>

  );
}
