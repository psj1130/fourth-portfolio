import React from 'react';
import '../subcard/requestcard.css'

function Requestcard() {
  
  return(
    <div id='requestcard-container'>
        <div id="requestcard-box02">
        <h2 className='requestcard-box-title'>환불 방법</h2>
          <span>기프트카드는 '페이즈' 고객센터를 통하여 환불해야 합니다. (매장에서 환불 불가)</span>
          <p id='cancelcard-text-style'><b>페이즈 고색센터 1234-1234</b> / 평일 09:30 ~ 18:00 / 주말 및 공휴일 상담 불가</p>
          <span>환불 기준</span>
          <p>1) 1만원 이하 권종 : 80% 이상을 사용하여야 남은 20% 이하에 해당되는 금액을 환불받을 수 있습니다.</p>
          <p>2) 1만원 초과 권종 : 60% 이상을 사용하여야 남은 40% 이하에 해당되는 금액을 환불받을 수 있습니다.</p>
          <p>※ 권종이란 카드 후면에 표기된 금액을 의미합니다.</p>
      </div>
      <div id="requestcard-box01">
        <h2 className='requestcard-box-title'>
          유의 사항
        </h2>
          <p>기프트카드 잔액은 매장에서 현금 형태로 변환되지 않습니다.</p>
          <p>기프트카드 잔액은 환불 신청일 기준 최대 10일 이내에 요청하신 계좌로 입금됩니다.</p>
      </div>
    </div>
  );
}

export default Requestcard;
