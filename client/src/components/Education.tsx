import React from 'react';
// import './Education.css';

const Education = () => {
  return (
    <div className="flex justify-start mx-auto w-full lg:w-1/2">
      <div className='text-left mb-20'>
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-left text-gray-800 mt-4 mb-10">Education</h1>
        <div className="mb-10">
          <h2 className='text-.5xl md:text-1xl lg:text-2xl font-bold text-left text-gray-800 mt-1 mb-2'>Bachelor of Arts, International Relations</h2>
          <p>US Foreign Policy, International Trade</p>
          <p>Regional Specializations: MENA & LATAM</p>
          <p className='font-bold'>University of Delaware, Graduated 2016</p>
        </div>
        <div className="mb-10">
          <h2 className='text-.5xl md:text-1xl lg:text-2xl font-bold text-left text-gray-800 mt-1 mb-2'>Certified Full Stack Software Engineer</h2>
          <p>Frontend: HTML/CSS, JavaScript, TypeScript, React.JS, React.TS, API Fetch</p>
          <p>Backend: Ruby on Rails API, Python, Flask, postgreSQL</p>
          <p>Deployment: Docker, Heroku, AWS S3</p>
          <p className='font-bold'>Flatiron School, September 2022 to March 2023</p>
        </div>
        <div className="mb-10">
          <h2 className='text-.5xl md:text-1xl lg:text-2xl font-bold text-left text-gray-800 mt-1 mb-2'>Certified Solutions Architect</h2>
          <p>AZ-104, AZ-305</p>
          <p className='font-bold'>Microsoft, In progress</p>
        </div>
      </div>
    </div>
  );
}

export default Education;
