import React, { useState } from 'react';
import Modal from 'react-modal';
import LogoutIcon from '@mui/icons-material/Logout';
import axios from 'axios'; // Axios 라이브러리 import
import { API_URL } from '../../../config/contansts';
import './eventmodal.css';

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
      className="eventmodal-body"
      isOpen={modalOpen}
      onRequestClose={() => setModalOpen(false)}
      contentLabel="Createmodal"
    >
      <div className="eventmodal-content">
        <div className="eventmodal-top">
          <p className='eventmodal-top-title'>이벤트</p>
          <button
            className='eventmodal-btn-style' 
            onClick={() => setModalOpen(false)}>
            <LogoutIcon style={{ fontSize: '44px'}}/>
          </button>
        </div>
        <div className="eventmodal-main-container">
          <form onSubmit={handleSubmit} 
          className='eventmodal-form'
          encType="multipart/form-data">
            <div className="eventmodal-main-title">
              <input
                className='eventmodal-title'
                type="text"
                name="title"
                placeholder='제목을 입력해주세요' 
                value={title} 
                onChange={(e) => setTitle(e.target.value)} 
              />
            <div className='eventmodal-date-box'>  
              <input
                className='eventmodal-date-start'
                type='date'
                name="start"
                placeholder='날짜를 입력해주세요' 
                value={start} 
                onChange={(e) => setStart(StartDate(e.target.value))} 
              />
              <p className='eventmodal-date-style'> ~ </p>
              <input
                className='eventmodal-date-end'
                type='date'
                name="end"
                placeholder='날짜를 입력해주세요' 
                value={end} 
                onChange={(e) => setEnd(EndDate(e.target.value))} 
              />
            </div>
            </div>
            <div className="eventmodal-main-box">
              <textarea
                className='eventmodal-main-body'
                placeholder='내용을 입력해주세요'
                type="text"
                name="body"
                value={body}
                onChange={(e) => setBody(e.target.value)}/>
            </div>
              <div className='eventmodal-bottom-body'>
                <div className="eventmodal-img-container">
                  <label htmlFor="title-file-style">
                    타이틀 사진
                  </label>
                    <input
                      id='title-file-style' 
                      className='eventemodal-imgselect-01'
                      type="file"
                      name="title_img_url"
                      onChange={(e) => setTitleImg(e.target.files[0])} 
                    />
                    <label htmlFor="detail-file-style">
                      메인사진
                    </label>
                    <input
                      id='detail-file-style' 
                      className='eventemodal-imgselect-02'
                      type="file"
                      name="img_url"
                      onChange={(e) => setDetailImg(e.target.files[0])} 
                    />
                </div>
                <button className='eventmodal-form-btn' 
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