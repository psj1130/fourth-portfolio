import React, {useState, useEffect, useRef} from "react";
import './header.css';
import { Link } from "react-router-dom";

function Header() {
  // const [scrollY, setScrollY] = useState(0);
  const ex = useRef(document.getElementById('header-container'));

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    // setScrollY(scrollPosition)
    if(scrollPosition > 0) {
      ex.current.style.setProperty('top', '-50px');
    } else if(scrollPosition === 0) {
      ex.current.style.setProperty('top', '0px');
    }
  };

  useEffect( () => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, []);

  return(
    <header>
      <div id="header-wrapper">
        <div id="header-container" ref={ex}>
        <div id="header-topmenu-container">
          <div id="header-topmenu">
            <ul id="header-topmenu-navigation">
              <li><a href='/members/login' onClick={() => {
                window.sessionStorage.setItem('BeforePage', Location);
              }}>로그인</a></li>
              <li><a href='/searchstore'>매장찾기</a></li>
              <li><a href='/cs'>고객의 소리</a></li>
              <li><a href='/'>이디야 스토어</a></li>
              <li><a href='/administrator'>관리자 페이지</a></li>
            </ul>
            <div id="header-topmenu-sns">
              <a href='#none'><img src={process.env.PUBLIC_URL + "/images/top_sns/top_sns01.png"} alt="1"/></a>
              <a href='#none'><img src={process.env.PUBLIC_URL + "/images/top_sns/top_sns02.png"} alt="1"/></a>
              <a href='#none'><img src={process.env.PUBLIC_URL + "/images/top_sns/top_sns03.png"} alt="1"/></a>
              <a href='#none'><img src={process.env.PUBLIC_URL + "/images/top_sns/top_sns04.png"} alt="1"/></a>
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
          <div id="header-logo">
            <a href="/"><img src={process.env.PUBLIC_URL + '/images/logo/top_logo.gif'}></img></a>
          </div>
          <nav id="header-second-menu">
            <ul className="header-second-menu-fromInsideOut">
              <li className="nav_menu">
                <a href="/beans" className="nav_a"><span>원두</span></a>
                <ul>
                  <li><a href="/beans">이디야 블렌드</a></li>
                  <li><a href="/quality">품질</a></li>
                </ul>
              </li>
              <li className="nav_menu">
                <a href="#none" className="nav_a"><span>메뉴</span></a>
                <ul>
                  <li><a href="#none">음료</a></li>
                  <li><a href="#none">푸드</a></li>
                  <li><a href="#none">MD</a></li>
                </ul>
              </li>
              <li className="nav_menu">
                <a href="/dp" className="nav_a"><span>유통제품</span></a>
                <ul>
                  <li><a href="/dp">스틱커피(비니스트)</a></li>
                  <li><a href="/dp/coffeemix">커피믹스</a></li>
                  <li><a href="/dp/capsule">캡슐커피</a></li>
                  <li><a href="/dp/cup">컵커피</a></li>
                </ul>
              </li>
              <li className="nav_menu">
                <a href="/members" className="nav_a"><span>이디야멤버스</span></a>
                <ul>
                  <li><a href="#none">멤버십안내</a></li>
                  <li><a href="#none">서비스안내</a></li>
                </ul>
              </li>
              <li className="nav_menu">
                <a href="/card/affiliatecard" className="nav_a"><span>상품권·제휴카드</span></a>
                <ul>
                  <li><a href="#none">제휴카드(하나·신한)</a></li>
                  <li><a href="#none">기프트카드</a></li>
                  <li><a href="#none">모바일상품권</a></li>
                  <li><a href="#none">단체·기업 구매</a></li>
                </ul>
              </li>
              <li className="nav_menu">
                <a href="/brandnews" className="nav_a"><span>브랜드 소식</span></a>
                <ul>
                  <li><a href="/brandnews">공지사항</a></li>
                  <li><a href="/brandnews/event">이벤트 안내</a></li>
                  <li><a href="/brandnews/activity">사회공헌 활동</a></li>
                </ul>
              </li>
              <li className="nav_menu">
                <a href="/cs" className="nav_a"><span>고객 지원</span></a>
                <ul>
                  <li><a href="/cs">고객의 소리</a></li>
                  <li><a href="/cs/ccm">소비자중심경영(OCM)</a></li>
                  <li><a href="/cs/partnership">제휴·제안</a></li>
                </ul>
              </li>
            </ul>
          </nav>
        </div>
        <div id="header-behind-container">
        </div>
      </div>
    </header>
  )
}

export default Header;