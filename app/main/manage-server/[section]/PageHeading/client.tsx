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
	const currSectionRef = useRef<HTMLButtonElement>(null);
	const xToRef = useRef<gsap.QuickToFunc | ((x: number) => void)>(() => {});
	const timeoutRef = useRef<ReturnType<typeof setTimeout> | undefined>(
		undefined
	);

	const { contextSafe } = useGSAP({ scope: bottomBarRef });

	const getXParam = (el: HTMLButtonElement) => {
		const barLength = 108;
		return el.offsetLeft - (barLength - el.clientWidth) / 2;
	};

	const goToCurrSection = useCallback(() => {
		if (currSectionRef.current) {
			xToRef.current(getXParam(currSectionRef.current));
		}
	}, []);

	useLayoutEffect(() => {
		if (bottomBarRef.current) {
			xToRef.current = contextSafe(
				gsap.quickTo(bottomBarRef.current, 'x', {
					duration: 0.4,
					ease: 'power3'
				})
			);
		}

		goToCurrSection();

		return () => {
			if (timeoutRef.current) clearTimeout(timeoutRef.current);
		};
	}, [contextSafe]);

	const onSectionNameHover = useCallback((e: MouseEvent<HTMLButtonElement>) => {
		if (timeoutRef.current) clearTimeout(timeoutRef.current);
		xToRef.current(getXParam(e.currentTarget));
	}, []);

	const onSectionNameMouseLeave = useCallback(() => {
		timeoutRef.current = setTimeout(goToCurrSection, 500);
	}, [goToCurrSection]);

	return {
		bottomBarRef,
		currSectionRef,
		onSectionNameHover,
		onSectionNameMouseLeave
	};
}

export function Navigation() {
	const [currentSectionName, setSectionName] = useAtom(sectionNameAtom);
	const allSectionNames = useAtomValue(sectionNamesListAtom);
	const onSectionNameClick = (nameInSearchParams: string) =>
		setSectionName(nameInSearchParams);

	const {
		bottomBarRef,
		currSectionRef,
		onSectionNameHover,
		onSectionNameMouseLeave
	} = useNavigationHandlers();

	return (
		<NavigationUI
			allSectionNames={allSectionNames}
			currSectionName={currentSectionName}
			onClick={onSectionNameClick}
			ref={bottomBarRef}
			onHover={onSectionNameHover}
			onMouseLeave={onSectionNameMouseLeave}
			currSectionEl={currSectionRef}
		/>
	);
}
