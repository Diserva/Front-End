'use client';

import { useEffect, useState } from 'react';
import Button from '../components/utils/Button';

export default function Login() {
	const [discordAuthUrl, setDiscordAuthUrl] = useState('');

	useEffect(() => {
		setDiscordAuthUrl(process.env.NEXT_PUBLIC_DISCORD_AUTH_URL as string);
	}, []);

	return (
		<a href={discordAuthUrl}>
			<Button className='px-14'>Login</Button>
		</a>
	);
}
