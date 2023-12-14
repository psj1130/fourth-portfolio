import React from 'react'
import '../activitys/otheractivities.css';
import { Link } from 'react-router-dom'

function Otheractivities() {

  return(
    <div className="otheractivities-body">
      <div className="otheractivities-container">
        <div className="otheractivities-con-text">
          <h1 className='con1-title-text'>이디야 가맹점주 자녀 캠퍼스 희망기금</h1>
            <div className="info-text">
              <p>더불어 함께 사는 이웃에게 사랑을 나눠드립니다.</p>
            </div>
            <div className="otheractivities-btn">
              <div className="otheractivities-btn-con">
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
        <div className="otheractivities-detail-container">
          <div className="otheractivities-guide-link">
            <span>HOME</span>
            <span>사회공헌활동</span>
            기타 활동
          </div>
            <div className="otheractivities-detail-container">
              <div className='mate-detail-title-con'>
                <h2 className='mate-detail-title'>그 외 사회공헌활동</h2>
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

export default Otheractivities;