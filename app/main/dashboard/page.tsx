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
import { PageContainer } from './utils';

export default async function MainSection() {
	const hydrationDataList = await doHydrationListReqWithCreds(
		getGuildsHydrationList
	);

	console.log(
		await new Promise(resolve => {
			setTimeout(() => {
				resolve(true);
			}, 10_000);
		})
	);

	return (
		<HydrateDashboardAtoms hydrationDataList={hydrationDataList}>
			<PageContainer>
				<SearchBar />
				<AdditionalInfo />
				<RenderGuilds />
				<NavigatePages />
			</PageContainer>
		</HydrateDashboardAtoms>
	);
}
