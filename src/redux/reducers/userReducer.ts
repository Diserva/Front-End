import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface UserState {
	discordId: string;
	username: string;
	avatar: string;
	status: string;
	permission: string;
	globalName: string;
	locale: string;
	isAuth: boolean;
}

const initialState: UserState = {
	discordId: '',
	username: '',
	avatar: '',
	status: '',
	permission: '',
	globalName: '',
	locale: '',
	isAuth: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserState>) => {
      state.discordId = action.payload.discordId;
      state.username = action.payload.username;
      state.avatar = action.payload.avatar;
      state.status = action.payload.status;
      state.permission = action.payload.permission;
      state.globalName = action.payload.globalName;
      state.locale = action.payload.locale;
      state.isAuth = action.payload.isAuth;
    },
  },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;