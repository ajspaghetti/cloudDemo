import { combineReducers } from '@reduxjs/toolkit';
import userReducer from './userSlice';
// Import other reducers

const rootReducer = combineReducers({
  user: userReducer,
  // other reducers
});

export default rootReducer;
