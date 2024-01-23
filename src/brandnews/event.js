import React, {useState} from 'react';
import { Link, useParams } from 'react-router-dom'
import axios from 'axios';
import { API_URL } from '../config/serverurl';
import useAsync from '../config/useAsync';

import './event.css';

import Brandbg from './brandbg';

async function getevent() {
  try {
    const eventdata = await axios.get(`${API_URL}/event`);
    // console.log('eventdata로 받아온 데이터', eventdata);
    return eventdata.data;
  }
  catch(err) {
    console.error('에러 발생:', err);
  }
}

function Event() {

  const [content, setContent] = useState();

  const { id } = useParams();
  const [eventstate] = useAsync(() => getevent(id), [id]);
  const { loading, data:eventdata, error } = eventstate;

  if(loading) return <div>로딩중입니다.....</div>
  if(error) return <div>에러가 발생했습니다.</div>
  if(!eventdata) return null;

  const onchanglist = (e) => {
    setContent(e.currentTarget.value);
  }

  const options = [
    {key:1, value:"전체"},
    {key:2, value:"내용"},
  ];

  return(
    <div className="event-body">
      <Brandbg/>
      <div className="event-main-container">
            <div className="event-guide-link">
              <span>HOME</span>
              <span>이디야 소식</span>
              이벤트
            </div>
            <div className="event-search-container">
                <div className="event-drowdown-box">
                  <select className='event-drowdown-list' onChange={onchanglist} value={content}>
                    {options.map((item)=>(
                      <option key={item.key} value={item.key}>{item.value}</option>
                    ))}
                  </select>
                </div>
                <div className="event-search-box">
                  <input 
                  className='event-search-input'
                  type="text" />
                    <button className='event-search-result'>
                      <img src="/images/cardlist/icon_search.gif"/>
                    </button>
                </div>
              </div>
              {/* db데이터 받고 작성하는부분 */}
              <ul className="event-detail-container">
                {eventdata.map((item) => (
                  <li key={item.id}>
                     {/* {console.log(`Key for item with id ${item.id}: ${item.id}`)} 키 값 확인코드 */}
                   <div className='event-detail-imgcon'>
                    <Link to={`${item.id}`}>
                      <img src={item.title_img_url} alt="" />
                    </Link>
                  </div>
                  <dl className='event-detail-titlecon'>
                    <dt>
                      <Link to={`${item.id}`}>{item.title}</Link>
                    </dt>
                    <dd>
                      
                      <p>기간 : {new Date(item.start).toLocaleDateString('ko-KR')} ~ </p>
                      <p>{new Date(item.end).toLocaleDateString('ko-KR')}</p>
                    </dd>
                  </dl>
                  <div className='event-detail-progress'>
                    <span className='event-progress-check'>
                      진행여부{/*데이터로 들어가야하나?*/}
                    </span>
                  </div>
                  </li>
                ))}
              </ul>
          </div>
    </div>
  );
}

export default Event;