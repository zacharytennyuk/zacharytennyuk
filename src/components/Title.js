import React from 'react';

const Title = ({ children }) => {

    return (
      <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '40px',
        padding: '1.5rem',
        width: '7rem',
        height: '3rem',
        margin: '0 auto',
        fontSize: '1.125rem',
        textAlign: 'center',
        backgroundImage: `url(${process.env.PUBLIC_URL}/gold.jpg)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: '#023025',
        fontWeight: 'bold',
        boxShadow: '10px 10px 15px rgba(0, 0, 0, 0.6)',
        zIndex: '1',
      }}>
        {children}
      </div>
    );
  };

export default Title;