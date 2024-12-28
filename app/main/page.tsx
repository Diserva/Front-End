import { getHydrationDataList } from '../lib/axios/deffered/dashboard';
import BlurOnScreenWhenNavShown from '../lib/providers/BlurOnScreen';
import HydrateAtoms from '../lib/providers/HydrateAtoms';
import AdditionalInfo from './AdditionalInfo';
import NavigatePages from './navPages';
import RenderGuilds from './RenderGuilds';
import SearchBar from './SearchBar';

export default async function page() {
	const hydrationDataList = await getHydrationDataList();
	
	return (
		<HydrateAtoms hydrationDataList={hydrationDataList}>
			<BlurOnScreenWhenNavShown>
				<main className='w-full'>
					<SearchBar />
					<AdditionalInfo />
					<RenderGuilds />
					<NavigatePages />
				</main>
			</BlurOnScreenWhenNavShown>
		</HydrateAtoms>
	);
}
