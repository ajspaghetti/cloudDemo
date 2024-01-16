import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import userReducer, { setUser } from './userSlice'; // Import the user slice and setUser action

// Retrieve user data from localStorage
const persistedUser = JSON.parse(localStorage.getItem('user') || '{}');

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    user: userReducer, // Add user reducer
  },
});

// Initialize the user data if available in localStorage
if (persistedUser) {
  store.dispatch(setUser(persistedUser));
}

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
