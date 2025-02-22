import './cupB.css';

function CupB() {
  return (
    <div id='cupB_container'>
      <div id='cupB_main'>
        <div id='cupB_main1'>
          <div id='cupB_detail'>
            <img id='' src='/cupimg/cupcoffee_pro01.png' alt='1'></img>
            <h3 id='cupB_detail_a'>CAFE LATTE</h3>
            <h4>카페라떼</h4>
            <div id='cupB_detail_pp'>
              <p>이디야 듀얼 로스팅 원두 추출액과</p>
              <p>우유, 크림이 어우러져 부드러운 커피풍미가</p>
              <p>가득한 카페라떼</p>
            </div>
          </div>
          <div id='cupB_detail'>
            <img id='' src='/cupimg/cupcoffee_pro02.png' alt='1'></img>
            <h3 id='cupB_detail_b'>TOFFEENUT SIGNATURE LATTE</h3>  
            <h4>토피넛 시그니처 라떼</h4>
            <div id='cupB_detail_pp'>
              <p>이디야 듀얼 로스팅 원두 추출액과</p>
              <p>토피넛이 어우러져 달콤하고 고소한 풍미가 가득한</p>
              <p>이디야만의 시그니처 라떼</p>
            </div>
          </div>
          <div id='cupB_detail'>
            <img id='' src='/cupimg/cupcoffee_pro03.png' alt='1'></img>
            <h3 id='cupB_detail_c'>DOLCE COLD BREW</h3>
            <h4>돌체 콜드브루</h4>
            <div id='cupB_detail_pp'>
              <p>이디야 듀얼 로스팅 콜드브루 추출액과 연유가</p>
              <p>어우러져 깔끔한 콜드브루와 고급스러운</p>
              <p>달콤함이 가득한 돌체 콜드브루</p>
            </div>
          </div>
        </div>
        {/* 아래 2개 */}
        <div id='cupB_main2'>
          <div id='cupB_detail'>
            <img id='' src='/cupimg/cupcoffee_pro04.png' alt='1'></img>
            <h3 id='cupB_detail_d'>VANILLA LATTE</h3>
            <h4>바닐라 라떼</h4>
            <div id='cupB_detail_pp'>
              <p>이디야 듀얼 로스팅 원두 추출액과</p>
              <p>향긋한 천연바닐라를 더한 바닐라 라떼</p>
            </div>
          </div>
            <div id='cupB_detail'>
              <img id='' src='/cupimg/cupcoffee_pro05.png' alt='1'></img>
              <h3 id='cupB_detail_e'>CHOCOLATE MOCHA</h3>
              <h4>쇼콜라 모카</h4>
              <div id='cupB_detail_p'>
                <div id='cupB_detail_pp'>
                  <p>이디야 듀얼 로스팅 원두 추출액과</p>
                  <p>달콤한 초콜릿을 더해 진하고 달콤한 쇼콜라모카</p>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default CupB;
