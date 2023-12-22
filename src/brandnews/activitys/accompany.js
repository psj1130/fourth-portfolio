import React from 'react'
import './accompany.css'

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

function Accompany() {

  const { id } = useParams();
  const [socialstate] = useAsync(() => getsocial(id), [id]);
  const { loading, data:socialdata, error } = socialstate;

  if(loading) return <div>로딩중입니다.....</div>
  if(error) return <div>에러가 발생했습니다.</div>
  if(!socialdata) return null;

  const category = socialdata.filter(item => item.category === '이디야의 동행');
  console.log('필터 된 데이터', category);

  return(
  <div className="accompany-body">
    <Society/>  
    <div className="accompany-container">
      <div className="accompany-detail-container">
        <div className="accompany-guide-link">
          <span>HOME</span>
          <span>사회공헌활동</span>
          이디야의 동행
        </div>
        <div className="accompany-detail-title-container">
          <h2>이디야의 동행</h2>
          <p>이디야커피는 따뜻한 마음과 기쁨을 나누기 위해 먼저 실천합니다.</p>
        </div>
        <div className="accompany-box-container">
          {/* 추후 맵으로 뿌리면될듯 밑에는 틀만 맞는지 확인용 하드코딩 */}
          <ul className="accompany-box-list-con">
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

export default Accompany;
