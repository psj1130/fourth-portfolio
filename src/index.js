import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import AdminPage from './admin/adminpage';
import Ad_suggestion from './admin/ad_suggestion';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
      <BrowserRouter>
        {/* <App /> */}
        {/* <AdminPage /> */}
        <Ad_suggestion></Ad_suggestion>
      </BrowserRouter>
    </React.StrictMode>
);

reportWebVitals();
