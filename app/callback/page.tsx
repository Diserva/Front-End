'use client';

import { useSearchParams } from 'next/navigation';
import { pipe } from 'fp-ts/lib/function';
import { useEffect } from 'react';
import { getToken, generateBody, getUser, onSuccess } from './page-utils';

export default function Page() {
	const startValue = useSearchParams().get('code') as string;

	useEffect(() => {
		pipe(startValue, generateBody, getToken, getUser, onSuccess);
	}, [startValue]);

	return (
		<div className='flex justify-center items-center h-screen w-full'>
			<h1 className='text-accent text-4xl'>Майже готово!</h1>
		</div>
	);
}
