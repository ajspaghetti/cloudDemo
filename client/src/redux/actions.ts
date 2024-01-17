import axios from 'axios'; // Import axios
import { createAction, Dispatch } from '@reduxjs/toolkit';
import { setUser } from './userSlice';

// Define an action to register a user
export const registerUser = createAction<{ email: string; password: string; firstName: string; lastName: string }>(
  'user/registerUser'
);

export const fetchUserData = () => async (dispatch: Dispatch) => {
  try {
    const response = await axios.get('/user'); // Adjust API endpoint as necessary
    // Ensure setUserData is defined and imported
    dispatch(setUser(response.data));
  } catch (error) {
    console.error('Error fetching user data:', error);
    // Handle error appropriately
  }
};
