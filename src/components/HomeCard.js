import React from 'react';

const HomeCard = ({ children }) => {

    return (
      <div
      style={{
        position: 'absolute',
        top: '20%',
        left: '10%',
        borderRadius: '40px',
        padding: '1.5rem',
        fontSize: '2rem',
        color: '#023025',
        fontWeight: 'bold',
        boxShadow: '10px 10px 15px rgba(0, 0, 0, 0.6)',
        backgroundImage: `url(${process.env.PUBLIC_URL}/gold.jpg)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        maxHeight: '100vh', 
        width: '30vw', 
        zIndex: '2',
      }}>
        {children}
      </div>
    );
  };

export default HomeCard;