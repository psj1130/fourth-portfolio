import './App.css';
import React from "react";
import { Route, Routes } from "react-router-dom";
import Customerservice from './customerservicecenter/customerservice';
import DistributionProducts from './distributionProducts/distributionProducts';
import MapSearch from './mapSearch';
function App() {
  return (
    <div className="App">
      {/* <Header/> */}
      <div id='App_Main'>
        <MapSearch></MapSearch>
        <Routes>
          {/* <Route path='/' element={<MainPage/>}/> */}
          <Route path='/dp/*' element={<DistributionProducts />}/>
          <Route path='/cs/*' element={<Customerservice />}/>
        </Routes>
      </div>
      {/* <Footer/> */}
    </div>
  );
}

export default App;
