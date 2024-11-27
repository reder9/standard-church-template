import React from "react";
import "./Header.css";
import config from "../config/churchConfig.json"; // Import config file

const Header: React.FC = () => {
  return (
    <header
      className="header"
      style={{
        backgroundColor: config.primaryColor || "#f8f9fa", // Default to light if no color provided
        color: config.primaryTextColor || "black", // Default text color to black
      }}
    >
      <div className="container">
        <nav className="navbar navbar-expand-lg">
          <a
            className="navbar-brand"
            href="/"
            style={{ color: config.primaryTextColor || "black" }}
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
              {/* Home */}
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="/"
                  style={{ color: config.primaryTextColor || "black" }}
                >
                  Home
                </a>
              </li>

              {/* About Section with Dropdown */}
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="aboutDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style={{ color: config.primaryTextColor || "black" }}
                >
                  About
                </a>
                <ul className="dropdown-menu" aria-labelledby="aboutDropdown">
                  <li>
                    <a className="dropdown-item" href="/about">
                      Our Mission
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/staff">
                      Leadership Team
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/about">
                      Church History
                    </a>
                  </li>
                </ul>
              </li>

              {/* Ministries Section with Dropdown */}
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="ministriesDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style={{ color: config.primaryTextColor || "black" }}
                >
                  Ministries
                </a>
                <ul className="dropdown-menu" aria-labelledby="ministriesDropdown">
                  <li>
                    <a className="dropdown-item" href="/ministries">
                      Kids Ministry
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/ministries">
                      Youth Ministry
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/ministries">
                      Adult Ministry
                    </a>
                  </li>
                </ul>
              </li>

              {/* Events Section with Dropdown */}
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="ministriesDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style={{ color: config.primaryTextColor || "black" }}
                >
                  Events
                </a>
                <ul className="dropdown-menu" aria-labelledby="ministriesDropdown">
                  <li>
                    <a className="dropdown-item" href="/events">
                      Event 1
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/ministries">
                     Event 2
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/ministries">
                      Event 3
                    </a>
                  </li>
                </ul>
              </li>

              {/* Contact */}
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="/contact"
                  style={{ color: config.primaryTextColor || "black" }}
                >
                  Contact
                </a>
              </li>

              {/* Online Giving Section */}
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="givingDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style={{ color: config.primaryTextColor || "black" }}
                >
                  Online Giving
                </a>
                <ul className="dropdown-menu" aria-labelledby="givingDropdown">
                  <li>
                    <a className="dropdown-item" href="/giving">
                      Donate Now
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/giving">
                      Recurring Giving
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/giving">
                      Special Projects
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
