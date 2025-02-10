import { GuildType } from '@/app/lib/definitions/apiRequests';
import clsx from 'clsx';
import { RiUser3Line } from 'react-icons/ri';
import { MainBg } from '.';

export function MainBgUI({ bgSrc }: { bgSrc: string }) {
	return (
		<div className='rounded-lg overflow-hidden'>
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

export function BackgroundContainer({ guild }: { guild: GuildType }) {
	return (
		<section className='w-full relative flex justify-center items-center'>
			<MainBg guild={guild} />
			<BgIcon guild={guild} />
		</section>
	);
}

export function BgIcon({ guild }: { guild: GuildType }) {
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

export function AmountOfUsersUI({
	displayedNum,
	prefix
}: {
	displayedNum: number;
	prefix: string;
}) {
	return (
		<section className='flex justify-between p-1 bg-lightBg rounded-[4px] items-center gap-1 max-h-5'>
			<span className='text-white'>
				{`${displayedNum}${prefix}`.toUpperCase()}
			</span>
			<RiUser3Line color='white' width={10} height={10} />
		</section>
	);
}

export function Title({ name }: { name: string }) {
	return <h3 className='text-white text-lg max-lg:text-base'>{name}</h3>;
}

