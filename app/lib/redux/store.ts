import { configureStore } from '@reduxjs/toolkit';
import userSlice from './userSlice';
import authSlice from './authSlice';

export const store = configureStore({
	reducer: {
		user: userSlice,
		auth: authSlice
	},
      
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
