import React, {useState} from "react";
import './cardintroduce.css'
import Popup from "./popup";



function Introduce() {

  const [isOpen, setOpen] = useState(false);

  const popupclick = () => {
    setOpen(true);
  }
  

  return(
    <div id="introduce-body">
      <div id="introduce-container">
        <div id="introduce-con-text">
              <h1 id='introduce-con-title-text'>이디야 기프트카드</h1>
                <div id="introduce-info-text">
                  <p>고객 이벤트, 직원 복지 등 다양한 용도로 선물해보세요.</p>
                  <p>맛있는 커피에 한 번, 당신의 섬세함에 두 번 놀라게 됩니다.</p>
                </div>
                <div id="introduce-btn">
                  <div id="introduce-btn-con">
                    <span className='introduce-btn-con-lists'>
                      <a href='/card/giftcardrouters/giftcard'>기프트카드</a>
                    </span>
                    <span className='introduce-btn-con-lists'>
                      <a href="#noen">모바일 상품권</a>
                    </span>
                    <span className='introduce-btn-con-lists'>
                      <a href='/card/giftcardrouters/giftcard/giftbuy'>단체·기업 구매</a>
                    </span>
                  </div>
                </div>
            </div>
          <div id="introduce-link-con">
            <div id="introduce-introduce-link">
                <span>HOME</span>
                <span>기프트카드</span>
                기프트카드 소개
            </div>
          </div>
          <div id="introduce-con01">
            <div id="introduce-card-con01">
              <div id="introduce-card-imgcon">
                <img src="/images/cardlist/giftcard_img.png"/>
              </div>
              <div id="introduce-card-textcon">
                <h1 id="card-textcon-style">기프트카드란?</h1>
                <span id="card-subtext-style">기프트가드는 전국 이디야 매장에서 구매 가능하며<br/>
                현금처럼 사용 가능한 <b>무기명 선불가드</b>입니다.(일부 매장 제외)</span>
                <p>※ 이디야 멤버스 APP에 등록 가능합니다.</p>
              </div>
            </div>
          </div>
          <div id="arrow-con">
            <img id="introduce-arrow" src="/images/cardlist/members_block_back.png"/>
          </div>
        <div className="introduce-subbox">
          <div id="introduce-con-box">
            <dl id='introduce-subbox-top'>
              <dd>
                이디야 기프트카드 구매방법
              </dd>
            </dl>
              <ul className='introduce-subbox-middle'>
                <li>
                  <img src="/images/cardlist/member_list_dot.png"/>
                  이디야 키프트가드는 전국 이디야커피 매장에서 구매 가능합니다.(일부매장 제외)
                  </li>
                <li>
                  <img src="/images/cardlist/member_list_dot.png"/>
                  카드결제로만 구매 가능합니다.
                  </li>
                <li>
                  &nbsp; ※ 카드결제: 신용카드, 체크카드, 법인카드(기프트카드로 결제 불가합니다.)
                  </li>
                <li>
                  <img src="/images/cardlist/member_list_dot.png"/>
                  기프트카드 구매 시 현금영수증은 발행되지 않습니다.
                </li>
                <li>
                  <img src="/images/cardlist/member_list_dot.png"/>
                  기프트 카드 구매시 적립되지 않습니다.
                </li>
              </ul>
              <dl id='introduce-subbox-top'>
                <dd>
                  이디야 기프트카드 단체 및 기업 구매 방법
                </dd>
              </dl>
                <ul className='introduce-subbox-middle'>
                  <li>
                    <img src="/images/cardlist/member_list_dot.png"/>
                    기프트카드 단체 및 기업 구매의 경우 하단 발주서를 작성 후 기재된 이메일로 발송하여 구매 요청 가능합니다.
                    </li>
                  <li>
                    <span  id='introduce-subbox-order'><a href="">기프트카드 발주서</a></span> 
                  </li>
                  <li>
                    <img src="/images/cardlist/member_list_dot.png"/>
                    상담 운영시간 : 09:00 ~ 18:00 (토/일요일, 공휴일 휴무)
                  </li>
                  <li>
                    <img src="/images/cardlist/member_list_dot.png"/>
                    단체 및 기업 구매 문의 : 02-123-1234
                  </li>
                </ul>
              <dl id='introduce-subbox-top'>
                <dd>
                  이디야 기프트카드 권종
                </dd>
              </dl>
                <ul className='introduce-subbox-middlesub'>
                  <li>
                    <img src="/images/cardlist/member_list_dot.png"/>
                    기프트카드 단체 및 기업 구매의 경우 하단 발주서를 작성 후 기재된 이메일로 발송하여 구매 요청 가능합니다.
                    </li>
                  &nbsp; ※ 단체 및 기업카드 별도
                </ul>
            </div>
        </div>
        <div id="introduce-subbox02">
          <div className="introduce-guide-box">
            <h1 className='box01-introduce-title'>기프트카드 대량 구매 안내</h1>
              <div id="introduce-card-list">
                <ul className='introduce-card-img'>
                  <li>
                    <img src="/images/cardlist/giftcard01.png" alt="giftcard"/>
                    <span className='guide-card-img-text'>1만원권,2만원권,3만원권</span>
                  </li>
                </ul>
                <ul className='introduce-card-img'>
                  <li>
                    <img src="/images/cardlist/giftcard02.png" alt="giftcard"/>
                    <span className='guide-card-img-text'>5만원권,10만원권</span>
                  </li>
                </ul>
              </div>
          </div>
        <div className="introduce-subbox">
          <div id="introduce-con-box">
            <dl id='introduce-subbox-top'>
              <dd>
                이디야 기프트카드 이용안내
              </dd>
            </dl>
              <ul className='introduce-subbox-middle'>
                <li>
                  <img src="/images/cardlist/member_list_dot.png"/>
                    기프트카드의 뒷면 바코드를 제시하여 이용이 가능합니다.
                  </li>
                <li>
                  <img src="/images/cardlist/member_list_dot.png"/>
                  기프트카드를 사용하여 이디야커피 상품 구매 시 현금 영수증 발급이 가능합니다.
                  </li>
                <li>
                  <img src="/images/cardlist/member_list_dot.png"/>
                    카드 뒷면에 표기된 금액만큼 사용이 가능하며 충전은 불가합니다.
                  </li>
                <li>
                  <img src="/images/cardlist/member_list_dot.png"/>
                    카드의 유효기간은 구매일로부터 5년입니다. 유효기간 만료 시 잔액은 자동 소멸됩니다.
                </li>
                <li>
                  <img src="/images/cardlist/member_list_dot.png"/>
                    기프트카드는 이디야 멤버스 APP에 등록하여 사용, 사용이력 조회, 잔액 조회가 가능합니다.
                </li>
              </ul>
              <dl id='introduce-subbox-top'>
                <dd>
                  이디야 미판매 매장 / 사용 가능 매장
                </dd>
              </dl>
                <ul className='introduce-subbox-middle'
                id="introduce-subbox02-middle">
                  <li>
                    <img src="/images/cardlist/member_list_dot.png"/>
                   경주홈플러스점, 광양홈플러스점, 대구성서홈플러스점, 대구칠곡홈플러스점, 병점홈플러스점, 부산가야홈플러스점, 부산연산홈플러스점, 
                   <p>연수홈플러스점, 울산홈플러스점, 원주홈플러스점, 의정부홈플러스점, 인하홈플러스점, 킨텍스홈플러스점, 평택안중홈플러스점</p>
                    </li>
                </ul>
              <dl id='introduce-subbox-top'>
                <dd>
                  기프트카드 미판매 / 사용 불가 매장
                </dd>
              </dl>
                <ul className='introduce-subbox-middlesub'
                id="introduce-subbox02-middle">
                  <li>
                    <img src="/images/cardlist/member_list_dot.png"/>
                    3공수특전여단점, 9사단점, CampCasey점, RodriguezRange점, Warriorbase점, 계룡대점, 과천역점, 과천중앙점, 광양체육관점, 광양포스코점, 광주수완롯데마트점,
                    <p>구미삼성점, 구미삼성점(쉼터), 구미삼성점(해피데이), 군산수송동점, 기흥삼성점, 남현홈플러스점, 내발산점, 대전SK점, 도농코레일점, 동구미이마트점, 동탄삼성점,</p>
                    <p> 방학홈플러스점, 부산대정문점, 부천세무서점, 삼척홈플러스점, 상암홈플러스점, 상지대2호점, 상지대점, 성남단대점, 성빈센트병원점, 세이브존노원점, 세종시갈매점,</p>
                    <p> 순천이마트점, 순천풍덕홈플러스점, 아산삼성7라인점, 아산삼성8라인점, 아산삼성A3점, 아산삼성MOD점, 아산삼성블루홀점, 안동홈플러스점, 안산고잔홈플러스점,</p>
                    <p> 안양덕천점, 영등포홈플러스점, 울산남구홈플러스점, 울산서부동점, 전주고속터미널점, 정자역점, 진주홈플러스점, 창원홈플러스점, 태평로점, 평택삼성점,</p>
                    <p> 포항이동이마트점, 포항체육관점, 한성대역점, 합정홈플러스점, 홍성점</p>
                  </li>
                </ul>
            </div>
        </div>
        <div className="introduce-guide-box">
            <h1 className='box01-introduce-title'>기프트카드 이용약관</h1>
              <div id="introduce-guide-list">
                <span id="introduce-card-terms">자세한 내용은 아래 기프트카드 약관을 통해 확인 하실 수 있습니다.</span>
                  <button
                  id="terms-btn"
                  onClick={popupclick}>
                    기프트카드 이용약관
                    <img src="/images/cardlist/list_btn.gif" alt="" />
                  </button>
                  {isOpen ? <Popup
                   isOpen={setOpen} /> : null}
              </div>
          </div>
      </div>
    </div>
  </div>
  );
}

export default Introduce;
