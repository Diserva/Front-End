'use client';

import { configureStore, createSlice, Store } from '@reduxjs/toolkit';
import { useDispatch, useSelector, useStore } from 'react-redux';
import { GuildsType, UserType } from '../definitions/apiRequests';
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
	state.dashboard.filteredGuilds
