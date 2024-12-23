'use client';

import { navShownAtom } from '@/app/lib/jotai/headerAtom';
import clsx from 'clsx';
import { useAtom } from 'jotai';
import { useCallback } from 'react';

export default function BlurOnScreen() {
	const [navShown, setNavShown] = useAtom(navShownAtom);
	const hideNav = useCallback(() => setNavShown(false), []);

	return (
		<section
			className={clsx(
				'fixed top-0 left-0 w-screen h-screen z-10 bg-zinc-950 bg-opacity-85  hidden ',
				{ '!flex': navShown }
			)}
			onClick={hideNav}
		/>
	);
}
