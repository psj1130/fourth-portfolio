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
import Menu_main from './menu_main/menu_main';
import Drink from "./menu_main/drink/drink";
import Food from "./menu_main/food/food";
import MD from "./menu_main/md/md";

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
          <Route path='/menu_main' element={<Menu_main/>}/>
          <Route path='/product/drink' element={<Drink/>}/>
          <Route path='/product/food' element={<Food/>}/>
          <Route path='/product/md' element={<MD/>}/>

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
      {/* <Footer/> */}
    </div>
  );
}

export default App;
