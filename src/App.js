import React from "react";
import './App.css';

import { Routes, Route } from 'react-router-dom';

// 컴포넌트 불러오기
import Header from './include/header';
import Footer from './include/footer';
import MainPage from './main';

import Affiliatecard from './card/affiliatecard';
import Giftcardrouters from "./card/giftcardrouters";
import Brandnewsrouters from "./brandnews/barndnewsrouters";

import Buy from './include/buy';
import Seller from './include/seller';


import Beans from './Beans_Quality/beans';
import Quality from './Beans_Quality/quality';

import Customerservice from './customerservicecenter/customerservice';
import DistributionProducts from './distributionProducts/distributionProducts';
import MapSearch from './mapSearch';
import LoginPage from "./customer/login";


function App() {
  return (
    <div className="App">
      <Header/>
      <div id='App_Main'>
        {/* <MapSearch></MapSearch> */}
        <Routes>
          <Route path='/' element={<MainPage/>}/>

          <Route path='/card/affiliatecard' element={<Affiliatecard/>}/>
          <Route path='/card/giftcardrouters/*' element={<Giftcardrouters/>}/>
          <Route path='/brandnews/activityrouters/*' element={<Brandnewsrouters/>}/>

          <Route path='/beans' element={<Beans/>}/>
          <Route path='/quality' element={<Quality/>}/>
          <Route path='/dp/*' element={<DistributionProducts />}/>
          <Route path='/cs/*' element={<Customerservice />}/>
          <Route path='/order/menu/:id' element={<Buy/>}/>
          <Route path='/order/:id' element={<Seller/>}/>

        </Routes>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
