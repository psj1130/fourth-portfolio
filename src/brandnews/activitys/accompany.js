import React from 'react'
import '../activitys/accompany.css';
import { Link } from 'react-router-dom'

function Accompany() {

  return(
    <div id="accompany-body">
      <div id="accompany-container">
        <div id="accompany-con-text">
          <h1 id='con1-title-text'>이디야 가맹점주 자녀 캠퍼스 희망기금</h1>
            <div id="info-text">
              <p>나눔의 기쁨을 행동으로</p>
              <p>이디야커피가 먼저 실천합니다.</p>
            </div>
            <div id="accompany-btn">
              <div id="accompany-btn-con">
                <span className='btn-con-lists'>
                  <a href='/brandnews/activitys/activity'>메이트 희망기금</a>
                </span>
                <span className='btn-con-lists'>
                  <a href="/brandnews/activitys/campus">캠퍼스 희망기금</a>
                </span>
                <span className='btn-con-lists'>
                  <a href='/brandnews/activitys/hygiene'>식수위생 캠페인</a>
                </span>
                <span className='btn-con-lists'>
                  <a href='/brandnews/activitys/accompany'>이디야의 동행</a>
                </span>
                <span className='btn-con-lists'>
                  <a href='/brandnews/activitys/otheractivities'>기타 활동</a>
                </span>
              </div>
            </div>
        </div>
        <div id="accompany-detail-container">
          <div id="accompany-guide-link">
            <span>HOME</span>
            <span>사회공헌활동</span>
            이디야의 동행
          </div>
            <div id="mate-detail-container">
              <div id='mate-detail-title-con'>
                <h2 id='mate-detail-title'>이디야의 동행</h2>
                <p>이디야커피는 따뜻한 마음과 기쁨을 나누기 위해 먼저 실천합니다.</p>
              </div>
            </div>
              <ul id="mate-detail-gridboxs">
                <li>
                  <div id='mate-detail-gridboximg'>
                    <Link>
                      <img src="/images/brandnews/eventimgtest.jpg"/>
                    </Link>
                  </div>
                  <div id='mate-detail-girdboxtext'>
                    <Link>
                      <h5>2023 이디야 메이트 희망기금 전달</h5>
                      <p>어쩌고 저쩌고 데이터 내용어쩌고 저쩌고 데이터 내용어쩌고 저쩌고 데이터 내용어쩌고 저쩌고 데이터 내용</p>
                    </Link>
                  </div>
                  <div id='mate-detail-gridbtncon'>
                    <div id='mate-detail-gridbtn'>
                      <Link>
                        <p>더 보기</p>
                      </Link>
                    </div>
                  </div>
                </li>
                <li>
                  <div id='mate-detail-gridboximg'>
                    <Link>
                      <img src="/images/brandnews/eventimgtest.jpg"/>
                    </Link>
                  </div>
                  <div id='mate-detail-girdboxtext'>
                    <Link>
                      <h5>2023 이디야 메이트 희망기금 전달</h5>
                      <p>어쩌고 저쩌고 데이터 내용어쩌고 저쩌고 데이터 내용어쩌고 저쩌고 데이터 내용어쩌고 저쩌고 데이터 내용</p>
                    </Link>
                  </div>
                  <div id='mate-detail-gridbtncon'>
                    <div id='mate-detail-gridbtn'>
                      <Link>
                        <p>더 보기</p>
                      </Link>
                    </div>
                  </div>
                </li>
              </ul>
            {/* <h1>맵으로 풀어야함</h1> */}
        </div>
      </div>
    </div>
  );
}

export default Accompany;