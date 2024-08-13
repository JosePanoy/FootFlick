import React from 'react';
import Slider from 'react-slick';
import img1 from '../src/assets/img/2.jpg';
import img2 from '../src/assets/img/3.jpg';
import img3 from '../src/assets/img/4.jpg';
import img4 from '../src/assets/img/5.jpg';
import img5 from '../src/assets/img/6.jpg';
import '../src/assets/css/feature-img.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function FeatureImg() {
  const settings = {
    dots: false, 
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false, // Disable arrows
    centerMode: true,
    centerPadding: '15px',
  };

  return (
    <div className="feature-img-container">
      <div className="feature-caption">Feature</div>
      <Slider {...settings} className="feature-slider">
        <div className="slide">
          <img src={img1} alt="Feature 1" className="feature-img" />
          <div className="image-caption">Future Puma 7 Ultimate MG</div>
        </div>
        <div className="slide">
          <img src={img2} alt="Feature 2" className="feature-img" />
          <div className="image-caption">Nike Mercurial Superfly 10 Elite Electric</div>
        </div>
        <div className="slide">
          <img src={img3} alt="Feature 3" className="feature-img" />
          <div className="image-caption">Predator Elite Fold-Over Tongue Firm Ground Boots</div>
        </div>
        <div className="slide">
          <img src={img4} alt="Feature 4" className="feature-img" />
          <div className="image-caption">Nike Mercurial Vapor 15</div>
        </div>
        <div className="slide">
          <img src={img5} alt="Feature 5" className="feature-img" />
          <div className="image-caption">Nike Mercurial Vapor 16</div>
        </div>
      </Slider>
    </div>
  );
}

export default FeatureImg;
