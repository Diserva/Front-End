import { cookies } from 'next/headers';

import { serverApi } from '../lib/redux/serverApi';
import { store } from '../lib/redux/store';
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
