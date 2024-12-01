import { createSlice } from '@reduxjs/toolkit';
import { RootState } from './store';

const initialState = {
	authenticated: false
};

export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		login: state => {
			state.authenticated = true;
		},
		logout: state => {
			state.authenticated = false;
		}
	}
});

export const {login, logout} = authSlice.actions;
export const selectAuth = (state: RootState) => state.auth.authenticated

export default authSlice.reducer;