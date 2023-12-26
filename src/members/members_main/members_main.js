import React, { useState, useRef, useEffect } from 'react';
import './members_main.css';  // CSS 파일 임포트
// import MembersHeader from "../membersh";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Members_main = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [scrollPosition, setScrollPosition] = useState(0);
  const sliderRef = useRef(null);

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const updateProgressBar = () => {
    const progressBar = document.getElementById('progressBar');
    const totalSlides = 3; // 전체 슬라이드 개수
    const progressBarWidth = (currentSlide + 1 / (totalSlides-2)) * 5 + '%';
    progressBar.style.width = progressBarWidth;
  };

   useEffect(() => {
    updateProgressBar();
  }, [currentSlide]);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const settings = {
    arrows: false,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: isPlaying,
    afterChange: (index) => setCurrentSlide(index),
  };

  const pauseAutoplay = () => {
    sliderRef.current.slickPause();
  };

  const playAutoplay = () => {
    sliderRef.current.slickPlay();
  };

  useEffect(() => {
    // 일시 정지 버튼을 누르면 autoplay를 중지
    if (!isPlaying) {
      pauseAutoplay();
    } else {
      playAutoplay();
    }
  }, [isPlaying]);

  return (
    <div className="slider-container">
      {/* <MembersHeader/> */}
      <div>
          <div id="progressBar" />
          <div className="control-buttons">
            <div className="slide-counter">
              {currentSlide + 1} / {settings.slidesToShow + 2}
            </div>
            <button id='toggleplaypause' onClick={togglePlayPause}>
              {isPlaying ? (
                <img src="../images/members_main/icon_stop.png" alt="pause" />
              ) : (
                <img src="../images/members_main/icon_play.png" alt="play" />
              )}
            </button>
          </div>
      </div>
      <Slider ref={sliderRef} {...settings}>
        <div id='mem_main_slide1' >
          <div id='mem_main_slide_item'>
            <div id='mem_main_textbox' >
              <div id='mem_main_text1'><p>내가 원할때 편하게<br/>나의 커피라이프 매니저</p></div>
              <div id='mem_main_text2'><p>NEW 이디야 멤버스</p></div>
            </div>
            <div><img src='../images/members_main/ser_bnr_img1.png' alt="slide1" /></div>
          </div>
        </div>
  
        <div id='mem_main_slide1'>
          <div id='mem_main_slide_item'>
            <div id='mem_main_textbox' className="slick-active">
              <div id='mem_main_text1'><p>새로운 주문서비스를 통해<br/>메뉴주문을 다양하게</p></div>
              <div id='mem_main_text2'><p>배달주문 / 매장주문</p></div>
            </div>
            <div><img src='../images/members_main/ser_bnr_img2.png' alt="slide2" /></div>
          </div>
        </div>
  
        <div id='mem_main_slide1' >
          <div id='mem_main_slide_item'>
            <div id='mem_main_textbox' className="slick-active">
              <div id='mem_main_text1'><p>결제부터 스탬프적립<br/>그리고 쿠폰사용까지 한번에</p></div>
              <div id='mem_main_text2'><p>이디야 QR</p></div>
            </div>
            <div><img src='../images/members_main/ser_bnr_img3.png' alt="slide3" /></div>
          </div>
        </div>
        {/* 추가적인 슬라이드 아이템들 */}
      </Slider>

      <div id="service_item_body">
        <div id="service_item_back">
          <div id="service_textbox1">
            <div id="ser_main_textbox1_1"><p><b id="ser_textblue">서비스 안내</b></p></div>
            <div id="ser_main_textbox1_2"><p>이디야멤버스 회원이라면<br/> 누릴 수 있는 모든 것</p></div>
          </div> 
        </div>


        <div id="service_item_back2" >
          <div id="service_itembox" className={`service_itembox ${scrollPosition > 300 ? 'scroll-true' : 'scroll-inactive'}`}>
            <div id="ser_item1" >
              <div><img id="ser_guide1_img" src="../images/service_guide/service_guide1.png"/></div>
              <div id="ser_item1_textbox1">
                <div id="ser_item1_div1"><p>2. 매장주문, 배달주문</p></div>
                <div id="ser_item1_div2"><p>이디야가 준비한 <b id="ser_textblue">풍부한<br/> 혜택</b>, 함께해요.</p></div>
                <div id="ser_item1_div3"><p>
                  이디야에서 진행하는 다양한 이벤트 소식과 혜택을 편리하게 접하세요~! BLUE등급이 되시면 적립하신 스탬프를 다양한 혜택으로 교환하여 사용하실수 있습니다.
                </p></div>
              </div>
            </div>
            <div id="ser_item2"><img id="ser_guide2_img" src="../images/service_guide/service_guide2.png"/></div>
          </div>
        </div>

        <div >
          <div id="service_itembox" className={`service_itembox ${scrollPosition > 1000 ? 'scroll-true' : 'scroll-inactive'}`}>
            <div id="ser_item2"><img id="ser_guide2_img" src="../images/service_guide/service_guide3.png"/></div>
            <div id="ser_item1">
              <div><img id="ser_guide1_img" src="../images/service_guide/service_guide4.png"/></div>
              <div id="ser_item1_textbox1">
                <div id="ser_item1_div1"><p>2. 매장주문, 배달주문</p></div>
                <div id="ser_item1_div2"><p><b id="ser_textblue">다양해진 주문 서비스</b>를<br/>  이용해보세요.</p></div>
                <div id="ser_item1_div3"><p>
                  새롭게 선보이는 매장주문/배달주문 서비스를 통해 더욱 다양한 메뉴를 주문할 수 있어요.
                </p></div>
              </div>
            </div>
          </div>
        </div>

        <div id="service_item_back2">
          <div id="service_itembox" className={`service_itembox ${scrollPosition > 1800 ? 'scroll-true' : 'scroll-inactive'}`}>
            <div id="ser_item1">
              <div><img id="ser_guide1_img" src="../images/service_guide/service_guide5.png"/></div>
              <div id="ser_item1_textbox1">
                <div id="ser_item1_div1"><p>3. 이디야 QR , 월렛</p></div>
                <div id="ser_item1_div2"><p><b id="ser_textblue">결제</b>부터 <b id="ser_textblue">스탬프적립</b>,<br/> 쿠폰사용까지 <b id="ser_textblue">한번에</b></p></div>
                <div id="ser_item1_div3"><p>
                  이디야 QR을 매장에서 보여주면 결제부터 스탬프 적립까지 한번에 가능해요. 기프트카드도 월렛에 등록하여 편리하게 사용해보세요.
                </p></div>
              </div>
            </div>
            <div id="ser_item2"><img id="ser_guide2_img" src="../images/service_guide/service_guide6.png"/></div>
          </div>
        </div>

        <div>
          <div id="service_itembox" className={`service_itembox ${scrollPosition > 2600 ? 'scroll-true' : 'scroll-inactive'}`}>
            <div id="ser_item2"><img id="ser_guide2_img" src="../images/service_guide/service_guide8.png"/></div>
            <div id="ser_item1">
              <div><img id="ser_guide1_img" src="../images/service_guide/service_guide7.png"/></div>
              <div id="ser_item1_textbox1">
                <div id="ser_item1_div1"><p>4. 이디야소식, E-미션</p></div>
                <div id="ser_item1_div2"><p><b id="ser_textblue">신상품</b>과 <b id="ser_textblue">브랜드 소식</b>을 접하고 <b id="ser_textblue">리워드 혜택</b>도<br/> 받고</p></div>
                <div id="ser_item1_div3"><p>
                  컨텐츠 영상을 시청하거나 퀴즈를 푸시는 고객분들께 선착순으로 스탬프 혜택을 드립니다.
                </p></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id='service_main_news'>
        <div id='main_news_contaienr'>
          <div id='news_textbox1'>
            <div id='news_text1div1'><p><b id="ser_textblue">공지사항</b></p></div>
            <div id='news_text1div2'><p>News & Notice</p></div>
          </div>
          <div id='news_textbox2'>
            <div id='news_text2div1'><p>이디야멤버스 개인정보처리방침 개정 안내</p><p id='news_datatext'>2023.09.06</p></div>
            <div id='news_text2div1'><p>이디야멤버스 스탬프 적립 및 쿠폰사용 변경 안내</p><p id='news_datatext'>2023.04.24</p></div>
            <div id='news_text2div1'><p>이디야멤버스 이용약관 개정 안내</p><p id='news_datatext'>2023.04.24</p></div>
          </div>
        </div>
      </div>

      <div id='service_menu_main_imagback'>
        <div id='service_customer_support_container'>
          <div id='customer_support_textbox1'>
            <div id='customer_support_text1'><p><b id="ser_textblue">고객지원</b></p></div>
            <div id='customer_support_text2'><p>도움이 필요하신가요?</p></div>
            <div id='customer_support_text3'><p>고객지원 서비스를 통해 문의해주세요.</p></div>
            <div id='customer_support_text4'><p>고객센터 02-543-6467</p></div>
            <div id='customer_support_text5'><p>※ 고객의 소리 운영시간 : 09:00~18:00 (주말/공휴일 휴무)</p></div>
            <div id='customer_support_text5'><p>※ 이디야멤버스 APP 이용 문의 : 09:00~22:00 (연중무휴)</p></div>
          </div>
          <div id='customer_support_textbox2'>
            <div id='customer_support_text'><p>자주 하는 질문</p></div>
            <div id='customer_support_text'><p>1:1 문의하기</p></div>
            <div id='customer_support_text'><p>1:1 문의내역</p></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Members_main;