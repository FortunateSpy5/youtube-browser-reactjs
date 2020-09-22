import React from "react";

const VideoItem = ({ video, onVideoSelect }) => {
  return (
    <div className="item" onClick={() => onVideoSelect(video)}>
      <div className="image">
        <img
          src={video.snippet.thumbnails.medium.url}
          alt={video.snippet.title}
        />
      </div>
      <div className="content">
        <div className="header">{video.snippet.title}</div>
      </div>
    </div>
  );
};

export default VideoItem;
