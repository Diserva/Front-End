'use client';

import { NAV_LINKS } from '@/app/lib/constants/header';
import { navShownAtom } from '@/app/lib/jotai/headerAtom';
import clsx from 'clsx';
import { useAtomValue } from 'jotai';
import Link from 'next/link';

export default function Navigation({}) {
	const navShown = useAtomValue(navShownAtom);

	return (
		<nav
			className={clsx(
				'flex gap-4 items-center max-md:nav-on-mobile justify-center -z-50',
				{
					'!top-[68px] duration-200 !w-screen': navShown,
					'duration-200': !navShown
				}
			)}>
			{NAV_LINKS.map(({ tKey, href }) => (
				<Link key={tKey} href={href}>
					{tKey}
				</Link>
			))}
		</nav>
	);
}
