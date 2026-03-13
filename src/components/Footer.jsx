import React from "react";
import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">Nexus</div>
        <div className="footer-links">
          <a href="/">Home</a>
          <a href="/calendar">Calendar</a>
          <a href="/documents">Documents</a>
          <a href="/video-call">Video Call</a>
          <a href="/payments">Payments</a>
          <a href="/login">Login</a>
        </div>
        <div className="footer-info">
          <p>© {new Date().getFullYear()} Nexus Platform. All rights reserved.</p>
          <p>Email: support@nexusplatform.com | Phone: +1 (555) 123-4567</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;