import { Skeleton } from '@/components/ui/skeleton';
import clsx from 'clsx';

export function BgImageSkeleton({ displayed }: { displayed: boolean }) {
	return (
		<Skeleton
			className={clsx({
				'hidden w-full aspect-9/5 bg-skeletonCardBg': !displayed
			})}
		/>
	);
}

export default function Loading() {
	return (
		<section className='dashboard-page-container'>
			<SearchBarSkeleton />
			<AdditionalInfoSkeleton />
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

// export default function GuildSkeletonsLayout() {
// 	console.log('you called me');

// 	return (
// 		<section className='guilds-layout'>
// 			{Array(9).map(() => (
// 				<GuildSkeleton />
// 			))}
// 		</section>
// 	);
// }

function GuildSkeleton() {
	return (
		<section className='[&>*]:bg-skeletonCardBg guild w-full'>
			<BgImageSkeleton displayed={true} />
			<div className='flex justify-between '>
				<Skeleton />
				<Skeleton />
			</div>
		</section>
	);
}
