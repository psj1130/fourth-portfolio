import React from "react";
import './membersh.css'
import { Link } from "react-router-dom";
import { getCookie, delCookie } from "../customer/cookies";

function MembersHeader() {
  const cookie = getCookie('loginCookie');
  let context = null;

  if(cookie) {
    context = <li><p onClick={() => {
      delCookie('loginCookie');
      document.location.reload(true);
    }}>로그아웃</p></li>
  } else if(!cookie){
    context = <li><Link to='/members/login' onClick={() => {
      window.sessionStorage.setItem('BeforePage', window.location.pathname);
    }}>로그인</Link></li>
  }

  return(
    <header id="members-header">
      <div className="members-header-top">
        <div className="members-header-top-nav">
          <ul>
            {context}
            <li><Link to='/searchstore'>매장찾기</Link></li>
            <li><Link to='/'>APP 다운로드</Link></li>
            <li><Link to='/'>이디야 스토어</Link></li>
            <li><Link to='/'>메인 페이지</Link></li>
          </ul>
        </div>
      </div>
      <div className="members-header-bottom">
        <div className="members-top-logo">
          <h1 className="members-logo">
            <Link to="/members">
              <span className="blind">EDIYA</span>
            </Link>
          </h1>
        </div>
        <div className="members-header-bottom-nav">
          <Link to="/members/members_guide">멤버십 안내</Link>
          <Link to="/members/service_guide">서비스 안내</Link>
        </div>
      </div>
    </header>
  )
}

export default MembersHeader;