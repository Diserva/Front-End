import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query';
import { getUserByTokenResultSchema } from '../definitions/apiRequests';
import { validate } from './utils';

export const discordApi = createApi({
	reducerPath: 'discordApi',
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://discord.com/api/oauth2/token'
	}),
	endpoints: builder => ({
		getToken: builder.query({
			query: body => ({
				method: 'POST',
				url: 'https://discord.com/api/oauth2/token',
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded'
				},
				body
			}),
			transformResponse: validate(getUserByTokenResultSchema)
		})
	})
});
