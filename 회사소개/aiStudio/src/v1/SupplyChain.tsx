import React from 'react';
import { ChevronDown, TreeDeciduous, Layers, Layout, DoorOpen } from 'lucide-react';

const STEPS = [
  { 
    title: 'WOOD', 
    desc: '구조재 / 내장재', 
    icon: <TreeDeciduous className="w-6 h-6" />,
    color: 'from-amber-500/20 to-amber-900/40'
  },
  { 
    title: 'INSULATION', 
    desc: '단열재 / 방수재', 
    icon: <Layers className="w-6 h-6" />,
    color: 'from-blue-500/20 to-blue-900/40'
  },
  { 
    title: 'WINDOW', 
    desc: '시스템 창호', 
    icon: <Layout className="w-6 h-6" />,
    color: 'from-emerald-500/20 to-emerald-900/40'
  },
  { 
    title: 'DOOR', 
    desc: '내외장 도어', 
    icon: <DoorOpen className="w-6 h-6" />,
    color: 'from-rose-500/20 to-rose-900/40'
  },
];

export default function SupplyChain() {
  return (
    <section className="py-[120px] bg-dark text-white overflow-hidden relative">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-accent/5 to-transparent pointer-events-none" />
      
      <div className="max-w-[1200px] mx-auto px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <span className="text-accent text-[11px] font-bold tracking-widest uppercase mb-4 block">Supply Chain</span>
            <h2 className="text-4xl lg:text-6xl font-bold leading-tight mb-8 tracking-tight">
              한 번의 발주로<br />
              <span className="text-accent">모든 자재 공급</span>
            </h2>
            <p className="text-white/60 text-lg leading-relaxed max-w-md mb-8">
              대산의 통합 물류 시스템은 기초 자재부터 마감재까지 
              건축에 필요한 모든 요소를 원스톱으로 연결합니다.
            </p>
            <div className="flex items-center gap-4 p-6 bg-white/5 border border-white/10 rounded-2xl">
              <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center text-accent">
                <ChevronDown className="w-6 h-6 animate-bounce" />
              </div>
              <p className="text-sm text-white/40">스크롤하여 공급망의 흐름을 확인하세요</p>
            </div>
          </div>

          <div className="relative">
            {/* Connecting Line Animation */}
            <div className="absolute left-[47px] top-10 bottom-10 w-[2px] bg-gradient-to-b from-accent/50 via-accent to-accent/50 hidden md:block" />
            
            <div className="space-y-6 relative">
              {STEPS.map((step, idx) => (
                <div 
                  key={idx}
                  className="group relative"
                >
                  <div className="bg-white/5 border border-white/10 p-6 md:p-8 rounded-2xl flex items-center gap-6 group hover:bg-white/10 hover:border-accent/50 transition-all duration-500 relative overflow-hidden">
                    {/* Hover Gradient Background */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                    
                    {/* Icon Container */}
                    <div className="relative z-10 w-14 h-14 md:w-16 md:h-16 rounded-xl bg-dark border border-white/10 flex items-center justify-center text-accent group-hover:scale-110 group-hover:bg-accent group-hover:text-dark transition-all duration-500 shadow-xl">
                      {step.icon}
                    </div>

                    <div className="relative z-10 flex-1">
                      <div className="flex items-center justify-between">
                        <h4 className="text-xl md:text-2xl font-bold tracking-tighter transition-colors">{step.title}</h4>
                        <span className="text-3xl font-black opacity-10 group-hover:opacity-30 transition-opacity">0{idx + 1}</span>
                      </div>
                      <p className="text-white/40 text-sm mt-1 transition-colors group-hover:text-white/70">{step.desc}</p>
                    </div>

                    {/* Decorative Arrow on Hover */}
                    <div className="absolute right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                      <ChevronDown className="w-5 h-5 -rotate-90 text-accent" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
