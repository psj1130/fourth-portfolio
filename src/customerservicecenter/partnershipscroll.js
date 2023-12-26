import React, { useState } from 'react';
import './partnershipscroll.css'; // 스타일 파일 import
import Ccmlist from './ccmlist';
const Partnershipscroll = () => {
  const[privacy,setprivacy] = useState('');
    const privacyData ={
      privacy,
    };
    console.log('개인정보 데이터 :',privacyData);

  return (
    <div>
      <div id='Partnership_Top'>
        <div id='Partnership_title'>
          <h3>제휴 / 제안</h3>
          <p>항상 열려있는 이디야커피에 많은 의견을 보내주세요</p>
        </div>
        <Ccmlist></Ccmlist>
      </div>
      <div id='Partnership_mid'>
        <p>HOME ❯ 고객 지원 ❯ 제휴/제안 접수</p>
      </div>
      <div id='p_main3'>
          <h2>원활한 접수를 위해 필요한</h2>
          <h2>최소한의 개인정보를 수집하고 있습니다.</h2>
          <h3>개인 정보의 수집 및 이용에 관한 내용을 충분히 읽어보신 후 동의하여 주시기 바랍니다.</h3>
        <div className="scrollable-container">
          <div className="scrollable-content">
            <p><span id='scrollable_span_p'>개인정보 수집·이용에 관한 사항</span><span id='scrollable_span'>(필수)</span></p>
            <p>㈜이디야는​ 제휴, 제안 상담을 위해 아래와 같은 개인정보를 수집하고 있습니다.</p>
            <p>1. 수집항목 : 이름, 연락처, 이메일</p>
            <p>2. 이용목적 : 귀하 또는 귀사가 당사에 제공하고자 하는 제품과 서비스 등의 상담 </p>
            <p>3. 보유기간 : 1개월 후 파기</p>
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
    </div>
  );
};

export default Partnershipscroll;
