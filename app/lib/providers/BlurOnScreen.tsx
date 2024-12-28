'use client';

import { useAtom } from 'jotai';
import { navShownAtom } from '../jotai/headerAtom';
import { ReactNode, useCallback } from 'react';
import clsx from 'clsx';

export default function BlurOnScreenWhenNavShown({
	children
}: {
	children: ReactNode;
}) {
	const [navShown, setNavShown] = useAtom(navShownAtom);
	const hideNav = useCallback(() => setNavShown(false), []);
	return (
		<div
			className={clsx('w-11/12 py-8 flex flex-col items-center min-h-[500px]', {
				'after:blur-after': navShown
			})}
			onClick={navShown ? hideNav : undefined}>
			{children}
		</div>
	);
}

/*
'fixed top-0 left-0 w-screen h-screen z-10 bg-zinc-950 bg-opacity-85  hidden ',
				{ '!flex': navShown }
*/
