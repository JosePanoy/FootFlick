import React from 'react';
import IMG1 from '../src/assets/img/1.jpg';
import '../src/assets/css/navbar.css';

function MainImage() {
  return (
    <div className="main-image-container">
      <img src={IMG1} alt="Main" className="main-image" />
    </div>
  );
}

export default MainImage;
