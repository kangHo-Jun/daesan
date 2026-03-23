# 건축자재 쇼핑몰 오프닝 영상 개발 기획서 ver10
> 프로젝트명: 쇼핑몰 브랜드 오프닝 시네마틱 | 도구: Google Flow

---

## 1. 핵심 컨셉

| 키워드 | 의미 |
|--------|------|
| Legacy | 30년간 현장을 지켜온 변함없는 신뢰 |
| Real-time | AI 기반 실시간 가격 변동 및 즉각 견적 |
| Precision | 오차 없는 AI 재단 및 3D 최적 적재 기술 |

**Visual Style**: Epic Cinematic Realism + Futuristic UI  
**총 러닝타임**: 30초

---

## 2. Scene 구성 및 필요 사진/영상 소스

### Scene 1 — 30 Years of Trust (5초)
> 새벽녘 자재 창고. 묵직한 목재와 석고보드의 극사실적 질감 클로즈업.

**필요 소스**

| # | 소스 설명 | 비고 |
|---|-----------|------|
| 1 | 새벽빛이 들어오는 자재 창고 전경 | 창고 내부 실사 촬영 권장 |
| 2 | 목재(각재/합판) 나뭇결 클로즈업 | 세월감 느껴지는 질감 중요 |
| 3 | 석고보드 단면 클로즈업 | 흰 분말 텍스처 강조 |
| 4 | 오래된 작업장 분위기 컷 | 녹슨 장비, 먼지, 세월감 |

---

### Scene 2 — AI Live Data (5초)
> 자재 표면에 빛의 선이 흐르며 실시간 가격 수치가 홀로그램으로 떠오름.

**필요 소스**

| # | 소스 설명 | 비고 |
|---|-----------|------|
| 5 | 빛이 반사되는 합판/자재 평면 클로즈업 | Flow 홀로그램 합성용 베이스 캔버스 |
| 6 | 넓고 단순한 석고보드 표면 | 데이터 오버레이 배경용 |

> **Flow 생성 대체 가능**: 홀로그램 HUD, 가격 수치 애니메이션은 AI 생성

---

### Scene 3 — Accuracy & Speed (7초)
> 자재가 AI 알고리즘에 따라 오차 없이 재단되고, 트럭에 최적 적재되는 역동적 모습.

**필요 소스**

| # | 소스 설명 | 비고 |
|---|-----------|------|
| 7 | 목재 절단 순간 (톱밥 날리는 장면) | 동적 컷 — 영상 클립 권장 |
| 8 | 지게차로 자재 적재하는 모습 | 창고 내부 실사 |
| 9 | 트럭 상차 장면 | 출하 현장 |

---

### Scene 4 — Smart Solution (8초)
> 창호·도어 설치 공간에 가이드라인 등장, 실시간 견적 완료. 빛과 함께 자재 조립.

**필요 소스**

| # | 소스 설명 | 비고 |
|---|-----------|------|
| 10 | 창호 / 도어 설치 현장 사진 | 납품처 현장 촬영 or 공급사 자료 |
| 11 | 작업자가 태블릿/도면 보는 장면 | 견적 UI 오버레이 합성 베이스 |

> **Flow 생성 대체 가능**: 가이드라인, Instant Quote UI 애니메이션

---

### Scene 5 — The No.1 Leader (5초)
> 카메라 상승 → 자재들로 이루어진 도시 전경 → 브랜드 로고 등장.

**필요 소스**

| # | 소스 설명 | 비고 |
|---|-----------|------|
| 12 | 완공된 건물 외관 (납품 실적 현장) | 가능하면 대표 납품처 |
| 13 | 회사 로고 고해상도 파일 | **PNG 투명배경 필수** |

> **Flow 생성 대체 가능**: 도시 전경 시네마틱 장면

---

## 3. 소스 확보 전략

| 구분 | 소스 번호 | 확보 방법 |
|------|-----------|-----------|
| 직접 촬영 | 1, 2, 3, 4, 7, 8, 9 | 창고/현장 스마트폰 촬영 (4K 권장) |
| 납품처 협조 | 10, 12 | 기존 거래처 사진 제공 요청 |
| 사내 보유 | 13 | 로고 파일 확인 |
| AI 생성 대체 | 5, 6, 11 | Google Flow 프롬프트로 생성 |
| Flow 합성 효과 | 홀로그램/HUD/도시전경 | 프롬프트 입력으로 자동 생성 |

---

## 4. Google Flow 최종 프롬프트

```
Create a 30-second cinematic trailer showing the synergy between
30 years of construction expertise and AI-driven real-time technology.

Opening: Hyper-realistic, gritty textures of raw wood and insulation panels
in a sunrise warehouse.

Transition: Golden data pulses flow over materials. Floating digital HUDs
display "Real-time Pricing" and flickering market data numbers.

Action: Plywood and boards are sliced with glowing precision lines
("Precision Cutting"), assembling into structures with zero waste.
Modern window frames and doors snap into place as light-speed
"Instant Quotes" appear.

Finale: Camera zooms out to reveal a vast, surreal city built from
these materials — stable, majestic, and orchestrated by data.

Style: Epic cinematic realism, futuristic UI, dramatic lighting,
smooth and grand camera movements.
```

---

## 5. 제작 체크리스트

- [ ] 로고 PNG 투명배경 파일 확보
- [ ] 창고 내부 / 자재 질감 촬영 (Scene 1, 2)
- [ ] 절단 / 적재 / 상차 영상 촬영 (Scene 3)
- [ ] 납품처 현장 사진 확보 (Scene 4, 5)
- [ ] Google Flow 프롬프트 입력 및 초안 생성
- [ ] 실사 소스 + AI 생성 영상 편집 합성
- [ ] 최종 30초 영상 완성 및 쇼핑몰 히어로 영역 업로드
