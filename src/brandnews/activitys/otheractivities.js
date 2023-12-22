import React from 'react'
import './otheractivities.css'

import Society from '.';
import { Link, useParams } from 'react-router-dom'
import axios from 'axios';
import { API_URL } from '../../config/serverurl';
import useAsync from '../../config/useAsync';

async function getsocial() {
  try {
    const socialdata = await axios.get(`${API_URL}/social`);
    console.log('socialdata로 받아온 데이터', socialdata);
    return socialdata.data;
  }
  catch(err) {
    console.error('에러 발생:', err);
  }
}

function Otheractivities() {

  const { id } = useParams();
  const [socialstate] = useAsync(() => getsocial(id), [id]);
  const { loading, data:socialdata, error } = socialstate;

  if(loading) return <div>로딩중입니다.....</div>
  if(error) return <div>에러가 발생했습니다.</div>
  if(!socialdata) return null;

  const category = socialdata.filter(item => item.category === '기타 활동');
  console.log('필터 된 데이터', category);

  return(
  <div className="otheractivities-body">
    <Society/>  
    <div className="otheractivities-container">
      <div className="otheractivities-detail-container">
        <div className="otheractivities-guide-link">
          <span>HOME</span>
          <span>사회공헌 활동</span>
          식수위생 캠페인
        </div>
        <div className="otheractivities-detail-title-container">
          <h2>식수위생 캠페인</h2>
          <p>이디야커피는 식수위생 캠페인을 통해 식수부족국가를 위한 
            정수시설 설치 및 인식개선 사업을 후원합니다.</p>
        </div>
        <div className="otheractivities-box-container">
          {/* 추후 맵으로 뿌리면될듯 밑에는 틀만 맞는지 확인용 하드코딩 */}
          <ul className="otheractivities-box-list-con">
            {category.map((item) => (
              <li key={item.id}>
                <Link to={`details/${item.id}`}>
                <img src={item.img_url}/>
                </Link >
                  <div className='campus-text-box'>
                    <Link to={`details/${item.id}`}>
                      <h5>{item.title}</h5>
                        <p>&nbsp; ▶ {item.body.length > 100 ? item.body.substring(0, 100) + '...' : item.body}</p>
                    </Link>
                  </div>
                <Link to={`details/${item.id}`}>
                  <div className="campus-btn-box">
                    <p>더보기</p>
                  </div>
                </Link>
              </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  </div>
  );
}

export default Otheractivities;
