'use client';

import { useRouter } from 'next/router';
import getToken from '../lib/auth/getToken';
import { useSearchParams } from 'next/navigation';
import { pipe } from 'fp-ts/lib/function';
import generateBody from '../lib/auth/generateBody';
import consoleToken from '../lib/auth/consoleToken';

export default function page() {
	pipe(
		useSearchParams().get('code') as string,
		generateBody,
		getToken,
		consoleToken
	);

	return <div>Callback page</div>;
}
