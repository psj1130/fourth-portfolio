import React from 'react'
import { Link } from 'react-router-dom'
import './hygiene.css'

function Hygiene() {

  return(
    <div className="hygiene-container">
      <div className="hygiene-detail-container">
        <div className="hygiene-guide-link">
          <span>HOME</span>
          <span>사회공헌 활동</span>
          식수위생 캠페인
        </div>
        <div className="hygiene-detail-title-container">
          <h2>식수위생 캠페인</h2>
          <p>이디야커피는 식수위생 캠페인을 통해 식수부족국가를 위한 
            정수시설 설치 및 인식개선 사업을 후원합니다.</p>
        </div>
        <div className="hygiene-box-container">
          {/* 추후 맵으로 뿌리면될듯 밑에는 틀만 맞는지 확인용 하드코딩 */}
          <ul className="hygiene-box-list-con">
            <li>
              <Link><img src="/images/brandnews/testimgs.jpg"/></Link>
                <div className='hygiene-text-box'>
                  <Link>
                    <h5>2023 이디야 메이트 희망기금 전달</h5>
                    <p>&nbsp; ▶ 메이트 장학금 확대... 수혜자 150명에게 100만원씩 전달▶ 
                      2023년부터 11년간 메이트 총 4,48...</p>
                  </Link>
                </div>
              <Link>
                <div className="hygiene-btn-box">
                  <p>더보기</p>
                </div>
              </Link>
            </li>
            <li>
              <Link><img src="/images/brandnews/testimgs.jpg"/></Link>
                <div className='hygiene-text-box'>
                  <Link>
                    <h5>2023 이디야 메이트 희망기금 전달</h5>
                    <p>&nbsp; ▶ 메이트 장학금 확대... 수혜자 150명에게 100만원씩 전달▶ 
                      2023년부터 11년간 메이트 총 4,48...</p>
                  </Link>
                </div>
              <Link>
                <div className="hygiene-btn-box">
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

export default Hygiene;
