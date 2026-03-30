import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// ─────────────────────────────────────────────
// Browser Top Bar
// ─────────────────────────────────────────────
const BrowserBar = ({ label }: { label?: string }) => (
  <div style={{
    display: 'flex', alignItems: 'center', gap: 6,
    padding: '6px 10px',
    background: '#f5f0e8',
    borderBottom: '1px solid rgba(26,58,40,0.1)'
  }}>
    <div style={{ display: 'flex', gap: 4, flexShrink: 0 }}>
      <div style={{ width: 7, height: 7, borderRadius: '50%', background: '#ff5f57' }} />
      <div style={{ width: 7, height: 7, borderRadius: '50%', background: '#febc2e' }} />
      <div style={{ width: 7, height: 7, borderRadius: '50%', background: '#28c840' }} />
    </div>
    {label && (
      <div style={{
        flex: 1, background: 'rgba(26,58,40,0.06)', borderRadius: 4,
        padding: '2px 8px', overflow: 'hidden'
      }}>
        <span style={{
          fontSize: '7px', color: 'rgba(26,58,40,0.6)', fontFamily: 'sans-serif',
          whiteSpace: 'nowrap', display: 'block',
          overflow: 'hidden', textOverflow: 'ellipsis'
        }}>{label}</span>
      </div>
    )}
  </div>
);

// ─────────────────────────────────────────────
// Card 01 — 실시간 단가표
// ─────────────────────────────────────────────
const PRICE_DATA = [
  { name: '석고보드 9.5T 900×1800', code: 'KCC-001', price: 4200,   unit: '장', chg: +150,   pct: '+3.7%' },
  { name: '벽몰딩 MDF 2400mm',      code: 'OCI-024', price: 1850,   unit: '개', chg: -50,    pct: '-2.6%' },
  { name: '단열재 인슐레이션 R19',   code: 'HDC-112', price: 12500,  unit: '롤', chg: +200,   pct: '+1.6%' },
  { name: '천장몰딩 석고 24mm',      code: 'KCC-089', price: 980,    unit: 'm',  chg: 0,      pct: '─' },
  { name: '방화문 ABS 900×2100',     code: 'DKR-301', price: 285000, unit: '짝', chg: -5000,  pct: '-1.7%' },
];

const PriceTablePreview = () => (
  <div style={{ background: 'white', height: '100%', overflow: 'hidden' }}>
    {/* Title row with LIVE */}
    <div style={{
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '7px 10px', borderBottom: '1px solid #f0f0f0', background: '#fafafa'
    }}>
      <span style={{ fontSize: '8px', fontWeight: 700, color: '#111' }}>자재 단가표</span>
      <span style={{
        display: 'inline-flex', alignItems: 'center', gap: 3,
        fontSize: '6.5px', fontWeight: 700, color: '#16a34a',
        background: '#dcfce7', padding: '2px 6px', borderRadius: 999,
        border: '1px solid #bbf7d0'
      }}>
        <span style={{ width: 5, height: 5, background: '#16a34a', borderRadius: '50%', display: 'inline-block' }} />
        LIVE
      </span>
    </div>
    {/* Column headers */}
    <div style={{
      display: 'grid', gridTemplateColumns: '1fr 62px 42px 38px',
      padding: '4px 10px', borderBottom: '1px solid #f0f0f0', background: '#fafafa'
    }}>
      {['품목', '단가', '변동', '변동률'].map((h, i) => (
        <span key={h} style={{
          fontSize: '6px', color: '#9ca3af', fontWeight: 600,
          textAlign: i > 0 ? 'right' : 'left'
        }}>{h}</span>
      ))}
    </div>
    {/* Rows */}
    {PRICE_DATA.map((item, i) => (
      <div key={i} style={{
        display: 'grid', gridTemplateColumns: '1fr 62px 42px 38px',
        padding: '5px 10px', alignItems: 'center',
        borderBottom: '1px solid #f9f9f9'
      }}>
        <div>
          <div style={{ fontSize: '7px', color: '#111', fontWeight: 600, lineHeight: 1.3 }}>{item.name}</div>
          <div style={{ fontSize: '5.5px', color: '#aaa', marginTop: 1 }}>{item.code}</div>
        </div>
        <div style={{ textAlign: 'right' }}>
          <span style={{ fontSize: '7.5px', color: '#111', fontWeight: 700 }}>₩{item.price.toLocaleString()}</span>
          <span style={{ fontSize: '5.5px', color: '#aaa' }}>/{item.unit}</span>
        </div>
        <div style={{ textAlign: 'right' }}>
          <span style={{
            fontSize: '7px', fontWeight: 700,
            color: item.chg > 0 ? '#ef4444' : item.chg < 0 ? '#2563EB' : '#aaa'
          }}>
            {item.chg > 0 ? '▲' : item.chg < 0 ? '▼' : '─'}
            {item.chg !== 0 ? Math.abs(item.chg).toLocaleString() : ''}
          </span>
        </div>
        <div style={{ textAlign: 'right' }}>
          <span style={{
            fontSize: '6px', fontWeight: 600,
            color: item.chg > 0 ? '#ef4444' : item.chg < 0 ? '#2563EB' : '#aaa'
          }}>{item.pct}</span>
        </div>
      </div>
    ))}
  </div>
);

