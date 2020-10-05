import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import useVideos from "../hooks/useVideos";

const App = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [videos, onSearchSubmit] = useVideos("Red Dead Redemption 2");

  useEffect(() => {
    setSelectedVideo(videos[0]);
  }, [videos]);
  

  return (
    <div className="ui container" style={{ paddingTop: "10px" }}>
      <SearchBar onSearchSubmit={onSearchSubmit} />
      <VideoDetail video={selectedVideo} />
      <VideoList
        onVideoSelect={setSelectedVideo}
        videos={videos}
      />
    </div>
  );
};

export default App;
