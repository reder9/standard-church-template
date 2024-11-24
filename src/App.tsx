import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Contact from "./components/Contact";
import churchConfig from "./config/churchConfig.json";
import AboutPage from "./components/About";
import MinistriesPage from "./components/Ministries";
import OnlineGivingPage from "./components/OnlineGiving";
import StaffPage from "./components/Staff";
import awsExports from './aws-exports.js';
import { Amplify } from "aws-amplify";

Amplify.configure(awsExports);

// Dynamically set CSS variables from the config
document.documentElement.style.setProperty(
  "--primary-color",
  churchConfig.primaryColor,
);
document.documentElement.style.setProperty(
  "--secondary-color",
  churchConfig.secondaryColor,
);

const App: React.FC = () => (
  <div
    className="app-container"
    style={{ backgroundColor: churchConfig.secondaryColor }}
  >
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/ministries" element={<MinistriesPage />} />
        <Route path="/staff" element={<StaffPage />} />
        <Route path="/online-giving" element={<OnlineGivingPage />} />
      </Routes>
      <Footer />
    </Router>
  </div>
);

export default App;
