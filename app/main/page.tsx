import RenderGuilds from './RenderGuilds';
import SearchBar from './SearchBar';

export default async function page() {
	return (
		<main className='w-full'>
			<SearchBar />
			<RenderGuilds />
		</main>
	);
}
