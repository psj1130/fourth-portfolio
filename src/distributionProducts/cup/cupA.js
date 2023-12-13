import './cupA.css';
import Dplist from '../dplist';

function CupA() {
  return (
    <div  id='cupA_container'>
      <div id='cup_Top'>
        <div id='cup_title'>
          <h3>이디야 컵커피</h3>  
          <p>ALWAYS BESIDE YOU, RTD COFFEE</p>
        </div>
       <Dplist></Dplist>
      </div>
      <div id='cup_mid'>
        <p>HOME › 유통제품 › 이디야 컵커피</p>
      </div>
      <div id='cupA_main'>
        <div id='cupA_main2'>
          <h1>EDIYA RTD COFFEE</h1>
          <div id='cupA_a'>
            <h3>최적의 로스팅 프로파일로 완성된</h3>
            <h3>이디야만의 컵커피를 전국 편의점에서 만나보세요.</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CupA;