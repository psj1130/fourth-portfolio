import './stickA.css';
import Dplist from '../dplist';

function StickA() {
  return (
    <div  id='stickA_container'>
      <div id='stick_Top'>
        <div id='stick_title'>
          <h3>비니스트</h3>
          <p>ALWAYS BESIDE YOU, <span id='stickA_title_sapn'>EDIYA BEANIST</span></p>
        </div>
       <Dplist></Dplist>
      </div>
      <div id='stick_mid'>
        <p>HOME › 유통제품 › 비니스트</p>
      </div>
      <div id='stickA_main'>
        <div id='stickA_main2'>
          <img id='stickA_img1' src='/stickimg/beanist_tt.gif'></img>
          <div id='stickA_a'>
            <h3>새로운 패키지에 담긴 다양한 맛의 커피를 직접 선택하세요.</h3>
            <h3>매장에서 즐기던 그 느낌 그대로, 언제 어디서나 당신의 공간이 카페가 됩니다.</h3>
          </div>
          <div id='stickA_aa'>
            <p>Beanist®는 BEAN + Specialist의 합성어로, 오직 커피만을 생각해온 커피 전문가를 의미합니다.</p>
          </div>
        </div>
        <div id='stickB_main'>
          <div id='stickA_img2'>
            <div id='stickA_b'>
              <div>
              <img id='stickA_img1' src='/stickimg/beanist_icon01.jpg'></img>
              </div>
              <div id='stickA_bb'>
                <h4>이디야 커피연구소의 연구개발</h4>
              </div>
              <div id='stickA_bbb'>
                <p>자체 로스팅 공장인 드림팩토리를 보유하고 있는 이</p>
                <p>디야커피, 전 세계 각지의 생두를 이디야커피 드림팩</p>
                <p>토리에서 직접 로스팅하고 연구합니다.</p>
              </div>
            </div>
            <div id='stickA_b'>
              <div>
              <img id='stickA_img1' src='/stickimg/beanist_icon02.jpg'></img>
              </div>
              <div id='stickA_bb'>
                <h4>노력의 시작 2001년</h4>
              </div>
              <div id='stickA_bbb'>
                <p>2001년부터 오직 커피만을 생각해 온 이디야커피,</p>
                <p>국내 커피 전문점의 자존심 이디야커피의 노하우가</p>
                <p>고스란히 담겨있습니다.</p>
              </div>
            </div>
            <div id='stickA_b'>
              <div>
              <img id='stickA_img1' src='/stickimg/beanist_icon03.jpg'></img>
              </div>
              <div id='stickA_bb'>
                <h4>마이크로 그라인딩 원두 함유량 10%</h4>
              </div>
              <div id='stickA_bbb'>
                <p>언제 어디서나 전문점의 아메리카노를 즐길 수 없을</p>
                <p>까? 커피 전문점의 아메리카노와 가장 가까운 맛을</p>
                <p>구현하기 위한 황금 비율입니다.</p>
              </div>
            </div>
           
          </div>
        </div>
      </div>
     
    </div>
  );
}

export default StickA;
