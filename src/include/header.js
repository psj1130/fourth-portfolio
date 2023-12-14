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
              <li><Link to='/members/login'>로그인</Link></li>
              <li><Link to='/'>매장찾기</Link></li>
              <li><Link to='/'>고객의 소리</Link></li>
              <li><Link to='/'>이디야 스토어</Link></li>
              <li><Link to='/administarator'>관리자 페이지</Link></li>
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
          <div id="header-logo">
            <Link to='/'><img src="images/logo/top_logo.gif"></img></Link>
          </div>
          <nav id="header-second-menu">
            <ul className="header-second-menu-fromInsideOut">
              <li className="nav_menu">
                <a href="#none" className="nav_a"><span>원두</span></a>
                <ul>
                  <li><a href="#none">이디야 블렌드</a></li>
                  <li><a href="#none">품질</a></li>
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
                <a href="#none" className="nav_a"><span>유통제품</span></a>
                <ul>
                  <li><a href="#none">스틱커피(비니스트)</a></li>
                  <li><a href="#none">커피믹스</a></li>
                  <li><a href="#none">캡슐커피</a></li>
                  <li><a href="#none">컵커피</a></li>
                </ul>
              </li>
              <li className="nav_menu">
                <a href="#none" className="nav_a"><span>이디야멤버스</span></a>
                <ul>
                  <li><a href="#none">멤버십안내</a></li>
                  <li><a href="#none">서비스안내</a></li>
                </ul>
              </li>
              <li className="nav_menu">
                <a href="#none" className="nav_a"><span>상품권·제휴카드</span></a>
                <ul>
                  <li><a href="#none">제휴카드(하나·신한)</a></li>
                  <li><a href="#none">기프트카드</a></li>
                  <li><a href="#none">모바일상품권</a></li>
                  <li><a href="#none">단체·기업 구매</a></li>
                </ul>
              </li>
              <li className="nav_menu">
                <a href="#none" className="nav_a"><span>브랜드 소식</span></a>
                <ul>
                  <li><a href="#none">공지사항</a></li>
                  <li><a href="#none">이벤트 안내</a></li>
                  <li><a href="#none">사회공헌 활동</a></li>
                </ul>
              </li>
              <li className="nav_menu">
                <a href="#none" className="nav_a"><span>고객 지원</span></a>
                <ul>
                  <li><a href="#none">고객의 소리</a></li>
                  <li><a href="#none">소비자중심경영(OCM)</a></li>
                  <li><a href="#none">제휴·제안</a></li>
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