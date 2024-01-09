import React from 'react';
import './WorkHistory.css'; // Make sure to create a WorkHistory.css file for styling

const WorkHistory = () => {
  return (
    <div className="work-history-container">
      <h1 className="work-history-title">Work History</h1>

      {/* Summary */}
      <section className="work-summary">
        <h2>Summary</h2>
        <p>
          Senior IT Professional and certified full-stack Software Engineer with 7+ years of diverse IT experience, encompassing sales, support, consulting, and management. Proficient in multiple programming languages, with extensive expertise in Azure, Linux, and Salesforce development and implementation. Demonstrated leadership in IT management and project management roles, excelling in collaborative environments to achieve successful outcomes with colleagues and clients.
        </p>
      </section>

      {/* Professional Experience */}
      <section className="professional-experience">
        <h2>Professional Experience</h2>

        {/* IT Manager */}
        <div className="job">
          <h3>IT Manager, Digital Transformation</h3>
          <p>July 2023 - Present</p>
          <p>Pillar Construction, Alexandria VA</p>
          <ul>
            {/* List job responsibilities and achievements */}
          </ul>
        </div>

        {/* Manager, IT & Operations */}
        <div className="job">
          <h3>Manager, IT & Operations</h3>
          <p>December 2020 – September 2022</p>
          <p>P&P Construction, Fairfax VA</p>
          <ul>
            {/* List job responsibilities and achievements */}
          </ul>
        </div>

        {/* Senior Client Success Manager */}
        <div className="job">
          <h3>Senior Client Success Manager, HR Technologies</h3>
          <p>August 2018 – December 2020</p>
          <p>Gartner, Arlington VA</p>
          <ul>
            {/* List job responsibilities and achievements */}
          </ul>
        </div>

        {/* Account Manager */}
        <div className="job">
          <h3>Account Manager, SMB & Government</h3>
          <p>November 2015 – August 2018</p>
          <p>Apple, Washington D.C.</p>
          <ul>
            {/* List job responsibilities and achievements */}
          </ul>
        </div>

        {/* ... Other jobs, education, skills, etc. */}
      </section>

      {/* ... You can continue to structure your content with additional sections for education, skills, languages, achievements, references, etc. ... */}
    </div>
  );
}

export default WorkHistory;
