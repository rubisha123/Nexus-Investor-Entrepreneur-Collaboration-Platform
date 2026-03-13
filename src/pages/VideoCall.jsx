import React, { useState } from "react";
import "../styles/VideoCall.css";

function VideoCallPage() {
  const [callStarted, setCallStarted] = useState(false);

  return (
    <div className="videocall-container">
      <h2>Video Call Section</h2>
      <div className="video-box">
        {callStarted ? (
          <div className="video-feed">📹 Live Call...</div>
        ) : (
          <div className="video-feed">🎥 Call not started</div>
        )}
      </div>
      <button onClick={() => setCallStarted(!callStarted)}>
        {callStarted ? "End Call" : "Start Call"}
      </button>
    </div>
  );
}

export default VideoCallPage;
