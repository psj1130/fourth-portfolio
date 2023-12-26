import React, { useState } from 'react';
import Modal from 'react-modal';
import LogoutIcon from '@mui/icons-material/Logout';
import axios from 'axios'; // Axios 라이브러리 import
import { API_URL } from '../../../config/serverurl';
import './createmodal.css';

const Createmodal = ({ modalOpen, setModalOpen }) => {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [category, setCategory] = useState('');
  
  const categories = ["구매", "환불", "사용", "단체 및 기업구매", "기타"];
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    const qnadata = {
      question: question,
      answer: answer,
      category: category
    };

    console.log('전송할 데이터:', qnadata);

    try {
      const res = await axios.post(`${API_URL}/qna/add`, qnadata);
      console.log(res.data);
      setModalOpen(false); // 데이터 전송이 성공하면 모달을 닫습니다.
      console.log('Modal closed:', modalOpen); // 이 줄을 추가
    } catch (err) {
      console.log(err);
    }
  };
  
  // 모달이 열려있을 때 question, answer, category 등의 상태 확인

  return (
      <Modal
      className="socialcreatemodal-body"
      isOpen={modalOpen}
      onRequestClose={() => setModalOpen(false)}
      contentLabel="Createmodal"
    >
      <div className="socialcreatemodal-content">
        <div className="socialcreatemodal-top">
          <p className='socialcreatemodal-top-title'>사회 공헌</p>
          <button
            className='socialcreatemodal-btn-style'
            onClick={() => setModalOpen(false)}>
            <LogoutIcon style={{ fontSize: '44px' }} />
          </button>
        </div>
        <div className="socialcreatemodal-main-container">
          <form onSubmit={handleSubmit} encType="multipart/form-data">
            <div className="socialcreatemodal-main-title">
              <input
                className='socialcreatemodal-main-title-style'
                type="text"
                name="title"
                placeholder='제목을 입력해주세요' 
                value={question} 
                onChange={(e) => setQuestion(e.target.value)} 
              />
              <select
                className='socialcreatemodal-main-category-style'
                name="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}>
                <option value="">카테고리를 선택해주세요</option>
                {categories.map((category, index) => (
                  <option key={index} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
            <div className="socialcreatemodal-main-body">
              <textarea
                className='socialcreatemodal-main-body-style'
                placeholder='내용을 입력해주세요'
                type="text"
                name="body"
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}/>
            </div>
            <div className="socialcreatemodal-bottom-body">
              <div className='socialcreatemodal-botton-file-con'>

              </div>
              <button className='socialcreatemodal-form-btn' type="submit">업로드</button>
            </div>
          </form>
        </div>
      </div>
    </Modal>
  );
};

export default Createmodal;
