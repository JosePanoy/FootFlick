import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { FiMenu, FiSearch } from 'react-icons/fi'; 
import { Link } from 'react-router-dom';
import '../src/assets/css/navbar.css';
import SiteLogo from '../public/logo.png';

function Navbar() {
    const [isSidebarOpen, setSidebarOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState(''); // State for search query
    const navigate = useNavigate(); // Initialize navigate

    const toggleSidebar = () => {
        setSidebarOpen(prevState => !prevState);
    };

    const handleSearch = () => {
        if (searchQuery.trim()) {
            navigate(`/search?query=${encodeURIComponent(searchQuery)}`); // Redirect to search page
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleSearch(); // Trigger search on Enter key press
        }
    };

    return (
        <>
            <nav className="navbar">
                <div className="navbar-logo">
                    <img src={SiteLogo} alt="Site Logo" className="site-logo" />
                    <span className="site-name">Foot Flick</span>
                </div>
                <div className="navbar-links">
                    <Link to="/" className="nav-link">Home</Link>
                    <Link to="/shop" className="nav-link">Shop</Link>
                    <Link to="/bestseller" className="nav-link">Best Sellers</Link>
                    <Link to="/newarrivals" className="nav-link">New Arrivals</Link>
                    <Link to="/brands" className="nav-link">Brands</Link>
                    <Link to="/userprofile" className="nav-link">User Profile</Link>
                    <Link to="/cart" className="nav-link">Cart</Link>
                    <Link to="/test" className="nav-link">Test Page</Link>
                </div>
                <FiMenu className="menu-icon" onClick={toggleSidebar} />
                <div className="search-bar">
                    <input
                        type="text"
                        placeholder="Search..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)} 
                        onKeyDown={handleKeyDown} 
                    />
                    <FiSearch className="search-icon" onClick={handleSearch} /> 
                </div>
            </nav>
            <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
                <Link to="/" className="sidebar-link">Home</Link>
                <Link to="/shop" className="sidebar-link">Shop</Link>
                <Link to="/bestseller" className="sidebar-link">Best Sellers</Link>
                <Link to="/newarrivals" className="sidebar-link">New Arrivals</Link>
                <Link to="/brands" className="sidebar-link">Brands</Link>
                <Link to="/userprofile" className="sidebar-link">User Profile</Link>
                <Link to="/cart" className="sidebar-link">Cart</Link>
                <Link to="/test" className="sidebar-link">Test Page</Link>
            </div>
        </>
    );
}

export default Navbar;
