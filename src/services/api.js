import axios from 'axios';

const instance = axios.create({
  baseURL: "https://youtube-comment-analyzer-1-backend.onrender.com/",
});

export default instance;
