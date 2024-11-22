import React from "react";
import "./Footer.css";
import churchConfig from "../config/churchConfig.json";

const Footer: React.FC = () => (
  <footer
    className="text-white py-4"
    style={{ backgroundColor: churchConfig.primaryColor }}
  >
    <div className="container text-center">
      <p className="mb-0">
        &copy; {new Date().getFullYear()} {churchConfig.churchName} | All rights
        reserved.
      </p>
      <div className="social-links mt-3">
        <a
          href="#facebook"
          className="text-white mx-2"
          title="Facebook"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-facebook-f"></i>
        </a>
        <a
          href="#twitter"
          className="text-white mx-2"
          title="Twitter"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-twitter"></i>
        </a>
        <a
          href="#instagram"
          className="text-white mx-2"
          title="Instagram"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-instagram"></i>
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
