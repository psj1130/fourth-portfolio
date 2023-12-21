import React from 'react';
import Modal from 'react-modal';
import '../modal/noticepopup.css';

const Popup = ({ isOpen, imgUrl }) => {
  const customStyles = {
    content: {
      backgroundColor: 'rgba(0, 0, 0, 0.6)',
    },
  };

  return (
    <Modal style={customStyles} className="custom-modal" isOpen={isOpen}>
      <div className='adminpopup-body'>
        <div className="adminpopup-inner">
          <div className="adminpopup-img-container">
            <img src={imgUrl} alt="adminpopup-img"/>
        </div>
      </div>
    </div>
    </Modal>
  );
};

export default Popup;
