'use client';

import { ReactNode } from 'react';
import { useHydrateAtoms } from 'jotai/utils';
import { userAtom } from '../jotai/userAtoms';
import { guildsAtom, loadTimeAtom } from '../jotai/dashboardAtoms';
import { HydrationDataList } from '../axios/deffered/dashboard';

export default function HydrateAtoms({
	children,
	hydrationDataList: {
		userInitState,
		dashboardInitState: { guilds, loadTime }
	}
}: {
	children: ReactNode;
	hydrationDataList: HydrationDataList;
}) {
	useHydrateAtoms([
		[userAtom, userInitState],
		[guildsAtom, guilds],
		[loadTimeAtom, loadTime]
	]);

	return <>{children}</>;
}
