import React, { useState, useRef } from 'react'
import Modal from 'react-modal';
import axios from 'axios';
import { API_URL } from '../../config/contansts';
import './menumodal.css'


const MdModal = ({isOpen}) => {
  const [previewImg, setPreviewImg ] = useState(process.env.PUBLIC_URL + '/images/icon/camera.png')
  const [previewImg2, setPreviewImg2 ] = useState(process.env.PUBLIC_URL + '/images/icon/camera.png')
  const [seq, setSeq] = useState(0);
  const [price, setPrice] = useState(0);
  const [name, setName] = useState('');
  const [eng, setEng] = useState('');
  const [textValue, setText] = useState('');
  const imgRef = useRef();

  const customStyles = {
    content: {
      backgroundColor: 'rgba(0, 0, 0, 0.6)',
    },
  };

  const InsertImg = (e) => {
    const reader = new FileReader()
    console.log(e.target.files[0]);
    if(e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0])
    }
  
    reader.onloadend = () => {
      const previewImgUrl = reader.result;
      if(previewImgUrl) {
        setPreviewImg(previewImgUrl)
      }
    }
  }
  const InsertImg2 = (e) => {
    const reader = new FileReader()
    console.log(e.target.files[0]);
    if(e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0])
    }
    reader.onloadend = () => {
      const previewImgUrl2 = reader.result;
      // console.log(previewImgUrl);
      if(previewImgUrl2) {
        setPreviewImg2(previewImgUrl2)
      }
    }
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
          }}></i></div>
          <h1>상품 추가하기</h1>
        </div>
        <div className='menu-add-image-container'>
          <div className='menu-add-image' >
            <label htmlFor='img1'><img src={previewImg} alt='1'></img></label>
            <input ref={imgRef} id='img1' type='file' accept="image/*" onChange={(e) => {
              InsertImg(e);
            }}></input>
          </div>
          <div className='menu-add-image' >
            <label htmlFor='img2'><img src={previewImg2} alt='1'></img></label>
            <input id='img2' type='file' accept="image/*" onChange={(e) => {
              InsertImg2(e);
            }}></input>
          </div>
        </div>
        <div className='menu-add-input-wrapper'>
          <div className='menu-add-input-container'>
            <div className='menu-selection'>
              <div className='menu-seq'>
                <p>보여주기 순서 <span>＊낮을 수록 앞에 배치</span></p>
                  <input type='number' placeholder='보여주기 순서' onChange={(e) => {
                    setSeq(e.target.value);
                  }}/>
              </div>
            </div>
            <div className='menu-price'>
              <p>가격( 원)</p>
              <input type='number' placeholder='상품의 가격을 입력해주세요' onChange={(e) => {
                setPrice(e.target.value);
              }}/>
            </div>
            <div className='menu-name'>
              <p>상품 이름</p>
              <input type='text' placeholder='상품의 이름을 입력해주세요' onChange={(e) => {
                  setName(e.target.value);
                }}/>
              <p>상품 영어 이름</p>
              <input type='text' placeholder='상품의 영어 이름을 입력해주세요' onChange={(e) => {
                  setEng(e.target.value);
                }}/>
            </div>
            <div className='menu-info'>
              <p>상품 정보</p>
              <textarea placeholder='상품 정보를 입력해주세요' value={textValue} onChange={(e) => {
                setText(e.target.value);
              }}/>
            </div>
          </div>
        </div>
        <div className='modal-button-container'>
          <button type='click' onClick={async () => {
            const upload1 = document.getElementById('img1').files[0];
            const upload2 = document.getElementById('img2').files[0];
            const formData = new FormData()
            formData.append('imageFile', upload1);
            formData.append('imageFile', upload2);
            await axios.post(`${API_URL}/menu/upload/md/images`, formData)
              .then(res => {
                console.log(res.data.image_path);
                const data = {
                  seq: seq,
                  name: name,
                  eng_name: eng,
                  price: price,
                  info: textValue,
                  img_url: res.data.image_path,
                }
                
                axios.post(`${API_URL}/admin/add/md`, data)
                  .then((res) => {
                    window.location.replace('/administrator/md');
                  })
                  .catch((err) => {
                    console.log(err);
                  })
              })
              .catch(err => {
                console.log(err);
              })
            
          }}>추가하기</button>
        </div>
      </div>
    </Modal>
  );
}

export default MdModal;