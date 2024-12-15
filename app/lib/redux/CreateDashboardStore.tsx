'use client';

import { createSlice } from '@reduxjs/toolkit';
import { GuildsType } from '../definitions/apiRequests';
import { RootState } from './store';

export function makeDashboardSlice(guilds: GuildsType) {
	return createSlice({
		name: 'user',
		initialState: {
			allGuilds: guilds,
			filteredGuilds: guilds,
			page: 1,
			amoutOfServers: guilds.length
		},
		reducers: {}
	});
}

export const selectFilteredGuilds = (state: RootState) =>
	state.dashboard.filteredGuilds;

export const selectDashboard = (state: RootState) => state.dashboard;
