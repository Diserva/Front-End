'use client';

import { configureStore } from '@reduxjs/toolkit';
import { GuildsType, UserType } from '../definitions/apiRequests';
import { makeUserSlice } from './CreateUserStore';
import { makeDashboardSlice } from './CreateDashboardStore';
import { useDispatch, useSelector, useStore } from 'react-redux';

type initialValues = {
	userInitState: UserType;
	dashboardInitState: GuildsType;
};

export function makeStore({
	dashboardInitState,
	userInitState
}: initialValues) {
	return configureStore({
		reducer: {
			user: makeUserSlice(userInitState).reducer,
			dashboard: makeDashboardSlice(dashboardInitState).reducer
		}
	});
}

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
export const useAppStore = useStore.withTypes<AppStore>();
