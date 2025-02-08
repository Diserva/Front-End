import { Skeleton } from '@/components/ui/skeleton';
import clsx from 'clsx';

export default function Loading() {
	return (
		<section className='dashboard-page-container'>
			<SearchBarSkeleton />
			<AdditionalInfoSkeleton />
			<RenderGuildsSkeleton />
		</section>
	);
}

function SearchBarSkeleton() {
	return (
		<section className='relative w-full flex justify-end h-20 box-border !items-center p-6'>
			<Skeleton className='w-full bg-navLayout h-20 absolute top-0 left-0' />
			<Skeleton className='bg-blueAccent w-[78px] h-9 ' />
		</section>
	);
}

function AdditionalInfoSkeleton() {
	return (
		<section className='additional-info-func'>
			<Skeleton className='w-20 h-6' />
			<Skeleton className='w-[83px] h-6' />
		</section>
	);
}

function RenderGuildsSkeleton() {
	return (
		<section className='guilds-layout w-full'>
			<GuildSkeleton />
			<GuildSkeleton />
			<GuildSkeleton />
			<GuildSkeleton />
			<GuildSkeleton />
			<GuildSkeleton />
			<GuildSkeleton />
			<GuildSkeleton />
			<GuildSkeleton />
		</section>
	);
}

function GuildSkeleton() {
	return (
		<section className='w-full h-full guild '>
			<BgImageSkeleton displayed={true} />
			<section className='guild-info [&>*]:bg-skeletonCardBg [&>*]:h-5'>
				<Skeleton className='w-5/12' />
				<Skeleton className='w-1/6' />
			</section>
		</section>
	);
}

export function BgImageSkeleton({ displayed }: { displayed: boolean }) {
	return (
		<section className='relative flex justify-center items-center w-full h-[16vw] max-lg:h-[24vw] max-md:h-[37.7vw] max-sm:h-[41vw]'>
			<Skeleton
				className={clsx(
					'absolute top-0 left-0 w-full h-full bg-skeletonCardBg',
					{
						hidden: !displayed
					}
				)}
			/>
			<Skeleton className='bg-skeletonIconBg w-1/3 pt-[33.3%] rounded-full  z-10 drop-shadow-lg shadow-inner' />
		</section>
	);
}
