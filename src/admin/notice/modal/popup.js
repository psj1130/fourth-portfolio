import React from 'react';
import Modal from 'react-modal';
import '../modal/popup.css';

const Popup = ({ isOpen, imgUrl }) => {
  const customStyles = {
    content: {
      backgroundColor: 'rgba(0, 0, 0, 0.6)',
    },
  };

  // 모달이 열릴 때 스크린 리더가 읽어야 하는 부모 엘리먼트를 설정
  Modal.setAppElement('#root'); // #root는 모달을 렌더링하는 부모 엘리먼트의 ID나 선택자로 바꾸세요

  return (
    <Modal style={customStyles} className="custom-modal" isOpen={isOpen}>
      <div className={`popup ${isOpen ? 'open' : ''}`}>
        <div className="popup-inner">
          <img src={imgUrl} alt="Popup Image" />
          <button onClick={() => isOpen(false)}>닫기</button>
        </div>
      </div>
    </Modal>
  );
};

export default Popup;
