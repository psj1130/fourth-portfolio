import './cupC.css';


function CupC() {
  return (
    <div id='cupC_container'>
      <div id='cupC_title'>
        <h3>커피 전문점의 노하우로 만든 최적의 레시피</h3>
      </div>
      <div id='cupC_main'>
        <div id='cupC_main1'>
          <div id='cupC_detail'>
            <h2>01</h2>
            <h4>국내 최고의 로스터기로 듀얼 로스팅</h4>
            <p>BUHLER INFINITY 1000 /</p>
            <p>PROBAT NEPTUNE 500</p>
          </div>
          <div id='cupC_detail'>
            <h2>02</h2>
            <h4>국내 최고의 로스터기로 듀얼 로스팅</h4>
          </div>
          <div id='cupC_detail'>
            <h2>03</h2>
            <h4>국내 최고의 로스터기로 듀얼 로스팅</h4>
          </div>
        </div>
      </div>
      <div id='cupC_main2'>
        <div id='cupC_detail'>
          <img id='' src='/cupimg/cupcoffee_img01.jpg'></img>
          <div id='cupC_detail_h3'><h3>이디야 드림팩토리</h3></div>
        </div>
        <div id='cupC_detail'>
          <img id='' src='/cupimg/cupcoffee_img02.jpg'></img>
          <div id='cupC_detail_h3'><h3>'BUHLER Infinity 1000' 아시아 최초로 인피니티 로스터 국내 도입</h3></div>
        </div>
        <div id='cupC_detail'>
          <img id='' src='/cupimg/cupcoffee_img03.jpg'></img>
          <div id='cupC_detail_h3'><h3>'PROBAT NEPTUNE 500' 세계 로스팅 설비시장에서 손꼽히는 PROBAT</h3></div>
          </div>
        </div>
    </div>
  );
}

export default CupC;
