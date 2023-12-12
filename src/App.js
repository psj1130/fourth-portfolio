import React from "react";
import './App.css';
import { Route, Routes } from "react-router-dom";

// 컴포넌트 불러오기
import Header from './include/header';
import Footer from './include/footer';
import MainPage from './main';

import Customerservice from './customerservicecenter/customerservice';
import DistributionProducts from './distributionProducts/distributionProducts';
import Buy from './buy/buy';


function App() {
  return (
    <div className="App">
      <Header/>
      <div id='App_Main'>
        <Routes>
          <Route path='/' element={<MainPage/>}/>
          <Route path='/dp/*' element={<DistributionProducts />}/>
          <Route path='/cs/*' element={<Customerservice />}/>
        </Routes>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
