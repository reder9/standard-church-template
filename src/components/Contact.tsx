import React from "react";
import "./Contact.css"; // Import the CSS file
import churchConfig from "../config/churchConfig.json";
import HelmetLayout from "./Helmet";

const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  churchConfig.address,
)}`;

const ContactPage: React.FC = () => (
  <HelmetLayout title="Contact">
    <div className="contact-container">
      <section className="contact-section">
        <h1 className="contact-title">Contact {churchConfig.churchName}</h1>
        <p className="contact-subtitle">
          We'd love to hear from you! Feel free to reach out using the form
          below or through the provided contact details.
        </p>
      </section>

      <section className="contact-info">
        <h2>Contact Information</h2>
        <ul className="info-list">
          <li>
            <strong>Address:</strong>{" "}
            <a href={mapUrl} target="_blank" rel="noopener noreferrer">
              {churchConfig.address}
            </a>
          </li>
          <li>
            <strong>Phone:</strong>{" "}
            <a href={`tel:${churchConfig.phone}`}>
              {churchConfig.phone}
            </a>
          </li>
          <li>
            <strong>Email:</strong>{" "}
            <a href={`mailto:${churchConfig.email}`}>
              {churchConfig.email}
            </a>
          </li>
        </ul>
      </section>

      <section className="contact-form">
        <h2>Send Us a Message</h2>
        <form>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              className="form-control"
              placeholder="Your Name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              className="form-control"
              placeholder="Your Email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              className="form-control"
              rows={5}
              placeholder="Your Message"
            ></textarea>
          </div>
          <button type="submit" className="submit-button">
            Send Message
          </button>
        </form>
      </section>
    </div>
  </HelmetLayout>
);

export default ContactPage;
