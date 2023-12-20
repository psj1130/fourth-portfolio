import {Route, Routes} from 'react-router-dom';

import Notice from './notice';
//공지사항
import Event from './event';
//이벤트

import Activity from './activitys/activity'
//메이트 희망기금1
import Accompany from './activitys/accompany';
//이디야의 동행4
import Campus from './activitys/campus';
//희망기금 캠퍼스2
import Hygiene from './activitys/hygiene'
//식수위생 캠페인3
import Otheractivities from './activitys/otheractivities';
//가맹점주 자녀5

//상세페이지
import Noticedetail from './noticedetail';
import Eventdetail from './eventdetail';
import Activitydetail from './activitys/details/activitydetail';
import Campusdetail from './activitys/details/campusdetail';
import Hygienedetail from './activitys/details/hygienedetail';
import Accompanydetail from './activitys/details/accompanydetail';
import Otheractivitiesdetail from './activitys/details/otheractivitiesdetail';


function Brandnewsrouters() {
  return (
    <div>
      <Routes>
          {/* 페이지 라우트 */}
        <Route path='/notice' element={<Notice/>}/>
        <Route path='/event' element={<Event/>}/>

        <Route path='/activitys/activity' element={<Activity/>}/>
        <Route path='/activitys/campus' element={<Campus/>}/>
        <Route path='/activitys/hygiene' element={<Hygiene/>}/>
        <Route path='/activitys/accompany' element={<Accompany/>}/>
        <Route path='/activitys/otheractivities' element={<Otheractivities/>}/>

        {/* 상세페이지 id 라우트 */}
        <Route path='notice/:id' element={<Noticedetail />} />
        <Route path='event/:id' element={<Eventdetail />} />

        <Route path='activitys/activity/details/:id' element={<Activitydetail />} />
        <Route path='activitys/campus/details/:id' element={<Campusdetail />} />
        <Route path='activitys/hygiene/details/:id' element={<Hygienedetail />} />
        <Route path='activitys/accompany/details/:id' element={<Accompanydetail />} />
        <Route path='activitys/otheractivities/details/:id' element={<Otheractivitiesdetail />} />
      </Routes>
    </div>
  )
}

export default Brandnewsrouters;
