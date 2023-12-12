// import React from 'react';
import Stick from './stick';
import Coffemix from './coffemix';
import {Route, Routes} from 'react-router-dom';

function DistributionProducts() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Stick/>} />
        <Route path='/coffemix' element={<Coffemix/>} />
      </Routes>
    </div>
  );
}

export default DistributionProducts;
