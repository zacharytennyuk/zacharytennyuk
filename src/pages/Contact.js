import React from 'react';
import { FaGithub, FaLinkedinIn, FaEnvelope, FaPhone } from 'react-icons/fa';
// import Title from '../components/Title';

export default function Contact() {
  return (
    <div>
      <div style={{ position: "relative" }}>
        <div className="contacts" style={{
          position: 'absolute',
          bottom: '20px',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: '1', /* Ensure the icons are above the image */
        }}>
          <a className="button" href="https://github.com/zacharytennyuk" target="_blank" rel="noopener noreferrer" title="GitHub">
            <FaGithub size={40} />
          </a>
          <a className="button" href="https://linkedin.com/in/zacharytennyuk" target="_blank" rel="noopener noreferrer" title="LinkedIn">
            <FaLinkedinIn size={40} />
          </a>
          <a className="button" href="mailto:ztennyuk@gmail.com" title="Email">
            <FaEnvelope size={40} />
          </a>
          <a className="button" href="tel:+9548816062" title="Phone Number">
            <FaPhone size={40} />
          </a>
        </div>
        <img
          src={`${process.env.PUBLIC_URL}/gold.jpg`}
          alt="dlritter-35371, Freeimages.com"
          style={{ maxHeight: "120px", width: "100vw", objectFit: "cover" }} 
        />
      </div>
    </div>
  );
}
