import axios from 'axios';
import { TokenSchema, TokenType } from './apiSchemas';
import { json, validate } from './utils';

const discord = axios.create({
	baseURL: process.env.DISCORD_API_PATH
});

export const getTokenQuery = (body: string) =>
	discord<TokenType>({
		method: 'POST',
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded'
		},
		data: body,
		transformResponse: json(validate(TokenSchema))
	});
