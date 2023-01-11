import axios from 'axios';
import {API_ENDPOINT} from './../constants.js';

class HttpClient {
  constructor(endpoint) {
    if (HttpClient._instance) {
      return HttpClient._instance;
    }

    HttpClient._instance = axios.create({
      baseURL: `${endpoint}`,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        timeout: 3000,
      },
    });
  }

  auth({user, token}) {
    if (user) {
      HttpClient._instance.defaults.headers.common[
        'Authorization'
      ] = `JWT ${token}`;
    }

    return HttpClient._instance;
  }

  async get(...args) {
    return await HttpClient._instance.get(...args);
  }

  async post(...args) {
    return await HttpClient._instance.post(...args);
  }
}

export default new HttpClient(API_ENDPOINT);
