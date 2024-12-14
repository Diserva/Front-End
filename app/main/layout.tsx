import { ReactNode } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { throwIfGetUserError } from '../lib/errorsFactory';
import { store } from '../lib/redux/store';
import { serverApi } from '../lib/redux/serverApi';
import { UserType } from '../lib/definitions/apiRequests';
import { cookies } from 'next/headers';
import StoreProvider from '../lib/providers/ReduxProvider';
import { makeUserStore } from '../lib/redux/CreateUserStore';

async function initUserStore() {
	const cookieStore = await cookies();
	const { data, error } = await store.dispatch(
		serverApi.endpoints.getUserWithExistingToken.initiate(
			cookieStore.toString() as RequestCredentials
		)
	);

	throwIfGetUserError(error);
	return data as UserType;
}

export default async function layout({ children }: { children: ReactNode }) {
	const initialState = await initUserStore();

	return (
		<StoreProvider getStore={makeUserStore} initState={initialState}>
			<main className='flex flex-col items-center'>
				<Header />
				<div className=' w-11/12 py-8 flex flex-col items-center min-h-[500px]'>
					{children}
				</div>
				<Footer />
			</main>
		</StoreProvider>
	);
}
