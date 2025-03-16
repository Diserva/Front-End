'use client';

import { ReactNode } from 'react';
import { SettingsType } from '../axios/apiSchemas';
import { useHydrateAtoms } from 'jotai/utils';
import {
	LAST_SERVER_SETTINGS_ATOM,
	newServerSettingsAtom
} from '../jotai/settingsAtom';

export default function HydrateManageServerAtoms({
	settingsData,
	children
}: {
	settingsData: SettingsType;
	children: ReactNode;
}) {
	useHydrateAtoms([
		[LAST_SERVER_SETTINGS_ATOM, settingsData],
		[newServerSettingsAtom, settingsData]
	]);

	return <>{children}</>;
}
