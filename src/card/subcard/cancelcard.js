import React from 'react';
import '../subcard/cancelcard.css';

function Canclecard() {

  return(
    <div id='cancelcard-container'>
      <div id="cancelcard-box01">
        <span className='cancelcard-box-title'>
          구매 취소 방법
        </span>
          <p>기프트카드 구매 취소는 구매 후 14일 이내 구매한 매장에서 취소 가능합니다.</p>
      </div>
      <div id="cancelcard-box02">
        <span className='cancelcard-box-title'>
          유의사항
        </span>
          <p>결제 카드와 영수증을 지참하여 구매하였던 매장에 방문하셔야 구매 취소 가능합니다.</p>
          <p>환불 불가 상황</p>
            <ul>
              <li>1) 구매일 기준 14일 경과 시 구매 취소 불가</li>
              <li>2) 기프트카드 사용 후 구매 취소 불가</li>
            </ul>
            <span>※ 관련 문의 내용은 페이즈 고객센터를 통해 확인해주세요.</span>
            <span id='cancelcard-text-style'><b>페이즈 고색센터 1234-1234</b> / 평일 09:30 ~ 18:00 / 주말 및 공휴일 상담 불가</span>
      </div>
    </div>
  );
}

export default Canclecard;