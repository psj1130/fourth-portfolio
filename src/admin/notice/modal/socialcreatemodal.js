import React, { useState } from 'react';
import Modal from 'react-modal';
import LogoutIcon from '@mui/icons-material/Logout';
import IconButton from '@mui/material/IconButton';
import FileOpenIcon from '@mui/icons-material/FileOpen';
import axios from 'axios'; // Axios 라이브러리 import
import { API_URL } from '../../../config/serverurl';
import './createmodal.css';

const Createmodal = ({ modalOpen, setModalOpen }) => {
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    body: '',
    img_url: null,
  });
  //현재 formData는 객체 형식으로 요청이 가고있음

  const categories = ["메이트 희망기금", "캠퍼스 희망기금", "식수위생 캠퍼스", "이디야의 동행", "기타 활동"];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    //name과 value를 추출함
    console.log(name, value);
    setFormData({
      ...formData,
      //기존 상태를 변경하지않고 새로운 객체를 생성하기 위해서 사용
      [name]: value,
      //name은 변수이며 name변수의 값이 프로퍼터로 사용됨
      //[value]: name으로 하면 프로퍼터 이름이 value로 고정되며
//모든 입력 필드가 value로 고정이 됨 결과적으로 value가 모든 같은 이름을 가지게 됨
    });
  };

  const handleFileChange = (e) => {
    //변화 이벤트
    const file = e.target.files[0];
    // 파일 입력(input type="file")에서 선택된 파일들을 나타내는 FileList 객체
    // [0]을 사용하여 첫 번째 파일을 선택하고, 이를 file 변수에 할당
    console.log(file);

    const formData = new FormData();
//FormData라는 빈 객체를 생성 키-값 쌍을 담을 컨테이너 역할
    formData.append('img_url', file);
//새로운 객체에 키, 값 쌍을 추가함
    setFormData({
      ...formData,
      img_url: file,
    });
    //현재의 formData 상태를 복사하고, 그 중 img_url을 선택된 파일 객체로 업데이트함
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log('FormData:', formData);

    axios.post(`${API_URL}/social/add`, formData)
    .then(res => {
      console.log('보낸데이터', res.status);
      setModalOpen(false);
    }).catch(err => {
      console.error(err);
    });
  };

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
                value={formData.title} 
                onChange={handleInputChange} 
              />
              <select
                className='socialcreatemodal-main-category-style'
                name="category"
                value={formData.category}
                onChange={handleInputChange}>
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
                value={formData.body}
                onChange={handleInputChange}/>
            </div>
            <div className="socialcreatemodal-bottom-body">
              <div className='socialcreatemodal-botton-file-con'>
                <input
                  id='file-style' 
                  className='socialcreatemodal-bottom-imgselect'
                  type="file"
                  name="img_url"
                  onChange={handleFileChange} />
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