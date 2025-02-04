import { Suspense } from 'react';
import SearchBar from './SearchBar';
import AdditionalInfo from './AdditionalInfo';
import RenderGuilds from './RenderGuilds';
import NavigatePages from './navPages';
import {
	doHydrationListReqWithCreds,
	getGuildsHydrationList
} from '@/app/lib/axios/deffered/dashboard';
import HydrateAtoms from '@/app/lib/providers/HydrateAtoms';

async function FetchAndHydrateAtoms() {
	const hydrationDataList = await doHydrationListReqWithCreds(
		getGuildsHydrationList
	);

	return (
		<HydrateAtoms hydrationDataList={hydrationDataList}>
			<section className='w-11/12 py-8 flex flex-col items-center min-h-[500px]'>
				<SearchBar />
				<AdditionalInfo />
				<RenderGuilds />
				<NavigatePages />
			</section>
		</HydrateAtoms>
	);
}
export default function MainSection() {
	return (
		<Suspense fallback={<div>Loading...</div>}>
			<FetchAndHydrateAtoms />
		</Suspense>
	);
}
