import { SectionLink } from '@/app/lib/jotai/settingsAtom';
import clsx from 'clsx';
import React, { MouseEventHandler, Ref, RefObject } from 'react';
import { SettingsSectionNames } from './client';

export function Heading({ serverName }: { serverName: string }) {
	return (
		<section className='flex flex-col gap-2'>
			<h1 className='text-5xl font-extrabold italic text-white tracking-wide'>
				{serverName}
			</h1>
			<h2 className='text-[1.75rem] text-white font-semibold'>Dashboard</h2>
		</section>
	);
}

export function SettingsSectionNamesUI({
	allSectionNames,
	onClick,
	currSectionName
}: {
	allSectionNames: SectionLink[];
	onClick: (arg: string) => void;
	currSectionName: string | undefined;
}) {
	return (
		<section className='flex gap-[2.5vw] mb-2'>
			{allSectionNames.map(({ searchParamsName, displayedName }) => (
				<button
					key={searchParamsName}
					className={clsx(
						'hover:text-white font-bold text-defaultText duration-200',
						{
							' !text-white': searchParamsName === currSectionName
						}
					)}
					onClick={() => onClick(searchParamsName)}>
					{displayedName}
				</button>
			))}
		</section>
	);
}

export function NavigationUI({
	onMouseMove,
	containerRef
}: {
	onMouseMove: MouseEventHandler;
	containerRef: React.Ref<HTMLSpanElement> | undefined;
}) {
	return (
		<nav className='flex justify-center'>
			<div
				className='flex flex-col items-center relative'
				onMouseMove={onMouseMove}>
				<SettingsSectionNames />
				<span
					ref={containerRef}
					id='bottom-bar'
					className='w-[108px] h-1.5 bg-white rounded-t-full absolute bottom-0 left-0'
				/>
			</div>
		</nav>
	);
}
