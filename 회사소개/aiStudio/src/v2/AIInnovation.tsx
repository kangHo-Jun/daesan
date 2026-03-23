import React from 'react';
import { Cpu, Box, BarChart3, Clock } from 'lucide-react';

const INNOVATIONS = [
  { title: 'AI 스마트 견적', desc: '도면 분석을 통한 자동 수량 산출 및 견적', icon: Cpu },
  { title: '3D Bin Packing', desc: '적재 공간 최적화를 통한 물류 효율 극대화', icon: Box },
  { title: '지능형 재고', desc: '수요 예측 기반의 선제적 재고 관리 시스템', icon: BarChart3 },
  { title: '실시간 단가표', desc: '시장 상황을 반영한 투명한 실시간 가격 정보', icon: Clock },
];

export default function AIInnovation() {
  return (
    <section id="ai-innovation" className="py-[120px] bg-bg-main overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-stretch">
          {/* Left: Dark Panel */}
          <div className="bg-primary rounded-[40px] p-12 lg:p-20 flex flex-col justify-center text-bg-card">
            <span className="text-accent text-[11px] font-bold tracking-widest uppercase mb-6 block">Industry First</span>
            <h2 className="text-4xl lg:text-5xl font-bold leading-tight mb-8 tracking-tight">
              AI 기술로 혁신하는<br />
              건축 자재 유통
            </h2>
            <p className="text-bg-card/60 text-lg leading-relaxed mb-12">
              대산은 전통적인 유통 방식을 넘어 데이터와 AI 기술을 통해 
              더 스마트하고 효율적인 공급망을 구축합니다.
            </p>
            
            <div className="grid grid-cols-2 gap-8">
              {INNOVATIONS.slice(0, 2).map((item, idx) => (
                <div key={idx}>
                  <item.icon className="text-accent w-8 h-8 mb-4" />
                  <h4 className="font-bold mb-2">{item.title}</h4>
                  <p className="text-xs text-bg-card/40 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: White Table Layout */}
          <div className="bg-bg-card rounded-[40px] border border-border p-8 lg:p-16 flex flex-col">
            <div className="flex items-center justify-between mb-12">
              <h3 className="text-2xl font-bold text-text-dark">실시간 단가표</h3>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                <span className="text-[10px] font-bold text-accent uppercase tracking-widest">Live Update</span>
              </div>
            </div>

            <div className="flex-1 space-y-6">
              {[
                { name: '구조재 (SPF 2x4)', price: '4,200', change: '+2.4%', up: true },
                { name: '석고보드 (9.5T)', price: '3,850', change: '-1.2%', up: false },
                { name: '단열재 (가등급)', price: '12,400', change: '0.0%', up: null },
                { name: '합판 (CP 12T)', price: '28,500', change: '+5.1%', up: true },
              ].map((item, idx) => (
                <div key={idx} className="flex items-center justify-between py-4 border-b border-border last:border-0">
                  <span className="text-text-dark font-medium">{item.name}</span>
                  <div className="text-right">
                    <div className="text-lg font-bold text-text-dark">₩{item.price}</div>
                    <div className={cn(
                      "text-[10px] font-bold",
                      item.up === true ? "text-accent" : item.up === false ? "text-text-gray" : "text-text-gray"
                    )}>
                      {item.change}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <button className="mt-12 w-full py-5 border border-primary text-text-dark font-bold rounded-2xl hover:bg-primary hover:text-bg-card transition-all">
              전체 단가표 확인하기
            </button>
          </div>
        </div>
      </div>
    </section>

  );
}

function cn(...inputs: any[]) {
  return inputs.filter(Boolean).join(' ');
}
