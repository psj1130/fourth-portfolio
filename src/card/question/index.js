import React, {useState} from 'react'
import '../question/questionmain.css'
import { Link } from 'react-router-dom';

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
    <div id='question-body'>
      <div id="question-container">
        <div id="question-con-text">
          <h1 id='con1-title-text'>잔액조회</h1>
            <div id="info-text">
              <p>빠르고 간편하게 잔액을 확인해보세요</p>
            </div>
            <div id="question-btn">
              <div id="question-btn-con">
                <span className='btn-con-lists'>
                  <a href='#none'>기프트카드</a>
                </span>
                <span className='btn-con-lists'>
                  <a href="#noen">모바일 상품권</a>
                </span>
                <span className='btn-con-lists'>
                  <a href='#none'>단체·기업 구매</a>
                </span>
              </div>
            </div>
        </div>
          <div id="question-con">
            <div id="check-guide-link">
              <span>HOME</span>
              <span>기프트카드</span>
              FAQ
            </div>
              <div id="question-search-container">
                <div id="question-drowdown-box">
                  <select id='question-drowdown-list' onChange={onchanglist} value={content}>
                    {options.map((item)=>(
                      <option key={item.key} value={item.key}>{item.value}</option>
                    ))}
                  </select>
                </div>
                <div id="question-search-box">
                  <input 
                  id='question-serch-input'
                  type="text" />
                    <button id='question-serch-result'>
                      <img src="/images/cardlist/icon_search.gif"/>
                    </button>
                </div>
              </div>
              <div id='question-detail-container'>
                <div id='question-dataile-tapcontainer'>
                {tapMenu.map((item, index)=>(
                  <Link key={item.key} to='/'>
                    {/* Link 부분에 변수를 넣어야하나? */}
                    <div key={item.key} value={item.key} id='question-detail-list'>
                      <p>{item.value}</p>
                    </div>
                  </Link>
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
