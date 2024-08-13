import React, { useState } from 'react';
import { FiMenu, FiSearch } from 'react-icons/fi'; 
import '../src/assets/css/navbar.css';
import SiteLogo from '../public/logo.png';

function Navbar() {
    const [isSidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(prevState => !prevState);
    };

    return (
        <>
            <nav className="navbar">
                <div className="navbar-logo">
                    <img src={SiteLogo} alt="Site Logo" className="site-logo" />
                    <span className="site-name">Foot Flick</span>
                </div>
                <div className="navbar-links">
                    <a href="/" className="nav-link">Home</a>
                    <a href="/shop" className="nav-link">Shop</a>
                    <a href="/bestseller" className="nav-link">Best Sellers</a>
                    <a href="/newarrivals" className="nav-link">New Arrivals</a>
                    <a href="/brands" className="nav-link">Brands</a>
                    <a href="/userprofile" className="nav-link">User Profile</a>
                    <a href="/cart" className="nav-link">Cart</a>
                    <a href="/test" className="nav-link">Test Page</a>
                </div>
                <FiMenu className="menu-icon" onClick={toggleSidebar} />
                <div className="search-bar">
                    <input type="text" placeholder="Search..." />
                    <FiSearch className="search-icon" />
                </div>
            </nav>
            <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
                <a href="/" className="sidebar-link">Home</a>
                <a href="/shop" className="sidebar-link">Shop</a>
                <a href="/bestseller" className="sidebar-link">best Sellers</a>
                <a href="/newarrivals" className="sidebar-link">New Arrivals</a>
                <a href="/brands" className="sidebar-link">Brands</a>
                <a href="/userprofiles" className="sidebar-link">User Profiles</a>
                <a href="/cart" className="sidebar-link">Cart</a>
                <a href="/testpage" className="sidebar-link">Test Page</a>

            </div>
        </>
    );
}

export default Navbar;
