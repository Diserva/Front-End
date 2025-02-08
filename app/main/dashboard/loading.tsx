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
		<section className='guild w-full h-full'>
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
		<Skeleton
			className={clsx('w-full h-[16vw] bg-skeletonCardBg', {
				hidden: !displayed
			})}
		/>
	);
}
