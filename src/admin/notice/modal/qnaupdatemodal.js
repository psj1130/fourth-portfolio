import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import LogoutIcon from '@mui/icons-material/Logout';
import axios from 'axios'; // Axios 라이브러리 import
import { API_URL } from '../../../config/serverurl';
import './createmodal.css';

const Updatemodal = ({ isOpen, onClose, updateId }) => {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [category, setCategory] = useState('');
  
  const categories = ["구매", "환불", "사용", "단체 및 기업구매", "기타"];

  Modal.setAppElement('#root');

  // Modal창이 열릴 때 데이터를 불러옴
  useEffect(() => {
    if (isOpen && updateId) {
      fetchUpdate(updateId);
    }
  }, [isOpen, updateId]);

  const fetchUpdate = async (postId) => {
    try {
      const res = await axios.get(`${API_URL}/qna/${postId}`);
      const { question, answer, category } = res.data;
      setQuestion(question);
      setAnswer(answer);
      setCategory(category);
      console.log(res.data);
    } catch (err) {
      console.log('id 불러오기 실패 오류 발생', err);
    }
  }

  const UpdateSubmit = async (e) => {
    e.preventDefault();
    console.log('들어온 updateId 값 : ', updateId);

    const UpDateData = {
      id: updateId,
      question: question,
      answer: answer,
      category: category
    };

    const UpDateres = await axios.put(`${API_URL}/qna/patch/${updateId}`, UpDateData);
      console.log('수정을 보낸 데이터', UpDateres);

      // 모달 닫기 등 추가 동작 수행
      onClose(false);
  };

  return (
    <Modal
      className="socialcreatemodal-body"
      isOpen={isOpen}
      onRequestClose={() => onClose(false)}
      contentLabel="updatemodal"
    >
      <div className="socialcreatemodal-content">
        <div className="socialcreatemodal-top">
          <p className='socialcreatemodal-top-title'>게시물 수정(QnA)</p>
          <button
            className='socialcreatemodal-btn-style'
            onClick={() => onClose(false)}>
            <LogoutIcon style={{ fontSize: '44px'}}/>
          </button>
        </div>
        <div className="socialcreatemodal-main-container">
          <form onSubmit={UpdateSubmit} encType="multipart/form-data">
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

export default Updatemodal;
