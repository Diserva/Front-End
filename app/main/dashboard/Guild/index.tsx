import { GuildType } from '@/app/lib/axios/apiSchemas';
import { AmountOfUsersUI, BackgroundContainer, MainBgUI, Title } from './UI';
import clsx from 'clsx';
import Link from 'next/link';

export function MainBg({ guild }: { guild: GuildType }) {
	const bgSrc = guild.banner
		? `https://cdn.discordapp.com/banners/${guild.id}/${guild.banner}?size=1024`
		: 'https://i.pinimg.com/originals/b6/07/6b/b6076bb4df9a3532e01ad33b4e563643.jpg';

	return <MainBgUI bgSrc={bgSrc} />;
}

export function AmountOfUsers({ guild }: { guild: GuildType }) {
	const num = guild.approximate_member_count;
	let prefix = '';
	let displayedNum = num;

	if (num > 1_000_000) {
		prefix = 'M';
		displayedNum = Number((num / 1_000_000).toFixed(1));
	} else if (num > 1000) {
		prefix = 'K';
		displayedNum = Number((num / 1_000).toFixed(1));
	}

	return <AmountOfUsersUI {...{ displayedNum, prefix }} />;
}

export default function Guild({ guild }: { guild: GuildType }) {
	return (
		<Link
			href={`manage-server/${guild.name.toLowerCase()}`}
			className={clsx('guild group', { 'opacity-80': !guild.isBot })}>
			<BackgroundContainer guild={guild} />
			<section className='guild-info'>
				<Title name={guild.name} />
				<AmountOfUsers guild={guild} />
			</section>
		</Link>
	);
}
