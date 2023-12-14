import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import './brandnews.css'

function Brandnews() {

  const [content, setContent] = useState();
  
  const onchanglist = (e) => {
    setContent(e.currentTarget.value);
  }

  const options = [
    {key:1, value:"전체"},
    {key:2, value:"내용"},
  ];

  return(
    <div id='brandnews-body'>
      <div id="brandnews-container">
        <div id="brandnews-con-text">
          <h1 id='con1-title-text'>공지사항</h1>
            <div id="brandnews-info-text">
              <p>이디야는 국내 브랜드의 자부심을 지키며</p>
              <p>대한민국 커피 문화를 이끌어 나갑니다.</p>
            </div>
            <div id="brandnews-btn">
              <div id="brandnews-btn-con">
                <span className='brandnews-btn-con-lists'>
                  <a href='/brandnews/'>공지사항</a>
                </span>
                <span className='brandnews-btn-con-lists'>
                  <a href="/brandnews/event">이벤트 안내</a>
                </span>
                <span className='brandnews-btn-con-lists'>
                  <a href='/brandnews/activitys/activity'>사회공헌 활동</a>
                </span>
              </div>
            </div>
        </div>
          <div id="brandnews-main-container">
            <div id="check-guide-link">
              <span>HOME</span>
              <span>이디야 소식</span>
              공지사항
            </div>
            <div id="brandnews-search-container">
                <div id="brandnews-drowdown-box">
                  <select id='brandnews-drowdown-list' onChange={onchanglist} value={content}>
                    {options.map((item)=>(
                      <option key={item.key} value={item.key}>{item.value}</option>
                    ))}
                  </select>
                </div>
                <div id="brandnews-search-box">
                  <input 
                  id='brandnews-serch-input'
                  type="text" />
                    <button id='brandnews-serch-result'>
                      <img src="/images/cardlist/icon_search.gif"/>
                    </button>
                </div>
              </div>
              {/* db데이터 받고 작성하는부분 */}
              <h1>맵으로 데이터 뿌릴건데 조건문 써서 뿌림</h1>
              <ul id='brandnews-detail-container'>
                <li>
                  <div id='brandnews-detail-list-iconbox'>
                    <img src="/images/brandnews/notice_icon.gif" alt="" />
                  </div>
                  <div id='list-detail-box'>
                    <h5>
                      <Link>
                        게시판 제목 데이터 3차 패키지 서치
                      </Link>
                    </h5>
                  </div>
                  <div id='list-detail-date'>
                      <p>날짜 데이터</p>
                  </div>
                </li>

              </ul>
          </div>
      </div>
    </div>
  );
}

export default Brandnews;
