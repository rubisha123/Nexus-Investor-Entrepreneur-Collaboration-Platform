
import React from "react";
import { Link } from "react-router-dom";
import "../styles/Dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard-container">
      <h1>Welcome to Nexus Dashboard</h1>
      <p>Select a module to continue:</p>

      <div className="dashboard-cards">
        <Link to="/calendar" className="dash-card">📅 Calendar</Link>
        <Link to="/documents" className="dash-card">📄 Document Chamber</Link>
        <Link to="/video-call" className="dash-card">🎥 Video Call</Link>
        <Link to="/payments" className="dash-card">💰 Payments</Link>
      </div>
    </div>
  );
}

export default Dashboard;