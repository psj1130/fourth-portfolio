import React, { useState } from 'react';
import './all.css';

function Show(props) {
  return (
    <dl className='all-a-box'>
      <dt>A</dt>
      <ul className='all-a-subbox'>
        {/* 정규표현식을 사용하여 마침표('.') 뒤에 줄 바꿈 문자('\n')을 추가합니다. */}
        {props.QnAstate.answer.split(/(?<=\.)/).map((sentence, sentenceIndex) => (
          <li key={sentenceIndex}>
            {sentence}
            {/* 마지막 문장이 아닌 경우에만 문장 뒤에 줄 바꿈 문자를 추가합니다. */}
            {sentenceIndex < props.QnAstate.answer.split(/(?<=\.)/).length - 1 && <br />}
          </li>
        ))}
      </ul>
    </dl>
  );
}

function All(props) {
  const [openIndex, setOpenIndex] = useState(null);

  const showhide = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // const QnAcategory = props.QnAdata.filter(item => item.category === '구매');
  // 이걸로 props 받은거 변수 재정의 하고 filter속성을 사용해서 걸러서 풀면됨

  return (
    <div className='all-container'>
      <ul className='all-list-box'>
        {props.QnAdata.map((item, index) => (
          <li key={index} className='all-box-container'  onClick={() => showhide(index)}>
            <dl className='all-q-box'>
              <dt>Q</dt>
              <dd>{item.question}</dd>
              <dd></dd>
            </dl>
            {openIndex === index && <Show QnAstate={item} />}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default All;
