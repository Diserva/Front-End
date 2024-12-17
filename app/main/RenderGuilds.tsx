'use client';

import Guild from './Guild';
import { useAtomValue } from 'jotai';
import { filteredGuildsAtom } from '../lib/jotai/dashboardAtoms';

export default function RenderGuilds() {
	const filteredGuilds = useAtomValue(filteredGuildsAtom);

	return (
		<section className='grid grid-cols-3 max-lg:grid-cols-2 max-md:flex max-md:flex-col max-md:items-center w-full gap-x-9 gap-y-8'>
			{filteredGuilds?.map(guild => (
				<Guild key={guild.name} guild={guild} />
			))}
		</section>
	);
}
