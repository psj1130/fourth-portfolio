import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from "react-slick";
import './informationcard.css'
import { Link } from 'react-router-dom';

const InformationCard = (props) => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: true,
    // arrows: true,
    draggable: false,
    appendDots: (dots) => (
      <div
        style={{
          width: '100%',
          position: 'absolute',
          bottom: '-35px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: '8' 
        }}
      >
        <ul> {dots} </ul>
      </div>
    ),
    dotsClass: 'dots_custom2'
  }

  return (
    <>
          <Slider {...settings}>
            <div className='beanist_img'>
              <ul>
                <li>
                  <Link to='/dp'>
                    <img src='images/main_beanist/main_beanist_ame01.png' alt=''></img>
                    <dl>
                      <dt>
                        비니스트
                        <span>오리지널 아메리카노</span>
                      </dt>
                      <dd>Beanist Original Americano</dd>
                    </dl>
                  </Link>
                </li>
                <li>
                  <Link to='/dp'>
                    <img src='images/main_beanist/main_beanist_ame02.png' alt=''></img>
                    <dl>
                      <dt>
                        비니스트
                        <span>마일드 아메리카노</span>
                      </dt>
                      <dd>Beanist Mild Americano</dd>
                    </dl>
                  </Link>
                </li>
                <li>
                  <Link to='/dp'>
                    <img src='images/main_beanist/main_beanist_ame03.png' alt=''></img>
                    <dl>
                      <dt>
                        비니스트
                        <span>스페셜 아메리카노</span>
                      </dt>
                      <dd>Beanist Special Americano</dd>
                    </dl>
                  </Link>
                </li>
              </ul>
            </div>
            <div className='beanist_img'>
              <ul>
                <li>
                  <Link to='/dp'>
                    <img src='images/main_beanist/main_beanist_latte01.png' alt=''></img>
                    <dl>
                      <dt>
                        비니스트
                        <span>카페 라떼</span>
                      </dt>
                      <dd>Beanist Cafe Latte</dd>
                    </dl>
                  </Link>
                </li>
                <li>
                  <Link to='/dp'>
                    <img src='images/main_beanist/main_beanist_latte02.png' alt=''></img>
                    <dl>
                      <dt>
                        비니스트
                        <span>바닐라 라떼</span>
                      </dt>
                      <dd>Beanist Vanilla Latte</dd>
                    </dl>
                  </Link>
                </li>
                <li>
                  <Link to='/dp'>
                    <img src='images/main_beanist/main_beanist_latte03.png' alt=''></img>
                    <dl>
                      <dt>
                        비니스트
                        <span>초콜릿 칩 라떼</span>
                      </dt>
                      <dd>Beanist Chocolate Chip Latte</dd>
                    </dl>
                  </Link>
                </li>
                <li>
                  <Link to='/dp'>
                    <img src='images/main_beanist/main_beanist_latte04.png' alt=''></img>
                    <dl>
                      <dt>
                        비니스트
                        <span>토피 넛 라떼</span>
                      </dt>
                      <dd>Beanist Toffe Nut Latte</dd>
                    </dl>
                  </Link>
                </li>
              </ul>
            </div>
            <div className='beanist_img'>
              <ul>
                <li>
                  <Link to='/dp'>
                    <img src='images/main_beanist/main_beanist_mix01.png' alt=''></img>
                    <dl>
                      <dt>
                        모카블렌드
                        <span>커피믹스</span>
                      </dt>
                      <dd>Mocha Blend Coffee Mix</dd>
                    </dl>
                  </Link>
                </li>
                <li>
                  <Link to='/dp'>
                    <img src='images/main_beanist/main_beanist_mix02.png' alt=''></img>
                    <dl>
                      <dt>
                        골드블렌드
                        <span>커피믹스</span>
                      </dt>
                      <dd>Gold Blend Coffee Mix</dd>
                    </dl>
                  </Link>
                </li>
              </ul>
            </div>
          </Slider>
    </>
  )
}

export default InformationCard;