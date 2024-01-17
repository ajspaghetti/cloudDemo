import authService from './authService';

const API_URL = 'http://localhost:3001/';

const reachoutService = {
  getReachouts: async () => {
    try {
      await authService.refreshToken();
      const token = localStorage.getItem('jwtToken');

      const response = await fetch(`${API_URL}user_reachouts`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      return response.json();
    } catch (error) {
      console.error('Error in getReachouts:', error);
      throw error;
    }
  },
};

export default reachoutService;
