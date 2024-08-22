import React from 'react';
import Navbar from '../../../components/navbar';
import '../css/test.css';
import fyp1 from '../img/boots/1.png';

function Test() {
  return (
    <>
       <Navbar />
      <h2 style={{ color: 'black', marginTop: '100px', textAlign: 'center' }}>Test</h2>
      <div className="flex-container">
        <div className="flex-item">
          <img src={fyp1} alt="Boots" />   {/* pic here */}
        </div>
        <div className="flex-item product-details">
          <h3>Product Name</h3>  {/* pr name here */}
          <p>Rating: ★★★★☆</p>  {/* rating here */}
          <hr />
          <p>Color: Black</p>  {/* color here */}
          <p>Size: 42</p>  {/* sizes here */}
          <p>Quantity: 1</p>  {/* quantity  here */}
          <hr />
          <button className="btn buy-now">Buy Now</button>
          <button className="btn add-to-cart">Add to Cart</button>
        </div>
      </div>
    </>
  );
}

export default Test;
