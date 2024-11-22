import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import churchConfig from "../config/churchConfig.json";

const Header: React.FC = () => (
  <header
    className="text-white py-3"
    style={{ backgroundColor: churchConfig.primaryColor }}
  >
    <div className="container d-flex justify-content-between align-items-center">
      <div className="logo">
        <h1>{churchConfig.churchName}</h1>
      </div>
      <nav className="nav">
        <Link to="/" className="nav-link text-white">
          Home
        </Link>
        <Link to="/about" className="nav-link text-white">
          About
        </Link>
        <Link to="/ministries" className="nav-link text-white">
          Ministries
        </Link>
        <Link to="/contact" className="nav-link text-white">
          Contact
        </Link>
        <Link to="/online-giving" className="nav-link text-white">
          Online Giving
        </Link>
      </nav>
    </div>
  </header>
);

export default Header;
