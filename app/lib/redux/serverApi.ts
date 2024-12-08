import { getTokenResult } from './../definitions/apiRequests';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { UserType } from '../definitions/apiRequests';

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
			})
		}),
		getUserWithExistingToken: builder.query<UserType, undefined>({
			query: () => ({
				url: '/auth/',
				credentials: 'include'
			})
		})
	})
});



export const {
	useGetUserWithExistingTokenQuery
} = serverApi