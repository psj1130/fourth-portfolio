import React from "react";
import './footer.css';

function Footer() {
  return(
    <footer>
      <ul className="footer-nav">
        <li><a>영상정보처리기기 운영·관리방침</a></li>
        <li><a>개인정보처리방침</a></li>
        <li><a>멤버스 이용약관</a></li>
        <li><a>가맹 안내</a></li>
        <li><a>Sitemap</a></li>
        <li><a>점주의 방</a></li>
      </ul>
      <div className="footer-logo">
        <img src={process.env.PUBLIC_URL + "/images/logo/bottom_logo.gif"}></img>
      </div>
      <div className="footer-text">
        <span>서울특별시 강남구 논현로 636 이디야빌딩(서울특별시 강남구 논현동 221-17)</span>
        <span>TEL : 02-543-6467</span>
        FAX : 02-543-7191
        <span>사업자등록번호 : 107-86-16302</span>
        <span>통신판매업 신고 : 강남 제 002519호</span>
        대표이사 : 문창기, 권익범
      </div>
      <div className="footer-copyright"><p>ⓒ 2017 EDIYA COFFEE COMPANY. ALL RIGHTS RESERVED..</p></div>
    </footer>
  )
}

export default Footer;