'use client';

import { navShownAtom, toggleNavShownAtom } from '@/app/lib/jotai/headerAtom';
import clsx from 'clsx';
import { useAtomValue, useSetAtom } from 'jotai';
import React from 'react';

export default function Burger() {
	const navShown = useAtomValue(navShownAtom);
	const toggleNavShown = useSetAtom(toggleNavShownAtom);
	return (
		<section
			className={clsx(
				'hidden max-md:flex flex-col gap-2 w-7 [&>*]:h-1 [&>*]:bg-white justify-center caret-transparent',
				{
					'[&>*]:on-active': navShown,
					'[&>*]:duration-200': !navShown
				}
			)}
			onClick={toggleNavShown}>
			<span />
			<span />
		</section>
	);
}
