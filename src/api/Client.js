// src/api/client.js
import axios from 'axios';

const client = axios.create({
  baseURL: 'https://miblog.inovecode.com/api/v1.0',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default client;
