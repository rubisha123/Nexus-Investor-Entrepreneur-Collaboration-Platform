import React, { useState } from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import "../styles/Calendar.css";

function CalendarPage() {
  const [date, setDate] = useState(new Date());

  return (
    <div className="calendar-container">
      <h2>Schedule Your Meetings</h2>
      <Calendar
        onChange={setDate}
        value={date}
        minDetail="month"
      />
      <p>Selected Date: {date.toDateString()}</p>
    </div>
  );
}

export default CalendarPage;