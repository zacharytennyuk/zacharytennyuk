import React from 'react';
import './index.css';
import './styles.css';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import About from './pages/About';
import Resume from './pages/Resume';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

export default function App() {
  return (
    <div>
      <NavBar />
      <main >
      <div id="home" className="section">
          <Home />
          </div>
        <div id="about" className="section">
          <About />
          </div>
        <div id="resume" className="section">
          <Resume />
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
