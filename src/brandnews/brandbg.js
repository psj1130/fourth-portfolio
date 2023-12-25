import React from 'react'
import './brandbg.css'


function Brandbg() {
  return(
    <div className="brandbg-body">
      <div className="brandbg-container">
        <div className="brandbg-con-text">
          <h1 className='con1-title-text'>공지사항</h1>
            <div className="brandbg-info-text">
              <p>이디야는 국내 브랜드의 자부심을 지키며</p>
              <p>대한민국 커피 문화를 이끌어 나갑니다.</p>
            </div>
            <div className="brandbg-btn">
              <div className="brandbg-btn-con">
                <span className='brandbg-btn-con-lists'>
                  <a href='/brandnews/notice'>공지사항</a>
                </span>
                <span className='brandbg-btn-con-lists'>
                  <a href="/brandnews/event">이벤트 안내</a>
                </span>
                <span className='brandbg-btn-con-lists'>
                  <a href='/brandnews/activitys/activity'>사회공헌 활동</a>
                </span>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Brandbg;