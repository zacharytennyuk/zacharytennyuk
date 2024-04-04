import React from 'react';
import { FaGithub } from 'react-icons/fa';

const Project = ({ title, description, githubLink }) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
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
      <br/>
      <p style={{ fontSize: '1rem', marginTop: '0', marginBottom: 'auto', textAlign: 'left'}}>{description}</p>
      <br/>
      {githubLink && (
        <a className="button"
          href={githubLink} 
          target="_blank" 
          rel="noopener noreferrer"
          style={{ 
            textDecoration: 'none', 
            display: 'flex', 
            justifyContent: 'center', // Center the link horizontally within its container
            width: '100%', // Make the link's container full width to enable centering
            alignItems: 'center',
            marginTop: '1rem', // Add some top margin to separate from the description
          }}
        >
          <FaGithub size={20} style={{ marginRight: '0.5rem'}} />
          View Repository
        </a>
      )}
    </div>
  );
};

export default Project;
