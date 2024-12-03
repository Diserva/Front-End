'use client';

import { redirect } from 'next/navigation';
import { useCallback } from 'react';

export default function Login() {
	// const onClick = useCallback(() => {
	// 	redirect(process.env.DISCORD_AUTH_URL as string);
	// }, []);
	return (
		<a
			className='bg-accent py-2 px-14 rounded-lg flex justify-center items-center'
			href={process.env.NEXT_PUBLIC_DISCORD_AUTH_URL as string}>
			login
		</a>
	);
}
