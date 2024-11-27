import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap styles
import "./Home.css"; // Add any custom styles here

const HomePage: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Mocked event images
  const eventImages = [
    { src: "https://via.placeholder.com/800x400?text=Event+1", alt: "Event 1" },
    { src: "https://via.placeholder.com/800x400?text=Event+2", alt: "Event 2" },
    { src: "https://via.placeholder.com/800x400?text=Event+3", alt: "Event 3" },
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
    <div className="container py-5">
      {/* Slideshow Section */}
      <section className="mb-5">
        <div className="slideshow-container position-relative">
          <img
            src={eventImages[currentSlide].src}
            alt={eventImages[currentSlide].alt}
            className="slideshow-image rounded"
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

      {/* Other sections */}
      <section className="text-center mb-5">
        <h1 className="display-4 text-primary">Church Name</h1>
        <p className="lead">Welcome to our community!</p>
        <p>
          Learn more about our mission, our values, and how you can be part of
          our family.
        </p>
      </section>

      {/* Additional content (like service times, ministries, etc.) */}
    </div>
  );
};

export default HomePage;
