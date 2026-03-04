# 🏗️ [대산우드랜드] 회사소개 페이지 — Step 1 의뢰서
**에이전시 작업 지시 프롬프트 v1.0**

---

## 📌 프로젝트 개요

저는 30년 건축자재 유통 전문 B2B 기업 **대산우드랜드**의 운영자입니다.
카페24 쇼핑몰(daesan3833.cafe24.com)에 연동되는 **독립형 브랜드 회사소개 페이지**를 단계별로 제작하려 합니다.

이번 Step 1에서는 **HTML/CSS 기본 구조만** 완성해주세요.
애니메이션, JavaScript, 지도 등은 이후 단계에서 추가합니다.

---

## 🎯 에이전시가 갖춰야 할 스킬

이 프로젝트를 진행하려면 아래 스킬이 필요합니다.
**각 항목을 사전에 숙지하고 시작해주세요.**

| 필수 스킬 | 상세 내용 |
|-----------|-----------|
| **HTML5 시맨틱 구조** | section, nav, main, article 등 올바른 태그 사용 |
| **CSS Flexbox / Grid** | 2-column 레이아웃 (좌측 네비 + 우측 콘텐츠) 구현 |
| **CSS Custom Properties** | 색상, 폰트, 여백을 변수로 관리 |
| **position: fixed** | 좌측 사이드바 100vh 고정 구현 |
| **반응형(Responsive)** | 모바일에서 햄버거 메뉴로 전환되는 구조 |
| **Google Fonts 연동** | Pretendard 또는 Noto Sans KR 로드 |
| **카페24 파일 구조 이해** | `/brand/` 독립 폴더 경로 방식 이해 |

> ⚠️ 카페24 기본 GNB, 헤더, 푸터는 **절대 사용하지 않습니다.**
> 순수 독립 HTML 파일로 작성해야 합니다.

---

## 📁 납품 파일 구조

```
/brand/
  ├── company.html     ← 메인 페이지 (이번 Step 결과물)
  ├── style.css        ← 전용 스타일시트
  └── images/          ← 이미지 폴더 (지금은 placeholder 처리)
```

접속 URL: `http://daesan3833.cafe24.com/brand/company.html`

---

## 🎨 디자인 시스템 (반드시 준수)

```css
/* 색상 변수 — 이 값을 그대로 사용하세요 */
:root {
  --color-primary:    #002244;   /* 네이비 — 좌측 네비 배경, 강조 텍스트 */
  --color-accent:     #0055FF;   /* 블루 — CTA 버튼, 포인트 라인 */
  --color-bg:         #F8F9FA;   /* 라이트 그레이 — 메인 배경 */
  --color-white:      #FFFFFF;
  --color-text:       #1A1A1A;   /* 본문 텍스트 */
  --color-subtext:    #666666;   /* 서브텍스트 */

  /* 폰트 */
  --font-main: 'Pretendard', 'Noto Sans KR', sans-serif;

  /* 여백 시스템 (8px Grid) */
  --space-xs:  8px;
  --space-sm:  16px;
  --space-md:  24px;
  --space-lg:  48px;
  --space-xl:  80px;
  --space-xxl: 120px;

  /* 레이아웃 */
  --sidebar-width: 250px;
}
```

---

## 📐 레이아웃 구조

```
┌─────────────────────────────────────────┐
│  [좌측 사이드바 250px fixed]  │  [우측 메인 콘텐츠]           │
│                               │                               │
│  DAESAN 로고                  │  S1: Hero Section (100vh)     │
│                               │                               │
│  • 브랜드 소개                │  S2: 회사 소개               │
│  • 회사 철학                  │                               │
│  • 사업 영역                  │  S3: 차별점                  │
│  • 미래 전략                  │                               │
│  • 찾아오시는 길              │  S4: 사업 영역               │
│  • B2B 문의                   │                               │
│                               │  S5: 취급 브랜드             │
│  [← 쇼핑몰로 돌아가기]        │                               │
│                               │  S6: 미래 전략               │
│                               │                               │
│                               │  S7: B2B 문의 (CTA)          │
│                               │                               │
│                               │  S8: 찾아오시는 길           │
└─────────────────────────────────────────┘
```

---

## 📋 Step 1 작업 상세 지시

### ✅ 해야 할 것

#### 1. HTML 기본 뼈대

```html
<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>대산우드랜드 | 브랜드 소개</title>
  <meta name="description" content="건축자재 유통을 넘어 시스템 기업으로 진화하는 대산우드랜드. 30년 신뢰, 실시간 ERP, AI 자동화로 B2B 건축자재 솔루션을 제공합니다.">
  <link rel="stylesheet" href="style.css">
  <!-- Google Fonts: Pretendard -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;700;900&display=swap" rel="stylesheet">
</head>
<body>

  <!-- 좌측 사이드바 네비게이션 -->
  <nav class="sidebar" id="sidebar">
    <!-- 브랜드 로고 -->
    <!-- 네비 메뉴 링크들 -->
    <!-- 쇼핑몰로 돌아가기 버튼 -->
  </nav>

  <!-- 우측 메인 콘텐츠 -->
  <main class="main-content">
    <section id="hero"><!-- S1 --></section>
    <section id="about"><!-- S2 --></section>
    <section id="philosophy"><!-- S3 --></section>
    <section id="business"><!-- S4 --></section>
    <section id="brands"><!-- S5 --></section>
    <section id="vision"><!-- S6 --></section>
    <section id="contact"><!-- S7 --></section>
    <section id="location"><!-- S8 --></section>
  </main>

  <!-- 모바일 햄버거 헤더 (모바일에서만 표시) -->
  <header class="mobile-header">
    <!-- 로고 + 햄버거 아이콘 -->
  </header>

</body>
</html>
```

