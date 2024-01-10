import React from 'react';
import './Education.css';

const Education = () => {
  return (
    <div className="education-container">
      <h1>Education</h1>
      <div className="education-entry">
        <h2>BA International Relations</h2>
        <p>US Foreign Policy, International Trade</p>
        <p>University of Delaware, Graduated 2016</p>
      </div>
      <div className="education-entry">
        <h2>Certified Software Engineer</h2>
        <p>React, Ruby on Rails, SQL, AWS</p>
        <p>Flatiron School, September 2022 to March 2023</p>
      </div>
      <div className="education-entry">
        <h2>Certified Solutions Architect</h2>
        <p>AZ-104, AZ-305</p>
        <p>Microsoft, In progress</p>
      </div>
    </div>
  );
}

export default Education;
