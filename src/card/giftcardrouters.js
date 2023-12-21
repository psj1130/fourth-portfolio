import {Route, Routes} from 'react-router-dom';

import Giftcard from './giftcard';
import Check from './check';
import Declaration from './declaration';
import Giftbuy from './giftbuy'
import Question from './question/index'
import Cardintroduce from './cardintroduce'


function Giftcardrouters() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Giftcard/>}/>
        <Route path='/cardintroduce' element={<Cardintroduce/>}/>
        <Route path='check' element={<Check/>}/>
        <Route path='/declaration' element={<Declaration/>}/>
        <Route path='/question/' element={<Question/>}/>
        
        <Route path='/giftbuy' element={<Giftbuy/>}/>
        {/* 단체·기업 구매 컴포넌트 */}
      </Routes>
    </div>
  );
}

export default Giftcardrouters;
