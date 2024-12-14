'use client';

import { useSelector } from 'react-redux';
import { selectFilteredGuilds } from '../lib/redux/CreateDashboardStore';
import Guild from './Guild';

export default function RenderGuilds() {
	const guilds = useSelector(selectFilteredGuilds) || [];

	return (
		<section className='grid grid-cols-3 w-full gap-x-9 gap-y-8'>
			{guilds.map(guild => (
				<Guild key={guild.name} guild={guild} />
			))}
		</section>
	);
}
