'use client';

import { configureStore, createSlice, Store } from '@reduxjs/toolkit';
import { useDispatch, useSelector, useStore } from 'react-redux';
import { UserType } from '../definitions/apiRequests';

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

export type AppStore = ReturnType<typeof makeUserStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
export const useAppStore = useStore.withTypes<AppStore>();

export const selectUser = (state: RootState) => state.user;
