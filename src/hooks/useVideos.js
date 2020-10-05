import { useState, useEffect } from "react";
import youtube from "../api/youtube";

const useVideos = (defaultSearchTerm) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    onSearchSubmit(defaultSearchTerm);
  }, [defaultSearchTerm]);
  
  const onSearchSubmit = async (term) => {
    try {
      const response = await youtube.get("/search", {
        params: {
          q: term,
        },
      });
      setVideos(response.data.items);
    } catch (err) {
      console.log(err);
    }
  };

  return [videos, onSearchSubmit];
};

export default useVideos;