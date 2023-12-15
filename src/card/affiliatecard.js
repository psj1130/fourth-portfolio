import { useState, useEffect } from 'react';
import './affiliatecard.css'
import Hanacard from "./hanacard";
import Shinhancard from "./sinhancard";



function Affiliatecard() {
  const [selectcard, setSelectcard] = useState('Hana');
    const cardBox = (e) => {
      switch (selectcard) {
        case 'Hana':
          return <Hanacard/>;
        case 'Shinhan':
          return <Shinhancard/>;
        default:
          return null;
      }
    }

  return (
    <div id="affiliatecard-body-e">
      <div id="affiliatecard-container-e">
        <h1 id='affiliatecard-title-e'>제휴카드</h1>
          <p id='affiliatecard-subtitle-e'>이디야 하나카드 FREE+DOM</p>
            <div id='affiliatecard-select-e'>
              <div id='affiliatecard-cardlist-e'>
                  <ul id='affiliatecard-cardselect-e'>
                      <p
                      onClick={() => setSelectcard} 
                      className='card-list-e'>
                        하나카드
                      </p>
                      <p 
                      onClick={() => setSelectcard} 
                      className='card-list-e'>
                        신한카드
                      </p>
                  </ul>
              </div>
          </div>
      </div>
      {cardBox()}
    </div>
  );
}

export default Affiliatecard;
