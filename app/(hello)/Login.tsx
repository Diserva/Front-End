'use client';

import { useEffect, useState } from 'react';
import Button from './Button';

export default function Login() {
	const [discordAuthUrl, setDiscordAuthUrl] = useState('');

	useEffect(() => {
		setDiscordAuthUrl(process.env.NEXT_PUBLIC_DISCORD_AUTH_URL as string);
	}, []);

	return (
		<a href={discordAuthUrl}>
			<Button>Login</Button>
		</a>
	);
}
