import React from 'react';
import Title from '../components/Title';
import Project from '../components/Project';

export default function Projects() {
  return (
    <div>
      <div className="page">
        <h1>
          <Title>Projects</Title>
          <br />
          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', margin: '20px' }}>
          <Project 
            title="EduToon" 
            description="Create visual comic summaries of research papers." 
            githubLink="https://github.com/zacharytennyuk/edutoon"
          />
          <Project 
            title="Pocket Pantry" 
            description="Food database with AI features." 
            githubLink="https://github.com/m1del/sasehack"
          />
          <Project 
            title="App-o-Matic" 
            description="Filter to find the best Google Play App." 
            githubLink="https://github.com/zacharytennyuk/app-o-matic"
          />
          
          </div>
        </h1>
      </div>
    </div>
  );
}