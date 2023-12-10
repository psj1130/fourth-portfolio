// 메인 라우터 공간
import './App.css';
import { Routes, Route } from 'react-router-dom';

// 컴포넌트 불러오기
import Header from './include/header';
import Footer from './include/footer';
import MainPage from './main';

import Beans from './Beans_Quality/beans';
import Quality from './Beans_Quality/quality';

function App() {
  return (
    <div className="App">
      <Header/>
      <div id='App_Main'>
        <Routes>
          <Route path='/' element={<MainPage/>}/>
          <Route path='/beans' element={<Beans/>}/>
          <Route path='/quality' element={<Quality/>}/>
        </Routes>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
