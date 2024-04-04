import React from 'react';
import './index.css';
import './styles.css';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import About from './pages/About';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

export default function App() {
  return (
    <div className="bg-emerald">
      <NavBar />
      <main >
      <div id="home" className="section">
          <Home />
          </div>
        <div id="about" className="section">
          <About />
          </div>
        <div id="experience" className="section">
          <Experience />
          </div>
        <div id="projects" className="section">
          <Projects />
          </div>
        <div id="contact" className="section">
          <Contact />
          </div>
      </main>
    </div>
  );
}
