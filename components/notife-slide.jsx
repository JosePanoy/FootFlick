import React from 'react';
import Slider from 'react-slick';
import '../src/assets/css/notif-slider.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function NotifSlider() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div className="slide">
          <div className="caption">Huge Sale on All Sneakers - Up to 50% Off!</div>
        </div>
        <div className="slide">
          <div className="caption">Arrivals: Latest Sneaker Designs Just Released!</div>
        </div>
        <div className="slide">
          <div className="caption">Limited Time Offer: Buy One Get One 30% Off!</div>
        </div>
        <div className="slide">
          <div className="caption">Exclusive Discount: 20% Off on All Running Shoes!</div>
        </div>
        <div className="slide">
          <div className="caption">Seasonal Sale: Extra 10% Off on Clearance Items!</div>
        </div>
      </Slider>
    </div>
  );
}

export default NotifSlider;
