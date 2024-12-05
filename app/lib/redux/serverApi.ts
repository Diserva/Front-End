import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query';
import { UserType } from '../definitions/apiRequests';

export const serverApi = createApi({
	reducerPath: 'serverApi',
	baseQuery: fetchBaseQuery({
		baseUrl: process.env.NEXT_PUBLIC_BACKEND_URI
	}),
	endpoints: builder => ({
		getUserByToken: builder.query<UserType, string>({
			query: token => ({
				url: `/auth/discord/${token}`,
				credentials: 'include'
			})
		})
	})
});
