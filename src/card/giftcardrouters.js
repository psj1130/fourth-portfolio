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
        <Route path='/giftcard/' element={<Giftcard/>}/>
        <Route path='/giftcard/cardintroduce' element={<Cardintroduce/>}/>
        <Route path='/giftcard/check' element={<Check/>}/>
        <Route path='/giftcard/declaration' element={<Declaration/>}/>
        <Route path='/giftcard/question/' element={<Question/>}/>
        
        <Route path='/giftcard/giftbuy' element={<Giftbuy/>}/>
        {/* 단체·기업 구매 컴포넌트 */}
      </Routes>
    </div>
  );
}

export default Giftcardrouters;
