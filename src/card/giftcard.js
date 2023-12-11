import { Link } from 'react-router-dom';
import './giftcard.css'
import React from 'react';

function Giftcard() {

  return(
    <div id="giftcard-body">
      <div id="giftcard-con1">
        <div id="giftcard-con1-text">
          <h1 id='con1-title-text'>이디야 기프트카드</h1>
            <div id="info-text">
              <p><b>Everyon</b> 누구에게나 </p>
              <p><b>Anytim</b> 언제 어디서나</p>
              <p><b>Sincerel</b> 진심을 담아</p>
            </div>
            <div id="giftcard-btn">
              <div id="giftcard-btn-con">
                <span className='btn-con-lists'>
                  <a href='#none'>기프트카드</a>
                </span>
                <span className='btn-con-lists'>
                  <a href="#noen">모바일 상품권</a>
                </span>
                <span className='btn-con-lists'>
                  <a href='/card/giftcard/buy'>단체·기업 구매</a>
                </span>
              </div>
            </div>
        </div>
      </div>
      <div id="giftcard-con2">
        <div className='giftcard-cons'>
          <div className="cons-left">
              <div className='cons-text-box'>
                <h1 className='cons-text-after'>기프트카드 소개</h1>
                <p className='text-after-style'>작지만 가볍지 않은<br/>
                당신의 마음을 전합니다.</p>
                <a href='/card/giftcard/cardintroduce'>
                  <div className='giftcard-introduce'>
                    <p>기프트카드 소개</p>
                  </div>
                </a>
              </div>
          </div>
        </div>
      </div>
      <div id="giftcard-con3">
        <div className='giftcard-cons'>
          <div className="cons-right">
              <div className='cons-text-box'>
                <h1 className='cons-text-after'>잔액조회</h1>
                <p className='text-after-style'>빠르고 간편하게 잔액을 확인해보세요</p>
                <a href='/card/giftcard/check'>
                  <div className='giftcard-introduce'>
                    <p>잔액조회</p>
                  </div>
                </a>
              </div>
            </div>
        </div>
      </div>
      <div id="giftcard-con4">
        <div className='giftcard-cons'>
          <div className="cons-left">
            <div className="cons-left">
                <div className='cons-text-box'>
                  <h1 className='cons-text-after'>분실신고 & 환불신청</h1>
                    <a href='#none'>
                      <div className='giftcard-introduce'>
                        <p>기프트카드 소개</p>
                      </div>
                    </a>
                </div>
            </div>
          </div>
        </div>
      </div>
      <div id="giftcard-con5">
        <div className='giftcard-cons'>
          <div className="cons-right">
                <div className='cons-text-box'>
                  <h1 className='cons-text-after'>자주하는 질문</h1>
                  <a href='#none'>
                    <div className='giftcard-introduce'>
                      <p>기프트카드 소개</p>
                    </div>
                  </a>
                </div>
            </div>
        </div>
      </div> 
    </div>
  );
}

export default Giftcard;