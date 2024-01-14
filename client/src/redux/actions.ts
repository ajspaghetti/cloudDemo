import { createAction } from '@reduxjs/toolkit';

// Define an action to register a user
export const registerUser = createAction<{ email: string; password: string; firstName: string; lastName: string }>(
  'user/registerUser'
);
