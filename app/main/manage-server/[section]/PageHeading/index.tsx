'use client';

import {
	sectionNameAtom,
	sectionNamesListAtom
} from '@/app/lib/jotai/settingsAtom';
import { Button } from '@/components/ui/button';
import clsx from 'clsx';
import { useAtom, useAtomValue } from 'jotai';
import { useCallback } from 'react';

export default function SettingsHeading({
	serverName
}: {
	serverName: string;
}) {
	const [currentSectionName, setSectionName] = useAtom(sectionNameAtom);
	const allSectionNames = useAtomValue(sectionNamesListAtom);

	return (
		<header className='flex flex-col w-full pt-8 px-[5vw]'>
			<section className='flex flex-col'>
				<h1 className='text-5xl font-extrabold italic text-white'>
					{serverName}
				</h1>
				<h2>Dashboard</h2>
			</section>

			<nav className='flex flex-col items-center'>
				<section className='flex gap-[2.5vw]'>
					{allSectionNames.map(({ searchParamsName, displayedName }) => (
						<Button
							key={searchParamsName}
							variant='ghost'
							className={clsx({
								'font-bold text-white': searchParamsName === currentSectionName
							})}
							onClick={() => setSectionName(searchParamsName)}>
							{displayedName}
						</Button>
					))}
				</section>
				<span />
			</nav>
		</header>
	);
}
