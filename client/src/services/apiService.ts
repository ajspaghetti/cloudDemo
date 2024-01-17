import axios from 'axios';
import { refreshTokenIfNeeded } from './tokenService'; // Import the function

const apiService = axios.create({
  baseURL: 'http://localhost:3001/',
});

apiService.interceptors.request.use(async (config) => {
  await refreshTokenIfNeeded(); // Await the token refresh if needed
  const token = localStorage.getItem('jwtToken');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default apiService;
