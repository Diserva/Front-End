"use client"

import { ReactNode } from 'react';
import { CookiesContext } from '../contexts/cookiesCtx';
import { cookies } from 'next/headers';

export default async function CookiesProvider({
	children
}: {
	children: ReactNode;
}) {
	const cookiesStore = cookies();

	return (
		<>
			<CookiesContext.Provider value={cookiesStore}>
				{children}
			</CookiesContext.Provider>
		</>
	);
}
