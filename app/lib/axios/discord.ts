import axios from 'axios';
// import { validate } from './utils';
import { 
      // TokenSchema,
       TokenType } from '../definitions/apiRequests';

const discord = axios.create({
	baseURL: 'https://discord.com/api/oauth2/token'
});

export const getTokenQuery = (body: string) =>
	discord<TokenType>({
		method: 'POST',
		url: 'https://discord.com/api/oauth2/token',
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded'
		},
		data: body,
		// transformResponse: validate(TokenSchema)
	});
