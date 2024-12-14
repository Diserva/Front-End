import { cookies } from 'next/headers';
import { GuildsSchema, GuildsType } from '../lib/definitions/apiRequests';
import { writeGuilds } from '../lib/redux/DashboardSlice';
import { serverApi, useGetGuildsDataQuery } from '../lib/redux/serverApi';
import { store } from '../lib/redux/store';
import { handleRequestError } from '../lib/redux/utils';
import SearchBar from './SearchBar';

export default async function page() {
	// переписати на pipe
	const cookieStore = await cookies();

	const { data, isError, error } = await store.dispatch(
		serverApi.endpoints.getGuildsData.initiate(
			cookieStore.toString() as RequestCredentials
		)
	);

	if (error) {
		throw 'something is wrong' + error;
	}

	return (
		<main className='w-full'>
			<SearchBar />
		</main>
	);
}
