import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../../../components/navbar';
import { FaHeart, FaShoppingCart, FaListAlt, FaStar } from 'react-icons/fa';
import '../css/products.css';

import fyp1 from '../img/boots/1.png';
import fyp2 from '../img/boots/4.png';
import fyp3 from '../img/boots/5.png';
import fyp4 from '../img/boots/6.png';
import fyp5 from '../img/boots/7.png';
import fyp6 from '../img/casual/1.png';
import fyp7 from '../img/casual/2.png';
import fyp8 from '../img/casual/3.png';
import fyp9 from '../img/casual/4.png';
import fyp10 from '../img/hiking/11.png';
import fyp11 from '../img/hiking/9.png';
import fyp12 from '../img/hiking/14.png';
import fyp13 from '../img/hiking/6.png';
import fyp14 from '../img/moccasins/1.png';
import fyp15 from '../img/moccasins/2.png';
import fyp16 from '../img/moccasins/3.png';
import fyp17 from '../img/running/1.png';
import fyp18 from '../img/running/2.png';
import fyp19 from '../img/running/3.png';
import fyp20 from '../img/running/4.png';
import fyp21 from '../img/running/5.png';
import fyp22 from '../img/sandals/1.png';
import fyp23 from '../img/sandals/2.png';
import fyp24 from '../img/sandals/3.png';
import fyp25 from '../img/slip-on/1.png';
import fyp26 from '../img/slip-on/2.png';
import fyp27 from '../img/slip-on/3.png';
import fyp28 from '../img/sports/1.png';
import fyp29 from '../img/sports/2.png';
import fyp30 from '../img/sports/3.png';

const imageMapping = {
    0: { image: fyp1, name: 'Boots', price: '$99.99', rating: 4 },
    1: { image: fyp2, name: 'Boots', price: '$99.99', rating: 3 },
    2: { image: fyp3, name: 'Boots', price: '$99.99', rating: 5 },
    3: { image: fyp4, name: 'Boots', price: '$99.99', rating: 2 },
    4: { image: fyp5, name: 'Boots', price: '$99.99', rating: 4 },
    5: { image: fyp6, name: 'Casual Sneakers', price: '$79.99', rating: 5 },
    6: { image: fyp7, name: 'Casual Sneakers', price: '$79.99', rating: 3 },
    7: { image: fyp8, name: 'Casual Sneakers', price: '$79.99', rating: 4 },
    8: { image: fyp9, name: 'Casual Sneakers', price: '$79.99', rating: 2 },
    9: { image: fyp10, name: 'Hiking Shoes', price: '$119.99', rating: 5 },
    10: { image: fyp11, name: 'Hiking Shoes', price: '$119.99', rating: 4 },
    11: { image: fyp12, name: 'Hiking Shoes', price: '$119.99', rating: 3 },
    12: { image: fyp13, name: 'Hiking Shoes', price: '$119.99', rating: 5 },
    13: { image: fyp14, name: 'Moccasins', price: '$89.99', rating: 4 },
    14: { image: fyp15, name: 'Moccasins', price: '$89.99', rating: 3 },
    15: { image: fyp16, name: 'Moccasins', price: '$89.99', rating: 5 },
    16: { image: fyp17, name: 'Running Shoes', price: '$109.99', rating: 4 },
    17: { image: fyp18, name: 'Running Shoes', price: '$109.99', rating: 5 },
    18: { image: fyp19, name: 'Running Shoes', price: '$109.99', rating: 3 },
    19: { image: fyp20, name: 'Running Shoes', price: '$109.99', rating: 4 },
    20: { image: fyp21, name: 'Running Shoes', price: '$109.99', rating: 2 },
    21: { image: fyp22, name: 'Sandals', price: '$49.99', rating: 5 },
    22: { image: fyp23, name: 'Sandals', price: '$49.99', rating: 3 },
    23: { image: fyp24, name: 'Sandals', price: '$49.99', rating: 4 },
    24: { image: fyp25, name: 'Slip-Ons', price: '$59.99', rating: 2 },
    25: { image: fyp26, name: 'Slip-Ons', price: '$59.99', rating: 5 },
    26: { image: fyp27, name: 'Slip-Ons', price: '$59.99', rating: 3 },
    27: { image: fyp28, name: 'Sports Shoes', price: '$89.99', rating: 4 },
    28: { image: fyp29, name: 'Sports Shoes', price: '$89.99', rating: 5 },
    29: { image: fyp30, name: 'Sports Shoes', price: '$89.99', rating: 3 }
  };
