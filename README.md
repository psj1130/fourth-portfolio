# fourth-portfolio
3조 4차 포트폴리오 - 이디야 커피

## 기획 계기
팀 프로젝트 포트폴리오를 기획 하던 중 현재 시대 사람들이 많이 즐겨마시는 음료 중 하나인 `커피`를 주제로 잡았습니다.
`커피`는 카페에서 많이 파는 음료라서 국내 여러 프랜차이즈 카페를 뒤져 보던 중 `이디야커피`는 리액트로 만들지 않은거 같았습니다.
그래서 `이디야커피` 라는 사이트를 우리가 리액트로 구현해보자 라는 생각에 팀 프로젝트 주제를 이디야커피로 정하게 되었습니다.

## 개발에 사용된 언어
HTML,css,react,node.js,MongoDB,카카오 지도 API,ReCAPTCHA API,MUI
#### 프론트엔드 언어 & 프레임워크
<img src="https://img.shields.io/badge/HTML5-E35F26?style=for-the-badge&logo=HTML5&logoColor=white" align="center"> <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=CSS3&logoColor=white" align="center"> <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=white" align="center"><img src = "https://github.com/psj1130/fourth-portfolio/assets/137889849/d5c0024e-a344-4979-9512-7a7e3388de0c" width="150px" height="40px" align="center">
#### 백엔드 언어 & 환경
<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=JavaScript&logoColor=white" align="center"> <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=Node.js&logoColor=white" align="center"><img src="https://github.com/psj1130/fourth-portfolio/assets/137889849/db4337c8-1391-45d0-b8bb-a904aaf22686" width="150px" height="40px" align="center"> 

### API
<img src="https://github.com/psj1130/fourth-portfolio/assets/137889849/7d0c773f-8d0b-4876-a03c-317ced545134" width="170px" height="60px" align="center"><img src="https://github.com/psj1130/fourth-portfolio/assets/137889849/0fc54852-44d3-4855-8426-984dd80ea4c1" width="170px" height="60px" align="center">


## 시작하기
### `npm install` or `npm i`

npm install 명령어를 입력해 필요한 모듈을 다운받아줍니다.

### `npm start`

npm start 명령어를 입력해 리액트 스크립트를 실행시켜줍니다.

### 4차 포트폴리오 서버

https://github.com/psj1130/fourth-portfolio-server.git

## 프로젝트 설명

프로젝트 기간 : 2023.12.06 ~ 2023.12.31

카페 사이트인 이디야를 모방하여 상품 및 게시물 검색, 매장검색, 결제,관리자 페이지로 관리가 가능할수 있게 구현한 사이트입니다.

## 프로젝트 일정 및 API 경로

https://docs.google.com/spreadsheets/d/1_nzVMCArcdvaZ4zrDy4epF1xoJuUB9a7QuOHcv_Kt3c/edit?usp=sharing

### 팀구성

박성종(팀장) - 메인페이지,로그인페이지,회원가입 페이지,메뉴관리 페이지,회원관리 페이지 등 전반적인 백엔드,axios요청 관리및 데이터베이스 관리,전체일정 조율 및 관리

이동명 -매장 검색 페이지(카카오 지도 API이용한 지도 기능 구현),검색창 페이지(음료,MD,이벤트,Q&A,사회 공헌 활동,공지사항)검색 기능 구현,고객의 소리 페이지(제휴제안-ReCAPTCHA API 이용한 스팸 해킹 방지 기능 구현,
관리자 페이지 데이터 전송 및 구현),유통제품 페이지,관리자 페이지MUI적용 

이유준 - 상품권 및 제휴 카드 페이지, 브랜드 소식 페이지,공지에 대한 클릭 시 볼 수 있는 상세 페이지 제작,QnA 관리 페이지, 공지 관리 페이지, 이벤트 관리 페이지,사회활동 관리(DB 데이터 입력, 관리자 페이지 CRUD기능 제작,
클릭 시 상세보기 제작,Modal을 이용한 팝업 제작,MUI 디자인 사용, Modal 만들기, 수정 디자인,백엔드) 담당

정성원 - 결제페이지 프론트 css 백엔드 서버에서 데이터받고  상품보여주는 기능 ,상세설명페이지 백엔드 프론트 css searchparams로 데이터 주고받고  성공시에 구매상품과 구매한고객 갯수 총가격 포인트 ("+","-")누른 결과를 
DB에 전송,관리자 페이지 구매목록에 프론트 백엔드 css map함수로 서버에서 목록불러오기,마이페이지 백엔드만 연결

민원기 - 원두(이디야 블렌드,품질 페이지의 HTML 및 CSS 제작),이디야 멤버스 (멤버십 페이지의 슬라이드제작, 프로그래스 바 추가, 멤버십안내,서비스 안내 페이지 HTML 및 CSS 제작,Footer 제작,React icon을 이용한 아이콘추가),메뉴(음료,푸드,MD 페이지의 HTML 및 CSS 제작,제품 슬라이드,제품 순서에 기준 배치,제품 검색,  클릭시 제품 상세 정보 페이지 표시,체크박스 필터, 제품 더보기 기능 구현, DB 데이터 추가)
