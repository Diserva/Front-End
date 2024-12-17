'use client';

import { ReactNode } from 'react';
import { useHydrateAtoms } from 'jotai/utils';
import { PrimitiveAtom } from 'jotai';
import { userAtom } from '../jotai/userAtoms';
import { HydrationDataList } from '@/app/main/layout';
import { guildsAtom } from '../jotai/dashboardAtoms';

export default function HydrateAtoms({
	children,
	hydrationDataList: { userInitState, dashboardInitState }
}: {
	children: ReactNode;
	hydrationDataList: HydrationDataList;
}) {
	useHydrateAtoms([
		[userAtom, userInitState],
		[guildsAtom, dashboardInitState]
	]);

	return <>{children}</>;
}
