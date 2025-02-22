import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import AdminPage from './admin/adminpage';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MembersPage from './members';
import Ad_login from './admin/ad_login';
import ScrollToTop from './config/scrolltotop';

// import Service_guide from "../members/service_guide/service_guide";
// import Members_guide from "../members/members_guide/members_guide";
// import Members_main from "../members/members_main/members_main";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    
      <BrowserRouter>
      <ScrollToTop>
          <Routes>
            <Route path='/*' element={<App/>}/>
            <Route path='/administrator/*' element={<AdminPage/>}/>
            <Route path='/administrator/login' element={<Ad_login/>}/>
            <Route path='/members/*' element={<MembersPage/>}/> 
          </Routes>
        </ScrollToTop>
      </BrowserRouter>
    
);

reportWebVitals();
