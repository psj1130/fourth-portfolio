import React, {useState} from 'react';
import { Link, useParams } from 'react-router-dom'
import axios from 'axios';
import { API_URL } from '../config/serverurl';
import useAsync from '../config/useAsync';

import './notice.css';

import Brandbg from './brandbg';

async function getNotice() {
  try {
    const Noticedata = await axios.get(`${API_URL}/notice`);
    // console.log('Noticedata로 받아온 데이터', Noticedata);
    return Noticedata.data;
  }
  catch(err) {
    console.error('에러 발생:', err);
  }
}

function Notice() {

  const [content, setContent] = useState();

  const { id } = useParams();
  const [Noticestate] = useAsync(() => getNotice(id), [id]);
  const { loading, data:Noticedata, error } = Noticestate;

  if(loading) return <div>로딩중입니다.....</div>
  if(error) return <div>에러가 발생했습니다.</div>
  if(!Noticedata) return null;

  const onchanglist = (e) => {
    setContent(e.currentTarget.value);
  }

  const options = [
    {key:1, value:"전체"},
    {key:2, value:"내용"},
  ];

  return(
    <div className="notice-body">
      <Brandbg/>
        <div className="notice-main-container">
            <div className="notice-guide-link">
              <span>HOME</span>
              <span>이디야 소식</span>
              공지사항
            </div>
            <div className="notice-search-container">
                <div className="notice-dropwdown-box">
                  <select className='notice-dropwdown-list' onChange={onchanglist} value={content}>
                    {options.map((item)=>(
                      <option key={item.key} value={item.key}>{item.value}</option>
                    ))}
                  </select>
                </div>
                <div className="notice-search-box">
                  <input 
                  className='notice-serch-input'
                  type="text" />
                    <button className='notice-serch-result'>
                      <img src={process.env.PUBLIC_URL + "/images/cardlist/icon_search.gif"} alt='img'/>
                    </button>
                </div>
              </div>
              {/* db데이터 받고 작성하는부분 */}
              <ul className='notice-detail-container'>
              {Noticedata.map((item) => (
                  <li key={item.id}>
                    <div className='notice-detail-list-iconbox'>
                      <img src="/images/brandnews/notice_icon.gif" alt='img'/>
                    </div>
                    <div className='list-detail-box'>
                      <h5>
                        <Link to={`${item.id}`}>{item.title}</Link>
                      </h5>
                    </div>
                    <div className='list-detail-date'>
                      <p>{new Date(item.date).toLocaleDateString('ko-KR')}</p>
                    </div>
                  </li>
                ))}
              </ul>
          </div>
    </div>
  );
}

export default Notice;