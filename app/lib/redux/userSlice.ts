import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from './store';
import { UserType } from '../definitions/apiRequests';

type initialStateType = {
	user: UserType;
	auth: boolean | string;
};

const initialState: initialStateType = {
	user: {
		avatar: '',
		discordId: '',
		globalName: '',
		locale: '',
		permission: '',
		username: ''
	},
	auth: false
};

export const userSlice = createSlice({
	name: 'userSlice',
	initialState,
	reducers: {
		writeAndLoginUser: (state, action: { payload: UserType }) => {
			state.user = action.payload;
			state.auth = true;
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

export default userSlice.reducer;
