'use client';

import { toggleNavShownAtom } from '@/app/lib/jotai/headerAtom';
import clsx from 'clsx';
import { useSetAtom } from 'jotai';

export default function Burger() {
	const toggleNavShown = useSetAtom(toggleNavShownAtom);
	return (
		<section
			className={clsx(
				'hidden max-md:flex flex-col gap-2 caret-transparent justify-center active:scale-75 w-8 z-[100] duration-200 '
			)}
			onClick={toggleNavShown}>
			<span className='w-6 !h-[3px] rounded-l-full rounded-r-full bg-white' />
			<span className='w-3 !h-[3px] rounded-l-full rounded-r-full bg-white' />
		</section>
	);
}
