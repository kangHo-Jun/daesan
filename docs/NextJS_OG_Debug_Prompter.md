# Next.js OG 이미지 API 무한 로딩 해결 프롬프터

## 🎯 문제 상황

**증상**: `npm run dev` 실행 시 브라우저 무한 로딩  
**영향**: 루트(`/`) + API(`/api/og/mdf`) 모두 응답 없음  
**빌드**: `npx next build` 성공 (코드는 정상)

---

## 🔧 해결 순서 (1단계씩 진행)

### 1단계: 프로세스 완전 정리
```bash
# 모든 Node 프로세스 강제 종료
killall node

# 포트 3000 확인
lsof -i :3000

# 점유 중이면 강제 종료
kill -9 [PID]
```

### 2단계: 캐시 완전 삭제
```bash
# .next 폴더 삭제
rm -rf .next

# node_modules 삭제
rm -rf node_modules

# package-lock.json 삭제
rm package-lock.json

# 재설치
npm install
```

### 3단계: 다른 포트로 실행
```bash
npm run dev -- -p 3001
```

**→ http://localhost:3001 접속 테스트**

---

## 🚨 여전히 안 되면

### 4단계: references 폴더 제외 확인

**next.config.js 수정**:
```javascript
module.exports = {
  // ...기존 설정
  
  webpack: (config, { isServer }) => {
    config.watchOptions = {
      ignored: [
        '**/node_modules',
        '**/references/**',  // 추가
        '**/.next/**',
        '**/.git/**'
      ]
    };
    return config;
  }
};
```

### 5단계: Node.js 버전 다운그레이드

```bash
# 현재 버전 확인
node -v  # v24.12.0

# LTS 버전(20.x)으로 변경
nvm install 20
nvm use 20

# 재실행
npm install
npm run dev
```

---

## 🔍 디버깅 정보 수집

### 실행 시 로그 확인
```bash
# 상세 로그 모드
DEBUG=* npm run dev

# 또는
npm run dev -- --debug
```

**다음 정보 확인**:
- [ ] "Compiled successfully" 메시지 나오는지
- [ ] "ready - started server on ..." 나오는지
- [ ] 에러 메시지가 있는지

---

## 🎯 최후의 수단: 격리 테스트

### 6단계: API만 별도 폴더로 분리

```bash
# 새 폴더 생성
mkdir test-og-api
cd test-og-api

# 최소 Next.js 프로젝트 생성
npx create-next-app@latest . --typescript --app --no-tailwind --no-eslint

# @vercel/og 설치
npm install @vercel/og

# API 파일만 복사
mkdir -p app/api/og/mdf
cp [원본경로]/app/api/og/mdf/route.tsx app/api/og/mdf/

# 실행
npm run dev
```

**→ http://localhost:3000/api/og/mdf 접속 테스트**

---

## ✅ 체크리스트

작업 전 확인:
- [ ] Node.js 버전 (권장: v20.x LTS)
- [ ] npm 버전 (권장: v10.x)
- [ ] 디스크 여유 공간 (최소 5GB)
- [ ] 메모리 여유 (최소 4GB)

작업 후 확인:
- [ ] `npm run dev` 에러 없이 실행
- [ ] "ready - started server" 메시지 출력
- [ ] 브라우저 http://localhost:3000 접속 성공
- [ ] API http://localhost:3000/api/og/mdf 이미지 생성 성공

---

## 📊 성공 시 테스트

```bash
# 쿼리 파라미터 테스트
http://localhost:3000/api/og/mdf?density=850&grade=E1&thickness=12T&size=1220x2440
```

**예상 결과**: 1200x630 PNG 이미지 다운로드

---

## 🚨 실패 시 제공 정보

다음 정보를 함께 전달:
1. `npm run dev` 전체 로그 (처음부터 끝까지)
2. `node -v` 출력
3. `npm -v` 출력
4. `cat next.config.js` 내용
5. `cat package.json` 내용
6. 운영체제 (macOS / Windows / Linux)

---

## 💡 추가 팁

### references 폴더가 원인이면
```bash
# 임시로 폴더명 변경
mv references _references_backup

# 실행 테스트
npm run dev

# 성공하면 references가 원인
```

### 메모리 부족이면
```bash
# Node.js 메모리 증가
NODE_OPTIONS="--max-old-space-size=8192" npm run dev
```

---

## 🎯 최종 목표

**성공 조건**:
- `npm run dev` 실행 30초 이내 완료
- 브라우저에서 Next.js 기본 페이지 보임
- `/api/og/mdf` 접속 시 PNG 이미지 생성

---

**1단계부터 순서대로 진행하고, 각 단계 결과를 보고하세요.** 🚀
