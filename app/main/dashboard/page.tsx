import AdditionalInfo from './AdditionalInfo';
import {
	doHydrationListReqWithCreds,
	getGuildsHydrationList
} from '@/app/lib/axios/deffered/dashboard';
import HydrateDashboardAtoms from '@/app/lib/providers/HydrateDashboardAtoms';
import NavigatePages from './NavPages';
import SearchBar from './SearchBar';
import Guilds from '../Guilds';

export default async function MainSection() {
	const hydrationDataList = await doHydrationListReqWithCreds(
		getGuildsHydrationList
	);

	return (
		<HydrateDashboardAtoms hydrationDataList={hydrationDataList}>
			<section className='dashboard-page-container'>
				<SearchBar />
				<AdditionalInfo />
				<Guilds />
				<NavigatePages />
			</section>
		</HydrateDashboardAtoms>
	);
}
