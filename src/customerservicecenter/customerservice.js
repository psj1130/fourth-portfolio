import Ccm from './ccm';
import Partnership from './partnership';
import Customersound from './customersound';
import {Route, Routes} from 'react-router-dom';

function Customerservice() {
  return (
    <div>
      <Routes>
          <Route path="/" element={<Customersound/>} />
          <Route path="/ccm" element={<Ccm/>} />
          <Route path="/partnership" element={<Partnership />} />
      </Routes>
    </div>
  );
}

export default Customerservice;
