import React from "react";
import './header.css';
import { Link } from "react-router-dom";

function Header() {
  return(
    <header>
      <div id="header-wrapper">
        <div id="header-topmenu-container">
          <div id="header-topmenu">
            <ul id="header-topmenu-navigation">
              <li><Link to='/'>로그인</Link></li>
              <li><Link to='/'>매장찾기</Link></li>
              <li><Link to='/'>고객의 소리</Link></li>
              <li><Link to='/'>이디야 스토어</Link></li>
              <li><Link to='/'>모바일상품권 스토어</Link></li>
            </ul>
            <div id="header-topmenu-sns">
              <a href='#none'><img src="images/top_sns/top_sns01.png" alt="1"/></a>
              <a href='#none'><img src="images/top_sns/top_sns02.png" alt="1"/></a>
              <a href='#none'><img src="images/top_sns/top_sns03.png" alt="1"/></a>
              <a href='#none'><img src="images/top_sns/top_sns04.png" alt="1"/></a>
            </div>
            <div id="header-topmenu-searchbox">
              <form>
                <input id="searchbox-input" type="text" ></input>
                <div id="header-topmenu-searchbox-ok">
                  <i className="xi-search"></i>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div id="header-container">
          <div id="header-logo">
            <Link to='/'><img src="images/logo/top_logo.gif"></img></Link>
          </div>
          <nav id="header-second-menu">
            <ul id="header-second-menu-fromInsideOut">
              <li><a href="#none"><span>원두</span></a></li>
              <li><a href="#none"><span>메뉴</span></a></li>
              <li><a href="#none"><span>유통제품</span></a></li>
              <li><a href="#none"><span>이디야멤버스</span></a></li>
              <li><a href="#none"><span>상품권·제휴카드</span></a></li>
              <li><a href="#none"><span>브랜드 소식</span></a></li>
              <li><a href="#none"><span>고객 지원</span></a></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header;