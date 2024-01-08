import React from 'react'
import './campus.css'

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

function Campus() {

  const { id } = useParams();
  const [socialstate] = useAsync(() => getsocial(id), [id]);
  const { loading, data:socialdata, error } = socialstate;

  if(loading) return <div>로딩중입니다.....</div>
  if(error) return <div>에러가 발생했습니다.</div>
  if(!socialdata) return null;


  //카테고리가 해당 되는것만 보이게함 이유는 id값 여러번 안불러오게 할려고
  const category = socialdata.filter(item => item.category === '캠퍼스 희망기금');
  console.log('필터 된 데이터', category);

  return(
  <div className="campus-body">
    <Society/>
    <div className="campus-container">
      <div className="campus-detail-container">
        <div className="campus-guide-link">
          <span>HOME</span>
          <span>사회공헌활동</span>
          메이트 희망기금
        </div>
        <div className="campus-detail-title-container">
          <h2>이디야 메이트 희망기금 사업</h2>
          <p>이디야커피는 대한민국 청년의 미래를 후원합니다.</p>
        </div>
        <div className="campus-box-container">
          {/* 추후 맵으로 뿌리면될듯 밑에는 틀만 맞는지 확인용 하드코딩 */}
          <ul className="campus-box-list-con">
          {category.map((item) => (
            <li key={item.id} className='campus-box'>
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

export default Campus;
