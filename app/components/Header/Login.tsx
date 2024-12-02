'use client';

import { redirect } from 'next/navigation';
import { useCallback } from 'react';

export default function Login() {
	const onClick = useCallback(() => {
		redirect(process.env.DISCORD_AUTH_URL as string);
	}, []);
	return (
		<p
			className='bg-accent py-2 px-14 rounded-lg flex justify-center items-center'
			onClick={onClick}>
			login
		</p>
	);
}
