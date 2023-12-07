import './giftcard.css'

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
                  <a href="#none">기프트카드</a>
                </span>
                <span className='btn-con-lists'>
                  <a href="#noen">모바일 상품권</a>
                </span>
                <span className='btn-con-lists'>
                  <a href="#noen">단체˙기업 구매</a>
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
              </div>
          </div>
        </div>
      </div>
      <div id="giftcard-con3">
        <div className='giftcard-cons'>

        </div>
      </div>
      <div id="giftcard-con4">
        <div className='giftcard-cons'>
          <div className="cons-left">

          </div>
        </div>
      </div>
      <div id="giftcard-con5">
        <div className='giftcard-cons'>

        </div>
      </div>
    </div>
  );
}

export default Giftcard;