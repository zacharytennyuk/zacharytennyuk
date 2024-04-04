import React from 'react';

export default function NavBar() {
  const scroll = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <nav className="navBar" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/gold.jpg)`, backgroundSize: 'cover' }}>
        <a href="#home" onClick={() => scroll('home')} className="button">Home</a>
        <a href="#about" onClick={() => scroll('about')} className="button">About</a>
        <a href="#experience" onClick={() => scroll('resume')} className="button">Experience</a>
        <a href="#projects" onClick={() => scroll('projects')} className="button">Projects</a>
        <a href="#contact" onClick={() => scroll('contact')} className="button">Contact</a>
      </nav>
    </div>
  );
}