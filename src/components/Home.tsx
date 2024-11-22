import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap styles
import churchConfig from "../config/churchConfig.json"; // Dynamic content from config file

const HomePage: React.FC = () => (
  <div className="container py-5">
    {/* Welcome Section */}
    <section className="text-center mb-5">
      <h1 className="display-4 text-primary">{churchConfig.churchName}</h1>
      <p className="lead">{churchConfig.welcomeMessage}</p>
      <p>{churchConfig.about}</p>
    </section>

    {/* Service Times */}
    <section className="mb-5">
      <h2 className="text-secondary">Service Times</h2>
      <ul className="list-group">
        {churchConfig.serviceTimes.map((service, index) => (
          <li key={index} className="list-group-item">
            <strong>{service.day}:</strong> {service.times.join(", ")}
          </li>
        ))}
      </ul>
    </section>

    {/* Ministries */}
    <section className="mb-5">
      <h2 className="text-secondary">Our Ministries</h2>
      <div className="row">
        {churchConfig.ministries.map((ministry, index) => (
          <div key={index} className="col-md-4 mb-4">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">{ministry.name}</h5>
                <p className="card-text">{ministry.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>

    {/* Upcoming Events */}
    <section className="mb-5">
      <h2 className="text-secondary">Upcoming Events</h2>
      <div className="row">
        {churchConfig.upcomingEvents.map((event, index) => (
          <div key={index} className="col-md-6 mb-4">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">{event.title}</h5>
                <p className="card-text">
                  <strong>Date:</strong> {event.date}
                </p>
                <p className="card-text">{event.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>

    {/* Contact Section */}
    <section className="mb-5">
      <h2 className="text-secondary">Contact Us</h2>
      <div className="card p-4">
        <p>
          <strong>Email:</strong> {churchConfig.contact.email}
        </p>
        <p>
          <strong>Phone:</strong> {churchConfig.contact.phone}
        </p>
        <p>
          <strong>Address:</strong> {churchConfig.contact.address}
        </p>
        <div>
          <a
            href={churchConfig.socialLinks.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary me-2"
          >
            Facebook
          </a>
          <a
            href={churchConfig.socialLinks.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-info me-2"
          >
            Twitter
          </a>
          <a
            href={churchConfig.socialLinks.youtube}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-danger"
          >
            YouTube
          </a>
        </div>
      </div>
    </section>
  </div>
);

export default HomePage;
