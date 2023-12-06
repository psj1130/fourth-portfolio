import { useState, useEffect } from 'react';
import './affiliatecard.css'
import Hanacard from "./hanacard";
import Sinhancard from "./sinhancard";

function Affiliatecard() {

  return (
    <div id="affiliatecard-body-e">
      <div id="affiliatecard-container-e">
        <h1 id='affiliatecard-title-e'>제휴카드</h1>
          <p id='affiliatecard-subtitle-e'>이디야 하나카드 FREE+DOM</p>
            <div id='affiliatecard-select-e'>
              <div id='affiliatecard-cardlist-e'>
                  <ul id='affiliatecard-cardselect-e'>
                      <button className='card-list-e'>
                        하나카드
                      </button>
                      <button className='card-list-e'>
                        신한카드
                      </button>
                  </ul>
              </div>
          </div>
      </div>
      <Sinhancard/>
    </div>
  );
}

export default Affiliatecard;
