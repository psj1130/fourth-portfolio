import React from 'react';
import Modal from 'react-modal';
import '../modal/integratedpopup.css';

const Integratedpopup = ({ isOpen, bodydetail, imgUrl }) => {
  
  const appElement = document.getElementById('ad_suggestion_container'); // Ad_event 컴포넌트의 최상위 요소 ID로 변경

  const customStyles = {
    content: {
      backgroundColor: 'rgba(0, 0, 0, 0.6)',
    },
  };  
  return (
    <Modal style={customStyles} className="custom-modal" isOpen={isOpen} appElement={appElement}>
      <div className='integratedpopup-body'>
        <div className="integratedpopup-inner">
          <div className="integratedpopup-img-container">
            <p style={{ whiteSpace: 'pre-line' }}>{bodydetail}</p>
            <img src={imgUrl} alt="img" />
        </div>
      </div>
    </div>
    </Modal>
  );
};

export default Integratedpopup;
