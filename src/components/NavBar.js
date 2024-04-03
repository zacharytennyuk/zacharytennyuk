import React from 'react';

export default function NavBar() {
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <nav className="navBar">
        <a href="#home" onClick={() => scrollToSection('home')} className="navLink">Home</a>
        <a href="#about" onClick={() => scrollToSection('about')} className="navLink">About</a>
        <a href="#resume" onClick={() => scrollToSection('resume')} className="navLink">Resume</a>
        <a href="#projects" onClick={() => scrollToSection('projects')} className="navLink">Projects</a>
        <a href="#contact" onClick={() => scrollToSection('contact')} className="navLink">Contact</a>
      </nav>
    </div>
  );
}


// import {Link} from 'react-router-dom';

// export default function NavBar() {
//   return (
//     <div>
//       <nav className="navBar">
//           <Link to="/" className="navLink">Home</Link>
//           <Link to="/about" className="navLink">About</Link>
//           <Link to="/resume" className="navLink">Resume</Link>
//           <Link to="/projects" className="navLink">Projects</Link>
//           <Link to="/contact" className="navLink">Contact</Link>
//       </nav>
//     </div>
//   );
// }
