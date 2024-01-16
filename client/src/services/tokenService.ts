import { decode as jwtDecode, JwtPayload } from 'jsonwebtoken';
import authService from './authService'; // Adjust the import path as needed

export async function refreshTokenIfNeeded() {
  const token = localStorage.getItem('jwtToken');
  if (!token) return;

  const decodedToken = jwtDecode(token) as JwtPayload | null;
  if (decodedToken && typeof decodedToken.exp === 'number' && decodedToken.exp * 1000 < Date.now()) {
    try {
      const newToken = await authService.refreshToken(); // Implement refreshToken method in authService
      localStorage.setItem('jwtToken', newToken);
      // Update Redux state or context if needed
    } catch (error) {
      console.error('Token refresh failed', error);
      // Handle errors, like redirecting to the login page
    }
  }
}
