import axios from 'axios';
import * as urlsApi from '../constants/endPoints';

const API = axios.create({
  baseURL: urlsApi.basePath,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default API;
