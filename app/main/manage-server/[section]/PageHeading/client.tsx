'use client';

import {
	sectionNameAtom,
	sectionNamesListAtom
} from '@/app/lib/jotai/settingsAtom';
import { useAtom, useAtomValue } from 'jotai';
import { MouseEvent, useCallback, useLayoutEffect, useRef } from 'react';
import { NavigationUI } from './UI';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

function useNavigationHandlers() {
	const bottomBarRef = useRef<HTMLDivElement>(null);
	const xToRef = useRef<gsap.QuickToFunc | (() => void)>(() => {});
	const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

	const { contextSafe } = useGSAP({ scope: bottomBarRef });

	const getXParam = (el: HTMLButtonElement) => {
		const barLength = 108;
		return el.offsetLeft - (barLength - el.clientWidth) / 2;
	};

	const goToCurrSection = useCallback(() => {
		const currentSection = document.querySelector(
			'.currSectSelectorClass'
		) as HTMLButtonElement;
		if (currentSection) {
			xToRef.current(getXParam(currentSection));
		}
	}, []);


	useLayoutEffect(() => {
		if (bottomBarRef.current) {
			xToRef.current = contextSafe(
				gsap.quickTo(bottomBarRef.current, 'x', {
					duration: 0.8,
					ease: 'power3'
				})
			);
		}
		goToCurrSection();

	}, [contextSafe]);

	const onSectionNameHover = useCallback((e: MouseEvent<HTMLButtonElement>) => {
		if (timeoutRef.current) {
			clearTimeout(timeoutRef.current);
		}
		xToRef.current(getXParam(e.currentTarget));
	}, []);

	const onSectionNameMouseLeave = useCallback(() => {
		timeoutRef.current = setTimeout(goToCurrSection, 500);
	}, [goToCurrSection]);

	return { bottomBarRef, onSectionNameHover, onSectionNameMouseLeave };
}

export function Navigation() {
	const [currentSectionName, setSectionName] = useAtom(sectionNameAtom);
	const allSectionNames = useAtomValue(sectionNamesListAtom);
	const onSectionNameClick = useCallback(
		(nameInSearchParams: string) => setSectionName(nameInSearchParams),
		[setSectionName]
	);
	const { bottomBarRef, onSectionNameHover, onSectionNameMouseLeave } =
		useNavigationHandlers();

	return (
		<NavigationUI
			allSectionNames={allSectionNames}
			currSectionName={currentSectionName}
			onClick={onSectionNameClick}
			ref={bottomBarRef}
			onHover={onSectionNameHover}
			onMouseLeave={onSectionNameMouseLeave}
		/>
	);
}
