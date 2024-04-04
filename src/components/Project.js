import React from 'react';
import { FaGithub } from 'react-icons/fa';

const Project = ({ title, description, githubLink }) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between', // Align items vertically
        alignItems: 'flex-start', // Align items horizontally
        borderRadius: '10px',
        padding: '1.5rem',
        maxWidth: '300px',
        width: '80%',
        margin: '0 auto',
        textAlign: 'center',
        backgroundImage: `url(${process.env.PUBLIC_URL}/gold.jpg)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: '#023025',
        boxShadow: '10px 5px 10px rgba(0, 0, 0, 0.6)',
      }}
    >
      <h2 style={{ fontWeight: 'bold', fontSize: '1.5rem', marginBottom: 'auto' }}>{title}</h2>
      <p style={{ fontSize: '1rem', marginTop: '0', marginBottom: 'auto' }}>{description}</p>
      {githubLink && (
        <a 
          href={githubLink} 
          target="_blank" 
          rel="noopener noreferrer"
          style={{ color: '#023025', textDecoration: 'none', display: 'flex', alignItems: 'center' }}
        >
          <FaGithub size={20} style={{ marginRight: '0.5rem' }} />
          View Repository
        </a>
      )}
    </div>
  );
};

export default Project;
