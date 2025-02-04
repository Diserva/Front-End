'use client';

import { useHydrateAtoms } from 'jotai/utils';
import { ReactNode } from 'react';
import {
	AnyWritableAtom,
	AssignableHydrationList,
	HydrationList
} from '../definitions/atoms';

export default function HydrateAtoms({
	children,
	hydrationDataList
}: {
	children: ReactNode;
	hydrationDataList: HydrationList;
}) {
	useHydrateAtoms(hydrationDataList as AssignableHydrationList);

	return <>{children}</>;
}