// ─────────────────────────────────────────────
// Card 02 — AI 웹 카탈로그
// ─────────────────────────────────────────────
const CatalogPreview = () => (
  <div style={{ background: 'white', height: '100%', overflow: 'hidden' }}>
    {/* Search bar */}
    <div style={{ padding: '7px 10px', borderBottom: '1px solid #e5e7eb', background: '#fafafa' }}>
      <div style={{
        display: 'flex', alignItems: 'center', gap: 5,
        background: 'white', border: '1px solid #e5e7eb',
        borderRadius: 5, padding: '4px 8px'
      }}>
        <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2.5">
          <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
        </svg>
        <span style={{ fontSize: '7px', color: '#9ca3af', flex: 1 }}>제품명 또는 코드 검색</span>
        <span style={{
          fontSize: '6.5px', background: '#2563EB', color: 'white',
          padding: '2px 6px', borderRadius: 3, whiteSpace: 'nowrap'
        }}>검색</span>
      </div>
    </div>
    {/* Category tabs */}
    <div style={{
      display: 'flex', gap: 4, padding: '5px 10px',
      borderBottom: '1px solid #e5e7eb', overflow: 'hidden'
    }}>
      {['전체', '석고보드', '몰딩', '단열재', '바닥재'].map((cat, i) => (
        <span key={cat} style={{
          padding: '2px 6px', borderRadius: 999, fontSize: '6.5px',
          whiteSpace: 'nowrap', fontWeight: 500,
          background: i === 0 ? '#2563EB' : '#f3f4f6',
          color: i === 0 ? 'white' : '#6b7280'
        }}>{cat}</span>
      ))}
    </div>
    {/* Column headers */}
    <div style={{
      display: 'grid', gridTemplateColumns: '1fr 68px 48px',
      padding: '4px 10px', borderBottom: '1px solid #f0f0f0', background: '#fafafa'
    }}>
      {['제품명', '단가', '재고'].map((h, i) => (
        <span key={h} style={{
          fontSize: '6px', color: '#9ca3af', fontWeight: 600,
          textAlign: i > 0 ? 'right' : 'left'
        }}>{h}</span>
      ))}
    </div>
    {/* Product rows */}
    {[
      { name: '석고보드 9.5T 900×1800', code: 'KCC-001', price: '₩4,200',  unit: '장', ok: true },
      { name: '벽몰딩 MDF 2400mm',      code: 'OCI-024', price: '₩1,850',  unit: '개', ok: true },
      { name: '단열재 인슐레이션 R19',   code: 'HDC-112', price: '₩12,500', unit: '롤', ok: false },
      { name: '천장몰딩 석고 24mm',      code: 'KCC-089', price: '₩980',    unit: 'm',  ok: true },
    ].map((item, i) => (
      <div key={i} style={{
        display: 'grid', gridTemplateColumns: '1fr 68px 48px',
        padding: '5.5px 10px', alignItems: 'center',
        borderBottom: '1px solid #f9f9f9'
      }}>
        <div>
          <div style={{ fontSize: '7px', color: '#111', fontWeight: 600, lineHeight: 1.3 }}>{item.name}</div>
          <div style={{ fontSize: '5.5px', color: '#aaa', marginTop: 1 }}>{item.code}</div>
        </div>
        <div style={{ textAlign: 'right' }}>
          <span style={{ fontSize: '7.5px', color: '#111', fontWeight: 700 }}>{item.price}</span>
          <span style={{ fontSize: '5.5px', color: '#aaa' }}>/{item.unit}</span>
        </div>
        <div style={{ textAlign: 'right' }}>
          <span style={{
            fontSize: '6px', padding: '1px 5px', borderRadius: 999, fontWeight: 600,
            background: item.ok ? '#dcfce7' : '#fee2e2',
            color: item.ok ? '#16a34a' : '#ef4444'
          }}>{item.ok ? '재고' : '품절'}</span>
        </div>
      </div>
    ))}
  </div>
);

