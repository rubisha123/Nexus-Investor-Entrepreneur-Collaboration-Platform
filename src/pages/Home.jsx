import React from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home-container">
      <header className="home-header">
        <h1>Nexus Platform</h1>
        <p>Connecting Investors & Entrepreneurs Seamlessly</p>
        <div className="header-buttons">
          <Link to="/calendar" className="btn-primary">Schedule Meeting</Link>
          <Link to="/documents" className="btn-secondary">Document Chamber</Link>
        </div>
      </header>

      <section className="features-section">
        <h2>Platform Features</h2>
        <div className="features-grid">
          <div className="feature-card">
            <h3>Scheduling</h3>
            <p>Manage meetings with investors and entrepreneurs easily.</p>
          </div>
          <div className="feature-card">
            <h3>Video Calls</h3>
            <p>Start secure calls with audio/video toggles.</p>
          </div>
          <div className="feature-card">
            <h3>Document Chamber</h3>
            <p>Upload, preview, and track contracts with e-sign mockup.</p>
          </div>
          <div className="feature-card">
            <h3>Payments</h3>
            <p>Simulate deposits, withdrawals, and deal funding.</p>
          </div>
          <div className="feature-card">
            <h3>Security</h3>
            <p>Password strength, 2FA, and role-based dashboards.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;