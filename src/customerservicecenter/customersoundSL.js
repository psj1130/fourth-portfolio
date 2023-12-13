import './customersoundSL.css';

function CustomersoundSL() {
  return (
    <div>
      <div id='cussl_main'>
        <div id='cussl_title'>
          <h1>소비자분쟁 해결기준</h1>
        </div>
      </div>
      <div id='cussl_container'>
        <div id='cussl'>
          <div id='cussl_a'>
            <div id='cussl_d'><p>구분</p></div>
            <div id='cussl_i'><p>식품</p></div>
          </div>
          <div id='cussl_b'>
            <div id='cussl_e'><p>유형</p></div>
            <div id='cussl_ee'><p>제품불량</p></div>
            <div id='cussl_eee'><p>함량,용량부족</p></div>
            <div id='cussl_eee'><p></p>부패,변질</div>
            <div id='cussl_eee'><p></p>유통기간 경과</div>
            <div id='cussl_f'><p>부작용,상해사고</p></div>
          </div>
          <div id='cussl_c'>
            <div id='cussl_g'><p>해결기준</p></div>
            <div id='cussl_gg'><p>제품 교환 또는 구입가 환불</p></div>
            <div id='cussl_ggg'>
              <p>치료비,경비 및 일실소득</p>
              <p>(단,일실소득은 피해로 인하여 소득상실이 발생한 사실이 입증될 시 한함.</p>
              <p>금액을 입증할 수 없는 경우에는 시중 노임단가 기준으로 함)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  );
}

export default CustomersoundSL;
