import Dplist from "../dplist";
import './transaction.css';
import React, { useState } from 'react';
import TransactionDetail from "./transactionDetail";
function Transaction(){
  const[privacy,setprivacy] = useState('');
  const privacyData ={
    privacy,
  };
  console.log('개인정보 데이터 :',privacyData);

  return(
    <div>
      <div id='transaction_Top'>
        <div id='transaction_title'>
          <h3>수출입거래</h3>  
          <p>전 세계 어디서나 즐길 수 있도록</p>
          <p>오늘도 이디야의 꿈은 로스팅 중입니다.</p>
        </div>
       <Dplist/>
      </div>
      <div id='transaction_mid'>
        <p>HOME ❯ 유통제품 ❯ 수출입거래</p>
      </div>
      <div id='transaction_memo'>
        <div id='transaction_memo1'>
          <h3>이디야커피 유통 제품의 특수, 특판 거래를 희망하시는 업체에서는 아래 상담란에 문의 내용을 남겨주시기 바랍니다.</h3>
        </div>
        <div id='transaction_memo2'>
          <h3>특수영업 담당자가 신속, 정확한 회신드리겠습니다.</h3>
        </div>
      </div>
      <div id='transaction_boxs'>
        <div id='transaction_box1'>
          <p>이메일 접수</p>
          <div id="transaction_box1_email">
            <p>sktnqls2@ediya.com</p>
            <p>chanhaeng.lee@ediya.com</p>
            <p>chanhaeng.lee@ediya.com</p>
          </div>
        </div>
        <div id='transaction_box2'>
          <p>운영 시간</p>
          <p>월~금 09:00 ~ 18:00</p>
        </div>
      </div>
        <div id='transaction_detail_main'>
          <div id='transaction_detail'>
            <h3>수출입거래 상담 신청</h3>
            <h4>이디야 커피 유통제품의 수출입거래 상담 신청을 하실 수 있는 곳입니다. 원활한 상담을 위해 필요한 최소한의 개인정보를 수집하고 있습니다.</h4>
            <h4><span>개인정보의 수집 및 이용</span>에 관한 내용을 충분히 읽어보신 후 동의하여 주시기 바랍니다.</h4>
          </div>
        </div>
        
        <div id="scrollable_body">
          <div className="scrollable-container">
            <div className="scrollable-content">
              <p><span id='scrollable_span_p'>개인정보 수집·이용에 관한 사항</span><span id='scrollable_span'>(필수)</span></p>
              <p>회사는 수출입거래 상담을 위해 아래와 같은 개인정보를 수집하고 있습니다.</p>
              <p>1. 수집항목 : (필수) 이름, 연락처, 이메일주소, 회사명, 국가(지역)</p>
              <p>2. 이용목적 : 수출입거래 문의 상담, 기타 관련 문의사항 답변, 수출입거래 관련 정보 제공 및 관련 안내 문자(SMS) 발송 </p>
              <p>3. 보유기간 : 3년간 보관</p>
              <p id='scrollable_span_p_a'>위의 개인정보 수집, 이용에 대한 동의를 거부할 권리가 있습니다. 그러나 동의를 거부하실 경우 본 페이지의 이용에 제한이 있습니다.</p>
            </div>
          </div>
          <label id='scrollable_a'>
            <input
              type="checkbox"
              checked={privacy}
              onChange={(e) => setprivacy(e.target.checked)}
            />개인정보 수집 이용에 동의합니다.
          </label>
        </div>
        <TransactionDetail/>
    </div>
  )
}
export default Transaction;