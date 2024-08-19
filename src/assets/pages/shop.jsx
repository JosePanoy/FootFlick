import React, { useState, useEffect } from 'react';
import Navbar from '../../../components/navbar';
import '../css/shop.css';
import { useInView } from 'react-intersection-observer';
import { useSpring, animated, easings } from 'react-spring';
import { FaHeart, FaShoppingCart, FaListAlt } from 'react-icons/fa'; 


import RunningSHoes from '../img/running.png';
import CasualSHoes from '../img/casual.png';
import SportsSHoes from '../img/sports.png';
import BootsSHoes from '../img/boots.png';
import SandalsSHoes from '../img/sandals.png';
import SlipOnsSHoes from '../img/slip-on.png';
import HikingSHoes from '../img/hiking.png';
import MoccasinsSHoes from '../img/moccasins.png';

// Boots (5 images)
import fyp1 from '../img/boots/1.png';
import fyp2 from '../img/boots/4.png';
import fyp3 from '../img/boots/5.png';
import fyp4 from '../img/boots/6.png';
import fyp5 from '../img/boots/7.png';

// Casual (4 images)
import fyp6 from '../img/casual/1.png';
import fyp7 from '../img/casual/2.png';
import fyp8 from '../img/casual/3.png';
import fyp9 from '../img/casual/4.png';

// Hiking (4 images)
import fyp10 from '../img/hiking/11.png';
import fyp11 from '../img/hiking/9.png';
import fyp12 from '../img/hiking/14.png';
import fyp13 from '../img/hiking/6.png';

// Moccasins (3 images)
import fyp14 from '../img/moccasins/1.png';
import fyp15 from '../img/moccasins/2.png';
import fyp16 from '../img/moccasins/3.png';

// Running (5 images)
import fyp17 from '../img/running/1.png';
import fyp18 from '../img/running/2.png';
import fyp19 from '../img/running/3.png';
import fyp20 from '../img/running/4.png';
import fyp21 from '../img/running/5.png';

// Sandals (3 images)
import fyp22 from '../img/sandals/1.png';
import fyp23 from '../img/sandals/2.png';
import fyp24 from '../img/sandals/3.png';

// Slip-on (3 images)
import fyp25 from '../img/slip-on/1.png';
import fyp26 from '../img/slip-on/2.png';
import fyp27 from '../img/slip-on/3.png';

// Sports (3 images)
import fyp28 from '../img/sports/1.png';
import fyp29 from '../img/sports/2.png';
import fyp30 from '../img/sports/3.png';

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
  



function Shop() {
  const shoeTypes = [
    { id: 1, name: 'Running Shoes', image: RunningSHoes },
    { id: 2, name: 'Casual Sneakers', image: CasualSHoes },
    { id: 4, name: 'Sports Shoes', image: SportsSHoes },
    { id: 5, name: 'Boots', image: BootsSHoes },
    { id: 6, name: 'Sandals', image: SandalsSHoes },
    { id: 7, name: 'Slip-Ons', image: SlipOnsSHoes },
    { id: 8, name: 'Hiking Shoes', image: HikingSHoes },
    { id: 9, name: 'Moccasins', image: MoccasinsSHoes }
  ];

  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const fadeInLeft1 = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateX(0)' : 'translateX(-30px)',
    config: { duration: 1000, easing: easings.linear },
  });

  


  return (
    <>
      <Navbar />
      <h3 className="shoe-types-heading">Types of Shoes</h3>
      <animated.div ref={ref} className="shoe-types-grid">
        {shoeTypes.map(shoe => (
          <animated.div style={fadeInLeft1} key={shoe.id} className="shoe-type-item">
            <img src={shoe.image} alt={shoe.name} className="shoe-type-image" />
            <p className="shoe-type-name">{shoe.name}</p>
          </animated.div>
        ))}
      </animated.div>



      <h3 className="just-for-you-heading">Just for You</h3>
      <div className="just-for-you-grid">
  {justForYouImages.map((img, index) => (
    <div className="just-for-you-item" key={index}>
      <img src={img} alt={`Just for You ${index + 1}`} className="just-for-you-image" />
      <p>Random Shoe Title {index + 1}</p>
      <div>
        <FaHeart />
        <FaShoppingCart />
        <FaListAlt />
      </div>
    </div>
  ))}
</div>

    </>
  );
}

export default Shop;
