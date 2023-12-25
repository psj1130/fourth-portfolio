import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import AdminPage from './admin/adminpage';
import Ad_suggestion from './admin/ad_suggestion';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MembersPage from './members';

// import Service_guide from "../members/service_guide/service_guide";
// import Members_guide from "../members/members_guide/members_guide";
// import Members_main from "../members/members_main/members_main";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path='/*' element={<App/>}/>
          {/* <Route path='/administarator' element={<AdminPage/>}/> */}
          <Route path='/members/*' element={<MembersPage/>}/>
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
);

reportWebVitals();
