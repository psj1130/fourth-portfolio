import React from 'react'
import './giftbuy.css'

function Giftbuy() {
  return(
    <div id='giftbuy-body'>
      <div id="giftbuy-container">
          <div id="giftbuy-con-text">
            <h1 id='giftbuy-con-title-text'>이디야 기프트카드</h1>
              <div id="giftbuy-info-text">
                <p>고객 이벤트, 직원 복지 등 다양한 용도로 선물해보세요.</p>
                <p>맛있는 커피에 한 번, 당신의 섬세함에 두 번 놀라게 됩니다.</p>
              </div>
              <div id="giftbuy-btn">
                <div id="giftbuy-btn-con">
                  <span className='giftbuy-btn-con-lists'>
                    <a href='/card/giftcard/'>기프트카드</a>
                  </span>
                  <span className='giftbuy-btn-con-lists'>
                    <a href="https://brand.naver.com/ediyagift">모바일 상품권</a>
                  </span>
                  <span className='giftbuy-btn-con-lists'>
                    <a href='/card/giftcard/giftbuy'>단체·기업 구매</a>
                  </span>
                </div>
              </div>
          </div>
            <div id="giftbuy-guide-container">
              <div id="giftbuy-guide-link">
                <span>HOME</span>
                <span>이디야 소식</span>
                단체·기업 구매
              </div>
                <div className="giftbuy-guide-box">
                  <h1 className='box01-guide-title'>기프트카드 대량 구매 안내</h1>
                    <ul className='guide-card-img'>
                      <li>
                        <img src="/images/cardlist/giftcard01.png" alt="giftcard"/>
                        <span className='guide-card-img-text'>기프트 카드</span>
                      </li>
                    </ul>
                </div>
                  <div className="giftbuy-guide-subbox">
                    <dl id='guide-subbox-top'>
                      <dd>기프트카드의 경우, 하단 발주서 작성 후 기재된 이메일로 발송하여 구매 요청 가능합니다.<br/>            
						              (권종 : 1만원 권, 2만원 권, 3만원 권, 5만원 권, 10만원 권 / 단체 및 기업카드 별도)
                      </dd>
                    </dl>
                      <ul className='guide-subbox-middle'>
                        <li>
                          <img src="/images/cardlist/member_list_dot.png"/>
                          상담 운영 시간 : 월~금 09:00 ~ 17:00 (토·일요일, 공휴일 휴무)
                          </li>
                        <li>
                          <img src="/images/cardlist/member_list_dot.png"/>
                          상담 구매 및 제휴 문의
                          </li>
                        <li>
                          <img src="/images/cardlist/member_list_dot.png"/>
                          - 유선 안내 : 02-123-456
                          </li>
                        <li>
                          <img src="/images/cardlist/member_list_dot.png"/>
                          - 메일 안내 : iiww123@naver.com
                        </li>
                        <li>
                          <img src="/images/cardlist/member_list_dot.png"/>
                          기프트카드 발주서 : 
                          <span  id='subbox-giftbuy-order'><a href="">기프트카드 발주서</a></span> 
                        </li>
                      </ul>
                      <ul id='guide-subbox-bottom'>
                        <li>
                          <img src="/images/cardlist/member_list_dot.png"/>
                          답변은 신청 시 기재한 메일 또는 유선으로 운영 시간 내에 안내됩니다.
                        </li>
                        <li>
                          <img src="/images/cardlist/member_list_dot.png"/>
                          기재 오류로 인하여 답변이 불가할 수 있으므로 메일 주소 및 전화번호를 꼭 확인해 주시기 바랍니다.
                        </li>
                      </ul>
                </div>
            <div className="giftbuy-guide-box">
              <h1 className='box01-guide-title'>모바일상품권 대량 구매 안내</h1>
                <ul className='guide-card-img'>
                  <li>
                    <img src="/images/cardlist/coupon_card.png" alt="giftcard"/>
                    <span className='guide-card-img-text'>모바일 상품권</span>
                  </li>
                </ul>
            </div>
              <div id="giftbuy-guide-subbox02">
                  <ul id='guide-subbox02-top'>
                    <li>
                      <img src="/images/cardlist/member_list_dot.png"/>
                      상담 운영 시간 : 월~금 09:00 ~ 17:00 (토·일요일, 공휴일 휴무)
                      </li>
                    <li>
                      <img src="/images/cardlist/member_list_dot.png"/>
                      상담 구매 및 제휴 문의
                      </li>
                    <li>
                      <img src="/images/cardlist/member_list_dot.png"/>
                      - 메일 안내 : iiww123@naver.com
                    </li>
                  </ul>
                  <ul id='guide-subbox-bottom'>
                    <li>
                      <img src="/images/cardlist/member_list_dot.png"/>
                      답변은 신청 시 기재한 메일 또는 유선으로 운영 시간 내에 안내됩니다.
                    </li>
                    <li>
                      <img src="/images/cardlist/member_list_dot.png"/>
                      기재 오류로 인하여 답변이 불가할 수 있으므로 메일 주소 및 전화번호를 꼭 확인해 주시기 바랍니다.
                    </li>
                  </ul>
              </div>
            </div>
      </div>
    </div>
    
  );
}

export default Giftbuy;
