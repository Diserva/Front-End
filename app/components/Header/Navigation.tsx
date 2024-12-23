'use client';

import { NAV_LINKS } from '@/app/lib/constants/header';
import { navShownAtom } from '@/app/lib/jotai/headerAtom';
import clsx from 'clsx';
import { useAtomValue } from 'jotai';
import Link from 'next/link';
import BlurOnScreen from '../utils/BlurOnScreen';

export default function Navigation({}) {
	const navShown = useAtomValue(navShownAtom);

	return (
		<nav
			className={clsx('flex gap-4 items-center max-md:nav-on-mobile-always !z-50', {
				'max-md:nav-on-mobile-visible ': navShown,
				'duration-150': !navShown
			})}>
			{NAV_LINKS.map(({ tKey, href }) => (
				<Link key={tKey} href={href}>
					{tKey}
				</Link>
			))}
			
		</nav>
	);
}
