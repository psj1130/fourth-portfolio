import React, {useState} from 'react';
import './declaration.css';
import Canclecard from './subcard/cancelcard';
import Requestcard from './subcard/requestcard';
import Reportcard from './subcard/reportcard';

function Declaration() {
  const [selectList, setSelectlist] = useState('cancel');

  const selectBox = (e) => {
    switch (selectList) {
      case 'cancel':
        return <Canclecard />;
      case 'request':
        return <Requestcard />;
      case 'report':
        return <Reportcard />;
      default:
        return null;
    }
  };
  
  return(
    <div id="declaration-body">
      <div id="declaration-container">
        <div id="declaration-con-text">
            <h1 id='declaration-con-title-text'>분실신고 & 환불신청</h1>
              <div id="declaration-info-text">
                <p>분실신고는 신속하게! 환물신청은 정확하게!</p>
              </div>
              <div id="declaration-btn">
                <div id="declaration-btn-con">
                  <span className='declaration-btn-con-lists'>
                    <a href='/card/giftcardrouters/'>기프트카드</a>
                  </span>
                  <span className='declaration-btn-con-lists'>
                    <a href="https://brand.naver.com/ediyagift">모바일 상품권</a>
                  </span>
                  <span className='declaration-btn-con-lists'>
                    <a href='/card/giftcardrouters/giftbuy'>단체·기업 구매</a>
                  </span>
                </div>
              </div>
          </div>
          <div id="declaration-report-container">
            <div id="declaration-report-link">
              <span>HOME</span>
              <span>이디야 소식</span>
              단체·기업 구매
            </div>
          <div id="declaration-report-boxcontainer">
            <div id="declaration-report-boxlist">
            {/* setSelectlist를 이용해서 컴포넌트 변환을 하고 
            탬플릿 리터널 표기법으로 active 조건문 걸어서클릭 된 div만 색상 변경 */}
              <div
                onClick={() => setSelectlist('cancel')}
                className={`report-box ${selectList === 'cancel' ? 'active' : ''}`}>
                구매 취소
              </div>
              <div
                onClick={() => setSelectlist('request')} 
                className={`report-box ${selectList === 'request' ? 'active' : ''}`}>
                <p>환불 신청</p>
              </div>
              <div
                onClick={() => setSelectlist('report')} 
                className={`report-box ${selectList === 'report' ? 'active' : ''}`}>
                <p>분실 신고</p>
              </div>
            </div>
            <div id="report-detail-container">
              {selectBox()}
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default Declaration;