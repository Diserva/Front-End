'use client';

import Guild from './Guild';
import { useAtomValue } from 'jotai';
import { filteredGuildsAtom } from '../../lib/jotai/dashboardAtoms';
import { ReactNode } from 'react';

export default function RenderGuilds() {
	const filteredGuilds = useAtomValue(filteredGuildsAtom);

	return (
		<section className='guilds-layout'>
			{filteredGuilds?.map(guild => (
				<Guild key={guild.name} guild={guild} />
			))}
		</section>
	);
}
