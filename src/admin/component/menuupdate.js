import React, { useState, useRef } from 'react'
import axios from 'axios';
import { API_URL } from '../../config/serverurl';
import './menumodal.css'
import { useParams } from 'react-router';
import useAsync from '../../config/useAsync';

async function getmenu(id) {
  const res = await axios.get(`${API_URL}/admin/menu/${id}`);
  console.log(res);
  return res.data;
}

const UpdateInput = (props) => {
  const images = props.menu.img_url.split(',');
  console.log(typeof(props.menu.ingredient_cal));
  const [previewImg, setPreviewImg ] = useState(images[0]);
  const [previewImg2, setPreviewImg2 ] = useState(images[1]);
  const [type, setType] = useState('drink');
  const [code, setCode] = useState(props.menu.code);
  const [seq, setSeq] = useState(props.menu.seq);
  const [price, setPrice] = useState(props.menu.price);
  const [name, setName] = useState(props.menu.name);
  const [eng, setEng] = useState(props.menu.eng_name);
  const [textValue, setText] = useState(props.menu.info);
  const [kcal, setKcal] = useState(parseInt(props.menu.ingredient_cal));
  const [sugar, setSugar] = useState(parseInt(props.menu.ingredient_sugar));
  const [protein, setProtein] = useState(parseInt(props.menu.ingredient_protein));
  const [sf, setSf] = useState(parseInt(props.menu.ingredient_sf));
  const [na, setNa] = useState(parseInt(props.menu.ingredient_na));
  const [caffein, setCaffein] = useState(parseInt(props.menu.ingredient_caffein));
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
  return (
    <div id='menu-modal-container update-container'>
        <div className='menu-modal-header'>
          <h1>메뉴 수정하기</h1>
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
                <input type='number' placeholder='메뉴 코드' value={code} onChange={(e) => {
                  setCode(e.target.value);
                }}/>
              </div>
              <div className='menu-seq'>
                <p>보여주기 순서 <span>＊낮을 수록 앞에 배치</span></p>
                  <input type='number' placeholder='보여주기 순서' value={seq} onChange={(e) => {
                    setSeq(e.target.value);
                  }}/>
              </div>
            </div>
            <div className='menu-price'>
              <p>가격( 원)</p>
              <input type='number' placeholder='메뉴의 가격을 입력해주세요' value={price} onChange={(e) => {
                setPrice(e.target.value);
              }}/>
            </div>
            <div className='menu-name'>
              <p>메뉴 이름</p>
              <input type='text' placeholder='메뉴의 이름을 입력해주세요' value={name} onChange={(e) => {
                  setName(e.target.value);
                }}/>
              <p>메뉴 영어 이름</p>
              <input type='text' placeholder='메뉴의 영어 이름을 입력해주세요' value={eng} onChange={(e) => {
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
                <input type='number' placeholder='kcal' value={kcal} onChange={(e) => {
                  setKcal(e.target.value);
                }}/>
              </div>
              <div className='grid 2'>
                <p>당류</p>
                <input type='number' placeholder='g' value={sugar} onChange={(e) => {
                  setSugar(e.target.value);
                }}/>
              </div>
              <div className='grid 3'>
                <p>단백질</p>
                <input type='number' placeholder='g' value={protein} onChange={(e) => {
                  setProtein(e.target.value);
                }}/>
              </div>
              <div className='grid 4'>
                <p>포화지방</p>
                <input type='number' placeholder='g' value={sf} onChange={(e) => {
                  setSf(e.target.value);
                }}/>
              </div>
              <div className='grid 5'>
                <p>나트륨</p>
                <input type='number' placeholder='mg' value={na} onChange={(e) => {
                  setNa(e.target.value);
                }}/>
              </div>
              <div className='grid 6'>
                <p>카페인</p>
                <input type='number' placeholder='mg' value={caffein} onChange={(e) => {
                  setCaffein(e.target.value);
                }}/>
              </div>
            </div>
          </div>
        </div>
        <div className='modal-button-container'>
          <button type='click' onClick={async () => {
            
                const data = {
                  type: type,
                  code: code,
                  seq: seq,
                  name: name,
                  eng_name: eng,
                  price: price,
                  info: textValue,
                  ingredient_cal: kcal,
                  ingredient_sugar: sugar,
                  ingredient_protein: protein,
                  ingredient_sf: sf,
                  ingredient_na: na,
                  ingredient_caffein: caffein
                }
                
                await axios.patch(`${API_URL}/admin/update/menu/${props.id}`, data)
                  .then((res) => {
                    console.log(res.data);
                    window.location.replace('/administrator/menu');
                  })
                  .catch((err) => {
                    console.log(err);
                  })
            
          }}>수정하기</button>
        </div>
    </div>
  )
}

const MenuUpdate = () => {
  const { id } = useParams();
  const [state] = useAsync(() => getmenu(id), [id]);
  const { loading, data: menu, error } = state;

  if (loading) return <div>로딩중입니다.....</div>;
  if (error) return <div>에러가 발생했습니다.</div>;
  if (!menu) return null;

  return(
    <UpdateInput menu={menu} id={id}/>
  );
}

export default MenuUpdate;