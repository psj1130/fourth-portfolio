import React, { useState } from 'react';
import Modal from 'react-modal';
import LogoutIcon from '@mui/icons-material/Logout';
import axios from 'axios'; // Axios 라이브러리 import
import { API_URL } from '../../../config/contansts';
import './noticemodal.css';

const Createmodal = ({ modalOpen, setModalOpen }) => {

  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [date, setDate] = useState('');
  const [img, setImg] = useState(null);
  
  const formatDate = (selectedDate) => {
    const date = new Date(selectedDate);
  
    const year = date.getFullYear();
    let month = (date.getMonth() + 1).toString().padStart(2, '0'); // Month starts from 0
    let day = date.getDate().toString().padStart(2, '0');
  
    return `${year}-${month}-${day}`;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const imgfile = document.getElementById('file-style').files[0];
    const formData = new FormData();
    // formData.append('title', title);
    // formData.append('body', body);
    // formData.append('category', category);
    formData.append('img_url', imgfile);

    console.log(date);

    
    // console.log('푼 값들', socialdata);

  await axios.post(`${API_URL}/notice/images/notice`, formData)
      .then(res => {
        console.log(res.data);

        const noticedata = {
          title: title,
          body: body,
          date: formatDate(date),
          img_url: res.data.path
        }
        axios.post(`${API_URL}/notice/add`, noticedata)
        .then(res => {
          setModalOpen(false);
          console.log(res.data);
        })
        .catch (err => {
          
          console.log(err);
        })
      })

    }
  return (
    <Modal
      className="noticemodal-body"
      isOpen={modalOpen}
      onRequestClose={() => setModalOpen(false)}
      contentLabel="Createmodal"
    >
      <div className="noticemodal-content">
        <div className="noticemodal-top">
          <p className='noticemodal-top-title'>공지사항</p>
          <button
            className='noticemodal-btn-style' 
            onClick={() => setModalOpen(false)}>
            <LogoutIcon style={{ fontSize: '44px'}}/>
          </button>
        </div>
        <div className="noticemodal-main-container">
          <form onSubmit={handleSubmit} encType="multipart/form-data">
            <div className="noticemodal-title-box">
              <input
                className='noticemodal-title'
                type="text"
                name="title"
                placeholder='제목을 입력해주세요' 
                value={title} 
                onChange={(e) => setTitle(e.target.value)} 
              />
             <input
                className='noticemodal-date'
                type='date'
                name="date" 
                placeholder='날짜를 입력해주세요' 
                value={date} 
                onChange={(e) => setDate(formatDate(e.target.value))} 
              />
            </div>
            <div className="noticemodal-main-box">
              <textarea
                className='noticemodal-body-style'
                placeholder='내용을 입력해주세요'
                type="text"
                name="body"
                value={body}
                onChange={(e) => setBody(e.target.value)}/>
            </div>
          <div className="noticemodal-bottom-body">
            <div className='noticemodal-file-box'>
              <label htmlFor="file-style">
                사진 올리기
                
              <input
                id='file-style' 
                className='noticemodal-img'
                type="file"
                name="img_url"
                onChange={(e) => setImg(e.target.files[0])} 
                />
                </label>
              </div>
              <button className='noticemodal-form-btn' 
              type="submit"
              onClick={()=> window.location.reload()}>업로드</button>
            </div>
          </form>
        </div>
      </div>
    </Modal>
  );
};

export default Createmodal;