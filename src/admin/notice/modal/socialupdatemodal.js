import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import LogoutIcon from '@mui/icons-material/Logout';
import IconButton from '@mui/material/IconButton';
import FileOpenIcon from '@mui/icons-material/FileOpen';
import axios from 'axios'; // Axios 라이브러리 import
import { API_URL } from '../../../config/serverurl';
import './createmodal.css';

const Updatemodal = ({ isOpen, onClose, updateId }) => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [category, setCategory] = useState('');
  const [img, setImg] = useState(null);

  const categories = ["메이트 희망기금", "캠퍼스 희망기금", "식수위생 캠퍼스", "이디야의 동행", "기타 활동"];

  Modal.setAppElement('#root');

  // Modal창이 열릴 때 데이터를 불러옴
  useEffect(() => {
    if (isOpen && updateId) {
      fetchUpdate(updateId);
    }
  }, [isOpen, updateId]);

  const fetchUpdate = async (postId) => {
    try {
      const res = await axios.get(`${API_URL}/social/${postId}`);
      const { title, body, category, img_url } = res.data;
      setTitle(title);
      setBody(body);
      setCategory(category);
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
    const formData = new FormData();
    formData.append('img_url', imgfile);


      const imgUpload = await axios.post(`${API_URL}/social/images/social`, formData);
      console.log('보낸 이미지 데이터', imgUpload.data);

      const UpDateData = {
        id: updateId,
        title: title,
        body: body,
        category: category,
        img_url: imgUpload.data.path
      };

      const UpDateres = await axios.put(`${API_URL}/social/patch/${updateId}`, UpDateData);
      console.log('수정을 보낸 데이터', UpDateres);

      // 모달 닫기 등 추가 동작 수행
      onClose(false);
  };

  return (
    <Modal
      className="socialcreatemodal-body"
      isOpen={isOpen}
      onRequestClose={() => onClose(false)}
      contentLabel="updatemodal"
    >
      <div className="socialcreatemodal-content">
        <div className="socialcreatemodal-top">
          <p className='socialcreatemodal-top-title'>게시물 수정(사회공헌)</p>
          <button
            className='socialcreatemodal-btn-style'
            onClick={() => onClose(false)}>
            <LogoutIcon style={{ fontSize: '44px'}}/>
          </button>
        </div>
        <div className="socialcreatemodal-main-container">
          <form onSubmit={UpdateSubmit} encType="multipart/form-data">
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

export default Updatemodal;
