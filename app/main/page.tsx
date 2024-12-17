import AdditionalInfo from './AdditionalInfo';
import NavigatePages from './navPages';
import RenderGuilds from './RenderGuilds';
import SearchBar from './SearchBar';

export default async function page() {
	return (
		<main className='w-full'>
			<SearchBar />
			<AdditionalInfo />
			<RenderGuilds />
			<NavigatePages />
		</main>
	);
}
