import React, { useState } from 'react';
import Modal from 'react-modal';
import LogoutIcon from '@mui/icons-material/Logout';
import IconButton from '@mui/material/IconButton';
import FileOpenIcon from '@mui/icons-material/FileOpen';
import axios from 'axios'; // Axios 라이브러리 import
import { API_URL } from '../../../config/serverurl';
import './socialmodal.css';

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
      className="socialmodal-body"
      isOpen={modalOpen}
      onRequestClose={() => setModalOpen(false)}
      contentLabel="Createmodal"
    >
      <div className="socialmodal-content">
        <div className="socialmodal-top">
          <p className='socialmodal-top-title'>사회 공헌</p>
          <button
            className='socialmodal-btn-style' 
            onClick={() => setModalOpen(false)}>
            <LogoutIcon style={{ fontSize: '44px'}}/>
          </button>
        </div>
        <div className="socialmodal-main-container">
          <form onSubmit={handleSubmit} encType="multipart/form-data">
            <div className="socialmodal-main-title">
              <input
                className='socialmodal-title'
                type="text"
                name="title"
                placeholder='제목을 입력해주세요' 
                value={title} 
                onChange={(e) => setTitle(e.target.value)} 
              />
              <select
                className='socialmodal-category'
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
            <div className="socialmodal-main-box">
              <textarea
                className='socialmodal-main-body'
                placeholder='내용을 입력해주세요'
                type="text"
                name="body"
                value={body}
                onChange={(e) => setBody(e.target.value)}/>
            </div>
            <div className="socialmodal-bottom-body">
              <div className='socialmodal-file-box'>
                <label htmlFor="file-style">
                  사진 올리기
                  <input
                    id='file-style' 
                    className='socialmodal-bottom-imgselect'
                    type="file"
                    name="img_url"
                    onChange={(e) => setImg(e.target.files[0])} 
                    />
                  </label>
              </div>
              <button className='socialmodal-form-btn' 
              onClick={()=> window.location.reload()} 
              type="submit">업로드</button>
            </div>
          </form>
        </div>
      </div>
    </Modal>
  );
};

export default Createmodal;