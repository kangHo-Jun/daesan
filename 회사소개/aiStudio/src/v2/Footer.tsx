import React from 'react';

const businessHours = [
  { label: '평일', value: '08:00 ~ 17:00' },
  { label: '토요일', value: '08:00 ~ 12:00' },
  { label: '일·공휴일', value: '휴무', valueClassName: 'text-[rgba(255,80,80,0.7)]' },
  { label: '점심시간', value: '12:00 ~ 13:00', rowClassName: 'opacity-50' },
];

const addresses = [
  { badge: '본사', text: '경기도 안양시 동안구 관악대로 279' },
  { badge: '화성사업소', text: '경기도 화성시 만세구 양감면 초록로 656' },
  { badge: '물류창고', text: '인천광역시 서구 북항배후로 25, 7번게이트' },
];

export default function Footer() {
  return (
    <footer className="bg-[#0a1a10] border-t-2 border-[#C9A84C]">
      {/* Brand Area */}
      <div className="px-[48px] pt-[40px] pb-[32px]">
        <div className="flex flex-col gap-2">
          <h1 className="text-[28px] font-[800] text-white tracking-tight">
            대산
          </h1>
          <p className="text-[14px] text-[rgba(255,255,255,0.4)]">
            35년의 신뢰와 AI 기술을 결합한 건축 자재 원스톱 공급 플랫폼
          </p>
        </div>
        
        <div className="mt-[32px] mb-[40px] border-b border-[rgba(201,168,76,0.15)]" />

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[40px]">
          {/* Column 1 - 영업시간 */}
          <div>
            <div className="text-[11px] font-[700] tracking-[0.15em] text-[#C9A84C] border-b border-[rgba(201,168,76,0.2)] pb-[10px] mb-[20px]">
              영업시간
            </div>
            <div>
              {businessHours.map((item, idx) => (
                <div 
                  key={idx} 
                  className={`flex justify-between items-center py-[8px] border-b border-[rgba(255,255,255,0.04)] last:border-b-0 ${item.rowClassName || ''}`}
                >
                  <span className="text-[14px] text-[rgba(255,255,255,0.5)]">{item.label}</span>
                  <span className={`text-[14px] font-[600] text-[rgba(255,255,255,0.8)] ${item.valueClassName || ''}`}>
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Column 2 - 연락처 */}
          <div>
            <div className="text-[11px] font-[700] tracking-[0.15em] text-[#C9A84C] border-b border-[rgba(201,168,76,0.2)] pb-[10px] mb-[20px]">
              연락처
            </div>
            <div className="space-y-[24px]">
              <div>
                <div className="text-[11px] text-[rgba(255,255,255,0.35)] mb-[4px]">대표전화</div>
                <div className="text-[18px] font-[700] text-[#C9A84C]">031-388-3833</div>
              </div>
              <div>
                <div className="text-[11px] text-[rgba(255,255,255,0.35)] mb-[4px]">이메일</div>
                <div className="text-[14px] text-[rgba(255,255,255,0.6)] font-medium">sales@daesan.biz</div>
              </div>
            </div>
          </div>

          {/* Column 3 - 주소 */}
          <div>
            <div className="text-[11px] font-[700] tracking-[0.15em] text-[#C9A84C] border-b border-[rgba(201,168,76,0.2)] pb-[10px] mb-[20px]">
              주소
            </div>
            <div className="space-y-[14px]">
              {addresses.map((item, idx) => (
                <div key={idx} className="flex gap-[12px] items-start">
                  <span className="bg-[rgba(201,168,76,0.12)] text-[#C9A84C] text-[10px] font-[700] px-[8px] py-[3px] rounded-[4px] tracking-[0.05em] whitespace-nowrap mt-[2px]">
                    {item.badge}
                  </span>
                  <span className="text-[13px] text-[rgba(255,255,255,0.55)] leading-[1.55]">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#060f08] px-[48px] py-[18px] flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-[12px] text-[rgba(255,255,255,0.25)] text-center md:text-left">
          <span className="text-[rgba(255,255,255,0.4)]">주식회사 대산</span> · 대표 손장범 · 사업자등록번호 138-81-10613
        </div>
        <div className="text-[12px] text-[rgba(255,255,255,0.2)]">
          © 2025 대산우드랜드. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
