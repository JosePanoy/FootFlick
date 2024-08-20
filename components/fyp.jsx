import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import { FaHeart, FaShoppingCart, FaListAlt, FaStar } from 'react-icons/fa';
import '../src/assets/css/fyp.css';

// Static imports
import fyp1 from '../src/assets/img/boots/1.png';
import fyp2 from '../src/assets/img/boots/4.png';
import fyp3 from '../src/assets/img/boots/5.png';
import fyp4 from '../src/assets/img/boots/6.png';
import fyp5 from '../src/assets/img/boots/7.png';
import fyp6 from '../src/assets/img/casual/1.png';
import fyp7 from '../src/assets/img/casual/2.png';
import fyp8 from '../src/assets/img/casual/3.png';
import fyp9 from '../src/assets/img/casual/4.png';
import fyp10 from '../src/assets/img/hiking/11.png';
import fyp11 from '../src/assets/img/hiking/9.png';
import fyp12 from '../src/assets/img/hiking/14.png';
import fyp13 from '../src/assets/img/hiking/6.png';
import fyp14 from '../src/assets/img/moccasins/1.png';
import fyp15 from '../src/assets/img/moccasins/2.png';
import fyp16 from '../src/assets/img/moccasins/3.png';
import fyp17 from '../src/assets/img/running/1.png';
import fyp18 from '../src/assets/img/running/2.png';
import fyp19 from '../src/assets/img/running/3.png';
import fyp20 from '../src/assets/img/running/4.png';
import fyp21 from '../src/assets/img/running/5.png';
import fyp22 from '../src/assets/img/sandals/1.png';
import fyp23 from '../src/assets/img/sandals/2.png';
import fyp24 from '../src/assets/img/sandals/3.png';
import fyp25 from '../src/assets/img/slip-on/1.png';
import fyp26 from '../src/assets/img/slip-on/2.png';
import fyp27 from '../src/assets/img/slip-on/3.png';
import fyp28 from '../src/assets/img/sports/1.png';
import fyp29 from '../src/assets/img/sports/2.png';
import fyp30 from '../src/assets/img/sports/3.png';

// Mapping for product details
const imageMapping = {
  0: { image: fyp1, name: 'Boots', price: '$99.99' },
  1: { image: fyp2, name: 'Boots', price: '$99.99' },
  2: { image: fyp3, name: 'Boots', price: '$99.99' },
  3: { image: fyp4, name: 'Boots', price: '$99.99' },
  4: { image: fyp5, name: 'Boots', price: '$99.99' },
  5: { image: fyp6, name: 'Casual Sneakers', price: '$79.99' },
  6: { image: fyp7, name: 'Casual Sneakers', price: '$79.99' },
  7: { image: fyp8, name: 'Casual Sneakers', price: '$79.99' },
  8: { image: fyp9, name: 'Casual Sneakers', price: '$79.99' },
  9: { image: fyp10, name: 'Hiking Shoes', price: '$119.99' },
  10: { image: fyp11, name: 'Hiking Shoes', price: '$119.99' },
  11: { image: fyp12, name: 'Hiking Shoes', price: '$119.99' },
  12: { image: fyp13, name: 'Hiking Shoes', price: '$119.99' },
  13: { image: fyp14, name: 'Moccasins', price: '$89.99' },
  14: { image: fyp15, name: 'Moccasins', price: '$89.99' },
  15: { image: fyp16, name: 'Moccasins', price: '$89.99' },
  16: { image: fyp17, name: 'Running Shoes', price: '$109.99' },
  17: { image: fyp18, name: 'Running Shoes', price: '$109.99' },
  18: { image: fyp19, name: 'Running Shoes', price: '$109.99' },
  19: { image: fyp20, name: 'Running Shoes', price: '$109.99' },
  20: { image: fyp21, name: 'Running Shoes', price: '$109.99' },
  21: { image: fyp22, name: 'Sandals', price: '$49.99' },
  22: { image: fyp23, name: 'Sandals', price: '$49.99' },
  23: { image: fyp24, name: 'Sandals', price: '$49.99' },
  24: { image: fyp25, name: 'Slip-Ons', price: '$59.99' },
  25: { image: fyp26, name: 'Slip-Ons', price: '$59.99' },
  26: { image: fyp27, name: 'Slip-Ons', price: '$59.99' },
  27: { image: fyp28, name: 'Sports Shoes', price: '$89.99' },
  28: { image: fyp29, name: 'Sports Shoes', price: '$89.99' },
  29: { image: fyp30, name: 'Sports Shoes', price: '$89.99' }
};

const getRandomStars = () => Math.floor(Math.random() * 6);

function FYPpage() {
  const navigate = useNavigate();

  const handleTileClick = (index) => {
    navigate(`/product/${index}`);
  };

  return (
    <>
      <h3 className="just-for-you-heading">Just for You</h3>
      <div className="just-for-you-grid">
        {Object.keys(imageMapping).map((key) => {
          const { image, name, price } = imageMapping[key];
          const starCount = getRandomStars();
          return (
            <div
              className="just-for-you-item"
              key={key}
              onClick={() => handleTileClick(key)}
            >
              <img src={image} alt={`Just for You ${key + 1}`} className="just-for-you-image" />
              <p>{name}</p>
              <p className="shoe-price">{price}</p>
              <div style={{ cursor: 'pointer' }} className="icon-container">
                <FaHeart />
                <FaShoppingCart />
                <FaListAlt />
              </div>
              <div className="star-rating">
                {starCount > 0 ? (
                  [...Array(starCount)].map((_, starIndex) => (
                    <FaStar key={starIndex} className="star-icon" />
                  ))
                ) : (
                  <p className="no-ratings">No ratings yet</p>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default FYPpage;
