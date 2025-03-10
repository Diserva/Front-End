import { Button } from '@/components/ui/button';
// import axios from 'axios';

export default function LoginUI() {
	return (
		<a href={process.env.NEXT_PUBLIC_DISCORD_AUTH_URL}>
			<Button id='login-btn' className='bg-blueAccent'>
				Login
			</Button>
		</a>
	);
}
