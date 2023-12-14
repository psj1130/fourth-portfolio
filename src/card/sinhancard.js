import './shinhancard.css'
function Shinhancard() {

  return(
    <div id="shinhancard-body">
      <div id="shinhancard-container">
        <h3 id='shinhancard-title'>이디야 신한카드 혜택소개</h3>
          <div id="shinhancard-cardcon">
            <div id="shinhan-card-img">
              <img src="/images/cardlist/shinhan_card.png"/>
              <p>이디야 신한카드 Tasty</p>
            </div>
            <div id="shinhan-card-info">
              <div id="card-info-con">
                <div id="info-text-start">
                  <p>커피매니아</p>
                  <p>를 위한 카드</p>
                </div>
                  <ul id='card-info-lists'>
                    <li className='info-list'>
                      <span className='numlist-box'>01</span>
                      <p>이디야커피 <em>50% </em>할인</p>
                    </li>
                    <li className='info-list'>
                      <span className='numlist-box'>02</span>
                      <p>생활/쇼핑 <em>10% </em>할인</p>
                    </li>
                    <li className='info-list'>
                      <span className='numlist-box'>03</span>
                      <p>CGV영화 <em>5000원 </em>할인</p>
                    </li>
                  </ul>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
}

export default Shinhancard;