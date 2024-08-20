import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Navbar from '../components/navbar';
import NotifSlider from '../components/notife-slide';
import MainImage from '../components/main-image';
import MidCaption from '../components/main-mid-caption';
import FeatureImg from '../components/feature-img';
import FeatureImg2 from '../components/feature-img1';
import Footer from '../components/footer';
import './App.css';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    switch (location.pathname) {
      case '/shop':
        setCurrentPage('shop');
        break;
      case '/bestseller':
        setCurrentPage('bestseller');
        break;
      case '/newarrivals':
        setCurrentPage('newarrivals');
        break;
      case '/brands':
        setCurrentPage('brands');
        break;
      case '/userprofile':
        setCurrentPage('userprofile');
        break;
      case '/cart':
        setCurrentPage('cart');
        break;
      case '/search':
        setCurrentPage('search');
        break;
      case '/product':
        setCurrentPage('product');
        break;
      default:
        setCurrentPage('home');
        break;
    }
  }, [location.pathname]);

  const handleNavigate = (page) => {
    setCurrentPage(page);
    navigate(`/${page}`);
  };

  return (
    <>
      <Navbar />
      <NotifSlider />
      <MainImage />
      <MidCaption />
      <FeatureImg />
      <FeatureImg2 />
      <Footer />
    </>
  );
};

export default App;
