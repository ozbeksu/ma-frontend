import axios from 'axios';
import {API_ENDPOINT} from './../constants.js';

const instance = axios.create({
  baseURL: `${API_ENDPOINT}`,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    timeout: 3000,
  },
});

export default instance;
