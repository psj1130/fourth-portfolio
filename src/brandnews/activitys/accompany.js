import React from 'react'
import { Link } from 'react-router-dom'
import './accompany.css'

function accompany() {

  return(
    <div className="accompany-container">
      <div className="accompany-detail-container">
        <div className="accompany-guide-link">
          <span>HOME</span>
          <span>사회공헌 활동</span>
          이디야의 동행
        </div>
        <div className="accompany-detail-title-container">
          <h2>이디야의 동행</h2>
          <p>이디야커피는 따뜻한 마음과 기쁨을 나누기 위해 먼저 실천합니다.</p>
        </div>
        <div className="accompany-box-container">
          {/* 추후 맵으로 뿌리면될듯 밑에는 틀만 맞는지 확인용 하드코딩 */}
          <ul className="accompany-box-list-con">
            <li>
              <Link><img src="/images/brandnews/testimgs.jpg"/></Link>
                <div className='accompany-text-box'>
                  <Link>
                    <h5>2023 이디야 메이트 희망기금 전달</h5>
                    <p>&nbsp; ▶ 메이트 장학금 확대... 수혜자 150명에게 100만원씩 전달▶ 
                      2023년부터 11년간 메이트 총 4,48...</p>
                  </Link>
                </div>
              <Link>
                <div className="accompany-btn-box">
                  <p>더보기</p>
                </div>
              </Link>
            </li>
            <li>
              <Link><img src="/images/brandnews/testimgs.jpg"/></Link>
                <div className='accompany-text-box'>
                  <Link>
                    <h5>2023 이디야 메이트 희망기금 전달</h5>
                    <p>&nbsp; ▶ 메이트 장학금 확대... 수혜자 150명에게 100만원씩 전달▶ 
                      2023년부터 11년간 메이트 총 4,48...</p>
                  </Link>
                </div>
              <Link>
                <div className="accompany-btn-box">
                  <p>더보기</p>
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default accompany;
