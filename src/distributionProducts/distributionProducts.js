import {Route, Routes} from 'react-router-dom';
import Stick from './stick';
import Coffemix from './coffemix';
import Capsule from './capsule';
import Cup from './cup';
import Transaction from './transaction/transaction';
import B2b from './b2b/b2b';

function DistributionProducts() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Stick/>} />
        <Route path='/coffeemix' element={<Coffemix/>} />
        <Route path='/capsule' element={<Capsule/>} />
        <Route path='/cup' element={<Cup/>} />
        <Route path='/transaction' element={<Transaction/>} />
        <Route path='/b2b' element={<B2b/>} />
      </Routes>
    </div>
  );
}

export default DistributionProducts;
