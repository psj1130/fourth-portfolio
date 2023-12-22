import React, {useState, useEffect, useRef} from "react";
import './header.css';
import { Link } from "react-router-dom";
import { getCookie, delCookie } from "../customer/cookies";

function Header() {
  // const [scrollY, setScrollY] = useState(0);
  const ex = useRef(document.getElementById('header-container'));
  const cookie = getCookie('loginCookie');
  let context = null;

  if(cookie) {
    context = <p onClick={() => {
      delCookie('loginCookie');
      document.location.reload(true);
    }}>로그아웃</p>
  } else if(!cookie) {
    context = <a href='/members/login' onClick={() => {
      window.sessionStorage.setItem('BeforePage', window.location.pathname);
    }}>로그인</a>
  }

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
              <li>{context}</li>
              <li><Link to='/searchstore'>매장찾기</Link></li>
              <li><Link to='/cs'>고객의 소리</Link></li>
              <li><Link to='/'>이디야 스토어</Link></li>
              <li><Link to='/administrator/login'>관리자 페이지</Link></li>
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
                <Link to="/beans" className="nav_a"><span>원두</span></Link>
                <ul>
                  <li><Link to="/beans">이디야 블렌드</Link></li>
                  <li><Link to="/quality">품질</Link></li>
                </ul>
              </li>
              <li className="nav_menu">
                <Link to="/menu_main" className="nav_a"><span>메뉴</span></Link>
                <ul>
                  <li><Link to="/product/drink">음료</Link></li>
                  <li><Link to="/product/food">푸드</Link></li>
                  <li><Link to="/product/md">MD</Link></li>
                </ul>
              </li>
              <li className="nav_menu">
                <a href="/dp" className="nav_a"><span>유통제품</span></a>
                <ul>
                  <li><Link to="/dp">스틱커피(비니스트)</Link></li>
                  <li><Link to="/dp/coffeemix">커피믹스</Link></li>
                  <li><Link to="/dp/capsule">캡슐커피</Link></li>
                  <li><Link to="/dp/cup">컵커피</Link></li>
                </ul>
              </li>
              <li className="nav_menu">
                <Link to="/members" className="nav_a"><span>이디야멤버스</span></Link>
                <ul>
                  <li><Link to="/members">멤버십안내</Link></li>
                  <li><Link to="/members">서비스안내</Link></li>
                </ul>
              </li>
              <li className="nav_menu">
                <Link to="/card/affiliatecard" className="nav_a"><span>상품권·제휴카드</span></Link>
                <ul>
                  <li><Link to="/card/affiliatecard">제휴카드(하나·신한)</Link></li>
                  <li><Link to="/card/giftcardrouters/">기프트카드</Link></li>
                  <li><a href="https://brand.naver.com/ediyagift">모바일상품권</a></li>
                  <li><Link to="/card/giftbuy">단체·기업 구매</Link></li>
                </ul>
              </li>
              <li className="nav_menu">
                <Link to="/brandnews/" className="nav_a"><span>브랜드 소식</span></Link>
                <ul>
                  <li><Link to="/brandnews/">공지사항</Link></li>
                  <li><Link to="/brandnews/event">이벤트 안내</Link></li>
                  <li><Link to="/brandnews/activity">사회공헌 활동</Link></li>
                </ul>
              </li>
              <li className="nav_menu">
                <Link to="/cs" className="nav_a"><span>고객 지원</span></Link>
                <ul>
                  <li><Link to="/cs">고객의 소리</Link></li>
                  <li><Link to="/cs/ccm">소비자중심경영(OCM)</Link></li>
                  <li><Link to="/cs/partnership">제휴·제안</Link></li>
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