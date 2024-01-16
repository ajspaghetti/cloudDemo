import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import userReducer, { setUser } from './userSlice'; // Import the user slice and setUser action

// Retrieve user data from localStorage and initialize Redux state with it
const persistedUser = localStorage.getItem('user');

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    user: userReducer,
  },
});

if (persistedUser) {
  store.dispatch(setUser(JSON.parse(persistedUser)));
}

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
