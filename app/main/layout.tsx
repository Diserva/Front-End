import { ReactNode } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { cookies } from 'next/headers';
import { getGuilds, getUserWithExistingToken } from '../lib/axios/server';
import { Provider } from 'jotai';
import HydrateAtoms from '../lib/providers/HydrateAtoms';
import { GuildsType, UserType } from '../lib/definitions/apiRequests';

async function initUserStore(credentials: RequestCredentials) {
	const { data } = await getUserWithExistingToken(credentials);
	return data;
}

async function initDashboardStore(credentials: RequestCredentials) {
	const { data } = await getGuilds(credentials);
	return data;
}

export type HydrationDataList = {
	userInitState: UserType;
	dashboardInitState: GuildsType;
};

export default async function layout({ children }: { children: ReactNode }) {
	const cookieStore = await cookies();
	const credentials = cookieStore.toString();

	const [userInitState, dashboardInitState] = await Promise.all([
		initUserStore(credentials as RequestCredentials),
		initDashboardStore(credentials as RequestCredentials)
	]);

	const hydrationDataList: HydrationDataList = {
		userInitState,
		dashboardInitState
	};

	return (
		<Provider>
			<HydrateAtoms hydrationDataList={hydrationDataList}>
				<main className='flex flex-col items-center'>
					<Header />
					<div className=' w-11/12 py-8 flex flex-col items-center min-h-[500px]'>
						{children}
					</div>
					<Footer />
				</main>
			</HydrateAtoms>
		</Provider>
	);
}
