import React from 'react';
import { useParams } from 'react-router-dom';
import Brandbg from './brandbg';
import axios from 'axios';
import { API_URL } from '../config/contansts';
import useAsync from '../config/useAsync';
import './eventdetail.css'

async function getEvent(id) {
  try {
    const EventDetaildata = await axios.get(`${API_URL}/event/${id}`);
    // console.log('EventDetaildata로 받아온 데이터', EventDetaildata);
    return EventDetaildata.data;
  }
  catch(err) {
    console.error('에러 발생:', err);
  }
}

function Eventdetail() {
  const { id } = useParams();
  const [EventDetailstate] = useAsync(() => getEvent(id), [id]);
  const { loading, data:EventDetaildata, error } = EventDetailstate;

  if(loading) return <div>로딩중입니다.....</div>
  if(error) return <div>에러가 발생했습니다.</div>
  if(!EventDetaildata) return null;

  return (
    <div className="eventdetail-body">
      <Brandbg />
      <div className="eventdetail-container">
        <div className="eventdetail-guide-link">
          <span>HOME</span>
          <span>이디야 소식</span>
          이벤트
        </div>
        <div className="eventdetail-detail-container">
          <div className="eventdetail-detail-title">
            <p>{EventDetaildata.title}</p>
            <p>기간 : {new Date(EventDetaildata.start).toLocaleDateString('ko-KR')} 
            ~ {new Date(EventDetaildata.end).toLocaleDateString('ko-KR')}</p>
          </div>
        </div>
          <div className="eventdetail-detail-state-con">
            <span className='eventdetail-detail-state'>진행중</span>
          </div>
          <div className="eventdetail-detail-main">
            <img src={EventDetaildata.img_url} alt="" />
            <p>{EventDetaildata.body}</p>
          </div>
          <div className="eventdetail-list-link-con">
            <a href="/brandnews/notice">
              <p className='list-link-click'>목록보기</p>
            </a>
          </div>
      </div>
    </div>
  );
}

export default Eventdetail;
