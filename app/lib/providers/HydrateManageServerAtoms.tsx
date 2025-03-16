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

export default function HydrateManageServerAtoms({
	settingsData,
	children
}: {
	settingsData: SettingsType;
	children: ReactNode;
}) {
	const useSectionName = (settingsData: SettingsType) => {
		const [sectionName, setSectionName] = useQueryState('section-name'),
			settingsSectionName = settingsData[0].name.toLowerCase();

		if (!sectionName) setSectionName(settingsSectionName);

		return sectionName || '';
	};

	const sectionName = useSectionName(settingsData);

	useHydrateAtoms([
		[LAST_SERVER_SETTINGS_ATOM, settingsData],
		[newServerSettingsAtom, settingsData],
		[sectionNameAtom, sectionName]
	]);

	return <>{children}</>;
}
