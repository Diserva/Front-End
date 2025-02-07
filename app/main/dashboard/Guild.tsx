'use client';

import { GuildType } from '@/app/lib/definitions/apiRequests';
import clsx from 'clsx';
import { RiUser3Line } from 'react-icons/ri';

function BackgroundContainer({ guild }: { guild: GuildType }) {
	return (
		<section className='w-full relative flex justify-center items-center'>
			<MainBg guild={guild} />
			<BgIcon guild={guild} />
		</section>
	);
}

function MainBg({ guild }: { guild: GuildType }) {
	const bgSrc = guild.banner
		? `https://cdn.discordapp.com/banners/${guild.id}/${guild.banner}?size=1024`
		: 'https://i.pinimg.com/originals/b6/07/6b/b6076bb4df9a3532e01ad33b4e563643.jpg';

	return (
		<div className='border-rounded overflow-hidden'>
			<img
				src={bgSrc}
				alt=''
				className={clsx(
					'group-hover:scale-125 group-hover:opacity-60 duration-300'
				)}
			/>
		</div>
	);
}

function BgIcon({ guild }: { guild: GuildType }) {
	return (
		<div className='absolute w-full h-full top-0 left-0 flex justify-center items-center'>
			<img
				src={`https://cdn.discordapp.com/icons/${guild.id}/${guild.icon}.webp`}
				alt=''
				className={clsx('z-10 rounded-full w-1/3')}
			/>
		</div>
	);
}

function AmountOfUsers({ guild }: { guild: GuildType }) {
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

	return (
		<section className='flex justify-between p-1 bg-lightBg rounded-[4px] items-center gap-1 max-h-5'>
			<span className='text-white'>
				{`${displayedNum}${prefix}`.toUpperCase()}
			</span>
			<RiUser3Line color='white' width={10} height={10} />
		</section>
	);
}

function Title({ name }: { name: string }) {
	return <h3 className='text-white text-lg max-lg:text-base'>{name}</h3>;
}

export default function Guild({ guild }: { guild: GuildType }) {
	return (
		<section className={clsx('guild group', { 'opacity-80': !guild.isBot })}>
			<BackgroundContainer guild={guild} />
			<section className='flex justify-between items-center'>
				<Title name={guild.name} />
				<AmountOfUsers guild={guild} />
			</section>
		</section>
	);
}
