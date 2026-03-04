우드몰 스타일 회사소개 페이지 구현 계획서
참고 사이트: woodmall.co.kr 적용 대상: daesan3833.cafe24.com

목표
Cafe24의 기본 회사소개 페이지(/shopinfo/company.html)의 제약에서 벗어나, 디자인 자유도가 높은 독립적인 HTML 페이지를 만들고 이를 기존 쇼핑몰 메뉴와 연결합니다.

분석 결과 요약
일반 페이지: /product/list.html과 같이 Cafe24 표준 시스템을 사용.
독립 페이지: /jwgbox/add_page/company.html과 같이 별도의 폴더에 직접 만든 HTML 파일을 사용.
연결 방식: 공통 헤더의 '회사소개' 링크를 기본 경로가 아닌 새로 만든 커스텀 경로로 변경.
제안하는 변경 사항
[Cafe24 관리자 설정]
1. **레이아웃 제거**: 독립적인 디자인을 위해 `company.html` 최상단의 `<!--@layout(/layout/basic/layout.html)-->` 줄을 **반드시 삭제**합니다. (GNB/Footer 제거용)
2. **파일 업로드**: Cafe24 FTP 또는 **[파일 관리자]**를 통해 sde_design 폴더 내에 add_page라는 새 폴더를 만들고 company.html을 업로드합니다.
3. **메뉴 연결**: **[스마트디자인 편집기]**에서 상단/하단 메뉴의 링크를 수정합니다.
[컴포넌트: 헤더 네비게이션]
#### [수정] layout/basic/header.html (또는 사용 중인 레이아웃 파일)
- 회사소개(Company) 메뉴의 링크 주소를 변경합니다.
- 변경 전: <a href="/shopinfo/company.html">
- 변경 후: <a href="https://ecimg.cafe24img.com/pg2383b21973322017/daesan3833/intro/company.html">
검증 계획
수동 확인 사항
직접 접속: daesan3833.cafe24.com/add_page/company.html 주소로 직접 접속하여 디자인이 의도대로 나오는지 확인합니다.
메뉴 클릭: 홈이나 상품 목록 페이지에서 상단의 'COMPANY' 메뉴를 클릭했을 때 위 주소로 이동하는지 확인합니다.
모바일 확인: 모바일 뱅크나 모바일 하단 메뉴에도 '회사소개' 링크가 있다면 동일하게 변경되었는지 확인합니다.