import React from 'react';
import { Route, Routes } from 'react-router';
import Ad_suggestion from './ad_suggestion';
import Ad_menu from './ad_menu';
import Sidebar from './include/sidebar';
import './adminpage.css';

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
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default AdminPage;