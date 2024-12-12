import { createSlice } from '@reduxjs/toolkit';
import { GuildsType } from '../definitions/apiRequests';

type InitType = {
	allGuilds: GuildsType;
	currentPage: number;
};

const initialState: InitType = {
	allGuilds: [],
	currentPage: 1
};

export const dashBoardSlice = createSlice({
	name: 'homePageSlice',
	initialState,
	reducers: {
		writeGuilds: (state, action: { payload: GuildsType }) => {
			state.allGuilds = action.payload;
		}
	}
});

export const { writeGuilds } = dashBoardSlice.actions;

export default dashBoardSlice.reducer;
