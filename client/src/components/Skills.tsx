import React, { useEffect } from 'react';

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
    <div className="text-center mx-10 my-10">
      <h1>Technical Skills</h1>
      <ul className="flex flex-wrap justify-start list-none p-0 gap-2.5 m-auto">
        {['Azure', 'AWS', 'O365', 'SharePoint', 'Virtual Machines (VMs)', 'EDR', 'MDR', 'XDR', 'SIEM', 'SOAR', 'HTML', 'CSS', 'JavaScript', 'React', 'JSX', 'TypeScript', 'Redux', 'Ruby on Rails', 'Python', 'Django', 'Flask', 'SQL', 'PostgreSQL', 'MySQL', 'Git', 'GitHub', 'PowerShell', 'Bash', 'VBA', 'Linux', 'Ubuntu Server'].map(skill => (
          <li key={skill} className="skill-box flex items-center justify-center text-white p-2.5 box-border w-1/6 mb-2.5 rounded-lg transition-transform duration-300 ease-in-out hover:scale-105">
            {skill}
          </li>
        ))}
      </ul>

      <h1>Skills</h1>
      <ul className="flex flex-wrap justify-start list-none p-0 gap-2.5 m-auto">
        {['Digital Transformation', 'Object Oriented Programming', 'Database Management', 'Cybersecurity & Authentication', 'Project Management', 'Building Processes', 'Vendor Relations', 'CRMs', 'Automation Engineering', 'Collaboration', 'Leadership & People Skills', 'Mentorship', 'Public Speaking'].map(skill => (
          <li key={skill} className="skill-box flex items-center justify-center text-white p-2.5 box-border w-1/6 mb-2.5 rounded-lg transition-transform duration-300 ease-in-out hover:scale-105">
            {skill}
          </li>
        ))}
      </ul>

      <h1>Languages</h1>
      <ul className="flex flex-wrap justify-start list-none p-0 gap-2.5 m-auto">
        {['English (Native)', 'Spanish (Native)', 'Italian (Fluent)', 'Arabic (Intermediate)', 'French (Intermediate)'].map(language => (
          <li key={language} className="skill-box flex items-center justify-center text-white p-2.5 box-border w-1/6 mb-2.5 rounded-lg transition-transform duration-300 ease-in-out hover:scale-105">
            {language}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Skills;
