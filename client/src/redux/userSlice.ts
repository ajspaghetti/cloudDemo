import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define the User interface according to your requirements
interface User {
  id: string;
  email: string;
  first_name: string;
  last_name: string;
  company?: string;
  title?: string;
  phone_number?: string;
}

// Define the structure of the state for the user slice
interface UserState {
  user: User | null;
  isLoggedIn: boolean;
}

// Initial state for the user slice
const initialState: UserState = {
  user: null,
  isLoggedIn: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    // Use the User type for the payload in setUser
    setUser(state, action: PayloadAction<User>) {
      state.user = action.payload;
      state.isLoggedIn = true;
      localStorage.setItem('user', JSON.stringify(action.payload)); // Store user data in localStorage
    },
    // Logout reducer
    logout(state) {
      state.user = null;
      state.isLoggedIn = false;
      localStorage.removeItem('user'); // Clear user data from localStorage
      localStorage.removeItem('jwtToken'); // Clear token from localStorage
    },
    // Other reducers can be added as needed
  },
});

export const { setUser, logout } = userSlice.actions;

export default userSlice.reducer;
