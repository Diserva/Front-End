'use client';

import { useRouter } from 'next/router';
import getToken from '../lib/auth/getToken';
import { useSearchParams } from 'next/navigation';
import { pipe } from 'fp-ts/lib/function';
import generateBody from '../lib/auth/generateBody';
import consoleToken from '../lib/auth/consoleToken';
import { useEffect } from 'react';

export default function page() {
	const startValue = useSearchParams().get('code') as string
	useEffect(() => {
		pipe(
			startValue,
			generateBody,
			getToken,
			consoleToken
		);
	}, [startValue]);

	return <div>Callback page</div>;
}
