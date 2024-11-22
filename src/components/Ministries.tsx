import React from "react";
import "./Ministries.css";
import churchConfig from "../config/churchConfig.json";

const MinistriesPage: React.FC = () => (
  <div className="ministries-container">
    <section className="ministries-header">
      <h1 className="ministries-title">Our Ministries</h1>
      <p className="ministries-subtitle">
        Discover the many ways you can connect, grow, and serve at{" "}
        {churchConfig.churchName}.
      </p>
    </section>

    <section className="ministries-list">
      {churchConfig.ministries.map((ministry, index) => (
        <div key={index} className="ministry-card">
          <div className="ministry-image-wrapper">
            <img
              src={ministry.image}
              alt={ministry.name}
              className="ministry-image"
            />
          </div>
          <div className="ministry-details">
            <h3 className="ministry-name">{ministry.name}</h3>
            <p className="ministry-description">{ministry.description}</p>
            {ministry.contact && (
              <a
                href={`mailto:${ministry.contact}`}
                className="ministry-contact"
              >
                Contact: {ministry.contact}
              </a>
            )}
          </div>
        </div>
      ))}
    </section>
  </div>
);

export default MinistriesPage;
