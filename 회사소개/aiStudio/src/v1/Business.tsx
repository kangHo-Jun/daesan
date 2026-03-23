import React from 'react';

const BUSINESS_AREAS = [
  {
    title: '기초 자재',
    desc: '구조재, 합판, MDF, 석고보드 등 건축의 뼈대가 되는 핵심 기초 자재를 최상의 컨디션으로 공급합니다.',
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: '단열 창호 도어',
    desc: '고효율 단열재와 프리미엄 시스템 창호, 도어를 통해 에너지 효율과 디자인을 동시에 완성합니다.',
    image: 'https://images.unsplash.com/photo-1505691938895-1758d7eaa511?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: '내외장재',
    desc: '트렌디한 인테리어 내장재부터 내구성이 뛰어난 외장재까지 공간의 가치를 높이는 자재를 제안합니다.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800'
  }
];

interface BusinessCardProps {
  area: typeof BUSINESS_AREAS[0];
  idx: number;
}

const BusinessCard: React.FC<BusinessCardProps> = ({ area, idx }) => {
  return (
    <div 
      className="group cursor-pointer p-8 rounded-[2.5rem] transition-all duration-500 hover:bg-slate-50 hover:shadow-2xl hover:shadow-dark/5"
    >
      <div className="relative aspect-[4/5] overflow-hidden rounded-3xl mb-8">
        <img 
          src={area.image} 
          alt={area.title}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.1]"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-dark/20 group-hover:bg-dark/40 transition-colors duration-500" />
      </div>
      <h3 className="text-2xl font-bold text-dark mb-4 group-hover:text-accent transition-colors">{area.title}</h3>
      <p className="text-muted leading-relaxed text-sm">
        {area.desc}
      </p>
    </div>
  );
}

export default function Business() {
  return (
    <section id="business" className="py-[120px] bg-white">
      <div className="max-w-[1200px] mx-auto px-8">
        <div className="mb-20 text-center">
          <span className="text-accent text-[11px] font-bold tracking-widest uppercase mb-4 block">Business Areas</span>
          <h2 className="text-4xl lg:text-5xl font-bold text-dark tracking-tight">사업 영역</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {BUSINESS_AREAS.map((area, idx) => (
            <BusinessCard key={idx} area={area} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
