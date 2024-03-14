import axios from 'axios';
const BASE_URL = 'http://10.0.2.83:5259/';
const BASE_PROJECT_URL = 'http://10.0.2.83:5260/';

export default axios.create({
  baseURL: BASE_URL,
});

export const axiosPrivate = axios.create({
  baseURL: BASE_URL,
  headers: { 'Content-Type': 'application/json' },
  withCredentials: true,
});

export const axiosBase = axios.create({
  baseURL: BASE_PROJECT_URL,
  headers: { 'Content-Type': 'application/json' },
  withCredentials: true,
});