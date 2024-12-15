'use client';

import { configureStore, createSlice } from '@reduxjs/toolkit';
import { UserType } from '../definitions/apiRequests';
import { RootState } from './store';

export function makeUserSlice(user: UserType) {
	return createSlice({
		name: 'user',
		initialState: {
			user: user,
			userOutcoming: {
				avatarUrl: `https://cdn.discordapp.com/avatars/${user.discordId}/${user.avatar}`
			}
		},
		reducers: {}
	});
}

export function makeUserStore(user: UserType) {
	return configureStore({
		reducer: {
			user: makeUserSlice(user).reducer
		}
	});
}

export const selectUser = (state: RootState) => state.user;
