import React from 'react';

function MidCaption() {
  return (
    <>
      <h1 style={{ fontWeight: '800', fontSize: '3rem', cursor: 'default' }}>
        INCREASE YOUR SPEED
      </h1>
      <h3 style={{ fontWeight: '600', fontSize: '1.5rem', cursor: 'default', marginTop: '-30px' }}>
        Accelerate your game in the next-gen shoes
      </h3>
      <button style={buttonStyle}>Shop Now!</button>
    </>
  );
}

const buttonStyle = {
  marginTop: '-20px',
  padding: '10px 20px',
  fontSize: '1rem',
  fontWeight: '600',
  color: '#fff',
  backgroundColor: '#333',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  transition: 'background-color 0.3s ease, transform 0.3s ease',
};

const buttonHoverStyle = {
  backgroundColor: '#555',
  transform: 'scale(1.05)',
};

export default MidCaption;
