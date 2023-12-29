import React from 'react';
import { useParams } from 'react-router-dom';
import Brandbg from './brandbg';
import axios from 'axios';
import { API_URL } from '../config/serverurl';
import useAsync from '../config/useAsync';
import './noticedetail.css'

async function getNotice(id) {
  try {
    const NoticeDetaildata = await axios.get(`${API_URL}/notice/${id}`);
    console.log('Noticedata로 받아온 데이터', NoticeDetaildata);
    return NoticeDetaildata.data;
  }
  catch(err) {
    console.error('에러 발생:', err);
  }
}

function Noticedetail() {
  const { id } = useParams();
  const [NoticeDetailstate] = useAsync(() => getNotice(id), [id]);
  const { loading, data:NoticeDetaildata, error } = NoticeDetailstate;

  if(loading) return <div>로딩중입니다.....</div>
  if(error) return <div>에러가 발생했습니다.</div>
  if(!NoticeDetaildata) return null;

  return (
    <div className="noticedetail-body">
      <Brandbg />
      <div className="noticedetail-container">
        <div className="notice-guide-link">
          <span>HOME</span>
          <span>이디야 소식</span>
          공지사항
        </div>
        <div className="noticedetail-detail-container">
          <div className="noticedetail-detail-title">
            <p>{NoticeDetaildata.title}</p>
            <p>{new Date(NoticeDetaildata.date).toLocaleDateString('ko-KR')}</p>
          </div>
        </div>
          <div className="noticedetail-detail-main">
            <img src={NoticeDetaildata.img_url} alt="" />
            <p>{NoticeDetaildata.body}</p>
          </div>
          <div className="noticedetail-list-link-con">
            <a href="/brandnews/notice">
              <p className='list-link-click'>목록보기</p>
            </a>
          </div>
      </div>
    </div>
  );
}

export default Noticedetail;
