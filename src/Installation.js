import React from "react";
import "./Installation.css";

function Installation() {
  return (
    <div className="container">
      <h1 className="title">Installation</h1>
      <p className="subtitle">Follow The Video</p>

      <div className="video-section">
        <div className="video-box">
          <h2>Installation and Configuration</h2>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/YOUR_VIDEO_ID_1"
            title="Installation and Configuration"
          ></iframe>
        </div>

        <div className="video-box">
          <h2>Cloudinary Setup</h2>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/YOUR_VIDEO_ID_2"
            title="Cloudinary Setup"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Installation;