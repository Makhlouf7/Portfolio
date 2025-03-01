import React from "react";
import video from "../assets/videos/network.mp4";

const BackgroundVideo = function () {
  return (
    <div className="video-container">
      <video autoPlay loop muted className="video-bg">
        <source src={video} type="video/mp4" />
      </video>
    </div>
  );
};

export default BackgroundVideo;
