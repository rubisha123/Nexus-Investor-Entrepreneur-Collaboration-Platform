import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Home from "./pages/Home";
import CalendarPage from "./pages/Calendar";
import DocumentsPage from "./pages/Documents";
import VideoCallPage from "./pages/VideoCall";
import PaymentsPage from "./pages/Payments";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/calendar" element={<CalendarPage />} />
        <Route path="/documents" element={<DocumentsPage />} />
        <Route path="/video-call" element={<VideoCallPage />} />
        <Route path="/payments" element={<PaymentsPage />} />
      </Routes>
    </Router>
  );
}

export default App;