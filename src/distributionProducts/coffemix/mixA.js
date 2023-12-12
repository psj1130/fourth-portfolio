import './mixA.css';
import Dplist from '../dplist';
import MixAA from './mixAA';

function MixA() {
  return (
    <div id='mixA_container'>
      <div id='mix_Top'>
        <div id='mix_title'>
          <h3>이디야 커피믹스</h3>
          <p id='mix_title_p'>ALWAYS BESIDE YOU, <span id='mix_title_sapn'>EDIYA COFFEE MIX</span></p>
        </div>
       <Dplist></Dplist>
      </div>
      <div id='mix_mid'>
        <p>HOME › 유통제품 › 커피믹스</p>
      </div>
      <div id='mixA_main'>
        <div id='mixA_main2'>
          <h1>EDIYA COFFEE MIX</h1>
          <div id='mixA_a'>
            <h3>진심을 담은 커피전문점의 한 잔</h3>
            <h3>언제 어디서나 달콤한 이디야 커피믹스를 즐겨보세요.</h3>
          </div>
        </div>
        <div id='mixB_main'>
          <div id='mixA_img2'>
            <div id='mixA_b'>
              <div>
              <img id='mixA_img1' src='/miximg/coffeemix_icon01.jpg'></img>
              </div>
              <div id='mixA_bb'>
                <h4>커피만을 연구해온 이디야커피</h4>
              </div>
              <div id='mixA_bbb'>
                <p>2001년부터 오직 커피만을 생각해 온 이디야커피,</p>
                <p>국내 커피 전문점의 자존심, 이디야커피의 노하우가</p>
                <p>고스란히 담겨있습니다.</p>
              </div>
            </div>
            <div id='mixA_b'>
              <div>
              <img id='mixA_img1' src='/miximg/coffeemix_icon02.jpg'></img>
              </div>
              <div id='mixA_bb'>
                <h4>이디야 커피연구소의 연구개발</h4>
              </div>
              <div id='mixA_bbb'>
                <p>자체 커피연구소와 로스팅 센터를 보유하고 있는 이</p>
                <p>디야커피, 전 세계 각지의 생두를 직접 선별-소싱-로</p>
                <p>스팅-제조까지 모든 과정을 커피연구소에서 주도합</p>
                <p>니다.</p>
              </div>
            </div>
            <div id='mixA_b'>
              <div>
              <img id='mixA_img1' src='/miximg/coffeemix_icon03.jpg'></img>
              </div>
              <div id='mixA_bb'>
                <h4>뛰어난 품질 경쟁력과 황금비율</h4>
              </div>
              <div id='mixA_bbb'>
                <p>오랫동안 축적된 노하우로 완성시킨 완벽한 황금비</p>
                <p>율 커피믹스, 커피, 크림, 설탕의 최적화된 비율로 진</p>
                <p>한 커피의 향미와 부드럽고 달콤한 믹스의 맛을 선사</p>
                <p>합니다.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MixA;
