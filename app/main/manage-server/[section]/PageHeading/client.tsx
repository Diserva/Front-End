'use client';

import {
	sectionNameAtom,
	sectionNamesListAtom
} from '@/app/lib/jotai/settingsAtom';
import { useAtom, useAtomValue } from 'jotai';
import { MouseEvent, useCallback, useRef } from 'react';
import { NavigationUI, SettingsSectionNamesUI } from './UI';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

export function SettingsSectionNames() {
	const [currentSectionName, setSectionName] = useAtom(sectionNameAtom);
	const allSectionNames = useAtomValue(sectionNamesListAtom);
	const onSectionNameClick = useCallback(
		(nameInSearchParams: string) => setSectionName(nameInSearchParams),
		[]
	);

	return (
		<SettingsSectionNamesUI
			allSectionNames={allSectionNames}
			currSectionName={currentSectionName}
			onClick={onSectionNameClick}
		/>
	);
}

export function Navigation() {
	const container = useRef(null);
	const { contextSafe } = useGSAP({ scope: container });

	const xTo = contextSafe((arg: number) => {
		if (container.current) {
			gsap
				.quickTo(container.current, 'x', {
					duration: 0.6,
					ease: 'power3'
				})
				.call(null, arg);
		}
		return null;
	});

	const onMouseMove = (e: MouseEvent) => {
		const { left } = e.currentTarget?.getBoundingClientRect();
		const halfBarLength = 54;
		if (typeof xTo === 'function') {
			xTo(e.clientX - left - halfBarLength);
		}
	};

	return <NavigationUI onMouseMove={onMouseMove} containerRef={container} />;
}
