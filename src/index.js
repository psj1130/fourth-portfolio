import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import AdminPage from './admin/adminpage';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MembersPage from './members';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path='/*' element={<App/>}/>
          <Route path='/administarator' element={<AdminPage/>}/>
          <Route path='/members/*' element={<MembersPage/>}/>
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
);

reportWebVitals();
