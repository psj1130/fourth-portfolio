import React, { useEffect, useState, useRef } from 'react'
import Modal from 'react-modal';
import axios from 'axios';
import { API_URL } from '../../config/serverurl';
import useAsync from '../../customHook/useAsync';
import './menumodal.css'
import { useParams } from 'react-router';

async function getmd(id) {
  const res = await axios.get(`${API_URL}/admin/md/${id}`);
  console.log(res.data);
  return res.data;
}

const MdUpdateInput = (props) => {
  const images = props.md.img_url.split(',');
  const [previewImg, setPreviewImg ] = useState(images[0])
  const [previewImg2, setPreviewImg2 ] = useState(images[1])
  const [seq, setSeq] = useState(props.md.seq);
  const [price, setPrice] = useState(props.md.price);
  const [name, setName] = useState(props.md.name);
  const [eng, setEng] = useState(props.md.eng_name);
  const [textValue, setText] = useState(props.md.info);
  const imgRef = useRef();

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
      <div id='menu-modal-container update-container'>
        <div className='menu-modal-header'>
          <h1>상품 수정</h1>
        </div>
        <div className='menu-add-image-container'>
          <div className='menu-add-image' >
            <label htmlFor='img1'><img src={previewImg} alt='image'></img></label>
            <input ref={imgRef} id='img1' type='file' accept="image/*" onChange={(e) => {
              InsertImg(e);
            }}></input>
          </div>
          <div className='menu-add-image' >
            <label htmlFor='img2'><img src={previewImg2 ? previewImg : process.env.PUBLIC_URL +'/images/icon/camera.png'} alt='image'></img></label>
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
                  <input type='number' placeholder='보여주기 순서' value={seq} onChange={(e) => {
                    setSeq(e.target.value);
                  }}/>
              </div>
            </div>
            <div className='menu-price'>
              <p>가격( 원)</p>
              <input type='number' placeholder='상품의 가격을 입력해주세요' value={price} onChange={(e) => {
                setPrice(e.target.value);
              }}/>
            </div>
            <div className='menu-name'>
              <p>상품 이름</p>
              <input type='text' placeholder='상품의 이름을 입력해주세요' value={name} onChange={(e) => {
                  setName(e.target.value);
                }}/>
              <p>상품 영어 이름</p>
              <input type='text' placeholder='상품의 영어 이름을 입력해주세요' value={eng} onChange={(e) => {
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
                const data = {
                  seq: seq,
                  name: name,
                  eng_name: eng,
                  price: price,
                  info: textValue,
                }
                
                await axios.patch(`${API_URL}/admin/update/md/${props.id}`, data)
                  .then((res) => {
                    window.location.replace('/administrator/md');
                  })
                  .catch((err) => {
                    console.log(err);
                  })
          }}>수정하기</button>
        </div>
      </div>
  );
}


const MdUpdate = () => {
  const { id } = useParams();
  const [state] = useAsync(() => getmd(id), [id]);
  const { loading, data: md, error } = state;

  if (loading) return <div>로딩중입니다.....</div>;
  if (error) return <div>에러가 발생했습니다.</div>;
  if (!md) return null;
  
  return(
    <MdUpdateInput md={md} id={id}/>
  );
}

export default MdUpdate;