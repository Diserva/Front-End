import dashBoardSlice from './DashboardSlice';
import { discordApi } from './discordApi';
import { configureStore } from '@reduxjs/toolkit';
import userSlice from './userSlice';
import { serverApi } from './serverApi';

export const store = configureStore({
	reducer: {
		user: userSlice,
		dashboard: dashBoardSlice,
		[discordApi.reducerPath]: discordApi.reducer,
		[serverApi.reducerPath]: serverApi.reducer
	},
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware()
			.concat(discordApi.middleware)
			.concat(serverApi.middleware)
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
