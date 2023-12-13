import React from "react";
import './App.css';
import { Route, Routes } from "react-router-dom";

// 컴포넌트 불러오기
import Header from './include/header';
import Footer from './include/footer';
import MainPage from './main';


import Beans from './Beans_Quality/beans';
import Quality from './Beans_Quality/quality';

import Customerservice from './customerservicecenter/customerservice';
import DistributionProducts from './distributionProducts/distributionProducts';
import MapSearch from './mapSearch';
import Buy from './buy/buy';

function App() {
  return (
    <div className="App">
      <Header/>
      <div id='App_Main'>
        {/* <MapSearch></MapSearch> */}
        <Routes>
          <Route path='/' element={<MainPage/>}/>
          <Route path='/beans' element={<Beans/>}/>
          <Route path='/quality' element={<Quality/>}/>
          <Route path='/dp/*' element={<DistributionProducts />}/>
          <Route path='/cs/*' element={<Customerservice />}/>
        </Routes>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
