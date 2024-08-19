import React, { useState, useEffect } from 'react';
import Navbar from '../../../components/navbar';
import '../css/test.css';

function Test() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch('https://api.unsplash.com/search/photos?query=soccer+shoes&per_page=15', {
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
  }, []);

  return (
    <>
      <Navbar />
      <h2 style={{ color: 'black', marginTop: '100px', textAlign: 'center' }}>Test</h2>
      <div className="grid-container">
        {images.length > 0 ? (
          images.map(image => (
            <div key={image.id} className="grid-item">
              <img src={image.urls.small} alt={image.description || 'Shoe'} />
            </div>
          ))
        ) : (
          <p>No images found</p>
        )}
      </div>
    </>
  );
}

export default Test;
