import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  user: any; // Update with your user type
  isLoggedIn: boolean;
}

const initialState: UserState = {
  user: null,
  isLoggedIn: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<any>) { // Replace `any` with your user type
      state.user = action.payload;
      state.isLoggedIn = true;
    },
    logout(state) {
      state.user = null;
      state.isLoggedIn = false;
      localStorage.removeItem('jwtToken');
    },
  },
});

export const { setUser, logout } = userSlice.actions;

export default userSlice.reducer;
