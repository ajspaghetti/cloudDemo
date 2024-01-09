import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers'; // Your combined reducers
import { thunk } from 'redux-thunk'; // Corrected import for thunk (default export)

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
  devTools: process.env.NODE_ENV !== 'production', // Enables Redux DevTools in non-production environments
});

export default store;
