import axios, { AxiosResponse } from 'axios';
// import { validate } from './utils';
import {
	GuildsSchema,
	GuildsType,
	UserSchema,
	UserType
} from '../definitions/apiRequests';
import { json, validate } from './utils';

const server = axios.create({
	baseURL: process.env.NEXT_PUBLIC_BACKEND_URI
});

// const selectData = (response: AxiosResponse) => response.data;

export const getUserByNewToken = (token: string) =>
	server<UserType>({
		url: `/auth/discord/${token}`,
		transformResponse: json(validate(UserSchema)),
		withCredentials: true
	});

export const getUserWithExistingToken = (cookies: RequestCredentials) =>
	server<UserType>({
		url: '/auth/',
		headers: {
			Cookie: cookies
		},
		transformResponse: json(validate(UserSchema))
	});

export const getGuilds = (cookies: RequestCredentials) =>
	server<GuildsType>({
		url: '/user/guilds',
		headers: {
			Cookie: cookies
		},
		transformResponse: json(validate(GuildsSchema))
	});
