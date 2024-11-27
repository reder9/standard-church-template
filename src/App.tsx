import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import churchConfig from "./config/churchConfig.json";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// @ts-ignore
import awsExports from './aws-exports.js';
import { Amplify } from "aws-amplify";

Amplify.configure(awsExports);

// Dynamically set CSS variables from the config
document.documentElement.style.setProperty(
  "--primary-color",
  churchConfig.primaryColor
);
document.documentElement.style.setProperty(
  "--secondary-color",
  churchConfig.secondaryColor
);

// Lazy load components
const Home = React.lazy(() => import("./components/Home"));
const AboutPage = React.lazy(() => import("./components/About"));
const Contact = React.lazy(() => import("./components/Contact"));
const MinistriesPage = React.lazy(() => import("./components/Ministries"));
const StaffPage = React.lazy(() => import("./components/Staff"));
const OnlineGivingPage = React.lazy(() => import("./components/OnlineGiving"));
const CalendarPage = React.lazy(() => import("./components/Calendar"));

const App: React.FC = () => (
  <div
    className="app-container"
    style={{ backgroundColor: churchConfig.secondaryColor }}
  >
    <Router>
      <Header />
      <Suspense fallback={<div className="text-center py-5">Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/ministries" element={<MinistriesPage />} />
          <Route path="/staff" element={<StaffPage />} />
          <Route path="/online-giving" element={<OnlineGivingPage />} />
          <Route path="/calendar" element={<CalendarPage />} />
        </Routes>
      </Suspense>
      <Footer />
    </Router>
  </div>
);

export default App;