function ProductPage() {
    const { id } = useParams();
    const product = imageMapping[id] || { image: '', name: 'Product not found', price: '', description: 'No description available', rating: 0 };
  
    const [quantity, setQuantity] = useState(1);
    const [selectedColor, setSelectedColor] = useState('');
    const [selectedSize, setSelectedSize] = useState('');
    const [selectionSummary, setSelectionSummary] = useState('');
  
    const handleQuantityChange = (event) => {
      const value = event.target.value;
      if (value === "" || !isNaN(parseInt(value, 10))) {
        const numberValue = parseInt(value, 10);
        if (numberValue > 0 || value === "") {
          setQuantity(numberValue > 0 ? numberValue : "");
          updateSelectionSummary(selectedColor, selectedSize, numberValue > 0 ? numberValue : 0);
        }
      }
    };
  
    const handleColorSelect = (color) => {
      setSelectedColor(color);
      updateSelectionSummary(color, selectedSize, quantity);
    };
  
    const handleSizeSelect = (size) => {
      setSelectedSize(size);
      updateSelectionSummary(selectedColor, size, quantity);
    };
  
    const updateSelectionSummary = (color, size, quantity) => {
      setSelectionSummary(`Color: ${color}, Size: ${size}, Quantity: ${quantity}`);
    };
  
    return (
      <>
        <Navbar />
        <h2 style={{ color: 'black', marginTop: '80px', textAlign: 'center' }} className="title">Product Page</h2>
        <div className="flex-container">
          <div className="flex-item">
            <img src={product.image} alt={product.name} />
          </div>
          <div className="flex-item product-details">
            <h3 style={{ fontSize: '2rem' }}>{product.name}</h3>
            <p style={{ color: 'orangered', cursor: 'default', fontSize: '1.5rem' }}>{product.price}</p>

            <div className="rating">
              {Array(5).fill().map((_, i) => (
                <FaStar key={i} className={`star-icon ${i < product.rating ? 'filled' : ''}`} />
              ))}
            </div>
            <hr />

            <div className="colors">
              <h2>Colors</h2>
              <div className="color-boxes">
                {['Red', 'Lime', 'Blue', 'Yellow', 'Fuchsia', 'Aqua'].map(color => (
                  <div 
                    key={color} 
                    className={`color-box ${selectedColor === color ? 'selected' : ''}`} 
                    style={{ backgroundColor: color }} 
                    onClick={() => handleColorSelect(color)}
                  ></div>
                ))}
              </div>
            </div>

            <div className="sizes">
              <h2>Sizes</h2>
              <div className="size-boxes">
                {['S', 'M', 'L', 'XL', 'XXL'].map(size => (
                  <div 
                    key={size} 
                    className={`size-box ${selectedSize === size ? 'selected' : ''}`} 
                    onClick={() => handleSizeSelect(size)}
                  >
                    {size}
                  </div>
                ))}
              </div>
            </div>

            <div className="quantity">
              <h2>Select Quantity</h2>
              <input 
                type="number" 
                value={quantity} 
                onChange={handleQuantityChange} 
                min="1" 
                className="quantity-input"
              />
            </div>

            <hr />
            <div className="product-summary">
  <p>Color: <span style={{ fontWeight: 'bold' }}>{selectedColor || 'Select a color'}</span></p>
  <p>Size: <span style={{ fontWeight: 'bold' }}>{selectedSize || 'Select a size'}</span></p>
  <p>Quantity: <span style={{ fontWeight: 'bold' }}>{quantity}</span></p>
</div>

            <hr />

            <button className="btn buy-now">Buy Now</button>
            <button className="btn add-to-cart">Add to Cart</button>
          </div>
        </div>
      </>
    );
}

export default ProductPage;