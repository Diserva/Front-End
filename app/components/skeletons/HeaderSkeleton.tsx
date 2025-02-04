import { Skeleton } from '@/components/ui/skeleton';
import Navigation from '../utils/Navigation';

function Logo() {
	return (
		<section className='flex-center gap-2'>
			<Skeleton className='bg-[#2BC66F] size-8' />
			Ceavex
		</section>
	);
}

function NavListSkeleton() {
	return (
		<div className='navigation-list'>
			<Navigation />
		</div>
	);
}

export default function HeaderSkeleton() {
	return (
		<nav className='nav fixed top-0 left-0'>
			<header className='header'>
				<Logo />
				<NavListSkeleton />
			</header>
		</nav>
	);
}
