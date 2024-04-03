import React from 'react';

export default function Home() {
  return (
    <div>
      <div className="page">
      <img
      src={`${process.env.PUBLIC_URL}/gold.jpg`}
      alt="dlritter-35371, Freeimages.com"
      style={{ maxHeight: "50vw", width: "100vw", overflow: "hidden", display: "flex"}} 
      />
          <h1>v Scroll down for more v</h1>
      </div>
    </div>
  );
}