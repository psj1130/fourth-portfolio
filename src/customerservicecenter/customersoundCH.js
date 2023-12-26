import './customersoundCH.css';
import Ccmlist from './ccmlist';

function CustomersoundCH() {
  
  return (
    <div>
      <div id='cus_Top'>
        <div id='cus_title'>
          <h3>고객의 소리</h3>
          <p>이디야는 고객의 의견을 가장 소중히 생각합니다.</p>
        </div>
        <Ccmlist></Ccmlist>
      </div>
      <div id='cus_detail'>
          <div id='Partnership_mid'>
            <p>HOME ❯ 고객 지원 ❯ 고객의 소리</p>
          </div>
        <h1>고객의 소리 접수채널</h1>
        <h2>1.매장 및 인터넷,전화 등 다양한 채널을 통해 접수</h2>
        <h2>2.고객의 소리 접수,관할 부서/담당자에게 통보</h2>
        <h2>3.공정거래 위원회 고시 소비자 분쟁해결 기준에 의거하여 처리</h2>
      </div>
      <div id='info'>
        <div id='info_icon'>
          <div id='info_icon_detail'>
            <div>
              <img src='./customerSupportimg/info_icon01.gif'></img>
            </div>
              <h4 id='info_title'>FAQ</h4>
            <div id='info_memo'>
              <p>자주하는 질문을</p>
              <p>확인해보세요.</p>
            </div>
            <div id='info_cus_btn_A'>
              <button id='info_cus_btn'>확인하기</button>
            </div>
          </div>
          <div id='info_icon_detail'>
            <div>
              <img src='./customerSupportimg/info_icon02.gif'></img>
            </div>
            <div>
              <h4 id='info_title'>인터넷</h4>
            </div>
            <div id='info_icon_detail_b'>
              <h2>www.ediya.com</h2>
              <h2>상담접수 시간:24시간</h2>
            </div>
            <div id='info_cus_btns'>
              <button id='info_cus_btn'>접수하기</button>
              <button id='info_cus_btn'>조회하기</button>
            </div>
          </div>
          <div id='info_icon_detail'>
            <div>
             <img src='./customerSupportimg/info_icon03.gif'></img>
            </div>
            <div>
              <h4 id='info_title'>전화</h4>
              <p id='info_tel_p'>02-543-6467</p>
            </div>
            <div id='info_icon_detail_a'>
              <h4>고객의 소리 운영시간</h4>
              <p>09:00~18:00 (주말·공휴일 휴무)</p>
            </div>
            <div id='info_icon_detail_aa'>
              <h4>멤버스 APP 이용 문의</h4>
              <p>09:00~22:00 (연중무휴)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default CustomersoundCH;
