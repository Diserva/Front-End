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
			<section className='dashboard-page-container'>
				<SearchBar />
				<AdditionalInfo />
				<RenderGuilds />
				<NavigatePages />
			</section>
		</HydrateDashboardAtoms>
	);
}
