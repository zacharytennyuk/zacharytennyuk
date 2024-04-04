import React from 'react';
import { FaGithub, FaLinkedinIn, FaEnvelope, FaPhone } from 'react-icons/fa';

export default function Contact() {
  return (
    <div>
      <div style={{ position: "relative" }}>
        <img
          src={`${process.env.PUBLIC_URL}/gold.jpg`}
          alt="dlritter-35371, Freeimages.com"
          style={{ maxHeight: "150px", width: "100vw", objectFit: "cover" }} 
        />
        <div className="contacts" style={{
          position: 'absolute',
          bottom: '0px',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: '1', /* Ensure the icons are above the image */
          display: 'flex',
          alignItems: 'center',
        }}>
          <h1 className="contactTitle">Contact me! Let's connect.</h1>
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
        
      </div>
    </div>
  );
}
