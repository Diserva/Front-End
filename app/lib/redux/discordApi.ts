import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query';
import { getTokenResultType } from '../definitions/apiRequests';

export const discordApi = createApi({
	reducerPath: 'discordApi',
	baseQuery: fetchBaseQuery({ baseUrl: 'fds' }),
	endpoints: builder => ({
		getToken: builder.query<getTokenResultType, string>({
			query: body => ({
				method: 'POST',
				url: 'https://discord.com/api/oauth2/token',
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded'
				},
				body
			})
		})
	})
});

// export const { useGetToken } = discordApi;
