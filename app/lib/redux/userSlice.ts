import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from './store';

const initialState = {
	username: '',
	userIconURL: ''
};

export const userSlice = createSlice({
	name: 'userSlice',
	initialState,
	reducers: {
		writeUser: (state, action: { payload: typeof initialState }) => {
			state = action.payload;
		}
	}
});

export const {} = userSlice.actions;
export const selectUser = (state: RootState) => state.user;

export default userSlice.reducer;
