import axios from 'axios';
// import { validate } from './utils';
import { GuildsType, UserType } from '../definitions/apiRequests';

const server = axios.create({
	baseURL: process.env.NEXT_PUBLIC_BACKEND_URI
});

server.interceptors.response.use(
	data => data,
	error => {
		console.error(error);

		throw error;
	}
);

export const getUserByNewToken = (token: string) =>
	server<UserType>({
		url: `/auth/discord/${token}`,
		// transformResponse: validate(UserSchema)
		withCredentials: true
	});

export const getUserWithExistingToken = (cookies: RequestCredentials) =>
	server<UserType>({
		url: '/auth/',
		headers: {
			Cookie: cookies
		}
		// transformResponse: validate(UserSchema)
	});

export const getGuilds = (cookies: RequestCredentials) =>
	server<GuildsType>({
		url: '/user/guilds',
		headers: {
			Cookie: cookies
		}
		// transformResponse: validate(GuildsSchema)
	});
