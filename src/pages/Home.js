import React from 'react';

export default function Home() {
  return (
    <div>
      <div className="page">
      <img
          src={`${process.env.PUBLIC_URL}/Me.jpg`}
          alt="Me"
          style={{
            maxWidth: '100%',
            height: 'auto',
            top: '50%',
            left: '50%',
            // transform: 'translate(-50%, -50%)',
          }}
        />
      <h2 style={{
        position: 'absolute',
        top: '25vw',
        left: '50%',
      }}>
        Zachary Tenn Yuk
      </h2>
      </div>
    </div>
  );
}