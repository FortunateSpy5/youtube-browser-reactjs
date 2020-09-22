import React from "react";
import VideoItem from './VideoItem';

const VideoList = ({videos, onVideoSelect}) => {
  if (videos.length > 0) {
    const renderList = videos.map((video) => {
      return (
        <VideoItem
          key={video.id.videoId}
          video={video}
          onVideoSelect={onVideoSelect}
        />
      );
    });

    return (
      <div className="ui segment">
        <div className="ui divided items">{renderList}</div>
      </div>
    );
  } else {
    return "";
  }
};

export default VideoList;