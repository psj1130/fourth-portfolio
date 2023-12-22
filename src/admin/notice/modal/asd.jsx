

import React, { useEffect, useState, useRef } from 'react'
import Modal from 'react-modal';
import axios from 'axios';
import { API_URL } from '../../config/serverurl';
import './menumodal.css'


const MenuModal = ({isOpen}) => {
  const [img1, setImage1] = useState(null);
  const [previewImg, setPreviewImg ] = useState(process.env.PUBLIC_URL + '/images/icon/camera.png')
  const [img2, setImage2] = useState(null);
  const [previewImg2, setPreviewImg2 ] = useState(process.env.PUBLIC_URL + '/images/icon/camera.png')
  const [type, setType] = useState('drink');
  const [code, setCode] = useState(0);
  const [seq, setSeq] = useState(0);
  const [price, setPrice] = useState(0);
  const [name, setName] = useState('');
  const [eng, setEng] = useState('');
  const [textValue, setText] = useState('');
  const [kcal, setKcal] = useState(0);
  const [sugar, setSugar] = useState(0);
  const [protein, setProtein] = useState(0);
  const [sf, setSf] = useState(0);
  const [na, setNa] = useState(0);
  const [caffein, setCaffein] = useState(0);
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
          <h1>메뉴 추가하기</h1>
        </div>
        <div className='menu-add-image-container'>
          <div className='menu-add-image' >
            <label htmlFor='img1'><img src={previewImg} alt='image'></img></label>
            <input ref={imgRef} id='img1' type='file' accept="image/*" onChange={(e) => {
              InsertImg(e);
            }}></input>
          </div>
          <div className='menu-add-image' >
            <label htmlFor='img2'><img src={previewImg2} alt='image'></img></label>
            <input id='img2' type='file' accept="image/*" onChange={(e) => {
              InsertImg2(e);
            }}></input>
          </div>
        </div>
        <div className='menu-add-input-wrapper'>
          <div className='menu-add-input-container'>
            <div className='menu-selection'>
              <div className='menu-type'>
                <p>종류</p>
                <select onChange={(e) => {
                  setType(e.target.value);
                }}>
                  <option key='drink'>drink</option>
                  <option key='bread'>bread</option>
                  <option key='sauce'>sauce</option>
                </select>
              </div>
              <div className='menu-code'>
                <p>메뉴 코드</p>
                <input type='number' placeholder='메뉴 코드' onChange={(e) => {
                  setCode(e.target.value);
                }}/>
              </div>
              <div className='menu-seq'>
                <p>보여주기 순서 <span>＊낮을 수록 앞에 배치</span></p>
                  <input type='number' placeholder='보여주기 순서' onChange={(e) => {
                    setSeq(e.target.value);
                  }}/>
              </div>
            </div>
            <div className='menu-price'>
              <p>가격( 원)</p>
              <input type='number' placeholder='메뉴의 가격을 입력해주세요' onChange={(e) => {
                setPrice(e.target.value);
              }}/>
            </div>
            <div className='menu-name'>
              <p>메뉴 이름</p>
              <input type='text' placeholder='메뉴의 이름을 입력해주세요' onChange={(e) => {
                  setName(e.target.value);
                }}/>
              <p>메뉴 영어 이름</p>
              <input type='text' placeholder='메뉴의 영어 이름을 입력해주세요' onChange={(e) => {
                  setEng(e.target.value);
                }}/>
            </div>
            <div className='menu-info'>
              <p>메뉴 정보</p>
              <textarea placeholder='메뉴 정보를 입력해주세요' value={textValue} onChange={(e) => {
                setText(e.target.value);
              }}/>
            </div>
            <div className='menu-ingredient'>
              <div className='grid 1'>
                <p>칼로리</p>
                <input type='number' placeholder='kcal' onChange={(e) => {
                  setKcal(e.target.value);
                }}/>
              </div>
              <div className='grid 2'>
                <p>당류</p>
                <input type='number' placeholder='g' onChange={(e) => {
                  setSugar(e.target.value);
                }}/>
              </div>
              <div className='grid 3'>
                <p>단백질</p>
                <input type='number' placeholder='g' onChange={(e) => {
                  setProtein(e.target.value);
                }}/>
              </div>
              <div className='grid 4'>
                <p>포화지방</p>
                <input type='number' placeholder='g' onChange={(e) => {
                  setSf(e.target.value);
                }}/>
              </div>
              <div className='grid 5'>
                <p>나트륨</p>
                <input type='number' placeholder='mg' onChange={(e) => {
                  setNa(e.target.value);
                }}/>
              </div>
              <div className='grid 6'>
                <p>카페인</p>
                <input type='number' placeholder='mg' onChange={(e) => {
                  setCaffein(e.target.value);
                }}/>
              </div>
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
            await axios.post(`${API_URL}/menu/upload/images`, formData)
              .then(res => {
                console.log(res.data.image_path);
                const data = {
                  type: type,
                  code: code,
                  seq: seq,
                  name: name,
                  eng_name: eng,
                  price: price,
                  info: textValue,
                  img_url: res.data.image_path,
                  ingredient_cal: kcal,
                  ingredient_sugar: sugar,
                  ingredient_protein: protein,
                  ingredient_sf: sf,
                  ingredient_na: na,
                  ingredient_caffein: caffein
                }
                
                axios.post(`${API_URL}/admin/add/menu`, data)
                  .then((res) => {
                    console.log(res.data);
                    window.location.replace('/');
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

export default MenuModal;