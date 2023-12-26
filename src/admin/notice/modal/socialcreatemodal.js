import React, { useState } from 'react';
import Modal from 'react-modal';
import LogoutIcon from '@mui/icons-material/Logout';
import IconButton from '@mui/material/IconButton';
import FileOpenIcon from '@mui/icons-material/FileOpen';
import axios from 'axios'; // Axios 라이브러리 import
import { API_URL } from '../../../config/serverurl';
import './createmodal.css';

const Createmodal = ({ modalOpen, setModalOpen }) => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [category, setCategory] = useState('');
  const [img, setImg] = useState(null);
  
  const categories = ["메이트 희망기금", "캠퍼스 희망기금", "식수위생 캠퍼스", "이디야의 동행", "기타 활동"];

  const handleSubmit = async (e) => {
    // e.preventDefault();
    const imgfile = document.getElementById('file-style').files[0];
    const formData = new FormData();
    // formData.append('title', title);
    // formData.append('body', body);
    // formData.append('category', category);
    formData.append('img_url', imgfile);

    
    // console.log('푼 값들', socialdata);

  await axios.post(`${API_URL}/social/images/social`, formData)
      .then(res => {
        console.log(res.data);

        const socialdata = {
          title: title,
          body: body,
          category: category,
          img_url: res.data.path
          //이미지 경로 데이터 사용
        }

        axios.post(`${API_URL}/social/add`, socialdata)
        .then(res => {
          console.log(res.data);
        })
        .catch (err => {
          console.log(err);
        })
      })

    }
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
            <LogoutIcon style={{ fontSize: '44px'}}/>
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
                value={title} 
                onChange={(e) => setTitle(e.target.value)} 
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
                value={body}
                onChange={(e) => setBody(e.target.value)}/>
            </div>
            <div className="socialcreatemodal-bottom-body">
              <div className='socialcreatemodal-botton-file-con'>
              <input
                id='file-style' 
                className='socialcreatemodal-bottom-imgselect'
                type="file"
                name="img_url"
                onChange={(e) => setImg(e.target.files[0])} 
                />
                <label htmlFor="file-style">
                  <div className="file-input-icon">
                    <IconButton component="span">
                      <FileOpenIcon style={{ fontSize: '44px' }} />
                    </IconButton>
                  </div>
                </label>
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