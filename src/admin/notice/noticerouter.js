import React from 'react';
import { Route, Routes, useNavigate } from 'react-router';
import Sidebar from '../include/sidebar';
import { getCookie } from '../../customer/cookies';
import '../adminpage.css';

import Ad_event from './ad_event';
import Ad_qna from './ad_qna';
import Ad_social from './ad_social'
import Ad_notice from './ad_notice'

function Noticerouter() {
  document.title = "EDIYA COFFEE - 관리자 페이지";
  const cookie = getCookie('adminCookie');
  const navigate = useNavigate();

  return(
    
    cookie ? 
    <div id='admin'>
          <Routes>
            <Route path='/qna' element={<Ad_qna/>}/>
            <Route path='/social' element={<Ad_social/>}/>
            <Route path='/event' element={<Ad_event/>}/>
            <Route path='/notice' element={<Ad_notice/>}/>
          </Routes>
    </div>
    : navigate('/administrator/login')
  )
}

export default Noticerouter;