import React, { useState } from 'react';
import Navbar from '../../../components/navbar';
import '../css/test.css';

function Test() {
  const [selectedColor, setSelectedColor] = useState('');
  const [hoveredColor, setHoveredColor] = useState('');
  const [selectedSize, setSelectedSize] = useState('');
  const [hoveredSize, setHoveredSize] = useState('');
  const [quantity, setQuantity] = useState(1);

  const handleBoxClick = (color) => {
    setSelectedColor(color);
  };

  const handleBoxHover = (color) => {
    setHoveredColor(color);
  };

  const handleSizeClick = (size) => {
    setSelectedSize(size);
  };

  const handleSizeHover = (size) => {
    setHoveredSize(size);
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <>
      <Navbar />
      <h2 style={{ color: 'black', marginTop: '100px', textAlign: 'center' }}>Test</h2>
      <div className="grid-box">
        <div className="grid-row row-1">
          <div className="grid-col">1a</div>
          <div className="grid-col col-1b">
            <div className="sub-row">lalalalalalalalalalal</div>
            <div className="sub-row">pr rating</div>
            <div className="sub-row">pr price</div>
          </div>
        </div>
        <div className="grid-row row-2">
          <p style={{ textAlign: 'center', marginTop: '20px' }}>{hoveredColor || selectedColor}</p>
          <div className="rainbow-box" 
               onClick={() => handleBoxClick('Red')}
               onMouseEnter={() => handleBoxHover('Red')}
               onMouseLeave={() => handleBoxHover('')}>
            Red
          </div>
          <div className="rainbow-box" 
               onClick={() => handleBoxClick('Orange')}
               onMouseEnter={() => handleBoxHover('Orange')}
               onMouseLeave={() => handleBoxHover('')}>
            Orange
          </div>
          <div className="rainbow-box" 
               onClick={() => handleBoxClick('Yellow')}
               onMouseEnter={() => handleBoxHover('Yellow')}
               onMouseLeave={() => handleBoxHover('')}>
            Yellow
          </div>
          <div className="rainbow-box" 
               onClick={() => handleBoxClick('Green')}
               onMouseEnter={() => handleBoxHover('Green')}
               onMouseLeave={() => handleBoxHover('')}>
            Green
          </div>
          <div className="rainbow-box" 
               onClick={() => handleBoxClick('Blue')}
               onMouseEnter={() => handleBoxHover('Blue')}
               onMouseLeave={() => handleBoxHover('')}>
            Blue
          </div>
          <div className="rainbow-box" 
               onClick={() => handleBoxClick('Indigo')}
               onMouseEnter={() => handleBoxHover('Indigo')}
               onMouseLeave={() => handleBoxHover('')}>
            Indigo
          </div>
          <div className="rainbow-box" 
               onClick={() => handleBoxClick('Violet')}
               onMouseEnter={() => handleBoxHover('Violet')}
               onMouseLeave={() => handleBoxHover('')}>
            Violet
          </div>
        </div>
        <div className="grid-row row-3">
          <p style={{ textAlign: 'center', marginTop: '20px' }}>{hoveredSize || selectedSize}</p>
          {[...Array(9)].map((_, i) => (
            <div 
              className="size-box" 
              key={i}
              onClick={() => handleSizeClick(`Size ${36 + i}`)}
              onMouseEnter={() => handleSizeHover(`Size ${36 + i}`)}
              onMouseLeave={() => handleSizeHover('')}
            >
              {36 + i}
            </div>
          ))}
        </div>
        <div className="grid-row row-4">
          <div className="grid-col">
            <h3>Choose Quantity</h3>
            <button className="quantity-btn" onClick={decreaseQuantity}>-</button>
            <p className="quantity-display">{quantity}</p>
            <button className="quantity-btn" onClick={increaseQuantity}>+</button>
          </div>
          <div className="grid-col">4b</div>
        </div>
      </div>
    </>
  );
}

export default Test;
