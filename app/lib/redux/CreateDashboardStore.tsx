'use client';

import { configureStore, createSlice, Store } from '@reduxjs/toolkit';
import { useDispatch, useSelector, useStore } from 'react-redux';
import { GuildsType, UserType } from '../definitions/apiRequests';

// export type DashboardInitState = {
// 	guilds: GuildsType;
// };

export function makeDashboardSlice(guilds: GuildsType) {
	return createSlice({
		name: 'user',
		initialState: {
			allGuilds: guilds,
			page: 1,
			amoutOfServers: guilds.length
		},
		reducers: {}
	});
}

export function makeDashboardStore(params: GuildsType) {
	return configureStore({
		reducer: {
			user: makeDashboardSlice(params).reducer
		}
	});
}

export type AppStore = ReturnType<typeof makeDashboardStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
export const useAppStore = useStore.withTypes<AppStore>();

export const selectUser = (state: RootState) => state.user;