#### 2. 좌측 사이드바 CSS (핵심)

```css
.sidebar {
  position: fixed;
  left: 0;
  top: 0;
  width: var(--sidebar-width);    /* 250px */
  height: 100vh;
  background-color: var(--color-primary);   /* #002244 */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 40px 30px;
  z-index: 1000;
  overflow-y: auto;
}

.main-content {
  margin-left: var(--sidebar-width);   /* 사이드바 너비만큼 밀기 */
  width: calc(100% - var(--sidebar-width));
}
```

#### 3. 각 섹션별 콘텐츠 (텍스트만, 이미지는 placeholder)

| 섹션 | ID | 높이 | 최소 포함 내용 |
|------|----|------|----------------|
| Hero | `#hero` | `100vh` | 헤드라인 "건축자재 유통을 넘어 시스템 기업으로" + 서브텍스트 + CTA 버튼 2개 |
| 회사 소개 | `#about` | `auto` | 설립 30년, 원스톱 솔루션, 숫자 3개 (카운터 placeholder) |
| 차별점 | `#philosophy` | `auto` | 6개 차별점 카드 그리드 (실시간가격/AI콘텐츠/온라인재단/디지털카탈로그/원스톱/B2B전문) |
| 사업 영역 | `#business` | `auto` | 4개 영역 카드 (B2B유통/온라인판매/창호단열/스마트물류) |
| 취급 브랜드 | `#brands` | `auto` | 브랜드명 텍스트 나열 (로고 이미지는 추후) |
| 미래 전략 | `#vision` | `auto` | 3개 전략 항목 |
| B2B 문의 | `#contact` | `60vh` | CTA 버튼 2개 + 연락처 텍스트 |
| 찾아오시는 길 | `#location` | `auto` | 주소/전화/영업시간 텍스트 + 지도 placeholder 박스 |

#### 4. 반응형 기본 구조

```css
/* 모바일 (768px 이하) */
@media (max-width: 768px) {
  .sidebar {
    display: none;    /* 기본 숨김 — JS로 토글 (Step 2에서 구현) */
  }
  .mobile-header {
    display: flex;    /* 모바일 헤더 표시 */
  }
  .main-content {
    margin-left: 0;
    width: 100%;
  }
}
```

---

### ❌ 하지 말아야 할 것

- `jQuery` 사용 금지 (Vanilla JS + CSS만)
- 카페24 기본 `layout.html`, GNB, 푸터 포함 금지
- 외부 CSS 프레임워크 (Bootstrap 등) 금지
- JavaScript 인터랙션 구현 금지 (Step 2에서 진행)
- 이미지 실제 파일 삽입 금지 (placeholder div로 대체)
- `!important` 남용 금지

---

## 📤 납품 요구사항

1. **`company.html`** — 완성된 HTML 파일
2. **`style.css`** — CSS 변수 포함한 완성된 스타일시트
3. **브라우저 확인** — Chrome 기준 PC/모바일 레이아웃 스크린샷 2장

---

## ✅ Step 1 완료 기준 체크리스트

완성 후 아래 항목을 직접 체크하고 납품해주세요:

```
□ 좌측 사이드바가 스크롤해도 고정되어 있다 (position: fixed)
□ 우측 콘텐츠가 사이드바 오른쪽부터 시작한다 (margin-left: 250px)
□ 8개 섹션(S1~S8)이 모두 존재한다
□ 네비 메뉴 클릭 시 해당 섹션으로 이동한다 (href="#hero" 방식)
□ 모바일(768px)에서 사이드바가 숨겨지고 모바일 헤더가 표시된다
□ CSS 변수(--color-primary 등)가 style.css 상단에 선언되어 있다
□ 폰트가 Noto Sans KR 또는 Pretendard로 적용되어 있다
□ "쇼핑몰로 돌아가기" 버튼이 있고 클릭 시 http://daesan3833.cafe24.com 으로 이동한다
□ 이미지 영역은 placeholder (배경색 박스)로 처리되어 있다
□ HTML 파일이 카페24 /brand/ 폴더에 업로드 시 독립 실행된다
```

---

## 💬 참고 레퍼런스

- **디자인 참고**: https://v0.app/templates/hously-modern-architecture-studio-8o7jKw7qwlb
  - 좌측 고정 네비 + 풀스크린 섹션 구조
  - Minimal + Industrial 톤
  - 대형 타이포그래피 + 여백 활용

- **카페24 업로드 방법**: FTP 접속 → `/html/brand/` 폴더에 파일 업로드

---

## 🔜 이후 진행 예정 단계

| 단계 | 내용 |
|------|------|
| **Step 2** | JavaScript — 스무스 스크롤 + 모바일 햄버거 메뉴 |
| **Step 3** | GSAP 애니메이션 — 패럴랙스, 텍스트 페이드인, 숫자 카운터 |
| **Step 4** | 카카오맵 API — 찾아오시는 길 지도 삽입 |
| **Step 5** | 실제 이미지/로고 교체 + 최종 SEO 마무리 |

> Step 1 완료 후 결과물 확인하고 Step 2를 별도로 지시하겠습니다.

---

**문의**: 작업 중 구조적 판단이 필요한 경우 먼저 질문해주세요.
임의로 구조를 변경하지 말고 위 지시사항을 우선합니다.
