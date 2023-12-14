import React from 'react'
import '../activitys/hygiene.css';
import { Link } from 'react-router-dom'

function Hygiene() {

  return(
    <div id="hygiene-body">
      <div id="hygiene-container">
        <div id="hygiene-con-text">
          <h1 id='con1-title-text'>이디야커피와 함께 하는 향기로운 동행</h1>
            <div id="info-text">
              <p>세계 곳곳 더 밝은 내일을 위해</p>
              <p>맑은 물, 그 이상의 가치를 나눕니다.</p>
            </div>
            <div id="hygiene-btn">
              <div id="hygiene-btn-con">
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
        <div id="hygiene-detail-container">
          <div id="hygiene-guide-link">
            <span>HOME</span>
            <span>사회공헌활동</span>
            식수위생 캠페인
          </div>
            <div id="mate-detail-container">
              <div id='mate-detail-title-con'>
                <h2 id='mate-detail-title'>식수위생 캠페인</h2>
                <p>이디야커피는 식수위생 캠페인을 통해 식수부족국가를 위한 정수시설 설치 및 인식개선 사업을 후원합니다.</p>
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

export default Hygiene;