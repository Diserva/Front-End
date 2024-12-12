import { cookies } from 'next/headers';
import { GuildsSchema, GuildsType } from '../lib/definitions/apiRequests';
import { writeGuilds } from '../lib/redux/DashboardSlice';
import { serverApi, useGetGuildsDataQuery } from '../lib/redux/serverApi';
import { store } from '../lib/redux/store';
import { handleRequestError } from '../lib/redux/utils';
import SearchBar from './SearchBar';

async function InitReduxStore() {
	const cookieStore = await cookies();

	const { data, isError, error } = await store.dispatch(
		serverApi.endpoints.getGuildsData.initiate(
			cookieStore.toString() as RequestCredentials
		)
	);

	console.log("life after")

	if (isError) {
		console.log(data, error);
		handleRequestError(error as Error);
	} else if (data) {
		console.log({ data });
		store.dispatch(writeGuilds(data));
	}
}

export default function page() {
	InitReduxStore();
	return (
		<main className='w-full'>
			<SearchBar />
		</main>
	);
}
