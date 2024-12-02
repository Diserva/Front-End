'use client';

import { ReactNode, useEffect } from 'react';
import { redirect } from 'next/navigation';

export default function AuthProtectionProvider({
	children
}: {
	children: ReactNode;
}) {
	useEffect(() => {
		if (localStorage.getItem('authenticated') !== 'true') {
			redirect(process.env.DISCORD_AUTH_URL || '');
		}
	});

	return <>{children}</>;
}
