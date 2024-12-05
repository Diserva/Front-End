import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from './store';
import { UserType } from '../definitions/apiRequests';

const initialState: Record<string, UserType> = {
	userInfo: {
		avatar: '',
		discordId: '',
		globalName: '',
		locale: '',
		permission: '',
		username: ''
	}
};

export const userSlice = createSlice({
	name: 'userSlice',
	initialState,
	reducers: {
		writeUser: (state, action: { payload: UserType }) => {
			// state = action.payload;

			state.user = action.payload;

			console.log({
				payload: action.payload,
				state
			});

			// console.log('Hello, from redux!');
		}
	}
});

export const { writeUser } = userSlice.actions;
export const selectUser = (state: RootState) => state.user;

export default userSlice.reducer;
