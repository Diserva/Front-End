'use client';

import { configureStore, createSlice } from '@reduxjs/toolkit';
import { UserSchema, UserType } from '../definitions/apiRequests';
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

type UserInitState = {
	user: UserType;
	avatarUrl: string;
};

const initialState: UserInitState = {
	user: {
		avatar: '',
		discordId: '',
		globalName: '',
		locale: '',
		permission: '',
		username: ''
	},
	avatarUrl: ''
};

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		initUser: (state, { payload }: { payload: UserType }) => {
			state.user = payload;
			state.avatarUrl = `https://cdn.discordapp.com/avatars/${payload.discordId}/${payload.avatar}`;
		}
	}
});

export const { initUser } = userSlice.actions;

export const selectUser = (state: RootState) => state.user;
