'use client';

import { ReactNode } from 'react';
import { UserType } from '../definitions/apiRequests';
import { useHydrateAtoms } from 'jotai/utils';
import { userAtom } from '../jotai/userAtoms';

export default function HydrateUserAtoms({
	children,
	hydrationDataList
}: {
	children: ReactNode;
	hydrationDataList: UserType;
}) {
	useHydrateAtoms([[userAtom, hydrationDataList]]);

	return <>{children}</>;
}
