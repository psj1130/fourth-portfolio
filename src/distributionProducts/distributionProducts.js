import {Route, Routes} from 'react-router-dom';
import Stick from './stick';
import Coffemix from './coffemix';
import Capsule from './capsule';
import Cup from './cup';

function DistributionProducts() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Stick/>} />
        <Route path='/coffeemix' element={<Coffemix/>} />
        <Route path='/capsule' element={<Capsule/>} />
        <Route path='/cup' element={<Cup/>} />
      </Routes>
    </div>
  );
}

export default DistributionProducts;
