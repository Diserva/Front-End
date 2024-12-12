import { cookies } from 'next/headers';
import {
	GuildsSchema,
	GuildsType,
	UserSchema
} from './../definitions/apiRequests';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { UserType } from '../definitions/apiRequests';
import { prepareHeaders, validate } from './utils';

export const serverApi = createApi({
	reducerPath: 'serverApi',
	baseQuery: fetchBaseQuery({
		baseUrl: process.env.NEXT_PUBLIC_BACKEND_URI,
		credentials: 'include',
		prepareHeaders
	}),

	endpoints: builder => ({
		getUserByNewToken: builder.query<UserType, string>({
			query: token => `/auth/discord/${token}`,
			transformResponse: validate(UserSchema)
		}),
		getUserWithExistingToken: builder.query<UserType, undefined>({
			query: () => '/auth/',
			transformResponse: validate(UserSchema)
		}),
		getGuildsData: builder.query<GuildsType, RequestCredentials>({
			query: cookies => ({
				url: '/user/guilds',
				headers: {
					Cookie: cookies
				}
			}),
			transformResponse: validate(GuildsSchema)
		})
	})
});

export const { useGetUserWithExistingTokenQuery, useGetGuildsDataQuery } =
	serverApi;
