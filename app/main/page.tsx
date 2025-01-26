import Footer from '../components/Footer';
import Header from '../components/Header';
import { getHydrationDataList } from '../lib/axios/deffered/dashboard';
import HydrateAtoms from '../lib/providers/HydrateAtoms';
import AdditionalInfo from './AdditionalInfo';
import NavigatePages from './navPages';
import RenderGuilds from './RenderGuilds';
import SearchBar from './SearchBar';

export default async function page() {
	const hydrationDataList = await getHydrationDataList();

	return (
		<HydrateAtoms hydrationDataList={hydrationDataList}>
			<Header />
				<main className='w-full'>
					<SearchBar />
					<AdditionalInfo />
					<RenderGuilds />
					<NavigatePages />
				</main>
			<Footer />
		</HydrateAtoms>
	);
}
