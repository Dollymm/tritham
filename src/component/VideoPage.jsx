import React from 'react';
import { PiPlayThin } from "react-icons/pi";

const VideoPage = () => {
  return (
    <div className="relative w-full h-[60vh] overflow-hidden">
    <iframe
      className="absolute top-0 left-0 w-full h-full object-cover"
      src="https://www.youtube.com/embed/cxlIUOMUrS4?autoplay=1&mute=1&loop=1&playlist=cxlIUOMUrS4"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Promotional Video"
    ></iframe>
  </div>
  );
};

export default VideoPage;
