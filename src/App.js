// 메인 라우터 공간
import './App.css';
import Affiliatecard from './card/affiliatecard';
import { Routes, Route } from 'react-router-dom';

// 컴포넌트 불러오기
import Header from './include/header';
import Footer from './include/footer';
import MainPage from './main';
import Giftcard from './card/giftcard';
import Buy from "./card/buy";
import Check from './card/check'
import Introduce from './card/cardintroduce' 
import Declaration from './card/declaration';
import Question from './card/question';
import Brandnews from './brandnews/index';
import Event from './brandnews/event';
import Activity from './brandnews/activitys/activity';
import Campus from './brandnews/activitys/campus';
import Hygiene from './brandnews/activitys/hygiene';
import Accompany from './brandnews/activitys/accompany';
import Otheractivities from './brandnews/activitys/otheractivities';

function App() {
  return (
    <div className="App">
      <Header/>
      <div id='App_Main'>
        <Routes>
          <Route path='/' element={<MainPage/>}/>
          <Route path='/card/affiliatecard' element={<Affiliatecard/>}/>
          <Route path='/card/giftcard' element={<Giftcard/>}/>
          <Route path='/card/giftcard/buy' element={<Buy/>}/>
          <Route path='/card/giftcard/check' element={<Check/>}/>
          <Route path='/card/giftcard/cardintroduce' element={<Introduce/>}/>
          <Route path='/card/giftcard/declaration' element={<Declaration/>}/>
          <Route path='/card/giftcard/question/' element={<Question/>}/>
          <Route path='/brandnews/' element={<Brandnews/>}/>
          <Route path='/brandnews/event' element={<Event/>}/>
          <Route path='/brandnews/activitys/activity' element={<Activity/>}/>
          <Route path='/brandnews/activitys/campus' element={<Campus/>}/>
          <Route path='/brandnews/activitys/hygiene' element={<Hygiene/>}/>
          <Route path='/brandnews/activitys/accompany' element={<Accompany/>}/>
          <Route path='/brandnews/activitys/otheractivities' element={<Otheractivities/>}/>
        </Routes>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
