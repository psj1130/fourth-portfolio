import React from 'react';
import '../subcard/reportcard.css';

function Reportcard() {

  return(
    <div id='reportcard-container'>
      <div id="reportcard-box01">
        <span className='reportcard-box-title'>
          기프트카드 분실, 도난은 <b>페이즈 고객센터</b>를 통해서 확인해주세요.
        </span>
          <div id="reportcard-tel-box">
            <p id='reportcard-tel-title'>페이즈 고객센터</p>
            |
            <p>1234-1234</p>
          </div>
      </div>
    </div>
  );
}

export default Reportcard;