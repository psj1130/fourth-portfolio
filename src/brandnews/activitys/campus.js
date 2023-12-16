import React from 'react'
import { Link } from 'react-router-dom'
import './campus.css'

function Campus() {

  return(
    <div className="campus-container">
      <div className="campus-detail-container">
        <div className="campus-guide-link">
          <span>HOME</span>
          <span>사회공헌 활동</span>
          캠퍼스 희망기금
        </div>
        <div className="campus-detail-title-container">
          <h2>이디야 가맹점주 자녀 캠퍼스 희망기금</h2>
          <p>가맹점주님과 자녀들의 미래와 희망을 함께 그려나가고자 합니다.</p>
        </div>
        <div className="campus-box-container">
          {/* 추후 맵으로 뿌리면될듯 밑에는 틀만 맞는지 확인용 하드코딩 */}
          <ul className="campus-box-list-con">
            <li>
              <Link><img src="/images/brandnews/testimgs.jpg"/></Link>
                <div className='campus-text-box'>
                  <Link>
                    <h5>2023 이디야 메이트 희망기금 전달</h5>
                    <p>&nbsp; ▶ 메이트 장학금 확대... 수혜자 150명에게 100만원씩 전달▶ 
                      2023년부터 11년간 메이트 총 4,48...</p>
                  </Link>
                </div>
              <Link>
                <div className="campus-btn-box">
                  <p>더보기</p>
                </div>
              </Link>
            </li>
            <li>
              <Link><img src="/images/brandnews/testimgs.jpg"/></Link>
                <div className='campus-text-box'>
                  <Link>
                    <h5>2023 이디야 메이트 희망기금 전달</h5>
                    <p>&nbsp; ▶ 메이트 장학금 확대... 수혜자 150명에게 100만원씩 전달▶ 
                      2023년부터 11년간 메이트 총 4,48...</p>
                  </Link>
                </div>
              <Link>
                <div className="campus-btn-box">
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

export default Campus;
