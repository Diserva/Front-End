import { redirect } from 'next/navigation';

export default function initAuth() {
	redirect(process.env.DISCORD_AUTH_URL || '');
}
