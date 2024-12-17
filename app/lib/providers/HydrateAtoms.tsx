'use client';

import { ReactNode } from 'react';
import { useHydrateAtoms } from 'jotai/utils';
import { PrimitiveAtom } from 'jotai';
import { userAtom } from '../jotai/userAtoms';
import { HydrationDataList } from '@/app/main/layout';

export default function HydrateAtoms({
	children,
	hydrationDataList
}: {
	children: ReactNode;
	hydrationDataList: HydrationDataList;
}) {
	useHydrateAtoms([[userAtom, hydrationDataList.userInitState]]);

	return <>{children}</>;
}
