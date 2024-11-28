import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap styles
import churchConfig from "../config/churchConfig.json"; // Dynamic content from config file
import "./Home.css"; // Add custom styles if needed
import HelmetLayout from "./Helmet";

const HomePage: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Mocked event slideshow images
  const eventImages = [
    { src: "https://via.placeholder.com/1200x500?text=Event+1", alt: "Event 1" },
    { src: "https://via.placeholder.com/1200x500?text=Event+2", alt: "Event 2" },
    { src: "https://via.placeholder.com/1200x500?text=Event+3", alt: "Event 3" },
  ];

  // Automatically cycle through slides
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % eventImages.length);
    }, 5000); // Change every 5 seconds
    return () => clearInterval(interval);
  }, [eventImages.length]);

  const handlePreviousSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? eventImages.length - 1 : prevSlide - 1
    );
  };

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % eventImages.length);
  };

  return (
    <HelmetLayout title="Home">
      <div className="container py-5">
        {/* Welcome Section */}
        <section className="text-center mb-5">
          <h1 className="display-4 text-primary" >{churchConfig.churchName}</h1>
          <p className="lead">{churchConfig.welcomeMessage}</p>
          <p>{churchConfig.about}</p>
        </section>

        {/* Event Slideshow */}
        <section className="mb-5">
          <h2 className="text-secondary text-center mb-4">Upcoming Events</h2>
          <div className="slideshow-container position-relative rounded shadow">
            <img
              src={eventImages[currentSlide].src}
              alt={eventImages[currentSlide].alt}
              className="slideshow-image img-fluid"
            />

            {/* Previous Button */}
            <button
              className="btn btn-secondary position-absolute bottom-0 start-0 m-3"
              onClick={handlePreviousSlide}
            >
              <i className="bi bi-chevron-left"></i>
            </button>

            {/* Next Button */}
            <button
              className="btn btn-secondary position-absolute bottom-0 end-0 m-3"
              onClick={handleNextSlide}
            >
              <i className="bi bi-chevron-right"></i>
            </button>
          </div>
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
    </HelmetLayout>
  );
};

export default HomePage;
