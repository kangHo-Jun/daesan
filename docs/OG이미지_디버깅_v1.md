# OG 이미지 생성 API 디버깅 현황 v1

## 1. 무엇을 (What)
MDF 제품 상세 페이지에서 활용할 고해상도 인포그래픽(MDF 사양, 비교 차트, 사용 가이드 등)을 실시간 PNG 이미지로 생성하는 **Next.js 기반 Open Graph(OG) API** 구현.

## 2. 어떻게 (How)
- **기술 스택**:
    - **Framework**: Next.js 15 (App Router)
    - **Library**: `@vercel/og` (Satori 엔진 기반) / React 19
    - **Runtime**: Edge Runtime (최고의 성능과 낮은 지연 시간)
- **구현 방식**:
    - `app/api/og/mdf/route.tsx`를 통해 쿼리 파라미터(`density`, `grade`, `thickness`, `size`) 수신.
    - Satori가 지원하지 않는 `conic-gradient` 대신 **SVG (`stroke-dasharray`)**를 사용하여 정교한 원형 밀도 게이지 구현.
    - 1200x630 사이즈의 3단 레이아웃(제품 정보 / 비주얼 인사이트 / 가이드) 설계.
- **최적화 조치**:
    - **범위 제한**: `tsconfig.json` 및 `.gitignore`, `.eslintignore`를 통해 프로젝트 내 대규모 폴더(`references`)가 Next.js 스캔 대상에 포함되지 않도록 설정.
    - **빌드 검증**: `npx next build`를 성공적으로 완료하여 코드 및 의존성 무결성 확인.

## 3. 현재 문제 (Current Problem)
- **증상**: 개발 서버(`npm run dev`) 구동 시, 브라우저가 무한 로딩 상태에 빠지며 루트(`/`)와 API 경로(`/api/og/mdf`) 모두 응답을 주지 않음 (Hang/Timeout).
- **원인 분석**:
    1. **컴파일 부하**: 프로젝트 루트에 수만 개의 파일이 포함된 `references` 폴더가 존재하여, Next.js 파일 워처(Watcher)가 이를 인덱싱하는 과정에서 시스템 리소스를 과다 점유할 가능성.
    2. **Node.js 버전 이슈**: 현재 사용 중인 Node.js v24.12.0(최신/Stable 미검증)과 Next.js 15 간의 호환성 혹은 특정 라이브러리의 네이티브 모듈 충돌 가능성.
    3. **프로세스 충돌**: 기존에 실패한 Node 프로세스가 포트(3000)를 점유하거나 좀비 프로세스로 남아 응답을 차단하고 있을 가능성.
- **향후 해결 방안**:
    - 모든 Node 프로세스 강제 종료 후 `.next` 폴더 완전 삭제 및 재압축 설치 확인.
    - 포트 변경(`-p 3001`) 테스트를 통한 외부 간섭 차단.
    - 문제가 지속될 경우, 완전히 격리된 별도 폴더에서 API만 단독 구동 테스트.
