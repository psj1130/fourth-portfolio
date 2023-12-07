import { useState, useEffect } from 'react';
import './affiliatecard.css'
import Hanacard from "./hanacard";
import Shinhancard from "./sinhancard";



function Affiliatecard() {

  return (
    <div id="affiliatecard-body-e">
      <div id="affiliatecard-container-e">
        <h1 id='affiliatecard-title-e'>제휴카드</h1>
          <p id='affiliatecard-subtitle-e'>이디야 하나카드 FREE+DOM</p>
            <div id='affiliatecard-select-e'>
              <div id='affiliatecard-cardlist-e'>
                  <ul id='affiliatecard-cardselect-e'>
                      <a href='#none' className='card-list-e'>
                        하나카드
                      </a>
                      <a href='#none' className='card-list-e'>
                        신한카드
                      </a>
                  </ul>
              </div>
          </div>
      </div>
      <Shinhancard/>
    </div>
  );
}

export default Affiliatecard;
