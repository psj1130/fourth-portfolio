import React from "react";
import './check.css'

function Check() {

  return(
    <div id="check-body">
      <div id="check-con">
        <div id="check-con-text">
          <h1 id='con1-title-text'>잔액조회</h1>
            <div id="info-text">
              <p>빠르고 간편하게 잔액을 확인해보세요</p>
            </div>
            <div id="check-btn">
              <div id="check-btn-con">
                <span className='btn-con-lists'>
                  <a href='#none'>기프트카드</a>
                </span>
                <span className='btn-con-lists'>
                  <a href="#noen">모바일 상품권</a>
                </span>
                <span className='btn-con-lists'>
                  <a href='/card/check/check'>단체·기업 구매</a>
                </span>
              </div>
            </div>
        </div>
          <div id="check-container">
            <div id="check-guide-link">
              <span>HOME</span>
              <span>기프트카드</span>
              잔액조회
            </div>
              <div id="check-num-con">
                <h2 id="check-num-title">기프트카드 조회</h2>
                  <div id="check-num-in-con">
                    <span id='num-in-text'>기프트카드 번호 16자리를 입력해주세요.</span>
                      <div id="num-input-box">
                        <input 
                        placeholder="****"
                        type="tel"/>
                          <span className="number-telsel">-</span>
                        <input
                        placeholder="****"
                        type="tel"/>
                          <span className="number-telsel">-</span>
                        <input
                        placeholder="****"
                        type="tel"/>
                         <span className="number-telsel">-</span>
                        <input
                        placeholder="****"
                        type="tel"/>
                        <button id="check-result">조회하기</button>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    </div>
  );
}

export default Check;