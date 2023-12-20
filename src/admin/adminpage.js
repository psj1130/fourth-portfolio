import React from 'react';
import { Route, Routes, useNavigate } from 'react-router';
import Ad_suggestion from './ad_suggestion';
import Ad_menu from './ad_menu';
import Ad_user from './ad_user';
import Sidebar from './include/sidebar';
import { getCookie } from '../customer/cookies';
import './adminpage.css';

function AdminPage() {
  document.title = "EDIYA COFFEE - 관리자 페이지";
  const cookie = getCookie('adminCookie');
  const navigate = useNavigate();

  return(
    cookie ? 
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
        </Routes>
      </div>
    </div>
  </div>
    : navigate('/administrator/login')
  )
}

export default AdminPage;