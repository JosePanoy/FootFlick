import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../src/assets/css/navbar.css';

function MidCaption() {
  const navigate = useNavigate();

  const handleShopNowClick = () => {
    navigate('/shop');
  };

  return (
    <div className='midCaption'>
      <h1 className="main-title">INCREASE YOUR SPEED</h1>
      <h3 className="sub-title">Accelerate your game in the next-gen shoes</h3>
      <button className="shop-button" onClick={handleShopNowClick}>Shop Now!</button>
    </div>
  );
}

export default MidCaption;
