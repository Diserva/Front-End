'use client';

import getToken from './getToken';
import { useSearchParams } from 'next/navigation';
import { pipe } from 'fp-ts/lib/function';
import generateBody from './generateBody';
import { useEffect } from 'react';
import { getUser, writeUserInReduxAndLogin } from './getAndWriteUser';
import onSuccess from './onSuccess';

export default function page() {
	const startValue = useSearchParams().get('code') as string;

	useEffect(() => {
		pipe(
			startValue,
			generateBody,
			getToken,
			getUser,
			writeUserInReduxAndLogin,
			onSuccess
		);
	}, [startValue]);

	return (
		<div className='flex justify-center items-center h-screen w-full'>
			<h1 className='text-accent text-4xl'>Майже готово!</h1>
		</div>
	);
}
