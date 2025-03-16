'use client';

import { ReactNode } from 'react';
import { GuildsType } from '../axios/apiSchemas';
import { useHydrateAtoms } from 'jotai/utils';
import { guildsAtom, loadTimeAtom } from '../jotai/dashboardAtoms';

type DashboardHydrationDataList = {
	guilds: GuildsType;
	loadTime: string;
};

export default function HydrateDashboardAtoms({
	children,
	hydrationDataList: { guilds, loadTime }
}: {
	children: ReactNode;
	hydrationDataList: DashboardHydrationDataList;
}) {
	useHydrateAtoms([
		[guildsAtom, guilds],
		[loadTimeAtom, loadTime]
	]);

	return <>{children}</>;
}
