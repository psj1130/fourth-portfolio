import {Route, Routes} from 'react-router-dom';

import Brandnews from '.';
import Event from './event';

import Society from './activitys';

// //메이트 희망기금1
import Accompany from './activitys/accompany';
// //이디야의 동행4
import Campus from './activitys/campus';
// //희망기금 캠퍼스2
import Hygiene from './activitys/hygiene'
// // 식수위생 캠페인3
import Otheractivities from './activitys/otheractivities';
// // 가맹점주 자녀5


function Brandnewsrouters() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Brandnews/>}/>
        <Route path='/event' element={<Event/>}/>
        
        <Route path='/activitys' element={<Society/>}/>
        <Route path='/activitys/campus' element={<Campus/>}/>
        <Route path='/activitys/hygiene' element={<Hygiene/>}/>
        <Route path='/activitys/accompany' element={<Accompany/>}/>
        <Route path='/activitys/otheractivities' element={<Otheractivities/>}/>
      </Routes>
    </div>
  );
}

export default Brandnewsrouters;
