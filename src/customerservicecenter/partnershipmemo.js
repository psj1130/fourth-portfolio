import React, { useState } from 'react';
import './partnershipmemo.css';
import PartnershipRobot from './partnershipRobot';


const Test = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [name,setName] = useState('');
  const [firstNumber, setfirstNumber] = useState('');
  const [middleNumber, setMiddleNumber] = useState('');
  const [lastNumber, setLastNumber] = useState('');
  const [emailId, setEmailId] = useState('');
  const [selectedDomain, setSelectedDomain] = useState('');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);
  const [spamCheck, setSpamCheck] = useState(false);

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setSelectedOptions([...selectedOptions, value]);
    } else {
      const updatedOptions = selectedOptions.filter((option) => option !== value);
      setSelectedOptions(updatedOptions);
    }
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const contactInfo = `${firstNumber}-${middleNumber}-${lastNumber}`;
    const email = `${emailId}@${selectedDomain}`;
    const formData = {
      name,
      number: `${firstNumber} ${middleNumber} ${lastNumber}`,
      email,
      content,
      selectedFile,
      spamCheck,
    };
    console.log('제출된 데이터:', formData);
  };

  const emailDomains = [
    'naver.com',
    'gmail.com',
    'daum.com',
    'nate.com',
    // 원하는 이메일 도메인을 추가하세요
  ];

  return (
    <div id='partnershipmemo_main'>
      <form id='partnershipmemo_container' onSubmit={handleSubmit}>
      <label id='par'>
        <span id='partnershipmemo_title'>선택 </span>
        <div id='par_a'>
          <label id='par'>
            <input
              type="checkbox"
              value="제휴"
              checked={selectedOptions.includes('제휴')}
              onChange={handleCheckboxChange}
            />
            제휴
          </label>
          <label id='par'>
            <input
              type="checkbox"
              value="제안"
              checked={selectedOptions.includes('제안')}
              onChange={handleCheckboxChange}
            />
            제안
          </label>
        </div>
      </label>
        <label id='par'>
          <span id='partnershipmemo_title'>이름 </span>
          <input
            id='partnershipmemo_memo'
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <br />
        <label id='par'>
          <span id='partnershipmemo_title'>연락처 </span>
          <input
            id='partnershipmemo_memo2'
            type="text"
            value={firstNumber}
            onChange={(e) => setfirstNumber(e.target.value)}
          />
            <div id='partnershipmemo_hyphen'>-</div>
          <input
            id='partnershipmemo_memo2'
            type="text"
            value={middleNumber}
            onChange={(e) => setMiddleNumber(e.target.value)}
          />
            <div id='partnershipmemo_hyphen'>-</div>
          <input
            id='partnershipmemo_memo2'
            type="text"
            value={lastNumber}
            onChange={(e) => setLastNumber(e.target.value)}
          />
        </label>
        <br />
        <label id='par'>
          <span id='partnershipmemo_title'>E-Mail </span> 
          <input
            id='partnershipmemo_memo3'
            type="text"
            value={emailId}
            onChange={(e) => setEmailId(e.target.value)}
          />
            <div id='partnershipmemo_hyphen'>@</div>
          <select id='partnershipmemo_memo5'
            value={selectedDomain}
            onChange={(e) => setSelectedDomain(e.target.value)}
          >
            <option  value="">이메일 선택</option>
            {emailDomains.map((domain, index) => (
              <option key={index} value={domain}>{domain}</option>
            ))}
          </select>
        </label>
        <br />
        <label id='par'>
          <span id='partnershipmemo_title'>제목 </span>
          <input
            id='partnershipmemo_memo'
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
        <br />
        <label id='par'>
          <span id='partnershipmemo_title'>내용 </span>
          <textarea
            id='partnershipmemo_memo4'
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </label>
        <br />
        <label id='par'>
          <span id='partnershipmemo_title'>파일 첨부 </span>
          <input
            id='partnershipmemo_memo6'
            type="file"
            onChange={handleFileChange}
          />
        </label>
        <br />
        <label id='par_a'>
          <span id='partnershipmemo_title'>스팸방지 체크 </span>
          <PartnershipRobot></PartnershipRobot>
          {/* <input
            type="checkbox"
            checked={spamCheck}
            onChange={(e) => setSpamCheck(e.target.checked)}
          /> */}
        </label>
        
        <br />
        <div id='partnershipmemo_notice'>
          <p>※ 해당 페이지는 마케팅, 상품, 서비스 등의 제휴/제안 페이지입니다. CS 관련 문의는 고객의 소리를 이용해</p>
          <p>주시기 바랍니다.</p>
        </div>
        <br />
        <div id='partnership_btns_main'>
          <div id='partnership_btns'>
            <button id='partnership_btn_a' type="submit">취소</button>
            <button id='partnership_btn_b' type="submit">등록</button>
          </div>
        </div>
        
      </form>
    </div>
  );
};

export default Test;
