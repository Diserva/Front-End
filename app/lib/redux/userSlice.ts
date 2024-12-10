import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from './store';
import { UserType } from '../definitions/apiRequests';

type UserOutcoming = {
	avatarUrl: string;
};

type InitialStateType = {
	user: UserType;
	auth: boolean | string;
	userOutcoming: UserOutcoming;
};

const initialState: InitialStateType = {
	user: {
		avatar: '',
		discordId: '',
		globalName: '',
		locale: '',
		permission: '',
		username: ''
	},
	auth: false,
	userOutcoming: {
		avatarUrl: ''
	}
};

export const userSlice = createSlice({
	name: 'userSlice',
	initialState,
	reducers: {
		writeAndLoginUser: (state, action: { payload: UserType }) => {
			state.user = action.payload;
			state.auth = true;

			state.userOutcoming.avatarUrl = `https://cdn.discordapp.com/avatars/${state.user.discordId}/${state.user.avatar}`;
		},
		logout: state => {
			state.auth = false;
		},
		startAuth: state => {
			state.auth = 'authorizing';
		}
	}
});

export const { writeAndLoginUser, logout, startAuth } = userSlice.actions;
export const selectUser = (state: RootState) => state.user.user;
export const selectAuth = (state: RootState) => state.user.auth;
export const selectUserOutcoming = (state: RootState) =>
	state.user.userOutcoming;

export default userSlice.reducer;
