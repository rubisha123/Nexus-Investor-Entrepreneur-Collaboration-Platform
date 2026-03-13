import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">Nexus</div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/calendar">Calendar</Link></li>
        <li><Link to="/documents">Documents</Link></li>
        <li><Link to="/video-call">Video Call</Link></li>
        <li><Link to="/payments">Payments</Link></li>
        <li><Link to="/login">Login</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;