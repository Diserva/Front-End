import {
	getUserByTokenResultSchema,
	getUserByTokenResultType,
	GuildsSchema,
	GuildsType,
	UserSchema
} from './../definitions/apiRequests';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { UserType } from '../definitions/apiRequests';
import { Schema, z, ZodSchema } from 'zod';
import { validate } from './utils';

export const serverApi = createApi({
	reducerPath: 'serverApi',
	baseQuery: fetchBaseQuery({
		baseUrl: process.env.NEXT_PUBLIC_BACKEND_URI
	}),
	endpoints: builder => ({
		getUserByNewToken: builder.query<UserType, string>({
			query: token => ({
				url: `/auth/discord/${token}`,
				credentials: 'include'
			}),
			transformResponse: validate(UserSchema)
		}),
		getUserWithExistingToken: builder.query<UserType, undefined>({
			query: () => ({
				url: '/auth/',
				credentials: 'include'
			}),
			transformResponse: validate(UserSchema)
		}),
		getGuildsData: builder.query<GuildsType, undefined>({
			query: () => ({
				url: '/user/guilds',
				credentials: 'include'
			}),
			transformResponse: validate(GuildsSchema)
		})
	})
});

export const { useGetUserWithExistingTokenQuery, useGetGuildsDataQuery } =
	serverApi;
