import React from 'react';
import { FaHeart, FaShoppingCart, FaListAlt, FaStar } from 'react-icons/fa';
import '../src/assets/css/fyp.css'

// Boots (5 images)
import fyp1 from '../src/assets/img/boots/1.png';
import fyp2 from '../src/assets/img/boots/4.png';
import fyp3 from '../src/assets/img/boots/5.png';
import fyp4 from '../src/assets/img/boots/6.png';
import fyp5 from '../src/assets/img/boots/7.png';

// Casual (4 images)
import fyp6 from '../src/assets/img/casual/1.png';
import fyp7 from '../src/assets/img/casual/2.png';
import fyp8 from '../src/assets/img/casual/3.png';
import fyp9 from '../src/assets/img/casual/4.png';

// Hiking (4 images)
import fyp10 from '../src/assets/img/hiking/11.png';
import fyp11 from '../src/assets/img/hiking/9.png';
import fyp12 from '../src/assets/img/hiking/14.png';
import fyp13 from '../src/assets/img/hiking/6.png';

// Moccasins (3 images)
import fyp14 from '../src/assets/img/moccasins/1.png';
import fyp15 from '../src/assets/img/moccasins/2.png';
import fyp16 from '../src/assets/img/moccasins/3.png';

// Running (5 images)
import fyp17 from '../src/assets/img/running/1.png';
import fyp18 from '../src/assets/img/running/2.png';
import fyp19 from '../src/assets/img/running/3.png';
import fyp20 from '../src/assets/img/running/4.png';
import fyp21 from '../src/assets/img/running/5.png';

// Sandals (3 images)
import fyp22 from '../src/assets/img/sandals/1.png';
import fyp23 from '../src/assets/img/sandals/2.png';
import fyp24 from '../src/assets/img/sandals/3.png';

// Slip-on (3 images)
import fyp25 from '../src/assets/img/slip-on/1.png';
import fyp26 from '../src/assets/img/slip-on/2.png';
import fyp27 from '../src/assets/img/slip-on/3.png';

// Sports (3 images)
import fyp28 from '../src/assets/img/sports/1.png';
import fyp29 from '../src/assets/img/sports/2.png';
import fyp30 from '../src/assets/img/sports/3.png';

const justForYouImages = [
    fyp1, fyp2, fyp3, fyp4, fyp5,
    fyp6, fyp7, fyp8, fyp9,
    fyp10, fyp11, fyp12, fyp13,
    fyp14, fyp15, fyp16,
    fyp17, fyp18, fyp19, fyp20, fyp21,
    fyp22, fyp23, fyp24,
    fyp25, fyp26, fyp27,
    fyp28, fyp29, fyp30
  ];

  const getRandomPrice = () => `$${(Math.random() * (150 - 50) + 50).toFixed(2)}`;
    const getRandomStars = () => Math.floor(Math.random() * 6);

function FYPpage() {

    return(

        <>
          <h3 className="just-for-you-heading">Just for You</h3>
            <div className="just-for-you-grid">
                {justForYouImages.map((img, index) => {
                    const starCount = getRandomStars();
                    return (
                        <div className="just-for-you-item" key={index}>
                            <img src={img} alt={`Just for You ${index + 1}`} className="just-for-you-image" />
                            <p>Random Shoe Title {index + 1}</p>
                            <p className="shoe-price">{getRandomPrice()}</p>
                            <div className="icon-container">
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
    )
}

export default FYPpage;