import { GuildsSchema } from '../lib/definitions/apiRequests';
import { serverApi, useGetGuildsDataQuery } from '../lib/redux/serverApi';
import { store } from '../lib/redux/store';
import SearchBar from './SearchBar';

async function InitReduxStore() {
	const { data, isError } = await store.dispatch(
		serverApi.endpoints.getGuildsData.initiate(undefined)
	);
}

export default async function page() {
	await InitReduxStore();
	return (
		<main className='w-full'>
			<SearchBar />
		</main>
	);
}
