import axios from 'axios';

const KEY = 'AIzaSyD5XwAFzjFrqf82vVhNlP987SkrA5zRcSM';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3/',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY,
  },
});
