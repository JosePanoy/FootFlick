import React from 'react';
import pic1 from '../src/assets/img/curry.jpg';
import pic2 from '../src/assets/img/lebron.jpg';
import '../src/assets/css/feature-img2.css';

function FeatureImg2() {
  return (
    <div className="feature-img2-container">
      <h2 style={{textAlign: 'left'}}>Don't Miss</h2>
      <div className="images-container">
        <img src={pic1} alt="Curry" className="feature-img2" />
        <img src={pic2} alt="LeBron" className="feature-img2" />
      </div>
    </div>
  );
}

export default FeatureImg2;
