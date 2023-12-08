import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from "react-slick";
import './imageslide.css'

const ImageSlide = (props) => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // arrows: true,
    draggable: false,
    appendDots: (dots) => (
      <div
        style={{
          width: '100%',
          position: 'absolute',
          bottom: '24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
          
        }}
      >
        <ul> {dots} </ul>
      </div>
    ),
    dotsClass: 'dots_custom'
  }

  return (
    <>
          <Slider {...settings}>
          {props.images.map((img) => {
              return(
                <img src={img.img_url} alt='1'></img>
              )
            })}
          </Slider>
    </>
  )
}

export default ImageSlide;