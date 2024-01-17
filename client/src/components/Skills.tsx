import React, { useEffect } from 'react';
import './Skills.css';

const Skills = () => {
  useEffect(() => {

    // Function to generate a random dark color

    const getRandomPastelColor = () => {
      let hue = Math.random() * 360;
      let color = `hsl(${hue}, 45%, 55%)`;
      return { normal: color, darker: `hsl(${hue}, 60%, 70%)` }; // Darker color for hover
    };

    // Assign pastel color to each skill and set hover effect
    const skills = document.querySelectorAll('.skill-box');
    skills.forEach(skill => {
      const skillElement = skill as HTMLElement;
      const colors = getRandomPastelColor();
      skillElement.style.backgroundColor = colors.normal;
      skillElement.onmouseover = () => skillElement.style.backgroundColor = colors.darker;
      skillElement.onmouseleave = () => skillElement.style.backgroundColor = colors.normal;
    });
  }, []);

  return (
    <div className="skills-container">
      <h1>Technical Skills</h1>
      <ul className="skills-list">
        <li className="skill-box">Azure</li>
        <li className="skill-box">AWS</li>
        <li className="skill-box">O365</li>
        <li className="skill-box">SharePoint</li>
        <li className="skill-box">Virtual Machines (VMs)</li>
        <li className="skill-box">EDR</li>
        <li className="skill-box">MDR</li>
        <li className="skill-box">XDR</li>
        <li className="skill-box">SIEM</li>
        <li className="skill-box">SOAR</li>
        <li className="skill-box">HTML</li>
        <li className="skill-box">CSS</li>
        <li className="skill-box">JavaScript</li>
        <li className="skill-box">React</li>
        <li className="skill-box">JSX</li>
        <li className="skill-box">TypeScript</li>
        <li className="skill-box">Redux</li>
        <li className="skill-box">Ruby on Rails</li>
        <li className="skill-box">Python</li>
        <li className="skill-box">Django</li>
        <li className="skill-box">Flask</li>
        <li className="skill-box">SQL</li>
        <li className="skill-box">PostgreSQL</li>
        <li className="skill-box">MySQL</li>
        <li className="skill-box">Git</li>
        <li className="skill-box">GitHub</li>
        <li className="skill-box">PowerShell</li>
        <li className="skill-box">Bash</li>
        <li className="skill-box">VBA</li>
        <li className="skill-box">Linux</li>
        <li className="skill-box">Ubuntu Server</li>
      </ul>

      <h1>Skills</h1>
      <ul className="skills-list">
        <li className="skill-box">Digital Transformation</li>
        <li className="skill-box">Object Oriented Programming</li>
        <li className="skill-box">Database Management</li>
        <li className="skill-box">Cybersecurity & Authentication</li>
        <li className="skill-box">Project Management</li>
        <li className="skill-box">Building Processes</li>
        <li className="skill-box">Vendor Relations</li>
        <li className="skill-box">CRMs</li>
        <li className="skill-box">Automation Engineering</li>
        <li className="skill-box">Collaboration</li>
        <li className="skill-box">Leadership & People Skills</li>
        <li className="skill-box">Mentorship</li>
        <li className="skill-box">Public Speaking</li>
      </ul>

      <h1>Languages</h1>
      <ul className="skills-list">
        <li className="skill-box">English (Native)</li>
        <li className="skill-box">Spanish (Native)</li>
        <li className="skill-box">Italian (Fluent)</li>
        <li className="skill-box">Arabic (Intermediate)</li>
        <li className="skill-box">French (Intermediate)</li>
      </ul>
    </div>
  );
}

export default Skills;
