import React from "react";
import "./Header.css";
import config from "../config/churchConfig.json"; // Import config file

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="container">
        <nav className="navbar navbar-expand-lg">
          <a
            className="navbar-brand"
            href="/"
            style={{ color: `var(--primary-text-color)` }}
          >
            {config.churchName || "Church Name"}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="/"
                  style={{ color: `var(--primary-text-color)` }}
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="/about"
                  style={{ color: `var(--primary-text-color)` }}
                >
                  About
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="/ministries"
                  style={{ color: `var(--primary-text-color)` }}
                >
                  Ministries
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="/contact"
                  style={{ color: `var(--primary-text-color)` }}
                >
                  Contact
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="/giving"
                  style={{ color: `var(--primary-text-color)` }}
                >
                  Online Giving
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
