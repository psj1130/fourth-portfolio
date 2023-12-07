// 메인 라우터 공간
import './App.css';
import Affiliatecard from './card/affiliatecard';
import { Routes, Route } from 'react-router-dom';

// 컴포넌트 불러오기
import Header from './include/header';
import Footer from './include/footer';
import MainPage from './main';
import Giftcard from './card/giftcard';

function App() {
  return (
    <div className="App">
      <Header/>
      <div id='App_Main'>
        <Routes>
          <Route path='/' element={<MainPage/>}/>
          <Route path='/card/affiliatecard' element={<Affiliatecard/>}/>
          <Route path='/card/giftcard' element={<Giftcard/>}/>
        </Routes>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
