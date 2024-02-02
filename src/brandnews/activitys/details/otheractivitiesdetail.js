import React from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { API_URL } from '../../../config/contansts';
import useAsync from '../../../config/useAsync';
import './activitydetail.css'
import Society from '..';

async function getsocial(id) {
  try {
    const SocialDetaildata = await axios.get(`${API_URL}/social/${id}`);
    console.log('socialDetaildata로 받아온 데이터', SocialDetaildata);
    return SocialDetaildata.data;
  }
  catch(err) {
    console.error('에러 발생:', err);
  }
}

function Activitydetail() {
  const { id } = useParams();
  const [SocialDetailstate] = useAsync(() => getsocial(id), [id]);
  const { loading, data: SocialDetaildata, error } = SocialDetailstate;

  console.log('activitydetaildata:', SocialDetaildata);

  if (loading) return <div>로딩중입니다.....</div>;
  if (error) return <div>에러가 발생했습니다.</div>;
  if (!SocialDetaildata) return null;

  return (
    <div className='activitydetail-body'>
      <Society />
      <div className="activitydetail-container">
        <div className="activitydetail-guide-link">
          <span>HOME</span>
          <span>이디야 소식</span>
          이벤트
        </div>
        <div className="activitydetail-title-container">
          <h2>그 외 사회공헌활동</h2>
        </div>
        <div className="activitydetail-detail-container">
          <div className="activitydetail-detail-title">
            <p><b>[기타 활동] </b>{SocialDetaildata.title}</p>
            <p>{new Date(SocialDetaildata.createdAt).toLocaleDateString('ko-KR')}</p>
          </div>
        </div>
          <div className="activitydetail-detail-main">
            <img src={SocialDetaildata.img_url} alt="" />
            <p style={{ whiteSpace: 'pre-line' }}>{SocialDetaildata.body}</p>
          </div>
          <div className="activitydetail-list-link-con">
            <a href="/brandnews/activitys/otheractivities ">
              <p className='list-link-click'>목록보기</p>
            </a>
          </div>
      </div>
    </div>
  );
}

export default Activitydetail;