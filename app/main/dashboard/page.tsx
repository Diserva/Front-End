import { Suspense } from 'react';
import SearchBar from './SearchBar';
import AdditionalInfo from './AdditionalInfo';
import RenderGuilds from './RenderGuilds';
import NavigatePages from './navPages';
import {
	doHydrationListReqWithCreds,
	getGuildsHydrationList
} from '@/app/lib/axios/deffered/dashboard';
import HydrateDashboardAtoms from '@/app/lib/providers/HydrateDashboardAtoms';

export default async function MainSection() {
	const hydrationDataList = await doHydrationListReqWithCreds(
		getGuildsHydrationList
	);

	return (
		<HydrateDashboardAtoms hydrationDataList={hydrationDataList}>
			<section className='w-11/12 py-8 flex flex-col items-center min-h-[500px]'>
				<SearchBar />
				<AdditionalInfo />
				<RenderGuilds />
				<NavigatePages />
			</section>
		</HydrateDashboardAtoms>
	);
}
