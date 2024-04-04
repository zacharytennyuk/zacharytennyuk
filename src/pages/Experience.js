import React from 'react';
import Title from '../components/Title';

export default function Experience() {
  return (
    <div>
      <div className="page">
        <h1>
          <Title>Experience</Title>
        </h1>
        <p className="experience">
          <span>Full Stack Developer</span><br/>
          <span>The Agency</span><br/>
          <span>March 2024 - Present</span>
        </p>
        <p className="experience">
          <span>NSF REU Fellow</span><br/>
          <span>Jain Lab</span><br/>
          <span>Dec 2023 - Present</span>
        </p>
        <p className="experience">
          <span>Artificial Intelligence Policy Intern</span><br/>
          <span>University of Florida Office of Federal Relations</span><br/>
          <span>Aug 2023 - Dec 2023</span>
        </p>
        <a className="button" href="https://drive.google.com/file/d/1lIaLsRzeAeHoET3f1CzEXsEw9r2SwwPr/view?usp=sharing" target="_blank" rel="noopener noreferrer">View Resume (Google Drive)</a>
      </div>
    </div>
  );
}