// ─────────────────────────────────────────────
// Card 03 — 재단도면 (GSAP line drawing)
// ─────────────────────────────────────────────
const DiagramPreview = () => {
  const svgRef = useRef<SVGSVGElement>(null);
  const wasteRef = useRef<HTMLSpanElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg || !wrapRef.current) return;

    const drawRects = Array.from(svg.querySelectorAll<SVGRectElement>('[data-draw]'));
    const dimLines  = Array.from(svg.querySelectorAll<SVGLineElement>('[data-line]'));
    const labels    = Array.from(svg.querySelectorAll<SVGTextElement>('[data-label]'));

    // Init: hide everything
    drawRects.forEach(r => {
      const w = parseFloat(r.getAttribute('width') || '0');
      const h = parseFloat(r.getAttribute('height') || '0');
      const perim = 2 * (w + h);
      gsap.set(r, { strokeDasharray: perim, strokeDashoffset: perim, opacity: 1 });
    });
    dimLines.forEach(l => {
      const x1 = parseFloat(l.getAttribute('x1') || '0');
      const y1 = parseFloat(l.getAttribute('y1') || '0');
      const x2 = parseFloat(l.getAttribute('x2') || '0');
      const y2 = parseFloat(l.getAttribute('y2') || '0');
      const len = Math.hypot(x2 - x1, y2 - y1);
      gsap.set(l, { strokeDasharray: len, strokeDashoffset: len });
    });
    gsap.set(labels, { opacity: 0 });
    if (wasteRef.current) gsap.set(wasteRef.current, { opacity: 0 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: wrapRef.current,
        start: 'top 82%',
        once: true,
      }
    });

    // 1. Outer rect
    tl.to(svg.querySelector('[data-draw="outer"]'), {
      strokeDashoffset: 0, duration: 0.65, ease: 'power2.inOut'
    });

    // 2. Inner pieces A → B → C → D (sequential)
    (['a', 'b', 'c', 'd'] as const).forEach(id => {
      tl.to(svg.querySelector(`[data-draw="${id}"]`), {
        strokeDashoffset: 0, duration: 0.35, ease: 'power2.out'
      }, '-=0.05');
    });

    // 3. Piece labels
    tl.to(labels.filter(el => el.dataset.label !== 'dim'), {
      opacity: 1, duration: 0.25, stagger: 0.04
    }, '+=0.05');

    // 4. Dimension lines
    tl.to(dimLines, {
      strokeDashoffset: 0, duration: 0.3, ease: 'none', stagger: 0.05
    }, '+=0.05');

    // 5. Dim labels
    tl.to(labels.filter(el => el.dataset.label === 'dim'), {
      opacity: 1, duration: 0.2, stagger: 0.06
    }, '-=0.15');

    // 6. Waste counter
    const counter = { val: 0 };
    tl.to(counter, {
      val: 3.2, duration: 0.55, ease: 'power2.out',
      onUpdate: () => {
        if (wasteRef.current) {
          wasteRef.current.textContent = counter.val.toFixed(1) + '%';
        }
      }
    }, '+=0.05');
    tl.to(wasteRef.current, { opacity: 1, duration: 0.2 }, '<');

    return () => { tl.kill(); };
  }, []);

  return (
    <div ref={wrapRef} style={{ background: 'white', height: '100%', padding: '10px 12px 8px', boxSizing: 'border-box' }}>
      <svg ref={svgRef} viewBox="0 0 264 152" width="100%" style={{ display: 'block' }}>
        {/* Outer sheet */}
        <rect data-draw="outer" x="26" y="16" width="230" height="126"
          fill="none" stroke="#222" strokeWidth="1" />

        {/* Piece A */}
        <rect data-draw="a" x="26" y="16" width="110" height="78"
          fill="none" stroke="#444" strokeWidth="0.6" />
        <text data-label x="81" y="52" textAnchor="middle"
          fill="#333" style={{ fontSize: '6px', fontFamily: 'monospace', fontWeight: 600 }}>A</text>
        <text data-label x="81" y="60" textAnchor="middle"
          fill="#777" style={{ fontSize: '5px', fontFamily: 'monospace' }}>1100×780</text>

        {/* Piece B */}
        <rect data-draw="b" x="136" y="16" width="120" height="78"
          fill="none" stroke="#444" strokeWidth="0.6" />
        <text data-label x="196" y="52" textAnchor="middle"
          fill="#333" style={{ fontSize: '6px', fontFamily: 'monospace', fontWeight: 600 }}>B</text>
        <text data-label x="196" y="60" textAnchor="middle"
          fill="#777" style={{ fontSize: '5px', fontFamily: 'monospace' }}>1200×780</text>

        {/* Piece C */}
        <rect data-draw="c" x="26" y="94" width="72" height="48"
          fill="none" stroke="#444" strokeWidth="0.6" />
        <text data-label x="62" y="116" textAnchor="middle"
          fill="#333" style={{ fontSize: '6px', fontFamily: 'monospace', fontWeight: 600 }}>C</text>
        <text data-label x="62" y="124" textAnchor="middle"
          fill="#777" style={{ fontSize: '5px', fontFamily: 'monospace' }}>720×480</text>

        {/* Piece D */}
        <rect data-draw="d" x="98" y="94" width="72" height="48"
          fill="none" stroke="#444" strokeWidth="0.6" />
        <text data-label x="134" y="116" textAnchor="middle"
          fill="#333" style={{ fontSize: '6px', fontFamily: 'monospace', fontWeight: 600 }}>D</text>
        <text data-label x="134" y="124" textAnchor="middle"
          fill="#777" style={{ fontSize: '5px', fontFamily: 'monospace' }}>720×480</text>

        {/* Waste zone — dashed, no fill */}
        <rect x="170" y="94" width="86" height="48"
          fill="none" stroke="#ccc" strokeWidth="0.5" strokeDasharray="3 2" opacity="0.6" />

        {/* Width dimension */}
        <line data-line x1="26" y1="10" x2="256" y2="10" stroke="#888" strokeWidth="0.4" />
        <line data-line x1="26" y1="8"  x2="26"  y2="12" stroke="#888" strokeWidth="0.4" />
        <line data-line x1="256" y1="8" x2="256" y2="12" stroke="#888" strokeWidth="0.4" />
        <text data-label="dim" x="141" y="9" textAnchor="middle"
          fill="#777" style={{ fontSize: '5.5px', fontFamily: 'monospace' }}>2400mm</text>

        {/* Height dimension */}
        <line data-line x1="20" y1="16"  x2="20" y2="142" stroke="#888" strokeWidth="0.4" />
        <line data-line x1="18" y1="16"  x2="22" y2="16"  stroke="#888" strokeWidth="0.4" />
        <line data-line x1="18" y1="142" x2="22" y2="142" stroke="#888" strokeWidth="0.4" />
        <text data-label="dim" x="13" y="79" textAnchor="middle"
          fill="#777" style={{ fontSize: '5.5px', fontFamily: 'monospace' }}
          transform="rotate(-90 13 79)">1200mm</text>
      </svg>

      {/* Bottom info */}
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 4, padding: '0 2px' }}>
        <span style={{ fontSize: '7px', fontFamily: 'monospace', color: '#888' }}>Sheet 01 / 2400×1200mm</span>
        <span style={{ fontSize: '7px', fontFamily: 'monospace', color: '#333', fontWeight: 600 }}>
          낭비율 <span ref={wasteRef} style={{ opacity: 0 }}>0.0%</span>
        </span>
      </div>
    </div>
  );
};

