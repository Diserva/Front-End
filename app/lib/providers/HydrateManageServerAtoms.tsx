'use client';

import { ReactNode, useCallback } from 'react';
import { SettingsType } from '../axios/apiSchemas';
import { useHydrateAtoms } from 'jotai/utils';
import {
	LAST_SERVER_SETTINGS_ATOM,
	newServerSettingsAtom,
	sectionNameAtom
} from '../jotai/settingsAtom';
import { useQueryState } from 'nuqs';
import { useSearchParams } from 'next/navigation';

export default function HydrateManageServerAtoms({
	settingsData,
	children
}: {
	settingsData: SettingsType;
	children: ReactNode;
}) {
	const searchParams = useSearchParams();

	console.log(searchParams.get('section-name'));

	const sectionName =
		searchParams.get('section-name') || settingsData[0].name.toLowerCase();

	useHydrateAtoms([
		[LAST_SERVER_SETTINGS_ATOM, settingsData],
		[newServerSettingsAtom, settingsData],
		[sectionNameAtom, sectionName]
	]);

	return <>{children}</>;
}
