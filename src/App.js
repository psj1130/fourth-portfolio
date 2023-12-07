// 메인 라우터 공간
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Buy from './buy/buy';

// 컴포넌트 불러오기
import Header from './include/header';
import Footer from './include/footer';
import MainPage from './main';

function App() {
  return (
    <div className="App">
      <Header/>
      <div id='App_Main'>
        <Buy/>
        {/* <Routes>
          <Route path='/' element={<MainPage/>}/>
        </Routes> */}
      </div>
      <Footer/>
    </div>
  );
}

export default App;
