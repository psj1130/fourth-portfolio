import React, {useState} from 'react'
import '../question/questionmain.css'


function QuestionMain() {

  const [content, setContent] = useState();
  
  const onchanglist = (e) => {
    setContent(e.currentTarget.value);
  }

  const tapMenu = [
    {key:1, value:"전체"},
    {key:2, value:"구매"},
    {key:3, value:"환불"},
    {key:4, value:"사용"},
    {key:5, value:"단체 및 기업구매"},
    {key:6, value:"기타"},
  ]

  const options = [
    {key:1, value:"전체"},
    {key:2, value:"제목"},
    {key:3, value:"내용"},
  ]

  return(
    <div className='question-body'>
      <div className="question-container">
        <div className="question-con-text">
          <h1 className='con1-title-text'>자주하는질문</h1>
            <div className="question-info-text">
              <p>이디야를 이용하시는 고객님들이 자주 질문하시는 내용입니다.</p>
            </div>
            <div className="question-btn">
              <div className="question-btn-con">
                <span className='giftcard-btn-con-lists'>
                  <a href='/card/giftcardrouters/giftcard/'>기프트카드</a>
                </span>
                <span className='giftcard-btn-con-lists'>
                  <a href="#noen">모바일 상품권</a>
                </span>
                <span className='giftcard-btn-con-lists'>
                  <a href='/card/giftcardrouters/giftcard/giftbuy'>단체·기업 구매</a>
                </span>
              </div>
            </div>
        </div>
          <div className="question-con">
            <div className="check-guide-link">
              <span>HOME</span>
              <span>기프트카드</span>
              FAQ
            </div>
              <div className="question-search-container">
                <div className="question-drowdown-box">
                  <select className='question-drowdown-list' onChange={onchanglist} value={content}>
                    {options.map((item)=>(
                      <option key={item.key} value={item.key}>{item.value}</option>
                    ))}
                  </select>
                </div>
                <div className="question-search-box">
                  <input 
                  className='question-serch-input'
                  type="text" />
                    <button className='question-serch-result'>
                      <img src="/images/cardlist/icon_search.gif"/>
                    </button>
                </div>
              </div>
              <div className='question-detail-container'>
                <div className='question-dataile-tapcontainer'>
                {tapMenu.map((item, index)=>(
                    <div key={item.key} value={item.key} className='question-detail-list'>
                      <p>{item.value}</p>
                    </div>
                  ))}
                </div>
              </div>
              <h1>컴포넌트로(6개 제작) 드롭다운 제작해서 클릭시 Link로 컴포넌트 이동</h1>
          </div>
      </div>
    </div>
  );
}

export default QuestionMain;
