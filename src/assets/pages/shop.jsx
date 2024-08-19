import React, { useState, useEffect } from 'react';
import Navbar from '../../../components/navbar';
import '../css/shop.css';
import { useInView } from 'react-intersection-observer';
import { useSpring, animated, easings } from 'react-spring';
import FYPpage from '../../../components/fyp';


import RunningSHoes from '../img/running.png';
import CasualSHoes from '../img/casual.png';
import SportsSHoes from '../img/sports.png';
import BootsSHoes from '../img/boots.png';
import SandalsSHoes from '../img/sandals.png';
import SlipOnsSHoes from '../img/slip-on.png';
import HikingSHoes from '../img/hiking.png';
import MoccasinsSHoes from '../img/moccasins.png';


  

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

        <FYPpage />
    
    
    </>
  );
}

export default Shop;
