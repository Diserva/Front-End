import { Skeleton } from '@/components/ui/skeleton';
import clsx from 'clsx';

export default function GuildSkeletonsLayout() {
	console.log("you called me");
	
	return (
		<section className='guilds-layout'>
			{Array(9).map(() => (
				<GuildSkeleton />
			))}
		</section>
	);
}

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

export function BgImageSkeleton({ displayed }: { displayed: boolean }) {
	console.log('I should be visible');
	return (
		<Skeleton
			className={clsx({
				'hidden w-full aspect-9/5 bg-skeletonCardBg': !displayed
			})}
		/>
	);
}
