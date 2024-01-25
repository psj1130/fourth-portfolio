import React from 'react';
import { Route, Routes, useNavigate } from 'react-router';

import Ad_suggestion from './ad_suggestion.js';
import Ad_transaction from './ad_transactionDetail.js';
import Ad_b2b from './ad_b2bdetail.js';

import Ad_menu from './menu/ad_menu.js';
import Ad_md from './menu/ad_md.js';
import Ad_user from './ad_user';
import Sidebar from './include/sidebar';
import { getCookie, delCookie } from '../customer/cookies';
import Sell from './ad_sell.jsx';
import './adminpage.css';

// 공지관련
import Ad_event from './notice/ad_event.js';
import Ad_qna from './notice/ad_qna';
import Ad_social from './notice/ad_social'
import Ad_notice from './notice/ad_notice'
import Ad_home from './ad_index.js';

import Ad_sell from './ad_sell.jsx';
import Ad_selledit from './ad_selledit.js';

import MenuUpdate from './component/menuupdate.js';
import MdUpdate from './component/mdupdate.js';

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
        <ul>
          <li onClick={() => {
            delCookie('adminCookie');
            window.location.replace('/administrator/login');
          }}><i className='xi-log-out'></i>Logout</li>
          <li onClick={() => {
            navigate('/')
          }}><i className='xi-home-o'></i>Home</li>
        </ul>
      </header>
      <div id='admin-main'>
        <Sidebar />
        <div className='others'>
          <Routes>
            <Route path='/' element={<Ad_home/>}/>

            <Route path='/sales' element={<Ad_sell/>}/>
            <Route path='/suggestion' element={<Ad_suggestion/>}/>
            <Route path='/transaction' element={<Ad_transaction/>}/>
            <Route path='/b2b' element={<Ad_b2b/>}/>
            <Route path='/menu' element={<Ad_menu/>}/>
            <Route path='/menu' element={<Ad_menu/>}/>
            <Route path='/md' element={<Ad_md/>}/>
            <Route path='/user' element={<Ad_user/>}/>

            <Route path='/qna' element={<Ad_qna/>}/>
            <Route path='/social' element={<Ad_social/>}/>
            <Route path='/event' element={<Ad_event/>}/>
            <Route path='/notice' element={<Ad_notice/>}/>

            <Route path='/sell' element={<Ad_sell/>}/>
            <Route path='/selledit' element={<Ad_selledit/>}/>

            <Route path='/menu/update/:id' element={<MenuUpdate/>}/>
            <Route path='/md/update/:id' element={<MdUpdate/>}/>
          </Routes>
        </div>
      </div>
    </div>
    : window.location.replace('/administrator/login')
  )
}

export default AdminPage;