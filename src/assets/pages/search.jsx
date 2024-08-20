import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../../../components/navbar';
import '../css/search.css';

function SearchPage() {
    const location = useLocation();
    const query = new URLSearchParams(location.search).get('query');
    const [images, setImages] = useState([]);

    useEffect(() => {
        const fetchImages = async () => {
            try {
                const response = await fetch(`https://api.unsplash.com/search/photos?query=${query}&per_page=15`, {
                    method: 'GET',
                    headers: {
                        Authorization: `Client-ID ${import.meta.env.VITE_UNSPLASH_ACCESS_KEY}`
                    }
                });
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setImages(data.results);
            } catch (error) {
                console.error('Failed to fetch images:', error);
            }
        };

        fetchImages();
    }, [query]);

    return (
        <>
        <Navbar />
        <div className="search-page">
            <h3>Search Results for "{query.replace('+', ' ')}"</h3>
            <div className="image-grid">
                {images.map(image => (
                    <div key={image.id} className="image-item">
                        <img src={image.urls.small} alt={image.alt_description} />
                    </div>
                ))}
            </div>
        </div>
        </>
    );
}

export default SearchPage;
