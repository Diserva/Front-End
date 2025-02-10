import { GuildType } from '@/app/lib/definitions/apiRequests';
import React from 'react';
import Guild from '../Guild';

export default function GuildsUI({
	filteredGuilds
}: {
	filteredGuilds: GuildType[] | undefined;
}) {
	return (
		<section className='guilds-layout'>
			{filteredGuilds?.map(guild => (
				<Guild key={guild.name} guild={guild} />
			))}
		</section>
	);
}
