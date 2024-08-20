import React from 'react'
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 

import Shop from './assets/pages/shop';
import BestSeller from './assets/pages/best-seller';
import NewArrivals from './assets/pages/new-arrivals';
import Brands from './assets/pages/brands';
import UserProfile from './assets/pages/user-profile';
import Cart from './assets/pages/cart';
import Test from './assets/pages/test';
import SearchPage from './assets/pages/search';
import ProductPage from './assets/pages/products';

import App from './App'
import './index.css'

const root = createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/bestseller" element={<BestSeller />} />
        <Route path="/newarrivals" element={<NewArrivals />} />
        <Route path="/brands" element={<Brands />} />
        <Route path="/userprofile" element={<UserProfile />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/product/:id" element={<ProductPage />} />

        <Route path="/test" element={<Test />} />
      </Routes>
    </Router>
  </React.StrictMode>


);
