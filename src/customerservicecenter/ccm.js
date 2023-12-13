import './ccm.css';
import React, { useState } from 'react';
import Ccmlist from './ccmlist';
function Ccm() {
 
  return (
    <div>
      <div id='ccm_Top'>
        <div id='ccm_title'>
          <h3>소비자중심경영</h3>
          <p>이디야는 소비자중심경영(CCM)을 통해 고객만족향상 활동을 실천합니다.</p>
        </div>
        <Ccmlist></Ccmlist>
      </div>
      <div id='ccm_a'>
          <div id='Partnership_mid'>
            <p>HOME › 고객 지원 › 소비자 중심경영(CCM)</p>
          </div>
        <h1>이디야커피는 국내 커피업계 최초 <span id='ccm_span'>소비자중심경영(CCM) 인증</span>을</h1>
        <h1>획득하여 2019년부터 도입 운영하고 있습니다.</h1>
        <div id='ccm_bbbb'>
          <p>고객중심과 상생경영 철학을 바탕으로 고객의 소리에 귀를 기울이고, 문제는 신속하게 개선하며 적극적으로 소통하는 소비자중심경영을 실천하고 있습니다.</p>
          <p>소비자중심경영(CCM)을 통해 고객만족 향상과 상생가치를 추구하는 기업으로서 소비자 지향적인 경영 활동을 지속 운영하겠습니다.</p>
        </div>
      </div>
      <div id='ccm_bbb'>
        <div id='ccm_bb'>
          <div id='ccm_b'>
            <h3>CCM이란?</h3>
              <p>기업의 경영 전반이 소비자 관점에서 소비자 중심으로 이루어지는지</p>
              <p>한국소비자원이 평가하고 공정거래위원회가 인증하는 제도</p>
          </div>
          <div id='ccm_c'>
            <img src='../customerSupportimg/ccm_1.jpg'></img>
          </div>
        </div>
      </div>
      
      <div id='ccm_dd'>
        <div id='ccm_d'>
          <div id='ccm_ddd'>
            <h3>이디야 커피 CCM인증</h3>
          </div>
          <div id='ccm_e'>
            <div>
              <img src='../customerSupportimg/ccm_2.jpg'></img>
              <h4>이디야 CCM국문 인증서</h4>
            </div>
            <div>
              <img src='../customerSupportimg/ccm_3.jpg'></img>
              <h4>이디야 CCM영문 인증서</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ccm;
