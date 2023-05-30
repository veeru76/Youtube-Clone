import React from 'react'
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ButtonList from './ButtonList';

const BtnSlider = () => {
  const sliderSettings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: false,
  }

  
  return (
    <div>
       <Slider {...sliderSettings}>
       <ButtonList />
       </Slider>
    </div>
  )
}

export default BtnSlider