import React from "react";
import "./video.css";

function Video() {
  return (
    <div className="video-container">
      <video
        src="https://agrimp-prod.s3.amazonaws.com/public/OVP_Video.mp4"
        width={1000}
        height={500}
        autoPlay="autoplay"
        muted="muted"
        loop="loop"
        className="video"
        itemType="video/mp4"
        disablePictureInPicture
      ></video>
    </div>
  );
}

export default Video;
