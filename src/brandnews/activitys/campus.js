import React from 'react'
import '../activitys/campus.css';
import { Link } from 'react-router-dom'

function Campus() {

  return(
    <div className="campus-body">
      <div className="campus-container">
        <div className="campus-con-text">
          <h1 className='con1-title-text'>이디야 가맹점주 자녀 캠퍼스 희망기금</h1>
            <div className="info-text">
              <p>오랜 시간 아껴주신 여러분의 성원에 보답하기 위해</p>
              <p>이디야커피가 대한민국과 이디야 가족 모두를 응원합니다.</p>
            </div>
            <div className="campus-btn">
              <div className="campus-btn-con">
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
        <div className="campus-detail-container">
          <div className="campus-guide-link">
            <span>HOME</span>
            <span>사회공헌활동</span>
            캠퍼스 희망기금
          </div>
            <div className="mate-detail-container">
              <div className='mate-detail-title-con'>
                <h2 className='mate-detail-title'>이디야 가맹점주 자녀 캠퍼스 희망기금</h2>
                <p>가맹점주님과 자녀들의 미래와 희망을 함께 그려나가고자 합니다.</p>
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

export default Campus;