// ─────────────────────────────────────────────
// Card 04 — AI 도어 견적 자동화 (3-step)
// ─────────────────────────────────────────────
const ANALYSIS_MSGS = [
  '도어 사양 분석 중...',
  '문틀·몰딩 자동 계산...',
  '하드웨어 매칭 중...',
  '견적서 생성 완료 ✓',
];

const ESTIMATE_ITEMS = [
  { name: 'ABS 방문 900×2100 × 3',    price: 285000 },
  { name: '문틀 세트 (자동포함) × 3', price: 90000  },
  { name: '몰딩 (자동포함) × 3',      price: 36000  },
  { name: '경첩·잠금장치 (자동포함) × 3', price: 45000 },
];

const DoorEstimatePreview = () => {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [visibleMsgs, setVisibleMsgs] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (step !== 2) return;
    setVisibleMsgs(0);
    setProgress(0);

    const timers: ReturnType<typeof setTimeout>[] = [];
    let cancelled = false;

    ANALYSIS_MSGS.forEach((_, i) => {
      const t = setTimeout(() => {
        if (cancelled) return;
        setVisibleMsgs(i + 1);
        setProgress(Math.round(((i + 1) / ANALYSIS_MSGS.length) * 100));
        if (i === ANALYSIS_MSGS.length - 1) {
          const t2 = setTimeout(() => { if (!cancelled) setStep(3); }, 600);
          timers.push(t2);
        }
      }, 400 + i * 450);
      timers.push(t);
    });

    return () => { cancelled = true; timers.forEach(clearTimeout); };
  }, [step]);

  return (
    <div style={{ background: '#0f1117', height: '100%', display: 'flex', flexDirection: 'column' }}>
      {/* Step tabs */}
      <div style={{ display: 'flex', borderBottom: '1px solid #1c2a1c', padding: '0 10px', gap: 2 }}>
        {(['입력', '분석중', '견적완성'] as const).map((label, i) => {
          const s = (i + 1) as 1 | 2 | 3;
          return (
            <button key={label} onClick={() => setStep(s)} style={{
              fontSize: '6.5px', padding: '5px 7px', border: 'none', cursor: 'pointer',
              background: 'transparent',
              color: step === s ? '#C9A84C' : '#4a5568',
              borderBottom: step === s ? '1.5px solid #C9A84C' : '1.5px solid transparent',
              fontWeight: step === s ? 700 : 500,
              transition: 'all 0.2s'
            }}>{label}</button>
          );
        })}
      </div>

      {/* Content area */}
      <div style={{ flex: 1, overflow: 'hidden', padding: '10px' }}>

        {/* STEP 1 — 입력 폼 */}
        {step === 1 && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
            {[
              { label: '도어 종류',  value: 'ABS 방문 (일반형)' },
              { label: '사이즈',    value: '900×2100' },
              { label: '수량',      value: '3개' },
              { label: '마감 옵션', value: '문틀+몰딩 포함' },
            ].map(({ label, value }) => (
              <div key={label}>
                <div style={{ fontSize: '5.5px', color: '#6b7280', marginBottom: 2 }}>{label}</div>
                <div style={{
                  background: '#1a2a1a', border: '1px solid #283828',
                  borderRadius: 4, padding: '4px 8px',
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between'
                }}>
                  <span style={{ fontSize: '7px', color: '#e2e8f0' }}>{value}</span>
                  <svg width="7" height="7" viewBox="0 0 24 24" fill="none" stroke="#6b7280" strokeWidth="2">
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </div>
              </div>
            ))}
            <button onClick={() => setStep(2)} style={{
              marginTop: 2, padding: '7px', borderRadius: 4, border: 'none',
              background: '#C9A84C', color: '#0d1a0d',
              fontSize: '7.5px', fontWeight: 800, cursor: 'pointer', letterSpacing: '0.04em'
            }}>AI 견적 자동 생성</button>
          </div>
        )}

        {/* STEP 2 — 분석 중 */}
        {step === 2 && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <div style={{ background: '#1a2a1a', borderRadius: 999, height: 4, overflow: 'hidden' }}>
              <div style={{
                height: '100%', background: '#C9A84C', borderRadius: 999,
                width: `${progress}%`, transition: 'width 0.4s ease'
              }} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              {ANALYSIS_MSGS.map((msg, i) => {
                const visible = visibleMsgs > i;
                const isDone = msg.includes('✓');
                return (
                  <div key={i} style={{
                    display: 'flex', alignItems: 'center', gap: 6,
                    opacity: visible ? 1 : 0.2, transition: 'opacity 0.35s'
                  }}>
                    <div style={{
                      width: 5, height: 5, borderRadius: '50%', flexShrink: 0,
                      background: visible ? (isDone ? '#4ADE80' : '#C9A84C') : '#2a3a2a',
                      transition: 'background 0.3s'
                    }} />
                    <span style={{
                      fontSize: '7.5px',
                      color: visible ? (isDone ? '#4ADE80' : '#e2e8f0') : '#4a5568'
                    }}>{msg}</span>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* STEP 3 — 견적서 완성 */}
        {step === 3 && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div>
                <div style={{ fontSize: '5.5px', color: '#6b7280' }}>견적서 번호</div>
                <div style={{ fontSize: '8px', color: '#e2e8f0', fontWeight: 700, fontFamily: 'monospace' }}>DS-2026-0401</div>
              </div>
              <span style={{
                fontSize: '6.5px', padding: '2px 7px', borderRadius: 999, fontWeight: 700,
                background: 'rgba(201,168,76,0.12)', color: '#C9A84C',
                border: '1px solid rgba(201,168,76,0.3)'
              }}>AI ✓</span>
            </div>

            <div style={{ borderTop: '1px solid #1c2a1c', paddingTop: 5 }}>
              {ESTIMATE_ITEMS.map((item, i) => (
                <div key={i} style={{
                  display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                  padding: '3.5px 0', borderBottom: '1px solid #111a11'
                }}>
                  <span style={{ fontSize: '6.5px', color: '#9ca3af' }}>{item.name}</span>
                  <span style={{ fontSize: '7px', color: '#e2e8f0', fontWeight: 600 }}>
                    ₩{item.price.toLocaleString()}
                  </span>
                </div>
              ))}
            </div>

            <div style={{
              display: 'flex', justifyContent: 'space-between', alignItems: 'center',
              borderTop: '1px solid #283828', paddingTop: 5
            }}>
              <span style={{ fontSize: '7px', color: '#9ca3af', fontWeight: 600 }}>총액</span>
              <span style={{ fontSize: '12px', color: '#C9A84C', fontWeight: 800 }}>₩456,000</span>
            </div>

            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <span style={{ fontSize: '6px', color: '#4ADE80', fontFamily: 'monospace' }}>생성시간 8초</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// ─────────────────────────────────────────────
// Card Definitions
// ─────────────────────────────────────────────
const CARD_DEFS = [
  {
    id: '01',
    title: '실시간 단가표',
    desc: '시장 변동 즉시 반영. 업계 최초 실시간 단가 공개',
    url: 'https://web-cadalog-ver10.vercel.app/price',
    browserLabel: '실시간 단가표 서비스',
    Preview: PriceTablePreview,
  },
  {
    id: '02',
    title: 'AI 웹 카탈로그',
    desc: '전 제품 실시간 검색 · 견적 · 발주 원스톱',
    url: 'https://web-cadalog-ver10.vercel.app/',
    browserLabel: 'AI 웹 카탈로그',
    Preview: CatalogPreview,
  },
  {
    id: '03',
    title: '재단도면 그리기',
    desc: 'AI 최적 절단 배치로 자재 낭비 최소화',
    url: 'https://kangho-jun.github.io/woodcutter_v4/',
    browserLabel: '재단도면 그리기',
    Preview: DiagramPreview,
  },
  {
    id: '04',
    title: 'AI 도어 견적 자동화',
    desc: '사양 입력 → 8초 만에 완성 견적 자동 출력',
    url: null,
    browserLabel: 'AI 도어 견적 자동화',
    Preview: DoorEstimatePreview,
  },
] as const;

// ─────────────────────────────────────────────
// Main Component
// ─────────────────────────────────────────────
export default function AIInnovation() {
  const sectionRef   = useRef<HTMLElement>(null);
  const headerRef    = useRef<HTMLDivElement>(null);
  const cardsRef     = useRef<(HTMLDivElement | null)[]>([]);
  const bottomBarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header
      gsap.fromTo(headerRef.current,
        { opacity: 0, y: 24 },
        {
          opacity: 1, y: 0, duration: 0.9, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 80%', once: true }
        }
      );

      // Cards entrance
      cardsRef.current.forEach((card, i) => {
        if (!card) return;
        gsap.fromTo(card,
          { opacity: 0, y: 32 },
          {
            opacity: 1, y: 0, duration: 0.7, ease: 'power3.out', delay: i * 0.1,
            scrollTrigger: { trigger: card, start: 'top 88%', once: true }
          }
        );
      });

      // Bottom bar
      if (bottomBarRef.current) {
        gsap.fromTo(bottomBarRef.current,
          { opacity: 0, y: 10 },
          {
            opacity: 1, y: 0, duration: 0.8,
            scrollTrigger: { trigger: bottomBarRef.current, start: 'top 95%', once: true }
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="ai-innovation"
      ref={sectionRef}
      className="overflow-hidden bg-[#f5f0e8] px-[40px] py-[80px]"
    >
      <div className="mx-auto max-w-[1100px]">

        <div ref={headerRef} className="mb-16 text-center">
          <h2 className="mb-5 font-[700] leading-[1.3] tracking-tight text-[#1a3a28]" style={{ fontFamily: "'Nanum Myeongjo', serif", fontSize: '38px' }}>
            대한민국 건자재 유통에 AI를 입히다
          </h2>
          <p className="mx-auto max-w-xl text-[16px] font-normal leading-[1.75] text-[rgba(26,58,40,0.6)]" style={{ fontFamily: 'Pretendard, sans-serif' }}>
            35년 현장 데이터 + AI 기술로 유통의 패러다임을 바꿉니다
          </p>
        </div>

        <div className="mx-auto mb-16 grid max-w-[860px] gap-5 md:grid-cols-2">
          {CARD_DEFS.map((card, i) => (
            <div
              key={card.id}
              ref={el => { cardsRef.current[i] = el; }}
              className="group overflow-hidden rounded-[12px] border border-[#1a3a28]/10 bg-white transition-colors duration-300 hover:border-[#C9A84C]/50"
            >
              <BrowserBar label={card.browserLabel} />

              <div className="relative" style={{ height: 220, overflow: 'hidden' }}>
                <card.Preview />

                {card.url && (
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{ background: 'rgba(26,58,40,0.45)' }}>
                    <a
                      href={card.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-5 py-2.5 rounded-full text-[11px] font-bold tracking-wide"
                      style={{
                        background: '#C9A84C',
                        color: '#0d1a0d',
                        textDecoration: 'none'
                      }}
                    >
                      바로가기
                      <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M7 17L17 7M17 7H7M17 7v10" />
                      </svg>
                    </a>
                  </div>
                )}
              </div>

              <div className="border-t border-[#1a3a28]/10 px-5 py-4">
                <div className="mb-1.5 flex items-center gap-2.5">
                  <span className="text-[#C9A84C]/35 text-[10px] font-[800] tabular-nums">{card.id}</span>
                  <h3 className="text-[20px] font-[700] tracking-tight text-[#1a3a28]" style={{ fontFamily: 'Pretendard, sans-serif' }}>{card.title}</h3>
                </div>
                <p className="text-[15px] font-normal leading-[1.7] text-[rgba(26,58,40,0.58)]" style={{ fontFamily: 'Pretendard, sans-serif' }}>{card.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
