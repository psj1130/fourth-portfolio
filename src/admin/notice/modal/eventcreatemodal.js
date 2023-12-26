import React, { useState } from 'react';
import Modal from 'react-modal';
import LogoutIcon from '@mui/icons-material/Logout';
import axios from 'axios'; // Axios 라이브러리 import
import { API_URL } from '../../../config/serverurl';
import './eventcreatemodal.css';

const Createmodal = ({ modalOpen, setModalOpen }) => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [start, setStart] = useState('');
  const [end, setEnd] = useState('');
  const [titleImg, setTitleImg] = useState(null);
  const [detailImg, setDetailImg] = useState(null); 

  const StartDate = (selectedDate) => {
    const start = new Date(selectedDate);
  
    const year = start.getFullYear();
    let month = (start.getMonth() + 1).toString().padStart(2, '0');
    let day = start.getDate().toString().padStart(2, '0');
  
    return `${year}-${month}-${day}`;
  };

  const EndDate = (selectedDate) => {
    const end = new Date(selectedDate);
  
    const year = end.getFullYear();
    let month = (end.getMonth() + 1).toString().padStart(2, '0');
    let day = end.getDate().toString().padStart(2, '0');
  
    return `${year}-${month}-${day}`;
  };

  const handleSubmit = async (e) => {

    console.log('제목:', title);
    console.log('내용:', body);
    console.log('시작 날짜:', start);
    console.log('종료 날짜:', end);
    console.log('타이틀 이미지:', titleImg);
    console.log('메인 이미지:', detailImg);
  
    e.preventDefault();
    const titleimg = document.getElementById('title-file-style').files[0];
    const detailimg = document.getElementById('detail-file-style').files[0];
    const formData = new FormData();

    formData.append('title_img_url', titleimg);
    formData.append('img_url', detailimg);
    console.log('append한 사진 데이터', titleimg, detailimg);

    
    // console.log('푼 값들', socialdata);

  await axios.post(`${API_URL}/event/images/eventimg`, formData)
      .then(res => {
        console.log(res.data);

        const eventdata = {
          title: title,
          body: body,
          start: StartDate(start),
          end: EndDate(end),
          img_url: res.data.img_url,
          title_img_url: res.data.title_img_url
        }

        axios.post(`${API_URL}/event/add`, eventdata)
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
      className="socialcreatemodal-body"
      isOpen={modalOpen}
      onRequestClose={() => setModalOpen(false)}
      contentLabel="Createmodal"
    >
      <div className="socialcreatemodal-content">
        <div className="socialcreatemodal-top">
          <p className='socialcreatemodal-top-title'>이벤트</p>
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
              <input
                className='noticecreatemodal-main-title-style'
                type='date'
                name="start"
                placeholder='날짜를 입력해주세요' 
                value={start} 
                onChange={(e) => setStart(StartDate(e.target.value))} 
              />
              <input
                className='noticecreatemodal-main-title-style'
                type='date'
                name="end"
                placeholder='날짜를 입력해주세요' 
                value={end} 
                onChange={(e) => setEnd(EndDate(e.target.value))} 
              />
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
            <div className="eventcreatemodal-bottom-body">
              <div className='eventcreatemodal-botton-file-con'>
                <label htmlFor="title-file-style">
                  타이틀 사진
                </label>
                <input
                  id='title-file-style' 
                  className='eventcreatemodal-bottom-imgselect'
                  type="file"
                  name="title_img_url"
                  onChange={(e) => setTitleImg(e.target.files[0])} 
                />
                <label htmlFor="detail-file-style">
                  메인사진
                </label>
                <input
                  id='detail-file-style' 
                  className='eventcreatemodal-bottom-imgselect'
                  type="file"
                  name="img_url"
                  onChange={(e) => setDetailImg(e.target.files[0])} 
                />
              </div>
              <button className='eventcreatemodal-form-btn' type="submit">업로드</button>
            </div>
          </form>
        </div>
      </div>
    </Modal>
  );
};

export default Createmodal;