import React from 'react';
import { Route, Routes } from 'react-router';
import Ad_suggestion from './ad_suggestion';
import Ad_menu from './ad_menu';
import Ad_user from './ad_user';
import Sidebar from './include/sidebar';
import './adminpage.css';

// 공지관련
import Ad_qna from './notice/ad_qna';
import Ad_notice from './notice/ad_notice';
import Ad_event from './notice/ad_event';
import Ad_social from './notice/ad_social';

function AdminPage() {
  document.title = "EDIYA COFFEE - 관리자 페이지";

  return(
    <div id='admin'>
      <header>
        <div className='admin-header-logo'>
          <a href='/administrator'>
            <img src={process.env.PUBLIC_URL + '/images/logo/top_logo.gif'}></img>
          </a>
        </div>
      </header>
      <div id='admin-main'>
        <Sidebar />
        <div className='others'>
          <Routes>
            <Route path='/suggestion' element={<Ad_suggestion/>}/>
            <Route path='/menu' element={<Ad_menu/>}/>
            <Route path='/user' element={<Ad_user/>}/>
            <Route path='/notice/qna' element={<Ad_qna/>}/>
            <Route path='/notice/notice' element={<Ad_notice/>}/>
            <Route path='/notice/event' element={<Ad_event/>}/>
            <Route path='/notice/social' element={<Ad_social/>}/>
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default AdminPage;