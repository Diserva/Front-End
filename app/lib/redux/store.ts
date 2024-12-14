'use client';

import { configureStore } from '@reduxjs/toolkit';
import { GuildsType, UserType } from '../definitions/apiRequests';
import { makeUserSlice } from './CreateUserStore';
import { makeDashboardSlice } from './CreateDashboardStore';

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
