import React from "react";
import "./About.css";
import churchConfig from "../config/churchConfig.json";

const AboutPage: React.FC = () => (
  <div className="about-container">
    {/* Church Mission Section */}
    <section className="about-section mission-section">
      <h1 className="about-title">{churchConfig.churchName}</h1>
      <p className="about-subtitle">{churchConfig.missionStatement}</p>
    </section>

    {/* Church History */}
    <section className="about-section history-section">
      <h2>Our Story</h2>
      <p>{churchConfig.history}</p>
    </section>

    {/* Leadership Team */}
    <section className="about-section leadership-section">
      <h2>Meet Our Leadership</h2>
      <div className="leadership-grid">
        {churchConfig.leadership.map((leader, index) => (
          <div key={index} className="leader-card">
            <img
              src={leader.photo}
              alt={leader.name}
              className="leader-photo"
            />
            <h5>{leader.name}</h5>
            <p>{leader.role}</p>
          </div>
        ))}
      </div>
    </section>

    {/* Beliefs and Values */}
    <section className="about-section beliefs-section">
      <h2>Our Beliefs & Values</h2>
      <ul className="beliefs-list">
        {churchConfig.beliefs.map((belief, index) => (
          <li key={index} className="belief-item">
            <h5>{belief.title}</h5>
            <p>{belief.description}</p>
          </li>
        ))}
      </ul>
    </section>

    {/* Call to Action */}
    <section className="about-section call-to-action">
      <p>Want to learn more about our church? Join us or reach out today!</p>
      <a href="/contact" className="cta-button">
        Contact Us
      </a>
    </section>
  </div>
);

export default AboutPage;
