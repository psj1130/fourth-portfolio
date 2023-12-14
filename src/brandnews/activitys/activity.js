import React from 'react'
import { Link } from 'react-router-dom'
import './activity.css'

function Activity() {

  return(
    <div className="activity-container">
      <div className="activity-detail-container">
        <div className="activity-guide-link">
          <span>HOME</span>
          <span>사회공헌 활동</span>
          메이트 희망기금
        </div>
        <div className="activity-detail-title-container">
          <h2>이디야 메이트 희망기금 사업</h2>
          <p>이디야커피는 대한민국 청년의 미래를 후원합니다.</p>
        </div>
        <div className="activity-box-container">
          {/* 추후 맵으로 뿌리면될듯 밑에는 틀만 맞는지 확인용 하드코딩 */}
          <ul className="activity-box-list-con">
            <li>
              <Link><img src="/images/brandnews/testimgs.jpg"/></Link>
                <div className='activity-text-box'>
                  <Link>
                    <h5>2023 이디야 메이트 희망기금 전달</h5>
                    <p>&nbsp; ▶ 메이트 장학금 확대... 수혜자 150명에게 100만원씩 전달▶ 
                      2023년부터 11년간 메이트 총 4,48...</p>
                  </Link>
                </div>
              <Link>
                <div className="activity-btn-box">
                  <p>더보기</p>
                </div>
              </Link>
            </li>
            <li>
              <Link><img src="/images/brandnews/testimgs.jpg"/></Link>
                <div className='activity-text-box'>
                  <Link>
                    <h5>2023 이디야 메이트 희망기금 전달</h5>
                    <p>&nbsp; ▶ 메이트 장학금 확대... 수혜자 150명에게 100만원씩 전달▶ 
                      2023년부터 11년간 메이트 총 4,48...</p>
                  </Link>
                </div>
              <Link>
                <div className="activity-btn-box">
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

export default Activity;
