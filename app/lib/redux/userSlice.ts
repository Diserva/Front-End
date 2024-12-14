import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from './store';
import { UserType } from '../definitions/apiRequests';

type UserOutcoming = {
	avatarUrl: string;
};

type InitialStateType = {
	user: UserType;
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
	userOutcoming: {
		avatarUrl: ''
	}
};

export const userSlice = createSlice({
	name: 'userSlice',
	initialState,
	reducers: {
		writeUser: (state, action: { payload: UserType }) => {
			state.user = action.payload;
			state.userOutcoming.avatarUrl = `https://cdn.discordapp.com/avatars/${state.user.discordId}/${state.user.avatar}`;
		}
	}
});

export const { writeUser } = userSlice.actions;
export const selectUser = (state: RootState) => state.user.user;
export const selectUserOutcoming = (state: RootState) =>
	state.user.userOutcoming;

export default userSlice.reducer;
