import React from "react";
import "./Footer.css";
import churchConfig from "../config/churchConfig.json";

const Footer: React.FC = () => (
  <footer
    className="footer"
    style={{
      backgroundColor: churchConfig.primaryColor,
      color: churchConfig.primaryTextColor,
    }}
  >
    <div className="container py-5">
      <div className="row">
        {/* Left Column: Contact Info */}
        <div className="col-md-4 mb-4">
          <h5 className="text-light">Contact Us</h5>
          <p>
            <strong>Email:</strong> {churchConfig.contact.email}
          </p>
          <p>
            <strong>Phone:</strong> {churchConfig.contact.phone}
          </p>
          <p>
            <strong>Address:</strong> {churchConfig.contact.address}
          </p>
        </div>

        {/* Middle Column: Service Times */}
        <div className="col-md-4 mb-4">
          <h5 className="text-light">Service Times</h5>
          <ul className="list-unstyled">
            {churchConfig.serviceTimes.map((service, index) => (
              <li key={index}>
                <strong>{service.day}:</strong> {service.times.join(", ")}
              </li>
            ))}
          </ul>
        </div>

        {/* Right Column: Social Links */}
        <div className="col-md-4 mb-4 text-center">
          <h5 className="text-light">Follow Us</h5>
          <div className="social-links d-flex justify-content-center gap-3 mt-2">
            <a
              href={churchConfig.socialLinks.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              title="Facebook"
              style={{ color: churchConfig.primaryTextColor }}
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href={churchConfig.socialLinks.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              title="Twitter"
              style={{ color: churchConfig.primaryTextColor }}
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href={churchConfig.socialLinks.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              title="YouTube"
              style={{ color: churchConfig.primaryTextColor }}
            >
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>
      </div>

      <hr className="border-light" />

      {/* Footer Bottom */}
      <div className="text-center mt-3">
        <p className="mb-0">
          &copy; {new Date().getFullYear()} {churchConfig.churchName} | All
          rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
