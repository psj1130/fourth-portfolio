import React, { useState } from 'react';
import './event.css';
import { Link } from 'react-router-dom'

function Event() {
  const [content, setContent] = useState();
  
  const onchanglist = (e) => {
    setContent(e.currentTarget.value);
  }

  const options = [
    {key:1, value:"전체"},
    {key:2, value:"내용"},
  ];

  return(
    <div id='event-body'>
      <div id="event-container">
        <div id="event-con-text">
          <h1 id='event-con1-title-text'>공지사항</h1>
            <div id="event-info-text">
              <p>이디야는 국내 브랜드의 자부심을 지키며</p>
              <p>대한민국 커피 문화를 이끌어 나갑니다.</p>
            </div>
            <div id="event-btn">
              <div id="event-btn-con">
                <span className='event-btn-con-lists'>
                  <a href='/brandnews/'>공지사항</a>
                </span>
                <span className='event-btn-con-lists'>
                  <a href="/brandnews/event">이벤트 안내</a>
                </span>
                <span className='event-btn-con-lists'>
                  <a href='/brandnews/activitys/activity'>사회공헌 활동</a>
                </span>
              </div>
            </div>
        </div>
          <div id="event-main-container">
            <div id="check-guide-link">
              <span>HOME</span>
              <span>이디야 소식</span>
              이벤트
            </div>
            <div id="event-search-container">
                <div id="event-drowdown-box">
                  <select id='event-drowdown-list' onChange={onchanglist} value={content}>
                    {options.map((item)=>(
                      <option key={item.key} value={item.key}>{item.value}</option>
                    ))}
                  </select>
                </div>
                <div id="event-search-box">
                  <input 
                  id='event-search-input'
                  type="text" />
                    <button id='event-search-result'>
                      <img src="/images/cardlist/icon_search.gif"/>
                    </button>
                </div>
              </div>
              {/* db데이터 받고 작성하는부분 */}
              <ul id="event-detail-container">
                <li>
                  <div id='event-detail-imgcon'>
                    <Link>
                      <img src="/images/brandnews/eventimgtest.jpg" alt="나중에 데이터로 삽입" />
                    </Link>
                  </div>
                  <dl id='event-detail-titlecon'>
                    <dt>
                      <Link>이순신 장군의 마지막 전투를 보고싶다면?</Link>
                    </dt>
                    <dd>
                      기간: {/*기간 데이터 받아와야함*/}
                    </dd>
                  </dl>
                  <div id='event-detail-progress'>
                    <span id='event-progress-check'>
                      진행여부{/*데이터로 들어가야하나?*/}
                    </span>
                  </div>
                </li>
              </ul>
          </div>
      </div>
    </div>
  );
}

export default Event;