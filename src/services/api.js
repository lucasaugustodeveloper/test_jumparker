import axios from 'axios';

const http = axios.create({
  baseURL: 'http://67.205.161.202/jumpparkapi/public/api'
});

export default http;
