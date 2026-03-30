import React from 'react';

const businessHours = [
  { label: '평일', value: '06:00 ~ 16:00' },
  { label: '토요일', value: '06:00 ~ 13:00' },
  { label: '일·공휴일', value: '휴무', valueClassName: 'text-[rgba(255,80,80,0.6)]' },
  { label: '점심시간', value: '12:00 ~ 13:00', rowClassName: 'opacity-60', valueClassName: 'text-white/25' },
];

const addresses = [
  { badge: '본사', text: '경기도 안양시 동안구 관악대로 279' },
  { badge: '물류', text: '경기도 화성시 만세구 양감면 초록로 656' },
];

export default function Footer() {
  return (
    <footer className="bg-[#0a1a10] border-t border-[#C9A84C]">
      <div className="grid grid-cols-1 gap-10 px-[40px] py-10 lg:grid-cols-[1.4fr_1fr_1fr]">
        <div className="space-y-5">
          <h2 className="text-[20px] font-extrabold tracking-[-0.04em] text-white">
            대산
          </h2>
          <p className="text-[11px] leading-[1.7] text-white/35">
            35년의 신뢰와 AI 기술을 결합한
            <br />
            건축 자재 원스톱 공급 플랫폼
          </p>
        </div>

        <div>
          <div className="mb-4 border-b border-[rgba(201,168,76,0.2)] pb-3 text-[9px] uppercase tracking-[0.2em] text-[#C9A84C]">
            영업시간
          </div>
          <div>
            {businessHours.map((item) => (
              <div
                key={item.label}
                className={`flex items-center justify-between gap-4 border-b border-[rgba(255,255,255,0.04)] py-3 ${item.rowClassName ?? ''}`}
              >
                <span className="text-[11px] text-white/40">{item.label}</span>
                <span className={`text-[11px] font-medium text-white/70 ${item.valueClassName ?? ''}`}>{item.value}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <div className="mb-4 border-b border-[rgba(201,168,76,0.2)] pb-3 text-[9px] uppercase tracking-[0.2em] text-[#C9A84C]">
            연락처 · 주소
          </div>

          <div>
            <div className="mb-1 text-[9px] text-white/30">대표전화</div>
            <div className="text-[13px] font-bold text-[#C9A84C]">031-388-3833</div>
          </div>

          <div>
            <div className="mb-1 text-[9px] text-white/30">이메일</div>
            <div className="text-[11px] text-white/60">ds-cjh@daesan.biz</div>
          </div>

          <div className="space-y-3 pt-1">
            {addresses.map((item) => (
              <div key={item.badge} className="space-y-2">
                <span className="inline-flex rounded-full bg-[rgba(201,168,76,0.12)] px-2 py-1 text-[8px] font-medium text-[#C9A84C]">
                  {item.badge}
                </span>
                <p className="text-[10px] leading-[1.55] text-white/50">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-3 bg-[#060f08] px-[40px] py-4 text-[10px] md:flex-row md:items-center md:justify-between">
        <p className="text-white/25">
          <span className="text-white/35">주식회사 대산</span> · 대표 손장범 · 사업자등록번호 138-81-10613
        </p>
        <p className="text-white/20">© 2025 대산우드랜드. All rights reserved.</p>
      </div>
    </footer>
  );
}
