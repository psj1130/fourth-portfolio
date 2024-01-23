import sinhanimg from './affiliatecardimg/freedom-logo.png'
import './hanacard.css'

function Hanacard() {

  return (
    <div id="hanacard-body">
      <div id="hanacard-container">
        <h3 id='hanacard-title-text'>이디야 하나카드 혜택소개</h3>
          <img src={sinhanimg} alt='1'/>
            <ul id='benefits'>
              <li className='benefits-1'>
                <span id='benefits-1-box1'>
                  <p>실적 조건 없이도</p>
                  <p>음료 쿠폰 매월 제공</p>
                </span>
                  <p>월 1회 카드 등록 후 1년간 제공</p>
              </li>
              <li className='benefits-1'>
                <span id='benefits-1-box2'>
                  <p>실적 조건 없이도</p>
                  <p>50% 청구 할인</p>
                </span>
                  <p>원큐페이 등록 결제 시 50%</p>
                  <p>이 외 결제 시(실물카드/타간편결제) 20%</p>
                  <p>매장/APP 결제 모두 적용</p>
              </li>
              <li className='benefits-1'>
                <span id='benefits-1-box2'>
                  <p>연회비 15,000원</p>
                  <p>100% 캐시백</p>
                </span>
                  <p>23년 06월 30일 이전 발급 시</p>
                  <p>하나카드 신규 고객 대상</p>
                  <p>(최초 혹은 탈회 후 6개월 경과 고객)</p>
              </li>
            </ul>
      </div>
        <div id='hanacard-container02'>
          <h1>카드 디자인</h1>
            <ul id='container02-box'>
              <li className='box-card'>
                <img src="/images/cardlist/hana_card01.png" alt="1" />
                  <span className='box-card-style'>
                    <p>COFFEE POWER</p>
                    <p>렌티큘러 기능이 있어요<br/>
                    좌우로 흔들어 보세요</p>
                  </span>
              </li>
              <li className='box-card'>
                <img src="/images/cardlist/hana_card02.png" alt="1" />
                  <span className='box-card-style'>
                      <p>LOVE & PEACE</p>
                    </span>
              </li>
              <li className='box-card'>
                <img src="/images/cardlist/hana_card03.png" alt="1" />
                  <span className='box-card-style'>
                      <p>FREE DOM</p>
                      <p>폐플라스틱을 활용한<br/>
                         친환경 소재 카드</p>
                    </span>
              </li>
              <li className='box-card'>
                <img src="/images/cardlist/hana_card04.png" alt="1" />
                  <span className='box-card-style'>
                      <p>DREAM FACTORY</p>
                    </span>
              </li>
              <li className='box-card'>
                <img src="/images/cardlist/hana_card05.png" alt="1" />
                  <span className='box-card-style'>
                      <p>LATTE</p>
                    </span>
              </li>
            </ul>
        </div>
          <div id="hanacard-container3">
            <div id="container3-box">
              <h3 id='contaiber3-box-title'>광고 영상</h3>
                <video width="1200px"
                id='box-video'
                autoPlay controls>
                  <source src="/images/cardlist/hana_video.mp4" type="video/mp4"/>
                </video>
                <div id="video-text-box">
                  <p>카드와 관련된 보다 자세한 내용은 아래 <span id='text-box-text-style'>하나카드 바로가기</span>
                    를 통해 확인하세요.
                  </p>
                    <div id="card-btn">
                      <a href="#none">하나카드 바로가기</a>
                    </div>
                </div>
            </div>
          </div>
    </div>
  );
}

export default Hanacard;
