import React from 'react';
import HomeCard from '../components/HomeCard';

export default function Home() {
  return (
    <div style={{ position: 'relative', height: '100vh' }}> {/* Ensure relative positioning context for absolute children */}
      <img
        src={`${process.env.PUBLIC_URL}/me.jpg`}
        alt="Me"
        style={{ 
          maxHeight: '100vh', 
          width: '100vw', 
          objectFit: 'cover',
          position: 'absolute',
          top: '0',
          left: '0',
        }} 
      />
      <HomeCard>
        <h1 className="typing-animation">Helloooo World! I'm Zach</h1>
      </HomeCard>
    </div>
  );
}
