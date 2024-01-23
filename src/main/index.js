import React from 'react';
import './index.css';
import axios from 'axios';
import { API_URL } from '../config/serverurl';
import ImageSlide from '../components/imageslide';
import useAsync from '../config/useAsync';
import Slider from 'react-slick';
import InformationCard from '../components/informationcard';

async function getImages() {
  const res = await axios.get(`${API_URL}/mainimage`);
  console.log(res);
  return res.data;
}

function MainPage() {
  const [ state ] = useAsync(getImages, []);
  const { loading, data:images, error} = state;

  if(loading) return <div>로딩중입니다.....</div>
  if(error) return <div>에러가 발생했습니다.</div>
  if(!images) return null;

  return(
    <div id='mainpage-wrapper'>
      <div id='mainpage-slidebox'>
        <ImageSlide images={images}></ImageSlide>
      </div>
      <section id='mainpage-second'>
        <h2><em>BEANIST</em> INFORMATION CARD</h2>
        <h3>비니스트는 <em>BEAN+Specialist</em>의 합성어로 <em>오직 커피만을 생각해온 커피 전문가</em>를 의미합니다.</h3>
        <div id='mainpage-beanist-img'>
          <InformationCard/>
        </div>
      </section>
      <section id='mainpage-third'>
        <div className='dream-factory-text'>
          <div className='text-container'>
            <h2>
              <em>DREAM FACTORY</em>
              EDIYA COFFEE
            </h2>
            <p>
              최첨단 시설에서 탄생하는 고품질의 원두로<br></br>
              최고의 커피맛을 고객들에게 제공합니다.
            </p>
            <div className='main-page-button'>
              <a href='/'>드림 팩토리</a>
              <a href='/'>드림 물류센터</a>
            </div>
          </div> 
        </div>
        <div className='dream-factory-img'>
          <img src='images/main_banner/dream_factory.png' alt="1"></img>
        </div>
      </section>
      <section id='mainpage-fourth'>
          <div>
            <h2>ALWAYS BESIDE YOU, <em>EDIYA COFFEE</em></h2>
            <h3>늘 당신 곁에, 이디야 커피의 다양한 메뉴를 맛보세요.</h3>
            <div className='main-page-button'>
              <a href='/menu_main'>메뉴보기</a>
            </div>
          </div>
      </section>
      <section id='mainpage-fifth'>
        <div className='mainpage-fifth-container'>
          <h2>고객과 가맹점주, 협력사의 <br></br>상생의 가치를 실천합니다.</h2>
          <p>
            해외에 로열티를 내지 않는 순수한 국내브랜드로<br></br>
            품질좋고 맛있는 정직한 커피를 제공합니다.
          </p>
          <div className='main-page-button'>
            <a href='/'>창업안내</a>
            <a href='/'>창업설명회 안내</a>
            <a href='/'>브랜드 소개</a>
          </div>
        </div>
      </section>
      <section id='mainpage-bottom'>
        <a href='/'>
          <div className='bottom-menu compny-container'>
              <h2>가맹점 개설 안내</h2>
              <p>성공 창업을 위한 선택</p>
          </div>
        </a>
        <div className='bottom-menu find-store'>
          <h2>매장찾기</h2>
          <p>가까운 이디야 매장을 <br></br>확인해보세요.</p>
          <form>
            <input id="bottom-input" type="text" placeholder='FIND A STORE'/>
            <a href='/'><img src='images/logo/main_store_btn.png' alt="1"></img></a>
          </form>
        </div>
        <div className='bottom-menu bottom-news'>
          <div id='bottom-notice'>
            <div id='news-container'>
              <h2>이디야 소식</h2>
              <a href='/brandnews'>more <i className='xi-angle-right-min'></i></a>
            </div>
            <ul>
              <li><a href='/'>2024 다이어리 판매 매장 안내</a><p>2023.11.06</p></li>
              <li><a href='/'>2024 다이어리 출시(11/17) 및 상세페이지</a><p>2023.10.11</p></li>
              <li><a href='/'>2023 메이트 희망기금 지급 일자 안내</a><p>2023.07.10</p></li>
            </ul>
          </div>
          <div id='bottom-brochure'>
            <a href='/'></a>
            <h2>브로슈어 다운받기</h2>
            <img src='images/main_banner/main_brochure_img.png' alt='1'></img>
          </div>
        </div>
      </section>
    </div>
  )
}

export default MainPage;