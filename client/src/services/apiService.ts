import axios from 'axios';

const apiService = axios.create({
  baseURL: 'http://localhost:3000', // Update with API base URL for the backend
});

apiService.interceptors.request.use(config => {
  const token = localStorage.getItem('jwtToken');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default apiService;
