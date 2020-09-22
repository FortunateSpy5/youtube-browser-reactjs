import React from "react";

const VideoDetail = ({ video }) => {
  if (!video) {
    return "";
  }
  return (
    <div className="ui segment">
      <div className="ui embed">
        <iframe title="video playr" src={`https://www.youtube.com/embed/${video.id.videoId}`} />
      </div>
      <h2 className="header">{video.snippet.title}</h2>
      <p className="meta">{video.snippet.description}</p>
    </div>
  );
}

export default VideoDetail;