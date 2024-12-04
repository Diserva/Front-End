'use client';

import getToken from './getToken';
import { useSearchParams } from 'next/navigation';
import { pipe } from 'fp-ts/lib/function';
import generateBody from './generateBody';
import { useEffect } from 'react';

export default function page() {
	const startValue = useSearchParams().get('code') as string;

	useEffect(() => {
		pipe(startValue, generateBody, getToken);
	}, [startValue]);

	return <div>Callback page</div>;
}
