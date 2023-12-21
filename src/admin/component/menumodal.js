import React, { useEffect, useState } from 'react'
import Modal from 'react-modal';
import './menumodal.css'

const MenuModal = ({isOpen}) => {
  const [imgSrc, setImage] = useState(null);

  const customStyles = {
    content: {
      backgroundColor: 'rgba(0, 0, 0, 0.6)',
    },
  };

  useEffect(() => {
    preview();

    return () => preview();
  });

  const preview = () => {
    if (!imgSrc) return false;

    const imagebox = document.querySelector('.menu-add-image');

    const reader = new FileReader();

    reader.onload = () =>
      (imagebox.style.backgroundImage = `url(${reader.result})`);

    reader.readAsDataURL(imgSrc[0]);
  }

  return(
    <Modal
    style={customStyles}
    className="custom-menu-modal" 
    isOpen={isOpen}>
      <div id='menu-modal-container'>
        <div className='menu-modal-header'>
          <div className='modal-x-button' ><i className='xi-close' onClick={() => {
            isOpen(false);
            setImage(null);
          }}></i></div>
          <h1>메뉴 추가하기</h1>
        </div>
        <div className='menu-add-wrapper'>
          <div className='menu-add-container'>
            <div className='menu-add-image' >
              <input type='file' onChange={(e) => {
                console.log(e.target.files[0]);
                setImage(e.target.files);
              }}></input>
            </div>
            <div className='menu-add-image' >
              <input type='file' onChange={(e) => {
                console.log(e.target.files[0]);
                setImage(e.target.files);
              }}></input>
            </div>
            <div className='menu-add-image' >
              <input type='file' onChange={(e) => {
                console.log(e.target.files[0]);
                setImage(e.target.files);
              }}></input>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
}

export default MenuModal;