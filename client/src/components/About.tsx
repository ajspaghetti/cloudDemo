import React from 'react';
import './About.css'

const About: React.FC = () => {
  return (
    <div className="about-container">
    <div className="profile-pic-container">
        <img src={`${process.env.PUBLIC_URL}/profile.png`} alt="Alexander Spagnoli" />
    </div>
    <section className="intro-section">
        <h1>Hello, I'm Alexander Spagnoli</h1>
        <p>
            Born in Washington DC, I come from a vibrant Latino and Italian family.
            I have always had a passion for technology. Outside of the tech world, you'll find me exploring new places,
            capturing moments through photography, spending quality time with my dog Meeko, and
            enjoying a good laugh with my friends and family. I also have soft spots for sci-fi, fantasy, history, and a cup
            of strong coffee to start the day!
        </p>
    </section>

    <section className="background-section">
        <h2>My Professional Journey</h2>
        <p>
        As a professional, I wear multiple hats - from Software Engineering (JavaScript, React, Ruby on Rails, Python, PostgreSQL, etc.) to Cloud Engineering
        in Azure and AWS. My journey in tech is marked by continuous learning and growth. My bread and butter
        is automating business processes, building innovative tools, and managing complex
        databases. Each day is a new challenge, a new opportunity to create and innovate.
        </p>
    </section>

    <section className="philosophy-section">
        <h2>Always Learning, Always Growing</h2>
        <p>
        In this ever-evolving field of technology, staying still is not an option. I'm on a perpetual
        quest for knowledge, driven by an insatiable curiosity to understand and master new skills.
        Each project is a learning experience, a step towards becoming a more versatile and skilled
        professional.
        </p>
    </section>
</div>
  );
}

export default About;
