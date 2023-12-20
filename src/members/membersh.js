import React from "react";
import './membersh.css'
import { Link } from "react-router-dom";

function MembersHeader() {

  return(
    <header id="members-header">
      <div className="members-header-top">
        <div className="members-header-top-nav">
          <ul>
            <li><Link to='/members/login'>로그인</Link></li>
            <li><Link to='/searchstore'>매장찾기</Link></li>
            <li><Link to='/'>APP 다운로드</Link></li>
            <li><Link to='/'>이디야 스토어</Link></li>
          </ul>
        </div>
      </div>
      <div className="members-header-bottom">
        <div className="members-top-logo">
          <h1 className="members-logo">
            <a href="/members">
              <span className="blind">EDIYA</span>
            </a>
          </h1>
        </div>
        <div className="members-header-bottom-nav">
          <a href="/">멤버십 안내</a>
          <a href="/">서비스 안내</a>
        </div>
      </div>
    </header>
  )
}

export default MembersHeader;