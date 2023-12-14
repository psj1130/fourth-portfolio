import React from 'react'
import '../activitys/accompany.css';
import { Link } from 'react-router-dom'

function Accompany() {

  return(
    <div className="accompany-body">
      <div className="accompany-container">
        <div className="accompany-con-text">
          <h1 className='con1-title-text'>이디야 가맹점주 자녀 캠퍼스 희망기금</h1>
            <div className="info-text">
              <p>나눔의 기쁨을 행동으로</p>
              <p>이디야커피가 먼저 실천합니다.</p>
            </div>
            <div className="accompany-btn">
              <div className="accompany-btn-con">
              <span className='btn-con-lists'>
                  <a href='/brandnews/activityrouters/activitys/activity'>메이트 희망기금</a>
                </span>
                <span className='btn-con-lists'>
                  <a href="/brandnews/activityrouters/activitys/campus">캠퍼스 희망기금</a>
                </span>
                <span className='btn-con-lists'>
                  <a href='/brandnews/activityrouters/activitys/hygiene'>식수위생 캠페인</a>
                </span>
                <span className='btn-con-lists'>
                  <a href='/brandnews/activityrouters/activitys/accompany'>이디야의 동행</a>
                </span>
                <span className='btn-con-lists'>
                  <a href='/brandnews/activityrouters/activitys/otheractivities'>기타 활동</a>
                </span>
              </div>
            </div>
        </div>
        <div className="accompany-detail-container">
          <div className="accompany-guide-link">
            <span>HOME</span>
            <span>사회공헌활동</span>
            이디야의 동행
          </div>
            <div className="mate-detail-container">
              <div className='mate-detail-title-con'>
                <h2 className='mate-detail-title'>이디야의 동행</h2>
                <p>이디야커피는 따뜻한 마음과 기쁨을 나누기 위해 먼저 실천합니다.</p>
              </div>
            </div>
              <ul className="mate-detail-gridboxs">
                <li>
                  <div className='mate-detail-gridboximg'>
                    <Link>
                      <img src="/images/brandnews/eventimgtest.jpg"/>
                    </Link>
                  </div>
                  <div className='mate-detail-girdboxtext'>
                    <Link>
                      <h5>2023 이디야 메이트 희망기금 전달</h5>
                      <p>어쩌고 저쩌고 데이터 내용어쩌고 저쩌고 데이터 내용어쩌고 저쩌고 데이터 내용어쩌고 저쩌고 데이터 내용</p>
                    </Link>
                  </div>
                  <div className='mate-detail-gridbtncon'>
                    <div className='mate-detail-gridbtn'>
                      <Link>
                        <p>더 보기</p>
                      </Link>
                    </div>
                  </div>
                </li>
                <li>
                  <div className='mate-detail-gridboximg'>
                    <Link>
                      <img src="/images/brandnews/eventimgtest.jpg"/>
                    </Link>
                  </div>
                  <div className='mate-detail-girdboxtext'>
                    <Link>
                      <h5>2023 이디야 메이트 희망기금 전달</h5>
                      <p>어쩌고 저쩌고 데이터 내용어쩌고 저쩌고 데이터 내용어쩌고 저쩌고 데이터 내용어쩌고 저쩌고 데이터 내용</p>
                    </Link>
                  </div>
                  <div className='mate-detail-gridbtncon'>
                    <div className='mate-detail-gridbtn'>
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