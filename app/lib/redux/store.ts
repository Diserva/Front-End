'use client';

import { configureStore } from '@reduxjs/toolkit';
import { GuildsType, UserType } from '../definitions/apiRequests';
import { makeUserSlice } from './CreateUserStore';
import { dashboardSlice } from './CreateDashboardStore';
import { useDispatch, useSelector, useStore } from 'react-redux';

export type StoreInitState = {
	userInitState: UserType;
	dashboardInitState: GuildsType;
};

export function makeStore({
	dashboardInitState,
	userInitState
}: StoreInitState) {
	return configureStore({
		reducer: {
			user: makeUserSlice(userInitState).reducer,
			dashboard: dashboardSlice.reducer
		}
	});
}


export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
export const useAppStore = useStore.withTypes<AppStore>();
