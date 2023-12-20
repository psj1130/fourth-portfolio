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

import Seller from './seller/seller';
import Buym from "./seller/buym";
import Success from './seller/success.tsx';

import Beans from './Beans_Quality/beans';
import Quality from './Beans_Quality/quality';

import Customerservice from './customerservicecenter/customerservice';
import DistributionProducts from './distributionProducts/distributionProducts';
import MapSearch from './mapsearch/mapSearch';

function App() {
  return (
    <div className="App">
      <Header/>
      <div id='App_Main'>
        <Routes>
          {/* 성종 */}
          <Route path='/' element={<MainPage/>}/>

          {/* 유준 */}
          <Route path='/card/affiliatecard' element={<Affiliatecard/>}/>
          <Route path='/card/giftcardrouters/*' element={<Giftcardrouters/>}/>
          <Route path='/brandnews/*' element={<Brandnewsrouters/>}/>

          {/* 원기 */}
          <Route path='/beans' element={<Beans/>}/>
          <Route path='/quality' element={<Quality/>}/>

          {/* 동명 */}
          <Route path='/dp/*' element={<DistributionProducts />}/>
          <Route path='/cs/*' element={<Customerservice />}/>
          <Route path='/searchstore' element={<MapSearch/>}/>

          {/* 성원 */}
          <Route path='/mapsearch' element={<MapSearch />}/>
          <Route path='/order/menu/:id' element={<Buym/>}/>
          <Route path='/seller/:id' element={<Seller/>}/>
          <Route path="/seller/success" element={<Success/>}/>
        </Routes>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
