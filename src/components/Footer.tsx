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
    <div className="container text-center">
      <p className="mb-0">
        &copy; {new Date().getFullYear()} {churchConfig.churchName} | All rights
        reserved.
      </p>
      <div className="social-links mt-3">
        <a
          href="#facebook"
          className="social-link"
          title="Facebook"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: churchConfig.primaryTextColor }}
        >
          <i className="fab fa-facebook-f"></i>
        </a>
        <a
          href="#twitter"
          className="social-link"
          title="Twitter"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: churchConfig.primaryTextColor }}
        >
          <i className="fab fa-twitter"></i>
        </a>
        <a
          href="#instagram"
          className="social-link"
          title="Instagram"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: churchConfig.primaryTextColor }}
        >
          <i className="fab fa-instagram"></i>
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
