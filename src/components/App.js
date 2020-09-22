import React from 'react';
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import youtube from "../api/youtube";


class App extends React.Component {
  state = { videos: [], video: null }

  onSearchSubmit = async (term) => {
    const response = await youtube.get('/search', {
      params: {
        q: term
      }
    });
    this.setState({videos: response.data.items});
  };

  onVideoSelect = (video) => {
    console.log(video);
    this.setState({video: video})
  }

  render() {
    return (
      <div className="ui container" style={{ paddingTop: "10px" }}>
        <SearchBar onSearchSubmit={this.onSearchSubmit} />
        <VideoDetail video={this.state.video} />
        <VideoList
          onVideoSelect={this.onVideoSelect}
          videos={this.state.videos}
        />
      </div>
    );
  }
}

export default App;