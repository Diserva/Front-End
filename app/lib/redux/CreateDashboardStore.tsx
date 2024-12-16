'use client';

import { createSlice } from '@reduxjs/toolkit';
import { GuildsType, GuildType } from '../definitions/apiRequests';
import { RootState } from './store';

export type DashboardInitState = {
	allGuilds: GuildType[];
	filteredGuilds: GuildType[];
	page: number;
	amountOfServers: number;
};

const initialState: DashboardInitState = {
	allGuilds: [],
	filteredGuilds: [],
	page: 1,
	amountOfServers: 0
};

export const dashboardSlice = createSlice({
	name: 'user',
	initialState: initialState,
	reducers: {
		initDashboard: (state, { payload }: { payload: GuildsType }) => {
			state.allGuilds = payload;
			state.filteredGuilds = payload;
			state.amountOfServers = payload.length;
		}
	}
});

export const { initDashboard } = dashboardSlice.actions;
export const selectFilteredGuilds = (state: RootState) =>
	state.dashboard.filteredGuilds;

export const selectDashboard = (state: RootState) => state.dashboard;
