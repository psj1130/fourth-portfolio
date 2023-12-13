import React from 'react'
import '../activitys/activity.css';
import { Link } from 'react-router-dom'

function Activity() {

  return(
    <div id="activity-body">
      <div id="activity-container">
        <div id="activity-con-text">
          <h1 id='con1-title-text'>이디야커피와 함께 하는 향기로운 동행</h1>
            <div id="info-text">
              <p>오랜 시간 아껴주신 여러분의 성원에 보답하기 위해</p>
              <p>이디야커피가 대한민국과 이디야 가족 모두를 응원합니다.</p>
            </div>
            <div id="activity-btn">
              <div id="activity-btn-con">
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
        <div id="activity-detail-container">
          <div id="activity-guide-link">
            <span>HOME</span>
            <span>사회공헌활동</span>
            메이트 희망기금
          </div>
            <div id="mate-detail-container">
              <div id='mate-detail-title-con'>
                <h2 id='mate-detail-title'>이디야 메이트 희망기금 사업</h2>
                <p>이디야커피는 대한민국 청년의 미래를 후원합니다.</p>
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

export default Activity;