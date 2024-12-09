import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	allGuilds: [],
	currentPage: 1
};

export const homePageSlice = createSlice({
	name: 'homePageSlice',
	initialState,
	reducers: {}
});

export const {} = homePageSlice.actions;

export default homePageSlice.reducer;
