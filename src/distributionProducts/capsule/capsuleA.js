import './capsuleA.css';
import Dplist from '../dplist';

function CapsuleA() {
  return (
    <div  id='capsuleA_container'>
      <div id='capsule_Top'>
        <div id='capsule_title'>
          <h3>이디야 캡슐커피</h3>  
          <p>ALWAYS BESIDE YOU, <span id='capsule_span'>CAPSULE COFFEE</span></p>
        </div>
       <Dplist></Dplist>
      </div>
      <div id='capsule_mid'>
        <p>HOME ❯ 유통제품 ❯ 캡슐커피</p>
      </div>
      <div id='capsuleA_main'>
        <div id='capsuleA_main2'>
          <h1>CAPSULE COFFEE</h1>
          <div id='capsuleA_a'>
            <h3>이디야만의 차별화된 캡슐 포장방식으로</h3>
            <h3>신선하고 맛있는 원두를 캡슐커피로 제공합니다.</h3>
          </div>
        </div>
        <div id='capsuleC_container'>
          <div id='capsuleC_main1'>
            <div id='capsuleC_detail'>
              <img id='' src='/capsuleimg/capsule_img01.jpg'></img>
              <h3>이디야 캡슐커피 페르소나 블렌드</h3>
              <h4 id='capsuleC_detail_h4_a'>PERSONA BLEND</h4>
              <div id='capsuleC_detail_p'>
                <p>이디야커피만의 오랜 R&D 노하우의 결실로
                블렌딩 커피가 주는 향미적 복합성에 초점을 맞춘
                제품으로서 다크 초콜렛, 카라멜, 견과류의
                고소함 및 부드러운 바디감이 특징</p>
              </div>
              <img id='' src='/capsuleimg/capsule_taste01.jpg'></img>
            </div>
            <div id='capsuleC_detail'>
              <img id='' src='/capsuleimg/capsule_img02.jpg'></img>
              <h3>더 깔끔한 맛을 위한 무지방 우유 함유</h3>
              <h4 id='capsuleC_detail_h4_b'>COLOMBIA SUPREMO</h4>
              <div id='capsuleC_detail_p'>
                <p>부드러운 바닐라와 아몬드가 가진
                고소함과 은은한 향미의 안정적인
                밸런스가 특징인 제품</p>
              </div>
              <img id='' src='/capsuleimg/capsule_taste02.jpg'></img>
            </div>
            <div id='capsuleC_detail'>
              <img id='' src='/capsuleimg/capsule_img03.jpg'></img>
              <h3>차별화된 시크릿 레시피 사용</h3>
              <h4 id='capsuleC_detail_h4_c'>ETHIOPIA LIMMU</h4>
              <div id='capsuleC_detail_p'>
                <p>에티오피아 최고의 고지대에서 자라
                은은하고 선명한 플로럴한 향미와
                케인 슈가의 달콤한 후미가 특징인 제품</p>
              </div>
              <img id='' src='/capsuleimg/capsule_taste03.jpg'></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CapsuleA;