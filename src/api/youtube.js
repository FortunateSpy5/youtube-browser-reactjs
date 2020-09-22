import axios from "axios";

const KEY = "AIzaSyA1khGZ4dY4VTjifFBCQ9ql41j8h9D5oiE";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    type: "video",
    key: KEY,
  },
});