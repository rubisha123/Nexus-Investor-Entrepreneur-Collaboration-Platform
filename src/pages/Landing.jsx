import React from "react";
import { Link } from "react-router-dom";
import "./LandingPage.css";

function LandingPage() {
  return (
    <div className="landing-container">
      <div className="hero">
        <h1>Welcome to Nexus Platform</h1>
        <p>Your gateway to seamless connections and collaboration.</p>
        <Link to="/signin" className="btn-primary">Get Started</Link>
      </div>
      <div className="features">
        <div className="feature">
          <h3>Fast</h3>
          <p>Experience lightning-fast performance on every device.</p>
        </div>
        <div className="feature">
          <h3>Secure</h3>
          <p>Your data is protected with top-notch security protocols.</p>
        </div>
        <div className="feature">
          <h3>Reliable</h3>
          <p>Access your projects anytime, anywhere without interruptions.</p>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;