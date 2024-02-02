import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import LogoutIcon from '@mui/icons-material/Logout';
import IconButton from '@mui/material/IconButton';
import FileOpenIcon from '@mui/icons-material/FileOpen';
import axios from 'axios'; // Axios 라이브러리 import
import { API_URL } from '../../../config/contansts';
import './noticemodal.css';

const Updatemodal = ({ isOpen, onClose, updateId }) => {
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

  Modal.setAppElement('#root');

  // Modal창이 열릴 때 데이터를 불러옴
  useEffect(() => {
    if (isOpen && updateId) {
      console.log("updateId:", updateId);
      fetchUpdate(updateId);
    }
  }, [isOpen, updateId]);

  const fetchUpdate = async (postId) => {
    try {
      const res = await axios.get(`${API_URL}/notice/${postId}`);
      const { title, body, date, img_url } = res.data;
      setTitle(title);
      setBody(body);
      setDate(date);
      setImg(img_url);
      console.log(res.data);
    } catch (err) {
      console.log('id 불러오기 실패 오류 발생', err);
    }
  }

 const UpdateSubmit = async (e) => {
  e.preventDefault();
  console.log('들어온 updateId 값 : ', updateId);

  const imgfile = document.getElementById('file-style').files[0];

  // 이미지가 변경되었을 때만 업로드 수행
  let imgPath = img;
  if (imgfile) {
    const formData = new FormData();
    formData.append('img_url', imgfile);

    try {
      const imgUpload = await axios.post(`${API_URL}/notice/images/notice`, formData);
      console.log('보낸 이미지 데이터', imgUpload.data);
      imgPath = imgUpload.data.path;
    } catch (error) {
      console.error('이미지 업로드 오류', error);
      // 오류 처리 로직 추가
      return;
    }
  }

  const UpDateData = {
    id: updateId,
    title: title,
    body: body,
    date: formatDate(date),
    img_url: imgPath,
  };

  try {
    const UpDateres = await axios.put(`${API_URL}/notice/patch/${updateId}`, UpDateData);
    console.log('수정을 보낸 데이터', UpDateres);

    // 모달 닫기 등 추가 동작 수행
    onClose(false);
  } catch (error) {
    console.error('데이터 수정 오류', error);
    // 오류 처리 로직 추가
  }
};


  return (
    <Modal
      className="noticemodal-body"
      isOpen={isOpen}
      onRequestClose={() => onClose(false)}
      contentLabel="Createmodal"
    >
      <div className="noticemodal-content">
        <div className="noticemodal-top">
          <p className='noticemodal-top-title'>공지사항</p>
          <button
            className='noticemodal-btn-style' 
            onClick={() => onClose(false)}>
            <LogoutIcon style={{ fontSize: '44px'}}/>
          </button>
        </div>
        <div className="noticemodal-main-container">
          <form onSubmit={UpdateSubmit} encType="multipart/form-data">
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

export default Updatemodal;
