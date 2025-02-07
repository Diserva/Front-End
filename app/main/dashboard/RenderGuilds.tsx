'use client';

import Guild from './Guild';
import { useAtomValue } from 'jotai';
import { filteredGuildsAtom } from '../../lib/jotai/dashboardAtoms';
import { ReactNode } from 'react';
import { GuildsContainer } from './utils';



export default function RenderGuilds() {
	const filteredGuilds = useAtomValue(filteredGuildsAtom);

	return (
		<GuildsContainer>
			{filteredGuilds?.map(guild => (
				<Guild key={guild.name} guild={guild} />
			))}
		</GuildsContainer>
	);
}
