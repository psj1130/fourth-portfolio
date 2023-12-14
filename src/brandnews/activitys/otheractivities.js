import React from 'react'
import { Link } from 'react-router-dom'
import './otheractivities.css'

function Otheractivities() {

  return(
    <div className="otheractivities-container">
      <div className="otheractivities-detail-container">
        <div className="otheractivities-guide-link">
          <span>HOME</span>
          <span>사회공헌 활동</span>
          기타 활동
        </div>
        <div className="otheractivities-detail-title-container">
          <h2>그 외 사회공헌활동</h2>
        </div>
        <div className="otheractivities-box-container">
          {/* 추후 맵으로 뿌리면될듯 밑에는 틀만 맞는지 확인용 하드코딩 */}
          <ul className="otheractivities-box-list-con">
            <li>
              <Link><img src="/images/brandnews/testimgs.jpg"/></Link>
                <div className='otheractivities-text-box'>
                  <Link>
                    <h5>2023 이디야 메이트 희망기금 전달</h5>
                    <p>&nbsp; ▶ 메이트 장학금 확대... 수혜자 150명에게 100만원씩 전달▶ 
                      2023년부터 11년간 메이트 총 4,48...</p>
                  </Link>
                </div>
              <Link>
                <div className="otheractivities-btn-box">
                  <p>더보기</p>
                </div>
              </Link>
            </li>
            <li>
              <Link><img src="/images/brandnews/testimgs.jpg"/></Link>
                <div className='otheractivities-text-box'>
                  <Link>
                    <h5>2023 이디야 메이트 희망기금 전달</h5>
                    <p>&nbsp; ▶ 메이트 장학금 확대... 수혜자 150명에게 100만원씩 전달▶ 
                      2023년부터 11년간 메이트 총 4,48...</p>
                  </Link>
                </div>
              <Link>
                <div className="otheractivities-btn-box">
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

export default Otheractivities;
