'use client';

import { ReactNode, useEffect } from 'react';
import { redirect } from 'next/navigation';
import { useSelector } from 'react-redux';
import { selectAuth, startAuth } from '../redux/userSlice';
import { store } from '../redux/store';

export default function AuthProtectionProvider({
	children
}: {
	children: ReactNode;
}) {
	const auth = useSelector(selectAuth);

	useEffect(() => {
		if (!auth) {
			store.dispatch(startAuth());
			redirect('/');
		}
	}, []);

	return <>{children}</>;
}
