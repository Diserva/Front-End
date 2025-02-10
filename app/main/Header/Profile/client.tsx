'use client';

import { userAtom, userAvatarUrl } from '@/app/lib/jotai/userAtoms';
import { useAtomValue } from 'jotai';
import { useState } from 'react';
import { AvatarSectionUI, BalanceUI, UsernameUI } from './UI';

export function Username() {
	const user = useAtomValue(userAtom);

	return <UsernameUI user={user} />;
}

export function AvatarSection() {
	const avatarUrl = useAtomValue(userAvatarUrl);

	return <AvatarSectionUI avatarUrl={avatarUrl} />;
}

export function Balance() {
	const [balance] = useState(0);
	const turnRedIf = balance === 0;

	return <BalanceUI turnRedIfBalanceEmpty={turnRedIf} />;
}
